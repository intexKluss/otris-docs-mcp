---
title: "Class: List"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.List.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| title | string | The title of the list that will be displayed in the lists toolbar |


##### Example


```
// #import [ScriptList]
var random = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};
var startIndex = typeof start === "string" ? parseInt(start) : 0;
var itemCount = typeof limit === "string" ? parseInt(limit) : 50;
var list = new otris.scriptlist.List("My API List");
list.setStartIndex(startIndex);
list.setShowSearchBox({ remoteSearch: false });
// Static reference data for the list
var month = ["January", "Febuary", "March", "April", "May", "June", "July", "September", "October", "November", "December"];
var stati = ["_image:custom/bullet_ball_glass_red.gif", "_image:custom/bullet_ball_glass_yellow.gif", "_image:custom/bullet_ball_glass_green.gif"];
var check = ["0", "1"];
var zeros = "000000";
// Creating the list columns
list.addColumn("Status", "Status", "CUSTOM");
list.addColumn("Nummer", "Nummer");
list.addColumn("Month", "Month");
list.addColumn("Erledigt", "Erledigt", "CHECKBOX");
list.setGroupHeaderTemplate('<div style="padding-left:calc({{index}}*15px)"><span class="otrIcon"></span><b>{{value}}</b></div>');
list.setGrouping(["Month"]);
list.setCollapsed(false);
// Fill the list with data
for (var i = startIndex; i < startIndex + itemCount; i++) {
  var stringi = i + "";
  var row = list.addRow([random(stati), "#" + zeros.substr(0, zeros.length - stringi.length) + i, random(month), random(check)]);

  if(i%3==0) {
  	row.setTag('<div style="background: green;width: 3px;position: absolute;top: 1px;bottom: 1px;left: 2px;height: auto;"></div>');
  }
  else if(i%5==0) {
  	row.setTag(true);
  }
  else if(i%7==0) {
  	row.setTag('<div style="background: blue;width: 3px;position: absolute;top: 1px;bottom: 1px;left: 2px;height: auto;"></div>');
  }
  else if(i%11==0) {
  	row.setTag('<div style="background: red;width: 3px;position: absolute;top: 1px;bottom: 1px;left: 2px;height: auto;"></div>');
  }
  else if(i%2==0) {
 	row.setTag(true);
 	row.setTagColor("green");
  }
}
// Return the data as JSON string
context.returnType = "scriptList";
return list.transfer();
```


### Members


**getRows**


### Methods


**addAction(listAction)**
Adds a new action to the list.

| Name | Type | Description |
| --- | --- | --- |
| listAction | object | List action to be addded to the list. Name Type Default Description name string Unique name of the action label string Label to display for this action type string button optional Type of the action ("button", "list" or "contextmenu") default: "button" action string optional Action to be executed, e.g. runScript:<script-name>[&<param1>=<value1>&<param2>...] - execute a portal script and pass parameters showFile:<fileId> - show a file showFolder:<folderId> - show a folder showHomeView - show the home executePrivateSearch&privateSearchMaskName=<name> - execute a private search refreshScriptlist[&<param1>=<value1>&<param2>...] - Refresh the current scriptlist with passed parameters. xlsxExportSelected - export selected entries as xlsx xlsxExportAll - export all entries as xlsx globalAction:<name> - execute a globally defined action (since DOCUMENTS 6.1.0) actionGroup string optional Id of the action groups' configuration that should be used for this action. imageFile string optional The action is displayed with the referenced icon (entypo: or ionicons: syntax is supported). Only for type button alwaysShowLabel boolean false optional Show the label even if an imageFile is defined autoResetSelection boolean optional Use this to disable automatically resetting the grids selected rows after the action was executed. [*since DOCUMENTS 5.0i HF5] enabled boolean | string optional Action is enabled. If the value is "onRowSelect", this action will only be enabled if rows are selected. [since DOCUMENTS 5.0i] tooltip string optional Optional tooltip clientAction string optional [ONLY USEABLE IN GADGET CONTEXT] Register a client function that is called with an array of ids if showCheckboxes is enabled gadgetAction string optional [ONLY USEABLE IN GADGET CONTEXT] Register a gadget action belonging to the same gadgetScript to be executed on click useScriptParameterDialog boolean false optional default false, if true a script parameter dialog will always be displayed if the script has defined parameter (since DOCUMENTS 5.0f) dialogTitle string optional the title of the script parameter dialog (since DOCUMENTS 5.0f) clientScript function | string optional Function to be exucuted in the client. (since DOCUMENTS 5.0f) // The parameters documentsContext and options will be passed. function(documentsContext, options) { documentsContext: A newly created DocumentsContext options: { dobyGrid: doby-grid object for scriptlist listActionName: name of the action being executed selectedGroupsIds: list of the selected group ids selectedIds: list of selected ids } } | Name | Type | Default | Description | name | string |  | Unique name of the action | label | string |  | Label to display for this action | type | string | button | optional Type of the action ("button", "list" or "contextmenu") default: "button" | action | string |  | optional Action to be executed, e.g. runScript:<script-name>[&<param1>=<value1>&<param2>...] - execute a portal script and pass parameters showFile:<fileId> - show a file showFolder:<folderId> - show a folder showHomeView - show the home executePrivateSearch&privateSearchMaskName=<name> - execute a private search refreshScriptlist[&<param1>=<value1>&<param2>...] - Refresh the current scriptlist with passed parameters. xlsxExportSelected - export selected entries as xlsx xlsxExportAll - export all entries as xlsx globalAction:<name> - execute a globally defined action (since DOCUMENTS 6.1.0) | actionGroup | string |  | optional Id of the action groups' configuration that should be used for this action. | imageFile | string |  | optional The action is displayed with the referenced icon (entypo: or ionicons: syntax is supported). Only for type button | alwaysShowLabel | boolean | false | optional Show the label even if an imageFile is defined | autoResetSelection | boolean |  | optional Use this to disable automatically resetting the grids selected rows after the action was executed. [*since DOCUMENTS 5.0i HF5] | enabled | boolean | string |  | optional Action is enabled. If the value is "onRowSelect", this action will only be enabled if rows are selected. [since DOCUMENTS 5.0i] | tooltip | string |  | optional Optional tooltip | clientAction | string |  | optional [ONLY USEABLE IN GADGET CONTEXT] Register a client function that is called with an array of ids if showCheckboxes is enabled | gadgetAction | string |  | optional [ONLY USEABLE IN GADGET CONTEXT] Register a gadget action belonging to the same gadgetScript to be executed on click | useScriptParameterDialog | boolean | false | optional default false, if true a script parameter dialog will always be displayed if the script has defined parameter (since DOCUMENTS 5.0f) | dialogTitle | string |  | optional the title of the script parameter dialog (since DOCUMENTS 5.0f) | clientScript | function | string |  | optional Function to be exucuted in the client. (since DOCUMENTS 5.0f) // The parameters documentsContext and options will be passed. function(documentsContext, options) { documentsContext: A newly created DocumentsContext options: { dobyGrid: doby-grid object for scriptlist listActionName: name of the action being executed selectedGroupsIds: list of the selected group ids selectedIds: list of selected ids } } |
| Name | Type | Default | Description |
| name | string |  | Unique name of the action |
| label | string |  | Label to display for this action |
| type | string | button | optional Type of the action ("button", "list" or "contextmenu") default: "button" |
| action | string |  | optional Action to be executed, e.g. runScript:<script-name>[&<param1>=<value1>&<param2>...] - execute a portal script and pass parameters showFile:<fileId> - show a file showFolder:<folderId> - show a folder showHomeView - show the home executePrivateSearch&privateSearchMaskName=<name> - execute a private search refreshScriptlist[&<param1>=<value1>&<param2>...] - Refresh the current scriptlist with passed parameters. xlsxExportSelected - export selected entries as xlsx xlsxExportAll - export all entries as xlsx globalAction:<name> - execute a globally defined action (since DOCUMENTS 6.1.0) |
| actionGroup | string |  | optional Id of the action groups' configuration that should be used for this action. |
| imageFile | string |  | optional The action is displayed with the referenced icon (entypo: or ionicons: syntax is supported). Only for type button |
| alwaysShowLabel | boolean | false | optional Show the label even if an imageFile is defined |
| autoResetSelection | boolean |  | optional Use this to disable automatically resetting the grids selected rows after the action was executed. [*since DOCUMENTS 5.0i HF5] |
| enabled | boolean | string |  | optional Action is enabled. If the value is "onRowSelect", this action will only be enabled if rows are selected. [since DOCUMENTS 5.0i] |
| tooltip | string |  | optional Optional tooltip |
| clientAction | string |  | optional [ONLY USEABLE IN GADGET CONTEXT] Register a client function that is called with an array of ids if showCheckboxes is enabled |
| gadgetAction | string |  | optional [ONLY USEABLE IN GADGET CONTEXT] Register a gadget action belonging to the same gadgetScript to be executed on click |
| useScriptParameterDialog | boolean | false | optional default false, if true a script parameter dialog will always be displayed if the script has defined parameter (since DOCUMENTS 5.0f) |
| dialogTitle | string |  | optional the title of the script parameter dialog (since DOCUMENTS 5.0f) |
| clientScript | function | string |  | optional Function to be exucuted in the client. (since DOCUMENTS 5.0f) // The parameters documentsContext and options will be passed. function(documentsContext, options) { documentsContext: A newly created DocumentsContext options: { dobyGrid: doby-grid object for scriptlist listActionName: name of the action being executed selectedGroupsIds: list of the selected group ids selectedIds: list of selected ids } } |


