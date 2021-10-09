module.exports = {
	name: "ping",
	description: "My ping!",
	run: async(client, interaction, Discord) => {
        const ping = new Discord.MessageEmbed()
	.setColor(client.config.color)
	.setTimestamp()
        .setTitle('🏓╎Pong!')
	.setDescription(`🏠╎Websocket Latency: ${client.ws.ping}ms\n🤖╎Bot Latency: ${Date.now() - interaction.createdTimestamp}ms`);
	interaction.reply({ embeds: [ping] })
		}
	}