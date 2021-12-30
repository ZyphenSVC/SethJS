const EventEmitter = require("events");
const Shard = require("./ws/Shard");

module.exports = class Client extends EventEmitter {
    constructor(token) {
        super();
        this.token = token;
        this.shards = new Shard(this);
    }
};
