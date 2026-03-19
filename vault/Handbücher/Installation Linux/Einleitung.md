---
title: "Schichtenarchitektur (Multitier architecture)"
source: "https://otris.software/documents/manuals/books/installation-linux/multitier/intro.html"
---

# Schichtenarchitektur (Multitier architecture)

DOCUMENTS lässt sich in bis zu drei Schichten (Tiers) einteilen. Diese drei Schichten können verteilt auf verschiedenen Rechnern installiert werden.

Die folgenden Schichten sind möglich.

- Web-Schicht: Webserver (NGINX oder Apache)
- Applikations-Schicht: Tomcat und Documents-Server
- Datenbank-Schicht: Datenbank-Server (MariaDB oder MySQL)

Diese Schichten lassen sich auch zusammenfassen. Wenn alle drei Schichten zusammengefasst werden, ergibt sich die klassische Installation auf einem Rechner.


## Installations-Varianten

Durch die Kombination verschiedener Schichten, ergeben sich verschiedene Varianten der Installation.

- Eine Schicht: die klassische Installation
- Zwei Schichten
Web – App/DB (Szenario für eine DMZ)
Web/App – DB (Remote Datenbank)
- Drei Schichten
Web – App – DB


## Abbildung der Schichten durch die Packages

- Web-Schicht: documents5-nginx oder documents5-apache
- Applikations-Schicht:
documents5-server-mysql (enthält documents5-mysqldb als Dependency)
documents5-tomcat (enthält documents5-nginx/documents5-apache als Dependency)
- Datenbank-Schicht: documents5-mysqldb

Das Paket `documents5-server-mysql` enthält den Documents-Server und als Dependency das Paket `documents5-mysqldb`, welches wiederum die Datenbank installiert und einrichtet. Falls die Datenbank auf einem anderen System als der Documents-Server installiert werden soll, muss bei der Installation des Pakets `documents5-server-mysql` beachtet werden, dass das Paket `documents5-mysqldb` nicht mit installiert wird. Für den Webserver sieht es ähnlich aus.

Wie die korrekte Installation durchzuführen ist, ist in den entsprechenden Anleitungen genau beschrieben.