---
title: "Remote Gadgets"
source: "https://otris.software/documents/api/gadgets/remote-gadgets.html"
---

# Remote Gadgets

Since DOCUMENTS `5.0g` it is possible to execute a gadget in the context of
another principals on the same server. Prerequisite for this is that
the **multi-principal feature** is configured.

For more details about the **multi-principal feature** see:

- DOPaK 2021: Multi-Solution-Features

To execute a gadget in the context of another principal the name of
the *remote* principal must be added to the **gadgetConfig** with the
attribute `gadgetRemotePrincipal`.


### gadgetConfig Example


```
{
    gadgetScript: 'GadgetSample_RemoteTest',
    gadgetAction: 'show',
    gadgetRemotePrincipal: 'relations'

}
```

Using this **gadgetConfig** for example in the principal `dopaag` means that
the **gadget script** is executed in the context of the `relations` principal.
For this reason the script `GadgetSample_RemoteTest` must be available in
the `relations` principal. The client side rendering of the gadget takes
place in the origin principal `dopaag`.

The following code example illustrates which **special aspects**
have to be considered.


```
// enable require mechanism
context.enableModules();
// use the require mechanism for the gadget api (available since: DOCUMENTS 5.0g)
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// register the gadget action "show"
gadgetAPI.registerGadgetAction("show", function(gadgetContext) {
  // get an instance of "otris.gadget.gui.HTML
  const gadget = gadgetAPI.getHTMLInstance();
  // get the principal name (in this example the name of the "relations" principal)
  const priName = context.getPrincipalAttribute("mnemonic");

  gadget.setTitle('Principal: ' + priName); /* Principal: RELATIONS Demo-Version */
  gadget.appendHtml([
    '<div style="padding:30px;" class="container">',
    '<h1>Principal: ', priName, '</h1>',
    '<code><pre>gadgetSourcePrincipal: ', gadgetContext.gadgetSourcePrincipal, '</pre></code>',
    '<code><pre>gadgetRemotePrincipal: ', gadgetContext.gadgetRemotePrincipal, '</pre></code>',
    '</div>',
  ]);

  gadget.onGadgetLoad(function() {
    // Please note that this function is executed on the client side
    // and in the context of the "source" principal.
    var userContext = documentsContext.getUserContext();
    console.log("principal:", userContext.principal); /* principal: dopaag */

    // The executeScript() and the callGadget() method on the documentsContext
    // given in the client functions of a "remote" gadget do implicit execute
    // in the remote principal "relations".
    documentsContext.executeScript("sample-script");
    documentsContext.callGadget({ gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld' });

    // To call scripts or gadgets in the source principal it is possible to create
    // a new DocumentsContext. This new created context is associated then
    // again "connected" to the source principal "dopaag".
    var dC = documents.sdk.utils.createDocumentsContext();
    dC.executeScript("sample-script");
    dC.callGadget({ gadgetScript: 'GadgetSample_HelloWorld', gadgetAction: 'helloWorld' });
  });

  // Return an gadget instance without calling the transfer method
  return gadget;
});

// call the transfer() method of the gadgetAPI
return gadgetAPI.transfer();
```