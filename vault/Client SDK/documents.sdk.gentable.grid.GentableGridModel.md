---
title: "Class: GentableGridModel"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.gentable.grid.GentableGridModel.html"
---

### Constructors


****


### Extends

- documents.sdk.grid.GridModel


### Methods


**addRow(row, options){GentableGridRowModel}**
Adds the given row.

| Name | Type | Description |
| --- | --- | --- |
| row | Object | optional values of the row that should be added |
| options | Object | optional Name Type Description index number optional the index where the row should be added | Name | Type | Description | index | number | optional the index where the row should be added |
| Name | Type | Description |
| index | number | optional the index where the row should be added |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| GentableGridRowModel |  |


##### Example


```
grid.addRow();
grid.addRow({itemtext : "Ledersessel schwarz", unitprice : 22.89 });
grid.addRow({itemtext : "Ledersessel schwarz", unitprice : 22.89 }, { index : 1 });
```


**columnsSize(){number}**
Returns the number of all grid columns.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| number | the number of all columns |


**copyRow(srcIndex, dstIndex, options){GentableGridRowModel}**
Copies the row from the srcIndex to the dstIndex.

| Name | Type | Description |
| --- | --- | --- |
| srcIndex | number | The index of the row that should be copied. |
| dstIndex | number | The index where the row should be copied to. |
| options | object | Options that will be applied to the newly created row. Name Type Description forced boolean Immediately re-render grid after copying the row. (since 5.0i HF III) | Name | Type | Description | forced | boolean | Immediately re-render grid after copying the row. (since 5.0i HF III) |
| Name | Type | Description |
| forced | boolean | Immediately re-render grid after copying the row. (since 5.0i HF III) |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| GentableGridRowModel | Model of the copied row. |


##### Example


```
// copy selected rows but only render after adding the last row
grid.getSelectedRows().each(function (row, i, rows) {
  var rowIndex = row.index();

  // do copy and render only at last row
  grid.copyRow(rowIndex, rowIndex + 1, { forced: i === rows.length - 1 });
});
```


**createRowKey(){string}**
Creates a key for the current row.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | a key for the current row |


**getActiveRow(){documents.sdk.gentable.grid.GentableGridRowModel}**
Returns the currently active grid row model.

- Since:
5.0a
- See:  setActiveRow resetActiveRow


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.gentable.grid.GentableGridRowModel | the active row |


**getColumn(name){GentableGridColumnModel}**
Returns the column with the given name.

| Name | Type | Description |
| --- | --- | --- |
| name | string |  |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| GentableGridColumnModel | the column with the given name |


**inherited getColumns()**
Returns a [Backbone.Collection](http://backbonejs.org/#Collection) of all grid column models.

- Since:
5.0a
- See:  Backbone.Collection


##### Returns:

[Backbone.Collection](http://backbonejs.org/#Collection)  the collection of all grid column models









**getRow(index){GentableGridRowModel}**
Returns the row at the given index.

| Name | Type | Description |
| --- | --- | --- |
| index | number |  |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| GentableGridRowModel | the row at the given index |


**inherited getRows()**
Returns a [Backbone.Collection](http://backbonejs.org/#Collection) of all grid row models.

- Since:
5.0a
- See:  Backbone.Collection


##### Returns:

[Backbone.Collection](http://backbonejs.org/#Collection) the collection of all grid row models









**getSelectedRows(){documents.sdk.gentable.grid.GentableGridRowCollection}**
Returns a backbone collection of all currently selected grid row models.

- Since:
5.0a
- See:  setSelectedRows resetSelectedRows http://backbonejs.org/#Collection


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.gentable.grid.GentableGridRowCollection | the collection of all currently selected rows |


**moveRow(srcIndex, dstIndex)**
Moves a row from the srcIndex to the dstIndex.

| Name | Type | Description |
| --- | --- | --- |
| srcIndex | number | The index of the row that should be moved. |
| dstIndex | number | The index where the row should be moved to. |

- Since:
5.0a


**removeRow(index)**
Removes the row at the given index.

| Name | Type | Description |
| --- | --- | --- |
| index | number |  |

- Since:
5.0a


**resetActiveRow()**
Removes the active state of all grid rows. After calling this method, none of the grid rows is activated anymore.

- Since:
5.0a
- See:  getActiveRow setActiveRow


**resetColumnAggregators()**
Resets all column aggregators to 0.

This is needed if changes will trigger the column aggregators to be executed so they will start at 0 instead of their last value.

- Since:
5.0i


**resetSelectedRows()**
Removes the selected state of all grid rows. After calling this method, none of the grid rows is selected anymore.

- Since:
5.0a
- See:  getSelectedRows setSelectedRows


**rowsSize(){number}**
Returns the number of all grid rows.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| number | the number of all rows |


**setActiveRow(index)**
Sets the active grid row by its row index.

| Name | Type | Description |
| --- | --- | --- |
| index | number | the row index to be activated |

- Since:
5.0a
- See:  getActiveRow resetActiveRow


**setEditCell(options)**
Edits the specified cell and marks the content.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | Must contain the row index and cell index to be edited. |

- Since:
5.0a


##### Example


```
documentsContext.getGentableContext().getGridModel().setEditCell({"rowIndex" : 2, "cellIndex" : 3})
```


**setSelectedRows(indexes, opts)**
Sets the selected grid rows by their row indexes.

| Name | Type | Description |
| --- | --- | --- |
| indexes | Array.<number> | All row indexes to be selected. |
| opts | object | Options for setting the selected row. Name Type Description immediate boolean Immediately apply row selection to grid model. This should be used, if code is executed asynchronously after row selection, to ensure the grid model selection has been cached. | Name | Type | Description | immediate | boolean | Immediately apply row selection to grid model. This should be used, if code is executed asynchronously after row selection, to ensure the grid model selection has been cached. |
| Name | Type | Description |
| immediate | boolean | Immediately apply row selection to grid model. This should be used, if code is executed asynchronously after row selection, to ensure the grid model selection has been cached. |

- Since:
5.0a
- See:  getSelectedRows resetSelectedRows