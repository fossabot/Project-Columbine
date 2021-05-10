//Puxando as dependencias/arquivos/pastas nescessarias
const firebase = require('firebase')
const db = firebase.database()
//Criando as paginas
function paginator(page, msg, queue, Currentposition) {
	if (page == 1) {
		//Mostrando a lista de musicas
		let resp = '```ml\n';
		resp += '\t⬐ Musica Atual  \n';
		resp += `0) ${queue.current.title} ${new Date(queue.current.duration - Currentposition).toISOString().slice(14, 19)} left\n`;
		resp += '\t⬑ current track \n';
		for (let i = 0; i < 10; i++) {
			if (queue[i] != undefined) {
				resp += `${i + 1}) ${queue[i].title} ${new Date(queue[i].duration).toISOString().slice(14, 19)}\n`;
			}
		}
		if (queue.length < 10) {
			resp += `\n\tA lista encerrou-se\n\tUse ${prefix}play para adicionar mais musicas a fila!!>,<\n`;
		}
		resp += '```';
		msg.edit(resp);
	} else {
		const songs = page * 10;
		let resp = '```ml\n',
			end = false;
		for (let i = (songs - 10); i < songs; i++) {
			//Mostrando a lista de musicar achadas
			if (queue[i] != undefined) {
				resp += `${i}) ${queue[i].title} ${new Date(queue[i].duration).toISOString().slice(14, 19)}\n`;
			} else if (!end) {
				//Enviando mesangem de todas as musicas encontradas
				resp += `\n\tA lista encerrou-se\n\tUse ${prefix}play para adicionar mais musicas a fila!!>,<\n`;
				end = true;
			}
		}
		resp += '```';
		msg.edit(resp);
	}
}
module.exports = {
	name: 'queue',
	aliases: ['q'],
	category: 'Music',
	description: 'Veja as lista de musicas!',

	run: async (client, message, args) => {

//Puxando o prefixo do banco de dados
let prefix = await db.ref(`Configurações/Servidores/${message.guild.id}/Prefixo`).once('value')
prefix = prefix.val().prefixo

 /*   //Verificando se há o cargo de DJ no servidor
    if (message.guild.roles.cache.get('DJ')) {
        if (!message.member.roles.cache.has('DJ')) {
            return message.channel.send(`Você não tem o cargo de 'DJ' Para usar esses comandos!!`).then(m => m.delete({ timeout: 10000 }));
        }
    } */
	//Vericando se há musicas na fila do servidor
	const player = client.manager.players.get(message.guild.id);
	if (!player) return message.channel.send(`Atualmente não há músicas tocando neste servidor.`).then(m => m.delete({ timeout: 5000 }));

	//Verificando se o bot tem permissões para adicionar Reações
	if (!message.channel.permissionsFor(message.guild.me).has('ADD_REACTIONS')) {
		console.log(`Missing permission: \`ADD_REACTIONS\` no servidor [${message.guild.id}].`);
		return message.channel.send(`Nescessito da permissão '\`ADD_REACTIONS\`' para enviar este comando`).then(m => m.delete({ timeout: 10000 }));
	}
	//Verificando se o bot tem permissões para apagar emoji
	if (!message.channel.permissionsFor(message.guild.me).has('MANAGE_MESSAGES')) {
		console.log(`Missing permission: \`MANAGE_MESSAGES\` no servidor [${message.guild.id}].`);
		return message.channel.send(`Nescessito da permissão '\`MANAGE_MESSAGES\`' para enviar esse comando`).then(m => m.delete({ timeout: 10000 }));
	}
	//Pegando a lista de musica
	const queue = player.queue;
	if (queue.size == 0) {
		message.channel.send('```ml\n A fila está vazia Zzz```');
		return;
	}
	//Display da lista
	let resp = '```ml\n';
	resp += '\t⬐ Musica Atual   \n';
	resp += `0) ${queue.current.title} ${new Date(queue.current.duration - player.position).toISOString().slice(14, 19)} left\n`;
	resp += '\t⬑ current track \n';
	for (let i = 0; i < 10; i++) {
		if (queue[i] != undefined) {
			resp += `${i + 1}) ${queue[i].title} ${new Date(queue[i].duration).toISOString().slice(14, 19)}\n`;
		}
	}
	if (queue.length < 10) {
		resp += `\n\tA fila encerrou-se\n\tUse ${prefix}play para adicionar mais musicas a fila!!>,<\n`;
	}
	resp += '```';
	//Mensagens do DISPLAY
	message.channel.send(resp).then(async (msg) => {
		//Mensagem REACT da lista
		await msg.react('⏬');
		await msg.react('🔽');
		await msg.react('🔼');
		await msg.react('⏫');
		//Setando o filtro de coleta das paginas
		const filter = (reaction, user) => {
			return ['⏬', '🔽', '🔼', '⏫'].includes(reaction.emoji.name);
		};
		let page = 1;
		// Criando o coletor
		const collector = msg.createReactionCollector(filter, { time: queue.current.duration - player.position });
		collector.on('collect', (reaction) => {
			const totalPage = (queue.length >= 1) ? Math.round(queue.length / 10) : 1;
			if (reaction.emoji.name === '⏬') {
				// Muda de pagina
				page = totalPage;
				paginator(page, msg, queue, player.position);
			} else if (reaction.emoji.name === '🔽') {
				// Monstra as 10 Proximas musicas NA FILA
				page = page + 1;
				if (page <= 1) page = 1;
				if (page >= totalPage) page = totalPage;
				paginator(page, msg, queue, player.position);
			} else if (reaction.emoji.name === '🔼') {
				// Mostra as 10 Ultumas musicas NA FILA (REPRODUZIDAS)
				page = page - 1;
				if (page == 0) page = 1;
				if (page >= totalPage) page = totalPage;
				paginator(page, msg, queue, player.position);
			} else {
				// Mostrando as 10 primeiras musica NA FILA
				page = 1;
				paginator(page, msg, queue, player.position);
				}
			});
		});
	}
};
