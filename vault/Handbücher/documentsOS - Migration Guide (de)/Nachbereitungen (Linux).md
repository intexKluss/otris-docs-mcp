---
title: "Nachbereitungen"
source: "https://otris.software/documents/manuals/books/migration-doc6-de/post-processing-linux.html#aenderung-der-signaturschnittstelle"
---

# Nachbereitungen

Die nachfolgend dargestellten Nachbereitungen der *documentsOS-Installation* enthalten eine Übersicht zu mindestens zu prüfenden Anpassungen (häufig vorkommend) der vorher verwendeten *Documents 5 Installation*. Wenn projektspezifisch weitere Anpassungen durchgeführt wurden, sind diese anhand von Installationsdokumentationen selbständig zu prüfen und ggf. zu implementieren.


## Anpassungen in Konfigurationsdateien

Folgende Konfigurationsdaten sind mindestens auf durchgeführte Anpassungen zu prüfen:


### Häufig benutzte Anpassungen für Documents-Server

| Datei | Verzeichnis |
| --- | --- |
| documents.ini | /etc/documents6/ |
| ArchiveXML.ini | /etc/documents6/ |
| wpl.ini | /etc/documents6/ |
| docsoapproxy.ini | /etc/documents6/ |

Darüber hinaus sollten projektspezifische Anpassungen im `/var/lib/documents6/server/locale` (Übersetzungsdateien) und `/var/lib/documents6/server/certs` (Zertifikate für gRPC-Schnittstelle) sowie zusätzlich bereitgestellte Zertifikate (z.B. Archivserver oder LDAPs) überprüft werden.
Wurden projektspezifische Konvertierungstools für Dokumente in der Datei `documents.ini` registriert, sind diese zu prüfen und ggf. anzupassen bzw. in der neuen Verzeichnisstruktur bereitzustellen.
Wurden eigene, projektspezifische Skripte im scriptlibs-Verzeichnis erstellt, sind diese ebenfalls aus der vorherigen Installation in der neuen Verzeichnisstruktur bereitzustellen.


### Häufig benutzte Anpassungen für Documents-Tomcat

| Datei | Verzeichnis | Bemerkung |
| --- | --- | --- |
| server.xml | /etc/tomcat9/ |  |
| web.xml | /etc/documents6/ |  |
| documents-tomcat.xml | /etc/documents6/ | Context-Konfigurationsdatei |
| viewer-config.xml | /etc/documents6/ |  |

Die Pfadangaben in der Context-Konfigurationsdatei sollten überprüft und angepasst werden.


### Web-Server (NGINX/Apache)

Die Konfiguration des Web-Servers sollte überarbeitet werden. Dabei sollten auch die in der Linux-Installation beschriebenen Anpassungen beachtet werden.


### Häufig benutzte Anpassungen für Documents-Archive

Die nachfolgende Übersicht stellt die wichtigsten Konfigurationsverzeichnisse von EAS dar.

| Verzeichnis / Datei | Inhalt |
| --- | --- |
| /etc/eas/*.ini | Alle Store-Konfigurationen |
| /etc/eas/EAS_AUTH.htdigest | Benutzer und Passworte |

Ggf. sollte die Apache-TLS-Konfiguration überarbeitet werden.


## Anpassungen im Documents-Manager

Für diese Anpassung muss der Manager Loader oder der Documents-Manager aus documentsOS-Toolbox verwendet werden.

Unter Servereinstellungen → Systemparameter sollten die folgenden Pfade überprüft werden. In der Regel muss hier "documents5" durch "documents6" ersetzt werden.

- Servereinstellungen/Serververzeichnis für öffentliche Inhalte
- Servereinstellungen/Serververzeichnis für geschützte Inhalte
- Servereinstellungen/Serververzeichnis für Documents-Repository
- Servereinstellungen/Serververzeichnis für Documents-Volltextfilter


## Reindexierung von Dokumenten

Eine Reindexierung von Dokumenten ist nur erforderlich, wenn bei der Umstellung die Variante 2 (Umstellung unter Verwendung einer aktuellen Documents-Datensicherung) gewählt wurde. In diesem Fall müssen nach Prüfung von ggf. erforderlichen Anpassungen der Konfigurationsdateien im Verzeichnis *docfilter* alle Dokumente für jeden Mandanten reindexiert werden:

- Start von Documents-Manager und Anmeldung am jeweiligen Mandanten
- Ausführung der Wartungsoperation reindex blobs
- ggf. Wiederholung der Aktion für jeden zu verwendenden Mandanten


## Webdienste und Redirect-URI's

Liegt eine Linux-Installation vor und wurden Webdienste mit Redirect-URI's verwendet (z.B. Azure AD, Signaturschnittstelle usw.), sind die Redirect-URI's in den externen Anwendungen zu prüfen und ggf. anzupassen, weil unter *documentsOS* der Kontext-Pfad für Windows *und* Linux jetzt einheitlich **documents** lautet, also z.B.:

- Linux / Azure AD Anbindung (alt): https://<HOST>/documents5/srv/GenericRedirectReceiver
- Linux / Azure AD Anbindung (neu): https://<HOST>/documents/srv/GenericRedirectReceiver


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

Abb. 19 - Wartungsskript für Änderung Signaturschnittstelle

Wird nach der Ausführung des Skripts der **Return-Wert SUCCESS** ausgegeben, wurden die Änderungen erfolgreich durchgeführt. Alle anderen Return-Werte weisen auf Fehler hin, die zu prüfen sind.


### mobile App prüfen

Erfolgte die Installation von *documentsOS* auf einer **neuen Maschine**, müssen bei Verwendung der mobile App neue Registrierungen für die Server URL an allen Endgeräten eingestellt werden.


### Externe Anwendungen prüfen

Erfolgte die Installation von *documentsOS* auf einer **neuen Maschine**, müssen bei Verwendung von externen Anwendungen, die über entsprechende Schnittstellen auf Documents zugreifen (z.B. über SOAP, gRPC, docimport, Factory usw.), die entsprechenden Zugangsinformationen angepasst werden.