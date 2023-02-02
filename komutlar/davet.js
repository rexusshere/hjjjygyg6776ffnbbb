 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcılarım ", " <@589208184602755075> ,<@489408764709961739>")

.setDescription(`<a:discordloading:750628595709247538> **Botun Davet Linki ;** [TIKLA](https://discord.com/oauth2/authorize?client_id=760171207152369744&scope=bot&permissions=8) \n<a:discordloading:750628595709247538> **Destek Sunucusu ;** [TIKLA](https://discord.gg/QGZrhjg)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor(`BLACK`)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et','botu-ekle'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'lrowsxrd',
  usage: 'davet'
}; 