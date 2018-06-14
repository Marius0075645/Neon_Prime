const Discord = require("discord.js");
const client = new Discord.Client();
const botconfig = require("./BotConfiguration.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
commands = new Discord.Collection();


console.log(`[Start] ${new Date()}`);
fs.readdir("./commands", (err, files) => {
if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;}
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`Loading Command: ${props.help.name}.`);
      commands.set(props.help.name, props);
    });
  });
  bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers! {BETA} - Public Version 1.1.2 `);
    bot.user.setActivity("the update log", {type: "LISTENING"});
  });

  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
  });

  bot.login(botconfig.token);























