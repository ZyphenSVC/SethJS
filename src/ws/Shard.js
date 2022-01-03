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
            this.client.emit("ws", "Connecting");
        });
        this.ws.on("message", async (data) => {
            try {
                const packet = JSON.parse(data.toString());
                // console.log(packet);
                this.onPacket(packet);
            } catch(err) {
                this.client.emit("ws", err);
            }
        });
        this.ws.on("error", (err) => {
            this.client.emit("ws", err);
        });
        this.ws.on("close", (code, reason) => {
            this.client.emit("ws", code, reason);
        });
    }

    /**
     * Acts on packet information
     * @param {Object} packet The packet
     */
    async onPacket(packet) {
        switch(packet.op) {
            case GatewayOPCodes.DISPATCH:
                this.client.emit("raw", "Event Registered");
                new (handlers[packet.t])(this.client, packet);
                break;
            case GatewayOPCodes.HEARTBEAT:
                this.client.emit("raw", "Heartbeat");
                this.heartbeat();
                break;
            case GatewayOPCodes.INVALID_SESSION:
                this.client.emit("warn", "Invalid session, reidentifying");
                this.identify();
                break;
            case GatewayOPCodes.HELLO:
                this.identify();
                this.heartbeat();
                this.client.emit("raw", "Heartbeat Signature Registration");
                break;
            case GatewayOPCodes.HEARTBEAT_ACK:
                break;
            default:
                this.client.emit("raw", "Miscellaneous packet");
                break;
        }
    }
};
