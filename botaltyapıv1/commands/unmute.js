//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "unmute",
  description: "Etiketlenen kullanıcının susturmasını kaldırır",
  category: "Moderasyon",
  async execute(message) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return message.reply("❌ Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın!");
    }

    const user = message.mentions.members.first();
    if (!user) return message.reply("❌ Susturmasını kaldırmak için bir kullanıcı etiketle!");

    const muteRole = message.guild.roles.cache.find(r => r.name === "Muted");
    if (!muteRole) return message.reply("❌ 'Muted' rolü bulunamadı!");

    await user.roles.remove(muteRole);

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("🔊 Kullanıcının Susturması Kaldırıldı")
      .addFields(
        { name: "👤 Kullanıcı", value: `${user.user.tag}`, inline: true },
        { name: "👮‍♂️ Yetkili", value: `${message.author.tag}`, inline: true }
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
