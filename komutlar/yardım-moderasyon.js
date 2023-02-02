const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`<a:rgb_yildiz:969914717604831313> Moderasyon Komutları <a:rgb_yildiz:969914717604831313>`,`   

<a:sag:969913106052567061> .**ban** Belirtilen Kişiyi Sunucudan Yasaklar!
<a:sag:969913106052567061> .**kick** Belirten Kişiyi Sunucudan Atar!
<a:sag:969913106052567061> .**unban** Belirten Kişinin Yasağını Kaldırır!


<a:rgb_yildiz:969914717604831313> **Linkler** <a:rgb_yildiz:969914717604831313>

[Destek Sunucusu](https://discord.gg/QGZrhjg)`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['yardım-mode1rasyon'],
permLevel: 0
};

exports.help = {
  name: 'mod1erasyon',
  description: 'Darknes Code',
  usage: 'moderasyon'
};