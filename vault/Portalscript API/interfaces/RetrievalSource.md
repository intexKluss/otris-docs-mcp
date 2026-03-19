---
title: "RetrievalSource | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/RetrievalSource.html"
---

# Interface RetrievalSource

**This class describes a searchable resource in the DOCUMENTS retrieval system.**


#### Since

DOCUMENTS 4.0c HF2


`interface RetrievalSource { MST_EAS_ONLY: number; MST_EAS_SERVER: number; resId: string; server: string; ST_DLC_FILETYPE: number; ST_EAS_FILETYPE: number; ST_EEI_ARCHIVE: number; ST_EEX_USERVIEW: number; ST_EEX_VIEW: number; type: number; }`


## Index


### Properties

- resId
- server
- type


### Searchable Resource

These constants are equally available in each instance of RetrievalSource and in the constructor object. Resource macroes can only
occur in the "FillSearchMask" exit. Within an "OnSearch" exit they have already been replaced by their single components.

- MST_EAS_ONLY
- MST_EAS_SERVER
- ST_DLC_FILETYPE
- ST_EAS_FILETYPE
- ST_EEI_ARCHIVE
- ST_EEX_USERVIEW
- ST_EEX_VIEW


## Properties


### resId

`resId: string`

A identifier of the resource.

For conventional file type resources the identifier equals the technical name of the file type. Archive related identifiers consist of a software dependent key or name plus an "@serverName" appendix.

Note: Modifications of this property won't be forwarded to the retrieval system.

**Since:** DOCUMENTS 4.0c


### server

`server: string`

For archive resources: the technical name of the archive server. Otherwise empty.

Note: Modifications of this property won't be forwarded to the retrieval system.

**Since:** DOCUMENTS 4.0c


### type

`type: number`

The resource type encoded as an integer. See the enumeration constants in this class.

Note: Modifications of this property won't be forwarded to the retrieval system.

**Since:** DOCUMENTS 4.0c


## Searchable Resource


### ReadonlyMST_EAS_ONLY

`MST_EAS_ONLY: number`

Integer code of the macro source type "EAS only" (Remove standard file type sources after MST_EAS_SERVER macro expansion)

Note: A "FillSearchMask" script can usually find a source of this type, when the user has deselected the "actual processes" checkbox. This source has not got any parameters. If there are user accounts in the system, for which the checkbox does not show up, the script code should not interpret this source type at all.


### ReadonlyMST_EAS_SERVER

`MST_EAS_SERVER: number`

Integer code of the macro source type "EAS server" (Apply selected file types also to the identified EDA-store)


### ReadonlyST_DLC_FILETYPE

`ST_DLC_FILETYPE: number`

Integer code of the source type "DOCUMENTS file type"


### ReadonlyST_EAS_FILETYPE

`ST_EAS_FILETYPE: number`

Integer code of the source type "DOCUMENTS file type within an EAS/EDA store"


### ReadonlyST_EEI_ARCHIVE

`ST_EEI_ARCHIVE: number`

Integer code of the source type "EASY ENTERPRISE.i archive"


### ReadonlyST_EEX_USERVIEW

`ST_EEX_USERVIEW: number`

Integer code of the source type "EASY ENTERPRISE.x user specific view"


### ReadonlyST_EEX_VIEW

`ST_EEX_VIEW: number`

Integer code of the source type "EASY ENTERPRISE.x view"