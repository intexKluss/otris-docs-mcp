---
title: "Global"
source: "https://otris.software/documents/api/documents-native/global.html"
---

### Members


**documentsNativeConnectorDocumentsNativeConnector**
The globally available instance of [[Documents Drop SDK/DocumentsNativeConnector]]. Use [[Documents Drop SDK/global#whenReady|whenReady]] to get notified when this object becomes available.

- Tutorials:
Getting started


### Methods


**whenReady(name){Promise}**
Executes a callback when a certain object becomes available on the window object. Please see the [[Documents Drop SDK/tutorial-Getting%20started|Getting started]] tutorial for more info

| Name | Type | Description |
| --- | --- | --- |
| name | string | Name of the object (most likely "documentsNativeConnector") |


##### Returns:

| Type | Description |
| --- | --- |
| Promise | A promise which resolves, when the global object is ready |