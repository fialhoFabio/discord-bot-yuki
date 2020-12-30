module.exports = {
  question: 'user-info',
  description: 'User info',
  answer(message, args) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
  },
};
