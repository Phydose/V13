const Discord = require('discord.js')

module.exports = {
    name : 'roavatar',
    run : async(client, message, args) => {
    const error = new Discord.MessageEmbed()
    .setTitle('Error !')
    .setColor('#FF0000')
    .addField('<:error:876938366564860046> Missing Args', `Usage:\n\`${client.config.prefix}roavatar <roblox user>\``)

    const text = args[0]
    if (!text) return message.reply({ embeds: [error] })
    const roblox = new Discord.MessageEmbed()
    .setTitle(`${text}'s Roblox Avatar`)
    .setColor(client.config.color)
    .setImage(`https://www.roblox.com/Thumbs/Avatar.ashx?x=600&y=600&Format=Png&username=${text}`)
    .setFooter(`Requested by: ${message.author.tag}`)

    message.channel.sendEmbed(roblox)
  }
}
