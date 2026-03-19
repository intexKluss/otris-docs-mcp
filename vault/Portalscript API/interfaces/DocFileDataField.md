---
title: "DocFileDataField | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DocFileDataField.html"
---

# Interface DocFileDataField

**The JS_DocFileDataField class represents the special comment field at the DocFile.**


#### Since

DOCUMENTS 5.0d


`interface DocFileDataField { fieldName: string; getLastError(): string; getValue(): string; hash: string; readAccess: Boolean; setValue(value: string): boolean; writeAccess: Boolean; writeAccessGui: Boolean; }`


## Index


### Properties

- fieldName
- hash
- readAccess
- writeAccess
- writeAccessGui


### Methods

- getLastError
- getValue
- setValue


## Properties


### fieldName

`fieldName: string`

Name of the field.

**Since:** DOCUMENTS 5.0d


### hash

`hash: string`

Hash value of the last field value.

**Since:** DOCUMENTS 5.0d


### readAccess

`readAccess: Boolean`

Access-right to read the field.

**Since:** DOCUMENTS 5.0d


### writeAccess

`writeAccess: Boolean`

Access-right to write the field.

**Since:** DOCUMENTS 5.0d


### writeAccessGui

`writeAccessGui: Boolean`

Is the field defined as readonly for the Web-Client (GUI).

**Since:** DOCUMENTS 5.0g HF2


## Methods


### getLastError

`getLastError(): string`

If you call a method at a DocFileDataField object and an error occurred, you can get the error description with this function.

**Returns:** string

**Since:** DOCUMENTS 5.0d


### getValue

`getValue(): string`

Get the comment as String.

**Returns:** string

**Since:** DOCUMENTS 5.0d


### setValue

`setValue(value: string): boolean`

Set the comment as String.

**Parameters:**

- `value`: `string` — String containing the new comment

**Returns:** boolean

**Since:** DOCUMENTS 5.0d