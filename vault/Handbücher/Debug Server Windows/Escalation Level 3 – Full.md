---
title: "Escalation Level 3 – Full debugging"
source: "https://otris.software/documents/manuals/books/debugserver_installation/EsalationLevel3.html"
---

# Escalation Level 3 – Full debugging

If our support team asks you to install the debug server to create more detailed
Minidump information, please follow the instructions explained below:

1. Read this section carefully at least once and complete, before you start!
2. Install Windows Debugging Tools x64 (see notes below). Use a default installation, do not change any of the installation settings!
3. Open an Explorer window and move to the base installation directory of your DOCUMENTS installation.
4. Find the sub directory called dbginst.
5. Execute the batch file dbgServer_install.bat with administrative rights.
6. A popup window asks you to execute “Microsoft ® Windows Based Script Host” – it is required to acknowledge this execution.
7. Please confirm the dialog popup “do you really want to install the debug server?”
8. Wait until the final confirmation popup appears which indicates the complete path and file name of the debug server executable.
9. Switch to the \server directory and search for a file named start_debug\_mode.bat for the Crashmode or for a file named debug_mode_hang.bat for the Hangmode.
10. Edit start_debug_mode.bat / debug_mode_hang.bat with your favourite text editor.
11. Almost at the beginning of the file, there are four configuration instructions, which start with a SET instruction (where [INSTALLDIR] represents the server directory of the Documents Server, e.g. C:\Program Files\Documents6\server):


```javascript
--- start_debug_mode.bat ---
Set DebuggingToolsPath=C:\Program Files\Windows Kits\10\Debuggers\x64
Set LogPath=c:\tmp
Set AppPath=[INSTALLDIR]
Set AppName=DOCUMENTSServer_debug.exe

--- debug_mode_hang.bat ---
Set DebuggingToolsPath=C:\Program Files\Windows Kits\10\Debuggers\x64
Set LogPath=c:\tmp
Set AppName=DOCUMENTSServer_debug.exe
```

--- start_debug_mode.bat ---
Set DebuggingToolsPath=C:\Program Files\Windows Kits\10\Debuggers\x64
Set LogPath=c:\tmp
Set AppPath=[INSTALLDIR]
Set AppName=DOCUMENTSServer_debug.exe

--- debug_mode_hang.bat ---
Set DebuggingToolsPath=C:\Program Files\Windows Kits\10\Debuggers\x64
Set LogPath=c:\tmp
Set AppName=DOCUMENTSServer_debug.exeEdit the file paths to match your exact system configuration. Especially make
sure to define a LogPath directory which really exists!

Save your changes and quit the editor.

1. For Crashmode only: Perform a test of the batch file by starting a cmd line (windows start, run, type cmd.exe), cd to the ..\server directory and start the batch file start_debug_mode.bat. In case of any misconfiguration you receive error messages pointing to your mistakes. Repeat Step 11 and 12 until the debug server runs fine.
2. For Crashmode only: Create a desktop shortcut to the start_debug_mode.bat file.


#### Notes

DOCUMENTS is a 64-bit Application (x64). Therefore you have to install the
64-bit Version of the Debugging Tools for Windows.

Originally Windbg can be downloaded at the Microsoft site:

[http://www.microsoft.com/whdc/devtools/debugging](http://www.microsoft.com/whdc/devtools/debugging)

WinDbg is part of the Windows 10 SDK. During the setup it is enough to install
the single component “Debugging Tools for Windows” as x64 version.

OR you can download the single Windbg setup from the otris site:

[https://download.otris.de/download/X64-DebuggersAndTools-x64_en-us.msi](https://download.otris.de/download/X64-DebuggersAndTools-x64_en-us.msi)