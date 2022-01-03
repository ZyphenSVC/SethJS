const Message = require("../../structures/Message");

module.exports = class MESSAGE_CREATE {
    constructor(client, payload) {
        this.client = client;
        this.message = new Message(payload.d);
        this.client.emit("messageCreate", this.message);
    }
};
