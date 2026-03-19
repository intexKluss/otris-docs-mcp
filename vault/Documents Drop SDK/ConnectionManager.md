---
title: "Interface: ConnectionManager"
source: "https://otris.software/documents/api/documents-native/ConnectionManager.html"
---

A class which provides methods to edit connection details


### Methods


**changeLanguage(languageName){Promise}**
Changes the language of the current connection and reconnects.

If the connection can not be reestablished then the addin will be closed.

| Name | Type | Description |
| --- | --- | --- |
| languageName | string | The ISO-639-1 (two letter) language code or "auto" to reset the language selection to automatic |


##### Returns:

| Type | Description |
| --- | --- |
| Promise |  |


**changePrincipal(principalName){Promise}**
Changes the principal of the current connection and reconnects.

If the connection to the new principal could be established it is persisted for the next start.

Otherwise the old principal is restored and a connection will be reestablished.

| Name | Type | Description |
| --- | --- | --- |
| principalName | string | The technical name of the new principal |


##### Returns:

| Type | Description |
| --- | --- |
| Promise |  |


**showEditor(){Promise}**
Shows the connection editor dialog and allows the user to change connection details.


##### Returns:

| Type | Description |
| --- | --- |
| Promise |  |