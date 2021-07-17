const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'contact',
    description: "embed",
    execute(message, args){
        const embed = new MessageEmbed()
       
        .setTitle('contact my developer')
       
        .setColor(0xff0000)
     
        .setDescription('amukh1#9613');
      
      message.channel.send(embed);
    }
}