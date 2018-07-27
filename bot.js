const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'info') {

       message.reply('if you need help with this bot anyway please go to https://discord.gg/QeCpKKu But This bot was created by kierangaming1#8848 And CO-Created by HexDev#0001 DOnt tell him I told you he is the co-creator Anyways  We are cuently trying to get more commands working Anways we are ***Sorry This bot has not got alot of commands at this time be wait for commands*** **Beta**');

       } else 
                     
      
 if(message.content.startsWith("ping")) {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");  
       } else 
     if (message.content === 'help') {

       message.reply('Ping : sees if the bots running fine , help: This screen , say: says what you said , !kick : kicks a player (you cannot add a reason yet ) , !ban : bans a player (you cannot add a reason yet)');
        }  else 
         case 'say': if (message.startsWith("!say") == true) {//Check if the message send starts with "say" var newMessage = message.replace("say ", ""); //Making a variable where "say " is removed bot.sendMessage({to: channelID, message:newMessage})//Send the new variable. } break;
                     
                     
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
