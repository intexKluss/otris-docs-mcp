---
title: "Global"
source: "https://otris.software/documents/api/scriptextensions/global.html"
---

### Methods


**chromaColorTool(color)**
The `chromaColorTool` provides the functionality of the library **chroma.js**.

**Please note this functionality can only be used with the require mechanism. See example for details.**

For a detailed description of the chroma.js libary see the [chroma.js API Documentation](https://vis4.net/chromajs/).

The following **named colors** are available in addition to the already defined in chroma.js.

- signalcolor: The defined skin signal color of the current user with a fallback to the global defined skin signal color
- signalcolor_global: The global defined skin signal color


## Library: chroma.js

- License: BSD license, Author: Gregor Aisch, Source: https://github.com/gka/chroma.js

The example below generates the following output as a message if executed in the web client.

| Name | Type | Description |
| --- | --- | --- |
| color | any | a valid color definition (see chroma.js API Documentation for details) |

- Since:
DOCUMENTS 5.0f


##### Example


```
context.enableModules(undefined, 3);
var chroma = require("chromaColorTool"),
    signalColor = chroma("signalcolor"),
    style, color, arrHtml = [];

arrHtml.push('<h2>Lightness</h2>');
arrHtml.push('<div style="display:flex;align-items:stretch;width:100%;min-height:200px;">');

for(var i = 0; i <= 10; i++) {
    color = signalColor.set('hsl.l', i / 10);
    style = 'text-align:center;flex:1;background:' + color;
    arrHtml.push('<div style="', style, '">' + (i / 10) + "</div>");
}
arrHtml.push('</div>');
context.returnType = "html";
return arrHtml.join('');
```


### Type Definitions


**CollapsedConfigobject**
Collapsed object configuration for grouping


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| default | boolean | collapse entries for this grouping |
| exclude | Array.<string> | list of group values that will be opposite from the default collapsed state |


##### Example

**collapse all entries but monday**


```
{
    default: true,
    exclude: ["monday"]
  }
```


**Columnobject**
Column object whose data be we set on a scriptlist column.


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| key | boolean | Technical key of the column. |
| label | boolean | Label of the column. |
| columnDataType | otris.scriptlist.ColumnDataType | Data type of the column. |


**CountOptions**

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| firstOpen | boolean | If the file for the register with this scriptlist is shown, this will be true. |
| clear | boolean | If the file for the register with this scriptlist is closed, this will be true. |
| fileId | string | Id of the file for which the count script was called. Will be used for the default cache key. |
| registerId | string | Id of the register for which the count script was called. Will be used for the default cache key. |


**FileMessageobject**

##### Properties:

| Name | Type | Argument | Description |
| --- | --- | --- | --- |
| id | string |  | message id |
| timestamp | number |  | creation timestamp (seconds since 1.01.1970 00:00:00 UTC) |
| author | string |  | user login of the message author (eg: schreiber) |
| authorLabel | string |  | displayed value for the author (eg: Willi Schreiber) |
| body | string |  | message body |
| recipients | Array.<string> | <optional> | array of user logins who are mentioned (eg: @oppen) in the message |
| authorRemoved | number | <optional> | timestamp author was removed (seconds since 1.01.1970 00:00:00 UTC) |
| edited | number | <optional> | edit timestamp (seconds since 1.01.1970 00:00:00 UTC) |
| deleted | number | <optional> | deletion timestamp (seconds since 1.01.1970 00:00:00 UTC) |


**GadgetSettingobject**

##### Properties:

| Name | Type | Argument | Description |
| --- | --- | --- | --- |
| name | string |  | The techincal name of the setting |
| def | string | number |  | The default value to be used if no value is specified. If a number is specified the default value will be the value from the enum array with the given index. |
| type | string |  | The type of the setting. (string | boolean | number) |
| enum | Array.<string> | array.<Array.<string>> |  | An Array of values i.e. ["A", "B"] that the user can choose from. Or an Array of key value pairs i.e. [[0, "A"], [1, "B"]]. The values must be of the type defined in type. |
| desc | string | <optional> | The description of this setting |


**GroupConfigobject**

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| id | string | id of this group. |
| label | string | label for the group row. If a row has the same value for this column it will be sorted into this group. |
| emptyText | string | text that will be displayed if there are no rows for this group. |


##### Example

**Always show the group 'february' with label 'Februar'. If there are no rows for this group display the text 'leer'**


```
{
  id: "february",
  label: "Februar",
  emptyText: "leer"
}
```


**GroupingConfigobject**
Grouping object configuration


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| comparator | groupComparatorCB | Callback to sort values of this group. |
| column_id | string | id of the column that should be grouped |
| collapsed | boolean | CollapsedConfig | collapse group on inital display |
| default_groups | Array.<(string|GroupConfig|otris.scriptlist.Group)> | groups that will be always displayed, even if there are no rows matching this group |


##### Example

**group by day with all days collapsed but monday**


```
{
  column_id: "day",
  collapsed: {
    default: true,
    exclude: ["monday"]
  }
}
```


**HbsTemplateStringobject**
Available options for Handlebars template string


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| value | string | value of the cell |
| row | object | data of the rendering row (JSON) |
| rowIndex | number | row index |
| cellIndex | number | cell index |
| column | object | column definition |
| data | Backbone.Model | backbone model of the rendering row |
| columnsByKey | object | object containing columns mapped by key |


**RecordViewConfig**

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| fileId | string | fileId to be openend when clicking the Record-View. |
| iconConfig | object | Configuration for the Record-View-Icon displayed in the Toolbar-Header. |
| classes | string | CSS-Classes to be used for the Record-View-Icon. |
| styles | string | Styles to be applied to the Record-View-Icon. |


**ScriptListParametersobject**

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| start | number | Index from where to fetch the next row |
| limit | number | Number of rows to fetch |
| searchExpression | string | search expression entered by the user to be used on this list |
| sort | string | short notation of current sort action |
| sortState | string | sort states with index for all columns |
| sortExpression | string | id of clicked column |
| sortOrder | string | new sort direction for the clicked column |
| sortMode | string | Depending on how a column is clicked, certain sort actions are invoked for it: sortAdd Sorting is added to column on left click. sortReset Sorting is reset to ascending on right click and removed from all non-clicked columns. sortRemove Sorting is removed from column on double click. |
| activeId | string | ID of the currently active row (since DOCUMENTS 5.0f) |
| allCheckboxSelected | Array.<string> | checkbox for selecting all entries is checked | since DOCUMENTS 5.0g |
| selectedIds | Array.<string> | selected ids (since DOCUMENTS 5.0f) |
| selectedGroupIds | Array.<string> | selected group ids (since DOCUMENTS 5.0g) |


**comparatorCB(valA, valB, rowA, rowB){number}**
Callback to sort values of this column.

If remoteSort is enabled, rowA and rowB will be a otris.scriptlist.Row else they will be a documents.sdk.grid.GridRowModel.

| Name | Type | Description |
| --- | --- | --- |
| valA | any | value A that should be compared |
| valB | any | value B that should be compared |
| rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared |
| rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared |

- Since:
DOCUMENTS 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally |


**groupComparatorCB(groupA, groupB){number}**
Callback to sort values of a group.

| Name | Type | Description |
| --- | --- | --- |
| groupA | object | doby-grid group A that should be compared |
| groupB | object | doby-grid group B that should be compared |

- Since:
DOCUMENTS 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| number | -1 sort groupA first, 1 sort groupB first, 0 groupA and groupB are sorted equally |


##### Example


```
comparator: (groupA, groupB) => {

 // each group contains a row that led to creation of this group
 const dateA = groupA.grouprows[0];
 const dateB = groupB.grouprows[0];

 // calculate distance between dates for sorting (<0 = first, 0 = equal, >0 last)
 return dateA.get("date") - dateB.get("date");
}
```


**hrlAfterAddColumnCB(list, docHit, myHRS, listColumn)**
Callback to be executed after a column has been added to the list.

| Name | Type | Description |
| --- | --- | --- |
| list | otris.scriptlist.HitresultList | the hitresult list |
| docHit | DocHit | DocHit from which the columns were created. |
| myHRS | HitResultset | Origin HitResultset from which the columns were created. |
| listColumn | otris.scriptlist.Column | Column that was added to the list. |


**hrlAfterAddColumnsCB(list, docHit, myHRS)**
Callback to be executed after all columns have been added to the list.

| Name | Type | Description |
| --- | --- | --- |
| list | otris.scriptlist.HitresultList | the hitresult list |
| docHit | DocHit | DocHit from which the columns were created. |
| myHRS | HitResultset | Origin HitResultset from which the columns were created. |


**hrlAfterAddRowCB(opts)**
Callback to be executed after adding the row to the list. This can be used to change the ScriptList Row.

| Name | Type | Description |
| --- | --- | --- |
| opts | object | Name Type Description id string fileId values object {key1: value1, key2: value2, ...} docHit DocHit DocHit hitResultset HitResultset HitResultset columns Array.<otris.scriptlist.Column> [Column, ...] columnKeys Array.string [key1, key2, ...] list otris.scriptlist.HitresultList the hitresult list row otris.scriptlist.Row row that was added to the list | Name | Type | Description | id | string | fileId | values | object | {key1: value1, key2: value2, ...} | docHit | DocHit | DocHit | hitResultset | HitResultset | HitResultset | columns | Array.<otris.scriptlist.Column> | [Column, ...] | columnKeys | Array.string | [key1, key2, ...] | list | otris.scriptlist.HitresultList | the hitresult list | row | otris.scriptlist.Row | row that was added to the list |
| Name | Type | Description |
| id | string | fileId |
| values | object | {key1: value1, key2: value2, ...} |
| docHit | DocHit | DocHit |
| hitResultset | HitResultset | HitResultset |
| columns | Array.<otris.scriptlist.Column> | [Column, ...] |
| columnKeys | Array.string | [key1, key2, ...] |
| list | otris.scriptlist.HitresultList | the hitresult list |
| row | otris.scriptlist.Row | row that was added to the list |


**hrlBeforeAddColumnCB(list, docHit, myHRS, column){Boolean}**
Callback to be executed before a column is added to the list.

If beforeAddColumn returns false, the column will be rejected and not shown.

| Name | Type | Description |
| --- | --- | --- |
| list | otris.scriptlist.HitresultList | the hitresult list |
| docHit | DocHit | DocHit from which the columns were created. |
| myHRS | HitResultset | Origin HitResultset from which the columns were created. |
| column | Column | Column to be added to the list. |


##### Returns:

| Type | Description |
| --- | --- |
| Boolean | False if column should be rejected. |


**hrlBeforeAddRowCB(opts)**
Callback to be executed before adding the row to the list. This can be used to change the data before it is added to the row.

If beforeAddRow returns false, the row will be rejected and not shown.

| Name | Type | Description |
| --- | --- | --- |
| opts | object | Name Type Description id string fileId values object {key1: value1, key2: value2, ...} docHit DocHit DocHit hitResultset HitResultset HitResultset columns Array.<otris.scriptlist.Column> [Column, ...] columnKeys Array.string [key1, key2, ...] list otris.scriptlist.HitresultList the hitresult list | Name | Type | Description | id | string | fileId | values | object | {key1: value1, key2: value2, ...} | docHit | DocHit | DocHit | hitResultset | HitResultset | HitResultset | columns | Array.<otris.scriptlist.Column> | [Column, ...] | columnKeys | Array.string | [key1, key2, ...] | list | otris.scriptlist.HitresultList | the hitresult list |
| Name | Type | Description |
| id | string | fileId |
| values | object | {key1: value1, key2: value2, ...} |
| docHit | DocHit | DocHit |
| hitResultset | HitResultset | HitResultset |
| columns | Array.<otris.scriptlist.Column> | [Column, ...] |
| columnKeys | Array.string | [key1, key2, ...] |
| list | otris.scriptlist.HitresultList | the hitresult list |


**hrlBeforeCreateHrsCB(list, params)**
Callback to manipulate the parameter for the HitResultset constructor.

| Name | Type | Description |
| --- | --- | --- |
| list | otris.scriptlist.HitresultList | the hitresult list |
| params | object | parameter of the HitResultset constructor. (See HitResultset constructor for details) Name Type Description searchResources any filter string sortOrder string hitlist any pageSize number unlimitedHits boolean fullColumnLength boolean withBlobInfo boolean | Name | Type | Description | searchResources | any |  | filter | string |  | sortOrder | string |  | hitlist | any |  | pageSize | number |  | unlimitedHits | boolean |  | fullColumnLength | boolean |  | withBlobInfo | boolean |  |
| Name | Type | Description |
| searchResources | any |  |
| filter | string |  |
| sortOrder | string |  |
| hitlist | any |  |
| pageSize | number |  |
| unlimitedHits | boolean |  |
| fullColumnLength | boolean |  |
| withBlobInfo | boolean |  |

- Since:
DOCUMENTS 5.0h


**hrlBeforeTransferCB(list)**
Before transfer list callback.

| Name | Type | Description |
| --- | --- | --- |
| list | otris.scriptlist.HitresultList | the hitresult list |

- Since:
DOCUMENTS 5.0h


**hrlOnRowClickCB(dc, opts)**
Callback to be executed when clicking on a row.

| Name | Type | Description |
| --- | --- | --- |
| dc | DocumentsContext | a newly created DocumentsContext |
| opts | object | options passed when a row was clicked Name Type Description rowIndex number the current grid row index cellIndex number the current grid cell index row Row the current grid row model column Column the current grid column model originalEvent Event the current original dom event | Name | Type | Description | rowIndex | number | the current grid row index | cellIndex | number | the current grid cell index | row | Row | the current grid row model | column | Column | the current grid column model | originalEvent | Event | the current original dom event |
| Name | Type | Description |
| rowIndex | number | the current grid row index |
| cellIndex | number | the current grid cell index |
| row | Row | the current grid row model |
| column | Column | the current grid column model |
| originalEvent | Event | the current original dom event |


**hrlSearchFilterCB(list, searchFilter, searchExpression){string}**
Callback to manipulate the search filter used for the Hitresultset.

| Name | Type | Description |
| --- | --- | --- |
| list | otris.scriptlist.HitresultList | the hitresult list |
| searchFilter | string | current search filter |
| searchExpression | string | search expression (search field user input) |

- Since:
DOCUMENTS 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| string | new search filter |


**otrListCellFormatterCB(row, cell, value, columnDef, data)**
Format row cell callback.

| Name | Type | Description |
| --- | --- | --- |
| row | number | rowIndex |
| cell | number | cellIndex |
| value | string | value of the cell |
| columnDef | object | column definition |
| data | object | data of the rendering row (Backbone.Model) |

- Since:
DOCUMENTS 5.0i


**otrListRowClickCB(documentsContext, options)**
| Name | Type | Description |
| --- | --- | --- |
| documentsContext | object | A newly created DocumentsContext |
| options | object | Name Type Description rowIndex number the current grid row index cellIndex number the current grid cell index row object the current grid row model column object the current grid column model originalEvent object the current original dom event contextData object context data, see setContextData | Name | Type | Description | rowIndex | number | the current grid row index | cellIndex | number | the current grid cell index | row | object | the current grid row model | column | object | the current grid column model | originalEvent | object | the current original dom event | contextData | object | context data, see setContextData |
| Name | Type | Description |
| rowIndex | number | the current grid row index |
| cellIndex | number | the current grid cell index |
| row | object | the current grid row model |
| column | object | the current grid column model |
| originalEvent | object | the current original dom event |
| contextData | object | context data, see setContextData |

- Since:
DOCUMENTS 5.0i


**otrListRowStyleCB(row){string}**
Callback to style a row.

| Name | Type | Description |
| --- | --- | --- |
| row | object | Row for which the style should be generated. |


##### Returns:

| Type | Description |
| --- | --- |
| string | Style to be applied. |


**otrOnSelectionChangedCB(documentsContext, options)**
Callback after rows have been selected/deselected

| Name | Type | Description |
| --- | --- | --- |
| documentsContext | object | A newly created DocumentsContext |
| options | object | Name Type Description addedRows object Rows that were added to the current selection. selectedRows object Currently selected rows. deselecting boolean true if rows were deselected. contextData object context data, see setContextData | Name | Type | Description | addedRows | object | Rows that were added to the current selection. | selectedRows | object | Currently selected rows. | deselecting | boolean | true if rows were deselected. | contextData | object | context data, see setContextData |
| Name | Type | Description |
| addedRows | object | Rows that were added to the current selection. |
| selectedRows | object | Currently selected rows. |
| deselecting | boolean | true if rows were deselected. |
| contextData | object | context data, see setContextData |

- Since:
DOCUMENTS 5.0i


**otrisListColumnExporterCB(value, row, col)**
Export row column callback.

| Name | Type | Description |
| --- | --- | --- |
| value | any | Value for this cell. |
| row | otris.scriptlist.Row | Row whose value should be exported. |
| col | otris.scriptlist.Column | Column definition whose value should be exported. |

- Since:
DOCUMENTS 5.0i HF5