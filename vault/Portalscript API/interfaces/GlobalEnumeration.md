---
title: "GlobalEnumeration | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/GlobalEnumeration.html"
---

# Interface GlobalEnumeration

**The GlobalEnumeration class has been added to the DOCUMENTS Portalscript API to gain full access to the DOCUMENTS global enumerations by scripting means.**

A GlobalEnumeration object isn't created directly. You can get it using the [[Portalscript API/interfaces/Context#createglobalenumeration|Context.createGlobalEnumeration(name)]] function.


#### Since

DOCUMENTS 6.0.2


`interface GlobalEnumeration { createGlobalEnumerationItem(name: string): GlobalEnumerationItem; deleteGlobalEnumerationItem(name: string): boolean; description: string; getGlobalEnumerationItems(): GlobalEnumerationItemIterator; getLastError(shortMessage?: boolean): string; name: string; }`


## Index


### Properties

- description
- name


### Methods

- createGlobalEnumerationItem
- deleteGlobalEnumerationItem
- getGlobalEnumerationItems
- getLastError


## Properties


### description

`description: string`

The description of the GlobalEnumeration.

**Since:** DOCUMENTS 6.0.2


### name

`name: string`

The technical name of the GlobalEnumeration.

**Since:** DOCUMENTS 6.0.2


## Methods


### createGlobalEnumerationItem

`createGlobalEnumerationItem(name: string): GlobalEnumerationItem`

Create a new GlobalEnumerationItem for the GlobalEnumeration.

**Parameters:**

- `name`: `string` — The name of the GlobalEnumerationItem.

**Returns:** GlobalEnumerationItem

**Since:** DOCUMENTS 6.0.2

**See:** GlobalEnumeration.deleteGlobalEnumerationItem


```ts
var testEnum = context.createGlobalEnumeration("testEnum");
var name = "testItem1";
var success = testEnum.createGlobalEnumerationItem(name);
if (success)
{
   util.out("Successfully created GlobalEnumerationItem " + name);
}
```


### deleteGlobalEnumerationItem

`deleteGlobalEnumerationItem(name: string): boolean`

Remove a GlobalEnumerationItem from the GlobalEnumeration.

**Parameters:**

- `name`: `string` — The name of the GlobalEnumerationItem to be removed.

**Returns:** boolean

**Since:** DOCUMENTS 6.0.2

**See:** GlobalEnumeration.createGlobalEnumerationItem


```ts
var name = "testItem1";
var success = testEnum.deleteGlobalEnumerationItem(name);
if (success)
{
   util.out("Successfully deleted GlobalEnumerationItem " + name);
}
```


### getGlobalEnumerationItems

`getGlobalEnumerationItems(): GlobalEnumerationItemIterator`

Get a GlobalEnumerationItemIterator with all items of the GlobalEnumeration.

**Returns:** GlobalEnumerationItemIterator

**Since:** DOCUMENTS 6.0.2


```ts
var it = testEnum.getGlobalEnumerationItems();
for (var item of it)
{
   // do something
}
```


### getLastError

`getLastError(shortMessage?: boolean): string`

Function to get the description of the last error that occurred.

**Parameters:**

- `shortMessage`: `boolean` — Flag indicating whether to remove "Error in function: class.method(): " from the message. Default: false

**Returns:** string

**Since:** DOCUMENTS 6.0.2