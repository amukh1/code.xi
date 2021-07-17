module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){

        
        if(message.member.roles.cache.some(r => r.name === "mod"))
       if (message.member.roles.cache.some(r => r.name === "Mod"))
       if (message.member.roles.cache.some(r => r.name === "Admin"))
       if (message.member.roles.cache.some(r => r.name === "Owner"))
       if (message.member.roles.cache.some(r => r.name === "Moderater"))
       if (message.member.roles.cache.some(r => r.name === "moderator"))
       if (message.member.roles.cache.some(r => r.name === "administator"))
       if (message.member.roles.cache.some(r => r.name === "Administrator"))
       if (message.member.roles.cache.some(r => r.name === "Manager"))
       if (message.member.roles.cache.some(r => r.name === "Co Owner"))

        
        
        
        {
           
           
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            }else{
                message.channel.send(`command failed`);
            }


        }else {
            message.channel.send('Your not a modererator!')
        }





        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`command failed`);
        }
    }
}
