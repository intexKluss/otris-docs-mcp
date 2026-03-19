---
title: "RetrievalField | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/RetrievalField.html"
---

# Interface RetrievalField

**This class represents one search field or one conditon within a DOCUMENTS search request.**


#### Since

DOCUMENTS 4.0c HF2


#### See

[[Portalscript API/interfaces/DocQueryParams]]


`interface RetrievalField { compOp: string; defaultValue: string; defValWriteProt: boolean; FT_BOOL: number; FT_CHECKBOX: number; FT_DATE: number; FT_DOUBLE_LIST: number; FT_E_MAIL: number; FT_ENUM: number; FT_FILING_PLAN: number; FT_FILING_STRUCTURE: number; FT_GADGET: number; FT_HISTORY: number; FT_HTML: number; FT_NUMERIC: number; FT_REFERENCE: number; FT_SEPARATOR: number; FT_STRING: number; FT_TEXT: number; FT_TEXT_FIXED_FONT: number; FT_TIMESTAMP: number; FT_UNDEFINED: number; FT_URL: number; FT_USER_DEFINED: number; label: string; name: string; setDefault(value: string, writeProtect: boolean): any; type: number; valueExpr: string; }`


## Index


### Properties

- compOp
- defaultValue
- defValWriteProt
- label
- name
- type
- valueExpr


### Methods

- setDefault


### Field Types

These constants are equally available in each instance of RetrievalField and in the constructor object.

- FT_BOOL
- FT_CHECKBOX
- FT_DATE
- FT_DOUBLE_LIST
- FT_E_MAIL
- FT_ENUM
- FT_FILING_PLAN
- FT_FILING_STRUCTURE
- FT_GADGET
- FT_HISTORY
- FT_HTML
- FT_NUMERIC
- FT_REFERENCE
- FT_SEPARATOR
- FT_STRING
- FT_TEXT
- FT_TEXT_FIXED_FONT
- FT_TIMESTAMP
- FT_UNDEFINED
- FT_URL
- FT_USER_DEFINED


## Properties


### compOp

`compOp: string`

The comparison operator / relational operator as a String.

For a list of valid operators see the page: Filter Expressions.

Note: The access to this property is restricted. Only the "OnSearchScript" can effectively modify it. Modifying the operator is risky, since it can produce unexpected results from the user's point of view.

**Since:** DOCUMENTS 4.0c HF2


### defaultValue

`defaultValue: string`

The actual default value of the field (read-only).

Note: Actually only the "FillSearchMask" exit can attach default values (see setDefault()). There might exist another method in a future version. To improve upward compatibility a "FillSearchMask" script may check for external default values, and leave them unmodified.

**Since:** DOCUMENTS 4.0d


### defValWriteProt

`defValWriteProt: boolean`

**The UI write protection state of the defautValue (read-only) **

**Since:** DOCUMENTS 4.0d

**See:** setDefault


### label

`label: string`

The localized label of the field. Maybe an empty String.

Note: If the field has not got a label, DOCUMENTS falls back to the technical name. So there is no need to specify a label always. A few reserved internal fields, which are usualli never displayed on a search mask or a hit list, also come along without any label. An example is the special field "Search_EEIFileNr", which DOCUMENTS uses internally to implement a version listing for an ENTERPRISE.i file.

**Since:** DOCUMENTS 4.0c HF2


### name

`name: string`

The name of the look-up field (read-only).

**Since:** DOCUMENTS 4.0c HF2


### type

`type: number`

The field type coded as an integer (read-only).

See the enumeration constants in this class.

**Since:** DOCUMENTS 4.0c HF2


### valueExpr

`valueExpr: string`

The value sought after. If the operator is "~", it can be a composed value expression.

Note: The access to this property is restricted. Only the "OnSearchScript" can effectively modify it. Modifying the value is risky, because it can produce unexpected results from the user's point of view. Within a "FillSearchMask" exit this property contains always an empty string.

**Since:** DOCUMENTS 4.0c HF2


## Methods


### setDefault

`setDefault(value: string, writeProtect: boolean): any`

Place a default value in a search field.

A "FillSearchMask" script-exit can call this function to place default values in an extended search formular. Calls from other scripts will rather deposit a "LastError" message in the superior DocQueryParams object.

Note: The DocumentsServer only forwards these parameters to the client application. If a special client implementation will ignore them, the server would not enforce the defaults, because such a behaviour would confuse users. Calling this function does not modify the "empty" state in terms of DocQueryParams.getSearchField().

**Parameters:**

- `value`: `string` — The initial text in the search field. Dates and numbers must be formatted with the current user's locale settings.
- `writeProtect`: `boolean` — Indicates, if the user interface shall write-protect the field.

**Returns:** any

**Since:** DOCUMENTS 4.0d


## Field Types


### ReadonlyFT_BOOL

`FT_BOOL: number`

Integer code for the field type "boolean"


### ReadonlyFT_CHECKBOX

`FT_CHECKBOX: number`

Integer code for the field type "Checkbox"


### ReadonlyFT_DATE

`FT_DATE: number`

Integer code for the field type "Date"


### ReadonlyFT_DOUBLE_LIST

`FT_DOUBLE_LIST: number`

Integer code for the field type "Double select list"


### ReadonlyFT_E_MAIL

`FT_E_MAIL: number`

Integer code for the field type "E-mail address"


### ReadonlyFT_ENUM

`FT_ENUM: number`

Integer code for the field type "Enumeration" (not extensible)


### ReadonlyFT_FILING_PLAN

`FT_FILING_PLAN: number`

Integer code for the field type "Filing plan"


### ReadonlyFT_FILING_STRUCTURE

`FT_FILING_STRUCTURE: number`

Reserved constant for a possible future use.


### ReadonlyFT_GADGET

`FT_GADGET: number`

Integer code for the field type "Gadget" (actually ignored by the retrieval system)


### ReadonlyFT_HISTORY

`FT_HISTORY: number`

Integer code for the field type "History"


### ReadonlyFT_HTML

`FT_HTML: number`

Integer code for the field type "HTML"


### ReadonlyFT_NUMERIC

`FT_NUMERIC: number`

Integer code for the field type "Numeric"


### ReadonlyFT_REFERENCE

`FT_REFERENCE: number`

Integer code for the field type "File reference"


### ReadonlyFT_SEPARATOR

`FT_SEPARATOR: number`

Integer code for the field type "Horizontal seperator" (actually ignored by the retrieval system)


### ReadonlyFT_STRING

`FT_STRING: number`

Integer code for the field type "String" (single line)


### ReadonlyFT_TEXT

`FT_TEXT: number`

Integer code for the field type "Text" (multiple lines)


### ReadonlyFT_TEXT_FIXED_FONT

`FT_TEXT_FIXED_FONT: number`

Integer code for the field type "Text (fixed font)"


### ReadonlyFT_TIMESTAMP

`FT_TIMESTAMP: number`

Integer code for the field type "Time stamp"


### ReadonlyFT_UNDEFINED

`FT_UNDEFINED: number`

Integer code for fields with an unspecified data type. This constant has been added for completeness. Fields in this state should never appear in the retrieval system.


### ReadonlyFT_URL

`FT_URL: number`

Integer code for the field type "URL"


### ReadonlyFT_USER_DEFINED

`FT_USER_DEFINED: number`

Integer code for the field type "User defeined"