module.exports = class GUILD_CREATE {
    constructor(client, payload) {
        this.client = client;
        this.client.guild = payload.d;
        this.client.emit("ready", client, this.client.guild);
    }
};
