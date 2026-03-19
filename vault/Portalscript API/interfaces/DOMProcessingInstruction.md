---
title: "DOMProcessingInstruction | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DOMProcessingInstruction.html"
---

# Interface DOMProcessingInstruction

**A DOMProcessingInstruction object represents a "processing instruction", used in XML as a way to keep processor-specific information in the text of the document.**


`interface DOMProcessingInstruction { data: string; target: string; }`


## Index


### Properties

- data
- target


## Properties


### data

`data: string`

The content of this processing instruction.

This is from the first non white space character after the target to the character immediately preceding the "?>".


### target

`target: string`

The target of this processing instruction.

XML defines this as being the first token following the markup that begins the processing instruction. This property is readonly.