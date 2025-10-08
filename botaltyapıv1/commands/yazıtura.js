//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "yazıtura",
  description: "Yazı-tura atar",
  category: "Eğlence",
  async execute(message) {
    const sonuc = Math.random() < 0.5 ? "🪙 Yazı" : "🪙 Tura";

    const embed = new EmbedBuilder()
      .setColor("Aqua")
      .setTitle("🎲 Yazı Tura")
      .setDescription(`Sonuç: **${sonuc}**`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
