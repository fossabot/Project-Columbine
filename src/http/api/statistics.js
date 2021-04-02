//Puxando as Dependencias/Arquivos/Pastas Nescessarias
const express = require('express')
	router = express.Router();

module.exports = function(client) {
    //Estatísticas da pagina
    router.get('/', async function(req, res) {
        res.status(200).json({
            guildCount: client.guilds.cache.size,
            userCount: client.guilds.cache.reduce((total,guild) => total + guild.memberCount, 0),
            uptime: process.uptime() * 1000,
            commandCount: client.commands.size,
            memoryUsed: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
            textChannels: client.channels.cache.filter(channel => channel.type === 'text').size,
			voiceChannels: client.channels.cache.filter(channel => channel.type === 'voice').size,
        });
    });
    return router;
}