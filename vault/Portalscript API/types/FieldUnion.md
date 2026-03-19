---
title: "FieldUnion | Portalscript API"
source: "https://otris.software/documents/api/portalscript/types/FieldUnion.html"
---

# Type Alias FieldUnion<K>


`FieldUnion: K extends readonly (infer U)[] ? U extends keyof FileTypeFieldsMapper ? keyof FileTypeFieldsMapper[U] : string : K extends keyof FileTypeFieldsMapper ? keyof FileTypeFieldsMapper[K] : string`


#### Type Parameters

- K