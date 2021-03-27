/* module.exports = {
    name: 'purge',
    aliases: ["clear", "clean", "clearchat", "cleanchat"],
    description: 'Purges the chat, can only purge messages up to 14 days old',
        async execute(client, message, cmd, args, Discord){

            if (message.member.hasPermission('MANAGE_MESSAGES' && 'MANAGE_SERVER')) { return
           
                   if (!args[0]) return message.reply("Please enter the amount of messages to clear!")
            
                   if(isNaN(args[0])) return message.reply("Please type a real number!")
            
                   if(args[0] > 100) return message.reply("You can't remove more than 100 messages!")
                   
                   if(args[0] < 1) return message.reply("You have to delete at least one message!")
            
                  message.channel.bulkDelete(parseInt(args[0]))
           } else {
           message.channel.send("You do not have the correct permissions.")
        }
    }
} */