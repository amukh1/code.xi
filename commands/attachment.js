const { Client, MessageAttachment } = require('discord.js');

const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');

module.exports = {
    name: 'rip',
    description: "attachment",
    execute(message, args){
        
    
    message.channel.send(attachment);
    }
}