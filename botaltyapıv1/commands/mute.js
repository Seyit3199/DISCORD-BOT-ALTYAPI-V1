//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Etiketlenen kullanıcıya 'Muted' rolü verir",
  category: "Moderasyon",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) {
      return message.reply("❌ Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın!");
    }

    const user = message.mentions.members.first();
    if (!user) return message.reply("❌ Susturmak için bir kullanıcı etiketle!");

    const muteRole = message.guild.roles.cache.find(r => r.name === "Muted");
    if (!muteRole) return message.reply("❌ 'Muted' rolü bulunamadı, önce rolü oluştur!");

    await user.roles.add(muteRole);

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("🔇 Kullanıcı Susturuldu")
      .addFields(
        { name: "👤 Kullanıcı", value: `${user.user.tag}`, inline: true },
        { name: "👮‍♂️ Yetkili", value: `${message.author.tag}`, inline: true }
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
