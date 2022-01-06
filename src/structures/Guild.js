const Collection = require("../utils/Collection");
const Channel = require("./Channel");
const Member = require("./Member");
const Role = require("./Role");

/**
 * Guild properties
 * @property {Number} verification_level
 * @property {String} preferred_locale
 * @property {String} name
 * @property {Array} voice_states
 * @property {String | null} description
 * @property {Number} member_count
 * @property {Array} guild_scheduled_events
 * @property {String | null} splash
 * @property {Number} premium_subscription_count
 * @property {Number} max_members
 * @property {Array} roles
 * @property {Number} default_message_notifications
 * @property {String | null} rules_channel_id
 * @property {String | null} system_channel_id
 * @property {String} joined_at
 * @property {Array} stage_instances
 * @property {Boolean} nsfw
 * @property {String | null} afk_channel_id
 * @property {String | null} vanity_url_code
 * @property {String} owner_id
 * @property {String | null} discovery_splash
 * @property {Array} members
 * @property {Array} threads
 * @property {Number} system_channel_flags
 * @property {String | null} banner
 * @property {String | null} public_updates_channel_id
 * @property {Array} stickers
 * @property {Number} explicit_content_filter
 * @property {String} id
 * @property {String} icon
 * @property {Number} nsfw_level
 * @property {Array} emojis
 * @property {String | null} application_id
 * @property {Array} features
 * @property {Channel} channels
 * @property {Number} mfa_level
 * @property {Array} presences
 * @property {Number} premium_tier
 * @property {Number} afk_timeout
 * @property {Boolean} premium_progress_bar_enabled
 * @property {Array} embedded_activities
 */
module.exports = class Guild {
    constructor(data) {
        this.verification_level = data.verification_level;
        this.preferred_locale = data.preferred_locale;
        this.name = data.name;
        this.voice_states = data.voice_states;
        this.description = data.description;
        this.member_count = data.member_count;
        this.guild_scheduled_events = data.guild_scheduled_events;
        this.splash = data.splash;
        this.premium_subscription_count = data.premium_subscription_count;
        this.max_members = data.max_members;
        this.roles = new Collection(Role);
        this.default_message_notifications = data.default_message_notifications;
        this.rules_channel_id = data.rules_channel_id;
        this.system_channel_id = data.system_channel_id;
        this.joined_at = data.joined_at;
        this.stage_instances = data.stage_instances;
        this.nsfw = data.nsfw;
        this.afk_channel_id = data.afk_channel_id;
        this.vanity_url_code = data.vanity_url_code;
        this.owner_id = data.owner_id;
        this.discovery_splash = data.discovery_splash;
        this.members = new Collection(Member);
        this.threads = data.threads;
        this.system_channel_flags = data.system_channel_flags;
        this.banner = data.banner;
        this.public_updates_channel_id = data.public_updates_channel_id;
        this.stickers = data.stickers;
        this.explicit_content_filter = data.explicit_content_filter;
        this.id = data.id;
        this.icon = data.icon;
        this.nsfw_level = data.nsfw_level;
        this.emojis = data.emojis;
        this.application_id = data.application_id;
        this.features = data.features;
        this.channels = new Collection(Channel);
        this.mfa_level = data.mfa_level;
        this.presences = data.presences;
        this.premium_tier = data.premium_tier;
        this.afk_timeout = data.afk_timeout;
        this.premium_progress_bar_enabled = data.premium_progress_bar_enabled;
        this.embedded_activities = data.embedded_activities;

        for(const channel of data.channels) {
            this.channels.add(channel, channel.id);
        }
        for(const member of data.members) {
            this.members.add(new Member(member, this), data.members.user.id);
        }
        for(const role of data.roles) {
            this.roles.add(new Role(role, this), data.roles.id);
        }
    }

    update(data) {
        this.verification_level = data.verification_level;
        this.preferred_locale = data.name;
        this.name = data.name;
        this.voice_states = data.voice_states;
        this.description = data.description;
        this.member_count = data.member_count;
        this.splash = data.splash;
        this.roles = data.roles;
        this.owner_id = data.owner_id;
        this.members = data.members;
        this.icon = data.icon;
        this.emojis = data.emojis;
        this.channels = data.channels;
    }
    // update(data) {
    //     this.verification_level = data.verification_level !== undefined ? data.verification_level : this.verification_level;
    //     this.preferred_locale = data.preferred_locale !== undefined ? data.preferred_locale : this.preferred_locale;
    //     this.name = data.name !== undefined ? data.name : this.name;
    //     this.voice_states = data.voice_states !== undefined ? data.voice_states : this.voice_states;
    //     this.description = data.description !== undefined ? data.description : this.description;
    //     this.member_count = data.member_count !== undefined ? data.member_count : this.member_count;
    //     this.splash = data.splash !== undefined ? data.splash : this.splash;
    //     this.roles = data.roles !== undefined ? data.roles : this.roles;
    //     this.owner_id = data.owner_id !== undefined ? data.owner_id : this.owner_id;
    //     this.members = data.members !== undefined ? data.members : this.members;
    //     this.icon = data.icon !== undefined ? data.icon : this.icon;
    //     this.emojis = data.emojis !== undefined ? data.emojis : this.emojis;
    //     this.channels = data.channels !== undefined ? data.channels : this.channels;
    // }

    // addMember(data. guild) {
    //     this.members.add(data, this);
    // }
};
