const { Structure } = require('erela.js');

module.exports = Structure.extend('Player', Player => {
	class boneeplayer extends Player {
		constructor(...args) {
			super(...args);
			this.musicTrivia = false;
			this.speed = 1;
		}

		// adicionando os filtros
		setFilter(body = {}) {
			this.node.send({
				op: 'filters',
				guildId: this.guild.id || this.guild,
				...body,
			});
			return this;
		}

		// resetando os filtros
		resetFilter() {
			this.node.send({
				op: 'filters',
				guildId: this.guild.id || this.guild,
				...{},
			});
			return this;
		}

		// Setando a velocidade do player
		setSpeed(value) {
			this.speed = value;
			this.node.send({
				op: 'filters',
				guildId: this.guild.id || this.guild,
				timescale: { speed: value },
			});
			return this;
		}
	}
	return boneeplayer;
});