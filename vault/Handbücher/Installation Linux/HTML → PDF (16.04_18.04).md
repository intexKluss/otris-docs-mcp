---
title: "HTML zu PDF Konvertierung"
source: "https://otris.software/documents/manuals/books/installation-linux/troubleshooting/html2pdf.html"
---

# HTML zu PDF Konvertierung

Diese Dokumentation bezieht sich auf DOCUMENTS Versionen ab 5.0f unter Ubuntu 16.04 und 18.04.

Um DOCUMENTS Mappen als PDF zu drucken muss eine HTML zu PDF konvertierung vorgenommen werden. Ab DOCUMENTS 5.0f wird für die Konvertierung von HTML zu PDF standardmäßig Puppeteer zusammen mit dem Web-Browser [Chromium](https://www.chromium.org/) benutzt. Konfiguriert wird das über den Eintrag `$convert.html` in der Datei `/etc/documents5/documents.ini`.

**Bei der Nutzung des Chromium-Browsers sollte folgendes bezüglich Sicherheit und Kompatibilität berücksichtigt werden.**


## Chromium aus dem Ubuntu-Repository inkl. Security-Updates

Durch die Installation des Packages `documents5-server` via APT wird normalerweise (recommended dependency) das Package `chromium-browser` aus dem Ubuntu-Repository mit installiert.  Das hat zur folge, dass dieses Package auch im Rahmen der Ubuntu-Updates mit Updates versorgt wird.  Dieses sind natürlich auch die für einen Web-Browser sehr wichtigen Security-Updates.  Diese Security-Updates werden somit auch automatisch für Documents berücksichtigt.


## Konsequenzen und Sicherheitsabwägungen

Theoretisch kann es durch die Updates von Ubuntu für Chromium zu einer Inkompatibilität mit dem Puppeteer von Documents kommen.  Es ist möglich dieses durch eine Deaktivierung der automatischen Updates für Chromium zu unterdrücken.  Genau hier liegt dann die Abwägung zwischen gesicherter Kompatibilität und der Sicherheit des Browsers durch die Updates von Ubuntu.  otris überwacht zwar diese Kompatibilität, braucht aber eine gewisse Zeit um auf eine auftretende Inkompatibilität adäquat und geprüft reagieren zu können.


## Downgrade zu einer kompatiblen Chromium-Version

Für den Fall, dass ein inkompatibles Updates des Chromium erscheint und otris nicht schnell genug reagieren kann, ist ein Downgrade auf die letzte kompatible Version des Chromium notwendig.  Um dieses Downgrade gewährleisten zu können, bietet otris in seinem Repository die letze kompatible Version des Chromium an.

Nach der Ausführung von `apt update` können die verfügbaren Packages mit `apt policy chromium-browser chromium-browser-l10n` angezeigt werden:


```bash
chromium-browser:
  Installiert:           79.0.3945.130-0ubuntu0.18.04.1
  Installationskandidat: 79.0.3945.130-0ubuntu0.18.04.1
  Versionstabelle:
 *** 79.0.3945.130-0ubuntu0.18.04.1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 Packages
        500 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages
        100 /var/lib/dpkg/status
     79.0.3945.79-0ubuntu0.18.04.1 500
        500 https://repository.otris.de/deb bionic/non-free amd64 Packages
     65.0.3325.181-0ubuntu1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic/universe amd64 Packages
chromium-browser-l10n:
  Installiert:           79.0.3945.130-0ubuntu0.18.04.1
  Installationskandidat: 79.0.3945.130-0ubuntu0.18.04.1
  Versionstabelle:
 *** 79.0.3945.130-0ubuntu0.18.04.1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 Packages
        500 http://de.archive.ubuntu.com/ubuntu bionic-updates/universe i386 Packages
        500 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages
        500 http://security.ubuntu.com/ubuntu bionic-security/universe i386 Packages
        100 /var/lib/dpkg/status
     79.0.3945.79-0ubuntu0.18.04.1 500
        500 https://repository.otris.de/deb bionic/non-free amd64 Packages
     65.0.3325.181-0ubuntu1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic/universe amd64 Packages
        500 http://de.archive.ubuntu.com/ubuntu bionic/universe i386 Packages
```

chromium-browser:
  Installiert:           79.0.3945.130-0ubuntu0.18.04.1
  Installationskandidat: 79.0.3945.130-0ubuntu0.18.04.1
  Versionstabelle:
 *** 79.0.3945.130-0ubuntu0.18.04.1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 Packages
        500 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages
        100 /var/lib/dpkg/status
     79.0.3945.79-0ubuntu0.18.04.1 500
        500 https://repository.otris.de/deb bionic/non-free amd64 Packages
     65.0.3325.181-0ubuntu1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic/universe amd64 Packages
chromium-browser-l10n:
  Installiert:           79.0.3945.130-0ubuntu0.18.04.1
  Installationskandidat: 79.0.3945.130-0ubuntu0.18.04.1
  Versionstabelle:
 *** 79.0.3945.130-0ubuntu0.18.04.1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic-updates/universe amd64 Packages
        500 http://de.archive.ubuntu.com/ubuntu bionic-updates/universe i386 Packages
        500 http://security.ubuntu.com/ubuntu bionic-security/universe amd64 Packages
        500 http://security.ubuntu.com/ubuntu bionic-security/universe i386 Packages
        100 /var/lib/dpkg/status
     79.0.3945.79-0ubuntu0.18.04.1 500
        500 https://repository.otris.de/deb bionic/non-free amd64 Packages
     65.0.3325.181-0ubuntu1 500
        500 http://de.archive.ubuntu.com/ubuntu bionic/universe amd64 Packages
        500 http://de.archive.ubuntu.com/ubuntu bionic/universe i386 PackagesDie in diesem Beispiel relevante Version ist die `79.0.3945.79-0ubuntu0.18.04.1`, die mit


```bash
apt install chromium-browser=79.0.3945.79-0ubuntu0.18.04.1 chromium-browser-l10n=79.0.3945.79-0ubuntu0.18.04.1
```

apt install chromium-browser=79.0.3945.79-0ubuntu0.18.04.1 chromium-browser-l10n=79.0.3945.79-0ubuntu0.18.04.1installiert werden kann.


## Unterbindung des automatischen Chromium-Updates durch APT

Wenn die Kompatibilität höher bewertet wird als die Sicherheit, dann gibt es 2 Möglichkeiten das automatische Updates des Chromium-Browsers via APT zu unterdrücken.


### Unterbindung des Updates via Package-Markierung (hold)

Mit `apt-mark hold chromium-browser` kann ein automatisches Update des Chrome-Browsers auf eine neuere Version als die momentan installierte verhindert werden.


### Unterbindung des Updates via APT-Pinning

Dafür muss in `/etc/apt/preferences.d` eine Datei angelegt werden, gute Namen für diese Datei sind: `chromium-browser-pin`, `chromium-for-documents5-pin` oder `documents5-pin`.  Der Inhalt sollte so aussehen:


```bash
Package: chromium-browser
Pin: version 78.0.3904.97-0ubuntu0.18.04.1
Pin-Priority: 1000
```

Package: chromium-browser
Pin: version 78.0.3904.97-0ubuntu0.18.04.1
Pin-Priority: 1000Die Version in der Datei (open `78.0.3904.97-0ubuntu0.18.04.1`) sollte dabei durch die aktuelle Ausgabe von `dpkg -l chrome-browser` ersetzt werden.  Die Version im Beispel oben wurde aus dieser Ausgabe entnommen:


```bash
% dpkg -l chromium-browser
Gewünscht=Unbekannt/Installieren/R=Entfernen/P=Vollständig Löschen/Halten
| Status=Nicht/Installiert/Config/U=Entpackt/halb konFiguriert/
         Halb installiert/Trigger erWartet/Trigger anhängig
|/ Fehler?=(kein)/R=Neuinstallation notwendig (Status, Fehler: GROSS=schlecht)
||/ Name                    Version          Architektur      Beschreibung
+++-=======================-================-================-====================================================
ii  chromium-browser        78.0.3904.97-0ub amd64            Chromium web browser, open-source version of Chrome
```

% dpkg -l chromium-browser
Gewünscht=Unbekannt/Installieren/R=Entfernen/P=Vollständig Löschen/Halten
| Status=Nicht/Installiert/Config/U=Entpackt/halb konFiguriert/
         Halb installiert/Trigger erWartet/Trigger anhängig
|/ Fehler?=(kein)/R=Neuinstallation notwendig (Status, Fehler: GROSS=schlecht)
||/ Name                    Version          Architektur      Beschreibung
+++-=======================-================-================-====================================================
ii  chromium-browser        78.0.3904.97-0ub amd64            Chromium web browser, open-source version of Chrome