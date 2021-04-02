//Puxando as Dependencias/Pastas/Arquivos nescessarios
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message,) => {

    const msg = await message.channel.send('Puxando todas as informações do lavalink, aguarde..');

    const {	memory,	cpu, playingPlayers, players } = client.manager.nodes.first().stats;
    
    //Puxando a memoria disponivel no servidor "LavaLink"
    const allocated = Math.floor(memory.allocated / 1024 / 1024);
	const used = Math.floor(memory.used / 1024 / 1024);
	const free = Math.floor(memory.free / 1024 / 1024);
	const reservable = Math.floor(memory.reservable / 1024 / 1024);

    const systemLoad = (cpu.systemLoad * 100).toFixed(2);
    const lavalinkLoad = (cpu.lavalinkLoad * 100).toFixed(2);


    const embed = new MessageEmbed()
    .setAuthor('Status lavalink')
    .addField('Players Ativos', `\`\`\`${playingPlayers} Tocando agora / ${players} Players\`\`\``)
    .addField('Memoria', `\`\`\`Alocada: ${allocated} MB\nUsada: ${used} MB\nLivre: ${free} MB\nReservada: ${reservable} MB\`\`\``)
    .addField('CPU', `\`\`\`Cores: ${cpu.cores}\nUso do sistema: ${systemLoad}%\nUso do lavalink: ${lavalinkLoad}%\`\`\``)
    .setTimestamp(Date.now());
        return msg.edit('', embed);

}
