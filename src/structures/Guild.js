// Dependencias
const { Structures } = require('discord.js'),
	{ GuildSchema } = require('../database/models');

module.exports = Structures.extend('Guild', Guild => {
    class CustomGuild extends Guild {
        constructor(client, data) {
            super(client, data);
    //armazenar as configs em cache
    this.settings = {};
    }
    //Buscar as config do cache
	async fetchGuildConfig() {
		const data = await GuildSchema.findOne({ guildID: this.id });
		this.settings = data;
    }
		// atualizando as configs
		async updateGuild(settings) {
			console.log(`Servidor: [${this.id}] Foi atualizado as seguintes Configs: ${Object.keys(settings)}`);
			return await GuildSchema.findOneAndUpdate({ guildID: this.id }, settings).then(async () => await this.fetchGuildConfig());
		}
	}
	return CustomGuild;
});