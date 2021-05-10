const mongoose = require('mongoose');
const chalk = require('chalk');

module.exports = {
	init: (client) => {
		const dbOptions = {
			useNewUrlParser: true,
			autoIndex: false,
			poolSize: 5,
			connectTimeoutMS: 10000,
			family: 4,
			useUnifiedTopology: true,
		};
		mongoose.connect(client.config.MongoDBURl, dbOptions);
		mongoose.set('useFindAndModify', false);
		mongoose.Promise = global.Promise;
		mongoose.connection.on('connected', () => {
			console.log(chalk.greenBright('[DATABASE2] Conexão do Mongoose aberta com sucesso', 'ready'));
		});
		mongoose.connection.on('err', (err) => {
			console.log(chalk.redBright(`[DATABASE2] Erro de conexão do Mongoose: \n ${err.stack}`));
		});
		mongoose.connection.on('disconnected', () => {
			console.log(chalk.redBright('[DATABASE2] Desconectada'));
		});
	},
	async ping() {
		const currentNano = process.hrtime();
		await mongoose.connection.db.command({ ping: 1 });
		const time = process.hrtime(currentNano);
		return (time[0] * 1e9 + time[1]) * 1e-6;
	},
};