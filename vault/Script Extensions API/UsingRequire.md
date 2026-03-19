---
title: "Using the require function"
source: "https://otris.software/documents/api/scriptextensions/UsingRequire.html"
---

# Using the require function

Since DOCUMENTS `5.0g` it is possible to use the ScriptExtensions with the
`require()` function.

The following namespaces can be referenced via the require mechanism.

- otris.notifications
- otris.scriptlist
- otris.tools
- otris.tour
- otris.tree
- otris.treechart


## Example


```
// Make the require method available in scripting
// details: https://otris.software/documents/api/portalscript/context.html#enableModules
context.enableModules(undefined, 3);

// Use the require mechanism to "import" the otris.tour namespace.
const otrisTour = require("otris.tour");

// Use the API to create a script "response"
const tour = new otrisTour.Tour();
tour.setTourConfiguration({
    defaults: { cancelable: true, disableInteraction: true },
    steps: [{
        title: "Welcome",
        text: "Would you like to receive a short introduction to DOCUMENTS?",
        cancelButton: true
    },
    {
        type: "prep",
        text: "Preparing your tour...",
        openDashboard: true
    },
    {
        text: "Your personal dashboard",
        selector: "dashboard.element:container center"
    },
    {
        text: "Your inbox",
        selector: "dashboard.element:tile_inbox right"
    }]
});
context.returnType = "tour";
return tour.transfer();
```