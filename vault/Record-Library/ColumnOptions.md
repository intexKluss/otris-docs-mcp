---
title: "Interface: ColumnOptions"
source: "https://otris.software/documents/api/record-library/ColumnOptions.html"
---

Options for column creation

### Members


**autoFillboolean**

        Set to true to automatically fill this column for new data entries (column technical name has to be equal to the field name)



**compactMode"hide" "only" "title"**

        set the visibility in compact mode. "hide" does not show this column in compact mode. "only" shows this column only in compact mode. "title" uses this column as the title in compact mode



**createSetsboolean**

        Set to true to automatically create sets for unique values of this column and add new rows to these sets



**dataTypestring**

        Scriptlist [ColumnDataType](../scriptextensions/.otris.scriptlist.html#.ColumnDataType) for this column.



**groupingboolean object**

        Set to true to use this column for grouping in list view. Use object notation for more specific configuration.
The column_id can be omitted since it is set automatically.
More info: [[Script Extensions API/otris.scriptlist.Grouping|Grouping]]

##### Examples


```
// group by this column
data.addColumn("document", "Dokument", {
  grouping: true
});
```


```
// group by this column but collapse group
data.addColumn("document", "Dokument", {
  grouping: {
    collapsed: true
  }
});
```


**hiddenboolean**

        If true this column is not shown



**widthnumber**

        Width of the column in pixels