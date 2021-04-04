//Puxando as dependencias/Arivos/Pastas nescessarias
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message) => {
    
    //Puxando as informações do do Client/Bot
    const m = await message.channel.send('Calculando...')
    const embed = new MessageEmbed()
        .addField((':night_with_stars: Latência na Vps'), `\`${m.createdTimestamp - message.createdTimestamp}ms\``, true)
        .addField((':bridge_at_night: Latência na Api'), `\`${Math.round(client.ws.ping)}ms\``, true)
        //.addField(('Latência na DB'), `\`${Math.round(await client.firebase.ping())}ms\``, true)
        .setTimestamp();
        await message.channel.send(embed);
		m.delete();
        
}
