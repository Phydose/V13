const Discord = require("discord.js"); 
const { Leaftictactoe } = require('leaf-utils'); 

module.exports = { 
name: 'tic-tac-toe',
aliases: ['ttt'],
run: async (client, message, args) => { 

let user = message.mentions.users.first();

    if (!user) return message.channel.send('**You cannot play with the air lol**');

    if ( user.id == message.author.id ) return message.channel.send('**You cannot play with yourself lmao**')

    if ( user.bot == true ) return message.channel.send('**You cannot play with bots, are you this lonely ?**')
  
new Leaftictactoe({
  message: message,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    color: client.config.color,
  },
  oEmoji: '🔵', 
  xEmoji: '❌',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  turnMessage: '{emoji} | Its now **{player}** turn!',
  waitMessage: 'Waiting for the opponent...',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
  cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  drawMessage: 'It was a draw!',
  winMessage: '{emoji} | **{winner}** won the game!',
  gameEndMessage: 'The game went unfinished',
}).startGame();
  }
}  