---
title: "Starting the debug server"
source: "https://otris.software/documents/manuals/books/debugserver_installation/StartingDebugServer.html"
---

# Starting the debug server


#### Crashmode

Start the debugserver by double clicking the desktop shortcut to your
`start_debug_mode.bat` file.

A command line window opens up which invokes the file `cdb.exe` of the Windows
Debugging Tools. The debugger again invokes the debug version of the
DOCUMENTS-Server.


#### Hangmode

Start the debugserver by double clicking of the `DOCUMENTSServer_debug.exe` in
the `\server` directory.


#### Notes

ONLY, if otris support asked you to write an app.log:

Switch to the *debugserver* console window and change the “*Debug Output*” radio
button to “*File*”. Hit the “…” button next to it, which opens a file dialog.

Switch to the `/tmp` directory which you already configured in the installation
steps, and hit the “*open*” button.

Now hit the “*Change*” button in the “*Debug-level*” row. Hit the “*All*”-Button
in the dialog window which pops up, and finally hit *OK*.

*The debug server is now running and collecting data.*