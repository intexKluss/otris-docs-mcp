---
title: "Register | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/Register.html"
---

# Interface Register

**The Register class has been added to the DOCUMENTS PortalScripting API to gain full access to the registers of a DOCUMENTS file by scripting means.**


#### Since

ELC 3.50n / otrisPORTAL 5.0n


`interface Register { addFileLink(file: DocFile): boolean; deleteDocument(doc: Document): boolean; getAttribute(attribute: string): string; getDocumentByName(nameWithExt: string): Document; getDocuments(): DocumentIterator; getFieldName(index: number): string; getFile(): DocFile; getFiles(): FileResultset; getHitResultset( hitlist?: any, sortOrder?: string, fulltextFilter?: string, pageSize?: number, ): HitResultset; getLastError(shortMessage?: boolean): string; getLocaleLabel(locale?: string): string; getOID(oidLow?: boolean): string; label: string; moveDocument(doc: Document, position: number): boolean; name: string; removeFileLink(file: DocFile): boolean; setAttribute(attribute: string, value: string): boolean; type: string; uploadDocument(filePath: string, registerFileName: string): Document; }`


## Index


### Properties

- label
- name
- type


### Methods

- addFileLink
- deleteDocument
- getAttribute
- getDocumentByName
- getDocuments
- getFieldName
- getFile
- getFiles
- getHitResultset
- getLastError
- getLocaleLabel
- getOID
- moveDocument
- removeFileLink
- setAttribute
- uploadDocument


## Properties


### Readonlylabel

`label: string`

The entire label of the Register object.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Since:** ELC 3.50n / otrisPORTAL 5.0n

**See:** Register.getLocaleLabel(locale?)


### Readonlyname

`name: string`

The technical name of the Register object.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### Readonlytype

`type: string`

The type of the Register object.

The possible values of the type attribute are listed below:

documents
fields
links
archiveddocuments
externalcall

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Since:** ELC 3.50n / otrisPORTAL 5.0n


## Methods


### addFileLink

`addFileLink(file: DocFile): boolean`

Adds a file to a file link register.

**Parameters:**

- `file`: `DocFile`

**Returns:** boolean

**Since:** DOCUMENTS 5.0d


```ts
var file = context.file;
var linkFile = context.createFile("Filetype1");
var reg = file.getRegisterByName("flReg");
if (!reg.addFileLink(linkFile))
  util.out(reg.getLastError());
```


### deleteDocument

`deleteDocument(doc: Document): boolean`

Delete a Document at the Register.

With the necessary access rights the user can delete a Document at the Register.

**Parameters:**

- `doc`: `Document` — Document to delete

**Returns:** boolean

**Since:** ELC 3.60d / otrisPORTAL 6.0d


```ts
// deleting all documents at a register
var docFile = context.file;
var reg = docFile.getRegisterByName("Documents");
if (reg)
{
   var docs = reg.getDocuments();
   for (var doc = docs.first(); doc; doc = docs.next())
      reg.deleteDocument(doc);
}
```


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the Register.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute

**Returns:** string

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### getDocumentByName

`getDocumentByName(nameWithExt: string): Document`

Get the document by its full name.

**Parameters:**

- `nameWithExt`: `string` — String containing the document name with extension.

**Returns:** Document

**Since:** DOCUMENTS 5.0f


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("testReg");
if (reg)
{
  var doc = reg.getDocumentByName("test.txt");
  if (doc)
  {
      var content = doc.readAsString();
      if (content == "")
          throw doc.getLastError();
  }
}
```


### getDocuments

`getDocuments(): DocumentIterator`

Retrieve a list of all Documents stored on the given Register.

This method is available for documents registers only. You cannot use it with different types of Register objects.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** DocumentIterator

**Since:** ELC 3.50n / otrisPORTAL 5.0n


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Documents");
var docIter = reg.getDocuments();
for (var doc = docIter.first(); doc; doc = docIter.next())
{
   util.out(doc.fullname);
}
```


### getFieldName

`getFieldName(index: number): string`

Get the technical name of the n-th field of the register.

**Parameters:**

- `index`: `number` — index of the desired field.

**Returns:** string

**Since:** DOCUMENTS 5.0f

**See:** DocFile.getFieldName


### getFile

`getFile(): DocFile`

Returns the DocFile the Register belongs to.

**Returns:** DocFile

**Since:** DOCUMENTS 5.0c HF1


```ts
var file = context.file;
var reg = file.getRegisterByName("RegisterA");
var alwaysTrue = reg.getFile().getid() == file.getid();
```


### getFiles

`getFiles(): FileResultset`

Retrieve a FileResultset of all DocFile objects linked to the register.

**Returns:** FileResultset

