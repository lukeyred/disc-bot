const discord = require("discord.js");
const botconfig = require("../botconfig.json");
module.exports.run = async (bot,message,args) =>{

let dad = bot.guilds.get(message.guild.id).id;

if (dad != botconfig.ServerID ) {
  return message.channel.send("You are not permitted to use staff manager commands in this discord.");
}else{
  const embed = new discord.RichEmbed()
    .setTitle("Staff Manager Help!")
    .setDescription(`
COMMANDS \n\n
**!sm-staff (username)** - Adds a new staff member report channels \n
**!sm-delete (username)** - Deletes a staff member from the report channels \n
**!sm-trained (username) (date)** - Adds the date the staff trained in their channel \n
**!sm-comment (username) (comment)** - Adds a comment to the users channel \n
**!sm-standing (username) (positive/neutral/negative)** - Sets the users standing to positive, neutral or negative) \n
**!sm-pro (username) (pro)** - Adds a pro to the users channel. \n
**!sm-con (username) (con)** - Adds a con to the users channel. \n
**!sm-infraction (username) (infraction)** - adds an infraction to users channel.

      `)
    .setColor(0xaf052a)

  message.channel.send({embed});

}


}




module.exports.help = {
    name: "sm-help"
  }
