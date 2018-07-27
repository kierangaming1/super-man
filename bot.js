const client = new Discord.Client();


client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "~"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'info')) {
		message.channel.sendMessage('if you need help with this bot anyway please go to https://discord.gg/QeCpKKu But This bot was created by kierangaming1#8848 And CO-Created by HexDev#0001 DOnt tell him I told you he is the co-creator Anyways  We are cuently trying to get more commands working Anways we are ***Sorry This bot has not got alot of commands at this time be wait for commands*** **Beta**');
	} else 
 
                     
      
 if (message.author === client.user) return;
	if (message.content.startsWith(prefix +'ping')) {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");  
       } else 
     if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help') {

       message.reply('Ping : sees if the bots running fine , help: This screen , say: says what you said , !kick : kicks a player (you cannot add a reason yet ) , !ban : bans a player (you cannot add a reason yet)');
        } 
                     
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
