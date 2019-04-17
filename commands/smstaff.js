const discord = require("discord.js");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot,message,args) =>{

let dad = bot.guilds.get(message.guild.id).id;

if (dad != botconfig.ServerID ) {
  return message.channel.send("You are not permitted to use staff manager commands in this discord.");
}else{
  let name = args[0];
  const channel = await message.guild.createChannel(`Record-${args[0]}`);
  await channel.setParent('568157324607488011');
  const embed = new discord.RichEmbed()
    .setTitle("New Staff Report")
    .setDescription(`This is the start of ${args[0]}'s staff record.`)
    .setColor(0x42a7f4)
    .setTimestamp()
  channel.send({embed});
  message.channel.send("New report channel created!");

}


}




module.exports.help = {
    name: "sm-staff"
  }
