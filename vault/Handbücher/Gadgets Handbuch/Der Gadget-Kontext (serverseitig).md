---
title: "Der Gadget-Kontext (serverseitig)"
source: "https://otris.software/documents/manuals/books/gadget/basic-concepts/gadget-context.html"
---

# Der Gadget-Kontext (serverseitig)

Der Gadget-Kontext ist ein implizites Objekt ([[Documents Drop SDK/global#GadgetContext|GadgetContext]]), das **während der Ausführung eines Gadgets** zur Verfügung steht ([[Gadget API/module-gadgetAPI#.getGadgetContext|module:gadgetAPI.getGadgetContext()]]). Es beinhaltet alle wichtigen Informationen über das ausgeführte Gadget und die Parameter die beim Aufruf übergeben wurden.


## Kontext-Informationen

Informationen zum Gadget selbst und dem Kontext in dem es ausgeführt wurde, sind direkt im [[Client SDK/documents.sdk.GadgetContext|gadgetContext]] abrufbar. Die wichtigsten Informationen sind:

| Eigenschaft | Beschreibung |
| --- | --- |
| gadgetContext.gadgetId | Die Gadget-ID des aktuellen Gadgets |
| gadgetContext.gadgetScript | Das Gadget-Skript des aktuellen Gadgets |
| gadgetContext.gadgetAction | Die Gadget-Aktion des aktuellen Gadgets |
| gadgetContext.folderId | Die ID des Ordners in dem das Gadget ausgeführt wird |
| gadgetContext.fileId | Die ID der Mappe in dem das Gadget ausgeführt wird |
| gadgetContext.registerId | Die ID des Registers in dem das Gadget ausgeführt wird. |
| gadgetContext.fieldName | Der technische Name des Feldes an dem das Gadget ausgeführt wird. |


## Gadget Parameter

Gadget-Parameter sind Parameter, die direkt beim Aufruf des Gadgets über die Gadget-Konfiguration übergeben wurden. Diese sind über das Objekt **gadgetContext.gadgetParams** abrufbar. Wird bei der Gadget-Konfiguration z.B. ein Parameter **name** übergeben, so kann dieser wie folgt abgerufen werden:


```javascript
util.out(gadgetContext.gadgetParams.name);
```

util.out(gadgetContext.gadgetParams.name);
## Formular Parameter

Wenn ein Gadget ein Formular enthält, werden die Parameter des Formulars beim Betätigen eines Action-Buttons in diesem Formular an das aufgerufene Gadget weitergegeben. Enthält das Formular z.B. ein Feld *company*, so kann der Wert des Feldes wie folgt abgerufen werden:


```javascript
util.out(gadgetContext.formParams.company);
```

util.out(gadgetContext.formParams.company);