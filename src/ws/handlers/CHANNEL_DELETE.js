module.exports = class CHANNEL_DELETE {
    constructor(client, payload) {
        client.emit("channelDelete", client, client.channels.remove(payload.d.id));
    }
};
