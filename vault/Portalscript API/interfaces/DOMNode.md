---
title: "DOMNode | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DOMNode.html"
---

# Interface DOMNode

**DOMNode is the base class of all tree elements in a DOMDocument.**

DOMNodes cannot be created with `new`. Different create methods of DOMDocument can be used to create different types of nodes.
As an exception the subclasses DOMDocument and DOMDocumentType have a constructor.

**Note:** Accessing any node may generate a JavaScript error, when the owning document has been deleted or "garbage collected". See the negative example at class DOMDocument.

**Remarks about W3C conformity**

The class widely conforms to the Node interface of DOM level 2. Only the function isSupported() does not work as expected. It should not be used.
The above-mentioned constructors of DOMDocument and DOMDocumentType are non-standard. They are a simplifying substitute of the unsupported standard interface `DOMImplementation`.

**Since:** DOCUMENTS 5.0f (DOM level 2)


#### Since

DOCUMENTS 4.0c (DOM level 1)


`interface DOMNode { appendChild(newChild: DOMNode): DOMNode; ATTRIBUTE_NODE: number; attributes: DOMNamedNodeMap; CDATA_SECTION_NODE: number; childNodes: DOMNode[]; cloneNode(deep: boolean): DOMNode; COMMENT_NODE: number; DOCUMENT_FRAGMENT_NODE: number; DOCUMENT_NODE: number; DOCUMENT_TYPE_NODE: number; ELEMENT_NODE: number; ENTITY_NODE: number; ENTITY_REFERENCE_NODE: number; firstChild: DOMNode; hasAttributes(): boolean; hasChildNodes(): boolean; insertBefore(newChild: DOMNode, refChild: DOMNode): DOMNode; lastChild: DOMNode; localName: string; namespaceURI: string; nextSibling: DOMNode; nodeName: string; nodeType: number; nodeValue: string; normalize(): void; NOTATION_NODE: number; ownerDocument: DOMDocument; parentNode: DOMNode; prefix: string; previousSibling: DOMNode; PROCESSING_INSTRUCTION_NODE: number; removeChild(oldChild: DOMNode): DOMNode; replaceChild(newChild: DOMNode, oldChild: DOMNode): DOMNode; TEXT_NODE: number; }`


## Index


### Properties

- attributes
- childNodes
- firstChild
- lastChild
- localName
- namespaceURI
- nextSibling
- nodeName
- nodeType
- nodeValue
- ownerDocument
- parentNode
- prefix
- previousSibling


### Methods

- appendChild
- cloneNode
- hasAttributes
- hasChildNodes
- insertBefore
- normalize
- removeChild
- replaceChild


### Node Type Constants

These constants build an enumeration of the possible values of the property nodeType. The constants are also properties of the constructor,
so it is possible to read them in the style `DOMNode.ELEMENT_NODE`.

- ATTRIBUTE_NODE
- CDATA_SECTION_NODE
- COMMENT_NODE
- DOCUMENT_FRAGMENT_NODE
- DOCUMENT_NODE
- DOCUMENT_TYPE_NODE
- ELEMENT_NODE
- ENTITY_NODE
- ENTITY_REFERENCE_NODE
- NOTATION_NODE
- PROCESSING_INSTRUCTION_NODE
- TEXT_NODE


## Properties


### attributes

`attributes: DOMNamedNodeMap`

A map of DOM attributes. If this node is not a DOMElement, the value is null. The property is readonly.


### childNodes

`childNodes: DOMNode[]`

A list of all children of this node. The property is readonly.


### firstChild

`firstChild: DOMNode`

The first child node, otherwise null. The property is readonly.


### lastChild

`lastChild: DOMNode`

The last child node, otherwise null. The property is readonly.


### localName

`localName: string`

The local part of the qualified name of this node.

This property is readonly.

Note: For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE and nodes created with a DOM Level 1 method, such as DOMDocument.createElement(), this is always null.

**Since:** DOCUMENTS 5.0f


### namespaceURI

`namespaceURI: string`

The namespace URI of this node, or null if it is unspecified.

This property is readonly.

Note: This is not a computed value that is the result of a namespace lookup based on an examination of the namespace declarations in scope. It is merely the namespace URI given at creation time. Per the "Namespaces in XML" Specification an attribute does not inherit its namespace from the element it is attached to. If an attribute is not explicitly given a namespace, it simply has no namespace.

Note: For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE and nodes created with a DOM Level 1 method, such as DOMDocument.createElement(), this is always null.

**Since:** DOCUMENTS 5.0f


### nextSibling

`nextSibling: DOMNode`

The next sibling node, otherwise null. The property is readonly.


### nodeName

`nodeName: string`

The name of this node. The property is readonly.


### nodeType

`nodeType: number`

The type or subclass of a this node, encoded as an integer. The property is readonly.


### nodeValue

`nodeValue: string`

The value of the node, which depends on the type.

For several node types, the value is constantly an empty string. See also the W3C documentation in the internet.


### ownerDocument

`ownerDocument: DOMDocument`

The document, which owns this node. The property is readonly.


### parentNode

`parentNode: DOMNode`

