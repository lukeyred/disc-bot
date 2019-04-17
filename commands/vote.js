const discord = require("discord.js");
const embed = new discord.RichEmbed()
console.log("works");
module.exports.run = async (bot,message,args) =>{

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission.");

let botmessage = args.join(" ");
if (!achannel) return message.channel.send("Couldn't find channel.");

const embed = new discord.RichEmbed()
  .setTitle("Vote")
  .setFooter(`By ${message.author.username}`,`${message.author.avatarURL}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription(botmessage)
  message.channel.send("@everyone");
  message.channel.send({embed});
    .then(function (message) {
    message.react(":regional_indicator_y:")
    message.react(":regional_indicator_n:")
    message.pin()
    message.delete()
  }).catch(function() {
    //Something
   });

  message.delete().catch();
}

module.exports.help = {
  name: "vote"
}
