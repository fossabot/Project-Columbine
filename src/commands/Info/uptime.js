const { MessageEmbed } = require('discord.js'),
    moment = require('moment')
    require("moment-duration-format");

module.exports = {
    name: 'uptime',
    aliases: ['up'],
    category: 'Info',
    description: 'Veja o tempo de Atividade do bot',

    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription(`:construction_site: Estou online há: ${moment.duration(client.uptime).format(' D[ days], H[ hrs], m[ mins], s[ segs]')}.`);
        message.channel.send(embed);
    }
};