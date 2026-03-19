---
title: "API – Überblick"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/api-overview.html"
---

# API – Überblick

Dieses Kapitel gibt einen Überblick über die in der [Gadget-API](../../../../api/gadgets/) enthaltenen Elemente und deren Verwendung.

Grundsätzlich kann ein Gadget jedes Element aus der Gadget-API als Ergebnis zurückliefern, welches eine **.transfer()** Methode besitzt. Das zurückgegebene Element ist das Ergebnis des Gadgets und wird in der DOCUMENTS Oberfläche dargestellt.

Die Eltern-Klasse der verschiedenen Gadget-Typen ist die Klasse [[Gadget API/otris.gadget.gui.Transferable]]

Jeder Gadget-Typ wird über seinen Getter aus dem importierten [[Gadget API/module-gadgetAPI|Gadget API Modul]] instanziiert.


```javascript
const myGadget = gadgetAPI.get___Instance();
```

const myGadget = gadgetAPI.get___Instance();
## Gadget-Typen

Die aktuellen Gadget-Typen sind in der Gadget-API-Dokumentation [[Gadget API/otris.gadget.gui]] zu finden.

- Formulare und GadgetActionButtons - getFormInstance()
Gadgets können Formulare anzeigen und eingegebene Daten über GadgetActionButtons an ein beliebiges Gadget senden.
- HTML-Elemente - getHTMLInstance()
Erstellt ein Gadget-Element, das HTML-Inhalte anzeigen kann.
- Nachrichten und Fehlermeldungen - getMessageInstance(message, messageType)
Objekte der Klasse <otris.gadget.gui.Message> können als Ergebnis eines Gadget-Aufrufs an den Client übertragen werden. Der Inhalt wird dem Benutzer als modales Popup angezeigt. (messageType: info, warn, error)
- Diagramme - getChartInstance()
Erstellt ein Gadget-Element, das Diagramme mit der Chart.js-Bibliothek konfiguriert und darstellt.
- Listen, Tabellen (ScriptListWrapper) - getScriptListWrapperInstance()
Erstellt ein Gadget-Element, das eine ScriptList einbindet und Client-Funktionen hinzufügt.
- Kalender (FullCalendar) - getFullCalendarInstance()
Erstellt ein Kalender-Gadget-Element, basierend auf der FullCalendar-Implementierung (https://fullcalendar.io/).
- generische Tabellen (Gentable) - getGentableInstance()
Erstellt ein Gadget-Element, das eine Gentable-Definition implementiert.
- PropertyGrid - getPropertyGridInstance()
Erstellt ein flexibles Gadget-Formularelement zur Eingabe und Verwaltung von Schlüssel-Wert-Paaren.
- Layout - getLayoutInstance()
Erstellt ein Gadget-Element zur Anordnung und Interaktion beliebiger Gadgets.
- TableData - getTableDataInstance()
Erstellt ein Gadget-Element, das Daten aus externen Datenbankquellen lesen und verarbeiten kann.
- Timeline - getTimelineInstance()
Erstellt eine Zeitleiste mit beliebig vielen Einträgen (Bubbles).
- Wizard - getWizardInstance()
Erstellt einen geführten schrittweisen Dialog.

Einige Klassen, die otris.gadget.gui.Transferable erweitern, wie z.B. **ScriptTree** oder **TreeChart**, werden in dieser Dokumentation nicht näher erläutert, da sie in der Regel nicht wie ein typisches Gadget implementiert werden. Für ScriptTree und TreeChart stehen besondere HowTo's zur Verfügung.

**ACHTUNG:** Die auf dem **Ext JS Framework** der [Firma Sencha Inc.](www.sencha.com) basierenden Komponenten sind **ab documentsOS** nicht mehr Teil der Gadget-API. Die Funktionalität wird mittlerweile durch andere Komponenten der API zur Verfügung gestellt.
Die Klassen `otris.gadget.gui.ExtTable` , `otris.gadget.gui.ExtComponent` , `otris.gadget.gui.BarChart` und `otris.gadget.gui.PieChart` sind als **deprecated** markiert und sollten möglichst zeitnah durch die neuen Klassen ersetzt werden. Um das *Ext JS Framework***in DOCUMENTS 5** aus Kompatibilitätsgründen dennoch zu verwenden, muss in den Documents Einstellungen die Property **extJsLibMode** eingefügt und auf **true** gesetzt werden.