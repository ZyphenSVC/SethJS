module.exports = class CHANNEL_CREATE {
    constructor(client, payload) {
        client.emit("channelCreate", client, client.channels.add(payload.d, payload.id));
    }
};
