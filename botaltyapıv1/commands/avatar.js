//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Etiketlenen kişinin avatarını gösterir",
  category: "Eğlence",
  async execute(message) {
    const user = message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle(`${user.username} kullanıcısının avatarı`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
