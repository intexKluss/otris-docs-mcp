---
title: "Aufbau eines Gadgets"
source: "https://otris.software/documents/manuals/books/gadget/basic-concepts/structure.html"
---

# Aufbau eines Gadgets

Ein Gadget besteht immer mindestens aus einem Gadget-Skript und einer Gadget-Aktion die in diesem Gadget-Skript abgelegt wird.

**Wichtiger Hinweis:** Der Name eines Portal Skriptes, das als Gadget ausgeführt werden soll, muss immer mit **Gadget** beginnen!

Im Folgenden wird der Aufbau eines Gadgets anhand des [Hello Gadget Beispiels](../introduction/hello-gadget.html) erläutert. Das Gadget-Skript beginnt immer mit dem Import der [Gadget-Controller API](../../../../api/gadgets/).


```javascript
// context -> This is the ONE implicit object of the class Context which is named context.
// enableModules() -> defines a function named require() (not needed for documentsOS)
context.enableModules(); // no longer needed since documentsOS

// require -> Function used to load and import modules
// Imported module: gadgetAPI from gadgetAPI.module.gadgetAPI
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
```

// context -> This is the ONE implicit object of the class Context which is named context.
// enableModules() -> defines a function named require() (not needed for documentsOS)
context.enableModules(); // no longer needed since documentsOS

// require -> Function used to load and import modules
// Imported module: gadgetAPI from gadgetAPI.module.gadgetAPI
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");Diese sorgt dafür, dass das Skript als Gadget-Skript ausführbar ist und stellt die Funktionen der Gadget-API bereit.

Die Gadget-Aktion ist eine Portal-Scripting Funktion, die einer bestimmten Struktur folgen muss, damit sie als Gadget-Aktion ausführbar ist.


```javascript
// Property name: gadgetConfig
// Property value: {gadgetScript: 'GadgetSample_HelloGadget', gadgetAction: 'show'}

// Registers a gadget action with the name "show" and associates it with an action function
// The action function defines the gadget's behavior when the "show" action is triggered
gadgetAPI.registerGadgetAction("show", function () {

    // gadgetAPI.getMessageInstance() -> Creates an instance of a message gadget
    const messageGadget = gadgetAPI.getMessageInstance();

    // Small implementation of the gadget
    messageGadget.setMessage("Hello Gadget!");

    // Returns the message gadget instance without calling the transfer() method.
    return messageGadget;
});

// transfer() method of the gadgetAPI module serializes the gadget instance and returns it.
context.returnValue = gadgetAPI.transfer();
```

// Property name: gadgetConfig
// Property value: {gadgetScript: 'GadgetSample_HelloGadget', gadgetAction: 'show'}

// Registers a gadget action with the name "show" and associates it with an action function
// The action function defines the gadget's behavior when the "show" action is triggered
gadgetAPI.registerGadgetAction("show", function () {

    // gadgetAPI.getMessageInstance() -> Creates an instance of a message gadget
    const messageGadget = gadgetAPI.getMessageInstance();

    // Small implementation of the gadget
    messageGadget.setMessage("Hello Gadget!");

    // Returns the message gadget instance without calling the transfer() method.
    return messageGadget;
});

// transfer() method of the gadgetAPI module serializes the gadget instance and returns it.
context.returnValue = gadgetAPI.transfer();Ein Gadget-Skript kann beliebig viele Gadget-Aktionen sowie Hilfsfunktionen beinhalten, die von den Gadget-Aktionen genutzt werden können.