module.exports = {
  question: 'prune',
  description: 'Deleta um numero de mensagens',
  answer(message, args) {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
      return message.reply('Número inválido');
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send('there was an error trying to prune messages in this channel!');
    });
  },
};
