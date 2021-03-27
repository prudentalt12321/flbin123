var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})
module.exports = {
    name: 'image',
    description: 'Searches the web for images!',
    async execute(client, message, cmd, args, Discord){
        const image_query = args.join(' ')

        const failureEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Image Query Failed!')
        .setDescription('Please enter an image to search for!')

        if(!image_query) return message.channel.send(failureEmbed)

        const image_results = await google.scrape(image_query, 1)

        const imageEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Image Found!')
        .setImage(`${image_results[0].url}`)
        
        message.channel.send(imageEmbed)
    }
}