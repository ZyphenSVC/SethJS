const Client = require("./src/Client");

function Seth(token, options) {
    return new Client(token, options);
}

Seth.Channel = require("./src/structures/Channel");
Seth.Client = Client;
Seth.Collection = require("./src/utils/Collection");
Seth.Constants = require("./src/Constants");
Seth.Guild = require("./src/structures/Guild");
Seth.Member = require("./src/structures/Member");
Seth.Message = require("./src/structures/Message");
Seth.Role = require("./src/structures/Role");
Seth.Shard = require("./src/ws/Shard");
Seth.User = require("./src/structures/User");

module.exports = Seth;
