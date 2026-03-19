---
title: "Alias | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/Alias.html"
---

# Interface Alias

**The Alias class has been added to the DOCUMENTS Portalscript API to gain full access to the DOCUMENTS alias by scripting means.**

An Alias object is not created directly. You can get it using the [[Portalscript API/interfaces/Context#createalias|Context.createAlias]] function.


#### Since

DOCUMENTS 5.0i HF6


`interface Alias { getLastError(shortMessage?: boolean): string; label: string; name: string; setLabel(label: string): boolean; setName(name: string): boolean; setSystemUser(login?: string): boolean; systemUser: SystemUser; }`


## Index


### Properties

- label
- name
- systemUser


### Methods

- getLastError
- setLabel
- setName
- setSystemUser


## Properties


### Readonlylabel

`label: string`

The label of the alias.

**Since:** DOCUMENTS 5.0i HF7


### Readonlyname

`name: string`

The technical name of the alias.

**Since:** DOCUMENTS 5.0i HF6


### ReadonlysystemUser

`systemUser: SystemUser`

Returns the SystemUser currently assigned to this alias.

**Since:** DOCUMENTS 5.0i HF6


## Methods


### getLastError

`getLastError(shortMessage?: boolean): string`

Function to get the description of the last error that occurred.

**Parameters:**

- `shortMessage`: `boolean` — Flag indicating whether to remove "Error in function: class.method(): " from the message. Default: false

**Returns:** string

**Since:** DOCUMENTS 5.0i HF6


### setLabel

`setLabel(label: string): boolean`

Set the label of the alias.

**Parameters:**

- `label`: `string` — The new label of the alias.

**Returns:** boolean

**Since:** DOCUMENTS 5.0i HF7


### setName

`setName(name: string): boolean`

Set the name of the alias.

The alias will be renamed to the given name.

**Parameters:**

- `name`: `string` — The new name of the alias.

**Returns:** boolean

**Since:** DOCUMENTS 5.0i HF6


### setSystemUser

`setSystemUser(login?: string): boolean`

Set a SystemUser to the alias.

The old SystemUser will be disconnected.

**Parameters:**

- `login`: `string` — The login name of the SystemUser to be assigned to this alias.

**Returns:** boolean

**Since:** DOCUMENTS 5.0i HF6


```ts
if (!testAlias.setSystemUser("schreiber"))
   throw testAlias.getLastError();
```