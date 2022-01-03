module.exports = class GUILD_CREATE {
    constructor(client, payload) {
        this.client = client;
        this.client.guild.add(payload.d);
        this.client.emit("guildCreate", client, this.client.guild.get(payload.d.id));
    }
};
