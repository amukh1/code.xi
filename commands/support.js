const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'support',
    description: "embed",
    execute(message, args){
        const embed = new MessageEmbed()
       
        .setTitle('support us')
       
        .setColor(0xff0000)
     
        .setDescription('top.gg link');
      
      message.channel.send(embed);
      
    }
}