---
title: "Voraussetzungen und Aktivierung"
source: "https://otris.software/documents/manuals/books/otr-ai/requirements.html"
---

# Voraussetzungen und Aktivierung


## Voraussetzungen

Für die Verwendung des AI Toolkit sind folgende Voraussetzungen notwendig:

- Lizenierung:
Die Erweiterung muss lizenziert sein (Lizenzflag skillAI muss in der Lizenz mit einer entsprechenden Anzahl von Benutzern vorhanden sein).
Die Erweiterung kann nur von Benutzern mit named-Benutzerlizenz verwendet werden.
Benutzern, die das AI Toolkit verwenden, muss eine entsprechende Lizenz zugewiesen sein.
- documentsOS-Version: Mindestens documentsOS 6.0.1 oder höher muss verwendet werden
- Internetverbindung / Firewall: Der Documents-Server muss mit dem / den ausgewählten Anbieter(n) kommunizieren können.
- Anbieter: Es muss mindestens ein Anbieter korrekt eingerichtet sein (siehe vorhandene KI-Dienste und Anbieter einrichten).


## Aktivierung


### Allgemeines

Redakteure mit der Berechtigung als "Documents Administrator" haben nach der Anmeldung am Webclient standardmäßig Zugang zum AdminCenter und können die Erweiterung **AI Toolkit** aktivieren. Wurde die Erweiterung aktiviert, können über die Rollenverwaltung Zugriffsprofile und/oder Benutzer angegeben werden, die ebenfalls Vollzugriff auf das AI Toolkit erhalten.


### Aktivierung/Deaktivierung, Berechtigungen

Die AI Toolkit Erweiterung ist im AdminCenter im Ordner *Erweiterungen* aufgeführt. Ist das Toolkit deaktiviert, wird es unter "Inaktive Erweiterungen" aufgeführt und kann über den Button "Aktivieren" freigeschaltet werden.


![admincenter-1](./assets/admincenter-1.png?class=medium)

Abb. 1 - Inaktive Erweiterung

Nach der Aktivierung wird die Erweiterung im AdminCenter unter „Erweiterungen“ angezeigt.
Außerdem wird im AdminCenter der Ordner *AI Toolkit* eingeblendet.


![admincenter-2](./assets/admincenter-2.png?class=medium)

Abb. 2 - Aktive Erweiterung


![admincenter-3](./assets/admincenter-3.png?class=small)

Abb. 3 - Konfigurationsordner AI Toolkit

In der Rollenverwaltung des AdminCenters können optional Zugriffsprofile oder Benutzer festgelegt werden, die ebenfalls Vollzugriff auf das AI Toolkit erhalten. Das AI Toolkit und die damit verbundenen Einstellungen sind dann für die jeweilgen Benutzer ebenfalls sichtbar.


![admincenter-4](./assets/admincenter-4.png?class=large)

Abb. 4 - Rollenverwaltung AI Toolkit

Per Klick auf die entsprechende Rolle (standardmäßig steht eine Rolle admin mit Vollzugriff auf das AI Toolkit bereit) können im Formular optional vorhandene Zugriffsprofile und/oder Benutzer angegeben werden, die Berechtigungen zur Konfiguration erhalten sollen.

Die Konfigurationsmöglichkeiten für **Copiloten**, **Prompts** und **Wissen** sind den jeweiligen Kapitel dieser Dokumentation zu entnehmen.


## Anbieter einrichten

Über das Benutzermenü **Apps und Dienste** kann ein neuer Service hinzugefügt werden.


![admincenter-5](./assets/admincenter-5.png?class=small)

Abb. 5 - Benutzermenü Apps und Dienste


![admincenter-6](./assets/admincenter-6.png?class=medium)

Abb. 6 - Apps und Dienste, Services

Es wird ein Wizard zur Konfiguration des Service gestartet, in dem alle notwendigen Einstellungen vorgenommen werden:

- Serviceauswahl:
Service: Der entsprechende Service ist zu wählen (siehe Unterstützte KI-Dienste)
Alias: Angabe eines Aliases für diesen Service (Pflichtangabe, wenn mehrerer Services desselben Anbieters verwendet werden sollen)
- Serviceeinstellungen:
API-Zugriffstyp: Global: Es wird ein API-Schlüssel angegeben, der für alle Zugriffe gilt, Individuell: Jeder Benutzer muss einen eigenen API-Schlüssel angeben
API-Schlüssel: Der API-Schlüssel beim Anbieter (Nur bei Zugriffstyp Global)
Weitere Einstellungen: Weitere Einstellungen, z.B. zum Endpunkt oder dem Modus sind abhängig vom gewählten Anbieter und entsprechend anzugeben
- Berechtigungen:
Berechtigte Benutzergruppen: Es können optional Benutzergruppen angegeben werden, die den Service verwenden dürfen


## Lizenzzuweisung für Benutzer

Um das AI Toolkit (Copilot und/oder API) nutzen zu können, müssen Benutzer eine Lizenz erhalten. Dies erfolgt durch Aktivieren der Option "KI-Zugang" im Benutzermanagement.


![admincenter-7](./assets/admincenter-7.png?class=medium)

Abb. 7 - Lizenzzuweisung für Benutzer

**Hinweis:** Lösungen mit besonderer Benutzerverwaltung, z.B. **otris legal SUITE** verwalten die Lizenzzuweisung innerhalb der Lösung. Bei korrekter Lizenzzuweisung wird die Benutzereigenschaft *skillAI* gesetzt (1 = aktiv, 0/nicht gesetzt = inaktiv).