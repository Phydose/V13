module.exports = {
  name: 'uptime',
  run: async (client, message, args, Discord) => {
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;

  let uptime = new Discord.MessageEmbed()
    .setColor(client.config.color)
    .setDescription(` \`\📝\`\ | **__Uptime:__**`)
    .addField("**Days:**", `${days}`)
    .addField("** Hours: **" , `${hours}`) 
    .addField("** Minutes: **", `${minutes}`) 
    .addField("**Seconds:**", `${seconds}`)
  .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.sendEmbed(uptime);
  }
}