//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "clear",
  description: "Belirtilen sayıda mesajı siler",
  category: "Moderasyon",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
      return message.reply("❌ Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmalısın!");
    }

    const amount = parseInt(args[0]);
    if (isNaN(amount) || amount <= 0 || amount > 100) {
      return message.reply("❌ 1 ile 100 arasında bir sayı gir!");
    }

    await message.channel.bulkDelete(amount, true);

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("🧹 Mesajlar Silindi")
      .setDescription(`📌 **${amount}** mesaj başarıyla silindi.`)
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
