//Puxando as dependencias/Arquivos nescessarios
const firebase = require('firebase');
const db = firebase.database();

module.exports = async (client, guild) => {
    //Apagando os dados do banco de dados caso o bot seja removido
    db.ref(`Configurações/Servidores/${guild.id}/Prefixo`).remove()//Dados
    
    //apagando os dados da mongodb
    await client.DeleteGuild(guild);
}