//       ____  _____       _       _____     ______   ________  ____   ____  
//      |_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
//        |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
//        | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
//        _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
//      |_____|____||____| |____||________||______.'|________|     \_/      
//

require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,          
    GatewayIntentBits.GuildMessages,   
    GatewayIntentBits.MessageContent,  
    GatewayIntentBits.GuildMembers     
  ],
});


client.commands = new Collection();
client.prefix = process.env.PREFIX || "nd!";


const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}


client.once("clientReady", () => {
  console.log(`${client.user.tag} giriş yaptı!`);
  client.user.setPresence({
    status: "online",
    activities: [
      { name: `${client.prefix}yardım | Ekonomi & Eğlence`, type: 3 } 
    ],
  });
});


client.login(process.env.TOKEN);
