//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "zar",
  description: "1-6 arası zar atar",
  category: "Eğlence",
  async execute(message) {
    const zar = Math.floor(Math.random() * 6) + 1;

    const embed = new EmbedBuilder()
      .setColor("Orange")
      .setTitle("🎲 Zar Sonucu")
      .setDescription(`🎲 Zar: **${zar}**`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
