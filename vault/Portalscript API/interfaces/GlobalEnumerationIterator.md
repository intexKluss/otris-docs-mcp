---
title: "GlobalEnumerationIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/GlobalEnumerationIterator.html"
---

# Interface GlobalEnumerationIterator

**The EnumerationIterator class has been added to the DOCUMENTS Portalscript API to gain full access to the DOCUMENTS global enumerations by scripting means.**

The objects of this class represent lists of [[Portalscript API/interfaces/GlobalEnumeration]] objects and allow to loop through such a list of global enumerations.
The following method returns a GlobalEnumerationIterator: [[Portalscript API/interfaces/Context#getglobalenumerations|context.getGlobalEnumerations]]


#### Since

DOCUMENTS 6.0.2


#### See

[[Portalscript API/interfaces/Context#getglobalenumerations|context.getGlobalEnumerations]]


#### Example


```ts
var itEnum = context.getGlobalEnumerations();
for (var gEnum = itEnum.first(); gEnum; gEnum = itEnum.next())
{
   // do something
}
```


`interface GlobalEnumerationIterator { first(): GlobalEnumeration; next(): GlobalEnumeration; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): GlobalEnumeration`

Retrieve the first GlobalEnumeration object in the GlobalEnumerationIterator.

**Returns:** GlobalEnumeration

**Since:** DOCUMENTS 6.0.2


### next

`next(): GlobalEnumeration`

Retrieve the next GlobalEnumeration object in the GlobalEnumerationIterator.

**Returns:** GlobalEnumeration

**Since:** DOCUMENTS 6.0.2


### size

`size(): number`

Get the amount of GlobalEnumeration objects in the GlobalEnumerationIterator.

**Returns:** number

**Since:** DOCUMENTS 6.0.2