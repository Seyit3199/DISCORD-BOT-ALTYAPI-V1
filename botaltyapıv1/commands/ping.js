//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Botun gecikme süresini gösterir",
  category: "Genel",
  async execute(message) {
    const embed = new EmbedBuilder()
      .setColor("Yellow")
      .setTitle("🏓 Pong!")
      .setDescription(`Bot gecikmesi: **${Date.now() - message.createdTimestamp}ms**`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
