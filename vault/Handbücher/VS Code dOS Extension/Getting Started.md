---
title: "VS Code dOS Extension"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/debugging/getting-started.html"
---

## Getting Started

To activate, make the following settings in the server ini file:


```javascript
; Activate the debug interface; false is the default
JSDebugger true
; 0.0.0.0 allows remote debugging; if the port in the firewall is open
; localhost allows only local debugging
JSDebuggerAddress 0.0.0.0
```

; Activate the debug interface; false is the default
JSDebugger true
; 0.0.0.0 allows remote debugging; if the port in the firewall is open
; localhost allows only local debugging
JSDebuggerAddress 0.0.0.0Then restart the server. The debugger will then be accessible from anywhere on port 9229, and you can proceed by opening a script. Then, open the command palette (F1) and execute the command "documentsOS: Upload + Debug Active Script".


![Upload + Debug](../assets/vscode-debug-upload.png)

Abb. 2 - Debugger

A "file" is opend, where the debugged source code is shown and the debugging can be started. See [Debug a Script](./launch.html) and [[Handbücher/VS Code dOS Extension/Attach to Running Script|Attach to Running Script]] for more details. See [Configuration](./config.md) for more details on configuring the debugger.