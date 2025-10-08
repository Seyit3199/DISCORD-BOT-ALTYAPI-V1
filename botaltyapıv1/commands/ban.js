//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Etiketlenen kullanıcıyı sunucudan yasaklar",
  category: "Moderasyon",
  async execute(message, args) {
    
    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return message.reply("❌ Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın!");
    }

    
    const user = message.mentions.users.first();
    if (!user) {
      return message.reply("❌ Banlamak için bir kullanıcı etiketle!");
    }

    const member = message.guild.members.cache.get(user.id);
    if (!member) {
      return message.reply("❌ Bu kullanıcı bu sunucuda bulunamadı!");
    }

    
    if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return message.reply("❌ Benim `Üyeleri Yasakla` yetkim yok!");
    }

    
    if (member.id === message.guild.ownerId) {
      return message.reply("❌ Sunucu sahibini banlayamazsın!");
    }

    
    const reason = args.slice(1).join(" ") || "Sebep belirtilmedi";

    try {
      
      await user.send(`🚫 ${message.guild.name} sunucusundan yasaklandın!\nSebep: ${reason}`).catch(() => {});

      
      await member.ban({ reason });

      
      const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("🚫 Kullanıcı Yasaklandı")
        .addFields(
          { name: "👤 Kullanıcı", value: `${user.tag} (${user.id})`, inline: true },
          { name: "👮‍♂️ Yetkili", value: `${message.author.tag}`, inline: true },
          { name: "📄 Sebep", value: reason, inline: false },
        )
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: `İşlem Tarihi`, iconURL: message.author.displayAvatarURL() })
        .setTimestamp();

      message.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.reply("❌ Kullanıcı banlanırken bir hata oluştu!");
    }
  },
};
