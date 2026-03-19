---
title: "DefaultDocFileType | Portalscript API"
source: "https://otris.software/documents/api/portalscript/types/DefaultDocFileType.html"
---

# Type Alias DefaultDocFileType<T>


`DefaultDocFileType: T extends keyof FileTypeMapper ? FileTypeMapper[T] : DocFile`


#### Type Parameters

- T extends keyof FileTypeMapper | string