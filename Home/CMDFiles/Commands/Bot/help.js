module.exports = {
  name: 'help',
  run: async(client, message) => {
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username}'s Commands !`)
    .setColor(client.config.color)
    .setDescription(`\`\`\`ini\n[My prefix is '${client.config.prefix}']\`\`\`\n Hello ! i am **${client.user.username}**, A discord bot made by **Arandomneko#1111** for fun !`)
    .addField("<:fun:875783384549441566> Fun commands", "`meme`, `neko`, `waifu`, `ascii`, `owoify`")
    .addField("<a:dice:888411836628738121> Game commands", "`roavatar`, `akinator`, `connectfour`, `ttt`, `snake`")
    .addField("<a:other:888459678542069820> Util commands", "`calculator`")
    .addField("<a:animesmile:888390895144140832> Anime commands", "`anime`")
    .addField("<:blurplecog:875783122585792582> Bot commands", "`uptime`, `ping`")
    
    		const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('help')
					.setPlaceholder('Choose a command type !')
					.addOptions([
						{
							label: 'Slash commands',
							description: 'The slash commands that the bot supports',
							value: 'slash',
						},
						{
							label: 'Prefix commands',
							description: 'The normal prefix commands that the bot supports',
							value: 'prefix',
						}
					]),
      )

    message.channel.send({ embeds: [embed] components: [menu] })
  }
}