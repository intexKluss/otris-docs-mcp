---
title: "Beispiel für Microsoft Teams"
source: "https://otris.software/documents/manuals/books/otrwebservices/webhooks-example-teams.html"
---

# Beispiel für Microsoft Teams

Nachfolgend wird ein Beispiel mit dem **Demomandanten relations** für einen ausgehenden Webhook in Microsoft Teams dargestellt.


## Möglicher Anwendungsfall

Benutzer sollen in Microsoft Teams Chat Abfragen an documentsOS durchführen können, documentsOS soll die entsprechenden Antworten per Skript bereitstellen.


## Bereitstellung des Beispiels in documentsOS


### Voraussetzungen prüfen

Damit das Beispiel für Microsoft Teams erstellt werden kann, ist sicherzustellen, dass documentsOS korrekt für SSL konfiguriert wurde und der Webserver (Tomcat) von außen erreichbar ist.
Um für Entwicklungszwecke das Beispiel für *localhost* ohne SSL-Konfiguration für den Webserver (Tomcat) bereitzustellen, kann z.B. ein Tool wie **ngrok** verwendet werden, dazu kann wie folgt vorgegangen werden:

- Download je nach Betriebssystem, z.B. für Windows (64-bit) (https://ngrok.com/download)
- Je nach Betriebssystem bereitstellen, z.B. für Windows in ein entsprechendes Verzeichnis entpacken
- Start per Kommandozeile mit Angabe des lokalen Tomcat-Ports, z.B.: ngrock.exe http 8080 (wenn 8080 der lokale Tomcat-Port ist )
- Konfiguration der Mandanteneinstellungen für SSL Aktiv und SSL-Hostname


![webhooks-example-msteams-1](./assets/webhooks-example-msteams-1.png)

Abb. 26 - ngrock starten


![webhooks-example-msteams-2](./assets/webhooks-example-msteams-2.png)

Abb. 27 - ngrock Forwarding Adresse

**Hinweis:** Bei Verwendung von ngrock ohne vorher erstellten Account läuft eine erstellte Session nach 2 Stunden automatisch ab.


![webhooks-example-msteams-3](./assets/webhooks-example-msteams-3.png)

Abb. 28 - SSL Mandanteneinstellungen (AdminCenter)


### Skript bereitstellen

Download: [Example_Webhook_MicrosoftTeams.js](Example_Webhook_MicrosoftTeams.js)

Für den Anwendungsfall kann das o.a. Skript heruntergeladen und im **Demomandanten relations** als neues Skript angelegt werden, Erläuterungen zum Beispielskript:

- Im Skript wird der von Microsoft Teams bei der Bereitstellung eines ausgehenden Webhooks erstellte Security Token nicht geprüft. Das kann optional selbst mit den im Skript gegebenen Hinweisen erfolgen (Remark for Security token), siehe dazu zusätzlich: Microsoft Docs.
- Im Beispiel wird in der Folge eine Anmeldung ohne Authentifizierung verwendet, d.h. das Skript wird in dem Kontext des Benutzers ausgeführt, der in den Webhook Einstellungen hinterlegt wurde. Werden nun im Skript Methoden verwendet, die Abhängigkeiten zu einem Benutzerkontext haben (z.B. FileResultset), kann dies z.B. mit den im Skript gegebenen Hinweisen erfolgen (Remark for User context).


![webhooks-example-msteams-4](./assets/webhooks-example-msteams-4.png)

Abb. 29 - Skriptbereitstellung (AdminCenter)

Am Skript muss die Eigenschaft **webServicesEnabled** mit dem Wert **true** manuell angelegt werden. Nur Skripte mit dieser Eigenschaft können später als *Verarbeitendes Portalscript* am Webhook ausgewählt werden.


![webhooks-example-msteams-5](./assets/webhooks-example-msteams-5.png)

Abb. 30 - Skripteigenschaft


### Webhook-Erweiterung aktivieren und Einstellungen festlegen

- Die Erweiterung Web Services muss, sofern noch nicht geschehen, im AdminCenter unter Inaktive Erweiterungen aktiviert werden (Anmeldung am Webclient als Redakteur, z.B. crmadmin), siehe auch Erweiterung aktivieren.
- Nach der Aktivierung kann in den Einstellungen der Erweiterung der Standard API Benutzer angegeben werden, die Einstellung ist zu Speichern, siehe auch Optionale Einstellungen vornehmen.


![webhooks-example-msteams-6](./assets/webhooks-example-msteams-6.png)

Abb. 31 - Webhook Einstellungen für API Benutzer


### Webhook bereitstellen

Über den Konfigurationsordner *Web Services* ist ein neuer Web Service vom Typ **Webhook** zu erstellen.


![webhooks-example-msteams-7](./assets/webhooks-example-msteams-7.png)

Abb. 32 - Web Service Typ Webhook erstellen

Folgende Einstellungen können verwendet werden:

- Webhook Bezeichner angeben (frei wählbar)
- Aktiv: ja
- Als Verarbeitendes Portalscript das vorher bereitgestellte Script aus der Liste auswählen
- Aufruf ohne Authentifizierung erlauben: ja

Beim Speichern dieser Einstellungen wird die *Webhook URL* automatisch erstellt, diese kann kopiert und danach in Microsoft Teams angegeben werden.


![webhooks-example-msteams-8](./assets/webhooks-example-msteams-8.png)

Abb. 33 - Webhook bereitstellen


## Bereitstellung des Beispiels in Microsoft Teams


### Ausgehenden Webhook einrichten

Zunächst kann in einem Team ein neuer Kanal angelegt (oder ein vorhandener Kanal benutzt) werden. Im Beispiel wird ein neuer Kanal angelegt:


![webhooks-example-msteams-9](./assets/webhooks-example-msteams-9.png)

Abb. 34 - Neuer Kanal

Um einen neuen ausgehenden Webhook im Kanal anzulegen, kann wie folgt vorgegangen werden:

- Registerkarte auf dem Kanal hinzufügen
- Apps verwalten
- Ausgehenden Webhook erstellen


![webhooks-example-msteams-10](./assets/webhooks-example-msteams-10.png)

Abb. 35 - Ausgehenden Webhook erstellen (1)


![webhooks-example-msteams-11](./assets/webhooks-example-msteams-11.png)

Abb. 36 - Ausgehenden Webhook erstellen (2)


![webhooks-example-msteams-12](./assets/webhooks-example-msteams-12.png)

Abb. 37 - Ausgehenden Webhook erstellen (3)

Für den Webhook können folgende Informationen bereitgestellt werden:

- Name: z.B. documents (Mit diesem Namen wird im Chat adressiert)
- Rückruf-URL: die in documentsOS erzeugte Webhook URL kann hier eingefügt werden
- Beschreibung: eine frei wählbare Beschreibung muss angegeben werden
- Profilbild: ein Profilbild kann optional angegeben werden


![webhooks-example-msteams-13](./assets/webhooks-example-msteams-13.png)

Abb. 38 - Ausgehenden Webhook erstellen (4)

Nach dem Erstellen des Webhooks wird von Microsoft Teams ein *Security Token* bereitgestellt. Dieser Security Token kann optional im Skript zur Prüfung verwendet werden (siehe Erläuterungen im Skript).


![webhooks-example-msteams-14](./assets/webhooks-example-msteams-14.png)

Abb. 39 - Ausgehenden Webhook erstellen (5)


### Webhook benutzen (Microsoft Teams Chat)

Um über den Webhook Anfragen an documentsOS zu stellen muss immer der *Webhook Name* mit `@<Name>` adressiert und ausgewählt werden, im Beispiel `@documents`:


![webhooks-example-msteams-15](./assets/webhooks-example-msteams-15.png)

Abb. 40 - Adressierung im Chat (Webhook auswählen)

Erfolgt die Anfrage ohne weitere Parameter (nur mit `@documents`), wird die im Skript dafür vorgesehene Meldung zurückgegeben:


![webhooks-example-msteams-16](./assets/webhooks-example-msteams-16.png)

Abb. 41 - Anfrage ohne weitere Parameter

Beispiel mit weiteren Abfragen / Antworten (`/help`, `/system`, `/case`, `/dopak`):


![webhooks-example-msteams-17](./assets/webhooks-example-msteams-17.png)

Abb. 42 - Weitere Anfragen