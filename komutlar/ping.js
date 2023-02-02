const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
const darknes = new Discord.MessageEmbed()

.setColor("BLACK")
.setDescription('Ping Hesaplanıyor...')

let start = Date.now(); 
let mesaj = await message.channel.send(darknes)
let diff = (Date.now() - start); 
let API = (app.ws.ping).toFixed(2)
    
setInterval(() => {
        
const only = new Discord.MessageEmbed()

.setDescription(`:person_running: **Sistem Hızı** :horse_racing: \n\n:signal_strength: Mesaj Gecikme Süresi ; **${diff}ms** \n\n:computer: Bot Gecikme Süresi ; **${API}ms**`)

mesaj.edit(only);
      
}, 5000)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'lrowsxrd',
  usage: 'ping'
};