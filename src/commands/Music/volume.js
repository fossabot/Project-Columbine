//Puxando as Dependencias/Pastas/Arquivos nescessarios
const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
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

    //verificando se foi enviado um numero valido
    if (!args[0]) {
        const embed = new MessageEmbed()
        .setColor(message.member.displayHexColor)
        .setDescription(player.volume)
    return message.channel.send(embed);
    }

    // setando um limite de 0 a 700
	if (Number(args[0]) <= 0 || Number(args[0]) > 700) {
		return message.channel.send('Ensira um numero entre 0 a 700');
	}

        //atualizando o volume
		player.setVolume(Number(args));
		const embed = new MessageEmbed()
			.setColor(message.member.displayHexColor)
			.setDescription(`Volume alterado para: ${args[0]}`, player.volume);
		return message.channel.send(embed);
	}