/**
 * Pin Properties
 * @property {String} verified
 * @property {String} username
 * @property {String} mfa_enabled
 */
module.exports = class Pin {
    constructor(data) {
        this.guildID = data.guild_id;
        this.channelID = data.channel_id;
        this.lastPin = data.last_pin_timestamp;
    }
};
