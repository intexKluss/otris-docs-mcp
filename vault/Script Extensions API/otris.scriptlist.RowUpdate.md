---
title: "Class: RowUpdate"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.RowUpdate.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| updateData | Array.<object> | string | optional an array of row update objects or a listId to bind the updates to a specific list (since: DOCUMENTS 5.0i) Name Type Description id string id of the row data object updated row data (plain key/value object) | Name | Type | Description | id | string | id of the row | data | object | updated row data (plain key/value object) |
| Name | Type | Description |
| id | string | id of the row |
| data | object | updated row data (plain key/value object) |

- Since:
DOCUMENTS 5.0d HF2


##### Examples


```
// update row from listener
var rowUpdate = new otris.scriptlist.RowUpdate();
rowUpdate.addEntry("id5", {columnOne: "New value for column one"});
return rowUpdate.transfer();
```


```
// update list with id "my-list-id"
var rowUpdate = new otris.scriptlist.RowUpdate("my-list-id");
rowUpdate.addEntry("id5", {columnOne: "New value for column one"});

// update row
context.returnType = "rowUpdate";
context.returnValue = rowUpdate.transfer();
```


### Methods


**addEntry(rowId, newData){otris.scriptlist.Row}**
Adds a new entry

| Name | Type | Description |
| --- | --- | --- |
| rowId | string | row id |
| newData | object | updated row data (plain key/value object) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.scriptlist.Row | Row to be updated (since 5.0i) |


**addRemoveEntry(rowId)**
Remove an entry from the scriptlist.

| Name | Type | Description |
| --- | --- | --- |
| rowId | string | id of row to be removed |


**transfer(){string}**
Return a proper JSON representation of this `rowUpdate`.


##### Returns:

| Type | Description |
| --- | --- |
| string | JSON representation that can be used as a return value of a PortalScript |