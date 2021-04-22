//Puxando as dependencias/arquivos/pastas nescessarias
const { MessageEmbed } = require('discord.js'),
     firebase = require('firebase'),
     db = firebase.database();

exports.run = async (client, message, args) => {

    if (!args[0]) {
        const embed = new MessageEmbed()
        .setTitle('teste')
        .setDescription('teste')
        message.channel.send(embed);
    } else if (args[0] == 'true') {
        db.ref(`Xp-Mode/ServerID/${message.guild.id}/XpMode`).set('true');
        message.channel.send('ModoXP adicionado ao servidor!!')

    }
}