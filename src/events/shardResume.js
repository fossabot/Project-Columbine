const { MessageEmbed, WebhookClient } = require("discord.js"),
     chalk = require("chalk");

module.exports = async (client, id, replayedEvents) => {
  console.log(chalk.yellowBright("[SHARD RESUMED]"), `Shard ${id} foi despausado.`);

  let resumeEmbed = new MessageEmbed()
    .setTitle(`🟢 **Shard ${id}** Foi despausado.`)
    .addField("Replayed Events:", replayedEvents)
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
      embeds: [resumeEmbed]
    });
  };