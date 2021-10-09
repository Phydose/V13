const fetch = require("node-fetch");

module.exports = {
    name : 'owoify',
    run : async(client, message, args, Discord) => {
    const text = args.slice(0).join(" ")
    if (!text) return message.reply("Please provide some text to owoify !")
        fetch(`https://api.phydo.repl.co/text/owoify?text=${text}`)
      .then(res => res.json())
      .then(json => {
  message.channel.send(`\`\`\`fix\n${json.owo}\`\`\``);
      });
  }
}
