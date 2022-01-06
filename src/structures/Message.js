/**
 * Message properties
 * @property {Number} type
 * @property {Boolean} tts
 * @property {String} timestamp
 * @property {Object} referenced_message
 * @property {Boolean} pinned
 * @property {String} nonce
 * @property {Array} mentions
 * @property {Array} mention_roles
 * @property {Boolean} mention_everyone
 * @property {String} id
 * @property {Array} embeds
 * @property {String} edited_timestamp
 * @property {String} content
 * @property {String} channel_id
 * @property {User} author
 * @property {String} guild_id
 * @property {Member} member
 */
module.exports = class Message {
    constructor(client, data) {
        this.type = data.type;
        this.tts = data.tts;
        this.timestamp = data.timestamp;
        this.referedMessage = data.referenced_message;
        this.pinned = data.pinned;
        this.nonce = data.nonce;
        this.mentions = data.mentions;
        this.mention_roles = data.mention_roles;
        this.mention_everyone = data.mention_everyone;
        this.id = data.id;
        this.embeds = data.embeds;
        this.editedTime = data.edited_timestamp;
        this.content = data.content;
        this.guildID = data.guild_id;
        this.channel = client.channels.get(data.channel_id);
        this.author = client.user.add(data.author, data.author.id);
        this.member = data.member;
    }
};
