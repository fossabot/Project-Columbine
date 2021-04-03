//Puxando as Dependencias/Arquivos/Pastas Nescessarias
const express = require('express')
    router = express.Router();

module.exports = function(client) {
    //Mostrar a lista de comadnos
    router.get('/:guildId', async (req, res) => {
        if (client.config.debug) console.log(`IP: ${req.connection.remoteAddress.slice(7)} acesso a \`/commands/${req.params.command}\`.`);
        const guild = client.guilds.cache.get(req.params.guildId);
        if (guild) {
            const { id, name, icon, members: { size } } = guild;
            const userMembers = guild.members.cache.filter(m => !m.user.client).size;
            const botMembers = size - userMembers;
            return res.status(200).json({ id, name, icon, totalMembers: size, userMembers, botMembers });
        }
        //Setando um erro http caso apresente algum erro no servidor
        res.status(400).json({ error: 'Servidor não encontrado'});
    });

    //Pegando a listra de membros no servidor
    router.get('/:guildId/members', async (req, res) => {
        if (client.config.debug) client.log(`IP: ${req.connection.remoteAddress.slice(7)} acessdo a \`/guilds/${req.params.guildId}/membros\`.`);
        const guild = client.guilds.cache.get(req.params.guildId);
        if (guild) {
            const members = guild.members.cache.map(member => ({
                tag: member.user.tag,
                avatar: member.user.displayAvatarURL({ size: 128 }),
            }));
            return res.status(200).json({ members });
        }
        res.status(400).json({ error: 'Servidor não encontrado'})
    })
    return router;
}