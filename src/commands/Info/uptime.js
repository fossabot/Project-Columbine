const { MessageEmbed } = require('discord.js'),
    moment = require('moment')
    require("moment-duration-format");

exports.run = async (client, message) => {
    const embed = new MessageEmbed()
    .setDescription(`:construction_site: Estou online há: ${moment.duration(client.uptime).format(' D[ days], H[ hrs], m[ mins], s[ segs]')}.`);
    message.channel.send(embed);
}
