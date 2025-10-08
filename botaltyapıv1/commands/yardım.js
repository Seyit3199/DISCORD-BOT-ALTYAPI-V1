//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "yardım",
  description: "Tüm komutları kategorilere göre listeler",
  category: "Genel",
  async execute(message, args, client) {
    if (!client.commands || client.commands.size === 0)
      return message.reply("❌ Henüz komut bulunamadı!");

    
    const kategoriler = {};
    client.commands.forEach(cmd => {
      const kategori = cmd.category || "Diğer";
      if (!kategoriler[kategori]) kategoriler[kategori] = [];
      kategoriler[kategori].push(`\`${client.prefix}${cmd.name}\` → ${cmd.description}`);
    });

    
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("📜 Komut Listesi")
      .setFooter({ text: `İsteyen: ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp();

    
    for (const kategori in kategoriler) {
      embed.addFields({
        name: `📂 ${kategori}`,
        value: kategoriler[kategori].join("\n"),
        inline: false,
      });
    }

    message.reply({ embeds: [embed] });
  },
};
