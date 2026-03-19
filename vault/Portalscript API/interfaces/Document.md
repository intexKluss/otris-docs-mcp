---
title: "Document | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/Document.html"
---

# Interface Document

**The Document class has been added to the DOCUMENTS PortalScripting API to gain full access to the documents stored on registers of a DOCUMENTS file by scripting means.**

**Since:** ELC 3.60i / otrisPORTAL 6.0i available for archive files


#### Since

ELC 3.50n / otrisPORTAL 5.0n


`interface Document { bytes: number; comment: string; deleteDocument(): boolean; deleteVersion(version: string): boolean; doOCR( ocrOutputFormat?: string, ocrTextFormat?: string, ocrTextTarget?: string, background?: boolean, force?: boolean, ): string; downloadDocument(filePath?: string, version?: string): string; encrypted: boolean; extension: string; extractText(version?: string, options?: string): string; fullname: string; getActiveVersion(): string; getAsImages( maxSize: number, format?: string, startPage?: number, endPage?: number, ): string[]; getAsPDF(): string; getAttribute(attribute: string): string; getDocumentContent(): string; getLastError(shortMessage?: boolean): string; getOID(oidLow?: boolean): string; getRegister(): Register; getVersions(): string[]; hash(hashfunction: string, version?: string): string; hasOcrFlag(): boolean; hasWords(minWords?: number, version?: string): boolean; id: string; moveToDocFile(targetFile: DocFile, targetRegister: Register): boolean; moveToRegister(regObj: Register): boolean; name: string; readAsString(version?: string): string; reindexBlob(): boolean; setActiveVersion(version: string): boolean; setAttribute(attribute: string, value: string): boolean; setDocumentContent(docContent: string): boolean; setDocumentName(nameWithExt: string): boolean; size: string; uploadDocument(sourceFilePath: string, versioning?: boolean): boolean; }`


## Index


### Properties

- bytes
- comment
- encrypted
- extension
- fullname
- id
- name
- size


### Methods

- deleteDocument
- deleteVersion
- doOCR
- downloadDocument
- extractText
- getActiveVersion
- getAsImages
- getAsPDF
- getAttribute
- getDocumentContent
- getLastError
- getOID
- getRegister
- getVersions
- hash
- hasOcrFlag
- hasWords
- moveToDocFile
- moveToRegister
- readAsString
- reindexBlob
- setActiveVersion
- setAttribute
- setDocumentContent
- setDocumentName
- uploadDocument


## Properties


### Readonlybytes

`bytes: number`

The file size of the Document object in bytes.

**Since:** DOCUMENTS 4.0e

**See:** Document.size


### Readonlycomment

`comment: string`

The comment of the Document object.

**Since:** DOCUMENTS 5.0d HF1


### Readonlyencrypted

`encrypted: boolean`

Info, if the blob is encrypted in the repository.

**Since:** DOCUMENTS 4.0d HF3


### Readonlyextension

`extension: string`

The extension of the Document object.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### Readonlyfullname

`fullname: string`

The complete filename (name plus extension) of the Document object.

Since: ELC 3.50n / otrisPORTAL 5.0n

**Since:** ELC 3.60i / otrisPORTAL 6.0i available for archive files


### Readonlyid

`id: string`

The id of the Document object.

**Since:** DOCUMENTS 5.0e


### Readonlyname

`name: string`

The name (without extension) of the Document object.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### Readonlysize

`size: string`

The formatted file size (e.g. 3.91 KB) of the Document object.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Since:** ELC 3.50n / otrisPORTAL 5.0n

**See:** Document.bytes


## Methods


### deleteDocument

`deleteDocument(): boolean`

Delete the Document object.

With the necessary rights you can delete a document of the file. Do this only on scratch copies (startEdit, commit)

Note: It is strictly forbidden to access the Document object after this function has been executed successfully; if you try to access it, your script will fail, because the Document does not exist any longer in DOCUMENTS.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Returns:** boolean

**Since:** ELC 3.60b / otrisPORTAL 6.0b


