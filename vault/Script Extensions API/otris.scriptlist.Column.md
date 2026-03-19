---
title: "Class: Column"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.Column.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| key | string | object | Id for the column or object configuration Name Type Description comparator function Callback to sort values of this column. comparatorCB(valA, valB, rowA, rowB){number} Callback to sort values of this column. If remoteSort is enabled, rowA and rowB will be a otris.scriptlist.Row else they will be a documents.sdk.grid.GridRowModel. Name Type Description valA any value A that should be compared valB any value B that should be compared rowA otris.scriptlist.Row | documents.sdk.grid.GridRowModel row A that should be compared rowB otris.scriptlist.Row | documents.sdk.grid.GridRowModel row B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally formatter HbsTemplateString | otrListCellFormatterCB Formatter to be used for this columns' cells (since DOCUMENTS 5.0i) sortKey string Key which will be used for a HitresultList when sorting this column (since DOCUMENTS 5.0i) sortOrder string Sort order of the column visible boolean Column is visible (since DOCUMENTS 5.0i) width string Width of the column | Name | Type | Description | comparator | function | Callback to sort values of this column. comparatorCB(valA, valB, rowA, rowB){number} Callback to sort values of this column. If remoteSort is enabled, rowA and rowB will be a otris.scriptlist.Row else they will be a documents.sdk.grid.GridRowModel. Name Type Description valA any value A that should be compared valB any value B that should be compared rowA otris.scriptlist.Row | documents.sdk.grid.GridRowModel row A that should be compared rowB otris.scriptlist.Row | documents.sdk.grid.GridRowModel row B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally | Name | Type | Description | valA | any | value A that should be compared | valB | any | value B that should be compared | rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared | rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared | Type | Description | number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally | formatter | HbsTemplateString | otrListCellFormatterCB | Formatter to be used for this columns' cells (since DOCUMENTS 5.0i) | sortKey | string | Key which will be used for a HitresultList when sorting this column (since DOCUMENTS 5.0i) | sortOrder | string | Sort order of the column | visible | boolean | Column is visible (since DOCUMENTS 5.0i) | width | string | Width of the column |
| Name | Type | Description |
| comparator | function | Callback to sort values of this column. comparatorCB(valA, valB, rowA, rowB){number} Callback to sort values of this column. If remoteSort is enabled, rowA and rowB will be a otris.scriptlist.Row else they will be a documents.sdk.grid.GridRowModel. Name Type Description valA any value A that should be compared valB any value B that should be compared rowA otris.scriptlist.Row | documents.sdk.grid.GridRowModel row A that should be compared rowB otris.scriptlist.Row | documents.sdk.grid.GridRowModel row B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally | Name | Type | Description | valA | any | value A that should be compared | valB | any | value B that should be compared | rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared | rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared | Type | Description | number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally |
| Name | Type | Description |
| valA | any | value A that should be compared |
| valB | any | value B that should be compared |
| rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared |
| rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared |
| Type | Description |
| number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally |
| formatter | HbsTemplateString | otrListCellFormatterCB | Formatter to be used for this columns' cells (since DOCUMENTS 5.0i) |
| sortKey | string | Key which will be used for a HitresultList when sorting this column (since DOCUMENTS 5.0i) |
| sortOrder | string | Sort order of the column |
| visible | boolean | Column is visible (since DOCUMENTS 5.0i) |
| width | string | Width of the column |
| dataType | otris.scriptlist.ColumnDataType | Data type of the data in this column (STRING, NUMBER, ICON, CUSTOM, CHECKBOX, DATE, TIMESTAMP or TRANSLATION_FIELD) |
| label | string | Header label of the column |


### Methods


**getComparator(){comparatorCB}**
Get the comparator function that is used for sorting this column


##### Returns:

| Type | Description |
| --- | --- |
| comparatorCB | comparator that is used for sorting this column |


