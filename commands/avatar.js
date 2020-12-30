module.exports = {
  question: 'avatar',
  description: 'Mostra o seu avatar ou o avatar de um ou mais usuarios',
  answer(message, args) {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar:`, {files: [message.author.displayAvatarURL({ format: "png", dynamic: true })]});
    }
    return message.mentions.users.map(user => {
      return message.channel.send(`${user.username}'s avatar:`, {files: [user.displayAvatarURL({ format: "png", dynamic: true })]});
    });
  },
};
