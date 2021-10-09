const fetch = require("node-fetch");

module.exports = {
  name : 'waifu',
  run : async (client, message, args, Discord) => {
    fetch("https://api.phydo.repl.co/img/sfw/waifu")
      .then(res => res.json())
      .then(json => {
        let embed = new Discord.MessageEmbed()
          .setColor(client.config.color)
          .setTitle(`Here is your waifu!`)
          .setURL(json.url)
          .setImage(json.url)
          .setFooter(`Requested by: ${message.author.tag}`);

        message.channel.sendEmbed(embed);
      });
  }
}; 