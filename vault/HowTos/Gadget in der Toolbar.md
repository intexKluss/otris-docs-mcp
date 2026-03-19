---
title: "Wie bekomme ich ein Gadget in die Toolbar?"
source: "https://otris.software/documents/howto/toolbar-settings/toolbarGadget.html"
---

# Wie bekomme ich ein Gadget in die Toolbar?

In Documents ist es möglich neue Hauptfunktionen als Gadget der Toolbar hinzuzufügen. Dies existiert seit Version **2030** und wird als *globale Eigenschaft* angelegt. Das Verhalten ist analog zum Feature *globalScript*.


### Beispiel Skriptbäume über ein Gadget laden:


Abb. 1 - Toolbar mit Gadget

Erreicht wird dies durch die globale Eigenschaft:


```javascript
globalGadgetConfig =
{
    gadgetScript: 'Gadget_TreeExample_Dialog',
    gadgetAction: 'initGadget',
    gadgetIcon:'entypo:flow-tree;color:gold',
    gadgetDialog: true, tooltip: 'Please select a tree',
    gadgetWidth: 400,
    gadgetHeight: 200
}
```

globalGadgetConfig =
{
    gadgetScript: 'Gadget_TreeExample_Dialog',
    gadgetAction: 'initGadget',
    gadgetIcon:'entypo:flow-tree;color:gold',
    gadgetDialog: true, tooltip: 'Please select a tree',
    gadgetWidth: 400,
    gadgetHeight: 200
}**Dabei ist zu beachten:**

- Es gibt nur ein Gadget in der oberen Toolbar
- Man kann eine Standard GadgetConfig benutzen, inkl. Icon, Tooltip, Höhe und Breite
- Es öffnet sich immer ein Gadget-Dialog


Abb. 2 - Darstellung in DOCUMENTS 5

In diesem Beispiel öffnet sich ein Gadget in dem über eine Klappliste ein ScriptTree gewählt werden kann, welcher nach Auswahl angezeigt wird. Erreicht wird dies z.B. über das Ausführen eines Portal-Skriptes über die Standard-Client-API.


```javascript
gadgetForm.onGadgetLoad(function() {
    documentsContext.executeScript("TreeExample_nodeFilesTree", myParams);
    documentsContext.closeGadget();
});
```

gadgetForm.onGadgetLoad(function() {
    documentsContext.executeScript("TreeExample_nodeFilesTree", myParams);
    documentsContext.closeGadget();
});Ausführliche Programmierbeispiele und Hilfen zur Implementierung von Gadgets entnehmen Sie bitte der Gadget-Dokumentation und besuchen Sie unsere Schulung zu diesem Thema ;-).