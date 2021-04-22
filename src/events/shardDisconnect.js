const { MessageEmbed } = require("discord.js"),
         chalk = require("chalk");

module.exports = async (client, event) => {
  console.log(chalk.yellowBright("[SHARD DISCONENCTED]"), `Shard ${event} has disconnected.`);


};