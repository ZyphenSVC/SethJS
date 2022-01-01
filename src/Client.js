const EventEmitter = require("events");
const Shard = require("./ws/Shard");

module.exports = class Client extends EventEmitter {
    constructor(token) {
        super();
        if(!token && "DISCORD_TOKEN" in process.env) {
            this.token = process.env.DISCORD_TOKEN;
        } else {
            this.token = token;
        }
        this._ready = {};
        this._user = null;
        this._message = null;
        this.shards = new Shard(this);
    }

    connect() {
        this.shards.initWS();
    }

    get message() {
        return this._message;
    }

    set message(message) {
        this._message = message;
    }

    get ready() {
        return this._ready;
    }

    set ready(ready) {
        this._ready = ready;
    }

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }
};
