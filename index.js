
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




bot.on('guildMemberAdd', member => {
    member.send("Hey there! If you're not in the labour group you can run the command !override and it will give you your roles. If you are in the labour group do !verify . If you'd like to join, click this link and join the group! https://www.roblox.com/groups/2655177/UK-Labour-Party-of-the-UK#!/about");
});


bot.on("message", async message =>{



//MESSAGE SHIT

if (message.author.bot) return;

if(message.channel.type === "dm"){
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(/ +/);
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

var d = message.content.startswith(prefix);
console.log(d);



let messaged = message.content.toLowerCase();

  if (messaged.indexOf("hello") !== -1){

    const embed = new discord.RichEmbed()
      .setTitle("Hello Message")
      .setFooter(`From the Labour Innovative Team || VERSION ALPHA 0.01`)
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x725387)
      .setDescription(`**Hello there ${message.author.username}**,\n\nAt Labour we're striving for innovation. Our bot has custom coded AI that is learning everyday how to pick up the questions you ask it. \n\n *Do !recommend (recommendation) to recommend a new feature for this AI.*`)
    message.channel.send({embed});

  }else if (messaged.indexOf("!recommend") !== -1){

    let botmessage = args.join(" ");
    bot.fetchUser('120246971737833473').then((user) => {
        user.send(`Recommendation from ${message.author.username}: ${botmessage}`);
        message.channel.send("Recommendation sent!");
    });
  console.log("works");

}else{
    message.channel.send("I don't understand.");

  }

// END OF MESSAGE SHIT
}else{

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(/ +/);
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);




if (cmd === `hello`){
  return message.channel.send("Hi there!");
}

else if (cmd === `${prefix}ruby`){
  return message.channel.send("Ruby you dickHED");
}

else if (cmd === `${prefix}changelog`){
  return message.channel.send({embed});
}

else if (cmd === `${prefix}admin-access`){
  message.channel.send("Checking you are a bot admin...");
  console.log(message.author.id);
  if (message.author.id == 120246971737833473){
    message.channel.send("Admin privelages enhanced. Setting level.");
    function func(){
      message.channel.send("Owner Level set. Disregard error protocol - 1202");
    }
    function func2(){
      message.channel.send("Error protocol - 1204 in affect. Reloop.");
    }

    setTimeout(func,2000);
    setTimeout(func2,4000);


}else{
    message.channel.send("You are not a bot admin.");
  }

}
}
}

);



bot.login(process.env.token);
