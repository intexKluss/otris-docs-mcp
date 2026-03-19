---
title: "Nachrichten und Fehlermeldungen"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/messages.html"
---

# Nachrichten und Fehlermeldungen

Gadgets können Nachrichten und Fehlermeldungen anzeigen. Hierzu wird die Klasse [[Gadget API/otris.gadget.gui.Message]] als Ergebnis des Gadgets zurückgegeben.


## Wesentliche Merkmale

- Nachrichten werden dem Benutzer als modales Popup angezeigt.
- Neben der eigentlichen Nachricht kann ein Nachrichtentyp angegeben werden, folgende Nachrichtentypen werden unterstützt:
error: Fehlermeldung
warn: Warnung
info: Beliebige Information (Standard, wenn kein Nachrichtentyp angegeben wurde)
- In den Instanzen der Gadget-Typen "Wizard" und "Message" werden die Methoden .addContainerButton() und .setContainerButtons() funktional ignoriert. (Eingebettete Gadget-Typen, wie Form-Gadgets oder HTML-Gadgets, funktionieren unabhängig und sind nicht beschränkt.)


## Allgemeines Beispiel

Das Gadget stellt beispielhaft in einem Form-Gadget 3 Button zur Verfügung, die mit dem Klick eine Nachricht des jeweiligen Message-Gadget-Typen generieren.

| Abb. 80 - Schaltflächen auf der Seitenleiste von Mappen | Abb. 81 - Beispiel-Dialog mit Nachrichtentyp Warnung |
| --- | --- |


### Integration des Beispiels

