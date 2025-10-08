//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//
const { EmbedBuilder } = require("discord.js");
const Database = require("better-sqlite3");
const db = new Database("./data.sqlite");


db.prepare("CREATE TABLE IF NOT EXISTS ekonomi(userID TEXT PRIMARY KEY, para INTEGER)").run();

module.exports = {
  name: "para",
  description: "Mevcut bakiyeni gösterir",
  category: "Ekonomi",
  async execute(message) {
    
    let bakiyeRow = db.prepare("SELECT para FROM ekonomi WHERE userID = ?").get(message.author.id);
    let bakiye = bakiyeRow ? bakiyeRow.para : 0;

    const embed = new EmbedBuilder()
      .setColor("Gold")
      .setTitle("💵 Bakiyen")
      .setDescription(`${message.author}, mevcut bakiyen **${bakiye}** 💵`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
