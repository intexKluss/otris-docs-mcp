---
title: "GlobalEnumerationItem | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/GlobalEnumerationItem.html"
---

# Interface GlobalEnumerationItem

**The GlobalEnumerationItem class has been added to the DOCUMENTS Portalscript API to gain full access to the items of the DOCUMENTS global enumerations by scripting means.**

A GlobalEnumerationItem object isn't created directly. You can get it using the [[Portalscript API/interfaces/GlobalEnumeration#createglobalenumerationitem|GlobalEnumeration.createGlobalEnumerationItem(name)]] function.


#### Since

DOCUMENTS 6.0.2


`interface GlobalEnumerationItem { active: boolean; lang0: string; lang1: string; lang2: string; lang3: string; lang4: string; lang5: string; name: string; systemvalue: boolean; }`


## Index


### Properties

- active
- lang0
- lang1
- lang2
- lang3
- lang4
- lang5
- name
- systemvalue


## Properties


### active

`active: boolean`

This property specifies whether the GlobalEnumerationItem is active.

**Since:** DOCUMENTS 6.0.2


### lang0

`lang0: string`

This property specifies the ergonomic value in language 0 of the GlobalEnumerationItem.

**Since:** DOCUMENTS 6.0.2


### lang1

`lang1: string`

This property specifies the ergonomic value in language 1 of the GlobalEnumerationItem.

**Since:** DOCUMENTS 6.0.2


### lang2

`lang2: string`

This property specifies the ergonomic value in language 2 of the GlobalEnumerationItem.

**Since:** DOCUMENTS 6.0.2


### lang3

`lang3: string`

This property specifies the ergonomic value in language 3 of the GlobalEnumerationItem.

**Since:** DOCUMENTS 6.0.2


### lang4

`lang4: string`

This property specifies the ergonomic value in language 4 of the GlobalEnumerationItem.

**Since:** DOCUMENTS 6.0.2


### lang5

`lang5: string`

This property specifies the ergonomic value in language 5 of the GlobalEnumerationItem.

**Since:** DOCUMENTS 6.0.2


### name

`name: string`

The technical name of the GlobalEnumerationItem.

**Since:** DOCUMENTS 6.0.2


### systemvalue

`systemvalue: boolean`

This property specifies whether the GlobalEnumerationItem is a system value.

**Since:** DOCUMENTS 6.0.2