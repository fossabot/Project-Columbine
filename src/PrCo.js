//Puxando as dependencias..
const Client = require('./base/PrCo.js')
const fs = require('fs');
const chalk = require('chalk');
const client = new Client();
//Carregando a pasta events
fs.readdir("./src/events/", (err, files) => {
    if (err) return console.error(err);
    console.log(chalk.magenta("Carregando Eventos..."))
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
    console.log(chalk.green(`[+] Eventos Carregados!!`));
  });
//Carregando as pastas de comandos

fs.readdir("./src/commands/", (err, files) => {
  if (err) return console.error(err);
  console.log(chalk.magenta("Carregando Comandos..."))
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
  console.log(chalk.green(`[+] Comandos Carregados!!`));
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

/*process.on('unhandledRejection', err => {
  console.log(`Erro na promisse: ${err.message},`);

  //Mostrar o erro com o debug ativo
  if (client.config.debug) console.log(err);
})*/
//Keep-alive.js para manter o bot 24/7 com auto ping externo
//require('./keep-alive/keep-alive');