---
title: "DocHit | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/DocHit.html"
---

# Interface DocHit<K>

**The DocHit class presents the hit object collected by a HitResultset.**

Objects of this class cannot be created directly. You may access a single DocHit by creating a HitResultset,
which provides functions to retrieve its hit entries.


#### Since

DOCUMENTS 4.0b


#### See

[[Portalscript API/classes/HitResultset#first|HitResultset.first]][[Portalscript API/classes/HitResultset#getat|HitResultset.getAt]]


#### Example


```ts
var searchResource = "Standard";
var filter = "";
var sortOrder = "";
var myFile;
var myHRS = new HitResultset(searchResource, filter, sortOrder);
for (var myHit = myHRS.first(); myHit; myHit = myHRS.next())
{
    if (myHit.isArchiveHit())
        myFile = myHit.getArchiveFile();
    else
        myFile = myHit.getFile();
    if (myFile)
        util.out(myFile.getAutoText("title"));
    else
        util.out(myHit.getLastError());
}
```


`interface DocHit<K extends keyof FileTypeMapper | string = keyof FileTypeMapper> { columnName: any; getArchiveFile(): DocFile; getArchiveKey(withServer?: boolean): string; getBlobInfo(): string; getFile(): K extends never ? FileTypeMapper[K<K>] : DocFile; getFileId(): string; getLastError(): string; getLocalValue(colIndex: number): string; getLocalValueByName(colName: string): string; getSchema(): string; getTechValue(colIndex: number): string; getTechValueByName(colName: string): string; getWebKey(): string; isArchiveHit(): boolean; reload(retestFilters: boolean): number; RELOAD_MISMATCH: number; RELOAD_NO_FILE: number; RELOAD_OK: number; }`


#### Type Parameters

- K extends keyof FileTypeMapper | string = keyof FileTypeMapper


## Index


### Properties

- columnName
- RELOAD_MISMATCH
- RELOAD_NO_FILE
- RELOAD_OK


### Methods

- getArchiveFile
- getArchiveKey
- getBlobInfo
- getFile
- getFileId
- getLastError
- getLocalValue
- getLocalValueByName
- getSchema
- getTechValue
- getTechValueByName
- getWebKey
- isArchiveHit
- reload


## Properties


### columnName

`columnName: any`

Field value, addressed by a known column name.

Each field in a DocHit is mapped to an according property. You can read the value on the basis of the column name.

Note: Overwriting values in a DocHit is not allowed. Each attempt will raise an exception. To read dates and numbers in DOCUMENTS' storage format, see getTechValueByName().

**Since:** DOCUMENTS 5.0HF2


```ts
function logValue(label, value)
{
  util.out(label +" [" +  typeof(value) + "] "  + value);
}
var HRS = new HitResultset("ftOrder", "", "", "HL2");
var hitline = HRS.first();
if(hitline)
{
  // We assume, "ftOrder" has got a string field "company", a
  // date field "orderDate" and a numeric field "netPrice".
  var checkVal = hitline.company;
  logValue("company: ", checkVal);
  checkVal = hitline.orderDate;
  logValue("orderDate: ", checkVal);
  // The next example shows a different way to read "hitline.netPrice".
  // This style is necessary, if the name of a column contains
  // critical characters, or if the name equals a reserved JavaScript keyword.
  checkVal = hitline["netPrice"];
  logValue("orderDate: ", checkVal);
  // Columns can also be addressed by number (0..n-1)
  checkVal = hitline[0];
  logValue("first column: ", checkVal);
}
```


### ReadonlyRELOAD_MISMATCH

`RELOAD_MISMATCH: number`

This constant defines one of the possible return values of DocHit.reload(). These constants are equally available in each instance of DocHit and in the constructor object. RELOAD_MISMATCH means the DocHit has been updated, but a new HitResultset with the same parameters would not contain this hit, either because the hit does no longer match the filter expression or due to modified dynamic permissions (ACL, GACL or classic file class protection). RELOAD_MISMATCH can only occur, if the retestFilters parameter has been true.


### ReadonlyRELOAD_NO_FILE

`RELOAD_NO_FILE: number`

This constant defines one of the possible return values of DocHit.reload(). These constants are equally available in each instance of DocHit and in the constructor object. RELOAD_NO_FILE indicates a failed update. The DocFile behind the DocHit is no longer available. reload() may return this value also when a server shutdown has begun.


### ReadonlyRELOAD_OK

`RELOAD_OK: number`

This constant defines one of the possible return values of DocHit.reload(). These constants are equally available in each instance of DocHit and in the constructor object. RELOAD_OK indicates a successful update of the DocHit or an empty operation in the case of an archive hit.


## Methods


### getArchiveFile

`getArchiveFile(): DocFile`

Get a file from the archive associated to the archive hit.

You need the necessary access rights on the archive side.

Note: This function creates a complete DOCUMENTS image of the archived file, except for the content of attachments. This is a time-consuming workstep. If a script calls this function for each hit in the set, it will not run any faster than a script, which uses a conventional ArchiveFileResultset instead of this class.

**Returns:** DocFile

**Since:** DOCUMENTS 4.0b

**See:** getFile


### getArchiveKey

`getArchiveKey(withServer?: boolean): string`

Retrieve the key of the associated archive file object.

**Parameters:**

- `withServer`: `boolean` — optional boolean value to indicate, if the key should include an "@archiveServerName" appendix Default: true

**Returns:** string

**Since:** DOCUMENTS 4.0b

**See:** getFileId


### getBlobInfo

`getBlobInfo(): string`

Function to get the blob info of the hit as xml.

**Returns:** string

**Since:** DOCUMENTS 5.0c


### getFile

`getFile(): K extends never ? FileTypeMapper[K<K>] : DocFile`

Get the file associated to the hit.

If the file does not exist or the user in whose context the script is executed is not allowed to access the file, then the return value will be null.

**Returns:** K extends never ? FileTypeMapper[K<K>] : DocFile

**Since:** DOCUMENTS 4.0b

**See:** getArchiveFile


### getFileId

`getFileId(): string`

Get the file id of the associated file object.

**Returns:** string

**Since:** DOCUMENTS 4.0b

**See:** getArchiveKey


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** DOCUMENTS 4.0b


### getLocalValue

`getLocalValue(colIndex: number): string`

Get the local value of an available column.

**Parameters:**

- `colIndex`: `number` — The zero-based index of the column.

**Returns:** string

**Since:** DOCUMENTS 4.0b

**See:** getLocalValueByName


### getLocalValueByName

`getLocalValueByName(colName: string): string`

Get the local value of an available column.

Note: Accesing a column by its index is a bit faster than by its name.

**Parameters:**

- `colName`: `string` — The name of the column.

**Returns:** string

**Since:** DOCUMENTS 4.0b

**See:** getLocalValue


### getSchema

`getSchema(): string`

Get a schema identifier of the archive hit.

Note: For EE.i, the value is an archive identifier in the XML-Server's notation. For EDA it is just the name of a filetype. All values come with an "@Servername" appendix.

**Returns:** string

**Since:** DOCUMENTS 4.0b


### getTechValue

`getTechValue(colIndex: number): string`

Get the technical value of an available column.

Note: The function returns dates, timestamps and numbers in DOCUMENTS' storage format. (In the DOCUMENTS Manager see menu 'Documents/Settings', dialog page 'Locale/format', group 'Format settings'.) If you prefer JavaScript numbers and dates, simply use the object like an array: myDocHit[colIndex].

**Parameters:**

- `colIndex`: `number` — The zero-based index of the column.

**Returns:** string

**Since:** DOCUMENTS 4.0b

**See:** getTechValueByName


### getTechValueByName

`getTechValueByName(colName: string): string`

Get the technical value of an available column.

Note: Accessing a column by its index is a bit faster than by its name.

Note: The function returns dates, timestamps and numbers in DOCUMENTS' storage format. (In the DOCUMENTS Manager see menu 'Documents/Settings', dialog page 'Locale/format', group 'Format settings'.) If you prefer JavaScript numbers and dates, you can simply read the columns as a property DocHit.columnName.

**Parameters:**

- `colName`: `string` — The name of the column.

**Returns:** string

**Since:** DOCUMENTS 4.0b

**See:** getTechValue DocHit.columnName


### getWebKey

`getWebKey(): string`

Function to get webkey to use in the WebClient.

**Returns:** string

**Since:** DOCUMENTS 5.0f


### isArchiveHit

`isArchiveHit(): boolean`

Function to test whether the associated file is an archive file.

**Returns:** boolean

**Since:** DOCUMENTS 4.0b


### reload

`reload(retestFilters: boolean): number`

Load updated values into the DocHit. The values in a DocHit usually refer to the time at which the HitResultset was created, or at which the current page of hits was loaded. If the DocHit is not an archive hit, this function loads the actual values of the DocFile into this DocHit.

**Parameters:**

- `retestFilters`: `boolean` — Indicator, whether the function shall verify the validity of the DocHit with respect to the HitResultset's filter and dynamic permissions such as GACLs.

**Returns:** number

**Since:** DOCUMENTS 6.1.0

**See:** DocHit.RELOAD_OK, DocHit.RELOAD_NO_FILE, DocHit.RELOAD_MISMATCH