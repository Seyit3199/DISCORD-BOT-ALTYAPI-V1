//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "şanslısayı",
  description: "1 ile 100 arasında şanslı sayı seçer",
  category: "Eğlence",
  async execute(message) {
    const sayı = Math.floor(Math.random() * 100) + 1;

    const embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("🍀 Şanslı Sayın")
      .setDescription(`Bugünkü şanslı sayın: **${sayı}**`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