```ts
// Deletion of the first document of the register "docs"
var myFile = context.file;
if (!myFile)
{
   util.out("missing file");
   return -1;
}
if (!myFile.startEdit())
{
   util.out("Unable to create scratch copy: " + myFile.getLastError());
   return -1;
}
var myReg = myFile.getRegisterByName("docs");
if (!myReg)
{
   util.out("missing >docs< register");
   return -1;
}
var firstDoc = myReg.getDocuments().first();
if (!firstDoc)
{
   return 0; // Nothing to do
}
if (!firstDoc.deleteDocument())
{
   util.out(firstDoc.getLastError());
   myFile.abort();
   return -1;
}
if (!myFile.commit())
{
   util.out("commit failed: " + myFile.getLastError());
   myFile.abort();
  return -1;
}
return 0;
```


### deleteVersion

`deleteVersion(version: string): boolean`

Delete the specified version of the document.

This function provides an alternative way to delete a specific document version (excluding the active one), similar to doing so in the web client.

**Parameters:**

- `version`: `string` — The version to delete (e.g., "2.0").

**Returns:** boolean

**Since:** DOCUMENTS 6.2.0

**See:** Document.getActiveVersion() Document.getVersions()


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Doc1");
var doc = reg.getDocumentByName("test.txt");
var activeVersion = doc.getActiveVersion();
var versions = doc.getVersions();
for (var version of versions)
{
  if (version == activeVersion)
       continue;

  if (!doc.deleteVersion(version))
     util.out(doc.getLastError());
}
```


### doOCR

`doOCR( ocrOutputFormat?: string, ocrTextFormat?: string, ocrTextTarget?: string, background?: boolean, force?: boolean, ): string`

Execute OCR for the current document.

The OCR is executed independently of the main OCR property. Meaning OCR will be executed even if the OCR property is not set for that document. The OCR method will create a searchable pdf-document or a docx-document (not supported by Tesseract). If the type of the current document is an image format like tif, png etc, the created searchable-document will be uploaded into the same register. If the type of the current document already is a pdf/docx, the OCR-pdf will be uploaded as a new version of the current document.

Additionally to the pdf/docx creation, you can get the text content of the document by using the parameters ocrTextFormat and ocrTextTarget. (The properties OCRTextFormat and OCRTextTarget will be ignored in this function. If you specify an ocrTextFormat ("txt" or "alto") the method will return the extracted words in the specified format as a string. If you specify an ocrTextTarget (Registername), then the ocrTextFormat is uploaded to the specified register. The parameters ocrTextFormat and ocrTextTarget are supported for the OCR-Engines Tesseract and Abbyy.

If the parameter background is set to true only the OCR flag is set. In that case OCR is executed in the background. As default, background is set to false and OCR is executed immediately.

Usually the job checks, if the document contains text before executing OCR. If you want OCR to be executed even though the document contains text, set the parameter force to true. If the check is performed, the Property OCRMinWordCount will be taken into account.

**Parameters:**

- `ocrOutputFormat`: `string` — "pdf" or "docx", see main description

Default: "pdf"
- `ocrTextFormat`: `string` — "txt" or "alto", see main description
- `ocrTextTarget`: `string` — the registername, where the ocrText will be uploaded
- `background`: `boolean` — false: OCR will be executed immediately, true: OCR will be executed later in a background job

Default: false
- `force`: `boolean` — false: OCR will be sipped, if document is text, true: OCR will be executed in any case

Default: false

**Returns:** string

**Since:** DOCUMENTS 5.0f

**See:** Document.extractText


```ts
var file = context.file;
var reg1 = file.getRegisterByName("RegisterA");
var offerDoc = reg1.getDocuments().first();
if (offerDoc)
{
  try
  {
      // e.g. offerDoc.fullname = "offer.tif"
    var ocrText = offerDoc.doOCR("pdf", "txt", "RegisterA", false, false);
    util.out(ocrText);  // text content of offer.tif after OCR
      // now there are 3 documents at RegisterA
      // 1. offer.tif
      // 2. offer-ocr.pdf
      // 3. offer.txt
  }
  catch (ex)
  {
    util.out(ex);
  }
}
```


### downloadDocument

`downloadDocument(filePath?: string, version?: string): string`

Download the Document to the server's filesystem for further use.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files Since: DOCUMENTS 4.0 (new parameter filePath) Since: DOCUMENTS 4.0d (new parameter version)

**Parameters:**

- `filePath`: `string` — Optional string specifying where the downloaded Document to be stored.

Note: A file path containing special characters can be modified due to the encoding problem. The modified file path will be returned.
- `version`: `string` — Optional string value specifying which version of this Document to be downloaded (e.g. "2.0"). The default value is the active version.

Note: This parameter is ignored for an archive document.

**Returns:** string

**Since:** ELC 3.50n / otrisPORTAL 5.0n


```ts
// Example 1
var docFile = context.file;
var reg = docFile.getRegisterByName("Documents");
var docIter = reg.getDocuments();
if (docIter && docIter.size() > 0)
{
   var doc = docIter.first();
   var docPath = doc.downloadDocument();
   var txtFile = new File(docPath, "r+t");
   if (txtFile.ok())
   {
      var stringVar = txtFile.readLine(); // read the first line
      txtFile.close();
   }
}
```


```ts
// Example 2
var docFile = context.file;
var reg = docFile.getRegisterByName("Documents");
var docIter = reg.getDocuments();
if (docIter && docIter.size() > 0)
{
   var doc = docIter.first();
   var docPath = "C:\\tmp\\test.txt";
   docPath = doc.downloadDocument(docPath, "2.0"); // since DOCUMENTS 4.0d
   if (docPath == "")
    util.out(doc.getLastError());
}
```


### extractText

`extractText(version?: string, options?: string): string`

**Extracts the text content of a document (eg pdf) **

A appropriate extract program has to be defined in the documents.ini: $extracttext.pdf

**Parameters:**

- `version`: `string` — String containing the wanted version of the document e.g. "2.0", use an empty value for the actual version.
- `options`: `string` — String containing additional options that will passed to the extract program.

**Returns:** string

**Since:** DOCUMENTS 5.0f


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Doc1");
var docIt = reg.getDocuments();
for (doc = docIt.first(); doc; doc = docIt.next())
{
  var text = doc.extractText();
  if (text == "")
    util.out(doc.getLastError());
  else
      util.out(text);
}
```


