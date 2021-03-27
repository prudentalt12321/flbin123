module.exports = {
    name: 'userinfo',
    description: "Displays information on the first user mentioned",
    category: "Utility",
    execute(client, message, cmd, args, Discord){
        const target = message.mentions.users.first() || message.author
        const showcase = args[1]

        const userinfoEmbed = new Discord.MessageEmbed()

        .setAuthor(`${target.username}`)
        .addField('Discord Name', `${target.username}`, true)
        .addField('Tag', `${target.discriminator}`, true)
        .addField('Joined Server Date', `${target.joinedAt}`, true)
        .addField('Account Creation Date', `${target.createdAt}`, true)
        .addField('Is bot?', `${target.bot}`, true)
        .addField('ID', `${target.id}`, true)
        .addField('FW', `${target.lastMessage}`, true)
        .setThumbnail(target.displayAvatarURL({dynamic: true}))
        .setColor('#00FFFF')

        message.channel.send(userinfoEmbed)    
    }
}