module.exports = {
    name: 'ban',
    description: 'Bans the a member from the guild',
    async execute(client, message, cmd, args, Discord){
    
        if(!message.member.hasPermission("BAN_MEMBERS")) return

        const missingPermissions = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(':warning: Error: Missing Permissions')
        .setDescription('I do not have the correct permissions to execute that command.\n Missing Permission: `BAN_MEMBERS`')

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(missingPermissions)

        let member = message.mentions.members.first()
        if(!member) return message.channel.send('Please mention someone for me to ban')
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "Unspecified Reason"
        if(member.id === message.author.id) return message.channel.send("You cannot ban yourself!")
 
        const bannedToUser = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`You have been banned from ${message.guild.name}`)
        .setDescription(`You have been banned from ${message.guild.name}\n Reason: ${reason}`)
        

        if(member.bannable){

        const bannedEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Successfully banned ${member.user.tag}`)
        .setDescription(`**Reason:** ${reason}`)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp()
        
            member.send(bannedToUser).catch(error => message.channel.send('Failed to DM that user.'))
            .then(m => member.ban({reason: `${reason}, Banned by ${message.author.tag}`, days: 7}))
            message.channel.send(bannedEmbed)
        } else {
            message.channel.send("I couldn't ban that user!")
        }
    }
}