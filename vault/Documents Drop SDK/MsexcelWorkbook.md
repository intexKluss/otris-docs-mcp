---
title: "Interface: MsexcelWorkbook"
source: "https://otris.software/documents/api/documents-native/MsexcelWorkbook.html"
---

The current Excel workbook


### Methods


**insertText(text){Promise}**
Inserts a string into the current cell. The value is parsed automatically.

| Name | Type | Description |
| --- | --- | --- |
| text | string | The text to be inserted, if it can be parsed as a number it will be inserted as a number |


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after the text was inserted |


**setValue(value){Promise}**
Inserts text or numbers into the current cell.

| Name | Type | Description |
| --- | --- | --- |
| value | string | number | The value to be inserted, if it is a number it will be inserted as a number, if it is a string it will be inserted as text |


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after the value was set |