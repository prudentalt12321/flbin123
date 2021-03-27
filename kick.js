module.exports = {
    name: 'kick',
    description: 'Kicks a member from the guild',
    async execute(client, message, cmd, args, Discord){
        if(!message.member.hasPermission("KICK_MEMBERS")) return

        const missingPermissions = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(':warning: Error: Missing Permissions')
        .setDescription('I do not have the correct permissions to execute that command.\n Missing Permission: `KICK_MEMBERS`')

        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(missingPermissions)
        let member = message.mentions.members.first()
        if(!member) return message.channel.send('Please mention someone for me to kick')
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "Unspecified Reason"
        if(member.id === message.author.id) return message.channel.send('You cannot kick yourself!')

        const kickedToUser = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`You have been kicked from ${message.guild.name}`)
        .setDescription(`You have been kicked from ${message.guild.name}\n Reason: ${reason}`)

        if(member.kickable){
            
            const kickedEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`Successfully kicked ${member.user.tag}`)
            .setDescription(`**Reason:** ${reason}`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
            
                member.send(kickedToUser).catch(error => message.channel.send('Failed to DM that user.'))
                .then(m => member.kick({reason}))
                message.channel.send(kickedEmbed)
        } else {
            message.channel.send("I couldn't kick that user!")
        }
    }
}