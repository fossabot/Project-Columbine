const { MessageEmbed } = require("discord.js"),
     chalk = require("chalk");

module.exports = async (client, id, replayedEvents) => {
  console.log(chalk.yellowBright("[SHARD RESUMED]"), `Shard ${id} has resumed.`);


};