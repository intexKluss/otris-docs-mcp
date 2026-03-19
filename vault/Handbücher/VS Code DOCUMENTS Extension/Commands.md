---
title: "Commands"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Common/Commands.html"
---

# Commands

The complete list of commands is always available via the command palette in VS Code. All commands of the DOCUMENTS Extension start with `DOCUMENTS:`. To see this list press F1 in VS Code and type `documents` into the input field.

This table only contains the main commands.

| Command | Description |
| --- | --- |
| Uploading/Downloading Scripts |  |
| Upload Script(s) | Upload (all selected) script(s) to the server |
| Upload Scripts from Folder | Upload all scripts of (selected) folder(s) and all subfolders to the server |
| Download Script | Download a script from the server |
| Download All Scripts | Download all scripts from the server to a folder |
| Re-Download Scripts in Folder | If you have a folder that only contains a subset of your server scripts, then you can download only this set of scripts again with this command. The command also recursively dives into subfolders. |
| Compare Script | Compare a script to the script with same name on server |
| Executing Scripts |  |
| Run Script | Execute a script on server |
| Upload and Run | Upload a script to the server and execute it |
| Developing Scripts |  |
| Install IntelliSense | Install available Type Definition files and make sure that jsconfig.json or tsconfig.json exists. After executing this command, you will get IntelliSense completions for PortalScripting while editing your PortalScripts. |
| View Documentation | Open the PortalScript API documentation in a browser. If a browser is set in vscode-janus-debug.browser the browser will jump to the documentation of the member or function that is selected by the curser in your editor. |
| DOCUMENTS Server Information |  |
| Connect Server Console | Show all messages of the DOCUMENTS server in terminal |
| Disconnect Server Console | Stop showing server messages in terminal |
| Show DOCUMENTS Version | Show version of the DOCUMENTS server |


## Some Commands more detailed


### Re-Download Scripts in Folder

If you work in a project that contains only a set of all scripts on the server, you might want to only download this set of scripts. So you can call **Re-Download Scripts in Folder** on your project folder. The command then finds all script names in your folder and subfolders and only downloads these scripts again without changing the locations in the file system.


### Example

If you call **Re-Download Scripts in Folder** on folder `src` in the following example. The scripts `portalScript1.js`, `portalScript2.js` and `portalScript3.js` will be downloaded.

![](../img/reload-scripts.png)