---
title: "Debug a Script"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/debugging/launch.html"
---

# Debug a Script

To debug a script, open this script in VS Code:

1. In this script, open the command palette (F1) and execute the command "documentsOS: Upload + Debug Active Script". Abb. 3 - Debugger
2. If the command is executed for the first time, a wizard will open asking for the connection data. Otherwise, this step is skipped: Server: localhost
Port: 9229 (Default)
Abb. 4 - Debugger By default, the source code shown in the debugger is the code executed by V8, not the code of the file itself. Therefore, a new window also appears, showing the implicit function __JANUS() in which every portal script is encapsulated. See file type mapping, how to configure the mapping to the local files in the workspace.


## Debugging in Detail

This is the simplest command for debugging scripts on documentsOS. The command must be executed when a script is open in the editor. It then performs the following steps:

- Uploads the script
- Sets the Debug property of the script
- Runs the script (which is then stopped by the debugger)
- Determines the UUID of the script and writes the web socket address of the script to launch.json (important for attach to work)
- Attaches the VS Code Node.js debugger

Debugging should always be terminated completely. After debugging is finished, the Debug property is reset to its previous value, and the web socket address is removed from `launch.json`.

If something goes wrong during the process and debugging is not terminated, the **Run Script** command cannot be properly finished, and the associated connection cannot be closed. In this case, you will receive a warning and the option to terminate the **Run Script** command when you execute another command. Additionally, the script will remain in a paused state in the debugger on the server. To end the script, you can use the **Attach to Running Script** command.