### getActiveVersion

`getActiveVersion(): string`

Get the active version of the document.

**Returns:** string

**Since:** DOCUMENTS 6.2.0

**See:** Document.setActiveVersion(version) Document.getVersions()


### getAsImages

`getAsImages( maxSize: number, format?: string, startPage?: number, endPage?: number, ): string[]`

Converts the document to image files in the desired format ("png" or "jpg").

Scaling behavior:

maxSize = 0: No scaling is performed
maxSize > 0: Scales the image so that the longer side (width or height) equals maxSize pixels (shorter side proportional)

Supported input file formats:

"pdf" - Converts each page to a separate image
"jpg", "png" - Single page conversion
"docx" - Requires LibreOffice to be configured as the PDF converter in documents.ini

**Parameters:**

- `maxSize`: `number` — Maximum size in pixels for the longer side (width or height). Use 0 for no scaling.
- `format`: `string` — Output image format: "png" or "jpg"

Default: "png"
- `startPage`: `number` — Zero-based index of the start page to convert

Default: 0
- `endPage`: `number` — Zero-based index of the end page to convert. Negative values are set to the last page.

Default: -1

**Returns:** string[]

**Since:** DOCUMENTS 6.2.0

**See:** Util.getAsImages()


```ts
// Convert PDF pages 2-4 to JPG without scaling
docPDF.getAsImages(0, "jpg", 1, 3);

// Convert PDF page 2 to PNG, scale longer side to 800px
docPDF.getAsImages(800, "png", 1, 1);
```


### getAsPDF

`getAsPDF(): string`

Create a PDF file containing the current Document's contents and return the path in the file system.

The different document types of your documents require the appropriate PDF filter programs to be installed and configured in DOCUMENTS.

**Returns:** string

