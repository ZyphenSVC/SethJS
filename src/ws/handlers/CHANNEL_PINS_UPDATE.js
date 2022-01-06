const Pin = require("../../structures/Pin");

module.exports = class CHANNEL_PINS_UPDATE {
    constructor(client, payload) {
        client.emit("channelPins", client, new Pin(payload.d));
    }
};
