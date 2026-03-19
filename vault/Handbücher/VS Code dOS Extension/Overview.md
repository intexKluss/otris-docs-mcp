---
title: "Debugging Scripts on documentsOS"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/debugging/overview.html"
---

# Debugging Scripts on documentsOS

The Node.js debugger is integrated in documentsOS. So scripts on documentsOS can be debugged as with remote debugging of Node.js. There is also a Node.js debugger included in VS Code, which supports remote debugging.
When debugging scripts on documentsOS, however, there are a few important points to bear in mind.

- To connect a script with VS Code for debugging, the host, port and the UUID of the script must be added to the debug configuration in launch.json. Without this information, VS Code cannot connect to the correct script for debugging.
- To tell the Node.js debugger on documentsOS, that a script should be stopped for debugging, the Debug property of the script must be set.
- If the file mapping does not work, VS Code will open the source code from server for debugging. In that case, you need to set a breakpoint or press F11 as the first step.

The extension provides the following commands that support debugging and take these points into account.

- Upload + Debug Active Script The most convenient command, because it does everything. Meaning, you just call it on an active script, and it will start debugging this script.
- Attach to Running Script If you want to debug a script that is started by the documents server, you will need this command but you need to call Set Property first.
- Set Property to set the debug property.