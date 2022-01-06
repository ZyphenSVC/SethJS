const Seth = require("../");

const client = new Seth("NDUxODczMjgwMDAxOTY2MDgx.WxB1yQ.Mig0yy6XtJ8GFNJxkB0LzJlNGu8");

client.on("threadCreate", (c, n) => {
    console.log(n);
});

client.on("threadDelete", (c, n) => {
    console.log(n);
});


client.on("ready", () => {
    console.log("Ready!");
});

client.on("messageCreate", (client, msg) => {
    if(msg.content === "ping") {
        client.sendMessage(msg.channel.id, "Pong!");
    }
});

client.connect();
