---
title: "Documents 5 Installation für Ubuntu 20.04"
source: "https://otris.software/documents/manuals/books/installation-linux/ubuntu2004.html"
---

# Documents 5 Installation für Ubuntu 20.04

- Zu Updates bitte das Kapitel Upgrades lesen
- Falls die HTML-PDF-Konvertierung verwendet wird, bitte die entsprechenden Einträge unter Troubleshooting lesen.


## Installation

Die Installation am besten in der Root-Shell (`sudo -i`) durchführen und diese auch am Ende wieder verlassen (`exit`).


### Repository registrieren


```bash
echo "deb https://repository.otris.de/deb focal non-free" > /etc/apt/sources.list.d/otris.list
wget -O - https://repository.otris.de/deb/pubkey-FB51BD7A.asc|apt-key add -
apt update
```

echo "deb https://repository.otris.de/deb focal non-free" > /etc/apt/sources.list.d/otris.list
wget -O - https://repository.otris.de/deb/pubkey-FB51BD7A.asc|apt-key add -
apt updateDanach muss `apt-key finger otris` den Fingerprint `9EFB B9AF BE7C 9A06 9A07  F977 D42E 9253 FB51 BD7A` für `otris Linux Package Signing Key <linux-packages-keymaster@otris.de>` ausgeben.


### Pakete installieren

Defaultmäßig wird der Webserver NGINX und kein Archiv installiert (siehe Standard-Installation). Optional kann das Archiv EAS installiert werden. In diesem Fall muss als Webserver Apache statt NGINX installiert werden. Auch ohne EAS kann Apache statt NGINX installiert werden. Es ist in der Regel nicht sinnvoll beide Webserver zu installieren da dies eher zu Problemen führt. Daher ist es Wichtig, bei der Installation die hier beschriebene Reihenfolge einzuhalten.


#### Hinweis zur Datenbank

Bis Ubuntu 18.04 standen die beiden Datenbanken MariaDB und MySQL zur Verfügung. Ubuntu 20.04 enthält MySQL in der Version 8. Diese Version ist nicht kompatibel zu DOCUMENTS, daher muss als lokale Datenbank jetzt MariaDB verwendet werden. Ein Transfer der Daten von einer MySQL Installation (Version kleiner 8) in eine MariaDB Installation ist möglich. Eine MySQL Datenbank in einer Version kleiner 8 kann auch auf einem externen Rechner verwendet werden.


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