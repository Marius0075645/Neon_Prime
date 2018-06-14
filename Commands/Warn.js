const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync('./Commands/Warnings.json', 'utf8'));
let config = require("../BotConfiguration.json");
const errors = require("../Utility/ErrorModule.js");

module.exports.run = async (bot, message, args) => {
let persontowarn = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let nameverification = 0;
let Permission = message.channel.permissionsFor(message.member);

if(!Permission.has("ADMINISTRATOR") || !Permission.has("MANAGE_MESSAGES")   ) {
return errors.noPerms(message, "MODERATION_ROLE");
let botmessage = args.join(" ");
message.channel.send(botmessage);
}
    
if(!persontowarn) {
    return errors.cantfindUser(message);
    let botmessage = args.join(" ");
    message.channel.send(botmessage);
await(persontowarn); }
else{ nameverification=1;}
Date; timeStamp = new Date();
let reasonconfirm = 0;
let Reason = args.join("  ").slice(23);
if(!Reason && nameverification == 1 ){
return errors.noReason(message);
let botmessage = args.join(" ");
message.channel.send(botmessage);
await(Reason);}
else{reasonconfirm = 1;}

if(nameverification == 1 && reasonconfirm == 1  ){
if(!warns[persontowarn.id]) warns[persontowarn.id] = {
warns:0};
 warns[persontowarn.id].warns++;
      fs.writeFile("./Commands/warnings.json", JSON.stringify(warns),(err) => 
{if (err) console.log(err);});




let embed = new Discord.RichEmbed()
.setTitle("User warned")
.setDescription(`<@${persontowarn.id}> has been warned for ${Reason}`)
.setColor("#EC0000");
message.channel.send(embed);
let embed1 = new Discord.RichEmbed()
    .setAuthor("You have been warned.")
    .setDescription(`A moderator or admin of the Testing Server has warned you for ${Reason} in ${message.channel}.`)
    .setColor("#FF7F50")
    .addField(`Member: `,persontowarn) 
    .addField(`Reason: `,Reason)
    .setFooter(`MARcore Mainframe| ${timeStamp}`);
persontowarn.send(embed1)
}}
module.exports.help = {
  name: "warn"}































