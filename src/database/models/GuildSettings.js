const { Schema, model } = require('mongoose');

const guildScheme = Schema({
    //Armazenando nome e id do servidor/prefixo
	guildID: String,
	guildName: String,
    prefix: { type: String, default: '!' },
    //Infos basicas
    Language: { type: String, default: 'pt-BR' },
    version: { type: Number, default: '1.0' },

});
module.exports = model('Guild', guildScheme);