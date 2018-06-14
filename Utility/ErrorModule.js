const Discord = require("discord.js");
const fs = require("fs");
let botconfig = require("../BotConfiguration.json");


module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(`#FF0000`)
        .addField("Permission needed", perm);
    message.channel.send(embed);
}
module.exports.NoVoice = (message) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Voice error")
        .setColor(`#FF0000`)
        .addField("You're not connected to any voice channel");
    message.channel.send(embed);
}
module.exports.equalPerms = (message, user, perms) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(`#FF0000`)
        .setTitle("Error")
        .addField(`${user} has perms`, perms);
    message.channel.send(embed);
}
module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(`#FF0000`);
    message.channel.send(embed);
}
module.exports.cantfindUser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Could not find that user.")
        .setColor(`#FF0000`);
message.channel.send(embed);
}
module.exports.noReason = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Please supply a reason.")
        .setColor(`#FF0000`);
        message.channel.send(embed);
}