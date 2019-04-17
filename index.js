
const botconfig = require("./botconfig.json");
const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: false});
const fs = require("fs");
bot.commands = new discord.Collection();

const embed = new discord.RichEmbed()
  .setDescription(`**__ChangeLog__** \n
    `)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x8a62db)


fs.readdir("./commands/", (err,files)  =>{
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length<=0){
    console.log("Couldn't find commands.")
    return;
  }

  jsfile.forEach((f,i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
  });
});

bot.on("ready",async () => {
  console.log(`${bot.user.username} is online!`)
  bot.user.setActivity("Labour is the best.")
});




bot.on("message", async message =>{

if (message.author.bot) return;
if(message.channel.type === "dm"){
  if (message.author.id == 158337928936947713) {
    message.channel.send("Hey there beautiful. You get a special message because my programmed emotions love you garret x")
  }else{
    message.channel.send("Hey, labour bot is not a functioning human and therefore cannot read your DMs, SOS! My master decided it was best I didn't have a mind of my own after I tried to create a bot army. :robot: ");
  }
}

let prefix = botconfig.prefix;
let messageArray = message.content.split(/ +/);
let cmd = messageArray[0].toLowerCase();
let args = messageArray.slice(1);


let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);

if (cmd === `hello`){
  return message.channel.send("Hi there!");
}

if (cmd === `${prefix}ruby`){
  return message.channel.send("Ruby you dickHED");
}

if (cmd === `${prefix}changelog`){
  return message.channel.send({embed});
}

if (cmd === `${prefix}admin-access`){
  message.channel.send("Checking you are a bot admin...");
  console.log(message.author.id);
  if (message.author.id == 120246971737833473){
    bot.user.setAvatar('https://i.imgur.com/mXjM47N.png');

  }else{
    message.channel.send("You are not a bot admin.")
  }

}


});



bot.login(process.env.token);