**Since:** DOCUMENTS 4.0c


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Doc1");
var docIt = reg.getDocuments();
for (doc = docIt.first(); doc; doc = docIt.next())
{
  var pathPdfFile = doc.getAsPDF();
  if (pathPdfFile == "")
      util.out(doc.getLastError());
  else
   util.out("File path: " + pathPdfFile);
}
```


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the Document.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute

**Returns:** string

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### getDocumentContent

`getDocumentContent(): string`

Get the document content.

**Returns:** string

**Since:** DOCUMENTS 6.2.0

**See:** Document.setDocumentContent(docContent)


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Doc1");
var doc = reg.getDocumentByName("test.txt");
util.out(doc.getDocumentContent());
```


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


### getOID

`getOID(oidLow?: boolean): string`

Returns the object-id.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files Since: DOCUMENTS 5.0 (new parameter oidLow)

**Parameters:**

- `oidLow`: `boolean` — Optional flag: If true only the id of the Document object (m_oid) will be returned. If false the id of the Document object will be returned together with the id of the corresponding class in the form class-id:m_oid.

Default: false

**Returns:** string

**Since:** ELC 3.60c / otrisPORTAL 6.0c


### getRegister

`getRegister(): Register`

Returns the Register the Document belongs to.

**Returns:** Register

**Since:** DOCUMENTS 5.0c HF1


```ts
var file = context.file;
var reg1 = file.getRegisterByName("RegisterA");
var firstDoc = reg1.getDocuments().first();
if (firstDoc)
{
   var reg = firstDoc.getRegister();
   if (reg)
      util.out(reg.name);  // "RegisterA"
}
```


### getVersions

`getVersions(): string[]`

Returns an array with all versions of the document.

**Returns:** string[]

**Since:** DOCUMENTS 6.2.0


### hash

`hash(hashfunction: string, version?: string): string`

Generate the hash value for the Document using the given hash function.

These hash functions are supported:

sha1
sha224
sha256
sha384
sha512
md4
md5
whirlpool
ripemd160

**Parameters:**

- `hashfunction`: `string` — String containing the name of the hash function.
- `version`: `string` — Optional string value specifying which version of this Document to be hashed (e.g. "2.0"). The default value is the active version.

Note: This parameter is ignored for an archive document.

**Returns:** string

**Since:** DOCUMENTS 5.0e

**See:** util.hash


```ts
var file = context.file;
var reg1 = file.getRegisterByName("RegisterA");
var firstDoc = reg1.getDocuments().first();
if (firstDoc)
{
  try
  {
    var hashValue = firstDoc.hash("sha256", "2.0");
    if (hashValue == "")
        util.out(firstDoc.getLastError());
  }
  catch (ex)
  {
    util.out(ex);
  }
}
```


### hasOcrFlag

`hasOcrFlag(): boolean`

Checks if the current document still has to processed by the OCR engine.

If the OCR flag is set, the document must be processed by the OCR engine. After finishing the OCR process the flag is set back.

**Returns:** boolean

**Since:** DOCUMENTS 5.0f


### hasWords

`hasWords(minWords?: number, version?: string): boolean`

Check, if the current document has at least the specified number of words.

**Parameters:**

- `minWords`: `number` — Number of words

Default: 5
- `version`: `string` — Optional string value specifying which version of this document to be read (e.g. "2.0").

**Returns:** boolean


### moveToDocFile

`moveToDocFile(targetFile: DocFile, targetRegister: Register): boolean`

Move the document to a documents register of another file.

With the necessary rights you can move the document to a documents register of another file.

Note: This operation is not available for a document located in an archive file.

**Parameters:**

- `targetFile`: `DocFile` — The file this document will be moved to.
- `targetRegister`: `Register` — The register in the target file this document will be moved to.

**Returns:** boolean

**Since:** DOCUMENTS 6.0


```ts
var sourceFile = context.getFileById("peachitreg_fi20230000000241");
var targetFile = context.getFileById("peachitreg_fi20230000000240");
var sourceReg = sourceFile.getRegisterByName("Doc1");
var targetReg = targetFile.getRegisterByName("Doc1");
var docIt = sourceReg.getDocuments();
for (var doc = docIt.first(); doc; doc = docIt.next())
{
  if (!doc.moveToDocFile(targetFile, targetReg))
  {
      util.out(doc.getLastError());
      break;
  }
}
```


### moveToRegister

`moveToRegister(regObj: Register): boolean`

Move the Document to another document Register of the file.

