---
title: "Hinweise zu Upgrades"
source: "https://otris.software/documents/manuals/books/installation-linux/updates.html"
---

# Hinweise zu Upgrades


## Upgrade von Documents6 Beta auf documentsOS

Ein Upgrade von dem Pre-Release (Documents6 Beta) aus dem Proposed Channel auf documentsOS ist aus technischen Gründen nicht einfach möglich. Stattdessen muss technisch gesehen ein Downgrade durchgeführt werden.

Dazu muss zunächst in der Datei


```bash
/etc/apt/sources.d/otris.list
```

/etc/apt/sources.d/otris.listder Eintrag


```bash
deb https://repository.otris.de/deb jammy-proposed non-free
```

deb https://repository.otris.de/deb jammy-proposed non-freeentfernt werden.

Danach muss für Jammy/22.04 der folgende Befehl ausgeführt werden


```bash
dpkg -l | awk '/documents6/{print $2 "=6.0-2504-3955ubuntu0.22.04"}' | xargs apt install -y --allow-downgrades
```

dpkg -l | awk '/documents6/{print $2 "=6.0-2504-3955ubuntu0.22.04"}' | xargs apt install -y --allow-downgradesFür Focal/20.04 muss die `22` in dem Befehl durch eine `20` ersetzt werden.


## Upgrades durchführen

Neue Versionen werden im otris-Repository veröffentlicht und können wie alle Ubuntu-Pakete über das Paket-Management installiert werden.


```bash
apt update
apt full-upgrade
```

apt update
apt full-upgrade- Nach einem Upgrade muss der Tomcat neu gestartet werden.
- Die Datei documents.ini muss nach einem Upgrade ggf. manuell angepasst werden. Sie enthält Bentutzerdefinierte Einstellungen und wird daher nicht überschrieben. Wichtige Änderungen an dieser Datei sind weiter unten beschrieben.


### Konflikte in Konfigurationsdateien

Wenn eine Konfigurationsdatei lokal angepasst wurde und sich gleichzeitig auch im Package verändert hat, dann gibt es einen Konflikt beim Upgrade der vom Benutzer gelöst werden muss. Weitere Informationen dazu gibt es unter den folgenden Links.

- https://help.ubuntu.com/community/Configuration
- https://www.debian.org/doc/debian-policy/ap-pkg-conffiles.html


## Versionsspezifische Hinweise


### Upgrade von einer Version älter als 5.0h

Diese Version enthält das neue Paket `documents5-mysqldb-tuning`, welches die folgende Datei enthält.


```bash
/etc/mariadb/mariadb.conf.d/55-server-documents5.cnf
```

/etc/mariadb/mariadb.conf.d/55-server-documents5.cnfDiese Datei enthält die Defaultwerte aus [Datenbank Konfiguraion](./mariadb#datenbank-konfiguration) und ist als Konfigurationsdatei markiert.

Falls die Änderungen übernommen werden sollen, muss die Datenbank neu gestartet werden. Währenddessen sollte der DOCUMENTS Server gestoppt sein.


```bash
sudo systemctl stop documents5
sudo systemctl restart mariadb
sudo systemctl start documents5
```

sudo systemctl stop documents5
sudo systemctl restart mariadb
sudo systemctl start documents5Falls die Änderungen nicht übernommen werden sollen, muss das Paket mit dem folgenden Befehl entfernt werden.


```bash
sudo apt purge documents5-mysqldb-tuning
```

sudo apt purge documents5-mysqldb-tuning
### Upgrade von einer Version älter als 5.0f

Damit nach einem Upgrade auf 5.0f der PDF Druck funktioniert, muss in der Datei


```bash
/etc/documents5/documents.ini
```

/etc/documents5/documents.inider folgende Eintrag hinzugefügt werden,


```bash
$convert.html [INSTALLDIR]/../createpdf/convert/html_chrome/html2pdf %input %output
```

$convert.html [INSTALLDIR]/../createpdf/convert/html_chrome/html2pdf %input %output