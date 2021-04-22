const { MessageEmbed } = require("discord.js"),
        chalk = require("chalk");

module.exports = async (client, shardID, error) => {
  console.log(chalk.yellowBright("[SHARD ERROR]"), `Shard ${shardID}: ${error}`);

  client.utils.sentry.captureException(error);


};