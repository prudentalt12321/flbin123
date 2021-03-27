module.exports = {
    name: 'ping',
    aliases: ["latency", "late",],
    description: "Returns Bot Latency and API Latency",
    category: "Utility",
    execute(client, message, cmd, args, Discord){
        message.reply('Fetching ping...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#00FFFF')
            .setTitle('Pong 🏓')
            .addFields(
                {name: 'Bot Latency', value: `${ping}`},
                {name: 'API Latency', value: `${message.client.ws.ping}`}
            )
            .addFooter('Code Flair')

        message.channel.send(newEmbed)
        })
    },
}