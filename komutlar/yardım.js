const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`<a:rgb_yildiz:969914717604831313> Yardım Komutları <a:rgb_yildiz:969914717604831313>`,`   

<a:sag:969913106052567061> .**yardım-kullanıcı** Kullanıcı Komutları!
<a:sag:969913106052567061> .**yardım-gif** Gif Komutları!


<a:rgb_yildiz:969914717604831313> **Linkler** <a:rgb_yildiz:969914717604831313>

[Destek Sunucusu](https://discord.gg/QGZrhjg)`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gif Central',
  usage: 'yardım'
};