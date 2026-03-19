---
title: "XMLExportDescription | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/XMLExportDescription.html"
---

# Class XMLExportDescription

The XMLExportDescription class has been added to the DOCUMENTS PortalScripting API to improve the XML Export process of DOCUMENTS files by scripting means.

For instance this allows to use different target archives for each file as well as to influence the archiving process by the file's contents itself.
The XMLExportDescription object can only be used as parameter for the method [[Portalscript API/classes/XMLExport#addfile|XMLExport.addFile(XMLExportDescription)]]


## Index


### Properties

- exportCreatedAt
- exportFileId
- exportLastModifiedAt
- exportLastModifiedBy
- exportOwner


### Constructors

- constructor


## Properties


### exportCreatedAt

`exportCreatedAt: boolean`

boolean value whether export the create timestamp of the file.

**Since:** DOCUMENTS 4.0c


### exportFileId

`exportFileId: boolean`

boolean value whether export the id of the file.

**Since:** DOCUMENTS 4.0c


### exportLastModifiedAt

`exportLastModifiedAt: boolean`

boolean value whether export the timestamp of the last modification of the file.

**Since:** DOCUMENTS 4.0c


### exportLastModifiedBy

`exportLastModifiedBy: boolean`

boolean value whether export the name of the last editor of the file.

**Since:** DOCUMENTS 4.0c


### exportOwner

`exportOwner: boolean`

boolean value whether export the name of the owner of the file.

**Since:** DOCUMENTS 4.0c


## Constructors


### constructor

`new XMLExportDescription(): XMLExportDescription`

Create a new XMLExportDescription object.

Like in other programming languages you create a new object with the new operator (refer to example below).

Since: DOCUMENTS 4.0c

**Returns:** XMLExportDescription

**Since:** DOCUMENTS 4.0c

**See:** XMLExport.addFile


```ts
var docFile = context.file;
if (!docFile)
{
   // error handling
}
var desc = new XMLExportDescription();
desc.exportFileId = true;
desc.exportOwner = true;
desc.exportLastModifiedBy = true;
desc.exportCreatedAt = true;
desc.exportLastModifiedAt = true;
// create a new XMLExport
var xml = new XMLExport("c:\\tmp\\" + docFile.getAutoText("id") + ".xml");
xml.addFile(docFile, desc); // add the current file to the export
xml.saveXML(); // perform the export operation
```