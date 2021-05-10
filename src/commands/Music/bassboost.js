//Puxando as Dependencias/Pastas/Arquivos nescessarios
const { MessageEmbed } = require('discord.js'),
	delay = ms => new Promise(res => setTimeout(res, ms));

	module.exports = {
		name: 'bassboost',
		aliases: ['bass', 'bb'],
		category: 'Music',
		description: 'Altere o Grave das Musica!',
	
		run: async (client, message, args) => {
    /*   //Verificando se há o cargo de DJ no servidor
    if (message.guild.roles.cache.get('DJ')) {
        if (!message.member.roles.cache.has('DJ')) {
            return message.channel.send(`Você não tem o cargo de 'DJ' Para usar esses comandos!!`).then(m => m.delete({ timeout: 10000 }));
        }
    } */

    //Verificando se há musicas na fila/Reproduzidas
    const player = client.manager.players.get(message.guild.id);
    if (!player) return message.channel.send(`Não há musicas sendo reproduzidas!!`).then(m => m.delete({ timeout: 5000 }));

    //Verificando se o USER está no mesmo canal que VOZ que o BOT
    if (message.member.voice.channel.id !== player.voiceChannel) return message.channel.send(`Você deve estár no mesmo canal que VOZ que o BOT`).then(m => m.delete({ timeout: 5000 }));

    //defenindo por padrão o bassboost
    if (!args[0]) {
        player.setFilter({
            equalizer: [
                ...Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.65 })),
                ...Array(9).fill(0).map((n, i) => ({ band: i + 6, gain: 0 })),
            ],
        });
        const msg = await message.channel.send(`Ligando o  '\`BassBoost\`', isso pode levar alguns segundos...`);
        const embed = new MessageEmbed()
            .setDescription(` Modo '\`BassBoost\`' iniciado.`);
        await delay(5000);
        return msg.edit('', embed);
    }
    		// Turn off bassboost
		if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
			player.resetFilter();
			const msg = await message.channel.send(`Desligando o  '\`BassBoost\`', Isso pode levar alguns segundos...`);
			const embed = new MessageEmbed()
				.setDescription(` Modo '\`BassBoost\`' desligado.`);
			await delay(7000);
			return msg.edit('', embed);
		}

		// Caso numero não seja valido
		if (isNaN(args[0])) return message.channel.send('Escrava apenas numeros validos!');

		// colocando valores customizados
		player.setFilter({
			equalizer: [
				...Array(6).fill(0).map((n, i) => ({ band: i, gain: args[0] / 10 })),
				...Array(9).fill(0).map((n, i) => ({ band: i + 6, gain: 0 })),
			],
		});
		const msg = await message.channel.send(`Setando o BassBoost há **${args[0]}dB**. Isso pode levar alguns segundos...`);
		const embed = new MessageEmbed()
			.setDescription(`Bassboost Setado há: **${args[0]}dB**`);
		await delay(7000);
		return msg.edit('', embed);
	}
};