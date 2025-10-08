//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "unjail",
  description: "Etiketlenen kullanıcının 'Jail' rolünü kaldırır",
  category: "Moderasyon",
  async execute(message, args) {
    
    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return message.reply("❌ Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın!");
    }

    
    if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return message.reply("❌ Benim `Rolleri Yönet` yetkim yok!");
    }

    
    const user = message.mentions.members.first();
    if (!user) {
      return message.reply("❌ Hapis cezasını kaldırmak için bir kullanıcı etiketle!");
    }

    
    const jailRole = message.guild.roles.cache.find(r => r.name === "Jail");
    if (!jailRole) {
      return message.reply("❌ 'Jail' rolü bulunamadı!");
    }

    
    if (!user.roles.cache.has(jailRole.id)) {
      return message.reply("❌ Bu kullanıcı zaten hapiste değil!");
    }

    
    const reason = args.slice(1).join(" ") || "Sebep belirtilmedi";

    try {
      
      await user.roles.remove(jailRole, reason);

      
      const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("🔓 Kullanıcı Hapisten Çıkarıldı")
        .addFields(
          { name: "👤 Kullanıcı", value: `${user.user.tag} (${user.id})`, inline: true },
          { name: "👮‍♂️ Yetkili", value: `${message.author.tag}`, inline: true },
          { name: "📄 Sebep", value: reason, inline: false },
        )
        .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: `İşlem Tarihi`, iconURL: message.author.displayAvatarURL() })
        .setTimestamp();

      message.reply({ embeds: [embed] });

      
      try {
        await user.send(`🔓 ${message.guild.name} sunucusunda hapis cezanız kaldırıldı!\nSebep: ${reason}`);
      } catch (error) {
        
      }

    } catch (error) {
      console.error(error);
      
      if (error.code === 50013) {
        message.reply("❌ Bu kullanıcının rolünü kaldırma yetkim yok! (Kullanıcının rolü benden yüksek olabilir)");
      } else {
        message.reply("❌ Kullanıcının hapis cezası kaldırılırken bir hata oluştu!");
      }
    }
  },
};