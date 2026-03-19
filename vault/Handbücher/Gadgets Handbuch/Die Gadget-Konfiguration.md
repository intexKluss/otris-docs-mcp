---
title: "Die Gadget-Konfiguration"
source: "https://otris.software/documents/manuals/books/gadget/basic-concepts/configuration.html"
---

# Die Gadget-Konfiguration

Im Gadget-Umfeld wird der Aufruf eines Gadgets durch eine Gadget-Konfiguration definiert. Diese Konfiguration stellt sicher, dass das gewünschte Gadget mit den richtigen Parametern ausgeführt wird. Eine Gadget-Konfiguration besteht aus den folgenden Parametern:


## gadgetConfig-Parameter

Die Konfiguration wird stets als JSON-Objekt definiert.

**gadgetConfig: { "gadgetScript": "<script>", "gadgetAction": "<gadget-action>", ... }**


### gadgetScript (erforderlich)

`"gadgetScript": "<script>"`
Der Name des Portal-Skripts, das die aufzurufende Gadget-Aktion (*gadgetAction*) enthält.
**Konvention:** Der Name muss mit "Gadget" beginnen.


### gadgetAction (erforderlich)

`"gadgetAction": "<gadget-action>"`
Der Name der auszuführenden Gadget-Aktion.


### gadgetDestination (optional)

Bestimmt die Position, an der das Gadget angezeigt werden soll. Mögliche Werte:

- "gadgetDestination": "file" – Anzeige in der Mappenansicht
- "gadgetDestination": "folder" – Anzeige in der Hauptansicht
Ohne aktive Mappenansicht steht folder der gesamte Bereich des Webclients zur Verfügung, sonst nur der linke Bereich.
- "gadgetDestination": "dialog" – Anzeige als Dialog


![relations_gadgetDestination.png](../assets/img/integration/relations_gadgetDestination.png)

Abb. 3 - gadgetDestination Bereiche


### gadgetId (optional)

Ein eindeutiger Bezeichner für das Gadget. Falls dieser Parameter weggelassen wird, wird automatisch ein Wert generiert. Wenn später auf das Gadget zugegriffen werden soll (z. B. für die Kommunikation mit anderen Gadgets), sollte ein fester Name vergeben werden.


### gadgetWidth (optional)

`"gadgetWidth": 700`
Die bevorzugte Breite des Gadgets in Pixeln. Der Wert darf **nicht in Anführungszeichen** stehen und wirkt sich **nur auf Gadgets** aus, die **in einem Dialog** angezeigt werden.


### gadgetHeight (optional)

`"gadgetHeight": 700`
Die bevorzugte Höhe des Gadgets in Pixeln. Der Wert darf **nicht in Anführungszeichen** stehen und wirkt sich **nur auf Gadgets** aus, die **in einem Dialog** angezeigt werden.


### gadgetDialog (optional)

Legt fest, ob das Gadget in einem Dialog angezeigt wird. Mögliche Werte: `true` oder `false`.


### gadgetIcon (optional, beschränkt)

Dieser Parameter kann nur in Verbindung mit **menubarGadgetsConfigs** und **globalGadgetConfig** verwendet werden.

`"gadgetIcon": "mdi:mdi-calendar-clock;top:-2px;font-size: 29px;"`

Definiert das Icon für das Gadget. CSS-Eigenschaften können gesetzt werden.

Informationen zur Icon-Auswahl: [Liste der Icons](../../../howto/design/icons.md#liste-der-icons)


### tooltip (optional, beschränkt)

Dieser Parameter kann nur in Verbindung mit **menubarGadgetsConfigs** und **globalGadgetConfig** verwendet werden.

Definiert den Tooltip für das *gadgetIcon*.


## Weitere Parameter

Alle weiteren Eigenschaften der Gadget-Konfiguration werden automatisch als Parameter an das Gadget weitergeleitet. Die Konfiguration wird stets als JSON-Objekt definiert.