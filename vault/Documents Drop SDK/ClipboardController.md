---
title: "Interface: ClipboardController"
source: "https://otris.software/documents/api/documents-native/ClipboardController.html"
---

Controls the clipboard of the application


### Methods


**getText(){Promise.<string>}**
Gets the current text from the clipboard


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<string> | Promise which resolves with the text |


**setText(text){Promise}**
Sets the current text in the clipboard

| Name | Type | Description |
| --- | --- | --- |
| text | string | The text to be set |


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after the text was set |