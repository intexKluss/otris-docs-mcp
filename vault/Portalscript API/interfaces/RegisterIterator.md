---
title: "RegisterIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/RegisterIterator.html"
---

# Interface RegisterIterator

**The RegisterIterator class has been added to the DOCUMENTS PortalScripting API to gain full access to the registers of a DOCUMENTS file by scripting means.**

**Since:** ELC 3.60i / otrisPORTAL 6.0i available for archive files


#### Since

ELC 3.50n / otrisPORTAL 5.0n


#### Example


```ts
var docFile = context.file;
if (docFile)
{
   var docregs = docFile.getRegisters("documents");
   if (docregs && docregs.size() > 0)
   {
      for (var d = docregs.first(); d; d = docregs.next())
      {
         util.out(d.Name + ", " + d.Label);
      }
   }
}
```


`interface RegisterIterator { first(): Register; getLastError(): string; next(): Register; size(): number; }`


## Index


### Methods

- first
- getLastError
- next
- size


## Methods


### first

`first(): Register`

Retrieve the first Register object in the RegisterIterator.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** Register

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** string

**Since:** ELC 3.50n / otrisPORTAL 5.0n

**See:** DocFile.getLastError


### next

`next(): Register`

Retrieve the next Register object in the RegisterIterator.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** Register

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### size

`size(): number`

Get the amount of Register objects in the RegisterIterator.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** number

**Since:** ELC 3.50n / otrisPORTAL 5.0n