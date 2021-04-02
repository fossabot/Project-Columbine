//Puxando as dependencias/Arquivos nescessarios
const firebase = require('firebase');
const db = firebase.database();

module.exports = async (client, guild) => {
    //Apagando os dados do banco de dados caso o bot seja removido
    db.ref(`Configurações/Servidores/${guild.id}/Prefixo`).remove()//Dados
    //db.ref(`Levels-e-xp/Servidores/${guild.id}/User/${message.author.id}/Levels`).remove()//Xp
    //db.ref(`Premium/Servidores/${guild.id}/Premium`).remove()//
    
}