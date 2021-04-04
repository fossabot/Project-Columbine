//Puxando as Dependencias/Pastas/Arquivos nescessarios
exports.run = async (client, message, args) => {
	/*   //Verificando se há o cargo de DJ no servidor
    if (message.guild.roles.cache.get('DJ')) {
        if (!message.member.roles.cache.has('DJ')) {
            return message.channel.send(`Você não tem o cargo de 'DJ' Para usar esses comandos!!`).then(m => m.delete({ timeout: 10000 }));
        }
    } */

	//Verificando se o USER está em um canal de VOZ
	if (!message.member.voice.channel) return message.channel.send(`Você deve estár em um canal de Voz!!`);

	//Vereificando se o USER está no mesmo canal de VOZ do bot
	if (client.manager.players.get(message.guild.id)) {
		if (message.member.voice.channel.id != client.manager.players.get(message.guild.id).voiceChannel) return message.channel.send(`Você deve estar no mesmo canal de Voz em que o BOT está!!`).then(m => m.delete({ timeout: 6000}));
	}

	//Verificando a permissão do BOT para se CONECTAR ao canal de VOZ
	if (!message.member.voice.channel.permissionsFor(message.guild.me).has('CONNECT')) {
		console.log(`Faltando a permissão: \`CONNECT\` no servidor [${message.guild.id}].`);
		return message.channel.send(`Missing permission: '\`CONNECT\`' para me conectar ao canal`).then(m => m.delete({ timeout: 8000}));
	}

	//Verificando a permissão do BOT para se FALAR no canal de VOZ
	if (!message.member.voice.channel.permissionsFor(message.guild.me).has('SPEAK')) {
		console.log(`Faltando a permissão: \`SPEAK\` no servidor [${message.guild.id}].`);
		return message.channel.send(`Missing permission: '\`SPEAK\`' para falar no canal`).then(m => m.delete({ timeout: 8000}));
	}

	//Criando o Player de musica
	let player;
	try {
		player = client.manager.create({
			guild: message.guild.id,
			voiceChannel: message.member.voice.channel.id,
			textChannel: message.channel.id,
			selfDeafen: true,
		});
	} catch (err) {
		if (message.deletable) message.delete();
		console.log(`O Comando: '${this.help.name}' ocorreu o seguinto erro: ${err.message}.`);
		return message.channel.send(`Erro desconhecido`, err.message)
	}

	//Vericiando se o USER envio algo
	if (args.length == 0) {
		//Verificando o tipo de arquivo que foi enviado para reprodução
		const filesTypes = ['mp3', 'mp4', 'wav', 'm4a', 'webm', 'aac', 'ogg'];
		if (messsage.attachments.size > 0) {
			const url = message.attachments.first().url;
			for (let i = 0; i < filesTypes.length; i++) {
				if (url.endsWith(filesTypes[i])) {
					args.push(url);
				}
			}
			if (!args[0]) return message.channel.send(`Arquivo [INVALIDO]`).then(m => m.delete({ timeout: 5000}));
		} else {
			return message.channel.send(`Nenhum Link/Arquivo fornecido.`).then(m => m.delete({ timeout: 7000}));
			
		}
	}
	//Puxando a pesquisa enviada pelo USER
	let res;
	const search = args.join(' ');

	//Pesquisando a musica
	try {
		res = await player.search(search, message.author);
		if (res.loadType === 'LOAD_FAILED') {
			if (player.queue.current) player.destroy();
			throw res.exception;
		}
	} catch (err) {
		return message.channel.send(`Erro ao encontrar a Musica!!`, err.message).then(m => m.delete({ timeout: 5000 }));
	}
	
	//Setando oque fazer com a pesquisa "MUSICA"
	if (res.loadType == 'NO_MATCHES') {
		//Caso ocorra um erro ao carregar a musica
		if (!player.queue.current) player.destroy();
		return message.channel.send(`Erro ao reproduzir a Musica!!`);
	} else if (res.loadType == 'PLAYLIST_LOADED') {
		//Fazendo o bot conectar-se ao canal caso ele não esteja
		if (player.state !== 'CONNECTED') player.connect();
		//Enviar uma mensagem mostrando quantas musicas foram adicionadas
		message.channel.send({ embed:{ color: message.member.displayHexColor, description: `Queued **${res.tracks.length}** tracks` } });
		//Adicionando as musicas na fila
		player.queue.add(res.tracks);
		//Tocando as musicas caso esteja pronto
		if (!player.playing && !player.paused && player.queue.totalSize === res.tracks.length) player.play();
	} else {
		//Adicionando a musica na fila e reproduzindo
		if (player.state !== 'CONNCTED') player.connect();
		player.queue.add(res.tracks[0]);
		if (!player.playing  && !player.queue.size) {
			player.play();
		} else {
			message.channel.send({ embed: { color: message.member.displayHexColor, description:`Added to queue: [${res.tracks[0].title}](${res.tracks[0].uri})` } });
		}
	}
}
