import subprocess
import sys
import os
from datetime import datetime

# ASCII banner
banner = r"""
 ____  _____       _       _____     ______   ________  ____   ____  
|_   \|_   _|     / \     |_   _|   |_   _ `.|_   __  ||_  _| |_ _| 
  |   \ | |      / _ \      | |       | | `. \ | |_ \_|  \ \   / /   
  | |\ \| |     / ___ \     | |   _   | |  | | |  _| _    \ \ / /    
 _| |_\   |_  _/ /   \ \_  _| |__/ | _| |_.' /_| |__/ |    \ ' /     
|_____|\____||____| |____||________||______.'|________|     \_/      
                Setup Script - NalDevProject, 2025
        Hoşgeldiniz Botaltyapı V1 Kurulum Sihirbazına!
"""
print("\n")

def run_command(command):
    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Hata oluştu: {e}")
        sys.exit(1)

def create_env_file():
    print("Bot .env dosyasını oluşturma")
    token = input("Bot Tokenini girin: ").strip()
    client_id = input("Client ID girin: ").strip()
    prefix = input("Bot prefixini girin (ör. !): ").strip()

    env_content = f"""TOKEN={token}
CLIENT_ID={client_id}
PREFIX={prefix}
"""

    with open(".env", "w") as f:
        f.write(env_content)

    print("\n.env dosyası başarıyla oluşturuldu!\n")

def create_license_backup():
    license_file = "LICENSE"
    if not os.path.exists(license_file):
        print("Orijinal LICENSE bulunamadı, yeni LICENSE oluşturuluyor...")
        license_text = """MIT License

Copyright (c) 2025 NalDevProject

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_filename = f"LICENSE_backup_{timestamp}.txt"

        with open(backup_filename, "w") as f:
            f.write(license_text)

        print(f"LICENSE yedeği oluşturuldu: {backup_filename}\n")
    else:
        print("LICENSE dosyası mevcut, yedek oluşturulmasına gerek yok.\n")

# Ekranı temizle ve bannerı göster
os.system('cls' if os.name == 'nt' else 'clear')
print(banner)

# 1️⃣ .env dosyasını oluştur
create_env_file()

# 2️⃣ LICENSE yedeğini oluştur (gerekirse)
create_license_backup()

# 3️⃣ Node paketlerini yükle
install = input("Node.js paketlerini yüklemek istiyor musun? (1=Evet, 0=Hayır): ").strip()
if install == "1":
    print("Paketler yükleniyor...")
    run_command("npm install")
    print("Paketler başarıyla yüklendi!\n")
else:
    print("Paket yükleme atlandı.\n")

# 4️⃣ Botu başlat
start = input("Projeyi başlatmak istiyor musun? (1=Evet, 0=Hayır): ").strip()
if start == "1":
    print("Bot başlatılıyor...")
    run_command("node index.js")
else:
    print("Projeyi başlatma atlandı. Kurulum tamamlandı.")
