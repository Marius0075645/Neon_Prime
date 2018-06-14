const Discord = require("discord.js");
const fs = require("fs");
var ffmpeg = require('ffmpeg');
const errors = require("../Utility/ErrorModule.js");


module.exports.run = async (bot, message, args) => {
var voicechannel = message.member.voiceChannel;
    if(voicechannel && voicechannel.type == 'voice') {
        voicechannel.leave()
        message.channel.send(`:speaking_head: Left channel: ${voicechannel.name}`);
        bot.paused = true;    
    } else
    {
        return errors.NoVoice(message);
        let botmessage = args.join(" ");
        message.channel.send(botmessage);}}
module.exports.help = {
            name: "leave"}

    







      