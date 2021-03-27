const Discord = require('discord.js')

module.exports = {
    name: 'antiraid',
    description: 'Kicks everyone who joined in the last hour',
    category: "Moderation",
    async execute(client, message, cmd, args, Disord){

        if(!message.member.hasPermission('BAN_MEMBERS')) return

        const raidBanExecuter = message.author
        const filter = message.guild.members.cache.filter(m => m.joinedTimestamp + (1000 * 60 * 60) > Date.now());

        const permissionError = new Discord.MessageEmbed()
            .setColor('#ffa700')
            .setTitle('⚠ Error: Missing Permissions')
            .setDescription("```You don't have the required permissions to execute this command!```")

        const raidEmbed = new Discord.MessageEmbed()
        .setColor('#B22222')
        .setTitle('Anti-Raid')
        .setDescription(`Successfully banned **${filter.size} members!**`)
        .setFooter(`Raidban requested by **${raidBanExecuter}**`)

        await filter.each(m => m.kick('Raid Defense'))
        return message.channel.send(`Successfully kicked **${filter.size} members**.`)
    }
}
