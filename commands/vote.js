const discord = require("discord.js");
const embed = new discord.RichEmbed()
console.log("works");
module.exports.run = async (bot,message,args) =>{

if(!message.member.roles.find(r => r.name === "National Executive Council")) return message.channel.send("You do not have permission to run this command.")


let botmessage = args.join(" ");

const embed = new discord.RichEmbed()
  .setTitle("Vote")
  .setFooter(`By ${message.author.username}`,`${message.author.avatarURL}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription(botmessage)
  message.channel.send("@everyone");
  message.channel.send({embed})
    .then(function (message) {
    message.react(":regional_indicator_y:")
    message.react(":regional_indicator_n:")
  }).catch(function() {
    //Something
   });

  message.delete().catch()
}

module.exports.help = {
  name: "vote"
}
