//Puxando as dependencias/arquivos/pastas nescessarias
const { MessageEmbed } = require('discord.js'),
     firebase = require('firebase'),
     db = firebase.database(),
     cooldown = new Set();

module.exports = async (client, message) => {

        //Verificando se o sistema de XP está ativo
        let xpOn = await db.ref(`Xp-Mode/ServerID/${message.guild.id}/XpMode`).once('value')
        xpOn = xpOn.val()
    if (xpOn == 'true') {

    //adicionando cooldowns para evitar spam >:D
    if (!cooldown.has(message.author.id)) {

    //Procurando o user/membro
    db.ref(`Xp-Function/ServerID/${message.guild.id}/Members/${message.author.id}/Level`).once('value').then(async function(XPMODE) {
        if (XPMODE.val() == null) {
            db.ref(`Xp-Function/ServerID/${message.guild.id}/Members/${message.author.id}/Level`).set({ xp: 0, level: 1 })
        } else {
            //gerando o xp e adicionando
            var addXp = Math.round((Math.floor(Math.random() * 3) + 9))
            //adicionando o XP para o proximo nivel
            if (XPMODE.val().level*107 <= XPMODE.val().xp) {

            db.ref(`Xp-Function/ServerID/${message.guild.id}/Members/${message.author.id}/Level`).update({ xp: 0, level: XPMODE.val().level + 1});
        } else {
            db.ref(`Xp-Function/ServerID/${message.guild.id}/Members/${message.author.id}/Level`).update({ xp: XPMODE.val().xp + addXp});
        }
    }
    });
    cooldown.add(message.author.id);
    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, 60000)
        }
    }
}