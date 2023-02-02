const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/banners/919228455978172456/a_5211c7ea9232e16c8b20ed956efa08ef?size=4096","https://cdn.discordapp.com/banners/909792482471063552/a_e7f5be47e90291e186c4c42a4aa81bfc?size=4096","https://cdn.discordapp.com/banners/771331844548853800/a_0ceb4044339ab34e5dbe94dde10d7bed?size=4096","https://cdn.discordapp.com/banners/527188708202381344/a_9fcf9c536555bd729960e4567ad00313?size=4096","https://cdn.discordapp.com/banners/269882162348687361/a_75ccea6d1f71d97c69c31809555faec7?size=4096","https://cdn.discordapp.com/banners/251746918026182657/a_34bb1de3433a0a6fdbe920cd8c4f5dae?size=4096","https://cdn.discordapp.com/banners/310664736482263041/a_1ebcf6edfe11d95d7688c3a0936de8ec?size=4096","https://cdn.discordapp.com/banners/355727602570493953/a_e3ae427bb3f7c1256f4b600d0cbe17a7?size=4096","https://cdn.discordapp.com/banners/934944267539992586/a_884cac27779617fdf55888024fe11826?size=4096","https://cdn.discordapp.com/banners/874007872726499358/a_bfecb1dfd97d4fc312ef2e166cf35b22?size=4096","https://cdn.discordapp.com/banners/720890537535864913/a_a96ef0b139c106ec6b7371eeaed41d3d?size=4096","https://cdn.discordapp.com/banners/770250647769448469/a_a27017c6b90909221af548e14a693b92?size=4096","https://cdn.discordapp.com/banners/934124122420707328/a_346d784aa2f99d9e11b43a2fcea33d94?size=4096","https://cdn.discordapp.com/attachments/857714045251878972/966720192904327208/5913147a52fa562e51a8c96ab0e96c05.gif","https://cdn.discordapp.com/attachments/857714045251878972/967101912153481236/4471fc3a59be4cb08958d9292231f2fb.gif","https://cdn.discordapp.com/attachments/857714045251878972/967101877831483442/0dae6c58048bbc140d33de6e3784b348.gif","https://cdn.discordapp.com/attachments/857714045251878972/967844750730346516/20220424_195951.gif","https://cdn.discordapp.com/attachments/857714045251878972/967902227438120980/a_9a30698df4ed347967fbe1fabd63306d.gif","https://cdn.discordapp.com/attachments/857714045251878972/968061231908937738/83f8988e-5424-43e0-a351-2e35baed16c2.gif","https://cdn.discordapp.com/attachments/857714045251878972/968061232257073152/8af123b7-08ae-4159-8f88-785486c5adfa.gif","https://cdn.discordapp.com/attachments/857714045251878972/968061232806494208/b34d3ab9-8bb2-4cc2-9992-5112be8593e4.gif","https://cdn.discordapp.com/attachments/857714045251878972/968377651330940928/51E9425C-41D2-42F5-ACFF-A9598D228748.gif","https://cdn.discordapp.com/attachments/857714045251878972/968377743161061396/046A0BF4-0D26-43E9-93A9-CB3E450F8A4B.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Banner Gif ;")

.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['random-banner','banner-gif','gifbanner','bannergif'],

  permLevel: 0

};

exports.help = {

  name: 'banner',

  description: 'lrowsxrd',

  usage: 'couple'

};