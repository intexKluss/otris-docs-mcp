---
title: "FolderIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/FolderIterator.html"
---

# Interface FolderIterator

**The FolderIterator class has been added to the DOCUMENTS PortalScripting API to gain full access to the DOCUMENTS folders by scripting means.**


#### Since

ELC 3.50l01 / otrisPORTAL 5.0l01


#### Example


```ts
if (context.getFoldersByName(lstName, "public").size() == 0)
{
   var folderIter = context.getFoldersByName("TemplateFolder", "public");
   if (folderIter && folderIter.size() > 0)
   {
      var source = folderIter.first(); // fetch list folder
      var target = source.copyFolder(true, true, true);
      target.Name = lstName;
      target.Label = docFile.crmName;
      target.Type = "public";
   }
}
```


`interface FolderIterator { first(): Folder; getLastError(): string; next(): Folder; size(): number; }`


## Index


### Methods

- first
- getLastError
- next
- size


## Methods


### first

`first(): Folder`

Retrieve the first Folder object in the FolderIterator.

**Returns:** Folder

**Since:** ELC 3.50l01 / otrisPORTAL 5.0l01


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.50l01 / otrisPORTAL 5.0l01

**See:** DocFile.getLastError


### next

`next(): Folder`

Retrieve the next Folder object in the FolderIterator.

**Returns:** Folder

**Since:** ELC 3.50l01 / otrisPORTAL 5.0l01


### size

`size(): number`

Get the amount of Folder objects in the FolderIterator.

**Returns:** number

**Since:** ELC 3.50l01 / otrisPORTAL 5.0l01