---
title: "ArchiveConnectionBlob | Portalscript API"
source: "https://otris.software/documents/api/portalscript/interfaces/ArchiveConnectionBlob.html"
---

# Interface ArchiveConnectionBlob

**The ArchiveConnectionBlob class provides access to each single attachment of files in the archive.**

This class holds data like name, extension, size etc. of attachments in the archive. The existance of an object means, that an attachment exists in the archive.

**Note:** You can not create objects of this class. Objects of this class are available only as return value of other functions,
e.g. [[Portalscript API/interfaces/ArchiveConnection#downloadblob|ArchiveConnection.downloadBlob(String fileKey, String docKey)]].

**Note:** Class is only available for an [[Portalscript API/interfaces/ArchiveConnection]] to a XML-Server


#### Since

ELC 3.60i / otrisPORTAL 6.0i available for archive files


`interface ArchiveConnectionBlob { bytes: number; docKey: string; downloaded: boolean; fileKey: string; getLastError(): string; localPath: string; mimeType: string; name: string; size: string; }`


## Index


### Properties

- bytes
- docKey
- downloaded
- fileKey
- localPath
- mimeType
- name
- size


### Methods

- getLastError


## Properties


### bytes

`bytes: number`

Integer containing the filesize of an attachment in the archive.

This property contains the filesize of the attachment in bytes (83605).


```ts
....
var archDoc = xmlserver.downloadBlob(....);
util.out(archDoc.bytes);
```


### docKey

`docKey: string`

String containing the key of the attachment in the archive.


```ts
....
var archDoc = xmlserver.downloadBlob(....);
util.out(archDoc.docKey);
```


### downloaded

`downloaded: boolean`

boolean that indicates whether an attachment of the archive is locally available at the PortalServer.

If the attachment in the archive is locally available at the PortalServer's file system, this value is true.


```ts
....
var archDoc = ...
if (archDoc.downloaded)
   util.out(archDoc.localPath);
```


### fileKey

`fileKey: string`

String containing the key of the file the attachment belongs to in the archive.


```ts
....
var archDoc = xmlserver.downloadBlob(....);
util.out(archDoc.fileKey);
```


### localPath

`localPath: string`

String with the local path to the attachment (blob).

This path is only available if the attribute ArchiveConnectionBlob.downloaded is true


```ts
....
var archDoc = ...
if (archDoc.downloaded)
   util.out(archDoc.localPath);
```


### mimeType

`mimeType: string`

String containing the mime-type of an attachment in the archive.

This property contains the mime-type of the attachment, e.g image/jpeg.


```ts
....
var archDoc = xmlserver.downloadBlob(....);
util.out(archDoc.mimeType);
```


### name

`name: string`

String containing the name of the attachment in the archive.


```ts
....
var archDoc = xmlserver.downloadBlob(....);
util.out(archDoc.name);
```


### size

`size: string`

String containing the filesize of an attachment in the archive.

This property contains the filesize of the attachment in as readable way (81.6 KB).


```ts
....
var archDoc = xmlserver.downloadBlob(....);
util.out(archDoc.size);
```


## Methods


### getLastError

`getLastError(): string`

Function to get the description of the last error that occurred.

**Returns:** string

**Since:** ELC 3.60h / otrisPORTAL 6.0h