const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'היי') {
    	message.channel.send('$[member]:wink:?היי מה שלומך!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('$[member]:wink:?היי מה שלומך!!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
