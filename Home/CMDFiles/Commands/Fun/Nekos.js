const fetch = require("node-fetch");

module.exports = {
  name : 'neko',
  run : async (client, message, args, Discord) => {
    fetch("https://api.phydo.repl.co/img/sfw/neko2")
      .then(res => res.json())
      .then(json => {
        let embed = new Discord.MessageEmbed()
          .setColor(client.config.color)
          .setTitle(`Here is your neko!`)
          .setURL(json.neko)
          .setImage(json.neko)
          .setFooter(`Requested by: ${message.author.tag}`);

        message.channel.sendEmbed(embed);
      });
  }
}; 