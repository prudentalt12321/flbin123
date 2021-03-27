module.exports = {
    name: 'bin',
    aliases: ["search", "code"],
    description: 'Searches bin databases',
    execute(client, message, cmd, args, Discord){
        const language = args[0]
        const search = args[1]

        if(!language) return message.channel.send('Please enter a valid language to search for! `javascript`, `python`')
        if(!search) return message.channel.send('Please enter a keyword to search for!')
        if(!language === 'javascript' && language !== 'python') return message.channel.send('Please either enter `javascript` or `python`!')

    /* EMBED LAYOUT

        const <feature_name+language_name> = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Found a result relating to ${search}!`)
        .setDescription('<DESCRIBE COMMAND/FEATURE>')
        .addFields(
            {name: 'Author', value: '<YOUR_NAME>'},
            {name: 'Language', value: '<CODE_LANGUAGE>'},
            {name: 'Difficulty', value: '<DIFFICULTY TO CONFIGURE>'}, // < Possible Difficulties: Easy, Medium, Hard, Expert
            {name: 'Code', value: '<LINK TO A BIN>'}
        )
        .setAuthor('Flair Bin', 'https://cdn.discordapp.com/attachments/824599476446036039/824599520767639573/CodeFlairBin.png')
        .setTimestamp()
        .setFooter('Flair Bin')

    */

        const helpCommand = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Found a result relating to ${search}!`)
        .setDescription('Shows a help prompt in an embed!')
        .addFields(
            {name: 'Author', value: 'CDX.js#0001'},
            {name: 'Language', value: 'Discord.js'},
            {name: 'Difficulty', value: 'Easy'},
            {name: 'Code', value: 'https://srcb.in/23Yxq7hKZr'}
        )
        .setAuthor('Flair Bin', 'https://cdn.discordapp.com/attachments/824599476446036039/824599520767639573/CodeFlairBin.png')
        .setTimestamp()
        .setFooter('Flair Bin')
        
        const userinfoCommand = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Found a result relating to ${search}!`)
        .setDescription('Displays information on a pinged user!')
        .addFields(
            {name: 'Author', value: 'CDX.js#0001'},
            {name: 'Language', value: 'Discord.js'},
            {name: 'Difficulty', value: 'Easy'}, // < Possible Difficulties: Easy, Medium, Hard, Expert
            {name: 'Code', value: 'https://sourceb.in/dmVHLsWrd1'}
        )
        .setAuthor('Flair Bin', 'https://cdn.discordapp.com/attachments/824599476446036039/824599520767639573/CodeFlairBin.png')
        .setTimestamp()
        .setFooter('Flair Bin')

        const bancommand = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Found a result relating to ${search}!`)
        .setDescription('Bans a member from the guild with reasons!')
        .addFields(
            {name: 'Author', value: 'CDX.js#0001'},
            {name: 'Language', value: 'Discord.js'},
            {name: 'Difficulty', value: 'Easy'}, // < Possible Difficulties: Easy, Medium, Hard, Expert
            {name: 'Code', value: 'https://srcb.in/SDaUjOvkKJ'}
        )
        .setAuthor('Flair Bin', 'https://cdn.discordapp.com/attachments/824599476446036039/824599520767639573/CodeFlairBin.png')
        .setTimestamp()
        .setFooter('Flair Bin')


        // SEND CHECKER MODULE 
        /* Example
            if(language === '<INSERT YOUR COMMAND/FEATURES LANGUAGE>' && search === '<INSERT YOUR SEARCH KEYWORD (CAN ONLY BE 1 WORD)>') return message.channel.send(<YOUR_EMBED>)

        */

            if(language === 'javascript' && search === 'helpcommand') return message.channel.send(helpCommand)
            if(language === 'javascript' && search === 'userinfocommand') return message.channel.send(userinfoCommand)
            if(language === 'JavaScript' && search === 'bancommand') return message.channel.send(bancommand)
    }
}
