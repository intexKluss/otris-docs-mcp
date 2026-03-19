---
title: "DOMException | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DOMException.html"
---

# Interface DOMException

**Many of the DOM API functions throw a DOMException, when an error has occurred.**

**Remarks about W3C conformity**
The class implements the DOMException exception type with the error codes specified in DOM level 2.


#### Since

DOCUMENTS 4.0c


`interface DOMException { code: number; DOMSTRING_SIZE_ERR: number; HIERARCHY_REQUEST_ERR: number; INDEX_SIZE_ERR: number; INUSE_ATTRIBUTE_ERR: number; INVALID_ACCESS_ERR: number; INVALID_CHARACTER_ERR: number; INVALID_MODIFICATION_ERR: number; INVALID_STATE_ERR: number; message: string; NAMESPACE_ERR: number; NO_DATA_ALLOWED_ERR: number; NO_MODIFICATION_ALLOWED_ERR: number; NOT_FOUND_ERR: number; NOT_SUPPORTED_ERR: number; SYNTAX_ERR: number; VALIDATION_ERR: number; WRONG_DOCUMENT_ERR: number; }`


## Index


### Properties

- code
- message


### Error Code Constants

All these constants are also available as properties of the constructor.
**Since** DOCUMENTS 4.0c

- DOMSTRING_SIZE_ERR
- HIERARCHY_REQUEST_ERR
- INDEX_SIZE_ERR
- INUSE_ATTRIBUTE_ERR
- INVALID_ACCESS_ERR
- INVALID_CHARACTER_ERR
- INVALID_MODIFICATION_ERR
- INVALID_STATE_ERR
- NAMESPACE_ERR
- NO_DATA_ALLOWED_ERR
- NO_MODIFICATION_ALLOWED_ERR
- NOT_FOUND_ERR
- NOT_SUPPORTED_ERR
- SYNTAX_ERR
- VALIDATION_ERR
- WRONG_DOCUMENT_ERR


## Properties


### Readonlycode

`code: number`

An error code.

See the Error Constants in this class.

**Since:** DOCUMENTS 4.0c


### Readonlymessage

`message: string`

An error message.

**Since:** DOCUMENTS 4.0c


## Error Code Constants


### DOMSTRING_SIZE_ERR

`DOMSTRING_SIZE_ERR: number`


### HIERARCHY_REQUEST_ERR

`HIERARCHY_REQUEST_ERR: number`


### INDEX_SIZE_ERR

`INDEX_SIZE_ERR: number`


### INUSE_ATTRIBUTE_ERR

`INUSE_ATTRIBUTE_ERR: number`


### INVALID_ACCESS_ERR

`INVALID_ACCESS_ERR: number`


### INVALID_CHARACTER_ERR

`INVALID_CHARACTER_ERR: number`


### INVALID_MODIFICATION_ERR

`INVALID_MODIFICATION_ERR: number`


### INVALID_STATE_ERR

`INVALID_STATE_ERR: number`


### NAMESPACE_ERR

`NAMESPACE_ERR: number`


### NO_DATA_ALLOWED_ERR

`NO_DATA_ALLOWED_ERR: number`


### NO_MODIFICATION_ALLOWED_ERR

`NO_MODIFICATION_ALLOWED_ERR: number`


### NOT_FOUND_ERR

`NOT_FOUND_ERR: number`


### NOT_SUPPORTED_ERR

`NOT_SUPPORTED_ERR: number`


### SYNTAX_ERR

`SYNTAX_ERR: number`


### VALIDATION_ERR

`VALIDATION_ERR: number`


### WRONG_DOCUMENT_ERR

`WRONG_DOCUMENT_ERR: number`