---
title: "Namespace: FileUtils"
source: "https://otris.software/documents/api/gadgets/otris.gadget.util.FileUtils.html"
---

otris.gadget.util.FileUtils is a static object containing utility-FUNCTIONS used to read FileTypes and Files from the Documents Database


### Methods


**staticotris.gadget.util.FileUtils.getErgFields(fileType, locale)**
returns a list of ergonomic names of files of a specific filetype

| Name | Type | Description |
| --- | --- | --- |
| fileType | string | the name of the fileType |
| locale | string | the locale to use for retrieving the names |


**staticotris.gadget.util.FileUtils.getFields(fileType)**
Returns a list of technical field names of a specific filetype

| Name | Type | Description |
| --- | --- | --- |
| fileType | string | the name of the fileType |


**staticotris.gadget.util.FileUtils.getFileResultSet(fileType, searchExpression)**
Returns a FileResultSet of a specific fileType

| Name | Type | Description |
| --- | --- | --- |
| fileType | string | the name of the fileType |
| searchExpression | string | the searchExpression to filter the result |


**staticotris.gadget.util.FileUtils.getFileTypeList()**
Returns a list of all available fileTypes