---
title: "Getting started: Copilot"
source: "https://otris.software/documents/manuals/books/otr-ai/getting-started-copilot.html"
---

# Getting started: Copilot

Ein Copilot ist ein Chat (vergleichbar mit ChatGPT), der an beliebig viele Mappentypen geknüpft werden kann und direkt von einer entsprechenden Mappe geöffnet werden kann.

Nachfolgend wird kurz erläutert, wie man nach der Aktivierung der Erweiterung *AI Toolkit* und der Beachtung der Voraussetzungen,
siehe [Voraussetzungen und Aktivierung](requirements.html),
einen ersten Copiloten erstellt und konfiguriert.


## Konfiguration eines benutzerdefinierten Copiloten


### Copilot anlegen

Über den Ordner **Copiloten** können alle benutzerdefinierten Copiloten eingesehen und verwaltet werden.


![getting-started-copilot-1](./assets/getting-started-copilot-1.png?class=small)

Abb. 8 - Konfigurationsordner Copiloten

In der Übersicht werden die vorhandenen Copiloten mit den wichtigsten Einstellungen dargestellt.


![getting-started-copilot-2](./assets/getting-started-copilot-2.png?class=medium)

Abb. 9 - Übersicht Copiloten

Außerdem stehen die notwendigen Aktionen zum Erstellen bzw. zum Löschen zuvor markierter Einträge (Aktionsklappliste) bereit.
Ein bereits vorhandener Copilot kann per Klick auf einen Listeneintrag bearbeitet werden.

Nach dem Klick auf "+ Erstellen" öffnet sich eine Maske zur Konfiguration des Copiloten.
Im nachfolgenden Beispiel wird ein Copilot für den Mappentypen *aiTicket* dargestellt. Eine genauere Erläuterung der verschiedenen Parameter ist im Abschnitt [AI Toolkit konfigurieren](./admincenter.html) zu finden.


![copilot-started-copilot-3](./assets/copilot-general.png?class=large)

Abb. 10 - Formular Copilot bearbeiten (Allgemein)

Die voreingestellten Werte auf dem Register *Einstellungen* können beibehalten werden. Eine genauere Erläuterung der verschiedenen Parameter ist im Abschnitt [AI Toolkit konfigurieren](./admincenter.html#allgemeine-einstellungen) zu finden.
Das Anlegen und Hinzufügen von Wissenssammlungen ist im Kapitel ["Wissenssammlungen verwenden"](./vector-index.html) beschrieben.


### AI-Konfiguration bearbeiten

Beim Erstellen und Speichern eines neuen Copiloten wird diesem automatisch eine neue **AI-Konfiguration** zugeordnet. In ihr sind alle Einstellungen zum verwendeten KI-Anbieter gebündelt. Über den Ordner "AI-Konfigurationen" können sämtliche benutzerdefinierten Konfigurationen eingesehen und verwaltet werden.


![aiconfig-0](./assets/aiconfig-0.png?class=small)

Abb. 11 - AI-Konfiguration

Als Minimaleinstellung muss ein Service ausgewählt werden. Werden keine weiteren Werte (z.B. das Sprachmodell) festgelegt, nutzt der Service seine Standardeinstellungen. Weitere Konfigurationsmöglichkeiten sind im Unterkapitel ["AI-Konfiguration"](./admincenter.html#ai-konfigurationen) aufgeführt.


![getting-started-copilot-8](./assets/getting-started-copilot-8.png?class=large)

Abb. 12 - AI-Konfiguration bearbeiten


## Verwendung des Copiloten Chats

Der Copilot ist nun eingerichtet und kann auf dem gewählten Mappentypen per Klick auf die Aktion gestartet werden.


![getting-started-copilot-4](./assets/getting-started-copilot-4.png?class=medium)

Abb. 13 - Copilot-Aktion am Mappentypen


### Chatfenster

Nachrichten an den Copiloten können über das Eingabefeld gesendet werden.


![getting-started-copilot-5](./assets/getting-started-copilot-5.png?class=medium)

Abb. 14 - Chatfenster


### Websuche

Bei Auswahl der **Responses API** in der **AI-Konfiguration** kann die Websuche aktiviert werden. Damit ist der Copilot in der Lage, während des Chats auf aktuelle Informationen aus dem Internet zuzugreifen, um präzisere, kontextbezogene und aktuelle Antworten zu liefern. Die Aktivierung und die verfügbaren Einstellungen der Websuche sind im Unterkapitel ["Websuche"](./responses-api.html#websuche) beschrieben.

Im folgenden Beispiel wird die Nutzung der Websuche innerhalb des Chats demonstriert:


![getting-started-copilot-9](./assets/getting-started-copilot-9.png?class=large)

Abb. 15 - Websuche im Chat


### Reasoning

In der **AI-Konfiguration** lässt sich für die **Responses API** auch die Reasoning-Funktion aktivieren. Sie ermöglicht dem Copiloten, auf Basis der bereitgestellten Daten mehrstufige Schlussfolgerungen zu ziehen und logisch fundierte Antworten zu generieren. Weitere Informationen zu Aktivierung und Einstellungen stehen im Unterkapitel ["Reasoning"](./responses-api.html#reasoning).

Das folgende Beispiel zeigt, wie Reasoning im Chat genutzt werden kann:


![getting-started-copilot-10](./assets/getting-started-copilot-10.png?class=large)

Abb. 16 - Reasoning im Chat


### Datenzugriff

Das neu geöffnete Chat-Fenster zeigt eine Übersicht der verfügbaren Daten, die dem Copiloten für die Bearbeitung von Mappenaufgaben bereitgestellt werden können.
Ausgewählte Daten werden farbig markiert (hier die Feldwerte).

Über das Plus-Symbol neben dem Eingabefeld können die übermittelten Daten jederzeit erweitert werden.


![getting-started-copilot-6](./assets/getting-started-copilot-6.png?class=medium)

Abb. 17 - Auswahl weiterer Daten

Wenn eine Datei nicht vom Nutzer an den Copiloten übermittelt wurde, kann der Copilot basierend auf dem Kontext erkennen, dass eine bestimmte Anlage zur Erfüllung seiner Aufgabe erforderlich ist. In diesem Fall fordert der Copilot den benötigten Datenzugriff nachträglich an.


![getting-started-copilot-7](./assets/getting-started-copilot-7.png?class=large)

Abb. 18 - Anforderung Datenzugriff


### Weitere Informationen

Der Copilot kann mit diversen Optionen weiter konfiguriert werden. Darüber hinaus bietet der Copilot zusätzliche Funktionen, wie Prompts, Wissen, benutzerdefinierte Funktionen u.v.m., auf die in den weiteren Kapiteln dieses Handbuchs eingegangen wird.