module.exports = class CHANNEL_UPDATE {
    constructor(client, payload) {
        this.message = client.messages.get(payload.d.id);
        if(this.message) {
            this.old = {
                attachments: this.message.attachments,
                content: this.message.content,
                editedTimestamp: this.message.editedTimestamp,
                embeds: this.message.embeds,
                flags: this.message.flags,
                mentions: this.message.mentions,
                mentionsRoles: this.message.mention_roles,
                mentionEveryone: this.message.mention_everyone,
                pinned: this.message.pinned,
                tts: this.message.tts
            };
        }
        client.emit("messageUpdate", client, client.messages.add(payload.d, payload.d.id), this.message);
    }
};
