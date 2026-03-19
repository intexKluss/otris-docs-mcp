---
title: "Manuelles Update von Apache Tomcat Server in Microsoft Windows Systemumgebungen"
source: "https://otris.software/documents/howto/common/tomcat-update-windows.html"
---

# Manuelles Update von Apache Tomcat Server in Microsoft Windows Systemumgebungen


## Vorbemerkungen

Für DOCUMENTS-Installationen unter Microsoft Windows Server Systemen wird aktuell standardmäßig **Apache Tomcat 9.0** als Webapplikations-Container für Java verwendet und installiert.

Vor der Freigabe neuer Service- oder Hotfix-Releases von DOCUMENTS wird regelmäßig geprüft, ob z.B. wegen dringender Sicherheitsupdates aktualisierte Tomcat-Versionen von der Apache Software Foundation bereitgestellt wurden. Ist dies der Fall und die Sicherheitsupdates sind für DOCUMENTS relevant, sind diese auch immer Bestandteil eines zukünftigen DOCUMENTS-Releases.

Werden von der Apache Software Foundation kurzfristig neue Tomcat-Versionen bereitgestellt und steht zu diesem Zeitpunkt noch kein neues DOCUMENTS-Release bereit, so kann es u. U. notwendig sein, die vorhandene Tomcat-Installation **manuell** zu aktualisieren. In jedem Fall sollte selbständig geprüft werden, ob eine manuelle Aktualisierung tatsächlich notwendig ist!

Dieses HowTo beschreibt die notwendigen Schritte zur manuellen Aktualisierung der Tomcat-Installation bei einer Standardinstallation von DOCUMENTS unter Microsoft Windows ohne die Verwendung anderer Webserver (z.B. Nginx, Apache HTTP Server oder Microsoft IIS).

**Wichtige Hinweise**

Bevor Sie mit Hilfe dieser Dokumentation ein System aktualisieren, lesen Sie dieses Dokument bitte **zuerst vollständig** durch!
Es müssen einige Anforderungen im Vorfeld erfüllt sein und ein Systemneustart ist während der Aktualisierung einzuplanen!
Beachten Sie die Reihenfolge der nachfolgend dargestellten Updateschritte!
Da für die manuell bereitgestellten Tomcat-Updates keine vorherige Qualitätssicherung durchgeführt wurde, können u. U. Probleme im Verhalten der Webapplikation auftreten!
Für derartige Probleme oder Fehler, die aufgrund einer fehlerhaften oder unvollständigen Update-Installation auftreten, wird keine Haftung übernommen!


## Vorbereitungen


### Herunterladen und überprüfen der korrekten Tomcat Version