**addActionGroup(actionGroup){ActionGroup}**
| Name | Type | Description |
| --- | --- | --- |
| actionGroup | ActionGroup | Configuration of the action group |


##### Returns:

| Type | Description |
| --- | --- |
| ActionGroup | Action group that was created. |


**addColumn(key, label, dataType, index){otris.scriptlist.Column}**
Add a column to the list

| Name | Type | Description |
| --- | --- | --- |
| key | string | object | the technical name of the column or object configuration Name Type Description key string the technical name of the column label string Header label of the column dataType otris.scriptlist.ColumnDataType optional Data type of the data in this column (STRING, NUMBER, ICON, CUSTOM, CHECKBOX, DATE or TIMESTAMP) formatter string | function optional Formatter to be used for this columns' cells (since DOCUMENTS 5.0i) index string optional Index at which position the column should be inserted sortOrder string optional Sort order of the column visible boolean optional Column is visible width number optional Width of the column cellClass string optional CSS classs for the cells of this column (since DOCUMENTS 6.0.1) | Name | Type | Description | key | string | the technical name of the column | label | string | Header label of the column | dataType | otris.scriptlist.ColumnDataType | optional Data type of the data in this column (STRING, NUMBER, ICON, CUSTOM, CHECKBOX, DATE or TIMESTAMP) | formatter | string | function | optional Formatter to be used for this columns' cells (since DOCUMENTS 5.0i) | index | string | optional Index at which position the column should be inserted | sortOrder | string | optional Sort order of the column | visible | boolean | optional Column is visible | width | number | optional Width of the column | cellClass | string | optional CSS classs for the cells of this column (since DOCUMENTS 6.0.1) |
| Name | Type | Description |
| key | string | the technical name of the column |
| label | string | Header label of the column |
| dataType | otris.scriptlist.ColumnDataType | optional Data type of the data in this column (STRING, NUMBER, ICON, CUSTOM, CHECKBOX, DATE or TIMESTAMP) |
| formatter | string | function | optional Formatter to be used for this columns' cells (since DOCUMENTS 5.0i) |
| index | string | optional Index at which position the column should be inserted |
| sortOrder | string | optional Sort order of the column |
| visible | boolean | optional Column is visible |
| width | number | optional Width of the column |
| cellClass | string | optional CSS classs for the cells of this column (since DOCUMENTS 6.0.1) |
| label | string | optional the human readable label of the column |
| dataType | otris.scriptlist.ColumnDataType | optional the type of the column (STRING, NUMBER, ICON, CUSTOM, CHECKBOX, DATE, TIMESTAMP or TRANSLATION_FIELD) |
| index | number | optional index at which position the column should be inserted |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | Object of otris.scriptlist.Column |


##### Example


```
// icon column example
list.addColumn("icon", "ICON", "ICON");
list.addRow(rowId, { icon: "mdi:mdi-rocket" }); // common documentsOS icon syntax
```


**addContainerClass(cls)**
Adds a class name to the list container

| Name | Type | Description |
| --- | --- | --- |
| cls | string |  |

- Since:
DOCUMENTS 5.0i


**addListener(eventName)**
Adds a listener to the ScriptList. If a registered event occurs the ScriptList script is called.

