//puxando as dependencias/arquivos/pastas necessarias
const DBL = require('dblapi.js');

module.exports = async (client) => {
	const dbl = new DBL(client.config.DiscordBotLists.DBL_key, { webhookPort: 8000, webhookAuth: 'anyPassword' });

	dbl.webhook.on('ready', hook => {
		console.log(`DBL webhook running on: http://${hook.hostname}:${hook.port}${hook.path}`);
	});

	//caso ocorra algum erro
	dbl.on('error', err => {
		console.log(`An error has occured: ${err.message}`);
	});

	// Quando o webhook recebe um voto
	dbl.webhook.on('vote', async vote => {
		// Isso irá registrar todo o objeto de voto no console
		console.log(vote);
		const userID = vote.user;
        if(channelForWebhooks) await channelForWebhooks.send(`User with ID \`${userID}\` just voted!`);
	});
};