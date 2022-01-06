module.exports = class THREAD_DELETE {
    constructor(client, payload) {
        client.emit("threadDelete", client, client.threads.remove(payload.d.id));
    }
};
