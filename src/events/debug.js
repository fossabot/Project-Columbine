module.exports = async (client, info) => {
	// LOG error event recomendado pelo Ben
	if (client.config.debug) console.log(info);
};