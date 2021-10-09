const simplydjs = require('simply-djs')

module.exports = {
    name : 'calculator',
    aliases: ['calc'],
    run : async(client, message, args) => {
    simplydjs.calculator(message, {
    embedColor: client.config.color,
    credit: false
    })
  }
}