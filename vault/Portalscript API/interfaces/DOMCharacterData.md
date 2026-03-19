---
title: "DOMCharacterData | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DOMCharacterData.html"
---

# Interface DOMCharacterData

**DOMCharacterData represents text-like nodes in the DOM tree.**

An object of this class can represent either a text node, a comment node or a CDATA section.
Scripts should use the inherited nodeType attribute to distinguish these node types.

**Remarks about W3C conformity**
The class covers the CharacterData interface of DOM level 2. The W3C has defined several derived
interfaces, namely "Text", "Comment" and "CDATASection". With respect to code size this API omits
the corresponding subclasses "DOMText", "DOMComment" and "DOMCDATASection". The only additional
method "DOMText.splitText()" has been moved into this class.
This simplification has got only one little disadvantage. Scripts cannot distinguish the three
node types using the JavaScript `instanceof` operator. They must use the nodeType attribute instead.


#### Since

DOCUMENTS 4.0c


`interface DOMCharacterData { appendData(arg: string): void; data: string; deleteData(offset: number, count: number): void; insertData(offset: number, arg: string): void; length: number; replaceData(offset: number, count: number, arg: string): void; splitText(offset: number): DOMCharacterData; substringData(offset: number, count: number): string; }`


## Index


### Properties

- data
- length


### Methods

- appendData
- deleteData
- insertData
- replaceData
- splitText
- substringData


## Properties


### data

`data: string`

The text data in the node.

**Since:** DOCUMENTS 4.0c


### length

`length: number`

The text length in the node.

This property is readonly.

**Since:** DOCUMENTS 4.0c


## Methods


### appendData

`appendData(arg: string): void`

Append some string to the text.

**Parameters:**

- `arg`: `string` — The string to append.

**Returns:** void

**Since:** DOCUMENTS 4.0c


### deleteData

`deleteData(offset: number, count: number): void`

Delete a section of the text.

**Parameters:**

- `offset`: `number` — The zero-based position of the first character to delete.
- `count`: `number` — The number of characters to delete.

**Returns:** void

**Since:** DOCUMENTS 4.0c


### insertData

`insertData(offset: number, arg: string): void`

Insert some string into the text.

**Parameters:**

- `offset`: `number` — A zero-based position. On return, the inserted string will begin here.
- `arg`: `string` — The string to insert.

**Returns:** void

**Since:** DOCUMENTS 4.0c


### replaceData

`replaceData(offset: number, count: number, arg: string): void`

Replace a section of the text with a new string.

**Parameters:**

- `offset`: `number` — The zero-based position of the first character to be replaced.
- `count`: `number` — The number of characters to replace.
- `arg`: `string` — The string replacing the old one.

**Returns:** void

**Since:** DOCUMENTS 4.0c


### splitText

`splitText(offset: number): DOMCharacterData`

Split a text node into two.

The new node becomes the next sibling of this node in the tree, and it has got the same nodeType.

Note: Future releases of the API may expose this method only in a new subclass DOMText. See also the W3C conformity remarks in the class description. If a script calls this method on a "Comment" node. it will trigger a JavaScript error, because "Comment" is not derived from "Text" in the standard API.

**Parameters:**

- `offset`: `number` — The zero-based index of the character, which will become the first character of the new node.

**Returns:** DOMCharacterData

**Since:** DOCUMENTS 4.0c


### substringData

`substringData(offset: number, count: number): string`

Extract a substring of the node's text.

**Parameters:**

- `offset`: `number` — The zero-based index of the first character to extract.
- `count`: `number` — The number of characters to extract.

**Returns:** string

**Since:** DOCUMENTS 4.0c