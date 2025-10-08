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
  name: "gönder",
  description: "Başka bir kullanıcıya para gönderirsin",
  category: "Ekonomi",
  async execute(message, args) {
    const user = message.mentions.users.first();
    const miktar = parseInt(args[1]);

    if (!user) return message.reply("❌ Bir kullanıcı etiketle!");
    if (isNaN(miktar) || miktar <= 0) return message.reply("❌ Geçerli bir miktar gir!");
    if (user.id === message.author.id) return message.reply("❌ Kendine para gönderemezsin!");

    
    let senderRow = db.prepare("SELECT para FROM ekonomi WHERE userID = ?").get(message.author.id);
    let senderBakiye = senderRow ? senderRow.para : 0;

    if (senderBakiye < miktar) return message.reply("❌ Yeterli bakiyen yok!");

    
    let receiverRow = db.prepare("SELECT para FROM ekonomi WHERE userID = ?").get(user.id);
    let receiverBakiye = receiverRow ? receiverRow.para : 0;

    
    db.prepare("INSERT OR REPLACE INTO ekonomi(userID, para) VALUES(?, ?)").run(message.author.id, senderBakiye - miktar);
    db.prepare("INSERT OR REPLACE INTO ekonomi(userID, para) VALUES(?, ?)").run(user.id, receiverBakiye + miktar);

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("💸 Para Gönderildi")
      .setDescription(`${message.author} **${miktar}** 💵 ${user} kullanıcısına gönderdi.`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