Die jeweils aktuelle Version von **Apache Tomcat 9.0** ist unter der Web-Adresse [https://tomcat.apache.org/download-90.cgi](https://tomcat.apache.org/download-90.cgi) zu finden.
Aus dem Bereich **Core** ist zunächst das Zip-Paket für **64-Bit Windows** herunterzuladen.
Zusätzlich ist der nebenstehende Link mit der zugehörigen **SHA-512**-Checksumme zu öffnen!


Abb. 1 - Beispiel Download für Version 9.0.112


Abb. 2 - Beispiel Prüfsumme für Version 9.0.112

Um sicherzustellen, dass die Version vollständig und korrekt heruntergeladen wurde, ist jeder Download unbedingt zu prüfen! Auf Microsoft Windows Systemen
kann dazu z.B. das Kommandozeilen-Tool `certutil` genutzt werden:

`certutil -hashfile <path to file> SHA512`


Abb. 3 - Beispiel: Prüfung einer SHA512-Prüfsumme für Version 9.0.112 mit certutil

Die Prüfsumme aus dem Download-Link muss mit der z.B. per `certutil` ermittelten Prüfsumme exakt übereinstimmen! Ist dies nicht der Fall, so muss der Download gelöscht, wiederholt und erneut geprüft werden!


### Außerbetriebnahme des Systems

Alle DOCUMENTS-Dienste sind zu beenden. Dazu gehören bei vollständigem Installationsumfang:

- Documents6Archive
- Documents6Server
- Documents6Soap
- Documents6Tomcat9


### Sicherung der bestehenden Tomcat-Installation

Die bestehende Tomcat-Installation ist vollständig zu sichern. Dazu kann das existierende Verzeichnis einfach umbenannt werden, beispielsweise so:


Abb. 4 - Bestehende Tomcat-Installation sichern (Verzeichnis umbenennen)

**Hinweis**

Aus dieser Sicherung werden nach der Bereitstellung der neuen Tomcat-Version in jedem Fall noch verschiedene Dateien benötigt!


## Aktualisierung der Tomcat-Installation


### Bereitstellung der neuen Tomcat-Version

Die zuvor heruntergeladene und geprüfte Tomcat-Version ist zu entpacken! Das komplette entpackte Paket muss in der DOCUMENTS-Installation wieder als `\tomcat9`-Verzeichnis bereitgestellt werden, bennenen Sie es daher ggf. einfach um:


Abb. 5 - Neues Tomcat Verzeichnis


Abb. 6 - Verzeichnis-Inhalt


### Löschen der Standard-Webapplikationen

Tomcat wird mit mehreren Standard-Webapplikationen ausgeliefert, die sich alle im Unterverzeichnis `\tomcat9\webapps` befinden. Diese Anwendungen werden nicht benötigt und sollten aus Sicherheitsgründen entfernt werden. Deshalb sind alle Dateien in diesem Verzeichnis der neuen Tomcat-Installation zu löschen, das betrifft insbesondere:

- \docs
- \examples
- \host-manager
- \manager
- \ROOT


### Bereitstellung der DOCUMENTS-Webapplikation

Der DOCUMENTS-WebClient aus dem Sicherungsverzeichnis (im Beispiel `\tomcat9-backup`) muss in der neuen Tomcat-Installation bereitgestellt werden. Dieser kann sehr einfach übertragen werden:

- Verzeichnis \tomcat9-backup\webapps\documents vollständig kopieren nach \tomcat9\webapps (ohne documents.war!)

**Hinweis**

Die Kopie der kompletten entpackten Webapplikation aus dem Sicherungsverzeichnis in das `\webapps`-Verzeichnis der neuen Tomcat-Installation enthält außer dem standardmäßigen WebClient für DOCUMENTS auch alle möglicherweise durchgeführten, projektspezifischen Anpassungen für die Anwendung (z.B. manuelle Anpassungen in der Datei `\WEB-INF\web.xml` für Single Sign-On usw.). Da Tomcat diese Art der Bereitstellung als Deployment generell unterstützt, ist die zusätzliche Bereitstellung der `documents.war`-Datei bei einem manuellen Tomcat-Update **ohne neue DOCUMENTS-Version** nicht notwendig!


### Bereitstellung der Konfigurationsdateien

Verschiedene Konfigurationsdateien aus dem Sicherungsverzeichnis (im Beispiel `\tomcat9-backup`) müssen in der neuen Tomcat-Installation bereitgestellt werden. Führen Sie folgende Schritte nacheinander aus:

- Sicherung der originalen \tomcat9\conf\server.xml Konfigurationsdatei durch Umbenennen in z.B. server.xml.original
- Kopieren der bisher verwendeten \tomcat9_backup\conf\server.xml Konfigurationsdatei nach \tomcat9\conf, dies ersetzt die originale Konfiguration
- Kopieren ggf. vorhandener Dateien und Unterverzeichnisse für Zertifikate bei Verwendung von SSL, auf die in der server.xml Datei verwiesen wird


### Bereitstellung weiterer projektspezifischer Anpassungen

Wurden in der vorherigen Tomcat-Installation (siehe Backup-Verzeichnis) zusätzliche, projektspezifische Anpassungen durchgeführt, so sind diese selbständig zu prüfen und in der neuen Tomcat-Installation bei Bedarf bereitzustellen! Folgende Schritte könnten dabei notwendig werden:

- Kopieren der ggf. vorhandenen \tomcat9\conf\Catalina\localhost\documents.xml Konfigurationsdatei für die Einbindung externer Ressourcen etc.
- Kopieren ggf. existierender eigener Web-Anwendungen, die im Verzeichnis \tomcat9\webapps zusätzlich bereitgestellt wurden


### Anpassung des Windows Dienstes (optional)

Der Windows Dienst `Documents6Tomcat9` weist in seiner Beschreibung die Version aus, welche bei der ursprünglichen DOCUMENTS-Installation verwendet wurde. Diese kann noch zusätzlich aktualisiert werden.


Abb. 7 - Tomcat 9.0 Windows Dienst - Beschreibung, vorherige Version

Um die Beschreibung zu ändern, muss dieser Dienst mit Hilfe der beiden Dienste-Registrierungsdateien zuerst deinstalliert und dann neu installiert werden. Dazu ist wie folgt vorzugehen:

- eine Kommandozeile mit administrativen Rechten starten ("... als Administrator ausführen")
- in das Wurzelverzeichnis der DOCUMENTS-Installation (z.B. C:\Programme\Documents6) navigieren
- Tomcat-Dienst deregistrieren mit dem Kommando unregisterServices.bat tomcat
- Tomcat-Dienst neu registrieren mit dem Kommando registerServices.bat tomcat


Abb. 8 - Tomcat 9.0 Windows Dienst - Beschreibung, neue Version

Wurden in der ursprünglichen Installation nachträglich verschiedene Parameter am Tomcat-Dienst angepasst, so sollten diese nach einer neuen Registrierung des Dienstes ebenfalls wieder eingestellt werden. Dazu können mit Hilfe der (bei der o.a. Registrierung neu erzeugten) Anwendung `\tomcat9\bin\Documents6Tomcat9w.exe` sämtliche Diensteigenschaften angezeigt und bearbeitet werden:


Abb. 9 - Tomcat 9.0 Windows Dienst - Parameter anpassen


## Kontrolle der Tomcat-Version

Nach den durchgeführten Änderungen sind alle anderen vorher beendeten DOCUMENTS-Dienste wieder neu zu starten. Nach Anmeldung im WebClient sollte im Benutzermenü über **"Info/Support"** die Tomcat-Version geprüft werden:


Abb. 10 - Versionsprüfung

Treten Probleme auf, so sind die Logfiles in `\tomcat9\logs\` zu prüfen! Ein vorheriger Stand kann mit Hilfe des Sicherungsverzeichnisses jederzeit wiederhergestellt werden.