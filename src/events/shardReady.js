const { MessageEmbed, WebhookClient } = require("discord.js"),
        chalk = require("chalk");

module.exports = async (client, id) => {
  console.log(chalk.greenBright("[SHARD READY]"), `Shard ${id} está pronto.`);

  let readyEmbed = new MessageEmbed()
    .setTitle(`🟢 **Shard ${id}** Conectado e Pronto!`)
    .setColor("RANDOM")
    .setTimestamp();

    //Webhook Manager
    const webhookClient = new WebhookClient(
      client.webhooks.Webhook_Channel_ID,
      client.webhooks.Webhook_Token
    );
  
    await webhookClient.send({
      username: "Shard Manager",
      avatarURL: "https://i.ytimg.com/vi/3mp0DbLBNuM/maxresdefault.jpg",
      embeds: [readyEmbed]
    });
  };