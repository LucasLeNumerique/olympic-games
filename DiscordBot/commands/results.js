const Discord = require('discord.js');
const mysql = require('mysql');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async (client, message, arguments) => {
    message.channel.send('Here are the results!');
};


module.exports.name = 'results';