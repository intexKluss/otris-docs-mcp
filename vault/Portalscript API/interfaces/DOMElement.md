---
title: "DOMElement | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DOMElement.html"
---

# Interface DOMElement

**An object of this class represents a HTML or XML element in the DOM.**

DOMElements cannot be created directly. This applies to almost all kinds of DOMNodes.
**Remarks about W3C conformity**
The class conforms to the Element interface of DOM level 2.

**Since:** DOCUMENTS 4.0c (DOM level 1)
**Since:** DOCUMENTS 5.0f (DOM level 2)


#### Since

DOCUMENTS 4.0c


`interface DOMElement { getAttribute(name: string): string; getAttributeNode(name: string): DOMAttr; getAttributeNodeNS(namespaceURI: string, localName: string): DOMAttr; getAttributeNS(namespaceURI: string, localName: string): string; getElementsByTagName(tagName: string): DOMNodeList; getElementsByTagNameNS( namespaceURI: string, localName: string, ): DOMNodeList; hasAttribute(name: string): boolean; hasAttributeNS(namespaceURI: string, localName: string): boolean; removeAttribute(name: string): void; removeAttributeNode(oldAttr: DOMAttr): DOMAttr; removeAttributeNS(namespaceURI: string, localName: string): any; setAttribute(name: string, value: string): void; setAttributeNode(newAttr: DOMAttr): DOMAttr; setAttributeNodeNS(newAttr: DOMAttr): DOMAttr; setAttributeNS( namespaceURI: string, qualifiedName: string, value: string, ): any; tagName: string; }`


## Index


### Properties

- tagName


### Methods

- getAttribute
- getAttributeNode
- getAttributeNodeNS
- getAttributeNS
- getElementsByTagName
- getElementsByTagNameNS
- hasAttribute
- hasAttributeNS
- removeAttribute
- removeAttributeNode
- removeAttributeNS
- setAttribute
- setAttributeNode
- setAttributeNodeNS
- setAttributeNS


## Properties


### tagName

`tagName: string`

The name of the element.

This property is readonly.

**Since:** DOCUMENTS 4.0c


## Methods


### getAttribute

`getAttribute(name: string): string`

Get the string value of an attribute of this element.

**Parameters:**

- `name`: `string` — The name of the attribute

**Returns:** string

**Since:** DOCUMENTS 4.0c


### getAttributeNode

`getAttributeNode(name: string): DOMAttr`

Get an attribute of this element.

**Parameters:**

- `name`: `string` — The attribute's name

**Returns:** DOMAttr


### getAttributeNodeNS

`getAttributeNodeNS(namespaceURI: string, localName: string): DOMAttr`

Retrieves a DOMAttr node by local name and namespace URI.

**Parameters:**

- `namespaceURI`: `string` — The namespace URI of the attribute to retrieve.
- `localName`: `string` — The local name of the attribute to retrieve.

**Returns:** DOMAttr

**Since:** DOCUMENTS 5.0f


### getAttributeNS

`getAttributeNS(namespaceURI: string, localName: string): string`

Retrieves an attribute value by local name and namespace URI.

**Parameters:**

- `namespaceURI`: `string` — The namespace URI of the attribute to retrieve.
- `localName`: `string` — The local name of the attribute to retrieve.

**Returns:** string

**Since:** DOCUMENTS 5.0f


### getElementsByTagName

`getElementsByTagName(tagName: string): DOMNodeList`

List all DOMElements in the subtree with a certain tag name.

The order of the elements in the returned list corresponds to a preorder traversal of the DOM tree.

**Parameters:**

- `tagName`: `string` — The name to match on. The special value "*" matches all tags.

**Returns:** DOMNodeList

**Since:** DOCUMENTS 4.0c

**See:** DOMNodeList


### getElementsByTagNameNS

`getElementsByTagNameNS(namespaceURI: string, localName: string): DOMNodeList`

Returns a DOMNodeList of all the descendant DOMElements with a given local name and namespace URI.

The elements are listed in the order in which they are encountered in a preorder traversal of this element tree.

