---
title: "Attach to Running Script"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/debugging/attach.html"
---

# Attach to Running Script

*Note:* The procedure described here is very inconvenient. Improving this is on the extension's todo list.

Similar to Chrome/Edge, debugging in VS Code is also possible using the `debugger` statement.

1. Enable the debug checkbox on a script, either in the Manager or via the extension.
2. Execute the script, which will then pause.
3. In VS Code, select "Attach to Running Script" from the command palette. Abb. 5 - Attach to Running Script
4. Select the running script: Abb. 6 - Select Script
5. The script will open and the WebSocket address will be entered in launch.json, e.g. { // ... "websocketAddress": "ws://localhost:9229/003700e6-0083-40d1-8014-0000003b0035"
} Alternatively, the websocket address can be retrieved from the inspector port directly: curl http://host:9229/json/list The response is a JSON string for each running script. Look for the webSocketDebuggerUrl and adapt the host address according to your setup. [ { "description": "JANUS inspector instance", "devtoolsFrontendUrl": "chrome-devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&ws=172.18.0.3:9229/002e00ed-000b-40f9-8021-00b200ae0054", "devtoolsFrontendUrlCompat": "chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=172.18.0.3:9229/002e00ed-000b-40f9-8021-00b200ae0054",   "id": "002e00ed-000b-40f9-8021-00b200ae0054", "title": "<unknown thread>", "type": "node", "url": "<unknown thread>", "webSocketDebuggerUrl": "ws://172.18.0.3:9229/002e00ed-000b-40f9-8021-00b200ae0054"
} ]
6. Continue running the script so that it finishes. The VS Code debugger will remain connected.
7. Then execute another script with a debugger statement, either via the web client or the Manager. The connected VS Code debugger will then stop at the debugger statement. Abb. 7 - Debug Script