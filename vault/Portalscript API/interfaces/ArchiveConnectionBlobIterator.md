---
title: "ArchiveConnectionBlobIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/ArchiveConnectionBlobIterator.html"
---

# Interface ArchiveConnectionBlobIterator

**The ArchiveConnectionBlobIterator class is an iterator that holds a list of objects of the class ArchiveConnectionBlob.**

You may access ArchiveConnectionBlobIterator objects by the ArchiveConnection.downloadBlobs() method described in the ArchiceConnection chapter.

**Note:** Class is only available for an ArchiceConnection to a XML-Server


#### Since

ELC 3.60h / otrisPORTAL 6.0h


`interface ArchiveConnectionBlobIterator { first(): ArchiveConnectionBlob; next(): ArchiveConnectionBlob; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): ArchiveConnectionBlob`

Retrieve the first ArchiveConnectionBlob object in the ArchiveConnectionBlobIterator.

**Returns:** ArchiveConnectionBlob

**Since:** ELC 3.60h / otrisPORTAL 6.0h


### next

`next(): ArchiveConnectionBlob`

Retrieve the next ArchiveConnectionBlob object in the ArchiveConnectionBlobIterator.

**Returns:** ArchiveConnectionBlob

**Since:** ELC 3.60h / otrisPORTAL 6.0h


### size

`size(): number`

Get the amount of ArchiveConnectionBlob objects in the ArchiveConnectionBlobIterator.

**Returns:** number

**Since:** ELC 3.60h / otrisPORTAL 6.0h