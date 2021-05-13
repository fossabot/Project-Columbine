const { Schema, model } = require('mongoose');

const guildSchema = Schema({
    //Armazenando nome e id do servidor/prefixo
	guildID: String,
	guildName: String,
    prefix: { type: String, default: '!' },
    //DJ Roles
    MusicDJ: { type: Boolean, default: false },
	MusicDJRole: { type: String, default: '00' },
    //Infos basicas
    Language: { type: String, default: 'pt-BR' },
    version: { type: Number, default: '1.1' },

});
module.exports = model('Guild', guildSchema);