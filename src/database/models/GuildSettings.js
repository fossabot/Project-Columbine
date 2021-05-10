const { Schema, model } = require('mongoose');

const guildScheme = Schema({
    guildID: String,
    guildName: String,
    prefix: { type: String, default: 'p!' },
    Language: { type: String, default: 'pt-BR' },
});
module.exports = model('Guild', guildScheme);