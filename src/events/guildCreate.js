//Puxando Arquivos/Pastas/Dependencias nesecssarias
const firebase = require('firebase');
const db = firebase.database();

module.exports = async (client, guild) => {
    //Setando as configurações inicias quando o bot entrar no servidor
    let setPrefix = await db.ref(`Configurações/Servidores/${guild.id}/Prefixo`)
    let setPrefix2 = await setPrefix.once('value')
    if (setPrefix2.val() == null) {
    db.ref(`Configurações/Servidores/${guild.id}/Prefixo`).set({
      prefixo: client.config.prefix,
      servidor: guild.id
    })
  }
}