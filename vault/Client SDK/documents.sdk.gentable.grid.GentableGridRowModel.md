---
title: "Class: GentableGridRowModel"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.gentable.grid.GentableGridRowModel.html"
---

### Constructors


****


### Extends

- documents.sdk.grid.GridRowModel


### Methods


**getNumber(columnName, decimalSeparator, groupingSeparator){number}**
Returns the value of the given column as a `number`.

If the optional parameters `decimalSeparator` and `groupingSeparator` are not set, this method will use localized values by default.

| Name | Type | Description |
| --- | --- | --- |
| columnName | string | the name of the column |
| decimalSeparator | string | optional the decimal separator |
| groupingSeparator | string | optional the grouping separator |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| number | the value of the given column |


##### Example


```
documentsContext.getGentableContext().getGridModel().getRow(1).getNumber("amount", ".", ",");
```


**inherited index(){number}**
Returns the current index of the row.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| number | the current row index |


**isVisible(){boolean}**
Returns if the row is visible or not.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the row is visible, false otherwise |


**reload(){Promise.<any>}**
Reloads the current row and returns a `Promise` for the reload process to be completed.

Notice that reloading a row implies an full AJAX request/response to/from the server behind the scenes which is always performed *asynchronously*.

As a result, any code following a `reload()` statement will be executed *immediately* while not waiting the reload process to be completed.

Code can be synchronized with the returned `Promise` object which lets you provide a callback function that is called when the `Promise` is fulfilled.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | the Promise that is fulfilled when the reload process is complete |


##### Example


```
var gridModel = documentsContext.getGentableContext().getGridModel();
var row = gridModel.addRow();

row.reload().then( function() {
  console.log("reload process complete");
});

 //  caution: code following "row.reload()" is invoked immediately
```


**set(val, options)**
| Name | Type | Description |
| --- | --- | --- |
| val | object | Values to set for this row. |
| options | object | optional Options for modifying the backbone row model. Name Type Description resetColumnAggregators boolean optional Reset grid column aggregators when setting a row value. This is enabled by default. (since DOCUMENTS 5.0i) silent boolean optional Set model data silently without triggering a re-render of the grid. | Name | Type | Description | resetColumnAggregators | boolean | optional Reset grid column aggregators when setting a row value. This is enabled by default. (since DOCUMENTS 5.0i) | silent | boolean | optional Set model data silently without triggering a re-render of the grid. |
| Name | Type | Description |
| resetColumnAggregators | boolean | optional Reset grid column aggregators when setting a row value. This is enabled by default. (since DOCUMENTS 5.0i) |
| silent | boolean | optional Set model data silently without triggering a re-render of the grid. |


##### Example


```
// Set multiple row values but render after setting the last value.
documentsContext.getGentableContext().getGridModel().getSelectedRows().each(function(row, i, arr) {

 // set row data
 row.set({
   index: i,
   sum: row.get("price") * row.get("amount")
 },
 {
   silent: i < arr.length - 1 // only render if at last row
 });
});
```


**toJSON(){Object}**
Returns a (shallow) copy of the entire row for JSON serialization.

For example this method can be used for persistence, serialization or augmentation before being sent to the server.


##### Returns:

| Type | Description |
| --- | --- |
| Object | the row json clone |


##### Example


```
var gridModel = documentsContext.getGentableContext().getGridModel();
var row = gridModel.getRow(0);
var rowJson = row.toJSON();
console.log( JSON.stringify(rowJson) );  //  ->  "{"departure":{"city":"Sydney","IATA":"SYD","overdue":true},"primes":[2,3,5,7,11,13,17,19,23],"pi":3.14159265359}"
```