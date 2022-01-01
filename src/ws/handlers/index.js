module.exports.handlers = Object.fromEntries([
    ["GUILD_CREATE", require("./GUILD_CREATE")],
    ["READY", require("./READY")],
    ["GUILD_MEMBER_UPDATE", require("./GUILD_MEMBER_UPDATE")],
    ["MESSAGE_CREATE", require("./MESSAGE_CREATE")]
]);
