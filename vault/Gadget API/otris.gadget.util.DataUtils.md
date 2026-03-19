---
title: "Namespace: DataUtils"
source: "https://otris.software/documents/api/gadgets/otris.gadget.util.DataUtils.html"
---

Global Object holding general functions for data processing


### Methods


**staticotris.gadget.util.DataUtils.getTableData(myFRS, myFields, start, limit)**
Returns an data object to use with an ExtTable based on a FileResultSet (Useful for displaying lists of Files in an ExtTable Element).

| Name | Type | Description |
| --- | --- | --- |
| myFRS | FileResultset | the FileResultset where the files should be retrieved from |
| myFields | Array.<string> | an array of fieldnames to display in the table (set null for all fields) |
| start | number | the starting row of the resultset (optional) |
| limit | number | the amount of rows that should be retrieved from the resultset (optional) |