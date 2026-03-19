---
title: "Escalation Level 1 – Release Server Minidumps"
source: "https://otris.software/documents/manuals/books/debugserver_installation/EsalationLevel1.html"
---

# Escalation Level 1 – Release Server Minidumps

Whenever a crash occurs, the release version of the DOCUMENTS server
automatically creates a file called Minidump in its `User-data` directory

The name pattern is

`DOCUMENTSServer_[BUILDNO]_[MEMMODEL]_[DB\]_[TIMESTAMP].dmp`

e.g.
`DOCUMENTSServer_2040_x64_mssql_2017_09_01-13_43_17.dmp`

When a crash occurred, please take this file and place it in a zip-file.

Second, please browse to the `…\logs` directory of your DOCUMENTS installation,
and find the appropriate file called

`DocumentsServer_[TIMESTAMP].log`

Put it in the same zip file, and send the zip to our support email address
[support@otris.de](mailto:support@otris.de). Please do not forget to include detailed information about
the exact DOCUMENTS server version (including build number and patch level),
the Tomcat release used, the J2SDK release being used and both version
information about the operating system and the database system.

Wait for further instructions by our support team. Do **not** proceed to the
next escalation levels without being ordered to do so!