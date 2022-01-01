const EventEmitter = require("events");
const {WebSocket} = require("ws");
const {GatewayOPCodes, Constants} = require("../Constants");
const {handlers} = require("./handlers");

module.exports = class Shard extends EventEmitter {
    constructor(client) {
        super();
        this.client = client;
        this.ws = new WebSocket(Constants.GATEWAY);
    }

    heartbeat() {
        setInterval(() => {
            const heartbeat = JSON.stringify({
                op: GatewayOPCodes.HEARTBEAT,
                d: Date.now()
            });
            this.ws.send(heartbeat);
        }, 41250);
    }

    identify() {
        const identity = JSON.stringify({
            op: GatewayOPCodes.IDENTIFY,
            d: {
                token: this.client.token,
                intents: 513,
                properties: {
                    $os: process.platform,
                    $browser: "Seth",
                    $device: "Seth"
                }
            }
        });
        this.ws.send(identity);
    }

    /**
     * Catch all emittions from WebSocket
     */
    initWS() {
        this.ws.on("open", () => {
            console.log("Connecting");
        });
        this.ws.on("message", async (data) => {
            try {
                const packet = JSON.parse(data.toString());
                // console.log(packet);
                this.onPacket(packet);
            } catch(err) {
                console.log(err);
            }
        });
        this.ws.on("error", (err) => {
            console.log(err);
        });
        this.ws.on("close", (code, reason) => {
            console.log(code, reason);
        });
    }

    /**
     * Acts on packet information
     * @param {Object} packet The packet
     */
    async onPacket(packet) {
        switch(packet.op) {
            case GatewayOPCodes.DISPATCH:
                new (handlers[packet.t])(this.client, packet);
                break;
            case GatewayOPCodes.HEARTBEAT:
                this.heartbeat();
                break;
            case GatewayOPCodes.INVALID_SESSION:
                console.log("Invalid session, reidentifying");
                this.identify();
                break;
            case GatewayOPCodes.HELLO:
                this.identify();
                this.heartbeat();
                console.log("hello");
                break;
            case GatewayOPCodes.HEARTBEAT_ACK:
                break;
            default:
                console.log("random packet");
                break;
        }
    }
};
