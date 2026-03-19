---
title: "HTML zu PDF Konvertierung"
source: "https://otris.software/documents/manuals/books/installation-linux/troubleshooting/html2pdf2.html"
---

# HTML zu PDF Konvertierung

Diese Dokumentation bezieht sich auf DOCUMENTS Versionen ab 5.0f unter Ubuntu 20.04.

Um DOCUMENTS Mappen als PDF zu drucken muss eine HTML zu PDF konvertierung vorgenommen werden. Ab DOCUMENTS 5.0f wird für die Konvertierung von HTML zu PDF standardmäßig Puppeteer zusammen mit dem Web-Browser [Chromium](https://www.chromium.org/) benutzt. Konfiguriert wird das über den Eintrag `$convert.html` in der Datei `/etc/documents5/documents.ini`.

Leider gibt es Probleme mit Chromium unter Ubuntu 20.04. Falls also die Konvertierung nicht funktioniert, muss zunächst geprüft werden, ob Chromium mit dem User `documents5` gestartet werden kann.


```sh
sudo -u documents5 chromium-browser --headless --disable-gpu --remote-debugging-port=9222  https://chromium.org
```

sudo -u documents5 chromium-browser --headless --disable-gpu --remote-debugging-port=9222  https://chromium.orgFalls der Befehl dann sofort wieder abbricht (dazu ggf. ein zweites Mal Enter drücken), kann Chromium nicht gestartet werden. In diesem Fall können evtl. die hier dokumentierten Workarounds Abhilfe schaffen.


## Workarounds


### 1. Switch Chromium

In vielen Fällen hilft es schon, das Chromium Snap einmal zur Beta-Version und zurück zu switchen.


```sh
sudo snap refresh --beta chromium
sudo snap refresh --stable chromium
```

sudo snap refresh --beta chromium
sudo snap refresh --stable chromium
### 2. Chrome verwenden

Falls der erste Workaround das Problem nicht behoben hat, kann auch Chrome statt Chromium verwendet werden.

Dazu muss Chrome zunächst installiert werden.
Die Installation am besten in der Root-Shell (`sudo -i`) durchführen und diese auch am Ende wieder verlassen (`exit`).

Nun zuerst das Repository registrieren.


```sh
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
```

wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.listUnd dann wie folgt Chrome installieren.


```sh
apt update
apt install google-chrome-stable
```

apt update
apt install google-chrome-stableJetzt muss noch der HTML-PDF-Konverter so konfiguriert werden, dass die Konvertierung mit Chrome durchgeführt wird.
Dazu muss in der Datei


```sh
/etc/documents5/createpdf/settings.ini
```

/etc/documents5/createpdf/settings.inider Eintrag


```sh
browserLinux=google-chrome
```

browserLinux=google-chromeeingefügt werden.