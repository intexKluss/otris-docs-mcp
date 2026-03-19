---
title: "Systemanforderungen documentsOS"
source: "https://otris.software/documents/manuals/books/system-requirements/server-hardware.html"
---

## Hardware


### Server

|  | Mindestanforderung |
| --- | --- |
| Prozessor |  |
| Aktueller Mehrkernprozessor | 4 Kerne, 64-Bit |
| Arbeitsspeicher |  |
| Windows, entfernte Datenbank | 12 GB |
| Windows, lokale Datenbank | 16 GB |
| Linux | 6 GB |
| SSD |  |
| System, abhängig vom Datenbanktyp | 10 GB |
| Daten, abhängig vom Datenvolumen | 50 GB |


### Netzwerk

Zwischen dem Web-Server (Tomcat) und dem Applikations-Server (DocumentsServer), sowie zwischen dem Applikations-Server und der Datenbank muss die Verbindungsgeschwindigkeit mindestens 1 GBit betragen.


### Skalierungsmöglichkeiten

Die Applikation kann auf einem Server betrieben werden. Zur Skalierung des Systems kann die Applikation auf bis zu drei Server verteilt werden.