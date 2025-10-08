@echo off
cd /d %~dp0
echo Bot başlatılıyor (otomatik yeniden başlatma aktif) - %date% %time%

:loop
echo ------------------------------- >> bot.log
echo Bot başlatıldı: %date% %time% >> bot.log
node index.js >> bot.log 2>&1
echo Bot sonlandı: %date% %time% >> bot.log
echo 5 saniye sonra yeniden başlatılıyor...
timeout /t 5 /nobreak >nul
goto loop
