//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "unban",
  description: "Yasaklanan kullanıcının yasağını kaldırır",
  category: "Moderasyon",
  async execute(message, args) {
    
    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return message.reply("❌ Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın!");
    }

    
    if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers)) {
      return message.reply("❌ Benim `Üyeleri Yasakla` yetkim yok!");
    }

    
    const userId = args[0];
    if (!userId) {
      return message.reply("❌ Yasağını kaldırmak için bir kullanıcı ID'si belirt!\nÖrnek: `unban 123456789012345678`");
    }

    
    const reason = args.slice(1).join(" ") || "Sebep belirtilmedi";

    try {
      
      const bannedUsers = await message.guild.bans.fetch();
      const bannedUser = bannedUsers.find(ban => ban.user.id === userId);

      if (!bannedUser) {
        return message.reply("❌ Bu kullanıcı yasaklı değil veya kullanıcı bulunamadı!");
      }

      
      await message.guild.members.unban(userId, reason);

      
      const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("✅ Kullanıcının Yasağı Kaldırıldı")
        .addFields(
          { name: "👤 Kullanıcı", value: `${bannedUser.user.tag} (${bannedUser.user.id})`, inline: true },
          { name: "👮‍♂️ Yetkili", value: `${message.author.tag}`, inline: true },
          { name: "📄 Sebep", value: reason, inline: false },
        )
        .setThumbnail(bannedUser.user.displayAvatarURL({ dynamic: true }))
        .setFooter({ text: `İşlem Tarihi`, iconURL: message.author.displayAvatarURL() })
        .setTimestamp();

      message.reply({ embeds: [embed] });

      
      try {
        await bannedUser.user.send(`✅ ${message.guild.name} sunucusundan yasağın kaldırıldı!\nSebep: ${reason}`);
      } catch (error) {
        
      }

    } catch (error) {
      console.error(error);
      message.reply("❌ Kullanıcının yasağı kaldırılırken bir hata oluştu!");
    }
  },
};