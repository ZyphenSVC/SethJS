module.exports = class THREAD_UPDATE {
    constructor(client, payload) {
        client.emit("threadUpdate", client, client.threads.add(payload.d, payload.d.id));
    }
};
