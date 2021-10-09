const { ConnectFour } = require('djs-games');

module.exports = {
    name : 'connectfour',
    aliases : ['connect4'],
    run : async(client, message, args) => {
    let user = message.mentions.users.first();

    if (!user) return message.channel.send('**You cannot play with the air lol**');

    if ( user.id == message.author.id ) return message.channel.send('**You cannot play with yourself lmao**')

    if ( user.bot == true ) return message.channel.send('**You cannot play with bots, are you this lonely ?**')

    const game = new ConnectFour({
    message: message,
    player1: '🔴',
    player2: '🟡',
    })
    game.start()
    }
}