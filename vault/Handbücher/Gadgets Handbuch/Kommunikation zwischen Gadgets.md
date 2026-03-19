---
title: "Kommunikation zwischen Gadgets"
source: "https://otris.software/documents/manuals/books/gadget/basic-concepts/communication.html"
---

# Kommunikation zwischen Gadgets

Wie bereits beschrieben, kann in einer [Gadget-Konfiguration](../basic-concepts/configuration.html) eine GadgetID angegeben werden. Dieser eindeutige Name kann verwendet werden, um ein angezeigtes Gadget eindeutig zu identifizieren.
Wird ein Gadget mit einer Gadget-ID ausgeführt, die bereits von einem anderen Gadget auf der Seite verwendet wird, so wird die Anzeige des bisher angezeigten Gadgets durch die neue ersetzt.
Auf diese Art und Weise kann ein Gadget durch einen Aufruf auch den Inhalt eines anderen Gadgets ersetzen.

Im folgenden Beispiel kann durch Klicken auf die Schaltflächen (grün oder rot) in einem Gadget die Farbe des Quadrats in einem anderen Gadget geändert werden.


![Beispiel zur Kommunikation zwischen Gadgets](../assets/img/doc5_gruen-rot.png)

Abb. 5 - Beispiel zur Kommunikation zwischen Gadgets

Um die dargestellte Anzeige zu erreichen, wurden an einem Mappentyp die Eigenschaft **marginGadgetConfigs** verwendet und folgender Wert angegeben:


```json
[
  {
    gadgetScript: 'GadgetSample_RemoteGadget',
    gadgetAction: 'showRemote'
  },
  {
    gadgetScript: 'GadgetSample_RemoteGadget',
    gadgetAction:'showColorGadget',
    gadgetId: 'colorGadget'
  }
]
```

[
  {
    gadgetScript: 'GadgetSample_RemoteGadget',
    gadgetAction: 'showRemote'
  },
  {
    gadgetScript: 'GadgetSample_RemoteGadget',
    gadgetAction:'showColorGadget',
    gadgetId: 'colorGadget'
  }
]Dabei wird dasselbe Skript *GadgetSample_RemoteGadget* mit zwei unterschiedlichen Aktionen *showRemote* bzw. *showColorGadget* verwendet, bei der zweiten Aktion wird die *gadgetId* zusätzlich angegeben.

**Script:**
In dem Script werden zwei Gadget-Instanzen registriert. Das Form-Gadget wird mit zwei beschrifteten Schaltflächen konfiguriert, die jeweils mit den Attributen *gadgetScript*, *`*gadgetAction* und *gadgetId* die Konfiguration der registrierten HTML-Instanz enthalten.


```javascript
/**
 * Example remote gadget
 * Configuration at a file type:
 * Property name: marginGadgetConfigs
 * Property value:
 * [{   gadgetScript: 'GadgetSample_RemoteGadget' ,
 *      gadgetAction: 'showRemote'  } ,
 *  {   gadgetScript: 'GadgetSample_RemoteGadget' ,
 *      gadgetAction: 'showColorGadget',
 *      gadgetId: 'colorGadget'}]
 */
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// The action "showRemote" defines the gadget's behavior when "showRemote" is triggered
gadgetAPI.registerGadgetAction("showRemote", function () {
    // Configuration for 2 buttons
    const greenConfig = {
        "gadgetAction": 'showColorGadget',
        "gadgetId": 'colorGadget',
        "color": 'green'
    };
    const redConfig = {
        "gadgetAction": 'showColorGadget',
        "gadgetId": 'colorGadget',
        "color": 'red'
    };
    // Initialize a form gadget instance
    const formGadget = gadgetAPI.getFormInstance();
    // Set both action buttons side by side
    formGadget.addGadgetActionButton("buttonGreen",
        context.getLocaleValue("de:Grün;en:Green"), greenConfig);
    formGadget.addGadgetActionButton("buttonRed",
        context.getLocaleValue("de:Rot;en:Red"), redConfig).setInLine(true);
    return formGadget;
});
// The action "showColorGadget" defines the gadget's behavior
// when "showColorGadget" is triggered
gadgetAPI.registerGadgetAction("showColorGadget", function (gadgetContext) {
    // Assign color using the ternary operator (default to green if .color is undefined)
    const color = gadgetContext.gadgetParams.color ? gadgetContext.gadgetParams.color : 'green';
    // Initialize a HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Gadget implementation: add a div with the specified background color
    htmlGadget.appendHtml(
        "<div style='width: 100px; height:100px; background-color: " + color + ";'>");
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();
```

/**
 * Example remote gadget
 * Configuration at a file type:
 * Property name: marginGadgetConfigs
 * Property value:
 * [{   gadgetScript: 'GadgetSample_RemoteGadget' ,
 *      gadgetAction: 'showRemote'  } ,
 *  {   gadgetScript: 'GadgetSample_RemoteGadget' ,
 *      gadgetAction: 'showColorGadget',
 *      gadgetId: 'colorGadget'}]
 */
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// The action "showRemote" defines the gadget's behavior when "showRemote" is triggered
gadgetAPI.registerGadgetAction("showRemote", function () {
    // Configuration for 2 buttons
    const greenConfig = {
        "gadgetAction": 'showColorGadget',
        "gadgetId": 'colorGadget',
        "color": 'green'
    };
    const redConfig = {
        "gadgetAction": 'showColorGadget',
        "gadgetId": 'colorGadget',
        "color": 'red'
    };
    // Initialize a form gadget instance
    const formGadget = gadgetAPI.getFormInstance();
    // Set both action buttons side by side
    formGadget.addGadgetActionButton("buttonGreen",
        context.getLocaleValue("de:Grün;en:Green"), greenConfig);
    formGadget.addGadgetActionButton("buttonRed",
        context.getLocaleValue("de:Rot;en:Red"), redConfig).setInLine(true);
    return formGadget;
});
// The action "showColorGadget" defines the gadget's behavior
// when "showColorGadget" is triggered
gadgetAPI.registerGadgetAction("showColorGadget", function (gadgetContext) {
    // Assign color using the ternary operator (default to green if .color is undefined)
    const color = gadgetContext.gadgetParams.color ? gadgetContext.gadgetParams.color : 'green';
    // Initialize a HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Gadget implementation: add a div with the specified background color
    htmlGadget.appendHtml(
        "<div style='width: 100px; height:100px; background-color: " + color + ";'>");
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();Download: [GadgetSample_RemoteGadget.js](../assets/samples/GadgetSample_RemoteGadget.js)

Die Konfiguration von mehreren Gadgets wird im Kapitel *Integration von Gadgets* erläutert. Wird ein Gadget auf einer Seite ausgeführt, die nur ein einziges Gadget beinhalten kann, so ersetzt jeder neue Gadget-Aufruf das aktuell angezeigte Gadget.