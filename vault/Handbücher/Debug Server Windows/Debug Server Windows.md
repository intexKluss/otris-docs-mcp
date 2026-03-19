---
title: "Introduction"
source: "https://otris.software/documents/manuals/books/debugserver_installation/"
---

# Introduction

This document describes what the next steps are if you have problems with the
DOCUMENTS Server in following way:

- The DOCUMENTS Server crashes (the DOCUMENTSServer.exe / DOCUMENTSServer_debug.exe process terminated by itself)
- The DOCUMENTS Server hangs (the DOCUMENTSServer.exe / DOCUMENTSServer_debug.exe is running but not responding - e.g. a log in is not possible)

The DOCUMENTS debug process is split in three escalation levels. If your
DOCUMENTS-Server **crashes**, you should start with the first escalation level.
If your DOCUMENTS-Server **hangs,** you have to process the third escalation level.

The three escalation levels in detail:

1. The release DOCUMENTS-Server creates a so-called Minidump in the User-data directory whenever a crash occurs.
2. The debug server, by default, creates the same Minidump files in the User-data directory each time a crash occurs, but it is possible to set additional flags to receive additional information in the DOCUMENTS-Server logs.
3. The debug server will be combined with the Microsoft Debugging Tools for Windows and detailed files are created (same behaviour as with previous releases of this documentation).


#### Notes

The path of the `User-data` directory depends on the Windows version and the
user account, which started the DOCUMENTS server.

The path is defined as `%HOMEDRIVE\\%HOMEPATH\\documents`

e.g. for user doe: `C:\\Users\\doe\\documents`

The easiest way to find out the path of the `User-data` directory of your system,
is to look into the first lines of the DocumentsServer_[Timestamp].log.
Search for `User-data-dir`.

The filename of the Minidump looks like

`DOCUMENTSServer_2040_x64_mssql_2017_09_01-13_43_17.dmp`

depending on the database, build no etc.


### General and legal information

No part of this publication may be reproduced or transmitted in any form or by
any means without express written permission of otris software AG. Any
information contained in this publication is subject to change without notice.

All product names and logos contained in this publication are the property of
their respective manufacturers.

otris software AG reserves the right to make changes to this software. The
information contained in this manual in no way obligates the vendor.

**© Copyright otris software AG. All rights reserved.**