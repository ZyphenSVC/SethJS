module.exports = class READY {
    constructor(client, payload, id) {
        client.ready.add(payload.d, id);
        client.user.add(payload.d.user, payload.d.user.id);
        client.readyCollSize = client.ready.size;
        if(client.readyCollSize == client.options.maxShards) {
            client.emit("ready", this, this.ready);
        }
    }
};
