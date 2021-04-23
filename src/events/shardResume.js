const { MessageEmbed } = require("discord.js"),
     chalk = require("chalk");

module.exports = async (client, id, replayedEvents) => {
  console.log(chalk.yellowBright("[SHARD RESUMED]"), `Shard ${id} has resumed.`);

  let resumeEmbed = new MessageEmbed()
    .setTitle(`🟢 **Shard ${id}** Foi pausado.`)
    .addField("Replayed Events:", replayedEvents)
    .setColor("RANDOM")
    .setTimestamp();
};