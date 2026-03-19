---
title: "Layout-Gadget"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/layout.html"
---

# Layout-Gadget

Mit dem Layout-Gadget lassen sich mehrere Gadgets in einem Bereich darstellen. Hierzu wird eine Instanz der Klasse [[Gadget API/otris.gadget.gui.Layout]] konfiguriert und als Ergebnis des Gadgets zurückgegeben.


## Wesentliche Merkmale

- In einem Layout-Gadget können unterschiedliche Gadget-Typen verwendet werden.
- Die Anzahl der integrierbaren Gadgets ist dabei nicht begrenzt.
- Die unterschiedlichen Gadgets können miteinander interagieren.
- Somit eignen sich Layout-Gadgets z.B. zur Erstellung von Übersichten oder in Dashboards.


## Allgemeines Beispiel

In diesem Beispiel wird ein einfaches Layout-Gadget konfiguriert, das 4 Gadgets integriert. Dieses kann als Ausgangspunkt für eigene Konfigurationen genutzt werden.
Für die Verwendung des Beispiels wird ein Ordner erstellt und mit der Gadget-Konfiguration als Eigenschaft erweitert, z.B.:
*gadgetConfig={gadgetScript:'GadgetSample_LayoutGadget',gadgetAction:'show'}*

Im einfachsten Fall könnte das Layout-Gadget wie folgt aussehen:


![layoutgadget-1](../assets/img/layoutgadget-1.png)

Abb. 100 - Layout-Gadget, Beispiel

Das verwendete Beispiel-Skript würde für diesen Fall wie folgt aussehen:


```javascript
/**
 * Simple example for a layout gadget
 * gadgetConfig={gadgetScript: "GadgetSample_LayoutGadget", gadgetAction:"show"}
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "show" and link it to an action function
gadgetAPI.registerGadgetAction("show", function() {
    // Import functionality of the library chroma.js with "signalcolor" of the current user
    const signalColor = require("chromaColorTool")("signalcolor");
    // Function to generate a configuration object for a gadget with a specified action and lightness level
    const generateGadgetConfig = (action, lightness) => ({
        gadgetScript: context.scriptName,  // Reference the current script name.
        gadgetId: "id" + util.getUniqueId(),  // Generate a unique ID for the gadget
        gadgetAction: action,  // Associates the 'action' function defined below with the gadget
        bgColor: signalColor.set('hsl.l', lightness).hex()  // Adjust the lightness of the color and convert it to hex
    });
    // Initialize an Layout-Gadget instance
    const layoutGadget = gadgetAPI.getLayoutInstance();
    // Sets the title of the Layout Gadget, but it won't be visible when used in a folder context
    layoutGadget.setTitle("Layout Gadget Example");
    // Generate configurations for 4 gadgets to be placed in different layout positions
    const gadgetConfigs = {
        topLeft: generateGadgetConfig("topLeft", .5),
        topRight: generateGadgetConfig("topRight", .4),
        bottomLeft: generateGadgetConfig("bottomLeft", .3),
        bottomRight: generateGadgetConfig("bottomRight", .2)
    };
    // Add HTML code to define the layout and position the gadgets within it.
    layoutGadget.append(
        '<div class="myLayout--main">',
        '  <div class="myLayout--top">', gadgetConfigs.topLeft, gadgetConfigs.topRight, '</div>',
        '  <div class="myLayout--bottom">', gadgetConfigs.bottomLeft, gadgetConfigs.bottomRight, '</div>',
        '</div>'
    );
    // Add CSS styles to customize the layout (consider using ClientHeaderCode for embedding "static" CSS code)
    layoutGadget.addGadgetStyles(".myLayout--main * { box-sizing: border-box; }");
    layoutGadget.addGadgetStyles(".myLayout--main { height:100%; display:flex; flex-direction:column; border:10px solid #666; box-sizing: border-box; }");
    layoutGadget.addGadgetStyles(".myLayout--main > * { flex:1 }");
    layoutGadget.addGadgetStyles(".myLayout--top, .myLayout--bottom  { display:flex; }");
    layoutGadget.addGadgetStyles(".myLayout--top > *, .myLayout--bottom > * { flex:1; text-align:center; color:#fff; font-size:20px; line-height:5;}");
    // Return the Gadget instance without calling the transfer() method
    return layoutGadget;
});
// Minimal gadget implementation as an html gadget instance:
// Displays the name of the gadgetAction and sets the background color.
const action = function(gadgetContext) {
    const gdgt = gadgetAPI.getHTMLInstance();
    gdgt.setStyle("background-color", gadgetContext.gadgetParams.bgColor);  // Set the background color based on the gadget's parameters
    gdgt.appendHtml(gadgetContext.gadgetAction);  // Display the name of the gadget action
    return gdgt;
};
// Register the 'action' function for different gadget positions within the layout.
gadgetAPI.registerGadgetAction("topLeft", action);
gadgetAPI.registerGadgetAction("topRight", action);
gadgetAPI.registerGadgetAction("bottomLeft", action);
gadgetAPI.registerGadgetAction("bottomRight", action);
// Return the gadget instance
return gadgetAPI.transfer();
```

