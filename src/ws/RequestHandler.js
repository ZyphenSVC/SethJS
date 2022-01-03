const HTTPS = require("https");

module.exports = class RequestHandler {
    constructor(client) {
        this.client = client;
        this.userAgent = `DiscordBot (https://github.com/ZyphenSVC/SethJS, ${require("../../package.json").version})`;
    }

    /**
     * Creates an HTTPS request to the Discord API
     * @param {String} method GET, POST
     * @param {String} url Endpoint
     * @param {Boolean} auth Whether or not it is a bot request
     * @param {Object} body Content of request
     */
    async request(method, url, auth, body) {
        const headers = {};

        let data;

        if(auth) {
            headers.Authorization = `Bot ${this.client.token}`;
        }
        if(method === "POST") {
            data = JSON.stringify(body);
            headers["Content-Type"] = "application/json";
        }

        const req = await HTTPS.request({
            method: method,
            host: "discord.com",
            path: "/api" + url,
            headers: headers,
            body: data
        });
        req.write(JSON.stringify(body));
        req.end();
    }
};
