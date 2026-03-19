---
title: "Bereitstellung in documentsOS"
source: "https://otris.software/documents/manuals/books/otrlifecycle/install-dOS.html"
---

# Bereitstellung in documentsOS

Nachfolgend wird die Bereitstellung für **documentsOS** im *AdminCenter* beschrieben.

**Hinweis:** Bei einer *Aktualisierung von Documents 5 auf documentsOS* mit bestehenden Lebenszykluseinstellungen werden vorhandene Konfigurationen automatisch übernommen. Da in Documents 5 eigene Ordner mit entsprechenden Konfigurationen verwendet wurden und die Einstellungen in documentsOS per AdminCenter vorgenommen werden, sind die bestehenden Konfigurationsordner zu löschen.


## Allgemeines

Redakteure mit der Funktion *Documents Administrator* haben nach der Anmeldung am Webclient standardmäßig Zugang zum AdminCenter und können über die Erweiterung *Lebenszyklus Verwaltung* Einstellungen vornehmen. Wurde die Erweiterung aktiviert, können über die Rollenverwaltung Zugriffsprofile und/oder Benutzer angegeben werden, die zusätzlich Einstellungen vornehmen können.


## Aktivierung/Deaktivierung, Berechtigungen

Die Aktivierung wird im AdminCenter über den Ordner *Erweiterungen* durchgeführt. Auf der Erweiterung ist die Aktion **Aktivieren** auszuführen.


![admincenter-1](assets/admincenter-1.png)

Abb. 1 - Inaktive Erweiterung

Wurde die Erweiterung aktiviert, wird sie im AdminCenter unter *aktivierte Erweiterungen* dargestellt. Außerdem wird im AdminCenter ein Konfigurationsordner *Lebenszyklus* aktiviert.


![admincenter-2](assets/admincenter-2.png)

Abb. 2 - Aktive Erweiterung


![admincenter-3](assets/admincenter-3.png)

Abb. 3 - Konfigurationsordner

Dieser Konfigurationsordner und die damit verbundenen Einstellungen, sowie der Unterordner *Ereignismeldungen* sind auch für Benutzer sichtbar, die über die Rollenverwaltung im AdminCenter für diese Erweiterung *optional* angegeben wurden.


![admincenter-4](assets/admincenter-4.png)

Abb. 4 - Rollenverwaltung mit optionalen weiteren Zugriffseinstellungen

Per Klick auf die entsprechende Rolle (standardmäßig steht eine Rolle *admin* mit Vollzugriff auf die Lebenszyklus Verwaltung bereit) können im entsprechenden Formular optional vorhandene Zugriffsprofile und/oder Benutzer angegeben werden, die Berechtigungen zur Konfiguration erhalten sollen.

- Hinzufügen: Klick in das entsprechende Feld und Auswahl aus AutoComplete-Liste
- Entfernen: Klick auf das entsprechende Symbol in der jeweiligen Zeile

Wird die Erweiterung deaktiviert, kann optional angegeben werden, ob vorhandene Regeln und Vorlagen gelöscht werden sollen. Nach einer Deaktivierung werden keine Lebenszyklusregeln mehr ausgeführt und auch der Konfigurationsordner im AdminCenter entfernt, es können somit keine Einstellungen mehr getroffen werden.


![admincenter-5](assets/admincenter-5.png)

Abb. 5 - Deaktivierungsdialog