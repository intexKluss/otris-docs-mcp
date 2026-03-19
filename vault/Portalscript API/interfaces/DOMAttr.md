---
title: "DOMAttr | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DOMAttr.html"
---

# Interface DOMAttr

**This class models a single attribute of a DOMElement.**

DOMAttrs cannot be created directly. This applies to almost all kinds of DOMNodes.
**Remarks about W3C conformity**
The class conforms to the Attribute interface of DOM level 2.

**Since:** DOCUMENTS 5.0f (DOM level 2)


#### Since

DOCUMENTS 4.0c (DOM level 1)


`interface DOMAttr { name: string; ownerElement: DOMElement; specified: boolean; value: string; }`


## Index


### Properties

- name
- ownerElement
- specified
- value


## Properties


### name

`name: string`

The name of the attribute.

This property is readonly.

**Since:** DOCUMENTS 4.0c


### ownerElement

`ownerElement: DOMElement`

The DOMElement node this attribute is attached to or null if this attribute is not in use.

This property is readonly.

**Since:** DOCUMENTS 5.0f


### specified

`specified: boolean`

A flag to test, whether the attribute's value has been explicitly specified.

The flag is true, if the value was explicitly contained in a parsed document. The flag is also true, if the script has set the property "value" of this DOMAttr object. The flag is false, if the value came from a default value declared in a DTD. The flag is readonly.

**Since:** DOCUMENTS 4.0c


### value

`value: string`

The value of the attribute as a string.

Character and general entity references are replaced with their values.

**Since:** DOCUMENTS 4.0c