**getDataType(){otris.scriptlist.ColumnDataType}**
Get the data type of the column.


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.ColumnDataType | the columns data type (STRING, NUMBER, ICON, CUSTOM, CHECKBOX, DATE, TIMESTAMP or TRANSLATION_FIELD) |


**getExporter(){boolean|otrisListColumnExporterCB}**
Get the export function for this column.

- Since:
DOCUMENTS 5.0i HF5


##### Returns:

| Type | Description |
| --- | --- |
| boolean | otrisListColumnExporterCB | Export function for this column. |


**getFormattedNumber(){boolean}**
Get whether number should be displayed localized and formatted.

- Since:
DOCUMENTS 5.0i HF6


##### Returns:

| Type | Description |
| --- | --- |
| boolean | show as localized formatted number |


**getFormatter(){HbsTemplateString|otrListCellFormatterCB}**
Get the formatter for this column

- Since:
DOCUMENTS 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| HbsTemplateString | otrListCellFormatterCB | Formatter for this columns' cells |


**getKey(){string}**
Gets the key (the technical name) of this column


##### Returns:

| Type | Description |
| --- | --- |
| string | technical column name |


**getLabel(){string}**
Get the label of the column


##### Returns:

| Type | Description |
| --- | --- |
| string | label of the column |


**getNrDecimals(){number}**
Get number of decimals to display for this column.

- Since:
DOCUMENTS 5.0i HF6


##### Returns:

| Type | Description |
| --- | --- |
| number | Number of decimals to display for this column. |


**getQuickFilterOptions()**
Gets the quickFilterType of the column.


**getSortKey(){string}**
Get sort key which will be used for sorting the HitresultList.

- Since:
DOCUMENTS 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| string | The key by which this column will be sorted. |


**getSortOrder(){string}**
Gets the sort order of the column.


##### Returns:

| Type | Description |
| --- | --- |
| string | sortOrder - Possible values: 0, 1 (ascending), -1 (descending) (Use: 2,-2 / 3,-3 / ... for multi column sort). |


**getSortable(){boolean}**
Get sortability of this column.


##### Returns:

| Type | Description |
| --- | --- |
| boolean | sorting this column is allowed |


**getVisible(){boolean}**
Gets wether or not the column should be visible.


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true, if the column should be visible |


**getWidth(){number}**
Get the width(in pixels) of this column


##### Returns:

| Type | Description |
| --- | --- |
| number | width of the column |


**setComparator(comparator){otris.scriptlist.Column}**
Sets the comparator for sorting values of this column

| Name | Type | Description |
| --- | --- | --- |
| comparator | function | Comparator for sorting value of this column. comparatorCB(valA, valB, rowA, rowB){number} Callback to sort values of this column. If remoteSort is enabled, rowA and rowB will be a otris.scriptlist.Row else they will be a documents.sdk.grid.GridRowModel. Name Type Description valA any value A that should be compared valB any value B that should be compared rowA otris.scriptlist.Row | documents.sdk.grid.GridRowModel row A that should be compared rowB otris.scriptlist.Row | documents.sdk.grid.GridRowModel row B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally | Name | Type | Description | valA | any | value A that should be compared | valB | any | value B that should be compared | rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared | rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared | Type | Description | number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally |
| Name | Type | Description |
| valA | any | value A that should be compared |
| valB | any | value B that should be compared |
| rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared |
| rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared |
| Type | Description |
| number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current Column |


**setDataType(columnDataType){otris.scriptlist.Column}**
Set the data type of the column.

| Name | Type | Description |
| --- | --- | --- |
| columnDataType | otris.scriptlist.ColumnDataType | the new data type (STRING, NUMBER, ICON, CUSTOM, CHECKBOX, DATE, TIMESTAMP or TRANSLATION_FIELD) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setExporter(exporter){otris.scriptlist.Column}**
If **list.setShowExportActions(true)** was set, the list can be exported to an export file.

When the list is exported, the origin script will be called with the current sort and search parameters.

Each row value will be exported to the file. If a column has an export-function defined, this function will be

