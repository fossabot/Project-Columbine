exports.run = async (client, message,) => {

		// Check that a song is being played
		const player = client.manager.players.get(message.guild.id);
		if (!player) return message.channel.send('Não há musicas tocando atualmente!').then(m => m.delete({ timeout: 5000 }));

		// Check that user is in the same voice channel
		if (message.member.voice.channel.id !== player.voiceChannel) return message.channel.send('voce deve estar em um canal de voz').then(m => m.delete({ timeout: 5000 }));

		// toggle 24/7 mode off and on
		if (player.twentyFourSeven) {
			player.twentyFourSeven = false;
			return message.channel.send('modo 24/7 offline.');
		} else {
			player.twentyFourSeven = true;
			return message.channel.send('modo 24/7 online');
		}
};