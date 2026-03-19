---
title: "Remote Datenbank Installation"
source: "https://otris.software/documents/manuals/books/installation-linux/multitier/remote-db.html"
---

# Remote Datenbank Installation

In diesem Kapitel wird gezeigt, wie bei der DOCUMENTS Installation vorgegangen werden muss, wenn die Datenbank auf einem externen Rechner installiert werden soll bzw. dort schon vorhanden ist.

Um das Repository zu registrieren und ggf. weitere Feature zu installieren, bitte zusätzlich die klassische Installation (Standard- oder Feature-Installation) lesen.


## Vorbereitung

Damit die Verbindung vom Documents-Server zur Datenbank hergestellt werden kann, werden in beiden Installationen einige Informationen zur Datenbank abgefragt. Bei der Installation des Documents-Servers muss der Hostname oder die IP-Adresse des Datenbank Rechners angegeben werden. Weiterhin muss das Datenbank Passwort gesetzt werden. Hier muss ein sicheres Passwort gewählt und in beiden Installationen angegeben werden. Der Name der DOCUMENTS Datenbank und des Datenbank Users kann frei gewählt werden (Default ist jeweils `documents5`).


## Applikations-Schicht

Mit dem folgenden Befehl werden die Pakete der Applikations- und der Web-Schicht installiert. Die Datenbank wird nicht mit installiert.

**Bitte das Minuszeichen (-) am Ende beachten!**


```bash
apt install --install-recommends documents5-tomcat documents5-server-mysql documents5-mysqldb-
```

apt install --install-recommends documents5-tomcat documents5-server-mysql documents5-mysqldb-Es müssen noch Anpassungen für den Web-Server vorgenommen werden. Dazu bitte die entsprechende Feature- bzw Standard Installation lesen.


## Datenbank-Schicht

Hier gibt es zwei Möglichkeiten. Um die Datenbank zu installieren und DOCUMENTS dabei automatisch einzurichten lesen Sie bitte den folgenden Abschnitt. Falls Sie eine bestehende Datenbank haben und das Schema und den User für DOCUMENTS selbst darin anlegen möchten, lesen Sie bitte den Abschnitt Datenbank manuell einrichten weiter unten.


### Datenbank installieren

Auf dem Datenbank-Rechner wird die Datenbank für Documents mit dem folgenden Befehl installiert und für DOCUMENTS eingerichtet.


```bash
apt install --install-recommends documents5-mysqldb
```

apt install --install-recommends documents5-mysqldbDamit die Datenbank vom Documents-Rechner erreichbar ist, muss noch eine Anpassung gemacht werden. Und zwar muss die Datei


```bash
/etc/mysql/mariadb.conf.d/60-server.cnf
```

/etc/mysql/mariadb.conf.d/60-server.cnfmit dem folgendem Inhalt erstellt werden.


```bash
[mysqld]
bind-address = 0.0.0.0
```

[mysqld]
bind-address = 0.0.0.0Danach muss MariaDB neu gestartet werden.


```bash
systemctl restart mariadb.service
```

systemctl restart mariadb.service
### Datenbank manuell einrichten

Falls bereits eine Datenbank installiert ist, muss darin der `documents5` User angelegt und das Datenbank Schema eingespielt werden.

Die SQL-Datei, welche das Datenbankschema für DOCUMENTS enthält, befindet sich im Package `documents5-mysqldb`.
Dieses Paket kann mit dem folgenden Befehl aus dem Repository (siehe Klassische Installation) heruntergeladen werden.


```bash
apt download documents5-mysqldb
```

apt download documents5-mysqldbDie SQL Datei kann nun mit dem folgenden Befehl aus der `.deb` Datei gelesen werden.


```bash
dpkg --fsys-tarfile documents5-mysqldb_*.deb | tar xOf - ./usr/lib/documents5/server/documents5.sql | head -n -2 | tail -n +15 > documents5.sql
```

dpkg --fsys-tarfile documents5-mysqldb_*.deb | tar xOf - ./usr/lib/documents5/server/documents5.sql | head -n -2 | tail -n +15 > documents5.sql