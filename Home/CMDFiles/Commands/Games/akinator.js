const akinator = require("discord.js-akinator");

const language = "en"; //The Language of the Game
const childMode = false; //Whether to use Akinator's Child Mode
const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
const useButtons = true;


module.exports = {
    name : 'akinator',
    run : async(client, message, args) => {
akinator(message, {
            language: language, //Defaults to "en"
            childMode: childMode, //Defaults to "false"
            gameType: gameType, //Defaults to "character"
            useButtons: useButtons //Defaults to "false"
        })   
}
}