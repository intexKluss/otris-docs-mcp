---
title: "Namespace: gentableRegistry"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.gentable.gentableRegistry.html"
---

### Methods


**staticdocuments.sdk.gentable.gentableRegistry.getCallback(tableDefName, event){function}**
Returns a callback function that is registered to a gentable related exit event.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| event | string | the name of the event |

- Since:
5.0a
- See:  registerCallback


##### Returns:

| Type | Description |
| --- | --- |
| function | the exit function (or callback) |


**staticdocuments.sdk.gentable.gentableRegistry.getCallbacks(tableDefName, event){function}**
Returns a callback function that is registered to a gentable related exit event.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| event | string | the name of the event |

- Since:
5.0a
- See:  registerCallback


##### Returns:

| Type | Description |
| --- | --- |
| function | the exit function (or callback) |


**staticdocuments.sdk.gentable.gentableRegistry.getDefinition(tableDefName){string}**
Returns a register definition.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string |  |


**staticdocuments.sdk.gentable.gentableRegistry.getGridCellEditor(tableDefName, type){function}**
Returns the cell editor with the given type.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| type | string | Type in the gentable field definition |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| function | Valid doby-grid editor constructor |


**staticdocuments.sdk.gentable.gentableRegistry.getGridCellRenderer(tableDefName, type){function}**
Returns the cell renderer with the given type.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| type | string | type in the gentable field definition |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| function | Function returning a html string |


**staticdocuments.sdk.gentable.gentableRegistry.getGridColumnAggregator(tableDefName, title){function}**
Returns the column aggregator for the give column.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| title | string | title in the gentable field definition |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| function | Function returning a html string |


**staticdocuments.sdk.gentable.gentableRegistry.registerCallback(tableDefName, event, fn)**
Registers a callback function that can be attached to a gentable related exit event.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| event | string | the name of the event referenced as <function> or <event> in the xml configuration file or one of the valid identifiers listed below Gentable.beforeRender Gentable.afterRender Gentable.beforeStore (optionally cancels the gentable store and file edit commit action if callback fn returns false) Gentable.afterStore Gentable.afterRowSelect Gentable.cellFormatter Gentable.rowStyle Gentable.comparators Gentable.onRowActivated (since: 5.0i) Gentable.postprocessCell |
| fn | function | the function (or callback) that will be called if the exit event occurs Notice: Any callback will be executed according to the function signature listed below. GentableCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed in the function options Object the options passed in the function Name Type Description gentableDefinitionName string fileTypeName string the technical name of the file type $cell jQueryElement optional the current grid cell node rowIndex Number optional the current grid row index cellIndex Number optional the current grid cell index editable boolean optional is grid in edit mode (available in Gentable.onRowActivated) rowData Object optional the current grid row data (available in Gentable.onRowActivated) row documents.sdk.gentable.grid.GentableGridRowModel optional the current grid row model column dobyGridColumnModel optional the current grid column model originalEvent string optional the current original dom event renderOptions Object optional render-options for callback Gentable.cellFormatter Name Type Description defaultFormatter function Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered useDefaultFormatter boolean Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed in the function | options | Object | the options passed in the function Name Type Description gentableDefinitionName string fileTypeName string the technical name of the file type $cell jQueryElement optional the current grid cell node rowIndex Number optional the current grid row index cellIndex Number optional the current grid cell index editable boolean optional is grid in edit mode (available in Gentable.onRowActivated) rowData Object optional the current grid row data (available in Gentable.onRowActivated) row documents.sdk.gentable.grid.GentableGridRowModel optional the current grid row model column dobyGridColumnModel optional the current grid column model originalEvent string optional the current original dom event renderOptions Object optional render-options for callback Gentable.cellFormatter Name Type Description defaultFormatter function Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered useDefaultFormatter boolean Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) | Name | Type | Description | gentableDefinitionName | string |  | fileTypeName | string | the technical name of the file type | $cell | jQueryElement | optional the current grid cell node | rowIndex | Number | optional the current grid row index | cellIndex | Number | optional the current grid cell index | editable | boolean | optional is grid in edit mode (available in Gentable.onRowActivated) | rowData | Object | optional the current grid row data (available in Gentable.onRowActivated) | row | documents.sdk.gentable.grid.GentableGridRowModel | optional the current grid row model | column | dobyGridColumnModel | optional the current grid column model | originalEvent | string | optional the current original dom event | renderOptions | Object | optional render-options for callback Gentable.cellFormatter Name Type Description defaultFormatter function Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered useDefaultFormatter boolean Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) | Name | Type | Description | defaultFormatter | function | Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered | Name | Type | Description | row | Number | current row index | cell | Number | current cell index | value | string | string value that will be rendered | columnDef | object | doby-grid-column for this cell | data | object | doby-grid row that is being rendered | useDefaultFormatter | boolean | Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed in the function |
| options | Object | the options passed in the function Name Type Description gentableDefinitionName string fileTypeName string the technical name of the file type $cell jQueryElement optional the current grid cell node rowIndex Number optional the current grid row index cellIndex Number optional the current grid cell index editable boolean optional is grid in edit mode (available in Gentable.onRowActivated) rowData Object optional the current grid row data (available in Gentable.onRowActivated) row documents.sdk.gentable.grid.GentableGridRowModel optional the current grid row model column dobyGridColumnModel optional the current grid column model originalEvent string optional the current original dom event renderOptions Object optional render-options for callback Gentable.cellFormatter Name Type Description defaultFormatter function Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered useDefaultFormatter boolean Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) | Name | Type | Description | gentableDefinitionName | string |  | fileTypeName | string | the technical name of the file type | $cell | jQueryElement | optional the current grid cell node | rowIndex | Number | optional the current grid row index | cellIndex | Number | optional the current grid cell index | editable | boolean | optional is grid in edit mode (available in Gentable.onRowActivated) | rowData | Object | optional the current grid row data (available in Gentable.onRowActivated) | row | documents.sdk.gentable.grid.GentableGridRowModel | optional the current grid row model | column | dobyGridColumnModel | optional the current grid column model | originalEvent | string | optional the current original dom event | renderOptions | Object | optional render-options for callback Gentable.cellFormatter Name Type Description defaultFormatter function Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered useDefaultFormatter boolean Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) | Name | Type | Description | defaultFormatter | function | Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered | Name | Type | Description | row | Number | current row index | cell | Number | current cell index | value | string | string value that will be rendered | columnDef | object | doby-grid-column for this cell | data | object | doby-grid row that is being rendered | useDefaultFormatter | boolean | Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) |
| Name | Type | Description |
| gentableDefinitionName | string |  |
| fileTypeName | string | the technical name of the file type |
| $cell | jQueryElement | optional the current grid cell node |
| rowIndex | Number | optional the current grid row index |
| cellIndex | Number | optional the current grid cell index |
| editable | boolean | optional is grid in edit mode (available in Gentable.onRowActivated) |
| rowData | Object | optional the current grid row data (available in Gentable.onRowActivated) |
| row | documents.sdk.gentable.grid.GentableGridRowModel | optional the current grid row model |
| column | dobyGridColumnModel | optional the current grid column model |
| originalEvent | string | optional the current original dom event |
| renderOptions | Object | optional render-options for callback Gentable.cellFormatter Name Type Description defaultFormatter function Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered useDefaultFormatter boolean Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) | Name | Type | Description | defaultFormatter | function | Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered | Name | Type | Description | row | Number | current row index | cell | Number | current cell index | value | string | string value that will be rendered | columnDef | object | doby-grid-column for this cell | data | object | doby-grid row that is being rendered | useDefaultFormatter | boolean | Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) |
| Name | Type | Description |
| defaultFormatter | function | Original doby-grid-formatter that would be used for this cell. Can be used to generate the default html and modify it further. ColumnFormatter(row, cell, value, columnDef, data) Name Type Description row Number current row index cell Number current cell index value string string value that will be rendered columnDef object doby-grid-column for this cell data object doby-grid row that is being rendered | Name | Type | Description | row | Number | current row index | cell | Number | current cell index | value | string | string value that will be rendered | columnDef | object | doby-grid-column for this cell | data | object | doby-grid row that is being rendered |
| Name | Type | Description |
| row | Number | current row index |
| cell | Number | current cell index |
| value | string | string value that will be rendered |
| columnDef | object | doby-grid-column for this cell |
| data | object | doby-grid row that is being rendered |
| useDefaultFormatter | boolean | Disable embedding the returned HTML in the default-formatter by setting this to false. (Default: true) |

