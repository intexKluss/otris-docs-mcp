---
title: "DocumentIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DocumentIterator.html"
---

# Interface DocumentIterator

**The DocumentIterator class has been added to the DOCUMENTS PortalScripting API to gain full access to the documents stored on registers of a DOCUMENTS file by scripting means.**

**Since:** ELC 3.60i / otrisPORTAL 6.0i available for archive files


#### Since

ELC 3.50n / otrisPORTAL 5.0n


#### Example


```ts
var docFile = context.file;
if (docFile)
{
   var docreg = docFile.getRegisterByName("Documents");
   if (docreg)
   {
      var docs = docreg.getDocuments();
      if (docs && docs.size() > 0)
      {
         for (var d = docs.first(); d; d = docs.next())
         {
            util.out(d.fullname);
         }
      }
   }
}
```


`interface DocumentIterator { first(): Document; getLastError(): string; next(): Document; size(): number; }`


## Index


### Methods

- first
- getLastError
- next
- size


## Methods


### first

`first(): Document`

Retrieve the first Document object in the DocumentIterator.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** Document

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.50n / otrisPORTAL 5.0n

**See:** DocFile.getLastError


### next

`next(): Document`

Retrieve the next Document object in the DocumentIterator.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** Document

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### size

`size(): number`

Get the amount of Document objects in the DocumentIterator.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** number

**Since:** ELC 3.50n / otrisPORTAL 5.0n