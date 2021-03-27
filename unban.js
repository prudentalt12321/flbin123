module.exports = {
    name: 'unban',
    description: 'Unbans a member from the guild',
    async execute(client, message, cmd, args, Discord){
        console.log('executed')
        if(!message.member.hasPermission("BAN_MEMBERS")) return
        
        const missingPermissions = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(':warning: Error: Missing Permissions')
        .setDescription('I do not have the correct permissions to execute that command.\n Missing Permission: `KICK_MEMBERS`')

        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(missingPermissions)
        let userid = args[0]
        if(!userid) return message.channel.send("Please enter a user Id to unban")
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "Unspecified Reason"
        if(userid === message.author.id) return message.channel.send("You cannot unban yourself!")

        let bans = await message.guild.fetchBans()
        if (bans.has(userid)){
            message.guild.members.unban(userid)

            
        const unbannedEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Successfully unbanned ${userid}`)
        .setDescription(`**Reason:** ${reason}`)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp()

            message.channel.send(unbannedEmbed)
        } else {
            message.channel.send("The ID you provided is either not banned or is invalid, please make sure you entered the correct User ID")
        }
    }
}