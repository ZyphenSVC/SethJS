/**
 * Role properties
 * @property {Guild} v
 * @property {String} userSettings
 * @property {Number} sessionID
 * @property {String} relationships
 * @property {String} privateChannels
 * @property {Boolean} presences
 * @property {Boolean} guilds
 * @property {String} guild_join_requests
 * @property {String} geo_ordered_rtc_regions
 * @property {Boolean} application
 * @property {Number} _trace
 * @property {String} id
 */
module.exports = class Ready {
    constructor(data, id) {
        this.v = data.v;
        this.userSettings = data.user_settings;
        this.sessionID = data.session_id;
        this.relationships = data.relationships;
        this.privateChannels = data.private_channels;
        this.presences = data.presences;
        this.guilds = data.guilds;
        this.guild_join_requests = data.guild_join_requests;
        this.geo_ordered_rtc_regions = data.geo_ordered_rtc_regions;
        this.application = data.application;
        this._trace = data._trace;
        this.id = id;
    }
};
