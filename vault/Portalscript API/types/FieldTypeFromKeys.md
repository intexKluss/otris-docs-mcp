---
title: "FieldTypeFromKeys | Portalscript API"
source: "https://otris.software/documents/api/portalscript/types/FieldTypeFromKeys.html"
---

# Type Alias FieldTypeFromKeys<KUnion, P>


`FieldTypeFromKeys: KUnion extends keyof FileTypeFieldsMapper ? P extends keyof FileTypeFieldsMapper[KUnion] ? FileTypeFieldsMapper[KUnion][P] : never : never`


#### Type Parameters

- KUnion
- P extends string