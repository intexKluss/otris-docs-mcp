---
title: "Troubleshooting"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Debugger/Troubleshooting.html"
---

# Troubleshooting

This page contains an overview about some known problems and how to manage them.

Please also have a look at the [Debugger Issues](https://gitlab.otris.de/tools/vscode-janus-debug/issues?label_name%5B%5D=debugger)


## Commands

This list shows the state of the debugging commands

| Command | Notes |
| --- | --- |
| Step-Over |  |
| Step-In | In arrow functions many steps required. It's faster setting a Breakpoint into the arrow function. |
| Continue |  |
| Breakpoints | In required scripts only after require() statement was executed |
| Step-Out | behaves like Continue (Workaround: Breakpoint and Continue) |


## Common Hints

- If the debugger cannot find matching sources in your file system, there are two cases
if the file is not found, it jumps to the first line of the attached/launched script
if the file is found but the line doesn't match, the debugger arrow remains in the latest matched line and the debugger shows the currently executed code lines from server
- If you do not need jobs, disable them (set $NoJobs 1 in documents.ini). Debugging a script is always simpler if only that one script is running.
- When sources don't match, in most cases simply using Breakpoints and Continue will help.


## eval()

If you use `eval()` in a script and try to debug this script, the debugger might have problems to find the sources on server, because sometimes it only finds the source from the `eval` statement.
**Workaround:**
Make sure, that you attach the script before any `eval()` was executed. Meaning, use **Upload and Debug Script** or with **Attach** simply set the `debugger;` statement before the first `eval` statement.


## Workspaces

The debugger doesn't work with multiple workspaces yet.


## Problems creating launch.json

You have the extension installed and hit F5 or toggle the little gear icon in the Debug pane but you still won't get a `launch.json` that contains the `"type": "janus"` property? This is intended by the VS Code authors. Try to close all open text documents (especially for JavaScript files) and try again.


## Logging

You'll find the log files in your `${workspaceRoot}` which is usually the folder you opened in VS Code. The log files are plain-text files so that you can inspect them yourself. We do not log password hashes but the log files might contain source code or other data that you may consider sensitive. Please make sure that you are fine with the data contained in the log file before submitting.

You can alter log behavior in the `.vscode/launch.json` file.


```json
"log": {
    "fileName": "${workspaceRoot}/vscode-janus-debug-launch.log",
    "logLevel": {
        "default": "Debug",
    }
}
```

"log": {
    "fileName": "${workspaceRoot}/vscode-janus-debug-launch.log",
    "logLevel": {
        "default": "Debug",
    }
}The default log level can be any of `Debug`, `Info`, `Warn`, or `Error`.


## Break on Exception

Not supported.

[See Issue](https://gitlab.otris.de/tools/vscode-janus-debug/issues/160)


## Fixing the Launch-Request in launch.json: Start debugging with "F5" or via the play icon in the debugger panel

The previous version of the extension created an invalid launch request under certain circumstances.The `script`-property in the launch-request is empty or contains the script name of the `main`-property, which is declared in your package.json of your project.

Anyway, most of the time when you hit `F5` or start the debugger via the play icon in the debug panel (see screenshot below), you probably want to debug the current opened script (like it's the default behaviour if you start debugging a node.js script, see screenshot below for more details).
![image](uploads/9f51ee60932921d54e1894cb83fb6cc0/image.png)


To be able to start debugging the current active script when you hit `F5` (or use the play icon), replace the value of the property `script` in your launch.json of the launch request as shown below:


```json
{
            "name": "Launch Script on Server",
            "request": "launch",
            "type": "janus",
            "script": "${file}"
}
```

 {
            "name": "Launch Script on Server",
            "request": "launch",
            "type": "janus",
            "script": "${file}"
}The expression `${file}` will cause vs code to replace the expression on runtime with the path to the current opened script when the debugger was startet. With that change, you can start debugging the current opened script in the same way as with the command `Upload and debug script` which is available in the context menu when you right click a javascript file.