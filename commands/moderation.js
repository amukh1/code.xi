const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'moderation',
    description: "embed",
    execute(message, args){
        const embed = new MessageEmbed()
       
        .setTitle('Moderation Commands')
       
        .setColor(0xff0000)
     
        .setDescription('%ban | %kick');
      
      message.channel.send(embed);
    }
}