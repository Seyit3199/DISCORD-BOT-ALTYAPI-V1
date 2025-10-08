//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "sunucu",
  description: "Sunucu hakkında bilgi verir",
  category: "Bilgi",
  async execute(message) {
    const { guild } = message;

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle(`🏠 ${guild.name}`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        { name: "👑 Sahip", value: `<@${guild.ownerId}>`, inline: true },
        { name: "👥 Üye Sayısı", value: `${guild.memberCount}`, inline: true },
        { name: "📆 Kuruluş", value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>`, inline: false },
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
