module.exports = class READY {
    constructor(client, payload) {
        this.client = client;
        this.client.ready = payload.d;
        this.client.user.add(payload.d.user);
        this.client.emit("ready", client, this.client.ready);
    }
};
