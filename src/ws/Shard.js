const {WebSocket} = require("ws");
const {handlers} = require("./handlers");

module.exports = class Shard {
    constructor(id, client) {
        this.id = id;
        this.client = client;
        this.ws = new WebSocket(this.client.Constants.Constants.GATEWAY);
        this.seq = 0;
        this.ready = false;
    }

    heartbeat() {
        setInterval(() => {
            this.sendWS(this.client.Constants.GatewayOPCodes.HEARTBEAT, Date.now());
        }, 41250);
    }

    identify() {
        this.sendWS(this.client.Constants.GatewayOPCodes.IDENTIFY, {
            token: this.client.token,
            properties: {
                $os: process.platform,
                $browser: "Seth",
                $device: "Seth"
            },
            compress: this.client.options.compress,
            large_threshold: this.client.options.largeThreshold,
            shard: [this.id, this.client.options.maxShards],
            intents: 513
        });
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
                if(packet.s > this.seq + 1) {
                    this.client.emit("warn", "Missed packet sequence, resuming", this.id);
                    this.resume();
                } else if(packet.s) {
                    this.seq = packet.s;
                }
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
            this.client.emit("shardDisconnect", this.id);
        });
    }

    /**
     * Acts on packet information
     * @param {Object} packet The packet
     */
    async onPacket(packet) {
        switch(packet.op) {
            case this.client.Constants.GatewayOPCodes.DISPATCH:
                this.client.emit("raw", "Event Registered");
                new (handlers[packet.t])(this.client, packet, this.id);
                break;
            case this.client.Constants.GatewayOPCodes.HEARTBEAT:
                this.client.emit("raw", "Heartbeat");
                this.heartbeat();
                break;
            case this.client.Constants.GatewayOPCodes.RECONNECT:
                this.reconnect();
                break;
            case this.client.Constants.GatewayOPCodes.INVALID_SESSION:
                this.client.emit("warn", "Invalid session, reidentifying");
                this.identify();
                break;
            case this.client.Constants.GatewayOPCodes.HELLO:
                this.identify();
                this.heartbeat();
                this.ready = true;
                this.client.emit("raw", "Heartbeat Signature Registration");
                this.client.emit("shardReady", this.id);
                break;
            case this.client.Constants.GatewayOPCodes.HEARTBEAT_ACK:
                break;
            default:
                this.client.emit("raw", "Miscellaneous packet");
                break;
        }
    }

    reconnect() {
        this.ws.removeListener("close");
        this.ws.close(0, "reconnect");
        this.client.shards.connect(this);
    }

    resume() {
        this.sendWS(this.client.Constants.GatewayOPCodes.RESUME, {
            token: this.client.token,
            session_id: this.client.ready.session_id,
            seq: this.seq
        });
        this.client.emit("shardResume", this.id);
    }

    sendWS(op, data) {
        data = JSON.stringify({op: op, d: data});
        this.ws.send(data);
        this.client.emit("ws", data, this.id);
    }
};
