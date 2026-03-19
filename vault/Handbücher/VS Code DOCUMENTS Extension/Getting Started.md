---
title: "Debugger Getting Started"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Debugger/Debugger-Getting-Started.html"
---

# Debugger Getting Started

- Only use the debugger in test systems!
- At least DOCUMENTS 5.0d is required.
- The debugger port will only be opened when the first script is executed.


## Enabling Debugger on Server


### On Windows

To enable the debugger on the server, add the following lines to `documents.ini`:


```bash
JSDebugger yes
# optional:
JSDebuggerPort 8089
# recommended:
$NoJobs 1
$JSScriptCache false
```

JSDebugger yes
# optional:
JSDebuggerPort 8089
# recommended:
$NoJobs 1
$JSScriptCache falseAdditional make sure that the firewall has the TCP port opened.

Then restart the server.


### On Ubuntu

First, change to root:


```bash
sudo -i
```

sudo -iAdd the following lines to `documents.ini`:


```bash
echo 'JSDebugger yes' >> /etc/documents5/documents.ini
# optional:
echo 'JSDebuggerPort 8089' >> /etc/documents5/documents.ini
# recommended:
echo '$NoJobs 1'  >> /etc/documents5/documents.ini
```

echo 'JSDebugger yes' >> /etc/documents5/documents.ini
# optional:
echo 'JSDebuggerPort 8089' >> /etc/documents5/documents.ini
# recommended:
echo '$NoJobs 1'  >> /etc/documents5/documents.iniCheck the firewall rules:


```bash
ufw status verbose
```

ufw status verboseIf the debugger port is not allowed, allow it:


```bash
ufw allow 8089/tcp
```

ufw allow 8089/tcpConfirm it by using `ufw status verbose` again.
If it shows up, restart the server:


```bash
systemctl restart documents5
```

systemctl restart documents5Exit root shell


```bash
exit
```

exit
## Launching the Debugger

The debugger operates in two modes, it can **launch** a script or **attach** to a script.


### Configuration

You configure the modes with a .vscode/launch.json file in the root directory of your project.

- Create this file manually.
- VS Code will create one, if it doesn't exist (see VS Code User Guide.


### Launch

Simply execute the command **Upload and Debug Script** on an open script in editor.


### Attach

Set the following statement somewhere in the script that you want to debug:


```javascript
debugger;
```

debugger;Then upload the script and however get it startet on server. When the script reaches the `debugger;` statement, it will be paused. Now you can choose **Attach to Server** in the drop down menu to the right of the green **Start Debugging** button ([see here](https://code.visualstudio.com/docs/editor/debugging)).


### Attach without debugger;

You can attach to arbitrary scripts that are running on server. But consider that it is rather difficult to attach a script, when it is not paused. And if you set a breakpoint in VS Code, it will only be set to the script after attaching.

- If breakOnAttach is set to true in the attach configuration of launch.json, the debugger will pause a script immediately after attaching to it.
- The pause button doesn't work after attaching to a script. This is very likely a problem in VS Code.