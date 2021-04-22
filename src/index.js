const chalk = require("chalk"),
   pingport = require("./helpers/pingport"),
   { MessageEmbed, ShardingManager } = require('discord.js');

const shard = new ShardingManager("./src/PrCo.js", {
  token: require('./config/config').token,
  autoSpawn: true,
  totalShards: 'auto'
});

//var channel = client.guilds.cache.get(require('./config/config').SupportServer.serverID).channels.cache.get(require('./config/config').SupportServer.serverChannel)

shard.on("shardCreate", async (shard) => {
  console.log(chalk.yellowBright("[SHARD LAUNCHED]"), `Shard ${shard.id} has launched.`);

  let shardEmbed = new MessageEmbed()
    .setTitle(`🟢 **Shard ${shard.id}** has launched.`)
    .setColor("RANDOM")
    .setTimestamp();
});

shard.on("message", async (shard, message) => {
  console.log(chalk.yellowBright(`[SHARD ${shard.id}]`), `${message._eval} : ${message._result}`);

  let shardOnEmbed = new MessageEmbed()
    .setTitle(`🟢 **Shard ${shard.id}** has sent a message.`)
    .addField(`Message Eval`, message._eval, true)
    .addField(`Message Result`, message._result, true)
    .setColor("RANDOM")
    .setTimestamp();
});

pingport.init();
shard.spawn();