module.exports = {
    name: 'Calculate',
    description: "Calculates Numbers",
    execute(client, message, cmd, args, Discord){
        let method = args[1];
        let firstNumber = Number(args[0]);
        let secondNumber = Number(args[2]);
        const operation = ['add', 'subtract', 'multiply', 'divide'];
        // Declares the key variables

        if(!method) return message.reply('Please enter an actual operation')
        // Checks if there is a valid method

        if (!operation.includes(method)) return message.reply('Select either add, subtract, multiply or divide')
        // Checks if the message includes the method

        if (!args[1]) return message.reply('Please enter at least 2 numbers')
        // Checks if the member entered 2 numbers

        if (!args[2]) return message.reply('Please enter at least 2 numbers')
        // Checks if the member entered 2 numbers
        if(isNaN(firstNumber)) return message.reply('The first number you entered isnt actually a number!')
        // Checks if the first number is a number

        if(isNaN(secondNumber)) return message.reply('The second number you entered isnt actually a number!')
        // Checks if the second number is a number

        if (method === 'add') {
            let doMath = firstNumber + secondNumber
            const additionEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Calculating..')
            .setDescription(`${firstNumber} + ${secondNumber} = ${doMath}`)
            message.channel.send(additionEmbed)
            // Checks if the method is "add", if it is then it does the appropriate math for the method
        }
        
        
        if (method === 'subtract') {
            let doMath = firstNumber - secondNumber
            const subtractEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Calculating..')
            .setDescription(`${firstNumber} - ${secondNumber} = ${doMath}`)
            message.channel.send(subtractEmbed)
            // Checks if the method is "subtract", if it is then it does the appropriate math for the method
        }
        
        if (method === 'multiply') {
            let doMath = firstNumber * secondNumber
            const multiplyEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Calculating..')
            .setDescription(`${firstNumber} x ${secondNumber} = ${doMath}`)
            message.channel.send(multiplyEmbed)
            // Checks if the method is "multiply", if it is then it does the appropriate math for the method
        }
        
        if (method === 'divide') {
            let doMath = firstNumber / secondNumber
            const divisionEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Calculating..')
            .setDescription(`${firstNumber} ÷ ${secondNumber} = ${doMath}`)
            message.channel.send(divisionEmbed)
            // Checks if the method is "divide", if it is then it does the appropriate math for the method
        }
    }   
}

