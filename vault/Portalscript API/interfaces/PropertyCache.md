---
title: "PropertyCache | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/PropertyCache.html"
---

# Interface PropertyCache


`interface PropertyCache { hasProperty(name: string): boolean; listProperties(): string[]; removeProperty(name: string): boolean; [index: string]: any; }`


#### Indexable

- [index: string]: any


## Index


### Methods

- hasProperty
- listProperties
- removeProperty


## Methods


### hasProperty

`hasProperty(name: string): boolean`

Function to check if a named property exists in the PropertyCache.

**Parameters:**

- `name`: `string`

**Returns:** boolean

**Since:** DOCUMENTS 4.0


### listProperties

`listProperties(): string[]`

Function to list all properties in the PropertyCache.

**Returns:** string[]

**Since:** DOCUMENTS 5.0c


### removeProperty

`removeProperty(name: string): boolean`

Function to delete a named property exists in the PropertyCache.

**Parameters:**

- `name`: `string`

**Returns:** boolean

**Since:** DOCUMENTS 4.0