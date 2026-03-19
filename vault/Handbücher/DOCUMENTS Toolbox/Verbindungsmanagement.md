---
title: "Verbindungsmanagement"
source: "https://otris.software/documents/manuals/books/toolbox/toolbox-connection-management.html"
---

# Verbindungsmanagement


## Hauptmenü


### Gruppen

![Hauptmenü](assets/connection-groups.png)


Verbindungen werden sortiert angezeigt, jeweils gruppiert nach Servern und deren Mandanten. Neben der Default Gruppe "Alle Verbindungen" können weitere Gruppen über die Menüleiste "Neue Gruppe" hinzugefügt werden.


### Synchronisierung

Serververbindungen können synchronisiert werden. Jegliche Mandantenverbindungen werden wie folgt synchronisiert:

- Mandanten des Servers, die nicht in der Toolbox-Auflistung existieren, werden hinzugefügt
- Mandanten der Toolbox-Auflistung, die aber nicht auf dem Server existieren, werden entfernt
- Individualisierte Verbindungsbezeichnungen werden nicht verändert


## Verbindungs-Editor

Mithilfe des Verbindungseditors können die gespeicherten Verbindungen bearbeitet werden. Hier werden alle relevanten Informationen zu einem Mandanten/Server/Benutzer abgelegt.

| Serververbindung | Mandantenverbindung |
| --- | --- |
|  |  |

- Server/Host: Server URL Bsp. localhost
- Mandant: Eindeutiges Mandantenkürzel
- Port: Portnummer des Servers: lokaler default 11000
- TLS Auswahl: Aktiviert TLS Modus
TLS Modus: Direct oder Start TLS B (Best practice Direct TLS)
Proxy nutzten Auswahl: Anwendungsfall Bsp. beim Arbeiten mit Visio-Plugin
- Web URL: URL des Servers. Variablenersetzung möglich:
%Server% - Hostname des Servers
%Principal% - Name des Mandanten
- Benutzername
- Passwort
- Leere Felder ignorieren: Kein erneutes Nachfragen bei fehlenden Eingaben Bsp. Passwort


#### Mandantenweite Nutzerauswahl

Die Mandantenverbindung ist jeweils von der Serververbindung abhängig und verweist auf die dortigen Einstellungen. Best Practice: Hinterlegen eines mandantenweiten Nutzers z.B. eines Redakteur, da der serverweite Admin nur eine Verbindung gleichzeitig zulässt.


### Web URL


#### Variablenersetzung

- %Server% - Hostname des Servers
- %Principal% - Name des Mandanten


#### Abweichender Web-Nutzer

Falls der Nutzer des WebClients von dem des Managers abweicht kann an der Web URL mit Hilfe des Formats `http(s)://[User]:[Passwort]@[ServerUrl]:[Port]/documents(5)` ein abweichender Nutzer spezifiziert werden.