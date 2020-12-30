module.exports = {
  question: 'server',
  description: 'Server info',
  answer(message, args) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  },
};
