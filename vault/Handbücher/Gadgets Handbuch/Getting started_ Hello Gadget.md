---
title: "Getting started: Hello Gadget"
source: "https://otris.software/documents/manuals/books/gadget/introduction/hello-gadget.html"
---

# Getting started: Hello Gadget

In diesem einfachen Beispiel soll Dialogfenster mit einer Meldung geöffnet werden, wenn auf einen öffentlichen Ordner geklickt wird.

Um ein Gadget zu erstellen, muss zunächst der serverseitige Quellcode des Gadgets in einem Portal-Script hinterlegt werden.

**Wichtiger Hinweis:** Der Name eines Portal Skriptes, das als Gadget ausgeführt werden soll, muss immer mit **Gadget** beginnen!

Ein neues Portal-Script kann im **DOCUMENTS Manager** oder im **documentsOS AdminCenter** mit aktivierten **Admin Tools** angelegt werden.
Der vergebene Skriptname wird später benötigt, um das Gadget zu integrieren.

Im Beispiel wird der Skript-Name **GadgetSample_HelloGadget** mit folgendem Quellcode verwendet:


```javascript
/**
 * Example "Hello Gadget"
 * gadgetConfig: {gadgetScript: 'GadgetSample_HelloGadget', gadgetAction: 'show'}
*/

// Enable the required modules and import the gadgetAPI module (not needed for documentsOS)
context.enableModules(); // no longer needed since documentsOS

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "show" and link it to an action function
// The action function defines the gadget's behavior when "show" is triggered
gadgetAPI.registerGadgetAction("show", function () {

    // Initialize an HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();

    // Implement the Gadget's functionality
    htmlGadget.appendHtml("<div>Hello Gadget!</div>");
    htmlGadget.setTitle("Gadget-Title");

    // Return the Gadget instance without calling the transfer() method
    return htmlGadget;
});

// The transfer() method of the gadgetAPI module
context.returnValue = gadgetAPI.transfer();
```

/**
 * Example "Hello Gadget"
 * gadgetConfig: {gadgetScript: 'GadgetSample_HelloGadget', gadgetAction: 'show'}
*/

// Enable the required modules and import the gadgetAPI module (not needed for documentsOS)
context.enableModules(); // no longer needed since documentsOS

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "show" and link it to an action function
// The action function defines the gadget's behavior when "show" is triggered
gadgetAPI.registerGadgetAction("show", function () {

    // Initialize an HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();

    // Implement the Gadget's functionality
    htmlGadget.appendHtml("<div>Hello Gadget!</div>");
    htmlGadget.setTitle("Gadget-Title");

    // Return the Gadget instance without calling the transfer() method
    return htmlGadget;
});

// The transfer() method of the gadgetAPI module
context.returnValue = gadgetAPI.transfer();
Download: [GadgetSample_HelloGadget.js](../assets/samples/GadgetSample_HelloGadget.js)

Dieses Gadget-Skript enthält, neben dem Import der Gadget-API, die Gadget-Aktion *show*. Diese Aktion liefert als Ergebnis ein *HTML-Gadget* zurück und zeigt dieses an.

Das Gadget kann nun am öffentlichen Ordner eingebunden werden, dazu wird der Skript-Name (im Beispiel: *GadgetSample_HelloGadget*) und der Name der Gadget-Aktion (im Beispiel: *show*) benötigt. Diese beiden Angaben bilden zusammen die [Gadget-Konfiguration](../basic-concepts/configuration.html).

Um dem öffentlichen Ordner nun das Gadget zuzuweisen, muss am Ordner unter **Eigenschaften** eine neue Eigenschaft angelegt werden:

- Name der Eigenschaft: gadgetConfig
- Wert der Eigenschaft: {gadgetScript:'GadgetSample_HelloGadget', gadgetAction:'show', gadgetDialog: true}

Wird nun im Web-Client auf den öffentlichen Ordner geklickt, öffnet sich das Dialogfenster mit der entsprechenden Meldung:


![relations_hellogadget.png](../assets/img/introduction/relations_hellogadget.png)

Abb. 2 - Anzeige *Hello Gadget*