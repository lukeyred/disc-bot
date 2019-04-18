const discord = require("discord.js");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot,message,args) =>{

let dad = bot.guilds.get(message.guild.id).id;

if (dad != botconfig.ServerID ) {
  return message.channel.send("You are not permitted to use staff manager commands in this discord.");
}else{

  let named = args[0];
  let name = named.toLowerCase();
  let narggs = args.slice(0);
  let nargs = args.join(" ");
  let channel = message.guild.channels.find(`name`,`campaign-logs`);
  if(!channel) return message.channel.send("Channel not found.");
  const embed = new discord.RichEmbed()
    .setTitle("New Campaign Log")
    .setDescription(`${nargs}`)
    .setFooter(`By, ${message.author.username}`)
    .setColor(0xaf052a)
    .setTimestamp()

  channel.send({embed});
  message.channel.send("New campaign log added");

}


}




module.exports.help = {
    name: "campaigned"
  }
