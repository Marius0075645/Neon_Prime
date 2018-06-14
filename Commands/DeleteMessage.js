const Discord = require("discord.js");
const client = new Discord.Client();
const errors = require("../Utility/ErrorModule.js");
const config = require("../BotConfiguration");
module.exports.run = async (bot, message, args) => {
if(message.author.id !== config.ownerID) {
return errors.noPerms(message);
let botmessage = args.join(" ");
message.channel.send(botmessage);}

if(message.author.id == config.ownerID) {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 1 || deleteCount > 100 )
    return message.reply("Please provide a number between 1 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}}
module.exports.help = {
  name: "delete"}































