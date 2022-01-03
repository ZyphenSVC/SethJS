/**
 * Member properties
 * @property {Guild} guild
 * @property {Array} roles
 * @property {String} nick
 * @property {Boolean} mute
 * @property {String} property
 * @property {Boolean} deaf
 */
module.exports = class Member {
    constructor(data, guild) {
        this.guild = guild;
        this.roles = data.roles;
        this.nick = data.nick;
        this.mute = data.mute;
        this.joined_at = data.joined_at;
        this.deaf = data.deaf;
    }

    update(data) {
        this.roles = data.roles;
        this.nick = data.nick;
        this.mute = data.mute;
        this.joined_at = data.joined_at;
        this.deaf = data.deaf;
    }
};
