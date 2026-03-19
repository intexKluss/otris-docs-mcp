---
title: "Interface: ApplicationInfo"
source: "https://otris.software/documents/api/documents-native/ApplicationInfo.html"
---

Info about the host application


### Members


**acceptsFileDropsboolean**
If true the application supports the dropToApplication functionality.


**activeFileIdstring**
Id of the currently open doc file in the application


**availableHostControllersArray.<string>**
Array of names of the available instances of host controller classes on the [[Documents Drop SDK/DocumentsNativeConnector]]

- Tutorials:
Host applications


**backgroundColorstring**
Color of the application background


**hostNamestring**
Name of the host application

- Tutorials:
Host applications


**hostVersionstring**
Version of the host application


**nativeTypestring**
Type of the documentsNativeConntector

- Tutorials:
Host applications


**nativeVersionstring**
Version of the documentsNativeConnector


**supportsUploadboolean**
If true the application supports selections und upload functionality. If false the selection will always remain empty and upload will not upload anything.


**typestring**
"applicationInfo"