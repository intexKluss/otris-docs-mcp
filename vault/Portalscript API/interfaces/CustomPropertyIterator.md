---
title: "CustomPropertyIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/CustomPropertyIterator.html"
---

# Interface CustomPropertyIterator

**The CustomPropertyIterator class is an iterator that holds a list of objects of the class CustomProperty.**


#### Since

DOCUMENTS 4.0a


`interface CustomPropertyIterator { first(): CustomProperty; next(): CustomProperty; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): CustomProperty`

Retrieve the first CustomProperty object in the CustomPropertyIterator.

**Returns:** CustomProperty

**Since:** DOCUMENTS 4.0a


### next

`next(): CustomProperty`

Retrieve the next CustomProperty object in the CustomPropertyIterator.

**Returns:** CustomProperty

**Since:** DOCUMENTS 4.0a


### size

`size(): number`

Get the amount of CustomProperty objects in the CustomPropertyIterator.

**Returns:** number

**Since:** DOCUMENTS 4.0a