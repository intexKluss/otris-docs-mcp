---
title: "Class: Row"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.Row.html"
---

### Constructors


****


### Methods


**addSubrow(config){otris.scriptlist.Subrow}**
Add a subrow to display as a sublist after the last grid column.

This can also be used to add documents that will be opened by click on a file.

| Name | Type | Description |
| --- | --- | --- |
| config | string | object | String if only value should be displayed or Object for further configuration. Name Type Description icons Array.<string> Array of icons to be used for the subrow. Currently only the first icon is displayed. documentName string full document name to be displayed if referenced subrow is a file document. This is only needed if thumbnails are created automatically based on these paremeters. extension string Extension of the document to be used as automatically generate file type icon. This is only needed if thumbnails are created automatically based on these paremeters. size string Size to be displayed on hover thumbnail icon, with unit (e.g. byte). This is only needed if thumbnails are created automatically based on these paremeters. onclick string Javascript Code to be executed if the subrow was clicked. values Array.<string> 0 :name to be displayed 1 :size filesize to be displayed if list is displayed as blobthumbnails | Name | Type | Description | icons | Array.<string> | Array of icons to be used for the subrow. Currently only the first icon is displayed. | documentName | string | full document name to be displayed if referenced subrow is a file document. This is only needed if thumbnails are created automatically based on these paremeters. | extension | string | Extension of the document to be used as automatically generate file type icon. This is only needed if thumbnails are created automatically based on these paremeters. | size | string | Size to be displayed on hover thumbnail icon, with unit (e.g. byte). This is only needed if thumbnails are created automatically based on these paremeters. | onclick | string | Javascript Code to be executed if the subrow was clicked. | values | Array.<string> | 0 :name to be displayed 1 :size filesize to be displayed if list is displayed as blobthumbnails |
| Name | Type | Description |
| icons | Array.<string> | Array of icons to be used for the subrow. Currently only the first icon is displayed. |
| documentName | string | full document name to be displayed if referenced subrow is a file document. This is only needed if thumbnails are created automatically based on these paremeters. |
| extension | string | Extension of the document to be used as automatically generate file type icon. This is only needed if thumbnails are created automatically based on these paremeters. |
| size | string | Size to be displayed on hover thumbnail icon, with unit (e.g. byte). This is only needed if thumbnails are created automatically based on these paremeters. |
| onclick | string | Javascript Code to be executed if the subrow was clicked. |
| values | Array.<string> | 0 :name to be displayed 1 :size filesize to be displayed if list is displayed as blobthumbnails |

- Since:
DOCUMENTS 5.0e


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Subrow |  |


**getMetaData(key){any}**
Get all data or certain value by key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | key for a certain value or undefined for all data |


##### Returns:

| Type | Description |
| --- | --- |
| any | Value for a passed key or all data. |


**getShowCheckbox(){boolean}**
Get showCheckbox state for this row.

If showCheckbox is undefined, the row will be shown by default.


##### Returns:

| Type | Description |
| --- | --- |
| boolean | Row showCheckbox state |


**getValue(key){any}**
Get the value for a key

| Name | Type | Description |
| --- | --- | --- |
| key | string | value to get from this row |


##### Returns:

| Type | Description |
| --- | --- |
| any | Value for this key |


**setAcceptedDropTypes()**
- See:  setAcceptedDropTypes


**setAction(newAction)**
Action which will be fired when the row is clicked.

Available actions: showFile, showFolder, runScript

| Name | Type | Description |
| --- | --- | --- |
| newAction | string | function to be executed on mouse click |


##### Example


```
listRow.setAction("showFile:" + myFileId);
```


**setActive(active){otris.scriptlist.Row}**
Sets whether a row should be marked active. Only one row can be active.

| Name | Type | Description |
| --- | --- | --- |
| active | boolean | mark row active |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row (since DOCUMENTS 5.0i) |


**setDetailsParams(detailsParams){otris.scriptlist.Row}**
Set the row specific parameters that should be send to the details script when expanding

the details row. Overwrites the parameters set in the list.

| Name | Type | Description |
| --- | --- | --- |
| detailsParams | object | key/value object of parameters to pass to the details script |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setDetailsScriptName(detailsScriptName){otris.scriptlist.Row}**
Set the row specific name of the script that is called when the rows details row will be expanded.

(Overwrites the scriptName set in the list).

| Name | Type | Description |
| --- | --- | --- |
| detailsScriptName | string | the scriptname to use for displaying the details row |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setEmphasized(emphasized){otris.scriptlist.Row}**
Mark the row as emphasized. Shown with bold text in the list.

| Name | Type | Description |
| --- | --- | --- |
| emphasized | boolean | emphasized flag |

- Since:
DOCUMENTS 5.0e


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setMetaData(key, value){otris.scriptlist.Row}**
This can be used to transfer meta data to the client that is not displayed in the rendered grid.

| Name | Type | Description |
| --- | --- | --- |
| key | string | object | Key to set in meta data or object containing all data. |
| value | any | Value to set for this key |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setOnClick(newOnclick){otris.scriptlist.Row}**
Set handler for click event.

| Name | Type | Description |
| --- | --- | --- |
| newOnclick | string | function | function or function as string (just for legacy support) to be executed on mouse click Regular functions are supported since DOCUMENTS 5.0g listRow.setOnClick(function(documentsContext, options) { documentsContext: A newly created DocumentsContext options: { rowIndex: the current grid row index cellIndex: the current grid cell index row: the current grid row model column: the current grid column model originalEvent: the current original dom event } }); |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setOnDoubleClick(newOnDoubleclick){otris.scriptlist.Row}**
Set handler for double click event.

| Name | Type | Description |
| --- | --- | --- |
| newOnDoubleclick | string | function | function or function as string (just for legacy support) to be executed on mouse double click Regular functions are supported since DOCUMENTS 5.0g listRow.setOnDoubleClick(function(documentsContext, options) { documentsContext: A newly created DocumentsContext options: { rowIndex: the current grid row index cellIndex: the current grid cell index row: the current grid row model column: the current grid column model originalEvent: the current original dom event } }); |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row (since DOCUMENTS 5.0i) |


**setSelected(selected){otris.scriptlist.Row}**
Checks the row on display

| Name | Type | Description |
| --- | --- | --- |
| selected | boolean | True if row should be selected in view |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setShowCheckbox(showCheckbox)**
Set whether the checkbox should be shown for this row.

Only works if list.setShowCheckboxes(true) was set.

| Name | Type | Description |
| --- | --- | --- |
| showCheckbox | boolean | Show or hide checkbox for this row. |

- Since:
DOCUMENS 5.0i HF 3, DOCUMENTS 6.0.1


**setTag(tag){otris.scriptlist.Row}**
Tag the row with a predefined grey marker or insert custom html

| Name | Type | Description |
| --- | --- | --- |
| tag | boolean | string | True for a standard grey marker, String for HTML |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setTagColor(tagColor){otris.scriptlist.Row}**
Set the tag color

| Name | Type | Description |
| --- | --- | --- |
| tagColor | string | Html color for the row's tag |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | current row |


**setValue(key, value)**
Set the row's value for a key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | Key whose value should be set. |
| value | any | Value that should be set. |

- Since:
DOCUMENTS 6.0


**transfer(){object}**
Transfer function returning the data of the Row for a gadget.


##### Returns:

| Type | Description |
| --- | --- |
| object | Data of the row |