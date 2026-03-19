---
title: "documentsOS Extension (Beta)"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/index.html"
---

# documentsOS Extension (Beta)

Visual Studio Code Extension for developing PortalScripts on **documentsOS**. There are also helper functions available that make debugging scripts on documentsOS more convenient.

To start using the extension, open the commando palette (F1) and look for the `documentsOS` commands. Available are commands for

- Uploading, executing, and downloading scripts.
- Automatic transpilation of TypeScript files before upload (see below for details)
- Setting the proper script mode for .mjs files (Module) and .dos.ts files (TypeScript in documentsOS).
- Supporting debugging of scripts in the V8 engine.
- Exporting documentOS objects, e.g. file types, folders, portal scripts etc. as XML.
- Installing typings for PortalScript and file types of the connected principal.
- Supporting maintenance of the server, e.g. for connecting to the server console, setting properties, clearing the script cache, executing maintenance operations etc.
- Migrating the settings of predecessor extension vscode-janus-debug.


## Documents 5

The extension can also be used to develop scripts for Documents 5. Features which are not supported by Documents 5 (e.g. setting the script mode or the debug property) are either not offered or a corresponding error message is shown. In particular, debugging in Documents 5 is not supported. In this case, use the extension [vscode-janus-debug](https://marketplace.visualstudio.com/items?itemName=otris-software.vscode-janus-debug).

**Important**
If you want to work with both extensions, you should only enable one of them in each project.


## Support

If you have any problems please contact `support@otris.de`.


## Legal Notice

This Visual Studio Code extension is developed by otris software AG and was initially released in December 2023. It is licensed under the MIT License, (see [LICENSE file](LICENSE)).


## About otris software AG

As a software-based data and document management specialist, otris software AG supports company decision-makers in realizing management responsibilities. The solutions from otris software are available for this purpose. They can be used track, control and document all administrative processes completely and with full transparency. otris software is based in Dortmund, Germany.

For more information about otris software AG visit our website [otris.de](https://www.otris.de/).

**Enjoy!**