const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'embed',
    description: "embed",
    execute(message, args){
        const embed = new MessageEmbed()
       
        .setTitle('A slick little embed')
       
        .setColor(0xff0000)
     
        .setDescription('Hello, this is a slick embed!');
      
      message.channel.send(embed);
    }
}