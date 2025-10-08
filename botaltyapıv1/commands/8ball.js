//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "8ball",
  description: "Sihirli 8ball sorunu cevaplar",
  category: "Eğlence",
  async execute(message, args) {
    if (!args[0]) return message.reply("❌ Bir soru yazmalısın!");

    const cevaplar = [
      "Evet ✅",
      "Hayır ❌",
      "Belki 🤔",
      "Kesinlikle ✔️",
      "Asla 🚫",
      "Tekrar dene 🔄"
    ];

    const cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle("🎱 8ball Cevabı")
      .addFields(
        { name: "❓ Soru", value: args.join(" ") },
        { name: "💬 Cevap", value: cevap }
      )
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
