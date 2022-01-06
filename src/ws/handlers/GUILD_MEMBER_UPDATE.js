module.exports = class GUILD_MEMBER_UPDATE {
    constructor(client, payload) {
        this.client.emit("guildMemberUpdate", client.members.add(payload.d, payload.d.id));
    }
};