called to serialize the returned **string value** into the exported file.

If column.setExport(false) is called, this column will be excluded from export.

This can be used to exclude columns from export or return a more meaningful value in case a formatter is used or an icon is

displayed in this column.

| Name | Type | Description |
| --- | --- | --- |
| exporter | boolean | otrisListColumnExporterCB | Function that is executed when exporting the list or false if this column should not be exported. Must return a string value. If the value is empty, the empty string "" must be returned. |

- Since:
DOCUMENTS 5.0i HF5


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


##### Example


```
// aggregate values from multiple columns
col.setExporter((row) => "name: " + row.getValue("name") + ", price: " + row.getValue("price"));
```


**setFormattedNumber(formattedNumber){otris.scriptlist.Column}**
Show number in localized format.

| Name | Type | Description |
| --- | --- | --- |
| formattedNumber | boolean | show as localized formatted number |

- Since:
DOCUMENTS 5.0i HF6


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current Column |


**setFormatter(formatter){otris.scriptlist.Column}**
Handlebars template string or function to be used when rendering this columns' cell.

| Name | Type | Description |
| --- | --- | --- |
| formatter | HbsTemplateString | otrListCellFormatterCB | Custom formatter to be used for cells from this column. |

- Since:
DOCUMENTS 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


##### Example


```
col.setFormatter("{{#if value}}{{value}}{{else}}No value defined!{{/if}}");
```


**setKey(key){otris.scriptlist.Column}**
Set the key (the technical name) of this column

| Name | Type | Description |
| --- | --- | --- |
| key | string | the new key |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setLabel(label){otris.scriptlist.Column}**
Set the label of the column

| Name | Type | Description |
| --- | --- | --- |
| label | string | the new label |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setNrDecimals(nrDecimals){otris.scriptlist.Column}**
Set number of decimals to display. Must be an integer.

| Name | Type | Description |
| --- | --- | --- |
| nrDecimals | number | Number of decimals to display. Must be an integer. |

- Since:
DOCUMENTS 5.0i HF6


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current Column |


**setQuickFilterOptions(quickFilterType){otris.scriptlist.Column}**
Sets the quickFilterType to be used as input element for this column.

If the quickFilterType is set to false, the quickFilter will be disabled for this column.

| Name | Type | Description |
| --- | --- | --- |
| quickFilterType | string | quickFilterType - Possible values: STRING,CHECKBOX,false[,SELECT,DATE,RANGE] |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setSortKey(sortKey){otris.scriptlist.Column}**
If a new column is added to a HitresultList, the grid cannot be sorted remotely by its key because it doesn't exist in the original hitlist.

This can be used to set a proxy-key which will be used instead to sort the HitresultList by an existing column key.

| Name | Type | Description |
| --- | --- | --- |
| sortKey | string | Key which will be used for the HitresultList when sorting this column. |

- Since:
DOCUMENTS 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setSortOrder(sortOrder){otris.scriptlist.Column}**
Sets the sort order.

| Name | Type | Description |
| --- | --- | --- |
| sortOrder | string | Possible values: 0, 1 (ascending), -1 (descending) (Use: 2,-2 / 3,-3 / ... for multi column sort). |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setSortable(sortable){otris.scriptlist.Column}**
Enable or disable sorting of a column

| Name | Type | Description |
| --- | --- | --- |
| sortable | boolean | allow sorting this column |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setVisible(visible){otris.scriptlist.Column}**
Sets wether or not the column should be visible.

Useful when you need columns to group by or columns containing a unique id that

should not be displayed in the grid.

| Name | Type | Description |
| --- | --- | --- |
| visible | boolean | true, if the column should be visible |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**setWidth(width){otris.scriptlist.Column}**
Set the width(in pixels) of this column

| Name | Type | Description |
| --- | --- | --- |
| width | number | width of the column |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Current column |


**transfer(){object}**
Transfer function returning the data of the Column for a gadget.


##### Returns:

| Type | Description |
| --- | --- |
| object | Data of the column |