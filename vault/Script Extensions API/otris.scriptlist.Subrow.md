---
title: "Class: Subrow"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.Subrow.html"
---

### Constructors


****


### Methods


**setDocumentId(documentId)**
Sets the document id if the parent row is referencing a file.

This is only needed if thumbnails are created automatically based on these paremeters.

| Name | Type | Description |
| --- | --- | --- |
| documentId | string | document id if the parent row is referencing a file |


**setDocumentName(documentName)**
Sets the full document name to be displayed if referenced subrow is a file document.

This is only needed if thumbnails are created automatically based on these paremeters.

| Name | Type | Description |
| --- | --- | --- |
| documentName | string | full document name to be displayed if referenced subrow is a file document |


**setExtension(extension)**
Sets the extension of the document to be used as automatically generate file type icon.

This is only needed if thumbnails are created automatically based on these paremeters.

| Name | Type | Description |
| --- | --- | --- |
| extension | string | extension of the document |


**setIcons(icons)**
Sets an array of icons to be used for the subrow. Currently only the first icon is displayed.

| Name | Type | Description |
| --- | --- | --- |
| icons | Array.<string> | array of icons to be used for the subrow |


**setOnClick(newOnclick)**
Javascript Code to be executed if the subrow was clicked.

| Name | Type | Description |
| --- | --- | --- |
| newOnclick | string | Javascript Code to be executed if the subrow was clicked. |


**setSize(size)**
Sets the size to be displayed on hover thumbnail icon, with unit (e.g. byte).

This is only needed if thumbnails are created automatically based on these paremeters.

| Name | Type | Description |
| --- | --- | --- |
| size | string | Size to be displayed on hover thumbnail icon, with unit (e.g. byte). |


**setValues(values)**
Sets the values to be displayed in the sublist. Normally only array[0] is needed,

array[1] is reserved for special display of blob thumbnails.

values: 0 :name to be displayed

1 :size filesize to be displayed if list is displayed as blobthumbnails

| Name | Type | Description |
| --- | --- | --- |
| values | Array.<string> | Values to be displayed in the sublist. |