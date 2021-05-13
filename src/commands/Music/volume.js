//Puxando as Dependencias/Pastas/Arquivos nescessarios
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'volume',
    aliases: ['vol'],
    category: 'Music',
    description: 'Altere o Volume das Musica!',

    run: async (client, message, args, settings) => {
       //Verificando se há o cargo de DJ no servidor
	   if (message.guild.roles.cache.get(settings.MusicDJRole)) {
		if (!message.member.roles.cache.has(settings.MusicDJRole)) {
			return message.channel.error(settings.Language, 'MUSIC/MISSING_DJROLE').then(m => m.delete({ timeout: 10000 }));
		}
	}
    //Verificando se há musicas na fila/Reproduzidas
    const player = client.manager.players.get(message.guild.id);
    if (!player) return message.channel.send(client.translate(settings.Language, 'MUSIC/NO_QUEUE').then(m => m.delete({ timeout: 5000 })));

    //Verificando se o USER está no mesmo canal que VOZ que o BOT
    if (message.member.voice.channel.id !== player.voiceChannel) return message.channel.send(client.translate(settings.Language, 'MUSIC/NOT_VOICE').then(m => m.delete({ timeout: 5000 })));

    //verificando se foi enviado um numero valido
    if (!args[0]) {
        const embed = new MessageEmbed()
        .setColor(message.member.displayHexColor)
        .setDescription(client.translate(settings.Language, 'MUSIC/SOUND_CURRENT', player.volume));
    return message.channel.send(embed);
    }

    // setando um limite de 0 a 700
	if (Number(args[0]) <= 0 || Number(args[0]) > 500) {
		return message.channel.send(client.translate(settings.Language, 'MUSIC/TOO_HIGH'));
	}

        //atualizando o volume
		player.setVolume(Number(args));
		const embed = new MessageEmbed()
			.setColor(message.member.displayHexColor)
			.setDescription(client.translate(settings.Language, 'MUSIC/SOUND_SET', player.volume));
		return message.channel.send(embed);
	}
};