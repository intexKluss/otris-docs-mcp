---
title: "Gadget API"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Debugger/Gadget-API.html"
---

# Gadget API

Some hints about debugging scripts that are using the Gadget-API.


## Executed Code in Web-Browser

You should be aware of which code is executed on DOCUMENTS Server and which is executed in Web-Browser.


## eval()

The Gadget API uses `eval()` in some cases (also see section `eval()` in Troubleshooting).

So e.g., if you want to debug a script that imports `Gadget_API_Controller`, you should place the `debugger;` statement in the first line. After attaching, you can set breakpoints in all places that are executed on DOCUMENTS Server.


```js
debugger;
// #import "Gadget_API_Controller"

function myGadgetAction()
{
    this.execute = function()
    {
        // ...
    }
}
```

debugger;
// #import "Gadget_API_Controller"

function myGadgetAction()
{
    this.execute = function()
    {
        // ...
    }
}