//Puxando as Dependencias/Pastas/Arquivos nescessarios
const { MessageEmbed } = require('discord.js'),
	delay = ms => new Promise(res => setTimeout(res, ms))


	module.exports = {
		name: 'nightcore',
		aliases: ['ngt'],
		category: 'Music',
		description: 'Ative o modo NightCore nas musicas!',
	
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

    //Criando o player 'NightCore'
    if (args[0] && (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off')) {
        player.resetFilter();
        const msg = await message.channel.send(`Desligando o modo '\`NightCore\`', aguarde alguns segundos..`);
        const embed = new MessageEmbed()
            .setDescription(`Modo '\`NightCore\`' desligado.`);
            await delay(7500);
            return msg.edit('', embed);
    } else {
        player.setFilter({
            equalizer: [
                { band: 1, gain: 0.3 },
                { band: 0, gain: 0.3 },
            ],
            timescale: { pitch: 1.2 },
            tremolo: { depth: 0.3, frequency: 14 },
        });
        const msg = await message.channel.send(`Ligando o modo '\`NightCore\`', aguarde alguns segundos..`);
        const embed = new MessageEmbed()
            .setDescription(`Modo '\`NightCore\`' ligado.`);
            await delay(7000);
            return msg.edit('', embed);
        }
    }
};