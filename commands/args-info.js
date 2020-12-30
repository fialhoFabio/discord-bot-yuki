module.exports = {
  args: true,
  usage: '[<argument>]',
  question: 'args-info',
  description: 'Information about the arguments provided.',
  answer(message, args) {
    if (args[0] === 'foo') {
      return message.channel.send('bar');
    }

    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  },
};
