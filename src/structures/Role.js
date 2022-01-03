/**
 * Role properties
 * @property {Guild} guild
 * @property {String} unicode_emoji
 * @property {Number} position
 * @property {String} permissions
 * @property {String} name
 * @property {Boolean} mentionable
 * @property {Boolean} managed
 * @property {String} id
 * @property {String} icon
 * @property {Boolean} hoist
 * @property {Number} color
 */
module.exports = class Role {
    constructor(data, guild) {
        this.guild = guild;
        this.unicode_emoji = data.unicode_emoji;
        this.position = data.position;
        this.permissions = data.permissions;
        this.name = data.name;
        this.mentionable = data.mentionable;
        this.managed = data.managed;
        this.id = data.id;
        this.hoist = data.hoist;
        this.color = data.color;
    }

    update(data) {
        this.unicode_emoji = data.unicode_emoji;
        this.position = data.position;
        this.permissions = data.permissions;
        this.name = data.name;
        this.mentionable = data.mentionable;
        this.managed = data.managed;
        this.id = data.id;
        this.hoist = data.hoist;
        this.color = data.color;
    }
};
