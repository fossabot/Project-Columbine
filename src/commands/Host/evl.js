// Dependencies
const { inspect } = require('util');

module.exports = {
    name: 'evl',
    aliases: ['evl'],
    category: 'Host',
    description: 'Eval?',

    run: async (client, message, args) => {
		// Evaluated the code
		const toEval = args.join(' ');
		try {
			if (toEval) {
				// Auto-complete commands
				const hrStart = process.hrtime();
				const evaluated = inspect(await eval(toEval, { depth: 0 }));
				const hrDiff = process.hrtime(hrStart);
				return await message.channel.send(('HOST/EVAL_RESPONSE', [hrDiff, evaluated]), { maxLength: 1900 });
			} else {
				return message.channel.send('INCORRECT_FORMAT').then(m => m.delete({ timeout: 5000 }));
			}
		} catch (err) {
			if (message.deletable) message.delete();
			console.log(`Command: 'evl' has error: ${err.message}.`);
			message.channel.send('ERROR_MESSAGE', err.message).then(m => m.delete({ timeout: 5000 }));
		}
	}
};