const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'commands',
    description: "all commands",
    execute(message, args){
        const embed = new MessageEmbed()
       
        .setTitle('commands')
     
        .setColor(0xff0000)
        
        .setDescription('%kick | %ban | %sad | %help | %rip | %embed | %avatar | %language | %help | %embed | %play (yt link) | %leave');
      
      message.channel.send(embed);
    }
}