The parent node or null. The property is readonly.


### prefix

`prefix: string`

The namespace prefix of this node, or null if it is unspecified.

Note: Note that setting this attribute, when permitted, changes the nodeName attribute, which holds the qualified name, as well as the DOMElement.tagName and DOMAttr.name attributes, when applicable. Note also that changing the prefix of an attribute that is known to have a default value, does not make a new attribute with the default value and the original prefix appear, since the namespaceURI and localName do not change.

Note: For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE and nodes created with a DOM Level 1 method, such asDOMDocument.createElement(), this is always null.

**Since:** DOCUMENTS 5.0f


### previousSibling

`previousSibling: DOMNode`

The previous sibling node, otherwise null. The property is readonly.


## Methods


### appendChild

`appendChild(newChild: DOMNode): DOMNode`

Append a new node to the list of child nodes.

**Parameters:**

- `newChild`: `DOMNode` — The DOMNode to append.

**Returns:** DOMNode

**Since:** DOCUMENTS 4.0c


### cloneNode

`cloneNode(deep: boolean): DOMNode`

Create a duplicate of this node.

Note: The returned node initially has not got a parent.

**Parameters:**

- `deep`: `boolean` — true to clone also the whole subtree, false to clone only the node (including the attributes, if it is a DOMElement).

**Returns:** DOMNode

**Since:** DOCUMENTS 4.0c

**See:** DOMDocument.importNode(DOMNode source, boolean deep) to copy nodes from another document.


### hasAttributes

`hasAttributes(): boolean`

Test, whether a node has got any associated attributes.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


### hasChildNodes

`hasChildNodes(): boolean`

Test, whether a node has got any associated child nodes.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


### insertBefore

`insertBefore(newChild: DOMNode, refChild: DOMNode): DOMNode`

Insert a new node into the list of child nodes.

**Parameters:**

- `newChild`: `DOMNode` — The DOMNode to insert.
- `refChild`: `DOMNode` — An existing DOMNode, which already is a child of this, and which shall become the next sibling of newChild.

**Returns:** DOMNode

**Since:** DOCUMENTS 4.0c


### normalize

`normalize(): void`

Normalize the node ans its subtree.

This method restructures a DOMDocument (or a subtree of it) as if the document was written to a string and reparsed from it. Subsequent "Text" nodes without any interjacent markup are combined into one node, for example.

**Returns:** void

**Since:** DOCUMENTS 4.0c


### removeChild

`removeChild(oldChild: DOMNode): DOMNode`

Remove a node from the list of child nodes.

**Parameters:**

- `oldChild`: `DOMNode` — The child DOMNode being removed.

**Returns:** DOMNode

**Since:** DOCUMENTS 4.0c


### replaceChild

`replaceChild(newChild: DOMNode, oldChild: DOMNode): DOMNode`

Replace a node in the list of child nodes.

**Parameters:**

- `newChild`: `DOMNode` — The DOMNode to insert.
- `oldChild`: `DOMNode` — The child DOMNode being replaced.

**Returns:** DOMNode

**Since:** DOCUMENTS 4.0c


## Node Type Constants


### ATTRIBUTE_NODE

`ATTRIBUTE_NODE: number`

Constant for the nodeType "Attr". The actual subclass is DOMAttr.


### CDATA_SECTION_NODE

`CDATA_SECTION_NODE: number`

Constant for the nodeType "CDATASection". The actual subclass is DOMCharacterData, differing from the standard.


### COMMENT_NODE

`COMMENT_NODE: number`

Constant for the nodeType "Comment". The actual subclass is DOMCharacterData, differing from the standard.


### DOCUMENT_FRAGMENT_NODE

`DOCUMENT_FRAGMENT_NODE: number`

Constant for the nodeType "DocumentFragment". The actual implementation does not provide a subclass for this type.


### DOCUMENT_NODE

`DOCUMENT_NODE: number`

Constant for the nodeType "Document". The actual subclass is DOMDocument.


### DOCUMENT_TYPE_NODE

`DOCUMENT_TYPE_NODE: number`

Constant for the nodeType "DocumentType". The actual subclass is DOMDocumentType.


### ELEMENT_NODE

`ELEMENT_NODE: number`

Constant for the nodeType "Element". The actual subclass is DOMElement.


### ENTITY_NODE

`ENTITY_NODE: number`

Constant for the nodeType "Entity". The actual subclass is DOMEntity.


### ENTITY_REFERENCE_NODE

`ENTITY_REFERENCE_NODE: number`

Constant for the nodeType "EntityReference". The actual implementation does not provide a subclass for this type.


### NOTATION_NODE

`NOTATION_NODE: number`

Constant for the nodeType "Notation". The actual subclass is DOMEntity, differing from the standard.


### PROCESSING_INSTRUCTION_NODE

`PROCESSING_INSTRUCTION_NODE: number`

Constant for the nodeType "ProcessingInstruction". The actual subclass is DOMProcessingInstruction.


### TEXT_NODE

`TEXT_NODE: number`

Constant for the nodeType "Text". The actual subclass is DOMCharacterData, differing from the standard.