Das Beispiel wird [in der Seitenleiste eines Mappentyps](../integration/integration-filetype.html#integration-von-gadgets-in-der-seitenleiste) mit dem `GadgetSample_Message_Button`-Skript registriert. Das `GadgetSample_Message_Gadget`-Skript muss dem Mandanten zur Verfügung stehen.

Eigenschaft **marginGadgetConfigs** mit folgendem
Wert: **[ { gadgetScript: 'GadgetSample_Message_Button', gadgetAction: 'showMessageButton' } ]**


### Skripte des Beispiels

Es werden zwei Gadget-Skripte verwendet bzw. benötigt:

- GadgetSample_Message_Button
Form-Gadget, welches die Schaltflächen darstellt und im Beispiel per marginGadgetConfigs bereitgestellt wird
- GadgetSample_Message_Gadget
Message-Gadget, welches die Nachricht generiert, dieses Skript wird aus dem Skript GadgetSample_Message_Button aufgerufen, wenn die Schaltfläche betätigt wird

**GadgetSample_Message_Button**


```javascript
/**
 * Simple example to generate buttons with a form gadget and gadget action buttons
 * Configured as marginGadgetConfigs at a file type
 * marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Message_Button', gadgetAction: 'showMessageButton'}]
 * Uses a gadgetConfig for addGadgetActionButton in which another gadget script is called which is also required (GadgetSample_Message_Gadget)
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action
gadgetAPI.registerGadgetAction("showMessageButton", function () {
    // Initialize as a Form-Gadget instance
    const formGadget = gadgetAPI.getFormInstance();
    // Configuration for 3 buttons
    const infoConfig = {
        "gadgetScript": 'GadgetSample_Message_Gadget',
        "gadgetAction": 'showMessageGadget',
        "gadgetId": 'messageGadget',
        "message_message": context.getLocaleValue("de:Die Schaltfläche INFO wurde geklickt!;en:The INFO button has been clicked!"),
        "message_type": 'info'
    };
    const errorConfig = {
        "gadgetScript": 'GadgetSample_Message_Gadget',
        "gadgetAction": 'showMessageGadget',
        "gadgetId": 'messageGadget',
        "message_message": context.getLocaleValue("de:Die Schaltfläche ERROR wurde geklickt!;en:The ERROR button has been clicked!"),
        "message_type": 'error'
    };
    const warnConfig = {
        "gadgetScript": 'GadgetSample_Message_Gadget',
        "gadgetAction": 'showMessageGadget',
        "gadgetId": 'messageGadget',
        "message_message": context.getLocaleValue("de:Die Schaltfläche WARNUNG wurde geklickt!;en:The WARNING button has been clicked!"),
        "message_type": 'warn'
    };
    // Add 3 ActionButtons
    formGadget.addGadgetActionButton("buttonINFO", context.getLocaleValue("de:INFO-Schaltfläche;en:INFO button"), infoConfig);
    formGadget.addGadgetActionButton("buttonERROR", context.getLocaleValue("de:ERROR-Schaltfläche;en:ERROR button"), errorConfig);
    formGadget.addGadgetActionButton("buttonWARN", context.getLocaleValue("de:WARNUNG-Schaltfläche;en: WARNING button"), warnConfig);
    // Return the Gadget instance without calling the transfer() method
    return formGadget;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple example to generate buttons with a form gadget and gadget action buttons
 * Configured as marginGadgetConfigs at a file type
 * marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Message_Button', gadgetAction: 'showMessageButton'}]
 * Uses a gadgetConfig for addGadgetActionButton in which another gadget script is called which is also required (GadgetSample_Message_Gadget)
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action
gadgetAPI.registerGadgetAction("showMessageButton", function () {
    // Initialize as a Form-Gadget instance
    const formGadget = gadgetAPI.getFormInstance();
    // Configuration for 3 buttons
    const infoConfig = {
        "gadgetScript": 'GadgetSample_Message_Gadget',
        "gadgetAction": 'showMessageGadget',
        "gadgetId": 'messageGadget',
        "message_message": context.getLocaleValue("de:Die Schaltfläche INFO wurde geklickt!;en:The INFO button has been clicked!"),
        "message_type": 'info'
    };
    const errorConfig = {
        "gadgetScript": 'GadgetSample_Message_Gadget',
        "gadgetAction": 'showMessageGadget',
        "gadgetId": 'messageGadget',
        "message_message": context.getLocaleValue("de:Die Schaltfläche ERROR wurde geklickt!;en:The ERROR button has been clicked!"),
        "message_type": 'error'
    };
    const warnConfig = {
        "gadgetScript": 'GadgetSample_Message_Gadget',
        "gadgetAction": 'showMessageGadget',
        "gadgetId": 'messageGadget',
        "message_message": context.getLocaleValue("de:Die Schaltfläche WARNUNG wurde geklickt!;en:The WARNING button has been clicked!"),
        "message_type": 'warn'
    };
    // Add 3 ActionButtons
    formGadget.addGadgetActionButton("buttonINFO", context.getLocaleValue("de:INFO-Schaltfläche;en:INFO button"), infoConfig);
    formGadget.addGadgetActionButton("buttonERROR", context.getLocaleValue("de:ERROR-Schaltfläche;en:ERROR button"), errorConfig);
    formGadget.addGadgetActionButton("buttonWARN", context.getLocaleValue("de:WARNUNG-Schaltfläche;en: WARNING button"), warnConfig);
    // Return the Gadget instance without calling the transfer() method
    return formGadget;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();Download: [GadgetSample_Message_Button.js](../assets/samples/GadgetSample_Message_Button.js)

**GadgetSample_Message_Gadget**


```javascript
/**
 * Simple example for generate a message gadget
 * Script is called from the GadgetSample_Message_Button script
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Regsister the gadget action
gadgetAPI.registerGadgetAction("showMessageGadget", function (gadgetContext) {
    // Initialize as a Message-Gadget instance
    const messageGadget = gadgetAPI.getMessageInstance();
    // Get the message type and the message from the gadgetContext
    const message_message = gadgetContext.gadgetParams.message_message;
    const message_type = gadgetContext.gadgetParams.message_type;
    // Set the message and the type (new setter since Documents 5i HF3)
    messageGadget.setMessage(message_message);
    messageGadget.setMessageType(message_type);
    // Return the Gadget instance without calling the transfer() method
    return messageGadget;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple example for generate a message gadget
 * Script is called from the GadgetSample_Message_Button script
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Regsister the gadget action
gadgetAPI.registerGadgetAction("showMessageGadget", function (gadgetContext) {
    // Initialize as a Message-Gadget instance
    const messageGadget = gadgetAPI.getMessageInstance();
    // Get the message type and the message from the gadgetContext
    const message_message = gadgetContext.gadgetParams.message_message;
    const message_type = gadgetContext.gadgetParams.message_type;
    // Set the message and the type (new setter since Documents 5i HF3)
    messageGadget.setMessage(message_message);
    messageGadget.setMessageType(message_type);
    // Return the Gadget instance without calling the transfer() method
    return messageGadget;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();
Download: [GadgetSample_Message_Gadget.js](../assets/samples/GadgetSample_Message_Gadget.js)