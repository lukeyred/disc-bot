const discord = require("discord.js");
const embed = new discord.RichEmbed()
console.log("works");
module.exports.run = async (bot,message,args) =>{




if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission.");

let botmessage = args.join(" ");
let achannel = message.guild.channels.find(`name`,"announcements");
if (!achannel) return message.channel.send("Couldn't find channel.");

const embed = new discord.RichEmbed()
  .setTitle("Announcement")
  .setFooter(`From ${message.author.username}`,`${message.author.avatarURL}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription(botmessage)
  achannel.send("@everyone");
  achannel.send({embed});

  message.delete().catch();
}

module.exports.help = {
  name: "announce"
}
