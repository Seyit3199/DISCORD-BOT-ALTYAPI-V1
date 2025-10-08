# ?? Botaltyap? V1 - Discord.js Starter Altyap?  

![Botaltyap? Banner](https://media.discordapp.net/attachments/1420313927111413790/1420314791335039008/Adsz_1000_x_500_piksel.png?ex=68da38ba&is=68d8e73a&hm=aeb720106e65355f8a86afcaf61ffb7a0e4886a34e27fe05f0b911b672d4d5dd&=&format=webp&quality=lossless)  

Botaltyap? V1, **Discord.js v15** ile yap?lm?? bir **starter bot altyap?s?d?r**  
Bu proje ile kolayca kendi Discord botunu olu?turabilir, ekonomi, moderasyon ve e?lence sistemlerini kullanabilirsin  

# ?? Ozellikler  

- **Ekonomi Sistemi**  
  - `!cal??` → Cal??arak para kazan?rs?n?z (100-500 aras?na random miktar, 5 dk cooldown)  
  - `!gonder @kullan?c? <miktar>` → Ba?ka kullan?c?ya para gonderirsiniz  
  - `!paragor @kullan?c?` → Kullan?c?n?n bakiyesini gorursunuz  
  - `!adminpara <@kullan?c?> <miktar>` → Yetkili kullan?c?lar bakiye ekleyebilir  
  - `!gunluk` → Gunluk odul kazan?rs?n?z  

- **Better SQLite3 ile veri yonetimi**  
  - Kullan?c? bakiyesi ve cooldown bilgileri guvenli ?ekilde saklan?r  

- **Embed mesajlar**  
  - Ekonomi ve oduller goze ho? embed mesajlarla bildirilir  

- **Cooldown sistemi**  
  - Kullan?c?lar?n komutlar? spamlamas?n? onler  

- **Kurulum Sihirbaz?**  
  - Python ile `.env` olu?turma, paket yukleme ve bot ba?latma ad?mlar?n? tek script ile yapabilirsiniz  



# ?? Ekonomi Komutlar?  
- **cal??** → Rastgele miktarda para kazan?rs?n  
- **gonder** → Ba?ka kullan?c?ya para gonderirsin  
- **paragor** → Kendi veya ba?ka birinin bakiyesini goruntulersin  
- **adminpara** → Admin kullan?c?ya para ekler  
- **gunluk** → Her gun bir defa odul al?rs?n  

# ?? Moderasyon Komutlar?  
- **ban** → Kullan?c?y? sunucudan yasaklar  
- **unban** → Yasakl? kullan?c?y? geri al?r  
- **kick** → Kullan?c?y? sunucudan atar  
- **mute** → Kullan?c?y? susturur  
- **unmute** → Susturulan kullan?c?y? geri acar  
- **jail** → Kullan?c?y? k?s?tl? moda al?r  
- **unjail** → Jail cezas?n? kald?r?r  
- **clear** → Belirli say?da mesaj siler  

# ?? E?lence Komutlar?  
- **8ball** → Rastgele cevap verir  
- **zar** → Zar atar (1-6 aras?)  
- **yaz?tura** → Yaz? tura atar  
- **?ansl?say?** → Rastgele ?ansl? say? verir  
- **ping** → Botun gecikme suresini gosterir  
- **avatar** → Kendi veya etiketlenen ki?inin avatar?n? gosterir  

# ?? Bilgi Komutlar?  
- **kullan?c?** → Kullan?c? hakk?nda bilgi verir  
- **sunucu** → Sunucu hakk?nda bilgi verir  
- **yard?m** → Tum komutlar?n listesini gosterir  
- **uptime** → Botun ne kadar suredir aktif oldu?unu gosterir  

# ?? Kurulum  

1. `setup.py` dosyas?n? ac?n  
2. Konsolda ad?mlar? takip edin  
3. Token, Client ID ve Prefix bilgilerinizi girin  
4. Node.js paketlerini yuklemek istiyorsan?z `1` tu?una bas?n (ba?latmak zorundas?n?z, yoksa bot cal??maz)  
5. Kurulum tamamland?ktan sonra isterseniz botu ba?latabilirsiniz (`1` ile ba?lat, `0` ile c?k)  
6. E?er `0` bast?ysan?z veya yanl??l?kla c?kt?ysan?z terminale tekrar girin  
7. `cd botaltyapi-v1` yaz?n ve klasorun icinde oldu?unuzu terminalde do?rulay?n (ornek: `C:\Users\kullaniciad?\Desktop\botaltyapi-v1`)  
8. Gordukten sonra `npm install` yaz?n  
9. Botu ba?latmak icin `ba?lat.bat` dosyas?n? ac?n, ac?lmazsa sa? t?klay?p **Yonetici olarak cal??t?r**  


# ?? Gereksinimler  
- Node.js 18 veya uzeri  
- Python 3.x (kurulum scripti icin)  


# ?? Ad?mlar  

1. Depoyu bilgisayar?n?za indirin veya klonlay?n  
```bash
git clone https://github.com/Seyit3199/DISCORD-BOT-ALTYAPI-V1.git
cd botaltyapi-v1










