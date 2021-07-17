const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'creator',
    description: "creator name",
    execute(message, args){
        const embed = new MessageEmbed()
       
        .setTitle('help')
     
        .setColor(0xff0000)
        
        .setDescription('%contact %music %moderation %commands');
      
      message.channel.send(embed);
    }
}