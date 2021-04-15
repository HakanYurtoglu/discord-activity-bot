const axios = require("axios")
const discord = require("discord.js")
const client = new discord.Client()
const apiURL = "https://discord.com/api/v8"
const token = "BOT TOKEN"
const prefix = "!"

client.on("message", async (message) => {

    if (message.content === `${prefix}ytg`) {
        if (!message.member.voice.channel) return message.channel.send("Please join a voice channel!")
        const invite = await createInvite("755600276941176913", message.member.voice.channelID)
        const embed = new discord.MessageEmbed()
            .setDescription(`[Join the party 🎉](https://discord.gg/${invite.code})`)
            .setColor("RED")
        message.channel.send(embed)
    }
    if (message.content === `${prefix}poker`) {
        if (!message.member.voice.channel) return message.channel.send("Please join a voice channel!")
        const invite = await createInvite("755827207812677713", message.member.voice.channelID)
        const embed = new discord.MessageEmbed()
            .setDescription(`[Join the party 🎉](https://discord.gg/${invite.code})`)
            .setColor("GREY")
        message.channel.send(embed)
    }
    if (message.content === `${prefix}betrayal`) {
        if (!message.member.voice.channel) return message.channel.send("Please join a voice channel!")
        const invite = await createInvite("773336526917861400", message.member.voice.channelID)
        const embed = new discord.MessageEmbed()
            .setDescription(`[Join the party 🎉](https://discord.gg/${invite.code})`)
            .setColor("YELLOW")
        message.channel.send(embed)
    }
    if (message.content === `${prefix}fishington`) {
        if (!message.member.voice.channel) return message.channel.send("Please join a voice channel!")
        const invite = await createInvite("814288819477020702", message.member.voice.channelID)
        const embed = new discord.MessageEmbed()
            .setDescription(`[Join the party 🎉](https://discord.gg/${invite.code})`)
            .setColor("BLUE")
        message.channel.send(embed)
    }

})

const createInvite = async (appID, channelID) => {
    const url = `${apiURL}/channels/${channelID}/invites`
    const json = {
        max_age: 86400,
        max_uses: 0,
        target_application_id: appID,
        target_type: 2,
        temporary: false,
        validate: null
    }

    const res = await axios.post(url, json, {
        headers: { Authorization: `Bot ${client.token}` }
    })
    return res.data
}

client.login(token)
    .then(() => console.log("Bot is ready"))
    .catch(e => console.log(e))