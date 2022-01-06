module.exports = class CHANNEL_UPDATE {
    constructor(client, payload) {
        client.emit("channelUpdate", client, client.messages.add(payload.d, payload.d.id));
    }
};
