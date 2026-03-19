---
title: "Vorbemerkungen und Installationsvoraussetzungen"
source: "https://otris.software/documents/manuals/books/installation-windows-de/"
---

# Vorbemerkungen und Installationsvoraussetzungen


## Allgemeines

Diese Dokumentation beschreibt die Installation von DOCUMENTS unter Microsoft Windows Betriebssystemen ab **Version DOCUMENTS 5h**. Die DOCUMENTS Plattform beinhaltet ein Dokumenten-Management-System und ist außerdem Installationsbasis für Lösungen wie otris contract, otris corporate, otris compliance oder otris dossier.

Welche Anforderungen an die eingesetzte Hardware und die Konfiguration von Server und Clients gestellt werden, sind der jeweils aktuellen Dokumentation zu den  *Systemvoraussetzungen* zu entnehmen.

Außerdem sollte vor einer Installation geprüft werden, ob alle notwendigen Informationen zur Verfügung stehen, das sind insbesondere:

- Informationen zum Datenbankserver, der verwendet werden soll
- Informationen zu Ports, wenn andere als im Setup vorgeschlagene Standardports der Komponenten verwendet werden sollen
- Informationen zu den DOCUMENTS Systemkomponenten, die auf der aktuellen Maschine installiert werden sollen

Nach Möglichkeit sollte vor der Installation auch bereits eine Lizenz zur Verfügung stehen.


## Übersicht Systemkomponenten

DOCUMENTS besteht im Wesentlichen aus vier Komponenten (Diensten), deren Installation skaliert werden kann. Ein Betrieb aller Komponenten auf einer einzigen Maschine ist genauso möglich, wie der Betrieb jedes einzelnen Dienstes auf getrennten Maschinen.
Folgende Komponenten sind Bestandteil von DOCUMENTS:

- DOCUMENTS Server: Zentrale Serveranwendung mit Anbindung an eine unterstützte Datenbank
- DOCUMENTS Tomcat: Servlet-Container als Webserver für die Kommunikation zwischen DOCUMENTS Server und den Web-Browsern der Benutzer
- DOCUMENTS SOAP: SOAP-Proxy-Schnittstelle für die Integration von externen Lösungen
- DOCUMENTS Archive: Revisionssichere Archivlösung


## Zusätzliche wichtige Hinweise


### Java Virtual Machine

Auf der Maschine, auf der die Komponenten DOCUMENTS Server und / oder DOCUMENTS Tomcat installiert werden sollen, muss vor der Ausführung der Installationsroutine eine *Java Virtual Machine* entweder als Java SDK (Java Software Development Kit) oder Java JRE (Java Runtime Environment) installiert werden. Die unterstützten SDK / JRE Versionen sind der jeweils aktuellen Dokumentation zu den *Systemvoraussetzungen* zu entnehmen. Nach der Installation muss eine Umgebungsvariable **JAVA_HOME** (SDK) oder **JRE_HOME** (JRE) auf den Pfad des Installationsverzeichnisses gesetzt werden, z.B.:

`C:\Program Files\Java\jre1.8.0_341`


### Datenbanken

DOCUMENTS arbeitet wahlweise mit den Datenbanken Microsoft SQL Server, MySQL/MariaDB oder Oracle. Im Verlauf der Installationsroutine muss angegeben werden, welche der genannten Datenbanken zum Einsatz kommen soll. Diese Dokumentation folgt einer Installation mit Verwendung von Microsoft SQL Server. Nur in diesem Fall kann bereits während der Installation ein Datenbankschema erstellt werden, wenn der Name des Datenbankservers und die Authentifizierungsdaten bereits bekannt sind.
Bei Verwendung von MySQL/MariaDB oder Oracle wird das Datenbankschema erst nach der Installation angelegt. Eine entsprechende Anleitung ist nach der Installation Readme-Dateien verfügbar (Installationsverzeichnis\server). Dies gilt auch für den Einsatz von Microsoft SQL Server, wenn auf die Anlage des Datenbankschemas während der Installation verzichtet wurde.

**Hinweis:** Eine Datenbank-Lizenz ist nicht Bestandteil von DOCUMENTS.


### Vorgängerversionen

Wird mit dieser Neuinstallation eine bestehende Vorgängerversion abgelöst, muss die alte Version zunächst deinstalliert werden (Systemsteuerung\Programme und Features). Bei einer Deinstallation werden bestimmte angepasste Verzeichnisse und Dateien nicht automatisch mit entfernt, diese müssen manuell gelöscht werden.

**Hinweis:** Vor einer Deinstallation sollte immer eine Datensicherung durchgeführt werden. Diese Datensicherung kann nach einer Neuinstallation zurückgesichert werden, wobei Daten automatisch in das neue Datenbankschema migriert werden.