---
title: "Interface: UploadResponse"
source: "https://otris.software/documents/api/documents-native/UploadResponse.html"
---

Response after uploading files


### Members


**accessTokenstring**
Token which can be used to access the file on the server using `context.getTempPathByToken(accessToken)`


**fileNamestring**
Name of the uploaded file


**typestring**
"uploadResponse"