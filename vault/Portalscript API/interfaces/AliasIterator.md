---
title: "AliasIterator | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/AliasIterator.html"
---

# Interface AliasIterator

**The AliasIterator class has been added to the DOCUMENTS PortalScripting API to gain full access to the DOCUMENTS aliases by scripting means.**

The objects of this class represent lists of [[Portalscript API/interfaces/Alias]] objects and allow to loop through such a list of aliases. The following method
returns an AliasIterator: [[Portalscript API/interfaces/Context#getallaliases|context.getAllAliases]].


#### Since

DOCUMENTS 5.0i HF7


#### Example


```ts
var itAlias = context.getAllAliases();
for (var alias = itAlias.first(); alias; alias = itAlias.next())
{
   // do something
}
```


`interface AliasIterator { first(): Alias; next(): Alias; size(): number; }`


## Index


### Methods

- first
- next
- size


## Methods


### first

`first(): Alias`

Retrieve the first Alias object in the AliasIterator.

**Returns:** Alias

**Since:** DOCUMENTS 5.0i HF7


### next

`next(): Alias`

Retrieve the next Alias object in the AliasIterator.

**Returns:** Alias

**Since:** DOCUMENTS 5.0i HF7


### size

`size(): number`

Get the amount of Alias objects in the AliasIterator.

**Returns:** number

**Since:** DOCUMENTS 5.0i HF7