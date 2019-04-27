const discord = require("discord.js");
const embed = new discord.RichEmbed()
console.log("works");
module.exports.run = async (bot,message,args) =>{

var role = message.guild.roles.find(role => role.name === "RoVer Bypass");
message.member.addRole(role);

var role = message.guild.roles.find(role => role.name === "Party Member");
message.member.addRole(role);

message.channel.send("Roles updated.");

}

module.exports.help = {
  name: "override"
}
