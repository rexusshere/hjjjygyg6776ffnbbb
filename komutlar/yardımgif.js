const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`<a:rgb_yildiz:969914717604831313> Gif Yardım Komutları <a:rgb_yildiz:969914717604831313>`,`   

<a:sag:969913106052567061> .**random-gif** Rastgele Gif Atar!
<a:sag:969913106052567061> .**random-banner** Rastgele Banner Atar!
<a:sag:969913106052567061> .**man-gif** Rastgele Erkek Gifi Atar!
<a:sag:969913106052567061> .**woman-gif** Rastgele Kadın Gifi Atar!
<a:sag:969913106052567061> .**couple-gif** Rastgele Sevgili Gifi Atar!
<a:sag:969913106052567061> .**baby-gif** Rastgele Bebek Gifi Atar!
<a:sag:969913106052567061> .**animal-gif** Rastgele Hayvan Gifi Atar!


<a:rgb_yildiz:969914717604831313> **Linkler** <a:rgb_yildiz:969914717604831313>

[Destek Sunucusu](https://discord.gg/QGZrhjg)`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help-gif'],
permLevel: 0
};

exports.help = {
  name: 'yardım-gif',
  description: 'Darknes Code',
  usage: 'yardım'
};