- Since:
5.0a
- See:  getCallback DocumentsContext GentableContext


##### Examples


```
documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "calculateTotal", function(documentsContext, options) {
	 var gentableContext = documentsContext.getGentableContext();
	 var grid = gentableContext.getGridModel();
	 var row = options.row;
});
```


```
documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.beforeStore", function(documentsContext, options) {
	 var grid = documentsContext.getGentableContext().getGridModel();
	 var validationSuccess = false;
	 // perform some validation checks against the grid model data...
	 if(!validationSuccess) {
	   documentsContext.openMessageDialog("Error", "The invoice data is not valid!");
	   return false;  //  abort gentable store and file edit commit action
	 }
});
```


```
documents.sdk.gentable.gentableRegistry.registerCallback("erpOrder", "Gentable.afterRender", function(documentsContext, options) {
  var gentableContext = documentsContext.getGentableContext();
});
```


```
documents.sdk.gentable.gentableRegistry.registerCallback("myGentableSimpleTest", "Gentable.onRowActivated", function(dc, options) {
  // log data of activated row & grid edit mode state
  console.log("options.rowData", options.rowData);
  console.log("options.editable", options.editable);
});
```


**staticdocuments.sdk.gentable.gentableRegistry.registerGridCellEditor(tableDefName, type, cellEditor)**
Registers a grid cell editor.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| type | string |  |
| cellEditor | function | doby-grid editor constructor |

- Since:
5.0a


**staticdocuments.sdk.gentable.gentableRegistry.registerGridCellRenderer(tableDefName, type, cellRenderer)**
Registers a grid cell renderer.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| type | string |  |
| cellRenderer | function | Function returning a html string |

- Since:
5.0a


**staticdocuments.sdk.gentable.gentableRegistry.registerGridColumnAggregator(tableDefName, title, columnAggregator)**
Registers a column aggregator.

| Name | Type | Description |
| --- | --- | --- |
| tableDefName | string | the gentable definition name(s) specified in the gentable xml configuration file by <table_def name="">, each separated by , or * for any definition name Caution: This parameter is not a file type or archive type name! |
| title | string | title in the gentable field definition |
| columnAggregator | function | Function returning a doby-grid column aggregator |

- Since:
5.0c