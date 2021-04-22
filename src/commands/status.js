//Puxando as dependencias/Arivos/Pastas nescessarias
const { MessageEmbed } = require('discord.js'),
       osutils = require('os-utils');

exports.run = async (client, message) => {
    
    //Puxando as informações do do Client/Bot
    const m = await message.channel.send('Calculando...')
    osutils.cpuUsage(function(v) {
        const embed = new MessageEmbed()
        .addField("VPS Status:","Mostra todos os Status da VPS que o bot está")
        .addField("--------------------------------------------------------------------------------","------------------------------------------------------------------------------")
        .addField("Sistema Operacional", osutils.platform(), true)
        .addField("VPS CPU Cores", osutils.cpuCount() + "Cores", true)
        .addField("CPU Usage", `${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%`,true)
        .addField("Memoria total", osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
        .addField("Memoria Usada na VPS", `${(osutils.totalmem() - osutils.freemem()).toString().split(".")[0] + "." + ( osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[0] + (osutils.totalmem() - osutils.freemem()).toString().split(".")[1].split('')[1]}/${osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1]}MB`,true)
        .addField("Memoria Usada no Bot", (process.memoryUsage().heapUsed / 1024 / 1024 ).toFixed(2) + "MB/" + osutils.totalmem().toString().split(".")[0] + "." + osutils.totalmem().toString().split(".")[1].split('')[0] + osutils.totalmem().toString().split(".")[1].split('')[1] + "MB",true)
        .addField("Memoria Usada na VPS %", `${(100 - osutils.freememPercentage() * 100).toString().split(".")[0] + "." + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split('')[0] + (100 - osutils.freememPercentage() * 100).toString().split(".")[1].split('')[1]}%`,true)
        .addField((':night_with_stars: Latência na Vps'), `\`${m.createdTimestamp - message.createdTimestamp}ms\``, true)
        .addField((':bridge_at_night: Latência na Api'), `\`${Math.round(client.ws.ping)}ms\``, true)
        //.addField(('Latência na DB'), `\`${Math.round(await client.firebase.ping())}ms\``, true)
        .setTimestamp();
        message.channel.send(embed);
		m.delete();

    })  
}