With [[Script Extensions API/otris.scriptlist#.getScriptListEvent|otris.scriptlist.getScriptListEvent]] you can check if the script was triggered by an event.

Currently the following **events** are supported:

- reloadRow
Listen to file updates. Example for the scriptListEvent: {name: "reloadRow", ids: ["dopaag_fi110", "dopaag_fi111", "dopaag_fi112"], loadedIds: ["dopaag_fi110", .., "dopaag_fi122"]}
In your script you have to check if the given ids are part of your list and/or if the referenced files matches your search criterias.
The ids array contains the updated files and the loadedIds array contains the ids of the currently loaded ScriptList rows.
For the return value you can use the helper class otris.scriptlist.RowUpdate.
(To remove a row, the ID of the row must not be added to the RowUpdate object.)
- fileShown (since DOCUMENTS 5.0f) Triggered when a DOCUMENTS file is shown in the file view.
- entryShown (since DOCUMENTS 6.2.0) Triggered when an entry is shown and should be marked in the scriptlist.
- moveRow (since DOCUMENTS 5.0e)
Listen to drop row event after one row or a selection of rows has been dropped at its new position. Example for the scriptListEvent :


```
{
     name: "moveRow",
     ids: [<id_row_1>, <id_row_2>,... ],	// id(s) of the dropped rows
     newIndex: number,	// index of the row the item was dropped onto
     newGroup: {        	// group data of the row the item was droppend onto
       groupCol1: <groupVal1>,	// value of grouping column
       groupCol2:...
     },
     newGroupIds: {        	// default group ids of the row the item was droppend onto
       groupCol1: <groupId1>,	// id of default group
       groupCol2:...
     }
}
```

In your script you can either return a new list for complete rerendering of the ScriptList or return the strings **MOVE_ROW_SUCCESS** and **MOVE_ROW_DENIED** to allow/reject dropping rows at the new position.

If the user should get a message when dropping the row, an [otris.scriptlist.MoveRowResult](otris.scriptlist.MoveRowResult.html) can be returned.

Example for `otris.scriptlist.MoveRowResult`:
`{ success: false, message: "The row can't be moved to this position." }`

- dropItemsOnRow (since DOCUMENTS 5.0g) Triggered when an item is dropped on a row inside the grid. For this to work only the acceptedDropTypes have to be set and the listener will be triggered automatically.
scriptListEvent on drop:


```
{
  name: "dropItemsOnRow",
  dropItems: [{ id: <id>, type: "docFile|genericItem"}, { id... }],	// ids(s) of the dragged row(s)
  id: string    // id of the row the item was dropped onto
  index: number // index of the row the item was dropped onto
  group: {      // group data of the row the item was droppend onto
    groupCol1: <groupVal1>, // value of grouping column
    groupCol2:...
  }
  groupIds: {      // default group ids of the row the item was droppend onto
    groupCol1: <groupId1>, // id of default group
    groupCol2:...
  }
}
```

| Name | Type | Description |
| --- | --- | --- |
| eventName | string | event name (currently supported: reloadRow, moveRow, fileShown, entryShown, dropItemsOnRow) |

- Since:
DOCUMENTS 5.0c


##### Examples


```
// NOTICE: The ScriptList object must be filled with the column information to work correctly
// Check if the ScriptList script was triggered by an event
var event = otris.scriptlist.getScriptListEvent();
if (event && "reloadRow" === event.name) {
    // Check the given ids in the array event.ids
    // Add the updated rows. If an id references a row that should be deleted just do not add any row data
    var rowUpdate = new otris.scriptlist.RowUpdate();
	   rowUpdate.addEntry("id5", {columnOne: "New value for column one"});
    return rowUpdate.transfer();
}
// ...
```

**Move row was denied with message being displayed:**


```
var event = otris.scriplist.getScriptListEvent();
if (event.name === "moveRow" && moveDenied) {
    return new otris.scriptlist.MoveRowResult({
        success: false,
        message: "The row can't be moved to this position."
    });
}
// ...
```

**Simple success and deny move row:**


```
if (event.name === "moveRow") {
    if(moveDenied) {
        return "MOVE_ROW_DENIED";
    }
    else {
        return "MOVE_ROW_SUCCESS";
    }
}
// ...
```

**Validate move and update file view:**


```
// ...
context.returnType = "multipleAction";
return JSON.stringify([{ returnType: 'scriptList', returnValue: "MOVE_ROW_SUCCESS" }, { returnType: 'updateFile' }]);
```


**addParameter(key, value)**
Add a parameter that will be send to the script when the next page is beeing

retrieved (infinite scrolling) or callbacks execute the origin script again e.g. events, sort etc.

| Name | Type | Description |
| --- | --- | --- |
| key | string | Name of the parameter |
| value | * | Value of the parameter |


**addRow(key, values){otris.scriptlist.Row}**
Add a row to the list

| Name | Type | Description |
| --- | --- | --- |
| key | string | The UNIQUE key of the row. (Can be a fileId or any other unique id) |
| values | Array.<*> | object | An array containing the values of this row in the order of which the columns has been added to the list OR an object mapping the column keys to the columns values. |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row |  |


**addSettings(option)**
Adds a setting (an option that can be defined by the user) to the gadget.

| Name | Type | Description |
| --- | --- | --- |
| option | GadgetSetting | Array.<GadgetSetting> | Setting(s) to add to the gadget. |


**applySortOrder()**
Automatically apply sort order to all columns.

This will only work correctly after all columns have been added to the list.

- Since:
DOCUMENTS 6.0.1


**endList()**
Mark this list object to contain the last entries of the total list. Using this function means

"the entries contained in this list are the last ones in the overall list"


**getActions(){Array.<object>}**
Get all list actions.


##### Returns:

| Type | Description |
| --- | --- |
| Array.<object> | The list actions. |


**getColumn(key){otris.scriptlist.Column|undefined}**
Get a column by key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | key of the column to get |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Column | undefined | column |


**getColumnIndex(key){number}**
Get the index of a column

| Name | Type | Description |
| --- | --- | --- |
| key | string | key of the column to get the index for |


##### Returns:

| Type | Description |
| --- | --- |
| number | Index of a column (or -1 if not found) |


**getColumns(){Array.<otris.scriptlist.Column>}**
Get the columns.

- Since:
DOCUMENTS 5.0g


##### Returns:

| Type | Description |
| --- | --- |
| Array.<otris.scriptlist.Column> | columnArray - Array of column configurations |


**getContextData(){object|undefined}**
Get the current context data object.

- Since:
DOCUMENTS 5.0i
- See:
otris.scriptlist.List#setOnRowClick otris.scriptlist.List#setOnRowDoubleClick otris.scriptlist.List#setOnSelectionChanged


##### Returns:

| Type | Description |
| --- | --- |
| object | undefined | context data |


**getGrouping()**
Get grouping

- Since:
DOCUMENTS 5.0i


**getListId(){string|undefined}**
Get the current `listId`.

- Since:
DOCUMENTS 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| string | undefined | listId |


**getRecordView(){RecordViewConfig}**
Get defined record-view config for this scriptlist.


##### Returns:

| Type | Description |
| --- | --- |
| RecordViewConfig | Defined record-view |


**getScriptListEvent(){object|undefined}**
- See:
otris.scriptlist.getScriptListEvent


##### Returns:

| Type | Description |
| --- | --- |
| object | undefined | ScriptList event object |


**getSearchContext(){object}**
Get the list's search context configuration.


##### Returns:

| Type | Description |
| --- | --- |
| object | searchContext configuration |


**getTitle(){string}**
Gets the ScriptList's title.


##### Returns:

| Type | Description |
| --- | --- |
| string | ScriptList title |


**getTotalSize(){number}**
Get the total size of rows in the current ScriptList.

**Attention:**

If the list is a HitresultList, the total size will only have a valid value after list.transfer() has been called and all pages have been loaded (pageSize=0).

- Since:
DOCUMENTS 6.0.1


##### Returns:

| Type | Description |
| --- | --- |
| number | total size of rows in list |


**isListComplete()**
Check if endList() was called.

- Since:
DOCUMENTS 5.0i HF3


**setAcceptedDropTypes(acceptedDropTypes)**
Sets a list of accepted item types that can be dropped on a row.

After an item was dropped on a row the scriptListEvent `dropItemsOnRow` will be triggered with the drop location defined by id, index and maybe group data. Event handling is described in [[Script Extensions API/otris.scriptlist.List#addListener|addListener]].

Available types:

- docFile: DOCUMENTS file eg. file header image dragged and dropped on row.
- genericItem: Genetic item eg. row from another scriptlist dropped on of this scriptlists row.
- object:


```
{
  type:     "<docFile|genericItem>",
  fileType: "<filetype>" // will accept only the configured filetype.
}
```

Set droptype on list

| Name | Type | Description |
| --- | --- | --- |
| acceptedDropTypes | Array.<(string|object)> | List of item types that can be dropped on a row. |


##### Examples


```
list.setAcceptedDropTypes(["docFile"]);
```


```
row.setAcceptedDropTypes(["genericItem"]);
```


```
grouping.setAcceptedDropTypes([{
  type: "docFile",
  fileType: "Person"
}});
```


**setAddOverflowToAutoColumn(addOverflowToAutoColumn)**
If the width for a column is set but the content will overflow, add the overflow width to the first

column with automatic width. Default is false.

| Name | Type | Description |
| --- | --- | --- |
| addOverflowToAutoColumn | boolean | true if the overflow width should be added to the first auto width column |


**setAllowDecouple(allowDecouple)**
Allow decoupling this list by clicking the list name.

| Name | Type | Description |
| --- | --- | --- |
| allowDecouple | boolean | Allow decoupling this list. |


**setAppendTotalSize(appendTotalSize)**
Automatically appends the total size of loaded rows to the title.

For the HitresultList this is set to true by default.

| Name | Type | Description |
| --- | --- | --- |
| appendTotalSize | boolean | append total size of loaded rows to title |


**setAutoColumnWidth(autoWidth)**
Sets whether or not the columns should take up the entire available space of the table automatically

| Name | Type | Description |
| --- | --- | --- |
| autoWidth | boolean | true for the columns to take up the full width of the table |


**setAutoHeight(autoHeight)**
Sets whether all rows should be displayed without scrollbar.

This will only take effect, if the list is shown alongside other elements inside a container

for example as a gadget field on a file register.

If the list is displayed as a sublist, **setFitHeight()** should be used instead.

Otherwise the list might overflow the parent row's sublist container.

| Name | Type | Description |
| --- | --- | --- |


**setAutoShowDetails(autoShow)**
Set whether the details row of an entry should be expanded automatically

when an entry is clicked.

| Name | Type | Description |
| --- | --- | --- |
| autoShow | boolean | Show detail rows automatically |


**setCheckboxColumnWidth(checkboxColumnWidth)**
Sets the width for the check box column.

| Name | Type | Description |
| --- | --- | --- |
| checkboxColumnWidth | number | Width for the checkbox column. |


**setCollapsed(collapsed)**
Set list to display groupings collapsed.

| Name | Type | Description |
| --- | --- | --- |
| collapsed | boolean | true, if the list is collapsed |


**setColumns(columnArray)**
Set the columns. Removes any columns that have been added before.

| Name | Type | Description |
| --- | --- | --- |
| columnArray | Array.<otris.scriptlist.Column> | Array of column configurations |


**setCompactView(compactView, lineHeight)**
Set the compact view setting for the list

| Name | Type | Description |
| --- | --- | --- |
| compactView | boolean | string | true for default compact view or a String as a template for the compact view |
| lineHeight | number | line height of the compact view line |


**setCompactViewWidth(width)**
Set the maximum with that the compact view will be used for (the point where the view is switched from full view to compact view)

| Name | Type | Description |
| --- | --- | --- |
| width | number | the with where to switch at |


**setContainerClass(containerClass)**
Set a class which is added to the list container

| Name | Type | Description |
| --- | --- | --- |
| containerClass | string |  |

- Since:
DOCUMENTS 5.0h


**setContextData(cData)**
Set a context data object that is transferred to the client.

There it will be available in several callbacks.

| Name | Type | Description |
| --- | --- | --- |
| cData | object |  |

- Since:
DOCUMENTS 5.0i
- See:
otris.scriptlist.List#setOnRowClick otris.scriptlist.List#setOnRowDoubleClick otris.scriptlist.List#setOnSelectionChanged


**setDetailsParams(detailsParams)**
Set the parameters that should be send to the details script when expanding a details row

| Name | Type | Description |
| --- | --- | --- |
| detailsParams | object | object of the parameters to pass to the script |


**setDetailsScriptName(detailsScriptName)**
Set the name of the script that will be called when a details row is expanded.

Allowed returnTypes for the script are: "HTML" and "ScriptList"

| Name | Type | Description |
| --- | --- | --- |
| detailsScriptName | string | The scriptName |


**setEnableTextSelection(enableTextSelection)**
This can be used to explicitly allow text selection if moveRows is also activated or

just to disable text selection if unwanted.

| Name | Type | Description |
| --- | --- | --- |

- Since:
DOCUMENTS 5.0e


**setFitGroups(fitGroups)**
Will set the grid height so all groups can be expanded. Can only be used with fitHeight = true.

| Name | Type | Description |
| --- | --- | --- |
| fitGroups | boolean | Set grid height so all groups will fit expanded |

- Since:
DOCUMENTS 5.0e


**setFitHeight(fitHeight)**
Try to resize the grid until all rows fit (only applicable for subgrids)

| Name | Type | Description |
| --- | --- | --- |
| fitHeight | boolean | Resize grid until content fits |

- Since:
DOCUMENTS 5.0d


**setFitHeightOnGroupCollapse(fitHeightOnGroupCollapse)**
Sets whether the height of the grid should be increased if expanding the group

would cause a scrollbar to be shown. Can only be used with fitHeight = true.

| Name | Type | Description |
| --- | --- | --- |
| fitHeightOnGroupCollapse | boolean | Fit height of grid so only the collapsed group will be visible |

- Since:
DOCUMENTS 5.0e


**setFitHeightOnGroupExpand(fitHeightOnGroupExpand)**
Sets whether the height of the grid should be increased if expanding the group

would cause a scrollbar to be shown. Can only be used with fitHeight = true.

| Name | Type | Description |
| --- | --- | --- |
| fitHeightOnGroupExpand | boolean | Fit height of grid so all rows of the expanded group will be visible |

- Since:
DOCUMENTS 5.0e


**setForceCompactView(forceCompactView)**
Sets whether or not the compactView should always be displayed, even is the table is wide enough to display the normal table view

| Name | Type | Description |
| --- | --- | --- |
| forceCompactView | boolean | Always show list in compact view |


**setFrozenColumns(index)**
Sets the index up to which column the columns should be frozen. This will cause the content of all columns on the right to have

it`s own horizontal scrollbar when scrolling.

| Name | Type | Description |
| --- | --- | --- |
| index | boolean | index up to which the columns should stay still on scroll |


**setFullDetailsWidth(fullDetailsWidth)**
Sets whether details rows should fill the available row space if the current grid is a subgrid of a folder.

| Name | Type | Description |
| --- | --- | --- |
| fullDetailsWidth | boolean | Fill whole width |


**setGroupHeaderTemplate(groupHeaderTemplate)**
Set template for rendering group header HTML

| Name | Type | Description |
| --- | --- | --- |
| groupHeaderTemplate | string | Handlebars template string to use. Available parameters: row: row-index cell: cell-index value: value to be rendered columnDef: doby-grid column definition index: group level index collapsed: group is collapsed (since DOCUMENTS 6.0.1) group: doby-grid group definition (since DOCUMENTS 6.0.1) groupSize: size of the group (since DOCUMENTS 6.0.1) |


##### Example


```
// indented mdi-icon and group size
list.setGroupHeaderTemplate(`<div style="padding-left:calc({{index}}*15px)">
                               <span class="mdi {{#if collapsed}}mdi-menu-right{{else}}mdi-menu-down-outline{{/if}}" style="font-size: 18px;vertical-align: middle;"></span>
                               <b>{{value}} ({{groupSize}})<span></b>
                             </div>`);
```


**setGrouping(groupings)**
Set the groupings for the list.

| Name | Type | Description |
| --- | --- | --- |
| groupings | Array.<(string|GroupingConfig|otris.scriptlist.Grouping)> | Array of ids,GroupingConfig or otris.scriptlist.Grouping to group by |


##### Examples

**Grouping by string "year"**


```
list.setGrouping([
  "year"
]);
```

**Grouping by string "year" sorting descending**


```
list.setGrouping([{
  column_id: "year",
  comparator: (groupA, groupB) => {

    // get values for year
    const yearA = groupA.grouprows[0].get("year");
    const yearB = groupB.grouprows[0].get("year");

    // calculate distance between years then sort descending
    return (yearA - yearB) * -1;
  }
}]);
```

**Grouping by GroupConfig "month" with default months January and february with empty text if there are no rows**


```
list.setGrouping([
  {
    column_id: "month",
    collapsed: false,
    default_groups: [
      "Januar",
      {
        id: "february",
        label: "Februar",
        emptyText: "leer"
      }
    ]
  }
]);
```

**Grouping by GroupConfig "day" with all days collapsed but monday**


```
list.setGrouping([
  {
    column_id: "day",
    collapsed: {
      default: true,
      exclude: ["monday"]
    }
  }
]);
```

**Grouping by otris.scriptlist.Grouping with default entry february**


```
list.setGrouping([
  new otris.scriptlist.Grouping({
    column_id: "month",
    collapsed: false,
    default_groups: [
      {
        id: "february",
        label: "Februar",
        emptyText: "leer"
      }
    ]
  })
]);
```


**setGroupsFocusable(groupsFocusable)**
Sets whether group rows can be focussed

| Name | Type | Description |
| --- | --- | --- |
| groupsFocusable | boolean | Allow focusing of group rows |


**setHTMLHeader(htmlheader)**
Adds a html header to the table which is displayed above the table.

| Name | Type | Description |
| --- | --- | --- |
| htmlheader | string | the html to display |


**setHeight(height)**
Set the height for the current grid (only applicable for subgrids)

| Name | Type | Description |
| --- | --- | --- |
| height | number | Height of the details row |


**setListId(listId)**
Set a `listId` for listId specific row updates.

| Name | Type | Description |
| --- | --- | --- |
| listId | string |  |

- Since:
DOCUMENTS 5.0i


**setListStyle(style){otris.scriptlist.ScriptListStyle}**
Adjust the default styling of the list with a [[Script Extensions API/otris.scriptlist.ScriptListStyle]] configuration.

| Name | Type | Description |
| --- | --- | --- |
| style | otris.scriptlist.ScriptListStyle | otris.scriptlist.ScriptListStyle instance or a style configuration (Used for the otris.scriptlist.ScriptListStyle constructor) |

- Since:
DOCUMENTS 5.0f
- See:
otris.scriptlist.ScriptListStyle


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.ScriptListStyle | The given or a new otris.scriptlist.ScriptListStyle instance |


**setMaxHeight(maxHeight)**
Set the maximum height for the current grid (only applicable for subgrids)

| Name | Type | Description |
| --- | --- | --- |
| maxHeight | number | Maximum height of the detail rows content |

- Since:
DOCUMENTS 5.0d


**setMaxResizeColumnsToContentWidth(maxResizeColumnsToContentWidth)**
If resizeColumnsToContent is enabled, this will set the maximum width that can be used when the columns are resized.

| Name | Type | Description |
| --- | --- | --- |
| maxResizeColumnsToContentWidth | number | Max column width when resizing columns to content size. |


**setMinHeight(minHeight)**
Set the minimum height for the current grid (only applicable for subgrids)

| Name | Type | Description |
| --- | --- | --- |
| minHeight | number | Minimum height of the detail rows content |

- Since:
DOCUMENTS 5.0d


**setMoveGroupRows()**
Sets whether group rows should be moved to other positions by drag and drop.

This will cause the group rows children to be moved to the dropped row while the group row itself might be removed.


**setMoveRows(moveRows)**
Sets whether rows can be moved to other positions by drag and drop. The row will be moved on client side only.

| Name | Type | Description |
| --- | --- | --- |
| moveRows | boolean | allow moving rows to a new position |

- Since:
DOCUMENTS 5.0e


**setNavibarEntry(options)**
Add a navibar entry. Define a script with parameters that reloads the scriptlist.
*Only works if scriptlist is displayed in main list view area.*

If scriptlist is used as gadget use the `setNavibarEntry()` from the gadget api.

| Name | Type | Description |
| --- | --- | --- |
| options | object | boolean | navibar entry options or true for using default values Name Type Description label string optional label for the navibar entry (defaults to the scriptlist title) scriptName string optional label for the navibar entry (defaults to the value of context.scriptName) scriptParams object optional key/value object for optional script parameter | Name | Type | Description | label | string | optional label for the navibar entry (defaults to the scriptlist title) | scriptName | string | optional label for the navibar entry (defaults to the value of context.scriptName) | scriptParams | object | optional key/value object for optional script parameter |
| Name | Type | Description |
| label | string | optional label for the navibar entry (defaults to the scriptlist title) |
| scriptName | string | optional label for the navibar entry (defaults to the value of context.scriptName) |
| scriptParams | object | optional key/value object for optional script parameter |

- Since:
DOCUMENTS 5.0e


**setNoDataMessage(message)**
Customize message displayed when list is empty

| Name | Type | Description |
| --- | --- | --- |
| message | object | No data message |

- Since:
DOCUMENTS 5.0h


**setOnRowClick(rowClick)**
Executes a function when clicking a row

| Name | Type | Description |
| --- | --- | --- |
| rowClick | function | Function to be executed on click. otrListRowClickCB(documentsContext, options) Name Type Description documentsContext object A newly created DocumentsContext options object Name Type Description rowIndex number the current grid row index cellIndex number the current grid cell index row object the current grid row model column object the current grid column model originalEvent object the current original dom event contextData object context data, see setContextData Since: DOCUMENTS 5.0i | Name | Type | Description | documentsContext | object | A newly created DocumentsContext | options | object | Name Type Description rowIndex number the current grid row index cellIndex number the current grid cell index row object the current grid row model column object the current grid column model originalEvent object the current original dom event contextData object context data, see setContextData | Name | Type | Description | rowIndex | number | the current grid row index | cellIndex | number | the current grid cell index | row | object | the current grid row model | column | object | the current grid column model | originalEvent | object | the current original dom event | contextData | object | context data, see setContextData |
| Name | Type | Description |
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
DOCUMENTS 5.0g


**setOnRowDoubleClick(rowDoubleClick)**
Executes a function when double clicking a row

| Name | Type | Description |
| --- | --- | --- |
| rowDoubleClick | function | Function to be executed on double click. otrListRowClickCB(documentsContext, options) Name Type Description documentsContext object A newly created DocumentsContext options object Name Type Description rowIndex number the current grid row index cellIndex number the current grid cell index row object the current grid row model column object the current grid column model originalEvent object the current original dom event contextData object context data, see setContextData Since: DOCUMENTS 5.0i | Name | Type | Description | documentsContext | object | A newly created DocumentsContext | options | object | Name Type Description rowIndex number the current grid row index cellIndex number the current grid cell index row object the current grid row model column object the current grid column model originalEvent object the current original dom event contextData object context data, see setContextData | Name | Type | Description | rowIndex | number | the current grid row index | cellIndex | number | the current grid cell index | row | object | the current grid row model | column | object | the current grid column model | originalEvent | object | the current original dom event | contextData | object | context data, see setContextData |
| Name | Type | Description |
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
DOCUMENTS 5.0g


**setOnSelectionChanged(onSelectionChanged)**
Executes a function when selection changes

| Name | Type | Description |
| --- | --- | --- |
| onSelectionChanged | function | Function to be executed after selection changed. otrOnSelectionChangedCB(documentsContext, options) Callback after rows have been selected/deselected Name Type Description documentsContext object A newly created DocumentsContext options object Name Type Description addedRows object Rows that were added to the current selection. selectedRows object Currently selected rows. deselecting boolean true if rows were deselected. contextData object context data, see setContextData Since: DOCUMENTS 5.0i | Name | Type | Description | documentsContext | object | A newly created DocumentsContext | options | object | Name Type Description addedRows object Rows that were added to the current selection. selectedRows object Currently selected rows. deselecting boolean true if rows were deselected. contextData object context data, see setContextData | Name | Type | Description | addedRows | object | Rows that were added to the current selection. | selectedRows | object | Currently selected rows. | deselecting | boolean | true if rows were deselected. | contextData | object | context data, see setContextData |
| Name | Type | Description |
| documentsContext | object | A newly created DocumentsContext |
| options | object | Name Type Description addedRows object Rows that were added to the current selection. selectedRows object Currently selected rows. deselecting boolean true if rows were deselected. contextData object context data, see setContextData | Name | Type | Description | addedRows | object | Rows that were added to the current selection. | selectedRows | object | Currently selected rows. | deselecting | boolean | true if rows were deselected. | contextData | object | context data, see setContextData |
| Name | Type | Description |
| addedRows | object | Rows that were added to the current selection. |
| selectedRows | object | Currently selected rows. |
| deselecting | boolean | true if rows were deselected. |
| contextData | object | context data, see setContextData |


**setOpenGroupLevel(openGroupLevel)**
Sets the level up to which groups should be opened

| Name | Type | Description |
| --- | --- | --- |
| openGroupLevel | Number | Level up to which to open groups |


**setRecordView(recordView)**
Display this scriptlist as a Record-View.


| Name | Type | Description |
| --- | --- | --- |
| recordView | boolean | RecordViewConfig | Enable default Record-View-Configuration | Set custom Record-View-Configuration |

- Since:
DOCUMENTS 5.0i HF3


**setResizableRows(resizableRows)**
Allows resizing of rows.

| Name | Type | Description |
| --- | --- | --- |
| resizableRows | boolean | Allow resizing rows. |


**setResizeColumnsToContent(resizeColumnsToContent)**
Sets whether columns should be resized to its content.

Attention: This only work with showHeader = true !!!

| Name | Type | Description |
| --- | --- | --- |
| resizeColumnsToContent | boolean | Resize columns so all content is visible |


**setRoute(routeId)**
Sets an route identifier for the browser's location hash navigation.

| Name | Type | Description |
| --- | --- | --- |
| routeId | string | The route identifier. |

- Since:
DOCUMENTS 6.2.0


**setRowHeight(rowHeight)**
Sets the height for all rows.

| Name | Type | Description |
| --- | --- | --- |
| rowHeight | number | Height of the rows |

- Since:
DOCUMENTS 5.0i


**setRowStyle(rowStyle)**
Sets the style for all rows as a string or adds a callback to be executed for each row.

| Name | Type | Description |
| --- | --- | --- |
| rowStyle | string | otrListRowStyleCB | Style to use or a function that will be executed when rendering the row. |

- Since:
DOCUMENTS 5.0i


**setSaveColumnModel(saveColumnModel)**
Save the column model if the size or position of a column changes.

| Name | Type | Description |
| --- | --- | --- |
| saveColumnModel | boolean | Save column model on change. |


**setScrollWithParent(scrollWithParent)**
Sets whether subgrids of grids should scroll their content so they will always stay inside it's parent containers

viewport.

| Name | Type | Description |
| --- | --- | --- |
| scrollWithParent | boolean | Scroll with parent container |

- Since:
DOCUMENTS 5.0f


**setSearchContext(searchContext)**
Sets the name of the search context (displayed in the searchbar).

If no name was set for the searchContext, the list's name will be used.

| Name | Type | Description |
| --- | --- | --- |
| searchContext | string | object | The search context name or a config object Name Type Default Description name string optional The search context name (Defaults to the list title) remoteSearch boolean true optional Enable/disable remote search. Default is true. liveSearch boolean false optional Automatic search after keyboard input (since DOCUMENTS 5.0e) | Name | Type | Default | Description | name | string |  | optional The search context name (Defaults to the list title) | remoteSearch | boolean | true | optional Enable/disable remote search. Default is true. | liveSearch | boolean | false | optional Automatic search after keyboard input (since DOCUMENTS 5.0e) |
| Name | Type | Default | Description |
| name | string |  | optional The search context name (Defaults to the list title) |
| remoteSearch | boolean | true | optional Enable/disable remote search. Default is true. |
| liveSearch | boolean | false | optional Automatic search after keyboard input (since DOCUMENTS 5.0e) |


##### Example


```
scriptList.setSearchContext({ name: "ScriptList Client Search", remoteSearch: false });
```


**setShowActionButtonsFirst(showActionButtonsFirst)**
Define the order in which the actions first be ordered, buttons first or list actions first.

| Name | Type | Description |
| --- | --- | --- |
| showActionButtonsFirst | boolean | Show button actions before list actions |


**setShowCheckboxes(showCheckboxes, options)**
Sets whether or not to display a checkboxes for each column for multi selection. The selected IDs will be available

in ScriptListActions as the JSON parameter "selectedIds" when executing a portal script.

Example:


```
if(typeof selectedIds !== "undefined") {

    // parse selected ids to array
    var idsArr = JSON.parse(selectedIds);

    for(var i=0,ii=idsArr.length; i<ii; i++) {
        ...
    }
}
```

| Name | Type | Description |
| --- | --- | --- |
| showCheckboxes | boolean | Show checkboxes |
| options | object | optional Options for displayed checkboxes Name Type Description verticalCenterCheckboxes boolean optional Vertically center displayed checkboxes. (since DOCUMENTS 6.0) This is usefull if the row height is changed. | Name | Type | Description | verticalCenterCheckboxes | boolean | optional Vertically center displayed checkboxes. (since DOCUMENTS 6.0) This is usefull if the row height is changed. |
| Name | Type | Description |
| verticalCenterCheckboxes | boolean | optional Vertically center displayed checkboxes. (since DOCUMENTS 6.0) This is usefull if the row height is changed. |


**setShowDetailsColumn(showDetailsColumn, options)**
Set whether or not to display a column containing a + sign for each entry that can be

used to expand the entry and show some details inside the table.

| Name | Type | Description |
| --- | --- | --- |
| showDetailsColumn | boolean | Show the plus sign |
| options | object | optional Options for displayed details column Name Type Description verticalCenterDetailsToggle boolean optional Vertically center the displayed entry details toggle. (since DOCUMENTS 6.0) This is usefull if the row height is changed. | Name | Type | Description | verticalCenterDetailsToggle | boolean | optional Vertically center the displayed entry details toggle. (since DOCUMENTS 6.0) This is usefull if the row height is changed. |
| Name | Type | Description |
| verticalCenterDetailsToggle | boolean | optional Vertically center the displayed entry details toggle. (since DOCUMENTS 6.0) This is usefull if the row height is changed. |


**setShowExportActions(showExportActions)**
Add export actions to the scriptlist.

If an export action is executed, the **origin script** will be called again with current search and sort parameters and

a special scriptlist-event (**xlsxExportAll** or **xlsxExportSelected**), which will be handled in list.transfer().

The handling of this event will cause **context.returnType** to be set to **multipleAction**, because the displayed scriptlist will

be updated with the data used for the export and trigger the exported file to be downloaded.

After list.transfer() the context.returnType **must not be changed** or the download of the exported file will not work.

Currently supports xlsx-export (since DOCUMENTS 5.0i HF5).

| Name | Type | Description |
| --- | --- | --- |
| showExportActions | boolean | Show export actions. |


##### Example


```
// export current script-list
context.returnValue = list.transfer();
```


**setShowGroupCheckbox(showGroupCheckbox)**
Enable a checkbox inside of group headers. The selected group IDs will be available in ScriptListActions as the JSON

parameter "selectedGroupIds" when executing a portal script.

Example:


```
if(typeof selectedGroupIds !== "undefined") {

    // parse selected group ids to array
    var idsArrGroup = JSON.parse(selectedGroupIds);

    for(var i=0,ii=idsArrGroup.length; i<ii; i++) {
        ...
    }
}
```

| Name | Type | Description |
| --- | --- | --- |
| showGroupCheckbox | boolean | Enables the group checkbox if true. |

- Since:
DOCUMENTS 5.0d


**setShowGroupSize(showGroupSize)**
Show the group size for each group.

| Name | Type | Description |
| --- | --- | --- |
| showGroupSize | boolean | Show group size |


**setShowHeader(showHeader)**
Show or hide the list header (column labels)

| Name | Type | Description |
| --- | --- | --- |
| showHeader | boolean | show the list header (column labels) |


**setShowIndexNumbers(showIndexNumbers)**
Show or hide the index numbers for each row on the left side of the grid.

| Name | Type | Description |
| --- | --- | --- |
| showIndexNumbers | boolean | Show index numbers |

- Since:
DOCUMENTS 5.0e


**setShowMoveColumn(showMoveColumn)**
Set whether or not display an extra column for dragging rows if moveRows or moveRowsRemote is enabled.

| Name | Type | Description |
| --- | --- | --- |
| showMoveColumn | boolean | Show the drag column |

- Since:
DOCUMENTS 5.0e


**setShowQuickFilter(showQuickFilter)**
Displays a filter field above each column for filtering its content.

This can only be used if showHeader is true.

| Name | Type | Description |
| --- | --- | --- |
| showQuickFilter | boolean | True to enable quickFilter |

- Since:
DOCUMENTS 5.0e


**setShowRefreshButton(showRefreshButton)**
Will add a toolbar button to refresh the scriptlist.

| Name | Type | Description |
| --- | --- | --- |
| showRefreshButton | boolean | Show/Hide the refresh button. By default the button is not shown in the standard otris.scriptlist.List. |


**setShowSearchBox(showSearchBox)**
Set whether or not to display a search box in the toolbar

| Name | Type | Description |
| --- | --- | --- |
| showSearchBox | boolean | object | true/false are shortcuts for setting both properties to true/false. Name Type Default Description showSearchBox boolean true optional Show the search box remoteSearch boolean false optional Use remote search for searching. | Name | Type | Default | Description | showSearchBox | boolean | true | optional Show the search box | remoteSearch | boolean | false | optional Use remote search for searching. |
| Name | Type | Default | Description |
| showSearchBox | boolean | true | optional Show the search box |
| remoteSearch | boolean | false | optional Use remote search for searching. |


##### Example


```
list.setShowSearchBox(true); // equals { showSearchBox: true, remoteSearch: true }
```


**setShowTitle(showTitle)**
Sets whether the title should be displayed. This can be used to for example only show the button or just a search box without the scriptlists title.

| Name | Type | Description |
| --- | --- | --- |
| showTitle | boolean | show or hide title |

- Since:
DOCUMENTS 5.0f


**setShowToolbar(showToolbar)**
Show or hide the lists toolbar

| Name | Type | Description |
| --- | --- | --- |
| showToolbar | boolean | show the toolbar |


**setSort(sort)**
Set sorting for the list

| Name | Type | Description |
| --- | --- | --- |
| sort | boolean | object | True for sortable with default remote sort. Name Type Default Description sortable boolean true optional Allow sorting columns. multiSort boolean true optional Allow sorting multiple columns. Default is true. remoteSort boolean true optional Sort the list remotely by executing the origin script again with sort params. | Name | Type | Default | Description | sortable | boolean | true | optional Allow sorting columns. | multiSort | boolean | true | optional Allow sorting multiple columns. Default is true. | remoteSort | boolean | true | optional Sort the list remotely by executing the origin script again with sort params. |
| Name | Type | Default | Description |
| sortable | boolean | true | optional Allow sorting columns. |
| multiSort | boolean | true | optional Allow sorting multiple columns. Default is true. |
| remoteSort | boolean | true | optional Sort the list remotely by executing the origin script again with sort params. |


**setStartIndex(startIndex)**
Set the start index of the list. The index of the first entry in this list object

in relation to the total number of entries in the list.

| Name | Type | Description |
| --- | --- | --- |
| startIndex | number | Index of the first entry |


**setStickyGroupRows(stickyGroupRows)**
Will stick group rows to the top of the grid while scrolling through the group.

| Name | Type | Description |
| --- | --- | --- |
| stickyGroupRows | boolean | Stick group rows to top |

- Since:
DOCUMENTS 5.0e


**setSublistBlobThumbnails(sublistBlobThumbnails)**
Shows the rows' sublists as a single row of blob thumbnails.

For this to work correctly, all information needed to render the thumbnail must be available on the subrow.

| Name | Type | Description |
| --- | --- | --- |
| sublistBlobThumbnails | boolean | Shows the sublist as a row ob blob thumbnails. |

- Since:
DOCUMENTS 5.0e


**setTitle(title)**
Set the title of the list.

If the title is set to `false` the height of the ScriptList toolbar is adjusted when displayed in an dialog (*since DOCUMENTS 5.0f HF1*)

| Name | Type | Description |
| --- | --- | --- |
| title | string | list title |


**setUpdateHeadline(updateHeadline)**
Updates the headline if a new title is given (eg. for a search).

| Name | Type | Description |
| --- | --- | --- |
| updateHeadline | boolean | Updates the headline if a new title is given |

- Since:
DOCUMENTS 5.0i


**transfer(options){string}**
Return a proper JSON representation of this list.

| Name | Type | Description |
| --- | --- | --- |
| options | object | optional Options for transferring the list. Name Type Description stringify boolean optional By default the result is stringified as JSON for setting it as a portal script return value. This can be used to not stringify the result immediately after creating a HitresultList so the list's data can be modified, after the list's hits have been loaded. Now the result must be stringified manually and set as return value. | Name | Type | Description | stringify | boolean | optional By default the result is stringified as JSON for setting it as a portal script return value. This can be used to not stringify the result immediately after creating a HitresultList so the list's data can be modified, after the list's hits have been loaded. Now the result must be stringified manually and set as return value. |
| Name | Type | Description |
| stringify | boolean | optional By default the result is stringified as JSON for setting it as a portal script return value. This can be used to not stringify the result immediately after creating a HitresultList so the list's data can be modified, after the list's hits have been loaded. Now the result must be stringified manually and set as return value. |


##### Returns:

| Type | Description |
| --- | --- |
| string | JSON representation that can be used as a return value of a PortalScript |