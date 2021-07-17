const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'music',
    description: "embed",
    execute(message, args){
        const embed = new MessageEmbed()
       
        .setTitle('music help')
       
        .setColor(0xff0000)
     
        .setDescription('%play (yt link) | %leave');
      
      message.channel.send(embed);
    }
}