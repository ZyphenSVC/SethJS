const EventEmitter = require("events");
const Guild = require("./structures/Guild");
const Collection = require("./utils/Collection");
const Shard = require("./ws/Shard");
const User = require("./structures/User");
const RequestHandler = require("./ws/RequestHandler");
const {Endpoints} = require("./Constants");

/**
 * SethJS Client
 * @extends EventEmitter
 * @param {String} token The client token
 * @property {Number} startTime Timestamp of client ready event
 * @property {Object} ready Ready event properties
 * @property {Guild} guild Client guilds
 * @property {User} user Client user
 * @property {Shard} shards Client shards
 * @property {RequestHandler} req API Handler
 */
module.exports = class Client extends EventEmitter {
    constructor(token) {
        super();
        if(!token && "DISCORD_TOKEN" in process.env) {
            this.token = process.env.DISCORD_TOKEN;
        } else {
            this.token = token;
        }
        this.startTime = 0;
        this._ready = {};
        this.guild = new Collection(Guild);
        this.user = new Collection(User);
        this.shards = new Shard(this);
        this.req = new RequestHandler(this);
    }

    connect() {
        this.shards.initWS();
    }

    get ready() {
        return this._ready;
    }

    set ready(ready) {
        this._ready = ready;
    }

    /**
     *
     * @param {String} channelID ID of channel
     * @param {String} content Body of the message
     * @returns {Promise}
     */
    sendMessage(channelID, content) {
        // eslint-disable-next-line object-shorthand
        const data = {
            "content": content
        };
        return this.req.request("POST", Endpoints.CHANNEL_MESSAGES(channelID), true, data);
    }
};
