/**
 * User Properties
 * @property {Boolean} verified
 * @property {String} username
 * @property {Boolean} mfa_enabled
 * @property {String} id
 * @property {Number} flags
 * @property {String | null} email
 * @property {String} discriminator
 * @property {Boolean} bot
 * @property {String} avatar
 */
module.exports = class User {
    constructor(data) {
        this.verified = data.verified;
        this.username = data.username;
        this.mfa_enabled = data.mfa_enabled;
        this.id = data.id;
        this.flags = data.flags;
        this.email = data.email;
        this.discriminator = data.discriminator;
        this.bot = data.bot;
        this.avatar = data.avatar;
    }

    update(data) {
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.avatar = data.avatar;
    }
};
