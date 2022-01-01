module.exports = class MESSAGE_CREATE {
    constructor(client, payload) {
        this.client = client;
        this.client.message = payload.d;
        client.emit("messageCreate", this.client.message);
    }
};
