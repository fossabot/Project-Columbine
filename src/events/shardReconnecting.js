const { MessageEmbed, WebhookClient } = require("discord.js"),
        chalk = require("chalk");

module.exports = async (client, id) => {
  console.log(chalk.yellowBright("[SHARD RECONNECTING]"), `Shard ${id} reconectado.`);
  
  let reconnectEmbed = new MessageEmbed()
    .setTitle(`🟡 Reconectando **Shard ${id}**.`)
    .setColor("RANDOM")
    .setTimestamp();

    //Webhook manager
    const webhookClient = new WebhookClient(
      client.webhooks.Webhook_ID,
      client.webhooks.Webhook_Token
    );
  
    await webhookClient.send({
      username: "Shard Manager",
      avatarURL: "https://i.ytimg.com/vi/3mp0DbLBNuM/maxresdefault.jpg",
      embeds: [reconnectEmbed]
    });
  };