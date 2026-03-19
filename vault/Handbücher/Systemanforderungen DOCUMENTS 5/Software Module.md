---
title: "Systemanforderungen DOCUMENTS 5"
source: "https://otris.software/documents/manuals/books/system-requirements-d5/server-modules.html"
---

## Zusatzinformationen für einzelne Module


### DOCUMENTS-Manager

Die Anwendung **DOCUMENTS-Manager** ist ein administratives Werkzeug für die Konfiguration eines DOCUMENTS-Mandanten.
Zu den wesentlichen Funktionen zählen z.B. die Einrichtung von Benutzerkonten und Profilen, das Anlegen und Bearbeiten von Mappentypen, die Konfiguration von Ordnern oder die Einrichtung von Archiven. Die Anwendung kann ausschließlich auf Microsoft Windows Betriebssystemen ausgeführt werden, unterstützt sind die o.a. Microsoft Windows Server Betriebssysteme sowie Microrosft Windows 10 und Microsoft Windows 11. Die Anwendung ist Bestandteil einer Installation unter Windows (Installationsverzeichnis\manager) und kann auch gegen entfernte Installationen (Linux, Windows) als ManagerLoader (eigenes Setup für Microsoft
Windows Betriebssysteme verfügbar) ausgeführt werden.

**Hinweis:** Für die Ausführung von DOCUMENTS-Manager wird eine Bildschirmauflösung von 1280x1024 oder höher empfohlen.


### LDAP-Kopplung / Verzeichnisdienste

Folgende Verzeichnisdienste werden unterstützt:

- Microsoft ActiveDirectory
- Microsoft Azure AD
- Lotus Domino
- Novell Netware
- OpenDJ

**Wichtiger Hinweis:** Bei der Kopplung mit einem Verzeichnisdienst sowie folgenden besonderen Anforderungen ist generell eine konzeptionelle Prüfung vorab erforderlich:

- Cloudbasierte Lösungen
- Single SignOn-LDAP
- Kopplung mit parallelem Zugriff auf mehrere Domänen

In diesen Fällen werden die generelle Realisierbarkeit sowie der erforderliche Aufwand individuell beurteilt und bewertet.
Zur Verwendung von *HTTPS* ist ein Zertifikat im **PKS#12** Format erforderlich (`.pfx` bzw. `.p12` Datei). Dieses muss in der Installationsumgebung bereitgestellt werden.


### OCR (Texterkennung)

Das Modul integriert Komponenten anderer Hersteller. Es steht für Windows-Server-Betriebssysteme sowie Linux zur Verfügung.


### CREATOR

Das optionale Modul CREATOR (für otris legal SUITE) erfordert zwingend eine Installation der JavaScript-Laufzeitumgebung *node.js* in einer aktuellen Version auf dem Applikationsserver. Die Installation ist so einzurichten, dass ein Aufruf über die Kommandozeile möglich ist.


### Verwendung von LibreOffice für die PDF-Konvertierung von Microrosft Office Dateien

Die Anwendung LibreOffice kann dazu verwendet werden, Microsoft Office Dateien vom Typ „.docx“, „.xslx“ und „.pptx“ zur Laufzeit auf dem Anwendungsserver in eine PDF-Datei zu konvertieren. So kann die Datei z.B. mit der Mappe als „Gesamt“-PDF-Datei gedruckt werden. Ferner wird die zur Laufzeit erzeugte PDF-Datei genutzt, um eine Vorschau auf die Office-Datei im Browser zu simulieren. Beide Funktionen setzen eine Installation der Anwendung LibreOffice auf dem Applikationsserver zwingend voraus.

**Wichtiger Hinweis:** Die simulierte Vorschau auf diese Office-Dokumente unterliegt Einschränkungen: Einige Layoutmöglichkeiten und Formattribute in Microsoft Office-Dokumenten werden nach der Konvertierung unterschiedlich dargestellt oder gar nicht unterstützt. Das betrifft z.B. diverse Schriftarten, AutoFormen, Inhalts- und andere Verzeichnisse, Pivot-Tabellen, diverse weitere Microsoft Office Formularfunktionen und Formatierungen oder Hyperlinks. Eine vollständige Abbildungstreue des konvertierten Dokumentes zum ursprünglichen Dokument kann nicht gewährleistet werden.