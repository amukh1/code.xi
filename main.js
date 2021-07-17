const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client

{
    "Authorization"; "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg1ODkwODUzNzg5NTM4NzE2NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI2NDkyOTUxfQ.7Zww--2He0Ep_QFqLlhy-iDxC6jj39BI9x77dB3a5Pc"
  }
  
const prefix = '%';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Cxi Is Successfully Online!');
    client.user.setActivity('Website released | %commands %help | supports dms')
 
    
});


client.on('guildMemberAdd', member => {
   
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }else if(command === 'commands'){
        client.commands.get('commands').execute(message, args);
    }else if(command === 'help'){
        client.commands.get('creator').execute(message, args);
    }else if(command === 'language'){
        client.commands.get('language').execute(message, args);
    }else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if(command === 'sad'){
        client.commands.get('e').execute(message, args);
    }else if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args);
    }else if(command === 'rip'){
        client.commands.get('rip').execute(message, args);
    }else if(command === 'embed'){
        client.commands.get('embed').execute(message, args);
    }else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }else if(command === 'dashboard'){
        client.commands.get('link').execute(message, args);
    }else if(command === 'moderation'){
        client.commands.get('moderation').execute(message, args);
    }else if(command === 'music'){
        client.commands.get('music').execute(message, args);
    }else if(command === 'contact'){
        client.commands.get('contact').execute(message, args);
    }else if(command === 'support'){
        client.commands.get('support').execute(message, args);
    }
});
 
client.login('ODU4OTA4NTM3ODk1Mzg3MTY3.YNk-6Q.VbLOJzWZxgaeym_WvfnzZDu28XM');
 
 
