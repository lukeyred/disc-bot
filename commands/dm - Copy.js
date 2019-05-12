const discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot,message,args) =>{

let tag = message.author.id;
let argss = args.slice(1);
let botmessage = argss.join(" ");


const embed = new discord.RichEmbed()
  .setDescription(`**MESSAGE FROM THE LABOUR TEAM:** ${botmessage}`)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xf4425f)


bot.fetchUser(`${args[0]}`).then((user) => {
        user.send({embed});
        user.send("Please note, we can not read your messages.");
        message.channel.send("DM Sent");
    });

};









module.exports.help = {
  name: "dm"
}
