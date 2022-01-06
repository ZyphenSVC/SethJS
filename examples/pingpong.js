const Seth = require("../");

const client = new Seth("TOKEN");

client.on("ready", () => {
    console.log("Ready!");
});

client.on("messageCreate", (client, msg) => {
    if(msg.content === "ping") {
        client.sendMessage(msg.channel.id, "Pong!");
    }
});

client.connect();
