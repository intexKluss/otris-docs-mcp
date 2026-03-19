---
title: "Features"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Debugger/Features.html"
---

# Features


## Script Parameters

You can see the values of script parameters if you add them to the **WATCH** section of the VS Code Debug View (see [Readme](https://gitlab.otris.de/tools/vscode-janus-debug/blob/master/README.md)).


## Require

It is possible to set a breakpoint inside a required script, after the `require` statement was executed:

Example:


```js
context.enableModules();
var script1 = require("script1");
script1.script1Function();
```

context.enableModules();
var script1 = require("script1");
script1.script1Function();- You can step into and through require("script1")and script1Function().
- You can set a breakpoint in script1 after var script1 = require("script1"); was executed.


## Encrypted Scripts

If you have the decrypted sources you can debug encrypted scripts. If you only import an encrypted script, but you do not have the decrypted script, you can also debug the main script.

**Upload and Debug Script** with encrypted scripts only works with DOCUMENTS version 5.0d HF2 and higher and with vscode-janus-debug version 1.0.24.


## Terminating Scripts

Any script in state stop can be terminated by the debugger.


### Terminating all stopped scripts

If you start the debugger using [attach](https://gitlab.otris.de/tools/vscode-janus-debug/wikis/Debugger/Launching#attach-with-using-the-debugger-statement) and there are multiple scripts running on the server, a list of all running scripts is shown. The list contains the entry **<terminate all paused scripts>**. If you choose this entry, all scripts in state pause are terminated.


### Terminating attached script

- Set terminateOnDisconnect: true in the launch configuration of your launch.json.
- Start a script and attach to it
- When you press the disconnect button in debugger and the script is in pause state, the script will be terminated.


### Terminating arbitrary scripts

You can use the debugger to terminate an arbitrary runnig scrpt on your server by combining the flags `breakOnAttach` ([see Attach without using debugger statement](https://gitlab.otris.de/tools/vscode-janus-debug/wikis/Debugger/Launching#attach-without-using-debugger-statement)) with `terminateOnDisconnect` ([see Terminating scripts](https://gitlab.otris.de/tools/vscode-janus-debug/wikis/Debugger/Terminating-scripts)).