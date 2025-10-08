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
db.prepare("CREATE TABLE IF NOT EXISTS cooldown(userID TEXT PRIMARY KEY, çalış INTEGER)").run();

module.exports = {
  name: "çalış",
  description: "Çalışarak para kazanırsın",
  category: "Ekonomi",
  async execute(message) {
    const cooldown = 5 * 60 * 1000; 
    let lastWorkRow = db.prepare("SELECT çalış FROM cooldown WHERE userID = ?").get(message.author.id);
    let lastWork = lastWorkRow ? lastWorkRow.çalış : 0;

    if (Date.now() - lastWork < cooldown) {
      const dk = Math.floor((cooldown - (Date.now() - lastWork)) / 1000 / 60);
      return message.reply(`⏳ Tekrar çalışabilmek için ${dk} dakika bekle!`);
    }

    
    const ödül = Math.floor(Math.random() * 20) + 1;

    
    const aktiviteler = [
      "çöp topladı",
      "yazılım yaptı",
      "araba sattı",
      "ödev yaptı",
      "market alışverişi yaptı",
      "tamir işi yaptı",
      "müzik yaptı",
      "spor salonuna gitti",
      "kargo teslim etti",
      "blog yazdı"
    ];

    const aktivite = aktiviteler[Math.floor(Math.random() * aktiviteler.length)];

    
    let bakiyeRow = db.prepare("SELECT para FROM ekonomi WHERE userID = ?").get(message.author.id);
    let bakiye = bakiyeRow ? bakiyeRow.para : 0;

    
    db.prepare("INSERT OR REPLACE INTO ekonomi(userID, para) VALUES(?, ?)").run(message.author.id, bakiye + ödül);
    db.prepare("INSERT OR REPLACE INTO cooldown(userID, çalış) VALUES(?, ?)").run(message.author.id, Date.now());

    const embed = new EmbedBuilder()
      .setColor("Yellow")
      .setTitle("💼 Çalışma Ödülü")
      .setDescription(`${message.author.username} ${aktivite} ve **${ödül}** 💵 kazandı!`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
