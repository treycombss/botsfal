const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('f!seviye','Seviyenizi atar.')
.addField('f!seviye-ayarlar','seviye komutlarının sunucudaki ayarlarını atar.')
.addField('f!seviye-aç','Seviye Sistemini açarsınız.')
.addField('f!seviye-kapat','Seviye sistemini kapatırsınız.')
.addField('f!seviye-log','Level atlayan kullanıcıları bu kanala atar.')
.addField('f!seviye-rol','Seviye ödülünü ayarlarsınız.')
.addField('f!seviye-xp','mesaj başına gelecek puanı ayarlarsınız.')
.setFooter('Fallen Bot  Seviye Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};