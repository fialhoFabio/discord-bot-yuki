module.exports = {
  question: 'ameace',
  description: 'Ameaca um usuario',
  answer(message, args) {
    if (!message.mentions.users.size) {
      return message.reply('Voce precisa de mensionar um usuario para ameaca-lo');
    }
    return message.channel.send(`Vo te da umas pauladas ${message.mentions.users.first().username}`);
  },
};
