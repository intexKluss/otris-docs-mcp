---
title: "Systemanforderungen DOCUMENTS 5"
source: "https://otris.software/documents/manuals/books/system-requirements-d5/server-windows.html"
---

## Microsoft Windows


### Server

Es werden ausschließlich folgende **Betriebssysteme** mit 64-bit Architektur unterstützt:

|  | Microsoft Windows Server 2016 | 2019 | 2022 | 2025 |
| --- | --- |


### Datenbanken

Die folgenden **Datenbanksysteme** mit 64-bit Architektur werden unterstützt:

|  | Microsoft SQL Server (Standard / Enterprise) 2016 (EOL 07/26) | 2017 | 2019 | 2022 |
| --- | --- |
|  | 10.5 (EOL 05/25) | 10.6 (LTS) | 10.11 (LTS) * |

* MariaDB 10.6 oder 10.11 empfohlen, da LTS-Versionen

**Wichtiger Hinweis:** Oracle Database wird nur noch für bereits bestehende Installationen unterstützt und kann ausschließlich für die Softwareversion DOCUMENTS 5 verwendet werden (nicht mehr für spätere Major-Versionen von DOCUMENTS).


### Zusätzliche Komponenten für Microsoft Windows Installationen

Folgende Komponenten ergänzen die Installation:

|  | Java JDK / JRE (64-bit) Version 11/17/21 (LTS Versionen von Oracle oder OpenJDK) |
| --- | --- |
|  | Web-Container Tomcat Version 9.x (wird als Teil des Setups durch die otris software ausgeliefert und aktualisiert) |
|  | Optional Apache Webserver (Eigenständige Integration oder Beauftragung als Dienstleistung) |
|  | In der Windows-Installation muss ein .NET-Framework in Version 4.0 oder höher vorhanden sein |