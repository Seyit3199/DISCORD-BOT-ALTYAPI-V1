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
  name: "adminpara",
  description: "Admin yetkisi ile bir kullanıcıya para ekle veya sil",
  category: "Ekonomi",
  async execute(message, args) {
    
    if (!message.member.permissions.has("Administrator")) {
      return message.reply("❌ Bu komutu kullanmak için Yönetici olmalısın!");
    }

    const user = message.mentions.users.first();
    const miktar = parseInt(args[1]);
    const işlem = args[0]?.toLowerCase(); 

    if (!user) return message.reply("❌ Bir kullanıcı etiketle!");
    if (isNaN(miktar)) return message.reply("❌ Geçerli bir miktar gir!");
    if (!["ekle", "çıkar"].includes(işlem)) return message.reply("❌ İşlem türü belirt: ekle veya çıkar");

    
    let bakiyeRow = db.prepare("SELECT para FROM ekonomi WHERE userID = ?").get(user.id);
    let bakiye = bakiyeRow ? bakiyeRow.para : 0;

    if (işlem === "ekle") {
      bakiye += miktar;
    } else {
      bakiye -= miktar;
      if (bakiye < 0) bakiye = 0; 
    }

    
    db.prepare("INSERT OR REPLACE INTO ekonomi(userID, para) VALUES(?, ?)").run(user.id, bakiye);

    const embed = new EmbedBuilder()
      .setColor(işlem === "ekle" ? "Green" : "Red")
      .setTitle("💰 Admin Para İşlemi")
      .setDescription(`${message.author} tarafından ${user} kullanıcısının bakiyesi ${işlem === "ekle" ? "artırıldı" : "azaltıldı"}.\nYeni bakiye: **${bakiye}** 💵`)
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
};