**Since:** DOCUMENTS 4.0b


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("LinksReg");
if (reg)
{
   var myFRS = reg.getFiles();
   for (var file = myFRS.first(); file; file = myFRS.next())
      util.out(file.getAutoText("title"));
}
```


### getHitResultset

`getHitResultset( hitlist?: any, sortOrder?: string, fulltextFilter?: string, pageSize?: number, ): HitResultset`

Create a HitResultset with the query parameters taken from a link register.

When called on a register of type "link tab" this method executes the same search request as the one, which is usually triggered by a click on the tab in the web client. With a few exceptions an additional fulltext filter can be applied. The results are encapsulated in a HitResultset object. For all other register types the method simply returns null.

Note: On a failed search request the function does not throw errors. To detect this kind of errors scripts should call HitResultset.getLastErrorCode() or HitResultset.getLastError() on the returned object.

Note: When used, the hitlist parameter typically is a string with the pattern "file_type.hit_list". In unambiguous cases a pure hit list name is accepted, too. The hitlist parameter can instead be an array of strings, where each element declares an individual column (recommended pattern: "file_type.field"). Other valid array elements are reserved attribute column names like "DlcFile_Title". Restriction: If a folder references an EE.i or EE.x native system, only the plain name of a hit list of the folders's primary data source (view or archive) is accepted as the hitlist parameter. A few registers are incapable of fulltext searching. An example is a register with an API-Style filter expression, which uses the "OR" keyword. In this case the function returns an empty resultset with an attached error message, if the fulltextFilter parameter is not empty. To detect in advance, if such an operation can succeed, scripts may first create an unfiltered resultset and examine its property searchability.

**Parameters:**

- `hitlist`: `any` — Optional String or Array with a hit list template specification to override the register's default. See remarks.
- `sortOrder`: `string` — Optional sort expression to override the register's default sort order.
- `fulltextFilter`: `string` — Optional fulltext filter expression. Not applicable to all registers. See remarks.
- `pageSize`: `number` — This is a memory-saving and performance-tuning option. If the parameter is zero, Documents will load all available hits at once. If the parameter is a positive value, Documents will initially load only the requested number of hits as a first page. In order to access each further page, a call to fetchNextPage() is necessary. A negative pageSize value will be replaced by the current user's "hits per page" preference setting.

Default: 0

**Returns:** HitResultset

**Since:** DOCUMENTS 5.0f

**See:** getFiles HitResultset.searchability


### getLastError

`getLastError(shortMessage?: boolean): string`

Function to get the description of the last error that occurred.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files Since: DOCUMENTS 5.0g (new parameter shortMessage)

**Parameters:**

- `shortMessage`: `boolean` — optional Boolean; removes "Error in function: class.method(): " from the message.

Default: false

**Returns:** string

**Since:** ELC 3.50n / otrisPORTAL 5.0n

**See:** DocFile.getLastError


### getLocaleLabel

`getLocaleLabel(locale?: string): string`

Get the ergonomic label of the Register

**Parameters:**

- `locale`: `string` — Optional String value with the locale abbreviation (according to the principal's configuration); if omitted, the current user's portal language is used automatically.

**Returns:** string

**Since:** DOCUMENTS 5.0c HF1


### getOID

`getOID(oidLow?: boolean): string`

Returns the object-id.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files Since: DOCUMENTS 5.0 (new parameter oidLow)

**Parameters:**

- `oidLow`: `boolean` — Optional flag: If true only the id of the Register object (m_oid) will be returned. If false the id of the Register object will be returned together with the id of the corresponding class in the form class-id:m_oid.

Default: false

**Returns:** string

**Since:** ELC 3.60c / otrisPORTAL 6.0c


### moveDocument

`moveDocument(doc: Document, position: number): boolean`

Place the document at the given position in the document list of the register.

Note: 0 at the beginning and -1 at the end; This operation is only available for a register with attachment sort order of 'Manual' and located in an active file.

**Parameters:**

- `doc`: `Document` — Document object to be placed at the given position.
- `position`: `number` — The 0-based position for the document.

**Returns:** boolean

**Since:** DOCUMENTS 6.0


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Doc1");
if (reg)
{
  var doc = reg.getDocumentByName("test.txt");
  if (doc)
  {
      var ret = reg.moveDocument(doc, -1);
      if (!ret)
          util.out(reg.getLastError());
  }
}
```


### removeFileLink

`removeFileLink(file: DocFile): boolean`

Removes a file from a file link register.

**Parameters:**

- `file`: `DocFile`

**Returns:** boolean

**Since:** DOCUMENTS 5.0d


```ts
var file = context.file;
var reg = file.getRegisterByName("flReg");
var frs = reg.getFiles();
for (var linkFile = frs.first(); linkFile; linkFile = frs.next())
{
  if (!reg.removeFileLink(linkFile))
      util.out(reg.getLastError());
}
```


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the Register to the desired value.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### uploadDocument

`uploadDocument(filePath: string, registerFileName: string): Document`

Upload a new Document stored on the server's filesystem to the Register.

The filePath parameter must contain not only the directory path but the filename as well. The registerFileName parameter has the purpose to allow to rename the Document already while uploading it.

Note: After successful upload of the Document the source file on the server's directory structure is removed!

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Parameters:**

- `filePath`: `string` — String containing the filePath and filename of the desired file to be uploaded.

Note: Backslashes contained in the filepath must be quoted with a leading backslash, since the backslash is a special char in ECMAScript!
- `registerFileName`: `string` — String containing the desired target filename of the Document on the Register

**Returns:** Document

**Since:** ELC 3.50n / otrisPORTAL 5.0n


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Documents");
var newDoc = reg.uploadDocument("c:\\tmp\\sourcefile.rtf", "Filename_on_Register.rtf");
if (!newDoc)
   util.out("Error while uploading the file! " + reg.getLastError());
else
   util.out(newDoc.Name);
```