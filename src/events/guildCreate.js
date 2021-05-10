//Puxando Arquivos/Pastas/Dependencias nesecssarias
const firebase = require('firebase');
const db = firebase.database();

module.exports = async (client, guild) => {
  //aplicando as configs para setar na mongodb
  try {
    const newGuild = {
      guildID: guild.id,
      guildName: guild.name,
    };
    await client.CreateGuild(newGuild);
  } catch (err) {
    console.log(`Evento: 'GuildCreate' ocorreu o seguinte erro: ${err.message}.`);
  }

  //Setando as configurações inicias quando o bot entrar no servidor
  let setPrefix = await db.ref(`Configurações/Servidores/${guild.id}/Prefixo`)
  let setPrefix2 = await setPrefix.once('value')
  if (setPrefix2.val() == null) {
  db.ref(`Configurações/Servidores/${guild.id}/Prefixo`).set({
    prefixo: client.config.defaultSettings.prefix,
    servidor: guild.id
    })
  }
}