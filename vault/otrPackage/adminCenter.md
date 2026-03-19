---
title: "Paketverwaltung im Admin Center"
source: "https://otris.software/documents/api/otrpackage/adminCenter.html"
---

# Paketverwaltung im Admin Center

Die Paketverwaltung im Admin Center umfasst folgenden Funktionen:

- Liste der Installationsvorgänge: Auflistung aller aiseführten Installationsvorgänge.
- Installation starten: Öffnet den Assistent zum Installieren eines Lösungspaket.
- Versionshistorie: Zeigt die Versionen der installierten Versionen an.


## Liste der Installationsvorgänge

In dieser Liste werden alle Installationsvorgänge mit Informationen darüber, was und wann etwas installiert wurde, aufgeführt. Durch Anklicken eines Eintrags wird der Installationsbericht geöffnet, der weitere Details zum Installationsvorgang anzeigt.


## Installation starten

Die Aktion "Installation starten" öffnet einen Assistenten, der durch die Installation eines Lösungspakets führt. Der Assistent umfasst die folgenden Schritte:

- Paket auswählen: Auswahl und Hochladen des Lösungspakets. In der Regel werden hier ADPs hochgeladen. Es können jedoch auch SPDs und XMLs hochgeladen werden. Deren Installation wird ebenfalls in der Liste der Installationsvorgänge anzeigt.
- Konfigurationsdaten eingeben: Konfigurationen für den Installationsprozess, wenn die im Paket definiert sind. Ansonsten wird der Schritt übersprungen.
- Anzeige des Ausführungsplan: Zeigte die Pakete an, die installiert werden sollen.


Der Assistent führt durch die Installation und startet zum Abschluss die Installation, die nebenläufig im Hintergrund ausgeführt wird.


## Versionshistorie

Die Versionshistorie zeigt alle Pakete mit ihrer jeweiligen Version und Installationszeitpunkt an, die in dem Mandanten installiert sind.