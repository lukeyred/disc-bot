const discord = require("discord.js");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot,message,args) =>{

let dad = bot.guilds.get(message.guild.id).id;

if (dad != botconfig.ServerID ) {
  return message.channel.send("You are not permitted to use staff manager commands in this discord.");
}else{

  let named = args[0];
  let name = named.toLowerCase();
  let narggs = args.slice(1);
  let nargs = narggs.join(" ");
  let channel = message.guild.channels.find(`name`,`record-${name}`);
  if(!channel) return message.channel.send("Channel not found.");
  const embed = new discord.RichEmbed()
    .setTitle("New Con")
    .setDescription(`${nargs}`)
    .setFooter(`By, ${message.author.username}`)
    .setColor(0xef4a5a)
    .setTimestamp()

  channel.send({embed});
  message.channel.send("New con added!");

}


}




module.exports.help = {
    name: "sm-con"
  }
