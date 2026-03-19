---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/gadget/index.html"
---

# Einleitung

Dieses Handbuch beschreibt die Erstellung und Verwendung von **Gadgets**.


## Allgemeines

Gadgets sind eine Erweiterung für DOCUMENTS und bieten die Möglichkeit, individuelle Anwendungen an verschiedenen Stellen in DOCUMENTS zu integrieren.
Außerdem ist es möglich, mehrere Gadgets auf sogenannten *Dashboards* zu platzieren. Dashboards sind Übersichtsseiten, die mehrere Gadgets beinhalten, die vom Benutzer selbst hinzugefügt, sortiert und gelöscht werden können.

Gadgets basieren auf Portal-Skripten. Für die fachliche Funktionalität der Gadgets steht die gesamte [Portal Skript API](../../../api/portalscript/)
zur Verfügung.

Die [Gadget API](../../../api/gadgets/) stellt dabei zahlreiche Gadget-Typen zur Verfügung, um zum Beispiel Formulare, Tabellen, Diagramme und Listen an den verschiedensten Positionen in DOCUMENTS anzuzeigen, z.B.:


![firstSamplesView-3x3.png](./assets/img/introduction/firstSamplesView-3x3.png)

Abb. 1 - Übersicht der Gadget-Typen mit einfachen Beispielen


## Voraussetzungen

Für die Verwendung von Gadgets sind folgende Lizenzen notwendig:

- Portal-Skripting (pem-Flag scripting = 1)
- Gadgets (Plugin-Wert)

Zur Implementierung von Gadgets sind Kenntnisse folgender API's hilfreich:

- Portalscript-API
- Gadget API
- Documents Client SDK
- Script Extensions API