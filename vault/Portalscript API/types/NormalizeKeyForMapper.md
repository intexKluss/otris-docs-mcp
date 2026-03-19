---
title: "NormalizeKeyForMapper | Portalscript API"
source: "https://otris.software/documents/api/portalscript/types/NormalizeKeyForMapper.html"
---

# Type Alias NormalizeKeyForMapper<K>


`NormalizeKeyForMapper: K extends readonly (infer U)[] ? Extract<U, keyof FileTypeMapper> : K extends keyof FileTypeMapper ? K : never`


#### Type Parameters

- K