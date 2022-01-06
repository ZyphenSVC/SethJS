const EventEmitter = require("events");
const Guild = require("./structures/Guild");
const Collection = require("./utils/Collection");
const Channel = require("./structures/Channel");
const Shard = require("./ws/Shard");
const User = require("./structures/User");
const Ready = require("./structures/Ready");
const RequestHandler = require("./ws/RequestHandler");
const Constants = require("./Constants");
const Member = require("./structures/Member");
const Message = require("./structures/Message");
const Thread = require("./structures/Thread");

/**
 * SethJS Client
 * @extends EventEmitter
 * @param {String} token The client token
 * @param {Object} options Shard options
 * @property {Number} startTime Timestamp of client ready event
 * @property {Object} ready Ready event properties
 * @property {Endpoints} endpoints Endpoints access variable
 * @property {Guild} guild Client guilds
 * @property {User} user Client user
 * @property {Shard} shards Client shards
 * @property {RequestHandler} req API Handler
 */
module.exports = class Client extends EventEmitter {
    constructor(token, options) {
        super();
        if(!token && "DISCORD_TOKEN" in process.env) {
            this.token = process.env.DISCORD_TOKEN;
        } else {
            this.token = token;
        }
        this.options = {
            compress: false,
            largeThreshold: 250,
            firstShardID: 0,
            maxShards: 1
        };
        if(options) {
            for(const val of Object.keys(options)) {
                this.options[val] = options[val];
            }
        }
        this.startTime = 0;
        this._ready = new Collection(Ready);
        this.readyCollSize = 0;
        this.Constants = Constants;
        this.req = new RequestHandler(this);
        this.guild = new Collection(Guild);
        this.user = new Collection(User);
        this.shards = new Collection(Shard);
        this.channels = new Collection(Channel);
        this.members = new Collection(Member);
        this.messages = new Collection(Message);
        this.threads = new Collection(Thread);
    }

    connect() {
        for(let i = this.options.firstShardID; i <= this.options.maxShards - 1; i++) {
            let shard = this.shards.get(i);
            if(!shard) {
                shard = this.shards.add(new Shard(i, this), i);
                shard.initWS();
            }
        }
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
        return this.req.request("POST", this.Constants.Endpoints.CHANNEL_MESSAGES(channelID), true, data);
    }
};
