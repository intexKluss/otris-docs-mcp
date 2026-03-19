---
title: "DOCUMENTS Version"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Documents/DOCUMENTS-Version.html"
---

# DOCUMENTS Version


## Using the Extension

Simply use the command **Show DOCUMENTS Version** (hit F1 and Type `documents` then you will see the command in the list).

For more details about the installed version see the next sections.


## On Windows

Navigate with explorer.exe to the DOCUMENTS installation path, usually `%ProgramFiles%\Documents5\server`, and search for the server executable `DOCUMENTSServer.exe`. Right click it and navigate to the "Details" pane. It shows you the exact version number under "Product version".

![Windows Explorer Details pane showing DOCUMENTS version](img/documents-version-windows.png)


## On Ubuntu

Open a terminal and type


```javascript
$ dpkg -s documents5-mysql | grep Version
```

$ dpkg -s documents5-mysql | grep Version