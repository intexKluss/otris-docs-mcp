---
title: "NormalizeToKeys | Portalscript API"
source: "https://otris.software/documents/api/portalscript/types/NormalizeToKeys.html"
---

# Type Alias NormalizeToKeys<K>


`NormalizeToKeys: K extends readonly (infer U)[] ? U extends DefaultingFileTypeMapper ? U : string : K extends DefaultingFileTypeMapper ? K : string`


#### Type Parameters

- K