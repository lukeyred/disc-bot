const discord = require("discord.js");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot,message,args) =>{

let dad = bot.guilds.get(message.guild.id).id;

if (dad != botconfig.ServerID ) {
  return message.channel.send("You are not permitted to use staff manager commands in this discord.");
}else{
  let named = args[0];
  let name = named.toLowerCase();
  let channel = message.guild.channels.find(`name`,`record-${args[0]}`);
  if(!channel) return message.channel.send("Channel not found.");
  channel.delete();


  message.channel.send(`${args[0]}'s channel deleted.`);

}


}




module.exports.help = {
    name: "sm-delete"
  }
