---
title: "DefaultFieldMapperType | Portalscript API"
source: "https://otris.software/documents/api/portalscript/types/DefaultFieldMapperType.html"
---

# Type Alias DefaultFieldMapperType<T>


`DefaultFieldMapperType: T extends keyof FileTypeFieldsMapper ? keyof FileTypeFieldsMapper[T] : string`


#### Type Parameters

- T extends keyof FileTypeMapper | string