module.exports = class GUILD_CREATE {
    constructor(client, payload) {
        this.client = client;
        // this.client.guild.members.update(payload.d);
        this.client.emit("guildMemberUpdate", payload.d);
    }
};
