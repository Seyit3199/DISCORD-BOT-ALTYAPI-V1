//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "kullanıcı",
  description: "Etiketlenen kullanıcı hakkında bilgi verir",
  category: "Bilgi",
  async execute(message) {
    const user = message.mentions.users.first() || message.author;
    const member = message.guild.members.cache.get(user.id);

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("👤 Kullanıcı Bilgisi")
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: "🆔 ID", value: user.id, inline: true },
        { name: "📛 Kullanıcı Adı", value: user.tag, inline: true },
        { name: "📆 Katılım", value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
        { name: "📆 Hesap Açılış", value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true },
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
