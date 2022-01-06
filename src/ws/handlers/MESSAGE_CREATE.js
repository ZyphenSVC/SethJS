module.exports = class MESSAGE_CREATE {
    constructor(client, payload) {
        client.emit("messageCreate", client, client.messages.add(payload.d, payload.d.id));
    }
};
