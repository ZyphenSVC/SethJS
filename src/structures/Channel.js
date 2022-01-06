const {ChannelTypes} = require("../Constants");

/**
 * Channel properties
 * @property {String} id
 * @property {Number} type
 * @property {Guild} guild
 * @property {String} guild_id
 * @property {Number} position
 * @property {String} name
 * @property {String} topic
 * @property {Boolean} nsfw
 * @property {Number} bitrate
 */
module.exports = class Channel {
    constructor(data) {
        this.id = data.id;
        this.type = ChannelTypes(data.type);
        this.guild_id = data.guild_id;
        this.position = data.position;
        this.name = data.name;
        this.topic = data.topic;
        this.nsfw = data.nsfw;
        this.lastMessageID = data.last_message_id;
        this.bitrate = data.bitrate;
        this.userLimit = data.user_limit;
        this.rateLimitPerUser = data.rate_limit_per_user;
    }

    update(data) {
        this.name = data.name;
        this.type = ChannelTypes(data.type);
        this.topic = data.topic;
        this.nsfw = data.nsfw;
        this.lastMessageID = data.last_message_id;
        this.position = data.position;
        this.bitrate = data.bitrate;
        this.userLimit = data.user_limit;
        this.rateLimitPerUser = data.rate_limit_per_user;
    }
};
