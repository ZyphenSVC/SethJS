module.exports.handlers = Object.fromEntries([
    ["CHANNEL_CREATE", require("./CHANNEL_CREATE")],
    ["CHANNEL_DELETE", require("./CHANNEL_DELETE")],
    ["CHANNEL_PINS_UPDATE", require("./CHANNEL_PINS_UPDATE")],
    ["CHANNEL_UPDATE", require("./CHANNEL_UPDATE")],
    ["GUILD_CREATE", require("./GUILD_CREATE")],
    ["GUILD_MEMBER_UPDATE", require("./GUILD_MEMBER_UPDATE")],
    ["MESSAGE_CREATE", require("./MESSAGE_CREATE")],
    ["MESSAGE_UPDATE", require("./MESSAGE_UPDATE")],
    ["READY", require("./READY")],
    ["THREAD_CREATE", require("./THREAD_CREATE")],
    ["THREAD_DELETE", require("./THREAD_DELETE")],
    ["THREAD_UPDATE", require("./THREAD_UPDATE")]
]);
