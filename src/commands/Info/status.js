//Puxando as dependencias/Arivos/Pastas nescessarias
const { MessageEmbed } = require('discord.js');

module.exports ={
    name: 'status',
    aliases: ['ping'],
    category: 'Info',
    description: 'Veja os status do bot',

    run: async (client, message, args) => {
            //Puxando as informações do do Client/Bot
    const m = await message.channel.send('Calculando...')
    const embed = new MessageEmbed()
        .addField((':night_with_stars: Latência na Vps'), `\`${m.createdTimestamp - message.createdTimestamp}ms\``, true)
        .addField((':bridge_at_night: Latência na Api'), `\`${Math.round(client.ws.ping)}ms\``, true)
        .addField(('Latência DB Mongodb'), `\`${Math.round(await client.mongoose.ping())}ms\``, true)
        .setTimestamp();
        await message.channel.send(embed);
		m.delete();
    }
}
    
        
