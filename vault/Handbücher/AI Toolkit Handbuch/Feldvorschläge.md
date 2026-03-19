---
title: "Feldvorschläge"
source: "https://otris.software/documents/manuals/books/otr-ai/suggestions.html"
---

# Feldvorschläge

**Feldvorschläge** sind eine besondere Darstellungsform *möglicher* Feldwerte, die typischerweise beim Ausfüllen von Mappeninhalten durch eine KI anhand analysierter Dokumente gesetzt werden können.
Feldvorschläge werden nicht automatisch gespeichert. Erst wenn ein Feldvorschlag vom Benutzer aktiv übernommen wird, erfolgt auch die Speicherung des entsprechenden Feldwertes.


![suggestion-field-display-default](./assets/suggestion-field-display-default.png?class=medium)

Abb. 34 - Darstellung von Feldvorschlägen für Mappenfelder

Feldvorschläge können für alle Feldtypen verwendet werden, mit Ausnahme von Felder vom Typ *Referenz*1, *Historie*, *Horizontaler Trenner*, *Benutzerdefiniert*, *Aktenplan*, *Gadget* und *Mappenlink*. Bei Feldern mit diesen Feldtypen sollte in jedem Fall die Feldeinstellung **aiRelevant** auf den Wert **readonly** gesetzt werden (vgl. [Datenstruktur des Mappentypen für die KI beeinflussen](ai-relevant.html)).
Zusätzlich ist zu beachten, dass bei Verwendung des *Invoice-Plugins (Gentabledarstellung für Textfelder)* keine Feldvorschläge erzeugt werden. Felder, mit diesen Einstellungen können zwar von einer KI erkannt und mit entsprechenden Werten belegt werden, sie werden aber nicht als Vorschlag erstellt.

**1Hinweis:** Für **Referenzfelder** werden standardmäßig keine Feldvorschläge erstellt. Die Eigenschaft resolveReferenceSuggestion=true aktiviert eine derzeit noch experimentelle Funktion, die Referenzen sucht und als Vorschläge hinzufügt. Diese Funktion sollte nur verwendet werden, wenn sie für das jeweilige Referenzfeld sinnvoll ist. Die Verarbeitung kann bei großen Datenmengen länger dauern.

Für Feldvorschläge existieren zwei verschiedene **Speichermöglichkeiten**.
Als Benutzereigenschaft oder als globale Eigenschaft:

|  | Feldvorschlag per Copilot | Feldvorschlag per Skripting |
| --- | --- | --- |
| Speicherung als Benutzereigenschaft | ☑ | ☑ |
| Speicherung als globale Eigenschaft |  | ☑ |

Das Speicherverhalten bei mehreren vorliegenden Feldvorschlägen ist in dem Kapitel ["Speicherverhalten von Feldvorschlägen"](suggestions-api.html#speicherverhalten-von-feldvorschl%C3%A4gen) beschrieben.


## Mappenaktionen

Wenn an einer Mappe unbestätigte Feldvorschläge vorhanden sind, erscheinen auf den Feldregistern zwei zusätzliche Aktionsschalter: **Annehmen** und **Ablehnen**.

- Annehmen: Übernimmt alle verbleibenden Feldvorschläge und speichert diese als Feldwerte in der Mappe.
- Ablehnen: Verwirft alle verbleibenden Feldvorschläge, ohne diese zu speichern.

Feldvorschläge, die bereits einzeln als Feldaktion angenommen oder abgelehnt wurden, bleiben von diesen Mappenaktionen unberührt.


![suggestion-fileActions](./assets/suggestion-fileActions.png?class=medium)

Abb. 35 - Mappenaktionen Alle verbleibenden Vorschläge annehmen / ablehnen


## Feldaktionen

Existierende Feldvorschläge können auch einzeln pro Feld angenommen bzw. abgelehnt werden.
Per Klick auf den Vorschlag wird dieser übernommen und automatisch als Feldwert gespeichert. Die automatische Speicherung wird auch im Lesemodus einer Mappe sofort durchgeführt.


![suggestion-field-display-confirm](./assets/suggestion-field-display-confirm.png?class=medium)

Abb. 36 - Feldaktion Vorschlag einzeln annehmen

Per Klick auf das Symbol *x* eines Vorschlags wird dieser automatisch verworfen:


![suggestion-field-display-reject](./assets/suggestion-field-display-reject.png?class=medium)

Abb. 37 - Feldaktion Vorschlag einzeln ablehnen

Existiert zu einem bereits gespeicherten Feldwert ein anderer Vorschlag, wird dies am Mappenfeld besonders dargestellt (besonderes Symbol):


![suggestion-field-display-hint1](./assets/suggestion-field-display-hint1.png?class=medium)

Abb. 38 - Existierender Zusatzhinweis für einen Feldwert

Per Klick auf das Symbol kann der Vorschlag angezeigt werden und jeweils abgelehnt oder angenommen werden:


![suggestion-field-display-hint2](./assets/suggestion-field-display-hint2.png?class=medium)

Abb. 39 - Existierenden Zusatzhinweis für einen Feldwert anzeigen


![suggestion-field-display-hint3](./assets/suggestion-field-display-hint3.png?class=medium)

Abb. 40 - Angezeigter Zusatzhinweis für einen Feldwert

Existierende Zusatzhinweise für einen Feldwert werden bei der Mappenaktion *Alle verbleibenden Vorschläge übernehmen* bzw. bei der Feldaktion *Annehmen* automatisch gespeichert. Dabei werden die zuvor gespeicherten Feldwerte durch den neuen Feldwert überschrieben.


## Feldvorschläge per API erzeugen

Feldvorschläge können auch per API erzeugt werden, siehe dazu auch [Feldvorschläge erzeugen](suggestions-api.html).