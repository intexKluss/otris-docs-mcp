---
title: "Konfiguration &amp; Erweiterung"
source: "https://otris.software/documents/manuals/books/documents-drop/configure-extend.html"
---

# Konfiguration & Erweiterung


## Upload-Mappentypen festlegen

Standardmäßig stehen dem Benutzer alle *erstellbaren* Mappentypen zur Auswahl.
Über die globale Eigenschaft `DropConnectorFiletypes` besteht eine einfache
Möglichkeit, diese Auswahl auf bestimmte Mappentypen zu beschränken.
Die globale Eigenschaft muss dann eine kommaseparierte Liste von Mappentypen
(technische Bezeichner) enthalten.


```javascript
DropConnectorFiletypes = crmContact, crmNote, ftDocument
```

DropConnectorFiletypes = crmContact, crmNote, ftDocument
## Textbausteine erweitern

Um eigene Textbausteine hinzuzufügen steht die Möglichkeit
**Globale Eigenschaften** (*Monitoring > Globale Eigenschaften*) vom
Typ `dropTextTemplate` anzulegen. Der Name der Eigenschaft wird als **Titel**
für den Textbaustein verwendet. Optional besteht die Möglichkeit den Namen
mit dem Prefix `dropTextTemplate_` zu versehen. Das Prefix wird bei der
Anzeige automatisch entfernt und die angelegen Textbausteine lassen sich im
DOCUMENTS Manager so leichter finden.
Im Feld Wert hinterlegt man den **Inhalt** des Textbausteins. Der Inhalt wird
zur Laufzeit als Handlebars-Template interpretiert und man hat so Zugriff
auf die Daten der aktuell ausgewählten Mappe.
Über `{{DlcFile_Title}}` hat man so zum Beispiel Zugriff auf den Mappentitel.

Weitere Informationen zu Handlebars: [https://handlebarsjs.com/](https://handlebarsjs.com/)


![](figures/extend-textsnippets.png)

Abb. 14 - Textbaustein als Globale Eigenschaft


## Icon-Zuordnung anpassen

Die im Bereich **Dokumente** angezeigten Icons können über ein Skript angepasst
werden. Dazu muss ein Skript mit dem Namen `gadgetDropIconMapping` angelegt
werden. In diesem Skript muss dann eine Zuordnung von Dateierweiterungen zu
Icons erzeugt werden. Das folgende Beipiel zeigt wie die Definition
erfolgen muss.


```javascript
// Das Skript muss eine Funktion exportieren die bei
// Ausführung die Zuordnung zurück liefert
module.exports = function() {
   var map = {
    // Diese zuordnung wird als Standard verwendet
    ___DEFAULT___: "mdi:mdi-file-outline",
    pdf: "mdi:mdi-file-pdf-outline;color:#B50000",
    png: "mdi:mdi-file-image-outline",
    // weitere Zuordnungen
  };
  return map;
};
```

// Das Skript muss eine Funktion exportieren die bei
// Ausführung die Zuordnung zurück liefert
module.exports = function() {
   var map = {
    // Diese zuordnung wird als Standard verwendet
    ___DEFAULT___: "mdi:mdi-file-outline",
    pdf: "mdi:mdi-file-pdf-outline;color:#B50000",
    png: "mdi:mdi-file-image-outline",
    // weitere Zuordnungen
  };
  return map;
};