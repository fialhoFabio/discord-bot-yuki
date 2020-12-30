const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const config = require('./config.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

commandFiles.forEach((file) => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.question, command)
})

client.once('ready', () => {console.log('Ready!')});

client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const userCommandName = args.shift().toLowerCase();
  if (!client.commands.has(userCommandName)) {
    return message.reply(`Nao existe esse comando, rode o comando \`${config.prefix}help\` para saber mais.`);
  }
  const command = client.commands.get(userCommandName);
  try {
    if (command.args && args.length === 0) {
      throw new Error('Falta argumento');
    }
    command.answer(message, args);
  } catch (error) {
    console.error(error);
    message.reply(`Erro ao rodar esse comando, rode o comando \`${config.prefix}help ${userCommandName}\` para saber mais.`);
  }
})

// login to Discord with your app's token
client.login(config.token);