/**
 * Simple example for a layout gadget
 * gadgetConfig={gadgetScript: "GadgetSample_LayoutGadget", gadgetAction:"show"}
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "show" and link it to an action function
gadgetAPI.registerGadgetAction("show", function() {
    // Import functionality of the library chroma.js with "signalcolor" of the current user
    const signalColor = require("chromaColorTool")("signalcolor");
    // Function to generate a configuration object for a gadget with a specified action and lightness level
    const generateGadgetConfig = (action, lightness) => ({
        gadgetScript: context.scriptName,  // Reference the current script name.
        gadgetId: "id" + util.getUniqueId(),  // Generate a unique ID for the gadget
        gadgetAction: action,  // Associates the 'action' function defined below with the gadget
        bgColor: signalColor.set('hsl.l', lightness).hex()  // Adjust the lightness of the color and convert it to hex
    });
    // Initialize an Layout-Gadget instance
    const layoutGadget = gadgetAPI.getLayoutInstance();
    // Sets the title of the Layout Gadget, but it won't be visible when used in a folder context
    layoutGadget.setTitle("Layout Gadget Example");
    // Generate configurations for 4 gadgets to be placed in different layout positions
    const gadgetConfigs = {
        topLeft: generateGadgetConfig("topLeft", .5),
        topRight: generateGadgetConfig("topRight", .4),
        bottomLeft: generateGadgetConfig("bottomLeft", .3),
        bottomRight: generateGadgetConfig("bottomRight", .2)
    };
    // Add HTML code to define the layout and position the gadgets within it.
    layoutGadget.append(
        '<div class="myLayout--main">',
        '  <div class="myLayout--top">', gadgetConfigs.topLeft, gadgetConfigs.topRight, '</div>',
        '  <div class="myLayout--bottom">', gadgetConfigs.bottomLeft, gadgetConfigs.bottomRight, '</div>',
        '</div>'
    );
    // Add CSS styles to customize the layout (consider using ClientHeaderCode for embedding "static" CSS code)
    layoutGadget.addGadgetStyles(".myLayout--main * { box-sizing: border-box; }");
    layoutGadget.addGadgetStyles(".myLayout--main { height:100%; display:flex; flex-direction:column; border:10px solid #666; box-sizing: border-box; }");
    layoutGadget.addGadgetStyles(".myLayout--main > * { flex:1 }");
    layoutGadget.addGadgetStyles(".myLayout--top, .myLayout--bottom  { display:flex; }");
    layoutGadget.addGadgetStyles(".myLayout--top > *, .myLayout--bottom > * { flex:1; text-align:center; color:#fff; font-size:20px; line-height:5;}");
    // Return the Gadget instance without calling the transfer() method
    return layoutGadget;
});
// Minimal gadget implementation as an html gadget instance:
// Displays the name of the gadgetAction and sets the background color.
const action = function(gadgetContext) {
    const gdgt = gadgetAPI.getHTMLInstance();
    gdgt.setStyle("background-color", gadgetContext.gadgetParams.bgColor);  // Set the background color based on the gadget's parameters
    gdgt.appendHtml(gadgetContext.gadgetAction);  // Display the name of the gadget action
    return gdgt;
};
// Register the 'action' function for different gadget positions within the layout.
gadgetAPI.registerGadgetAction("topLeft", action);
gadgetAPI.registerGadgetAction("topRight", action);
gadgetAPI.registerGadgetAction("bottomLeft", action);
gadgetAPI.registerGadgetAction("bottomRight", action);
// Return the gadget instance
return gadgetAPI.transfer();Download: [GadgetSample_LayoutGadget.js](../assets/samples/GadgetSample_LayoutGadget.js)


### Zusätzliche Hinweise zum Beispiel

- Im Layout-Gadget werden die verschiedenen Gadget-Konfigurationen über HTML-Code angeordnet und zugewiesen, indem layoutGadget.append(*html*) verwendet wird. Für jede dieser angeordneten Gadget-Konfigurationen wird vor dem Aufruf von gadgetAPI.transfer() eine GadgetAction mit einem eindeutigen, einzigartigen Namen registriert.
- Im Beispiel wird zur farblichen Abgrenzung der einzelnen Gadgets eine zusätzliche Bibliothek importiert (chromaColorTool), die Farbeinstellungen abhängig von der Benutzereinstellung zur Signalfarbe (skinSignalColor) verwendet und setzt.
Siehe dazu auch: chromaColorTool - signalcolor
- Zusätzlich wird per addGadgetStyles das Layout per CSS angepasst.
Siehe dazu auch: .addGadgetStyles(lessCode)


## Weiteres Beispiel: relations Mitarbeiter

**Hinweis:** Das nachfolgende Beispiel **unterscheidet sich** zwischen dem **relations Demo-Mandanten für documentsOS und DOCUMENTS 5**. Es enthält zwei Chart-Gadgets, die sich aufgrund der **unterschiedlichen Chart.js-Versionen** in ihrer Konfiguration unterscheiden.


### Einrichtung

Im Beispiel wird ein neuer Ordner angelegt, am Ordner wird eine Gadget-Konfiguration angegeben:

- gadgetConfig={gadgetScript:'GadgetSample_LayoutGadget_relations', gadgetAction:'show'}
- das Gadget-Script wird bereitgestellt

**Das Skript für documentsOS (Chart.js 4.4.x):**

Download: [GadgetSample_LayoutGadget_relations.js](../assets/samples/GadgetSample_LayoutGadget_relations.js)

**Das Skript für DOCUMENTS 5 (Chart.js 2.9.4):**

Download: [GadgetSample_LayoutGadget_relations_D5.js](../assets/samples/GadgetSample_LayoutGadget_relations_D5.js)

Die Unterschiede in den Chart.js-Versionen sind in der [Chart-Gadget-Dokumentation](../gadget-types/diagrams.html) beschrieben.


### Erläuterungen

Bei Klick auf den Ordner wird das Layout-Gadget dargestellt:


![layoutgadget-2](../assets/img/layoutgadget-2.png)

Abb. 101 - Layout-Gadget, Startansicht

Nach der Auswahl eines Mitarbeiters aus der *Auswahlliste* im Form-Gadget (links oben) und Ausführung der Aktion *Aktualisieren* werden Daten angezeigt:

- allgemeine Mitarbeiterdaten im HTML-Gadget (rechts oben)
- ein Pie-Chart im Chart-Gadget (links unten)
- ein Bar-Chart im Chart-Gadget (rechts unten)


![layoutgadget-3](../assets/img/layoutgadget-3.png)

Abb. 102 - Layout-Gadget, Datenansicht