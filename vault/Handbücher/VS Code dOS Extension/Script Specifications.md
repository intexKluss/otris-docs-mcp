---
title: "Script Specifications"
source: "https://otris.software/documents/manuals/books/vscode-documentsos/common/scriptspecs.html"
---

# Script Specifications

There are two types of files for describing and managing script parameters and attributes.

- <workspaceFolder>/.scriptParameters/<scriptName>.json
Contains the attributes and parameters of the script scriptName.
- <workspaceFolder>/**/script.specs.json
Usually <workspaceFolder>/src/script.specs.json.
Contains the attributes and parametesr of a set of scripts. For a single script, this file actually looks exactly like the <workspaceFolder>/.scriptParameters/<scriptName>.json. For multiple scripts, it contains a list.

Only one of the two types should be used. If one of the files is found on upload script, the corresponding attributes and parameters are uploaded together with the script.
For downloading the `<workspaceFolder>/.scriptParameters/<scriptName>.json` on a download script command the setting `scriptParameters` must be set to `true`.