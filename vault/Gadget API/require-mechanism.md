---
title: "Require mechanism"
source: "https://otris.software/documents/api/gadgets/require-mechanism.html"
---

# Require mechanism


## Example


```
context.enableModules();

// Require the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// { gadgetScript: 'Gadget_HelloWorld', gadgetAction: 'show' }
gadgetAPI.registerGadgetAction("show", function(gadgetContext) {
    var htmlGadget = gadgetAPI.getHTMLInstance();

    // Implementation of the gadget
    htmlGadget.appendHtml('<h1>Hello, world!</h1>');
    htmlGadget.appendHtml('<code><pre>');
    htmlGadget.appendHtml(JSON.stringify(gadgetContext, null, 2));
    htmlGadget.appendHtml('</pre></code>');

    // Return the gadget instance WITHOUT calling the transfer() method
    return htmlGadget;
});

// Call the transfer method of the gadgetAPI module
return gadgetAPI.transfer();
```