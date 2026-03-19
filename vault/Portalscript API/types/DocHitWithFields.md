---
title: "DocHitWithFields | Portalscript API"
source: "https://otris.software/documents/api/portalscript/types/DocHitWithFields.html"
---

# Type Alias DocHitWithFields<K, HL>


`DocHitWithFields: DocHit< NormalizeKeyForMapper<K> extends never ? string : NormalizeKeyForMapper<K>, > & { getFile(): NormalizeKeyForMapper<K> extends never ? DocFile : FileTypeMapper[NormalizeKeyForMapper<K>]; } & ( HL extends readonly any[] ? { [P in HitlistKeys<HL> & string]: FieldTypeFromKeys< NormalizeKeyForMapper<K>, P, > } : {} )`

DocHitWithFields<K, HL>

- K kann ein einzelner FileType-Key oder ein Array von FileType-Keys sein
- HL kann ein string (named hitlist) oder ein Array von field-name literals sein

Verhalten:

- getFile() liefert die zu K passenden FileType(s) (Union, wenn K mehrere sind)
- für HL als Array: nur die Feldnamen aus diesem Array werden als Properties erzeugt
- für HL als string: keine Feld-Properties (named hitlist — keine compile-time columns)


#### Type Parameters

- K
- HL extends readonly any[] | string = string