module.exports = {
	question: 'ping',
	description: 'Ping!',
	answer(message, args) {
		message.channel.send('Pong.');
	},
};
