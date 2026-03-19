---
title: "Escalation Level 2 – Debug Server Minidumps"
source: "https://otris.software/documents/manuals/books/debugserver_installation/EsalationLevel2.html"
---

# Escalation Level 2 – Debug Server Minidumps

If our support team asks you to install the debug server to create more detailed
Minidump information, please follow the instructions explained below:

1. Open an Explorer window and move to the base installation directory of your DOCUMENTS installation.
2. Find the sub directory called dbginst.
3. Execute the batch file dbgServer_install.bat with administrative rights
4. A popup window asks you to execute “Microsoft ® Windows Based Script Host” – it is required to acknowledge this execution.
5. Please confirm the dialog popup “do you really want to install the debug server?”
6. Wait until the final confirmation popup appears which indicates the complete path and file name of the debug server executable.
7. Instead of executing the release server (DOCUMENTSServer.exe), run the debug server (DOCUMENTSServer_debug.exe) instead. It may run as a service as well.
8. The deinstallation of the debug server will be done by executing the batch file dbgServer_uninstall.bat.

Whenever a crash occurs, the debug version of the DOCUMENTS server automatically
creates a file called Minidump in its `User-data` directory.

The name pattern is

`DOCUMENTSServer_[BUILDNO]*[MEMMODEL]*[DB]_[TIMESTAMP]d.dmp

When a crash occurred, please take this file and place it in a zip file.

Second, please browse to the `…\logs` directory of your DOCUMENTS installation,
and find the appropriate file called

`DocumentsServer_[TIMESTAMP].log`

Put it in the same zip file, and send the zip to our support email address
[support@otris.de](mailto:support@otris.de). Please do not forget to include detailed information about
the exact DOCUMENTS server version (including build number and patch level),
the Tomcat release used, the J2SDK release being used and both version
information about the operating system and the database system.

Wait for further instructions by our support team. Do **not** proceed to the
third escalation level without being ordered to do so!