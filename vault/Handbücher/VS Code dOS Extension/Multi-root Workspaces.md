---
title: "Multi-root Workspaces"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/common/multi-root-ws.html"
---

# Multi-root Workspaces

VS Code allows you to work with multiple project folders using multi-root workspaces. This can be useful, if you are working on several projects at the same time. The [Multi-root Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces) chapter of the VS Code documentation shows how to use multi-root workspaces in general.
The documentsOS extension also supports multi-root workspaces. Since each workspace folder has its own `launch.json`, it is possible to work with several documentsOS servers simultaneously in one workspace.


## Example


![Multi-root Workspace](../assets/multi-root-ws.png)

Abb. 1 - Multi-root Workspace

In the picture you see a workspace with two workspace folders. They are connected to the documentsOS systems `documents1.otris.de` and `documents2.otris.de`. If you upload the script `crmNote_New.js` from workspace folder `documents2` using the context menu, the script will be uploaded to `documents2.otris.de`, because the extension determines the `launch.json` from the corresponding workspace folder of `crmNote_New.js`. The same applies to all commands from the context menus. If you use the commands of the command palette, the extension has to ask you for some information anyway, often the corresponding workspace folder can then be determined from this information. However, if the workspace folder cannot be determined, the extension will ask you.

**Note**
If files are open in the editor, the extension assumes that you are working in the workspace folder of the active file and uses the `launch.json` from the corresponding folder.