const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./Commands/Warnings.json","utf8"));
const errors = require("../Utility/ErrorModule.js");
const botconfig = require("../BotConfiguration.json");


module.exports.run = async (bot,message,args) => {
 if(!message.member.hasPermission("MANAGE_MESSAGES")) 
{return errors.noPerms(message);
let botmessage = args.join(" ");
message.channel.send(botmessage);}
let persontowarn = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
let nameverification = 0
if(!persontowarn) { nameverification =1;
return errors.cantfindUser(message);
let botmessage = args.join(" ");
message.channel.send(botmessage);}
if (nameverification == 0) {
let warnlevel = warns[persontowarn.id].warns;
 message.reply(`<@${persontowarn.id}> has ${warnlevel} warnings.`);
}}
 module.exports.help = {
name: "warns"
}