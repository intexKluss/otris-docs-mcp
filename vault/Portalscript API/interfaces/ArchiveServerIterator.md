---
title: "ArchiveServerIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/ArchiveServerIterator.html"
---

# Interface ArchiveServerIterator

**The ArchiveServerIterator class has been added to the DOCUMENTS PortalScripting API to gain full access to the DOCUMENTS ArchiveSerevr by scripting means.**


#### Since

DOCUMENTS 5.0a


`interface ArchiveServerIterator { first(): ArchiveServer; getLastError(): string; next(): ArchiveServer; size(): number; }`


## Index


### Methods

- first
- getLastError
- next
- size


## Methods


### first

`first(): ArchiveServer`

Retrieve the first ArchiveServer object in the ArchiveServerIterator.

**Returns:** ArchiveServer

**Since:** DOCUMENTS 5.0a


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 5.0a


### next

`next(): ArchiveServer`

Retrieve the next ArchiveServer object in the ArchiveServerIterator.

**Returns:** ArchiveServer

**Since:** DOCUMENTS 5.0a


### size

`size(): number`

Get the amount of ArchiveServer objects in the ArchiveServerIterator.

**Returns:** number

**Since:** DOCUMENTS 5.0a