const { MessageEmbed } = require("discord.js"),
         chalk = require("chalk");

module.exports = async (client, event) => {
  console.log(chalk.yellowBright("[SHARD DISCONENCTED]"), `Shard ${event} has disconnected.`);

  let disconnectEmbed = new MessageEmbed()
    .setTitle(`🔴 **Shard ${event}** Foi desconectado.`)
    .setColor("RANDOM")
    .setTimestamp();

};