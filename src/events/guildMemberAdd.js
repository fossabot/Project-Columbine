//Puxando as dependencias/arquivos/pastas nescessarias
const { MessageEmbed } = require('discord.js'),
    moment = require('moment'),
    firebase = require('firebase'),
    db = firebase.database();

module.exports = async (client, guild) => {
    //criando o plugin raid/selfbot
   /* if (client.config.AntRaidPlugin) {
        const daysSinceCreate = moment().diff(moment(member.user.createdAt), days)
        const DefaultAvatar = member.user.displayAvatarURL.startsWith('https://discordapp.com/')
        const domainCount = member.user.username.matchmatch(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/)
        if (domainCount > 0 && (DefaultAvatar || daysSinceCreate < 3)) return (() => { member.send('Você foi expulso do servidor por suspeita de Raid/SelfBot').catch(); member.kick('AutoKick: Raids/SelftBots aqui não >:D').catch() })()
    }*/
}