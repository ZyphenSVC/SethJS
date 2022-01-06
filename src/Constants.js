module.exports.Constants = {
    GATEWAY: "wss://gateway.discord.gg/?v=9&encoding=json",
    VERSION: 9
};

module.exports.Endpoints = {
    BASE_URL: "/api/v" + this.Constants.VERSION,
    CDN_URL: "https://cdn.discordapp.com",
    CLIENT_URL: "https://discord.com",
    ORIGINAL_INTERACTION_RESPONSE :            (appID, interactToken) => `/webhooks/${appID}/${interactToken}`,
    COMMAND :                              (applicationID, commandID) => `/applications/${applicationID}/commands/${commandID}`,
    COMMANDS :                                        (applicationID) => `/applications/${applicationID}/commands`,
    COMMAND_PERMISSIONS :         (applicationID, guildID, commandID) => `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}/permissions`,
    CHANNEL :                                                (chanID) => `/channels/${chanID}`,
    CHANNEL_BULK_DELETE :                                    (chanID) => `/channels/${chanID}/messages/bulk-delete`,
    CHANNEL_CALL_RING :                                      (chanID) => `/channels/${chanID}/call/ring`,
    CHANNEL_CROSSPOST :                               (chanID, msgID) => `/channels/${chanID}/messages/${msgID}/crosspost`,
    CHANNEL_FOLLOW :                                         (chanID) => `/channels/${chanID}/followers`,
    CHANNEL_INVITES :                                        (chanID) => `/channels/${chanID}/invites`,
    CHANNEL_MESSAGE_REACTION :              (chanID, msgID, reaction) => `/channels/${chanID}/messages/${msgID}/reactions/${reaction}`,
    CHANNEL_MESSAGE_REACTION_USER : (chanID, msgID, reaction, userID) => `/channels/${chanID}/messages/${msgID}/reactions/${reaction}/${userID}`,
    CHANNEL_MESSAGE_REACTIONS :                       (chanID, msgID) => `/channels/${chanID}/messages/${msgID}/reactions`,
    CHANNEL_MESSAGE :                                 (chanID, msgID) => `/channels/${chanID}/messages/${msgID}`,
    CHANNEL_MESSAGES :                                       (chanID) => `/channels/${chanID}/messages`,
    CHANNEL_MESSAGES_SEARCH :                                (chanID) => `/channels/${chanID}/messages/search`,
    CHANNEL_PERMISSION :                             (chanID, overID) => `/channels/${chanID}/permissions/${overID}`,
    CHANNEL_PERMISSIONS :                                    (chanID) => `/channels/${chanID}/permissions`,
    CHANNEL_PIN :                                     (chanID, msgID) => `/channels/${chanID}/pins/${msgID}`,
    CHANNEL_PINS :                                           (chanID) => `/channels/${chanID}/pins`,
    CHANNEL_RECIPIENT :                             (groupID, userID) => `/channels/${groupID}/recipients/${userID}`,
    CHANNEL_TYPING :                                         (chanID) => `/channels/${chanID}/typing`,
    CHANNEL_WEBHOOKS :                                       (chanID) => `/channels/${chanID}/webhooks`,
    CHANNELS :                                                           "/channels",
    CUSTOM_EMOJI_GUILD :                                    (emojiID) => `/emojis/${emojiID}/guild`,
    DISCOVERY_CATEGORIES :                                               "/discovery/categories",
    DISCOVERY_VALIDATION :                                               "/discovery/valid-term",
    GATEWAY :                                                            "/gateway",
    GATEWAY_BOT :                                                        "/gateway/bot",
    GUILD :                                                 (guildID) => `/guilds/${guildID}`,
    GUILD_AUDIT_LOGS :                                      (guildID) => `/guilds/${guildID}/audit-logs`,
    GUILD_BAN :                                   (guildID, memberID) => `/guilds/${guildID}/bans/${memberID}`,
    GUILD_BANS :                                            (guildID) => `/guilds/${guildID}/bans`,
    GUILD_CHANNELS :                                        (guildID) => `/guilds/${guildID}/channels`,
    GUILD_COMMAND :               (applicationID, guildID, commandID) => `/applications/${applicationID}/guilds/${guildID}/commands/${commandID}`,
    GUILD_COMMAND_PERMISSIONS :                    (applicationID, guildID) => `/applications/${applicationID}/guilds/${guildID}/commands/permissions`,
    GUILD_COMMANDS :                         (applicationID, guildID) => `/applications/${applicationID}/guilds/${guildID}/commands`,
    GUILD_DISCOVERY :                                       (guildID) => `/guilds/${guildID}/discovery-metadata`,
    GUILD_DISCOVERY_CATEGORY :                  (guildID, categoryID) => `/guilds/${guildID}/discovery-categories/${categoryID}`,
    GUILD_EMOJI :                                  (guildID, emojiID) => `/guilds/${guildID}/emojis/${emojiID}`,
    GUILD_EMOJIS :                                          (guildID) => `/guilds/${guildID}/emojis`,
    GUILD_INTEGRATION :                             (guildID, inteID) => `/guilds/${guildID}/integrations/${inteID}`,
    GUILD_INTEGRATION_SYNC :                        (guildID, inteID) => `/guilds/${guildID}/integrations/${inteID}/sync`,
    GUILD_INTEGRATIONS :                                    (guildID) => `/guilds/${guildID}/integrations`,
    GUILD_INVITES :                                         (guildID) => `/guilds/${guildID}/invites`,
    GUILD_VANITY_URL :                                      (guildID) => `/guilds/${guildID}/vanity-url`,
    GUILD_MEMBER :                                (guildID, memberID) => `/guilds/${guildID}/members/${memberID}`,
    GUILD_MEMBER_NICK :                           (guildID, memberID) => `/guilds/${guildID}/members/${memberID}/nick`,
    GUILD_MEMBER_ROLE :                   (guildID, memberID, roleID) => `/guilds/${guildID}/members/${memberID}/roles/${roleID}`,
    GUILD_MEMBERS :                                         (guildID) => `/guilds/${guildID}/members`,
    GUILD_MEMBERS_SEARCH :                                  (guildID) => `/guilds/${guildID}/members/search`,
    GUILD_MESSAGES_SEARCH :                                 (guildID) => `/guilds/${guildID}/messages/search`,
    GUILD_PREVIEW :                                         (guildID) => `/guilds/${guildID}/preview`,
    GUILD_PRUNE :                                           (guildID) => `/guilds/${guildID}/prune`,
    GUILD_ROLE :                                    (guildID, roleID) => `/guilds/${guildID}/roles/${roleID}`,
    GUILD_ROLES :                                           (guildID) => `/guilds/${guildID}/roles`,
    GUILD_STICKER :                              (guildID, stickerID) => `/guilds/${guildID}/stickers/${stickerID}`,
    GUILD_STICKERS :                                        (guildID) => `/guilds/${guildID}/stickers`,
    GUILD_TEMPLATE :                                           (code) => `/guilds/templates/${code}`,
    GUILD_TEMPLATES :                                       (guildID) => `/guilds/${guildID}/templates`,
    GUILD_TEMPLATE_GUILD :                            (guildID, code) => `/guilds/${guildID}/templates/${code}`,
    GUILD_VOICE_REGIONS :                                   (guildID) => `/guilds/${guildID}/regions`,
    GUILD_WEBHOOKS :                                        (guildID) => `/guilds/${guildID}/webhooks`,
    GUILD_WELCOME_SCREEN :                                  (guildID) => `/guilds/${guildID}/welcome-screen`,
    GUILD_WIDGET :                                          (guildID) => `/guilds/${guildID}/widget.json`,
    GUILD_WIDGET_SETTINGS :                                 (guildID) => `/guilds/${guildID}/widget`,
    GUILD_VOICE_STATE :                               (guildID, user) => `/guilds/${guildID}/voice-states/${user}`,
    GUILDS :                                                             "/guilds",
    INTERACTION_RESPOND :                 (interactID, interactToken) => `/interactions/${interactID}/${interactToken}/callback`,
    INVITE :                                               (inviteID) => `/invites/${inviteID}`,
    OAUTH2_APPLICATION :                                      (appID) => `/oauth2/applications/${appID}`,
    STAGE_INSTANCE :                                      (channelID) => `/stage-instances/${channelID}`,
    STAGE_INSTANCES :                                                    "/stage-instances",
    STICKER :                                             (stickerID) => `/stickers/${stickerID}`,
    STICKER_PACKS :                                                      "/sticker-packs",
    THREAD_MEMBER :                               (channelID, userID) => `/channels/${channelID}/thread-members/${userID}`,
    THREAD_MEMBERS :                                      (channelID) => `/channels/${channelID}/thread-members`,
    THREAD_WITH_MESSAGE :                          (channelID, msgID) => `/channels/${channelID}/messages/${msgID}/threads`,
    THREAD_WITHOUT_MESSAGE :                              (channelID) => `/channels/${channelID}/threads`,
    THREADS_ACTIVE :                                      (channelID) => `/channels/${channelID}/threads/active`,
    THREADS_ARCHIVED :                              (channelID, type) => `/channels/${channelID}/threads/archived/${type}`,
    THREADS_ARCHIVED_JOINED :                             (channelID) => `/channels/${channelID}/users/@me/threads/archived/private`,
    THREADS_GUILD_ACTIVE :                                  (guildID) => `/guilds/${guildID}/threads/active`,
    USER :                                                   (userID) => `/users/${userID}`,
    USER_BILLING :                                           (userID) => `/users/${userID}/billing`,
    USER_BILLING_PAYMENTS :                                  (userID) => `/users/${userID}/billing/payments`,
    USER_BILLING_PREMIUM_SUBSCRIPTION :                      (userID) => `/users/${userID}/billing/premium-subscription`,
    USER_CHANNELS :                                          (userID) => `/users/${userID}/channels`,
    USER_CONNECTIONS :                                       (userID) => `/users/${userID}/connections`,
    USER_CONNECTION_PLATFORM :                 (userID, platform, id) => `/users/${userID}/connections/${platform}/${id}`,
    USER_GUILD :                                    (userID, guildID) => `/users/${userID}/guilds/${guildID}`,
    USER_GUILDS :                                            (userID) => `/users/${userID}/guilds`,
    USER_MFA_CODES :                                         (userID) => `/users/${userID}/mfa/codes`,
    USER_MFA_TOTP_DISABLE :                                  (userID) => `/users/${userID}/mfa/totp/disable`,
    USER_MFA_TOTP_ENABLE :                                   (userID) => `/users/${userID}/mfa/totp/enable`,
    USER_NOTE :                                    (userID, targetID) => `/users/${userID}/note/${targetID}`,
    USER_PROFILE :                                           (userID) => `/users/${userID}/profile`,
    USER_RELATIONSHIP :                               (userID, relID) => `/users/${userID}/relationships/${relID}`,
    USER_SETTINGS :                                          (userID) => `/users/${userID}/settings`,
    USERS :                                                              "/users",
    VOICE_REGIONS :                                                      "/voice/regions",
    WEBHOOK :                                                (hookID) => `/webhooks/${hookID}`,
    WEBHOOK_MESSAGE :                          (hookID, token, msgID) => `/webhooks/${hookID}/${token}/messages/${msgID}`,
    WEBHOOK_SLACK :                                          (hookID) => `/webhooks/${hookID}/slack`,
    WEBHOOK_TOKEN :                                   (hookID, token) => `/webhooks/${hookID}/${token}`,
    WEBHOOK_TOKEN_SLACK :                             (hookID, token) => `/webhooks/${hookID}/${token}/slack`,
    ACHIEVEMENT_ICON :           (applicationID, achievementID, icon) => `/app-assets/${applicationID}/achievements/${achievementID}/icons/${icon}`,
    APPLICATION_ASSET :                        (applicationID, asset) => `/app-assets/${applicationID}/${asset}`,
    APPLICATION_ICON :                          (applicationID, icon) => `/app-icons/${applicationID}/${icon}`,
    BANNER :                                    (guildOrUserID, hash) => `/banners/${guildOrUserID}/${hash}`,
    CHANNEL_ICON :                                 (chanID, chanIcon) => `/channel-icons/${chanID}/${chanIcon}`,
    CUSTOM_EMOJI :                                          (emojiID) => `/emojis/${emojiID}`,
    DEFAULT_USER_AVATAR :                         (userDiscriminator) => `/embed/avatars/${userDiscriminator}`,
    GUILD_AVATAR :                     (guildID, userID, guildAvatar) => `/guilds/${guildID}/users/${userID}/avatars/${guildAvatar}`,
    GUILD_DISCOVERY_SPLASH :          (guildID, guildDiscoverySplash) => `/discovery-splashes/${guildID}/${guildDiscoverySplash}`,
    GUILD_ICON :                                 (guildID, guildIcon) => `/icons/${guildID}/${guildIcon}`,
    GUILD_SPLASH :                             (guildID, guildSplash) => `/splashes/${guildID}/${guildSplash}`,
    ROLE_ICON :                                    (roleID, roleIcon) => `/role-icons/${roleID}/${roleIcon}`,
    TEAM_ICON :                                    (teamID, teamIcon) => `/team-icons/${teamID}/${teamIcon}`,
    USER_AVATAR :                                (userID, userAvatar) => `/avatars/${userID}/${userAvatar}`,
    MESSAGE_LINK :                    (guildID, channelID, messageID) => `/channels/${guildID}/${channelID}/${messageID}`
};

