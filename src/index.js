//Puxando as dependencias..
const Client = require('./base/PrCo.js')
const fs = require('fs');
const firebase = require('firebase')
const client = new Client();
//Inicializador do banco de dados
const mdbf = {
  apiKey: client.firebase.api_Key,
  databaseURL: client.firebase.database_URL,
  appID: client.firebase.app_Id
}
firebase.initializeApp(mdbf);
//Carregando a pasta events
fs.readdir("./src/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
      console.log(`${eventName} Iniciado.`)
    });
  });
//Carregando as pastas de comandos

fs.readdir("./src/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});
//Ligando o Player de Musica
try {
    require('./base/Audio-Player')(client);
} catch (e) {
  console.log(e)
}

//Processo para ligar o bot
const token = client.config.token;
client.login(token).catch(e => console.log(e.message));
//Keep-alive.js para manter o bot 24/7 com auto ping externo
//require('./modules/keep-alive/keep-alive');