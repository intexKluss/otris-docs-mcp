---
title: "Interface: AppController"
source: "https://otris.software/documents/api/documents-native/AppController.html"
---

A class which provides methods to control the mobile app


### Methods


**importFromGallery(){Promise}**
Opens gallery to import photo (with crop) for gadget


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after import view has been closed. |


**openCamera(){Promise}**
Opens camera to add photo to gadget


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after camera has been closed. |


**openGallery(){Promise}**
Opens gallery to add photo to gadget


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after gallery has been closed. |


**showFile(fileId){Promise}**
Shows a file *after* the gadget was closed (see also: [[Documents Drop SDK/DocumentsNativeConnector#close|documentsNativeConnector.close()]])

| Name | Type | Description |
| --- | --- | --- |
| fileId | string | The id of the file to be shown |


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after the file was opened |


**startScan(){Promise}**
Start scan to add photo to gadget


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after camera has been closed. |


**syncFile(fileId){Promise}**
Syncs a file to the local database of the app

| Name | Type | Description |
| --- | --- | --- |
| fileId | string | The id of the file to be synced |


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after the file was synced |