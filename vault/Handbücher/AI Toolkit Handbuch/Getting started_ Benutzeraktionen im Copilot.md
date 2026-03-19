---
title: "Getting started: Benutzerdefinierte Aktionen"
source: "https://otris.software/documents/manuals/books/otr-ai/getting-started-user-defined-function.html"
---

# Getting started: Benutzerdefinierte Aktionen

Der Copilot kann benutzerdefinierte Aktionen ausführen. Es gibt zwei Arten von Aktionen: **Skriptaktionen** und **Gadgetaktionen**. Beide Aktionstypen müssen zuvor dem gewünschten Mappentyp hinzugefügt werden.

Nachfolgend wird kurz erläutert, wie man nach der Erstellung und Konfiguration des Copiloten, siehe [Getting started: Copilot](getting-started-user-defined-function.html),
einem Mappentyp eine benutzerdefinierte Aktion hinzufügt.

Neben dieser Anleitung sind die Benutzerdefinierten Aktionen auch in einer Übersicht aufgeführt, weitere Details siehe [Benutzerdefinierte Funktionen am Copiloten](user-defined-functions.html).


## aiRelevant-Skriptaktion erstellen

Dieses Beispiel zeigt, wie eine `aiRelevant`-Skriptaktion erstellt und einem Copiloten zur Verfügung gestellt werden kann.

**1. Skript mit gewünschter Aktion definieren**

Zunächst wird ein Skript mit dem entsprechenden Quellcode erstellt, das die gewünschte Aktion ausführt. In diesem Beispiel soll der Copilot eine Eingangsanalyse für Tickets erstellt. Er generiert einen Lösungsvorschlag und weist das Ticket dem Support-Team zu. Die Daten werden anschließend in die Mappe übertragen.

Zusätzlich können komplexe Aktionen oder Workflows ausgeführt werden. Wie in diesem Beispiel das Monitoring ähnlicher Supportfälle.

**Finale Beispielaktion:**

![user-defined-functions-01](./assets/user-defined-functions-08.png)

Abb. 19 - Admin Center, Benutzerdefinierte Aktion

Dieses Skript setzt exemplarisch den Feldwert `aiTicketSolution` auf den Skript-Parameter `pAISolution`.

**Hinzufügen des Skripts im Admin Center:**


![user-defined-functions-01](./assets/user-defined-functions-04.png?class=large)

Abb. 20 - Admin Center, Definieren eines Skripts mit gewünschter Aktion

**Hinzufügen der Skript-Parameter:**

Eine präzise Beschreibung der Skript-Parameter, die dem Copiloten bereitgestellt wird, trägt wesentlich zur Verbesserung der generierten Ergebnisse bei.


![user-defined-functions-01](./assets/user-defined-functions-09.png?class=large)

Abb. 21 - Admin Center, Definieren der Skript-Parameter

**2. Benutzerdefinierte Aktion eines Mappentyps dem Copiloten zur Verfügung stellen.**

Diese Skriptparameter sollen nun durch den Copiloten gesetzt werden können. Dafür muss die Aktion als aiRelevant gekennzeichnet werden, indem dem gewünschten Mappentyp eine `Benutzerdefinierte Aktion` hinzugefügt wird.
Hier wird das zuvor definierte Skript ausgewählt und die entsprechenden Eigenschaften gesetzt:

- aiRelevant: boolean, um die Aktion durch den Copiloten an der Mappe ausführbar zu machen
- aiActionDescription: string, Beschreibender Prompt für den AI-Service über die Aktion


![user-defined-functions-01](./assets/user-defined-functions-05.png?class=large)

Abb. 22 - Admin Center, Mappentyp: Hinzufügen einer benutzerdefinierten Aktion


![user-defined-functions-01](./assets/user-defined-functions-06.png?class=large)

Abb. 23 - Admin Center, Benutzerdefinierte Aktion: Setzen der aiRelevant-Eigenschaften

**3. Benutzerdefinierte Aktion verwalten im Admin Center**

Im Admin Center können `aiRelevant`-Aktionen im AI Toolkit verwalten. Hierzu wird der gewünschte Copilot ausgewählt und der Reiter für zusätzliche Einstellungen geöffnet.

Unter "Funktionen" sind die verfügbaren Aktionen aufgeführt. Die benutzerdefinierten Aktionen der ausgewählten Mappentypen erscheinen unter Mappenaktionen.


![user-defined-functions-01](./assets/user-defined-functions-03.png?class=large)

Abb. 24 - Admin Center, Benutzerdefinierte Aktionen aktivieren

Durch die Option "Durch den Copiloten ausführbar" kann festgelegt werden, ob der Copilot die Aktion kennt und deren Ausführung anfragen kann.

**3. Benutzerdefinierte Aktion durch den Copiloten ausführen**

Sobald die Aktion für den Copiloten freigeschaltet wurde, kann die Aktion durch den Copiloten aufgerufen werden. Die Aktion wird im Chatfenster aufgelistet.


![user-defined-functions-01](./assets/user-defined-functions-07.png?class=large)

Abb. 25 - Copilot, Aufruf von benutzerdefinierten Aktionen

Vor dem Ausführen der Aktion wird der Zugriff auf die Aktion angefordert und muss durch den Nutzer bestätigt werden.


## aiRelevant-Gadgetaktion erstellen

Beispiel siehe [Benutzerdefinierte Aktionen am Copiloten](./user-defined-functions.html#gadgetaktion)