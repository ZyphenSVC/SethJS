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
    constructor(data, guild) {
        this.id = data.id;
        this.type = data.type;
        this.guild = guild;
        this.guild_id = guild.id;
        this.position = data.position;
        this.name = data.name;
        this.topic = data.topic;
        this.nsfw = data.nsfw;
        this.bitrate = data.bitrate;
    }

    update(data) {
        this.name = data.name;
        this.topic = data.topic;
        this.nsfw = data.nsfw;
        this.position = data.position;
        this.bitrate = data.bitrate;
    }
};
