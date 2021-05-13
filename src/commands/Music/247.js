module.exports = {
    name: '24/7',
    aliases: ['247'],
    category: 'Music',
    description: 'Altere para o Player 24/7',

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

		// toggle 24/7 mode off and on
		if (player.twentyFourSeven) {
			player.twentyFourSeven = false;
			return message.channel.send('Music: 24/7 Offline!');
		} else {
			player.twentyFourSeven = true;
			return message.channel.send('Music: 24/7 Online!');
		}
	}
};