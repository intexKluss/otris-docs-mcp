---
title: "Documents 5 Installation für Ubuntu 22.04"
source: "https://otris.software/documents/manuals/books/installation-linux/ubuntu2204.html"
---

# Documents 5 Installation für Ubuntu 22.04

- Zu Updates bitte das Kapitel Upgrades lesen
- Falls die HTML-PDF-Konvertierung verwendet wird, bitte die entsprechenden Einträge unter Troubleshooting lesen.


## Installation

Die Installation am besten in der Root-Shell (`sudo -i`) durchführen und diese auch am Ende wieder verlassen (`exit`).


### Repositories registrieren


#### otris

Aus diesem Repository wird DOCUMENTS installiert, es ist nicht optional


```bash
echo "deb https://repository.otris.de/deb jammy non-free" > /etc/apt/sources.list.d/otris.list
wget -O /etc/apt/trusted.gpg.d/otris-E75779FB06945990157EC35BF8D47AE6862C05CD.asc https://repository.otris.de/deb/pubkey-E75779FB06945990157EC35BF8D47AE6862C05CD.asc
apt update
```

echo "deb https://repository.otris.de/deb jammy non-free" > /etc/apt/sources.list.d/otris.list
wget -O /etc/apt/trusted.gpg.d/otris-E75779FB06945990157EC35BF8D47AE6862C05CD.asc https://repository.otris.de/deb/pubkey-E75779FB06945990157EC35BF8D47AE6862C05CD.asc
apt updateDanach muss `gpg --with-colons --import-options show-only --import --fingerprint < /etc/apt/trusted.gpg.d/otris-E75779FB06945990157EC35BF8D47AE6862C05CD.asc | awk -F: '$1 == "fpr" {print $10;}'` die Key-Id `E75779FB06945990157EC35BF8D47AE6862C05CD` und den Fingerprint `D03F68050A5F42A79AA5A686477946CAEFE80AFD` ausgeben.


#### Google Chrome

Aus diesem Repository wird über die Abhängigkeiten von DOCUMENTS (Des Packages `documents5-server`) das Package `google-chrome-stable` installiert.  Es ist für die Konvertierung von HTML nach PDF notwendig.  Wenn eine solche Konvertierung aber in DOCUMENTS nicht verwendet wird, muss es nicht konfiguriert werden.  Die Konvertierung funktioniert leider nicht mehr wie bis einschließlich buntu 20.04 mit dem in den Ubuntu Repositories enthalten Chromium Browser.


```bash
echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list
wget -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmour > /etc/apt/trusted.gpg.d/google-chrome.gpg
apt update
```

echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list
wget -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmour > /etc/apt/trusted.gpg.d/google-chrome.gpg
apt update
### Pakete installieren

Defaultmäßig wird der Webserver NGINX und kein Archiv installiert (siehe Standard-Installation). Optional kann das Archiv EAS installiert werden. In diesem Fall muss als Webserver Apache statt NGINX installiert werden. Auch ohne EAS kann Apache statt NGINX installiert werden. Es ist in der Regel nicht sinnvoll beide Webserver zu installieren da dies eher zu Problemen führt. Daher ist es Wichtig, bei der Installation die hier beschriebene Reihenfolge einzuhalten.


#### Hinweis zur Datenbank

Bis Ubuntu 18.04 standen die beiden Datenbanken MariaDB und MySQL zur Verfügung. Ubuntu 22.04 enthält MySQL in der Version 8. Diese Version ist nicht kompatibel zu DOCUMENTS, daher muss als lokale Datenbank jetzt MariaDB verwendet werden. Ein Transfer der Daten von einer MySQL Installation (Version kleiner 8) in eine MariaDB Installation ist möglich. Eine MySQL Datenbank in einer Version kleiner 8 kann auch auf einem externen Rechner verwendet werden.


#### Optional: EAS und/oder Apache installieren

Der folgende Aufruf installiert EAS und den Webserver Apache. Wenn `eas` nicht angegeben wird, dann wird nur Apache installiert.


```bash
apt install documents5-apache eas
```

apt install documents5-apache eas
#### DOCUMENTS installieren

Der folgende Aufruf installiert DOCUMENTS. Falls vorher nicht Apache installiert wurde, wird hier NGINX als Webserver installiert.

Defaultmäßig wird das Paket `documents5-mysqldb-tuning` installiert, welches die [[Handbücher/Installation Linux/MariaDB_MySQL#datenbank-konfiguration|Datenbank Einstellungen optimiert]]. Wenn das nicht gewünscht ist, muss hier `documents5-mysqldb-tuning-` mit angegeben werden. Durch das `-` am Ende wird das Package nicht installiert.


```bash
apt install --install-recommends documents5-mysql # documents5-mysqldb-tuning-
```

apt install --install-recommends documents5-mysql # documents5-mysqldb-tuning-Damit die Datenbank-Konfiguration angewendet wird, muss die Datenbank neu gestartet werden. Währenddessen sollte der DOCUMENTS Server gestoppt sein.


```bash
sudo systemctl stop documents5
sudo systemctl restart mariadb
sudo systemctl start documents5
```

sudo systemctl stop documents5
sudo systemctl restart mariadb
sudo systemctl start documents5

## Wichtige Anpassungen für den Web-Client

Siehe [Tomcat9](./webconfig/tomcat9.html) und ggf. [NGINX](./webconfig/nginx.html).