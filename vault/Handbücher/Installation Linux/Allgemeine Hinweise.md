---
title: "Ubuntu Installation"
source: "https://otris.software/documents/manuals/books/installation-linux/notes.html"
---

# Ubuntu Installation

Diese Hinweise gelten im Wesentlichen für alle Distributionen. Unterschiede gibt es nur in der Tomcat Version. Der Ordner `tomcat8` heißt ab `20.04``tomcat9`.


## documents5 User

Während der Installation wird das Benutzerkonto `documents5` angelegt. Dieses Konto wird absichtlich ohne Passwort angelegt. Es ist nur zum Betrieb des Servers gedacht und nicht um damit interaktiv zu arbeiten.


## Gruppe des documents5 Users


### Neu-Installation

Der User `documents5` ist in allen Versionen bis 5.0i HF3 in der Gruppe `www-data`. In der Version 5.0i HF4 gehört der User der Gruppe `nogroup` an. Ab Version 5.0i HF5 ist er in der Gruppe `documents5`.


### Updates

Die Gruppe des Users `documents5` bleibt bei Updates erhalten. D.h. wenn Documents in der Version 5.0i HF3 installiert wurde und dann auf die Version 5.0i HF5 aktualisiert wird, dann ist der User `documents5` weiterhin in der Gruppe `www-data`.


## Datenbankschema

Das Datenbankschema wird während der Installation des Paketes automatisch im lokal installierten MySQL-Server angelegt. Danach wird auch der Server sofort gestartet.


## Documents Server

Nach der Installation wird der Documents Server automatisch als Service (`documents5.service`) gestartet.

Der Documents Server kann auch interaktiv ausgeführt werden. Dazu muss der Service beendet und das Script `documents5server` aufgerufen werden. Näheres dazu im Kapitel [[Handbücher/Installation Linux/Debug Server|Debug]].


## Struktur der Installation

Auch wenn das bei der Installation angegebene Paket `documents5-mysql` heißt, befinden sich die meisten Dateien der Installation in dem Paket `documents5-server`, das als *recommends* mit installiert wurde. Mit dem folgenden Befehl werden die Dateien aus `documents5-server` angezeigt.


```bash
dpkg -L documents-server
```

dpkg -L documents-serverDie Dateien aus allen Documents Paketen anzeigen, kann man mit


```bash
dpkg -L $(dpkg -l | awk '/documents5/ {print $2}')
```

dpkg -L $(dpkg -l | awk '/documents5/ {print $2}')Die Struktur dieser Dateien ist im folgenden beschrieben.

- /etc/ Konfigurationsdateien Hier darf man konfigurieren und anpassen. Wenn Dateien als Konfigurationsdateien registriert sind, dann werden sie bei einem Update gesondert behandelt und nicht überschrieben.
documents5/
tomcat8/
apache2/ bzw. nginx/
mysql/
- /usr/ Statische Dateien
lib/ die Software, also die Programme
documents5/
server/
locale/
soapproxy/
share/ aber z.B. auch der Inhalt der WAR-Datei für den Tomcat
documents5/
current
legacy
- /var/ Variable Dateien Die Installation enthält hier nur Verzeichnisse. Die Dateien in diesen Verzeichnissen werden von den Programmen erstellt und geändert (im Gegensatz zu /etc/). Beispiele:
lib/
documents5/ Repository
mysql/documents5/ Datenbank
log/
documents5/ Log-Dateien
documentsserver_(yyyymmddhhmmss).log


## Überprüfung der Installation

Alle Pakete der Installation anzeigen


```bash
dpkg -l | awk '/documents5/ {print $2}'
```

dpkg -l | awk '/documents5/ {print $2}'Alle Pakete der Installation überprüfen


```bash
dpkg -V $(dpkg -l | awk '/documents5/ {print $2}')
```

dpkg -V $(dpkg -l | awk '/documents5/ {print $2}')