**Parameters:**

- `namespaceURI`: `string` — The namespace URI of the elements to match on. The special value "*" matches all namespaces.
- `localName`: `string` — The local name of the elements to match on. The special value "*" matches all local names.

**Returns:** DOMNodeList

**Since:** DOCUMENTS 5.0f


### hasAttribute

`hasAttribute(name: string): boolean`

Test whether an attribute with the given name is specified on this element or has a default value.

**Parameters:**

- `name`: `string` — The name of the attribute to look for.

**Returns:** boolean

**Since:** DOCUMENTS 5.0f


### hasAttributeNS

`hasAttributeNS(namespaceURI: string, localName: string): boolean`

Test whether an attribute with the given local name and namespace URI is specified on this element or has a default value.

**Parameters:**

- `namespaceURI`: `string` — The namespace URI of the attribute to look for.
- `localName`: `string` — The local name of the attribute to look for.

**Returns:** boolean

**Since:** DOCUMENTS 5.0f


### removeAttribute

`removeAttribute(name: string): void`

Remove an attribute from this element by name.

**Parameters:**

- `name`: `string` — The attribute's name

**Returns:** void

**Since:** DOCUMENTS 4.0c


### removeAttributeNode

`removeAttributeNode(oldAttr: DOMAttr): DOMAttr`

Remove an attribute node from this element.

**Parameters:**

- `oldAttr`: `DOMAttr` — The attribute object to remove

**Returns:** DOMAttr

**Since:** DOCUMENTS 4.0c


### removeAttributeNS

`removeAttributeNS(namespaceURI: string, localName: string): any`

Removes an attribute by local name and namespace URI.

If the removed attribute has a default value it is immediately replaced. The replacing attribute has the same namespace URI and local name, as well as the original prefix.

**Parameters:**

- `namespaceURI`: `string` — The namespace URI of the attribute to remove.
- `localName`: `string` — The local name of the attribute to remove.

**Returns:** any

**Since:** DOCUMENTS 5.0f


### setAttribute

`setAttribute(name: string, value: string): void`

Set an attribute of this element by string.

If an attribute of the given name exists, the method only updates its value. Otherwise it creates the attribute.

**Parameters:**

- `name`: `string` — The attribute's name
- `value`: `string` — The new value of the attribute

**Returns:** void

**Since:** DOCUMENTS 4.0c


### setAttributeNode

`setAttributeNode(newAttr: DOMAttr): DOMAttr`

Attach an attribute node to this element.

**Parameters:**

- `newAttr`: `DOMAttr` — The DOMAttr object, which defines the attribute to add or replace.

**Returns:** DOMAttr

**Since:** DOCUMENTS 4.0c


### setAttributeNodeNS

`setAttributeNodeNS(newAttr: DOMAttr): DOMAttr`

Adds a new attribute.

If an attribute with that local name and that namespace URI is already present in the element, it is replaced by the new one.

**Parameters:**

- `newAttr`: `DOMAttr` — The DOMAttr node to add to the attribute list.

**Returns:** DOMAttr

**Since:** DOCUMENTS 5.0f


### setAttributeNS

`setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): any`

Adds a new attribute or overwrites it.

If an attribute with the same local name and namespace URI is already present on the element, its prefix is changed to be the prefix part of the qualifiedName, and its value is changed to be the value parameter.

Note: The assigned value is a simple string; it is not parsed as it is being set. So any markup (such as syntax to be recognized as an entity reference) is treated as literal text. In order to assign an attribute value that contains entity references, the user must create a DOMAttr node plus any Text and EntityReference nodes, build the appropriate subtree, and use setAttributeNodeNS() or setAttributeNode() to assign it as the value of an attribute.

**Parameters:**

- `namespaceURI`: `string` — The namespace URI of the attribute to create or alter.
- `qualifiedName`: `string` — The qualified name of the attribute to create or alter.
- `value`: `string` — The value to set in string form.

**Returns:** any

**Since:** DOCUMENTS 5.0f