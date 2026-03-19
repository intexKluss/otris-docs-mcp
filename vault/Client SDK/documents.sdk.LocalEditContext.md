---
title: "Class: LocalEditContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.LocalEditContext.html"
---

### Constructors


****
The Local Edit Context provides access to various methods to use the local edit components.

- Since:
5.0f HF2


### Methods


**compareFiles(fileA, fileB)**
Calls the local edit component to compare two files.

| Name | Type | Description |
| --- | --- | --- |
| fileA | Object | Name Type Description fileId String The id of the file. registerId String The id of the register the document is in. docId String The id of the document. docName String The name of the document, including extension. version Number | String optional Defaults to the latest version if not otherwise specified. The version uses a 1 based index. If version is set versionId will be overridden. versionId String optional DEPRECATED, use version instead. Defaults to the latest version if not otherwise specified. The versionId uses a 0 based index, if version 1 of the document should be used the versionId would be "0" | Name | Type | Description | fileId | String | The id of the file. | registerId | String | The id of the register the document is in. | docId | String | The id of the document. | docName | String | The name of the document, including extension. | version | Number | String | optional Defaults to the latest version if not otherwise specified. The version uses a 1 based index. If version is set versionId will be overridden. | versionId | String | optional DEPRECATED, use version instead. Defaults to the latest version if not otherwise specified. The versionId uses a 0 based index, if version 1 of the document should be used the versionId would be "0" |
| Name | Type | Description |
| fileId | String | The id of the file. |
| registerId | String | The id of the register the document is in. |
| docId | String | The id of the document. |
| docName | String | The name of the document, including extension. |
| version | Number | String | optional Defaults to the latest version if not otherwise specified. The version uses a 1 based index. If version is set versionId will be overridden. |
| versionId | String | optional DEPRECATED, use version instead. Defaults to the latest version if not otherwise specified. The versionId uses a 0 based index, if version 1 of the document should be used the versionId would be "0" |
| fileB | Object | Name Type Description fileId String The id of the file. registerId String The id of the register the document is in. docId String The id of the document. docName String The name of the document, including extension. version Number | String optional Defaults to the latest version if not otherwise specified. The version uses a 1 based index. If version is set versionId will be overridden. versionId String optional DEPRECATED, use version instead. Defaults to the latest version if not otherwise specified. The versionId uses a 0 based index, if version 1 of the document should be used the versionId would be "0" | Name | Type | Description | fileId | String | The id of the file. | registerId | String | The id of the register the document is in. | docId | String | The id of the document. | docName | String | The name of the document, including extension. | version | Number | String | optional Defaults to the latest version if not otherwise specified. The version uses a 1 based index. If version is set versionId will be overridden. | versionId | String | optional DEPRECATED, use version instead. Defaults to the latest version if not otherwise specified. The versionId uses a 0 based index, if version 1 of the document should be used the versionId would be "0" |
| Name | Type | Description |
| fileId | String | The id of the file. |
| registerId | String | The id of the register the document is in. |
| docId | String | The id of the document. |
| docName | String | The name of the document, including extension. |
| version | Number | String | optional Defaults to the latest version if not otherwise specified. The version uses a 1 based index. If version is set versionId will be overridden. |
| versionId | String | optional DEPRECATED, use version instead. Defaults to the latest version if not otherwise specified. The versionId uses a 0 based index, if version 1 of the document should be used the versionId would be "0" |


**getAPIVersion(){string}**
Returns the api version of the native host.

- Since:
5.0i HF7


##### Returns:

| Type | Description |
| --- | --- |
| string |  |


**getBrowserExtensionVersion(){string}**
Returns the version of the browser extension.

- Since:
5.0i HF7


##### Returns:

| Type | Description |
| --- | --- |
| string |  |


**getNativeHostVersion(){string}**
Returns the version of the native host.

- Since:
5.0i HF7


##### Returns:

| Type | Description |
| --- | --- |
| string |  |