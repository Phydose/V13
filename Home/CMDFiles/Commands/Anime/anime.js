const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Scraper = require("mal-scraper"); //npm i mal-scraper 

//By Legendary Kekker 

module.exports = {
    name: 'anime',
    run: async (client, message, args) => { 

  const errorEmbed = new Discord.MessageEmbed()
.setTitle('Missing args')
.setDescription(':x: **You are missing the <anime name> arg**\nUsage: `anime <anime name>`')
.setColor('FF0000');

        let Text = args.join(" "); 

        if (!Text) return message.channel.sendEmbed(errorEmbed); 

        if (Text.length > 200) return message.channel.send(`Text Limit - 200`); 

        let Msg = await message.channel.send(`**Searching It For You 🔮**`); 

        let Replaced = Text.replace(/ +/g, " "); 

        await Msg.delete(); 

        let Anime; 

        let Embed; 

        try { 

        Anime = await Scraper.getInfoFromName(Replaced); 

        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None"; 

        Embed = new MessageEmbed()
        .setColor(client.config.color)
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription(Anime.synopsis)
        .addField(`Type`, Anime.type, true)
        .addField(`Status`, Anime.status, true)
        .addField(`Premiered`, Anime.premiered, true)
        .addField(`Episodes`, Anime.episodes, true)
        .addField(`Duration`, Anime.duration, true)
        .addField(`Popularity`, Anime.popularity, true)
        .addField(`Genres`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`Score - ${Anime.score}`)
        .setTimestamp(); 

        } catch (error) {
          return message.channel.send(`**No Anime Found!**`);
        }; 

        return message.channel.sendEmbed(Embed); 

        //End 

    }
};
