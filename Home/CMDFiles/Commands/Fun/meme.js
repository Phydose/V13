const fetch = require("node-fetch");

module.exports = {
  name : 'meme',
  run : async (client, message, args, Discord) => {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(json => {
        let embed = new Discord.MessageEmbed()
          .setColor(client.config.color)
          .setTitle(`${json.title}`)
          .setURL(json.postLink)
          .setImage(json.url)
          .setFooter(`From /r/${json.subreddit}`);

        message.channel.sendEmbed(embed);
      });
  }
}; 