---
title: "Allgemeine Einrichtung"
source: "https://otris.software/documents/manuals/books/otrwebservices/admincenter.html"
---

# Allgemeine Einrichtung


## Allgemeines

Redakteure mit der Berechtigung als "Documents Administrator" haben nach der Anmeldung am Webclient standardmäßig Zugang zum AdminCenter und können die Erweiterung **Web Services** aktivieren. Wurde die Erweiterung aktiviert, können über die Rollenverwaltung Zugriffsprofile und/oder Benutzer angegeben werden, die zusätzlich Einstellungen vornehmen können.


## Aktivierung/Deaktivierung, Berechtigungen

Die Aktivierung wird im AdminCenter über den Ordner Erweiterungen durchgeführt. Auf der Erweiterung ist die Aktion Aktivieren auszuführen. Wurde die Erweiterung aktiviert, wird sie im AdminCenter unter aktivierte Erweiterungen dargestellt.


![admincenter-1](./assets/admincenter-1.png)

Abb. 1 - Inaktive Erweiterung

Nach der Aktivierung wird im AdminCenter ein Ordner *Web Services* sichtbar, über den im weiteren Verlauf Web Services eingerichtet werden können.


![admincenter-4](./assets/admincenter-4.png)

Abb. 2 - Konfigurationsordner Web Services

Dieser Ordner und die damit verbundenen Einstellungen sind auch für Benutzer sichtbar, die über die Rollenverwaltung im AdminCenter für diese Erweiterung optional angegeben wurden.


![admincenter-5](./assets/admincenter-5.png)

Abb. 3 - Rollenverwaltung Web Services

Per Klick auf die entsprechende Rolle (standardmäßig steht eine Rolle admin mit Vollzugriff auf Web Services bereit) können im Formular optional vorhandene Zugriffsprofile und/oder Benutzer angegeben werden, die Berechtigungen zur Konfiguration erhalten sollen.

**Wichtiger Hinweis:** Wird die Erweiterung *Web Services***deaktiviert**, werden keine vorher erstellten Konfigurationen für Web Services vom Typ *Documents-API*, *Script-API* oder *Webhooks* entfernt oder gelöscht, Web Services können aber nach einer Deaktivierung nicht mehr verwendet werden bzw. führen beim Aufruf zu einem `404 - Not Found` Fehlerstatus.


## Einstellungen

Über den Ordner *Web Services* im AdminCenter steht die Aktion *Einstellungen* zur Verfügung.


![admincenter-2](./assets/admincenter-2.png)

Abb. 4 - Web Service Einstellungen

Über diese Einstellungen kann der *Standard API Benutzer* festgelegt werden.


![admincenter-3](./assets/admincenter-3.png)

Abb. 5 - Globale Einstellungen

In der Liste der möglichen *Standard API Benutzer* werden alle vorhandenen *Redakteure* mit der Funktion *Documents Administrator* sowie ein ggf. abweichender *Job-Benutzer* dargestellt. Die Einstellung ist zu **Speichern**. Mit der Speicherung wird für den angegebenen Benutzer automatisch ein *API Key* mit dem Namen *anonymousLoginToken* erzeugt, dieser API Key wird im weiteren Verlauf für die Authentifizierung verwendet und es muss kein *Authorization-Header* durch die externe Anwendung zusätzlich angegeben werden.

**Hinweis:** Für die Bereitstellung von Web Services vom Typ *Skript-API* und *Webhook* wird die Angabe eines *Standard API Benutzers***empfohlen**, da für den angegebenen Benutzer beim **Speichern** der Einstellungen automatisch ein *API Key* erstellt wird und in Verbindung mit der späteren Einstellung *Aufruf ohne Authentifizierung erlauben* keine weiteren Konfigurationen notwendig sind. Wird kein *Standard API Benutzer* verwendet bzw. die Einstellung *Aufruf ohne Authentifizierung erlauben* deaktiviert, muss ein API Key für einen Benutzer manuell erstellt und dieser beim Aufruf des Web Servicesd durch die externe Anwendung zusätzlich angegeben werden. Für die Bereitstellung von Web Services vom Typ *Documents-API* ist diese Einstellung nicht relevant.


## API-Key einrichten

Auf Web Services wird generell per API-Key zugegriffen. Bei Web Services vom Typ *Skript-API* und *Webhook* kann wie oben angegeben ein *Standard API Benutzers* und ggf. *Aufruf ohne Authentifizierung* verwendet werden. Bei Web Services vom Typ *Documents-API* und *Skript-API* (Aufruf mit Authentifizierung) können Benutzer und/oder Gruppen angegeben werden, die den Web Service verwenden sollen. Werden keine Benutzer und/oder Gruppen angegeben, können alle Benutzer den Web Service verwenden. Die manuelle Einrichtung eines API-Key erfolgt über das Benutzermenü **Apps und Dienste**, zuvor ist sicherzustellen, dass die allgemeine Konfiguration für die Verwaltung von API-Keys vorgenommen wurde, siehe auch [[HowTos/API-Key Authentifizierung|API-Keys]].


![admincenter-6](./assets/admincenter-6.png)

Abb. 6 - Benutzermenü / Apps und Dienste


![admincenter-7](./assets/admincenter-7.png)

Abb. 7 - Dialog API-Key erstellen

Der so erstellte API-Key für den jeweiligen Benutzer ist dann in der Folge zur Authentifizierung des Web Services als **Authorization-Header***Bearer API-Key* anzugeben.