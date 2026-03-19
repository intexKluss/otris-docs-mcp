---
title: "Bereitstellung"
source: "https://otris.software/documents/manuals/books/otr-user-management/install.html"
---

# Bereitstellung

Redakteure mit der Funktion *Documents Administrator* haben nach der Anmeldung am Webclient standardmäßig Zugang zum AdminCenter und können die Erweiterung *Benutzermanagement* aktivieren. Wurde die Erweiterung aktiviert, können über die Rollenverwaltung Zugriffsprofile und/oder Benutzer angegeben werden, die *optional* zusätzlich Zugang zum Benutzermanagement erhalten sollen.


## Aktivierung/Deaktivierung, Berechtigungen

Die Aktivierung wird im AdminCenter über den Ordner *Erweiterungen* durchgeführt. Auf der Erweiterung ist die Aktion **Aktivieren** auszuführen.


![admincenter-1](assets/admincenter-1.png)

Abb. 1 - Inaktive Erweiterung

Wurde die Erweiterung aktiviert, wird sie im AdminCenter unter *aktivierte Erweiterungen* dargestellt. Außerdem wird im AdminCenter ein Konfigurationsordner **Benutzermanagement** mit den Unterordnern *Benutzerkonten* und *Zugriffsprofile* aktiviert.


![admincenter-2](assets/admincenter-2.png)

Abb. 2 - Aktive Erweiterung


![admincenter-3](assets/admincenter-3.png)

Abb. 3 - Konfigurationsordner im AdminCenter

Nach einer Deaktivierung wird der Konfigurationsordner im AdminCenter entfernt, es können somit keine Einstellungen mehr getroffen werden.


![admincenter-5](assets/admincenter-5.png)

Abb. 4 - Deaktivierungsdialog


## Berechtigungen

Der Konfigurationsordner und die damit verbundenen Einstellungen sind auch für Benutzer sichtbar, die über die Rollenverwaltung im AdminCenter für diese Erweiterung *optional* angegeben wurden.


![admincenter-4](assets/admincenter-4.png)

Abb. 5 - Rollenverwaltung mit optionalen weiteren Zugriffseinstellungen

Per Klick auf die entsprechende Rolle können im entsprechenden Formular optional vorhandene Zugriffsprofile und/oder Benutzer angegeben werden, die Berechtigungen zur Konfiguration erhalten sollen.

- Hinzufügen: Klick in das entsprechende Feld und Auswahl aus AutoComplete-Liste
- Entfernen: Klick auf das entsprechende Symbol in der jeweiligen Zeile

Standardmäßig stehen folgende Rollen bereit:

- Rolle admin: Diese Rolle hat Vollzugriff auf das Benutzermanagement
- Rolle edit: Diese Rolle hat schreibenden Zugriff auf das Benutzermanagement, darf aber keine Löschungen oder Deaktivierungen vornehmen
- Rolle read: Diese Rolle hat lesenden Zugriff auf das Benutzermanagement

**Hinweis:** Diverse Berechtigungen können per *Callback* weiter eingeschränkt werden, siehe dazu die [Callback-Dokumentation](callbacks.html).