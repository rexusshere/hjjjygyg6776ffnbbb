const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/699339066029768796/736983333254332456/1.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931457289945118/cute-kitty-best-kitty.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931457831022662/kedih.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931457831022662/kedih.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931456606294027/oxytyche_51.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931456316895353/oxytyche_17.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931422745681970/oxytyche_6.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931422393339904/gatinho.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931422108155954/a_8dd92a37856af33cb72a5c5e5e1d721e.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931421315416074/Funny_PP_Gif_27.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931420875018241/Funny_PP_Gif_168.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931420589817886/Funny_PP_Gif_23.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931377426227220/cute_dog.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931375236808764/louisagif10.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931374536343553/kidikidi6.gif","https://cdn.discordapp.com/attachments/608711488806584330/940931323378409542/IMG_0968.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Animal Gif ;")
    
.setColor("BLACK")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-animal','animal-gif','gifanimal','animalgif'],

  permLevel: 0

};

exports.help = {

  name: 'animal',

  description: 'lrowsxrd',

  usage: 'baby'

};