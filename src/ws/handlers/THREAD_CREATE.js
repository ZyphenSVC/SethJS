module.exports = class THREAD_CREATE {
    constructor(client, payload) {
        client.emit("threadCreate", client, client.threads.add(payload.d, payload.d.id));
        console.log(client.threads);
    }
};
