const languageData = {
	EVAL_NO_OWNER: '**O que você pensa que está fazendo?**',
	RELOAD_ERROR: (name) => `Não foi possível recarregar: \`${name}\`.`,
	RELOAD_NO_COMMAND: (name) => `${name} não é um comando..`,
	RELOAD_SUCCESS: (name) => `Comando: \`${name}\` foi recarregado.`,
	SHUTDOWN: 'Ah.. ok adeus :disappointed_relieved:',
	SHUTDOWN_ERROR: (error) => `ERROR: ${error}`,
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;
