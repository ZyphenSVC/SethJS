/**
 * Thread Properties
 * @property {Boolean} locked
 * @property {Number} archiveDuration
 * @property {Boolean} archived
 * @property {String} archiveTimestamp
 */
module.exports = class Thread {
    constructor(data) {
        this.type = data.type;
        this.locked = data.thread_metadata.locked;
        this.archiveDuration = data.thread_metadata.auto_archive_duration;
        this.archived = data.thread_metadata.archived;
        this.archiveTimestamp = data.thread_metadata.archive_timestamp;
        this.rateLimit = data.rate_limit_per_user;
        this.parentID = data.parent_id;
        this.ownerID = data.owner_id;
        this.name = data.name;
        this.messageCount = data.message_count;
        this.memberCount = data.member_count;
        this.lastMessageID = data.last_message_id;
        this.guildID = data.guild_id;
    }
};
