//Puxando as Dependencias/Arquivos/Pastas Nescessarias
const express = require('express')
	router = express.Router();

module.exports = function(client) {
	//Puxando a lista de comandos
	router.get('/', function(req, res) {
		if (client.config.debug) console.log(`IP: ${req.connection.remoteAddress.slice(7)} acessado \`/commands\`.`);
		const categories = client.commands
			.map(c => c.help.category)
			.filter((v, i, a) => a.indexOf(v) === i)
			.sort((a, b) => a - b)
			.map(category => ({
				name: category,
				commands: client.commands.filter(c => c.help.category === category)
					.sort((a, b) => a.help.name - b.help.name)
					.map(c => c.help.name),
			}));

		res.status(200).json({
			categories,
		});
	});

	//Mostrar a informação do comando
	router.get('/:command', function(req, res) {
		if (client.config.debug) console.log(`IP: ${req.connection.remoteAddress.slice(7)} acesso a \`/commands/${req.params.command}\`.`);
		if (client.commands.get(req.params.command) || client.commands.get(client.aliases.get(req.params.command))) {
			const command = client.commands.get(req.params.command) || client.commands.get(client.aliases.get(req.params.command));
			res.status(200).json({
				command,
			});
		} else {
			res.status(400).json({ error: 'Invalid command!' });
		}
	});

	return router;
};