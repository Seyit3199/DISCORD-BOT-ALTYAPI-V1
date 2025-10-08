//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "jail",
  description: "Etiketlenen kullanıcıya 'Jail' rolü verir",
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
      return message.reply("❌ Hapsetmek için bir kullanıcı etiketle!");
    }

    
    if (user.id === message.guild.ownerId) {
      return message.reply("❌ Sunucu sahibini hapsethemezsin!");
    }

    
    if (user.id === message.author.id) {
      return message.reply("❌ Kendini hapsethemezsin!");
    }

    
    if (user.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return message.reply("❌ Administratör yetkisine sahip kullanıcıları hapsethemezsin!");
    }

    
    const jailRole = message.guild.roles.cache.find(r => r.name === "Jail");
    if (!jailRole) {
      return message.reply("❌ 'Jail' rolü bulunamadı, önce rolü oluştur!");
    }

    
    if (user.roles.cache.has(jailRole.id)) {
      return message.reply("❌ Bu kullanıcı zaten hapiste!");
    }

    
    const reason = args.slice(1).join(" ") || "Sebep belirtilmedi";

    try {
      
      await user.roles.add(jailRole, reason);

      
      const embed = new EmbedBuilder()
        .setColor("Orange")
        .setTitle("🔒 Kullanıcı Hapse Atıldı")
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
        await user.send(`🔒 ${message.guild.name} sunucusunda hapse atıldın!\nSebep: ${reason}`);
      } catch (error) {
        
      }

    } catch (error) {
      console.error(error);
      
      if (error.code === 50013) {
        message.reply("❌ Bu kullanıcıya rol verme yetkim yok! (Kullanıcının rolü benden yüksek olabilir)");
      } else {
        message.reply("❌ Kullanıcı hapse atılırken bir hata oluştu!");
      }
    }
  },
};