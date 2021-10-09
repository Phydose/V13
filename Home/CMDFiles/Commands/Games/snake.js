const { Leafsnake } = require('leaf-utils')

module.exports = {
    name : 'snake',
    run : async(client, message, args) => {
new Leafsnake({
  message: message,
  embed: {
    title: 'Snake Game',
    color: client.config.color,
    OverTitle: "Game Over",
  },
  snake: { head: '😁', body: '🟨', tail: '🟡' },
  emojis: {
    board: '⬛', 
    food: '🍎',
    up: '⬆️', 
    right: '➡️',
    down: '⬇️',
    left: '⬅️',
  },
}).startGame()
 }
}