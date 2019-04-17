const discord = require("discord.js");
module.exports.run = async (bot,message,args) =>{
const botconfig = require("../botconfig.json");
let dad = bot.guilds.get(message.guild.id).id;

if (dad != botconfig.ServerID ) {
  return message.channel.send("You are not permitted to use staff manager commands in this discord.");
}else{

  let named = args[0];
  let name = named.toLowerCase();
  let narggs = args.slice(1);
  let nargs = args.join(" ");
  let channel = message.guild.channels.find(`name`,`record-${name}`);
  if(!channel) return message.channel.send("Channel not found.");
  if (narggs[0] === "positive"){
    const embed = new discord.RichEmbed()
      .setTitle("Standing Updated")
      .setDescription(`This staff member's standing has been updated to: Postive`)
      .setColor(0x40e57c)
      .setFooter(`By, ${message.author.username}`)
      .setTimestamp()
      channel.send({embed});
      message.channel.send("Standing updated added!");
  } else if (narggs[0] === "neutral") {
    const embed = new discord.RichEmbed()
      .setTitle("Standing Updated")
      .setDescription(`This staff member's standing has been updated to: Neutral`)
      .setColor(0xedb53d)
      .setFooter(`By, ${message.author.username}`)
      .setTimestamp()
    channel.send({embed});
    message.channel.send("Standing updated added!");
  }else if (narggs[0] === "negative"){
    const embed = new discord.RichEmbed()
      .setTitle("Standing Updated")
      .setDescription(`This staff member's standing has been updated to: Negative`)
      .setColor(0xef4a5a)
      .setFooter(`By, ${message.author.username}`)
      .setTimestamp()
    channel.send({embed});
    message.channel.send("Standing updated added!");
  }else{
    message.channel.send("Standing type not recognised! format: **!sm-standing {name} {positive/neutral/negative}**");
  }


}


}




module.exports.help = {
    name: "sm-standing"
  }
