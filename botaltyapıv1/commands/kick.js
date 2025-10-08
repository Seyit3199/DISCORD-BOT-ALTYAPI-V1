//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Etiketlenen kullanıcıyı sunucudan atar",
  category: "Moderasyon",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      return message.reply("❌ Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın!");
    }

    const user = message.mentions.users.first();
    if (!user) return message.reply("❌ Atmak için bir kullanıcı etiketle!");

    const member = message.guild.members.cache.get(user.id);
    if (!member) return message.reply("❌ Bu kullanıcı sunucuda bulunamadı!");

    if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.KickMembers)) {
      return message.reply("❌ Benim `Üyeleri At` yetkim yok!");
    }

    const reason = args.slice(1).join(" ") || "Sebep belirtilmedi";

    try {
      await member.kick(reason);

      const embed = new EmbedBuilder()
        .setColor("Orange")
        .setTitle("👢 Kullanıcı Atıldı")
        .addFields(
          { name: "👤 Kullanıcı", value: `${user.tag}`, inline: true },
          { name: "👮‍♂️ Yetkili", value: `${message.author.tag}`, inline: true },
          { name: "📄 Sebep", value: reason, inline: false },
        )
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

      message.reply({ embeds: [embed] });
    } catch (err) {
      console.error(err);
      message.reply("❌ Kullanıcı atılırken bir hata oluştu!");
    }
  },
};
