---
title: "Bereitstellung und optionale Zusatzkonfigurationen in documentsOS"
source: "https://otris.software/documents/manuals/books/otrdriveconnect-doc-de/installation-documentsOS.html"
---

# Bereitstellung und optionale Zusatzkonfigurationen in documentsOS

Nachfolgend werden die Bereitstellung und zusätzliche Konfigurationsmöglichkeiten bei Verwendung von **documentsOS** beschrieben.


## Allgemeines

Redakteure mit der Funktion Documents Administrator haben nach der Anmeldung am Webclient standardmäßig Zugang zum AdminCenter und können über die Erweiterung Cloud-Drive Anbindung Einstellungen vornehmen. Wurde die Erweiterung aktiviert, können über die Rollenverwaltung Zugriffsprofile und/oder Benutzer angegeben werden, die zusätzlich Einstellungen vornehmen können.


## Aktivierung/Deaktivierung, Einstellungen, Berechtigungen

Die Aktivierung wird im AdminCenter über den Ordner Erweiterungen durchgeführt. Auf der Erweiterung ist die Aktion Aktivieren auszuführen.


![admincenter-1](assets/admincenter-1.png)

Abb. 34 - Inaktive Erweiterung

Wurde die Erweiterung aktiviert, wird sie im AdminCenter unter aktivierte Erweiterungen dargestellt und ermöglicht weitere allgemeine Einstellungen über die Aktion Einstellungen. Außerdem wird im AdminCenter ein Übersichtsordner *Gesperrte Cloud Dokumente* aktiviert.


![admincenter-2](assets/admincenter-2.png)

Abb. 35 - Aktive Erweiterung


![admincenter-3](assets/admincenter-3.png)

Abb. 36 - Einstellungsdialog für Apps und Dienste

Hinweise zur Konfiguration *Externe Anbieter* sind dem Kapitel [Registrieren von Applikationen für Benutzer](config-documents.html) zu entnehmen.


![admincenter-4](assets/admincenter-4.png)

Abb. 37 - Übersichtsordner Gesperrte Cloud Dokumente (1)

Liegen später, von Benutzern in deren Cloud-Drive geteilte Dokumente vor, können diese per administrativem Zugriff *entsperrt* werden.


![admincenter-5](assets/admincenter-5.png)

Abb. 38 - Übersichtsordner Gesperrte Cloud Dokumente (2)

Um ein Dokument zu entsperren, ist dieses zu markieren und die entsprechende Aktion *Sperre aufheben* auszuführen.


![admincenter-6](assets/admincenter-6.png)

Abb. 39 - Übersichtsordner Gesperrte Cloud Dokumente (3)

Bei **OK** wird die Sperre des Dokumentes an der Mappe aufgehoben, es kann dann wieder bearbeitet werden. Das Dokument und bestehende Freigaben für andere Personen bleiben im Cloud-Drive des Besitzers erhalten.

Dieser Übersichtsordner und die damit verbundenen Einstellungen sind auch für Benutzer sichtbar, die über die Rollenverwaltung im AdminCenter für diese Erweiterung optional angegeben wurden.


![admincenter-7](assets/admincenter-7.png)

Abb. 40 - Rollenverwaltung mit optionalen weiteren Zugriffseinstellungen

Per Klick auf die entsprechende Rolle (standardmäßig steht eine Rolle *admin* mit Vollzugriff auf die Cloud-Drive Anbindung bereit) können im entsprechenden Formular optional vorhandene Zugriffsprofile und/oder Benutzer angegeben werden, die Berechtigungen zur Konfiguration erhalten sollen.

- Hinzufügen: Klick in das entsprechende Feld und Auswahl aus AutoComplete-Liste
- Entfernen: Klick auf das entsprechende Symbol in der jeweiligen Zeile

Wird die Erweiterung deaktiviert, kann optional angegeben werden, ob geteilte Dokumente entsperrt werden sollen. Nach einer Deaktivierung wird auch der Übersichtsordner im AdminCenter entfernt, es können somit keine Dokumentensperren mehr aufgehoben werden.


![admincenter-8](assets/admincenter-8.png)

Abb. 41 - Deaktivierungsdialog


## Optionale Zusatzkonfiguration


### Änderung der Registeraktionen für Upload und Download

Bei der Aktivierung der Erweiterung wird die globale Eigenschaft (Documents-Einstellungen / Eigenschaften) **GlobalRegisterAction=otrDriveConnect** gesetzt. Dadurch werden die Aktionen für den Cloud-Drive Upload bzw. Download automatisch für alle Dokumentenregister aller vorhandenen Mappentypen bereitgestellt. Werden neue Mappentypen mit Dokumentenregistern später angelegt, stehen die Aktionen auf diesen Registern somit ebenfalls automatisch zur Verfügung. Sollen die Aktionen bei bestimmten Mappentypen und / oder nur bestimmten Dokumentenregistern zur Verfügung stehen, sind folgende Änderungen möglich:

- Abschalten der Aktionen auf allen Dokumentenregistern eines bestimmten Mappentypen: Mappentyp-Eigenschaft GlobalRegisterAction=-otrDriveConnect ("-" vor dem Aktionsnamen)
- Abschalten der Aktionen auf bestimmten Dokumentenregistern eines Mappentypen: Register-Eigenschaft GlobalRegisterAction=-otrDriveConnect ("-" vor dem Aktionsnamen)


### Bereitstellung einer Benutzer-Übersicht für geteilte Dokumente

Per Documents-Manager oder Benutzermanagement im AdminCenter kann am Benutzer die zusätzliche Eigenschaft **hasDriveConnectFolder** auf den Wert 1 gesetzt werden (Standard = 0 oder nicht gesetzt). Wird die Einstellung gesetzt, erhalten Benutzer einen zusätzlichen Ordner **Cloud Checkin/Checkout**, in dem alle Dokumente dargestellt werden, die von diesem Benutzer mit anderen Personen geteilt wurden und somit gesperrt sind. Über entsprechende Aktionen können dort die Freigaben direkt beendet werden.

[PDF Version](installation-documentsOS.pdf?b=2026-01-13)