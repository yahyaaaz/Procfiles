const Discord = require('discord.js');
const client = new Discord.Client("NTI5NjQ2NTcwOTgzOTE1NTUx.Dxo4kw.a24J-l7YURbGDayDlP5pk-5_xGw");

client.on('ready', () => {
    client.user.setGame(`〄  hello fucked up world♡
 `,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
  console.log(`Logged in as ${client.user.tag}!`);
});
