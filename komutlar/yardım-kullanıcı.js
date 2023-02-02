const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
    
.setColor('GREEN')
.addField(`<a:rgb_yildiz:969914717604831313> Kullanıcı Komutları <a:rgb_yildiz:969914717604831313>`,`

<a:sag:969913106052567061> .**avatar** Etiketlediğiniz Kişinin Avatarını Gösterir!
<a:sag:969913106052567061> .**sunucu-bilgi** Sunucunun İstatistiklerini Gösterir!
<a:sag:969913106052567061> .**kullanıcı-bilgi** Etiketlediğiniz Kişinin Profilini Gösterir!
<a:sag:969913106052567061> .**ping** Botun Pingini Gösterir!
<a:sag:969913106052567061> .**istatistik** Botun İstatistiğini Gösterir!


<a:rgb_yildiz:969914717604831313> **Linkler** <a:rgb_yildiz:969914717604831313>

[Destek Sunucusu](https://discord.gg/QGZrhjg)`)

    
message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-kullanıcı','kullanıcı-yardım','yardımkullanıcı','kullanıcıyardım'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Darknes Code',
  usage: 'kullanıcı'
};