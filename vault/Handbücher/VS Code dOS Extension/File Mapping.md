---
title: "File Mapping"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/debugging/file-mapping.html"
---

# File Mapping

If you want to debug in the file from the workspace, you also need to set the `remoteRoot` and `localRoot` settings in the `launch.json`:

- remoteRoot: This is the "path" of the scripts on the server. They always have the path /${principalName}/db/$scriptName or /${principalName}/db/${scriptCategory}/${scriptName}.
- localRoot: This is the path of the scripts in the project folder to which the scripts in remoteRoot are mapped, e.g., the standard folder for JS files: ${workspaceFolder}/src/jscript/

The configuration looks as follows:


```json
{
  "request": "attach",
  "type": "node",
  "name": "documentsOS attach script",
  "address": "localhost",
  "port": 9229,
  "remoteRoot": "/relations/db", // replace 'relations' with your own principal name
  "localRoot": "${workspaceFolder}/src/jscript/"
}
```

{
  "request": "attach",
  "type": "node",
  "name": "documentsOS attach script",
  "address": "localhost",
  "port": 9229,
  "remoteRoot": "/relations/db", // replace 'relations' with your own principal name
  "localRoot": "${workspaceFolder}/src/jscript/"
}If this script is started with "Upload + Debug", the debugger will stop in the "original script":


![Debug Source-Script](../assets/vscode-debug-src-file.png)

Abb. 9 - Debug Source-Script

Current limitations:

- All scripts must be placed in a single folder. If the script is in a subfolder, you currently need to adjust localRoot accordingly. Improving this is on the extension's todo list.