module.exports.GatewayOPCodes = {
    DISPATCH              : 0, EVENT : 0, // [DEPRECATED]
    HEARTBEAT             : 1,
    IDENTIFY              : 2,
    PRESENCE_UPDATE       : 3, STATUS_UPDATE : 3, // [DEPRECATED]
    VOICE_STATE_UPDATE    : 4,
    VOICE_SERVER_PING     : 5,
    RESUME                : 6,
    RECONNECT             : 7,
    REQUEST_GUILD_MEMBERS : 8, GET_GUILD_MEMBERS : 8, // [DEPRECATED]
    INVALID_SESSION       : 9,
    HELLO                 : 10,
    HEARTBEAT_ACK         : 11,
    SYNC_GUILD            : 12,
    SYNC_CALL             : 13
};

module.exports.ChannelTypes = (id) => {
    switch(id){
        case 0:
            return "GUILD_TEXT";
        case 1:
            return "DM";
        case 2:
            return "GUILD_VOICE";
        case 3:
            return "GROUP_DM";
        case 4:
            return "GUILD_CATEGORY";
        case 5:
            return "GUILD_NEWS";
        case 6:
            return "GUILD_STORE";
        case 10:
            return "GUILD_NEWS_THREAD";
        case 11:
            return "GUILD_PUBLIC_THREAD";
        case 12:
            return "GUILD_PRIVATE_THREAD";
        case 13:
            return "GUILD_STAGE_VOICE";
    }
};