With the necessary rights you can move the Document to another document Register of the file.

Note: This operation is not available for a Document located in an archive file.

**Parameters:**

- `regObj`: `Register` — The Register this Document will be moved to.

**Returns:** boolean

**Since:** DOCUMENTS 4.0c


```ts
var file = context.file;
if (!file.isArchiveFile())
{
   var regDoc1 = file.getRegisterByName("Doc1");
   var regDoc2 = file.getRegisterByName("Doc2");
   var docIt = regDoc2.getDocuments();
   for (var doc = docIt.first(); doc; doc = docIt.next())
   {
      if (!doc.moveToRegister(regDoc1))
          util.out(doc.getLastError());
   }
}
```


### readAsString

`readAsString(version?: string): string`

Read the document and return its content as a string in case of the document being a text file.

**Parameters:**

- `version`: `string` — Optional string value specifying which version of this document to be read (e.g. "2.0"). The default version is the active version.

Note: This parameter is ignored for an archive document.

**Returns:** string

**Since:** DOCUMENTS 5.0f


### reindexBlob

`reindexBlob(): boolean`

Reindex the blob located in an active file.

This method is only allowed if at the filetype the option 'automatic document indexing' is enabled.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e HF2


### setActiveVersion

`setActiveVersion(version: string): boolean`

Set the specified version as active.

**Parameters:**

- `version`: `string` — The version to activate (e.g., "2.0").

**Returns:** boolean

**Since:** DOCUMENTS 6.2.0

**See:** Document.getActiveVersion()


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the Document to the desired value.

Since: ELC 3.60i / otrisPORTAL 6.0i available for archive files

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** ELC 3.50n / otrisPORTAL 5.0n


### setDocumentContent

`setDocumentContent(docContent: string): boolean`

Set the document content.

**Parameters:**

- `docContent`: `string` — The desired document content to set.

**Returns:** boolean

**Since:** DOCUMENTS 6.2.0

**See:** Document.getDocumentContent()


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Doc1");
var doc = reg.getDocumentByName("test.txt");
if (!doc.setDocumentContent("document info"))
	 throw doc.getLastError();
```


### setDocumentName

`setDocumentName(nameWithExt: string): boolean`

Set the name of the current document.

This method is only allowed for documents at a scratch copy (startEdit, commit).

**Parameters:**

- `nameWithExt`: `string` — String containing the document name with extension.

**Returns:** boolean

**Since:** DOCUMENTS 5.0e HF2


```ts
// Rename the first document of the register "docs"
var myFile = context.file;
if (!myFile)
{
   util.out("missing file");
   return -1;
}
if (!myFile.startEdit())
{
   util.out("Unable to create scratch copy: " + myFile.getLastError());
   return -1;
}
var myReg = myFile.getRegisterByName("docs");
if (!myReg)
{
   util.out("missing >docs< register");
   return -1;
}
var firstDoc = myReg.getDocuments().first();
if (!firstDoc)
{
   return 0; // Nothing to do
}
if (!firstDoc.setDocumentName("newName.txt"))
{
   util.out(firstDoc.getLastError());
   myFile.abort();
   return -1;
}
if (!myFile.commit())
{
   util.out("commit failed: " + myFile.getLastError());
   myFile.abort();
  return -1;
}
return 0;
```


### uploadDocument

`uploadDocument(sourceFilePath: string, versioning?: boolean): boolean`

Upload a file stored on the server's filesystem for replacing or versioning this Document.

Note: After successful upload of the Document the source file on the server's directory structure is removed!

**Parameters:**

- `sourceFilePath`: `string` — String containing the path of the desired file to be uploaded.

Note: Backslashes contained in the filepath must be quoted with a leading backslash, since the backslash is a special char in ECMAScript!
- `versioning`: `boolean` — Optional flag: true for versioning the Document and false for replacing it.

Default: true

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var docFile = context.file;
var reg = docFile.getRegisterByName("Documents");
var docIter = reg.getDocuments();
if (docIter && docIter.size() > 0)
{
   var doc = docIter.first();
   if (!doc.uploadDocument("c:\\tmp\\test.txt", true))
      util.out(doc.getLastError());
}
```