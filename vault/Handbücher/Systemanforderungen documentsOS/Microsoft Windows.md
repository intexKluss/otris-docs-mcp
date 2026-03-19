---
title: "Systemanforderungen documentsOS"
source: "https://otris.software/documents/manuals/books/system-requirements/server-windows.html"
---

## Microsoft Windows


### Server

Es werden ausschließlich folgende **Betriebssysteme** mit 64-bit Architektur unterstützt:

|  | Microsoft Windows Server 2016 | 2019 | 2022 | 2025 |
| --- | --- |


### Datenbanken

Die folgenden **Datenbanksysteme** mit 64-bit Architektur werden unterstützt:

|  | Microsoft SQL Server (Standard / Enterprise) 2016 (EOL 07/26) | 2017 | 2019 | 2022 | 2025 |
| --- | --- |
|  | 10.6 (LTS - EOL 06/26) | 10.11 (LTS) | 11.4 (LTS) | 11.8 (LTS) * |

* MariaDB 10.11, 11.4 oder 11.8 empfohlen, da LTS-Versionen


### Zusätzliche Komponenten für Microsoft Windows Installationen

Folgende Komponenten ergänzen die Installation:

|  | Java JDK / JRE (64-bit) Version 17/21 (LTS Versionen von Oracle oder OpenJDK) |
| --- | --- |
|  | Web-Container Tomcat Version 9.x (wird als Teil des Setups durch die otris software ausgeliefert und aktualisiert) |
|  | Optional Apache Webserver (Eigenständige Integration oder Beauftragung als Dienstleistung) |
|  | In der Windows-Installation muss ein .NET-Framework in Version 4.0 oder höher vorhanden sein |