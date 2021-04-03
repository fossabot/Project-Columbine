//Puxando as Dependencias/Arquivos/Pastas Nescessarias
const express = require('express');
const app = express();
const PORT = 3000;

module.exports = (client) => {
    //Pagina inicial
    app.get('/', (req, res) => {
        res.type('text/plain');
        res.send(`[Servidor API] de ${client.user.username}
        \n/statistics - Status básico do bot
        \n/commands - Lista de comandos e suas categorias
        \n/guilds/:guilID - Inforamções basica do servidor
        \n/guilds/:guildID/members - Lista de todos os membros`);
    })
    //Estatísticas do Bot!
    .use('/statistics', require('./statistics.js')(client))
    //Lista de comandos
    .use('/commands', require('./commands.js')(client))
    //Confirmando se os Web Scrapers não estão sendo usados
    .use('/guilds', require('./guilds.js')(client))
    .get('/robots.txt', function(req, res) {
            res.type('text/plain');
            res.send('User-agent: *\nallow: /\n\nUser-agent: *\ndisallow: /dashboard');
    })
    .get('*', async function(req, res) {
        res.send('Não há nada aqui Zzz');
    })
    //Iniciando o servidor
    .listen(PORT, () => {
        console.log(`Estatísticas da [API] carregado na porta ${PORT}`);
    });
}