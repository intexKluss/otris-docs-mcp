---
title: "GlobalEnumerationItemIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/GlobalEnumerationItemIterator.html"
---

# Interface GlobalEnumerationItemIterator

**The EnumerationItemIterator class has been added to the DOCUMENTS Portalscript API to gain full access to the items of the DOCUMENTS global enumerations by scripting means.**

The objects of this class represent lists of [[Portalscript API/interfaces/GlobalEnumerationItem]] objects and allow to loop through such a list of global enumeration items.
The following method returns a GlobalEnumerationItemIterator: [[Portalscript API/interfaces/GlobalEnumeration#getglobalenumerationitems|GlobalEnumeration.getGlobalEnumerationItems]]


#### Since

DOCUMENTS 6.0.2


#### See

[[Portalscript API/interfaces/GlobalEnumeration#getglobalenumerationitems|GlobalEnumeration.getGlobalEnumerationItems]]


#### Example


```ts
var itItem = testEnum.getGlobalEnumerationItems();
for (var item = itItem.first(); item; item = itItem.next())
{
   // do something
}
```


`interface GlobalEnumerationItemIterator { first(): GlobalEnumerationItem; next(): GlobalEnumerationItem; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): GlobalEnumerationItem`

Retrieve the first GlobalEnumerationItem object in the GlobalEnumerationItemIterator.

**Returns:** GlobalEnumerationItem

**Since:** DOCUMENTS 6.0.2


### next

`next(): GlobalEnumerationItem`

Retrieve the next GlobalEnumerationItem object in the GlobalEnumerationItemIterator.

**Returns:** GlobalEnumerationItem

**Since:** DOCUMENTS 6.0.2


### size

`size(): number`

Get the amount of GlobalEnumerationItem objects in the GlobalEnumerationItemIterator.

**Returns:** number

**Since:** DOCUMENTS 6.0.2