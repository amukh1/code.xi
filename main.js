const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client

// this authorization is the top.gg api, unless your uploading your bot to top.gg then dont mind this
{
    "Authorization"; "authorization here"
  }
// auth ends here

// this is the prefix, "%ban @dumbfrog" if you set it to "!" then the command is "!ban @dumbfrog"
const prefix = '%';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
   // to launch bot type node . in the terminal, if you dont have node.js, then download it. This log says cxi is online (or whatever bad you want) when you start the bot
    console.log('Cxi Is Successfully Online!');
   // user activity "Playing: Website released | %commands %help | supports dms"
    client.user.setActivity('Website released | %commands %help | supports dms')
 
    
});


client.on('guildMemberAdd', member => {
   
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  
    if (!channel) return;
    
    channel.send(`Welcome to the server, ${member}`);
  });
 // command handler
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 // these are the commands, you can change them but make sure to change the corrisponding file in the commands folder. if you want to add more, just use my format
    // and make a file in the commands folder with the commands format
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
 
// Bot token \/ here

client.login('BOT TOKEN HERE');
 
 // this is the end, remember, this doesnt include the json files or default discord.js bot files, you can find a tutorial on youtube for that. this is just to add special
// features to your bot like commands or music. thank you for checking this out -amukh1
