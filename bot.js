const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "\";

client.on('message', message => {
    if (message.content === '\sm') {
        let helpEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('**Server memebers**')
        .addField("Total Members", message.guild.memberCount)
      message.channel.send(helpEmbed);
    }
});

client.login(process.env.BOT_TOKEN);
