---
title: "Commands"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/common/commands.html"
---

# Commands

The complete list of commands is always available via the command palette in VS Code. All commands of the documentsOS extension start with `documentsOS:`. To see this list press F1 in VS Code and type `documents` into the input field.

The following table describes some important commands.

| Command | Description |
| --- | --- |
| Uploading/Downloading Scripts |  |
| Upload Scripts/Folders | Upload all selected scripts or scripts from selected folders to the server |
| Download Scripts ... | Download scripts from the server to the selcted folder |
| Update local Scripts/Folders | If you have a folder that only contains a subset of your server scripts, then you can download only this set of scripts again with this command. The command also recursively dives into subfolders. |
| Compare Active Script | Compares the active script to the script with same name on the server |
| Executing Scripts |  |
| Run Script | Execute a script on server |
| Upload and Run | Upload a script to the server and execute it |
| Developing Scripts |  |
| Install IntelliSense | Install available Type Definition files and make sure that jsconfig.json or tsconfig.json exists. After executing this command, you will get IntelliSense completions for PortalScripting while editing your PortalScripts. |
| View Documentation | Open the PortalScript API documentation in a browser. If a browser is set in vscode-janus-debug.browser the browser will jump to the documentation of the member or function that is selected by the curser in your editor. |
| DOCUMENTS Server Information |  |
| Connect Server Console | Show all messages of the documentsOS server in terminal |
| Disconnect Server Console | Stop showing server messages in terminal |
| Show DOCUMENTS Version | Show version of the documentsOS server |


## Update local Scripts/Folders

If you work in a project that contains only a set of all scripts on the server, you might want to only download this set of scripts. So you can call **Update local Scripts/Folders** on your project folder. The command then finds all script names in your folder and subfolders and only downloads these scripts again without changing the locations in the file system.


### Example

If you call **Update local Scripts/Folders** on folder `src` in the following example. The scripts `portalScript1.js`, `portalScript2.js` and `portalScript3.js` will be downloaded.

![](../assets/reload-scripts.png)