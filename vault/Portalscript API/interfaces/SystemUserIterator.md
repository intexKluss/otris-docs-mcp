---
title: "SystemUserIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/SystemUserIterator.html"
---

# Interface SystemUserIterator

**The SystemUserIterator class has been added to the DOCUMENTS PortalScripting API to gain full access to the DOCUMENTS users by scripting means.**

The objects of this class represent lists of Systemuser objects and allow to loop through such a list of users.


#### Since

ELC 3.50b / otrisPORTAL 5.0b


`interface SystemUserIterator { first(): SystemUser; getLastError(): string; next(): SystemUser; size(): number; }`


## Index


### Methods

- first
- getLastError
- next
- size


## Methods


### first

`first(): SystemUser`

Retrieve the first SystemUser object in the SystemUserIterator.

**Returns:** SystemUser

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.50b / otrisPORTAL 5.0b

**See:** DocFile.getLastError


### next

`next(): SystemUser`

Retrieve the next SystemUser object in the SystemUserIterator.

**Returns:** SystemUser

**Since:** ELC 3.50b / otrisPORTAL 5.0b


### size

`size(): number`

Get the amount of SystemUser objects in the SystemUserIterator.

**Returns:** number

**Since:** ELC 3.50b / otrisPORTAL 5.0b