const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../BotConfiguration.json");
const errors = require("../Utility/ErrorModule.js");

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("MANAGE_MESSAGES")){
return errors.noPerms(message);
let botmessage = args.join(" ");
message.channel.send(botmessage);}
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let nameverification = 0;
if(!tomute) {
    return errors.cantfindUser(message);
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
await(tomute);}
else{ nameverification=1;}
Date;timeStamp = new Date();
let muterole = message.guild.roles.find(`name`, 'Muted');
let mutetime =  "300s";
let reasonconfirm = 0;
let Reason = args.join("  ").slice(23);
if(!Reason && nameverification == 1){
    return errors.noReason(message);
    let botmessage = args.join(" ");
    message.channel.send(botmessage);}
else{reasonconfirm = 1;}
if(nameverification == 1 && reasonconfirm == 1  ){
await(tomute.addRole(muterole.id));
let embed = new Discord.RichEmbed()
    .setTitle("User Muted")
    .setDescription(`<@${tomute.id}> has been muted.`)
    .setColor("#EC0000");
message.channel.send(embed);
let embed1 = new Discord.RichEmbed()
    .setAuthor("You have been muted.")
    .setDescription(`A moderator or admin of the Testing Server has muted you in ${message.channel}.`)
    .setColor("#FF7F50")
    .addField(`Member:`,tomute) 
    .addField(`Reason:`,Reason)
    .setFooter(`Neon_Prime| ${timeStamp}`);
tomute.send(embed1)
setTimeout(function(){tomute.removeRole(muterole.id);},ms(mutetime));}}
module.exports.help = {
  name: "mute"}