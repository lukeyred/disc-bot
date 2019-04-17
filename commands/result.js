const discord = require("discord.js");
const embed = new discord.RichEmbed()
console.log("works");
module.exports.run = async (bot,message,args) =>{

if(!message.member.roles.find(r => r.name === "National Executive Council")) return message.channel.send("You do not have permission to run this command.")


if (args[0] === "Aye"){
  let botmessage = "The ayes have it";
} else if (args[0] === "Nay") {
  let botmessage = "The nays have it";
} else{
  return message.channel.send("You have not entered the correct option.");
}

const embed = new discord.RichEmbed()
  .setTitle("Results")
  .setFooter(`By ${message.author.username}`,`${message.author.avatarURL}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription(botmessage)
  message.channel.send("@everyone");
  message.channel.send({embed});

  message.delete().catch()
}

module.exports.help = {
  name: "vote"
}
