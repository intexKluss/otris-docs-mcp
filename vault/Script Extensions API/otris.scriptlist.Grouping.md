---
title: "Class: Grouping"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.Grouping.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| columnOrGroup | string | GroupingConfig | Column info to group by. Either just a string for the column or object containing additional configuration. Name Type Description comparator function Callback to sort values of this group. groupComparatorCB(groupA, groupB){number} Callback to sort values of a group. Name Type Description groupA object doby-grid group A that should be compared groupB object doby-grid group B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort groupA first, 1 sort groupB first, 0 groupA and groupB are sorted equally Example comparator: (groupA, groupB) => { // each group contains a row that led to creation of this group const dateA = groupA.grouprows[0]; const dateB = groupB.grouprows[0]; // calculate distance between dates for sorting (<0 = first, 0 = equal, >0 last) return dateA.get("date") - dateB.get("date"); } column_id string id of the column that should be grouped default_groups Array.<(string|GroupConfig)> groups that will be always displayed, even if there are no rows matching this group | Name | Type | Description | comparator | function | Callback to sort values of this group. groupComparatorCB(groupA, groupB){number} Callback to sort values of a group. Name Type Description groupA object doby-grid group A that should be compared groupB object doby-grid group B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort groupA first, 1 sort groupB first, 0 groupA and groupB are sorted equally Example comparator: (groupA, groupB) => { // each group contains a row that led to creation of this group const dateA = groupA.grouprows[0]; const dateB = groupB.grouprows[0]; // calculate distance between dates for sorting (<0 = first, 0 = equal, >0 last) return dateA.get("date") - dateB.get("date"); } | Name | Type | Description | groupA | object | doby-grid group A that should be compared | groupB | object | doby-grid group B that should be compared | Type | Description | number | -1 sort groupA first, 1 sort groupB first, 0 groupA and groupB are sorted equally | column_id | string | id of the column that should be grouped | default_groups | Array.<(string|GroupConfig)> | groups that will be always displayed, even if there are no rows matching this group |
| Name | Type | Description |
| comparator | function | Callback to sort values of this group. groupComparatorCB(groupA, groupB){number} Callback to sort values of a group. Name Type Description groupA object doby-grid group A that should be compared groupB object doby-grid group B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort groupA first, 1 sort groupB first, 0 groupA and groupB are sorted equally Example comparator: (groupA, groupB) => { // each group contains a row that led to creation of this group const dateA = groupA.grouprows[0]; const dateB = groupB.grouprows[0]; // calculate distance between dates for sorting (<0 = first, 0 = equal, >0 last) return dateA.get("date") - dateB.get("date"); } | Name | Type | Description | groupA | object | doby-grid group A that should be compared | groupB | object | doby-grid group B that should be compared | Type | Description | number | -1 sort groupA first, 1 sort groupB first, 0 groupA and groupB are sorted equally |
| Name | Type | Description |
| groupA | object | doby-grid group A that should be compared |
| groupB | object | doby-grid group B that should be compared |
| Type | Description |
| number | -1 sort groupA first, 1 sort groupB first, 0 groupA and groupB are sorted equally |
| column_id | string | id of the column that should be grouped |
| default_groups | Array.<(string|GroupConfig)> | groups that will be always displayed, even if there are no rows matching this group |

- Since:
DOCUMENTS 5.0g


##### Example


```
{
  column_id: "month"
  default_groups: [ // list of default groups to display if there are empty groups
    "january",
    {
      id: "february",
      label: "February",
      emptyText: "no rows available"
      collapsed: false
      column_id: "month"
    },
    new otris.scriptlist.Group({
      id: "march",
      label: "March",
      emptyText: "no rows available"
    }), ...
  ]
}
```


### Methods


**addAcceptedDropType(acceptedDropTypes)**
Adds an accepted item type that can be dropped on all rows of this grouping and the generated parent group row.

After an item was dropped on a row the scriptListEvent 'dropItemsOnRow' will be triggered with the drop location defined by id,index and group criteria.

Available types:

- docFile DOCUMENTS file eg. file header image dragged and dropped on row.
{ type: "docFile", fileType: ""} will accept only the configured filetype.
- genericItem Genetic item eg. row from another Scriptlist dropped on on of this Scriptlists' row.

| Name | Type | Description |
| --- | --- | --- |
| acceptedDropTypes | Array.<string> | List of item types that can be dropped on a row. |


**addDefaultGroup(defaultGroup)**
Add a default group that will always be displayed, even if there are no rows belonging to this group.

The groups will be sorted in the order they were added to the default groups.

| Name | Type | Description |
| --- | --- | --- |
| defaultGroup | object | otris.scriptlist.Group | Default group to always be displayed, even if there are no rows for this group. |


**setAcceptedDropTypes()**
- See:  setAcceptedDropTypes


**setCollapsed(collapsed)**
Initially groups will be expanded. This can be used to collapse a group.

| Name | Type | Description |
| --- | --- | --- |
| collapsed | boolean | collapse this group on first display |


**setComparator(comparator)**
Set comparator for this group

| Name | Type | Description |
| --- | --- | --- |
| comparator | function | Comparator for this group comparatorCB(valA, valB, rowA, rowB){number} Callback to sort values of this column. If remoteSort is enabled, rowA and rowB will be a otris.scriptlist.Row else they will be a documents.sdk.grid.GridRowModel. Name Type Description valA any value A that should be compared valB any value B that should be compared rowA otris.scriptlist.Row | documents.sdk.grid.GridRowModel row A that should be compared rowB otris.scriptlist.Row | documents.sdk.grid.GridRowModel row B that should be compared Since: DOCUMENTS 5.0h Returns: Type Description number -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally | Name | Type | Description | valA | any | value A that should be compared | valB | any | value B that should be compared | rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared | rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared | Type | Description | number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally |
| Name | Type | Description |
| valA | any | value A that should be compared |
| valB | any | value B that should be compared |
| rowA | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row A that should be compared |
| rowB | otris.scriptlist.Row | documents.sdk.grid.GridRowModel | row B that should be compared |
| Type | Description |
| number | -1 sort rowA first, 1 sort rowB first, 0 rowA and rowB are sorted equally |


**setDefaultGroups(default_groups)**
List of default groups to display if there are empty groups.

The default groups will be sorted in the order they were added.

| Name | Type | Description |
| --- | --- | --- |
| default_groups | Array.<otris.scriptlist.group> | list of default groups |