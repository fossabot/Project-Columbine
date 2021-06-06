const { MessageEmbed, WebhookClient } = require("discord.js"),
         chalk = require("chalk");

module.exports = async (client, event) => {
  console.log(chalk.yellowBright("[SHARD DISCONENCTED]"), `Shard ${event} foi desconectado.`);

  let disconnectEmbed = new MessageEmbed()
    .setTitle(`🔴 **Shard ${event}** Foi desconectado.`)
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
      embeds: [disconnectEmbed]
    });
  };