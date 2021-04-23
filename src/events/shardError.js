const { MessageEmbed, WebhookClient } = require("discord.js"),
        chalk = require("chalk");

module.exports = async (client, shardID, error) => {
  console.log(chalk.yellowBright("[SHARD ERROR]"), `Shard ${shardID}: ${error}`);

  client.utils.sentry.captureException(error);

  let errorEmbed = new MessageEmbed()
    .setTitle(`🟡 **Shard ${shardID}** Error:`)
    .addField("Shard ID:", shardID)
    .addField("Error", error)
    .setColor("RANDOM")
    .setTimestamp();

    //Webhook manager
    const webhookClient = new WebhookClient(
      client.webhooks.Webhook_Channel_ID,
      client.webhooks.Webhook_Token
    );
  
    await webhookClient.send({
      username: "Shard Manager",
      avatarURL: "https://i.ytimg.com/vi/3mp0DbLBNuM/maxresdefault.jpg",
      embeds: [errorEmbed]
    });
  };;