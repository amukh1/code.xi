module.exports = {
    name: 'avatar',
    description: "avatar",
    execute(message, args){
        message.reply(message.author.displayAvatarURL());
    }
}