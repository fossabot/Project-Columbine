const { MessageEmbed } = require("discord.js"),
        chalk = require("chalk");

module.exports = async (client, id) => {
  console.log(chalk.yellowBright("[SHARD RECONNECTING]"), `Shard ${id} is reconnecting.`);
  

};