module.exports = class GUILD_CREATE {
    constructor(client, payload) {
        for(const channel of payload.d.channels) {
            client.channels.add(channel, channel.id);
        }
        client.guild.add(payload.d, payload.d.id);
        client.emit("guildCreate", client, client.guild.get(payload.d.id));
    }
};
