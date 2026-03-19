---
title: "Nachbereitungen"
source: "https://otris.software/documents/manuals/books/migration-doc6-de/post-processing-windows.html#aenderung-der-signaturschnittstelle"
---

# Nachbereitungen

Die nachfolgend dargestellten Nachbereitungen der *documentsOS-Installation* enthalten eine Übersicht zu mindestens zu prüfenden Anpassungen (häufig vorkommend) der vorher verwendeten *Documents 5 Installation*. Wenn projektspezifisch weitere Anpassungen durchgeführt wurden, sind diese anhand von Installationsdokumentationen selbständig zu prüfen und ggf. zu implementieren.


## Anpassungen in Konfigurationsdateien

Folgende Konfigurationsdaten sind mindestens auf durchgeführte Anpassungen zu prüfen:


### Häufig benutzte Anpassungen für Documents-Server

| Datei | Standardverzeichnis |
| --- | --- |
| documents.ini | Installationsverzeichnis\server |
| ArchiveXML.ini | Installationsverzeichnis\server |
| wpl.ini | Installationsverzeichnis\docfilter |
| docsoapproxy.ini | Installationsverzeichnis\soapproxy |

Darüber hinaus sollten projektspezifische Anpassungen im Installationsverzeichnis\server\locale (Übersetzungsdateien) und Installationsverzeichnis\server\certs (Zertifikate für gRPC-Schnittstelle) sowie zusätzlich bereitgestellte Zertifikate (z.B. Archivserver oder LDAPs) überprüft werden.
Wurden projektspezifische Konvertierungstools für Dokumente in der Datei documents.ini registriert, sind diese zu prüfen und ggf. anzupassen bzw. in der neuen Verzeichnisstruktur bereitzustellen.
Wurden eigene, projektspezifische Skripte im scriptlibs-Verzeichnis erstellt, sind diese ebenfalls aus der vorherigen Installation in der neuen Verzeichnisstruktur bereitzustellen.


### Häufig benutzte Anpassungen für Documents-Tomcat

| Datei | Standardverzeichnis |
| --- | --- |
| server.xml | Installationsverzeichnis\tomcat9\conf |
| web.xml | Installationsverzeichnis\tomcat9\webapps\documents\WEB-INF |
| viewer-config.xml | Installationsverzeichnis\tomcat9\webapps\documents\WEB-INF\classes |

Darüber hinaus sollten projektspezifische Anpassungen für in der Datei server.xml angegebene SSL/TLS-Zertifikate geprüft werden.
Wurden externe Ressourcen (documents-ext) verwendet, sind diese ebenfalls wieder bereitzustellen. Dabei ist zu beachten, dass die Context-Konfigurationsdatei (documents.xml) in documentsOS im Installationsverzeichnis unter \tomcat9\conf\Catalina\localhost bereitgestellt werden muss (vorher \tomcat8\conf\Documents\localhost), außerdem sind die Pfadangaben in der Context-Konfigurationsdatei (documents.xml) zu überprüfen und anzupassen.


### Häufig benutzte Anpassungen für Documents-Archive

Wird *Documents-Archive (EAS)* benutzt, müssen die angepassten Konfigurationsdaten aus der *Documents 5 Installation* für die *documentsOS Installation* neu bereitgestellt werden. Die nachfolgende Übersicht stellt die wichtigsten Konfigurationsverzeichnisse von EAS dar.

| Verzeichnis / Datei | Inhalt |
| --- | --- |
| eas\config\molds | Templates für Store-Erstellung per Wizard |
| eas\config\templates | Templates für Store-Konfigurationen |
| eas\config\stores | Alle Store-Konfigurationen |
| eas\config\users.txt | Benutzer und Passworte |
| eas\http\conf\httpd.conf | Konfigurationsdaten für Apache HTTP-Server |
| eas\http\conf\extra\httpd-ssl.conf | SSL/TLS Konfigurationen |

Darüber hinaus sollten projektspezifische Anpassungen für in der Datei httpd-ssl.conf angegebene SSL/TLS-Zertifikate geprüft werden.


## Anpassungen im Documents-Manager

Unter Servereinstellungen → Systemparameter sollten die folgenden Pfade überprüft werden.

- Servereinstellungen/Serververzeichnis für öffentliche Inhalte
- Servereinstellungen/Serververzeichnis für geschützte Inhalte
- Servereinstellungen/Serververzeichnis für Documents-Repository
- Servereinstellungen/Serververzeichnis für Documents-Volltextfilter


## Reindexierung von Dokumenten

Eine Reindexierung von Dokumenten ist nur erforderlich, wenn bei der Umstellung die Variante 2 (Umstellung unter Verwendung einer aktuellen Documents-Datensicherung) gewählt wurde. In diesem Fall müssen nach Prüfung von ggf. erforderlichen Anpassungen der Konfigurationsdateien im Verzeichnis *docfilter* alle Dokumente für jeden Mandanten reindexiert werden:

- Start von Documents-Manager und Anmeldung am jeweiligen Mandanten
- Ausführung der Wartungsoperation reindex blobs
- ggf. Wiederholung der Aktion für jeden zu verwendenden Mandanten


## Sonstige Anpassungen


### Änderung der Signaturschnittstelle

Ab **documentsOS Build 2504** wird die Signaturschnittstelle zentral über Skriptbibliotheken (*scriptlibs*) bereitgestellt, vorher war die Installation und Aktualisierung im Mandanten notwendig. Außerdem kann die Signaturschnittstelle nun als Erweiterung im **documentsOS-AdminCenter** eingestellt und konfiguriert werden, siehe dazu die entsprechende Dokumentation.

Wurde die Signaturschnittstelle in einer Documents 5 Installation genutzt, müssen diverse, bisher im Mandanten installierte Skriptbibliotheken entfernt werden. Dazu wird ein Wartungsskript bereitgestellt, dass ausgeführt werden muss, dazu ist wie folgt vorzugehen:

- Start von Documents-Manager und Anmeldung am jeweiligen Mandanten
- Erstellung eines Portalskriptes und Ausführung dieses Skriptes (siehe nachfolgende Screenshots)
Name des Skriptes: kann frei gewählt werden, z.B.: otrSign_doUpdate
Quellcode aus server/scriptlibs: es muss angegeben werden otrSign_UpdateToDocumentsOS
- ggf. Wiederholung der Aktion für jeden zu verwendenden Mandanten


![otrsign-update-1](./assets/otrsign-update-1.png)

Abb. 14 - Wartungsskript für Änderung Signaturschnittstelle

Wird nach der Ausführung des Skripts der **Return-Wert SUCCESS** ausgegeben, wurden die Änderungen erfolgreich durchgeführt. Alle anderen Return-Werte weisen auf Fehler hin, die zu prüfen sind.


### mobile App prüfen

Erfolgte die Installation von *documentsOS* auf einer **neuen Maschine**, müssen bei Verwendung der mobile App neue Registrierungen für die Server URL an allen Endgeräten eingestellt werden.


### Externe Anwendungen prüfen

Erfolgte die Installation von *documentsOS* auf einer **neuen Maschine**, müssen bei Verwendung von externen Anwendungen, die über entsprechende Schnittstellen auf Documents zugreifen (z.B. über SOAP, gRPC, docimport, Factory usw.), die entsprechenden Zugangsinformationen angepasst werden.