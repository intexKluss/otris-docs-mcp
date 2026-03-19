---
title: "Interface: DocumentsNativeConnector"
source: "https://otris.software/documents/api/documents-native/DocumentsNativeConnector.html"
---

Main api object which is globally available


### Members


**appControllerAppController**
Provides access to a class which allows to control the mobile app (Only available when [[Documents Drop SDK/ApplicationInfo#nativeType|applicationInfo.nativeType]] is "app")
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**applicationInfoApplicationInfo**
Info about the application


**clipboardControllerClipboardController**
Provides access to a class which allows you to control the clipboard (Only available when [[Documents Drop SDK/ApplicationInfo#nativeType|applicationInfo.nativeType]] is "desktop" or "addin")
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**configControllerConfigController**
Provides access to a class which allows you to edit and store configuration options (Only available when [[Documents Drop SDK/ApplicationInfo#nativeType|applicationInfo.nativeType]] is "desktop" or "addin")
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**connectionManagerMsoutlookEditor**
Provides access to the current connection manager (Only available when [[Documents Drop SDK/ApplicationInfo#nativeType|applicationInfo.nativeType]] is "desktop" or "addin")
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**currentSelectionArray.<FileGroup>**
Current selection in the user interface


**msexcelWorkbookMsexcelWorkbook**
Provides access to the current workbook (Only available when [[Documents Drop SDK/ApplicationInfo#hostName|applicationInfo.hostName]] is "msexcel" and [[Documents Drop SDK/ApplicationInfo#nativeType|applicationInfo.nativeType]] is "addin").
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**msoutlookEditorMsoutlookEditor**
Provides access to the current outlook mail editor (Only available when [[Documents Drop SDK/ApplicationInfo#hostName|applicationInfo.hostName]] is "msoutlook" and mail is open in edit mode)
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**msoutlookMailMsoutlookEditor**
Provides access to modifications for the currently selected outlook mails (Only available when [[Documents Drop SDK/ApplicationInfo#hostName|applicationInfo.hostName]] is "msoutlook")
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**mswordDocumentMswordDocument**
Provides access to the current document (Only available when [[Documents Drop SDK/ApplicationInfo#hostName|applicationInfo.hostName]] is "msword").
**Important:** To check for availability please use [[Documents Drop SDK/ApplicationInfo#availableHostControllers|applicationInfo.availableHostControllers]].


**uploadResponsesArray.<UploadResponse>**
Responses to the last upload call


### Methods


**clear()**
Clears the current selection and removes all files which have been dropped from the selection


**close()**
Closes the documents native connector panel/window


**dropToApplication(url)**
Downloads a file from the given URL and sends it to the host application

- In Outlook this attaches it to a mail
- In Word this inserts it into the document
- In Desktop it downloads the file to disk
- In the App (myFavorites, etc) nothing happens

| Name | Type | Description |
| --- | --- | --- |
| url | string | The url of the file to be downloaded. If the url points to the current documents server, then the current session will be included in the request. |


**onApplicationInfoChanged(callback)**
Registers a callback for when the applicationInfo changed

| Name | Type | Description |
| --- | --- | --- |
| callback | DocumentsNativeConnector.ApplicationInfoChangedCallback | Function which gets called when the applicationInfo changed |


**onDragDropStatusChanged(callback)**
Registers a callback for when a drag and drop operation happens

| Name | Type | Description |
| --- | --- | --- |
| callback | DocumentsNativeConnector.DragDropStatusChangedCallback | The function which gets called for each drag & drop event |


**onSelectionChanged(callback)**
Registers a callback for when the selection changed

| Name | Type | Description |
| --- | --- | --- |
| callback | DocumentsNativeConnector.SelectionChangedCallback | Function which gets called when the selection changed |


**onSubmit(callback)**
Registers a callback for when a submit action was initiated in the host application (currently unused)

| Name | Type | Description |
| --- | --- | --- |
| callback | DocumentsNativeConnector.SubmitCallback | Function which gets called when a submit event happed |


**openUrl(url)**
Opens a url in the native web browser of the operating system

| Name | Type | Description |
| --- | --- | --- |
| url | string | The url which should be opened |


**setUploadLimit(amount)**
Sets the limit of maximum files which can be uploaded at once

| Name | Type | Description |
| --- | --- | --- |
| amount | number | The amount of files which are allowed to be uploaded |


**upload(files){Promise.<Array.<UploadResponse>>}**
Uploads files to the server

**IMPORTANT:** The mobile app currently ignores the `fileIds` parameter and always uploads every file

| Name | Type | Description |
| --- | --- | --- |
| files | Array.<string> | Array of fileIds |


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<Array.<UploadResponse>> | A promise which resolves with the upload response |


### Type Definitions


**DocumentsNativeConnector.ApplicationInfoChangedCallback(info)**
Callback for when the applicationInfo changes

| Name | Type | Description |
| --- | --- | --- |
| info | ApplicationInfo | New value of applicationInfo |


**DocumentsNativeConnector.DragDropStatusChangedCallback(event)**
Callback for a drag and drop operation

| Name | Type | Description |
| --- | --- | --- |
| event | DragDropStatus | Data of drag and drop event |


**DocumentsNativeConnector.SelectionChangedCallback(selection)**
Callback for when the selection changes

| Name | Type | Description |
| --- | --- | --- |
| selection | Array.<FileGroup> | New value of currentSelection |


**DocumentsNativeConnector.SubmitCallback()**
Callback for when a submit was triggered