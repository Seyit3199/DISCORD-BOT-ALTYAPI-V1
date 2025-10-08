

# 🤖 Botaltyapi V1 - Discord.js Starter Altyapi

Botaltyapi V1, **Discord.js v15** ile yapilmis bir **starter bot altyapisidir**
Bu proje ile kolayca kendi Discord botunu olusturabilir, ekonomi, moderasyon ve eglence sistemlerini kullanabilirsin

# 🚀 Ozellikler

* **Ekonomi Sistemi**

  * `!calis` → Calisarak para kazanirsiniz (100-500 arasina random miktar, 5 dk cooldown)
  * `!gonder @kullanici <miktar>` → Baska kullaniciya para gonderirsiniz
  * `!paragor @kullanici` → Kullanicinin bakiyesini gorursunuz
  * `!adminpara <@kullanici> <miktar>` → Yetkili kullanicilar bakiye ekleyebilir
  * `!gunluk` → Gunluk odul kazanirsiniz

* **Better SQLite3 ile veri yonetimi**
  * Kullanici bakiyesi ve cooldown bilgileri guvenli sekilde saklanir

* **Embed mesajlar**
  * Ekonomi ve oduller goze hos embed mesajlarla bildirilir

* **Cooldown sistemi**
  * Kullanicilarin komutlari spamlamasini onler

* **Kurulum Sihirbazi**
  * Python ile `.env` olusturma, paket yukleme ve bot baslatma adimlarini tek script ile yapabilirsiniz

# 💰 Ekonomi Komutlari

* **calis** → Rastgele miktarda para kazansin
* **gonder** → Baska kullaniciya para gonder
* **paragor** → Kendi veya baska birinin bakiyesini goruntule
* **adminpara** → Admin kullaniciya para ekle
* **gunluk** → Her gun bir defa odul al

# 🛡 Moderasyon Komutlari

* **ban** → Kullaniciyi sunucudan yasaklar
* **unban** → Yasakli kullaniciyi geri alir
* **kick** → Kullaniciyi sunucudan atar
* **mute** → Kullaniciyi susturur
* **unmute** → Susturulan kullaniciyi geri acar
* **jail** → Kullaniciyi kisitli moda alir
* **unjail** → Jail cezasini kaldirir
* **clear** → Belirli sayida mesaj siler

# 🎲 Eglence Komutlari

* **8ball** → Rastgele cevap verir
* **zar** → Zar atar (1-6 arasi)
* **yazitura** → Yazi tura atar
* **sanslisayi** → Rastgele sansli sayi verir
* **ping** → Botun gecikme sureini gosterir
* **avatar** → Kendi veya etiketlenen kisinin avatarini gosterir

# ℹ️ Bilgi Komutlari

* **kullanici** → Kullanici hakkinda bilgi verir
* **sunucu** → Sunucu hakkinda bilgi verir
* **yardim** → Tum komutlarin listesini gosterir
* **uptime** → Botun ne kadar suredir aktif oldugunu gosterir

# ⚙️ Kurulum

1. `setup.py` dosyasini acin
2. Konsolda adimlari takip edin
3. Token, Client ID ve Prefix bilgilerinizi girin
4. Node.js paketlerini yuklemek istiyorsaniz `1` tusuna basin (baslatmak zorundasiniz, yoksa bot calismaz)
5. Kurulum tamamlandiktan sonra isterseniz botu baslatabilirsiniz (`1` ile baslat, `0` ile cik)
6. Eger `0` bastiysaniz veya yanlislikla ciktiysaniz terminale tekrar girin
7. `cd botaltyapi-v1` yazin ve klasorun icinde oldugunuzu terminalde dogrulayin (ornegin: `C:\Users\kullaniciadi\Desktop\botaltyapi-v1`)
8. Gordukten sonra `npm install` yazin
9. Botu baslatmak icin `baslat.bat` dosyasini acin, acilmazsa sag tiklayip **Yonetici olarak calistir**

# 🧱 Gereksinimler

* Node.js 18 veya uzeri
* Python 3.x (kurulum scripti icin)

# 📦 Adimlar

1. Depoyu bilgisayarınıza indirin veya klonlayin

```bash
git clone https://github.com/Seyit3199/DISCORD-BOT-ALTYAPI-V1.git
cd botaltyapi-v1
```
