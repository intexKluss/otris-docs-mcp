---
title: "XML Export"
source: "https://otris.software/documents/manuals/books/vscode-janus-debug/Documents/XML-Export.html"
---

# XML Export


## FileTypes

To generate the XML of DOCUMENTS FileTypes, perform the following steps.

1. Press F1
2. Type doc xml
3. Select command DOCUMENTS: XML Export
4. Select FileType
5. Now you can choose from a list of all available file type names and additional the entry All in seperate files
6. The generated file(s) will be written to a subfolder of your workspace folder


### Document Templates

If the exported FileType contains Document Templates, the Documents will be downloaded to an additional subfolder. This folder will get the same name as the XML file.


## PortalScripts

To generate the XML of DOCUMENTS PortalScripts, perform the following steps.

1. Press F1
2. Type doc xml
3. Select command DOCUMENTS: XML Export
4. Select PortalScript
5. You will see a list of all available names and additional the following entries
All in seperate files
All in one file
Get names from JSON
6. If you selected Get names from JSON
your file must look like this example
you must copy the path tho the JSON file from insede VS Code
if your JSON file contains more than one array, you can select one of them in next step (in example ths is ftList1 and ftList2)
7. The generated file(s) will be written to a subfolder of your workspace folder.


### Upload and Export active script

Ehe current active file in VS Code can be uploaded and exported at once by executing the following steps.

1. Press F1
2. Type doc xml
3. Select command DOCUMENTS: Upload Script and Export XML
4. The current active script in VS Code will be uploaded and the XML export wil be written to subfolder portalScripts.


### Example JSON File

Example for Filetypes, but it looks the same for PortalScripts.


```javascript
{
  "ftList1": [
    "crmNote",
    "crmUser"
  ],
  "ftList2": [
    "crmContact",
    "crmTask",
    "crmUser"
  ]
}
```

{
  "ftList1": [
    "crmNote",
    "crmUser"
  ],
  "ftList2": [
    "crmContact",
    "crmTask",
    "crmUser"
  ]
}
## Other Classes

To generate the XML of DOCUMENTS FileTypes, perform the following steps.

1. Press F1
2. Type doc xml
3. Select command DOCUMENTS: XML Export
4. Select the class name
5. The generated file(s) will be written to a subfolder of your workspace folder

If a class is missing, you can write an issue.