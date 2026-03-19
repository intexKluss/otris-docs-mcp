---
title: "Namespace: scriptlist"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.html"
---

### Classes


**Column**


**Group**


**Grouping**


**HitresultList**


**List**


**MoveRowResult**


**Row**


**RowUpdate**


**ScriptListStyle**


**Subrow**


### Methods


**staticotris.scriptlist.clearCount(opts)**
Clear the cached count for a scriptlist.

| Name | Type | Description |
| --- | --- | --- |
| opts | object | optional Options for clearing a cached scriptlist count. Name Type Description cacheKey string optional Use this cache key to clear a cached script list count. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. | Name | Type | Description | cacheKey | string | optional Use this cache key to clear a cached script list count. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. |
| Name | Type | Description |
| cacheKey | string | optional Use this cache key to clear a cached script list count. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. |

- Since:
DOCUMENTS 6.0.1


**staticotris.scriptlist.getCount(opts){number}**
Get the count for a scriptlist. If the file with the register belonging to this scriptlist is opened for the first time,

the count will be determined by executing the provided count callback.

If the file has already been shown before, the cached count will be returned.

| Name | Type | Description |
| --- | --- | --- |
| opts | object | optional Options for getting the count for a script list. Name Type Description cacheKey string optional Use this cache key when getting the count for this scriptlist. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. countCallback function Callback to count the rows of a scriptlist. | Name | Type | Description | cacheKey | string | optional Use this cache key when getting the count for this scriptlist. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. | countCallback | function | Callback to count the rows of a scriptlist. |
| Name | Type | Description |
| cacheKey | string | optional Use this cache key when getting the count for this scriptlist. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. |
| countCallback | function | Callback to count the rows of a scriptlist. |

- Since:
DOCUMENTS 6.0.1


##### Returns:

| Type | Description |
| --- | --- |
| number | Number of rows for this scriptlist. |


##### Example


```
// script was called from register for displaying count
const event = otris.scriptlist.getScriptListEvent();
if (event && event.name === "count") {
  return otris.scriptlist.getCount({
    countCallback: () => {

      // create hitlist
      var hitlist = new otris.scriptlist.HitresultList({
            pageSize: 0, // load all hits
            searchResources: ["lcmContract"]
      });

      // execute hitlist to fetch all pages
      hitlist.transfer();
      return hitlist.getTotalSize();
    }
  }) + ""; // pass string back to documents client
}
```


**staticotris.scriptlist.getScriptListEvent(){object|undefined}**
Returns the ScriptList event. See [[Script Extensions API/otris.scriptlist.List#addListener|addListener]] for details.
**Notice:** Returns `undefined` if the script was not triggered by an event.

- Since:
DOCUMENTS 5.0d


##### Returns:

| Type | Description |
| --- | --- |
| object | undefined | ScriptList event object |


**staticotris.scriptlist.getScriptListParameters(){ScriptListParameters}**
This will get special parameters that were passed to the scriptlist.


##### Returns:

| Type | Description |
| --- | --- |
| ScriptListParameters | Special parameters that were passed to the scriptlist. |


**staticotris.scriptlist.getSortExpression(sortConfig, listSortOrder){string}**
| Name | Type | Description |
| --- | --- | --- |
| sortConfig | object | Configuration for sorting. Name Type Description multiSort boolean Allow sorting of multiple columns. sortOrder boolean Custom sorting by comma separated string to be returned in object format eg. name+,age- | Name | Type | Description | multiSort | boolean | Allow sorting of multiple columns. | sortOrder | boolean | Custom sorting by comma separated string to be returned in object format eg. name+,age- |
| Name | Type | Description |
| multiSort | boolean | Allow sorting of multiple columns. |
| sortOrder | boolean | Custom sorting by comma separated string to be returned in object format eg. name+,age- |
| listSortOrder | Array.<object> | List of columns with sort info. |


##### Returns:

| Type | Description |
| --- | --- |
| string | String which can be passed to new HitResultset(search,filter,sort) |


**staticotris.scriptlist.getSortOrder(sortConfig)**
| Name | Type | Description |
| --- | --- | --- |
| sortConfig | object | Configuration for sorting. Name Type Description multiSort boolean Allow sorting of multiple columns. sortOrder boolean Custom sorting by comma separated string to be returned in object format eg. name+,age- | Name | Type | Description | multiSort | boolean | Allow sorting of multiple columns. | sortOrder | boolean | Custom sorting by comma separated string to be returned in object format eg. name+,age- |
| Name | Type | Description |
| multiSort | boolean | Allow sorting of multiple columns. |
| sortOrder | boolean | Custom sorting by comma separated string to be returned in object format eg. name+,age- |


##### Returns:





List of columns with sort info.









**staticotris.scriptlist.hasCount(opts){boolean}**
Check if a count was cached for a scriptlist.

| Name | Type | Description |
| --- | --- | --- |
| opts | object | Options for getting the count for a script list. Name Type Description cacheKey string optional Use this cache key when check whether the count for this scriptlist was cached. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. | Name | Type | Description | cacheKey | string | optional Use this cache key when check whether the count for this scriptlist was cached. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. |
| Name | Type | Description |
| cacheKey | string | optional Use this cache key when check whether the count for this scriptlist was cached. If no cache key is provided, the default cache key <file-id>:<register-id>-count will be used. |

- Since:
DOCUMENTS 6.0.1


##### Returns:

| Type | Description |
| --- | --- |
| boolean | A count has been cached for this scriptlist. |


**staticotris.scriptlist.isDecoupled(){boolean}**
Get whether list is shown in a decoupled window.


##### Returns:

| Type | Description |
| --- | --- |
| boolean | List is shown in a decoupled window |


**staticotris.scriptlist.setSorting(hitlistSortOrder, listColumnsByKey)**
This is used to set the sort indicators on the columns.

| Name | Type | Description |
| --- | --- | --- |
| hitlistSortOrder | Array.<object> | Sort information for the columns |
| listColumnsByKey | Array.<object> | Map of scriptlist columns by column key |


### Type Definitions


**otris.scriptlist.ColumnDataType'STRING' 'NUMBER' 'ICONBUTTON' 'ICON' 'CUSTOM' 'CHECKBOX' 'DATE' 'TIMESTAMP' 'TRANSLATION_FIELD'**
String values for available data types of columns.

`STRING`: Regular String
`NUMBER`: Number formatted aligned right
`CUSTOM`: Custom field that can be used for images
`ICON`: Display a icon column with common icon syntax, eg: `entypo:home`. (since 5.0i)
`ICONBUTTON`: Display a **clickable** icon column with common icon syntax, eg: `entypo:home`. (since `6.0`)
`CHECKBOX`: Checkbox that will show boolean states
`DATE`: Javascript Date that will be displayed in the local date format and supports sorting values chronologically. (since 5.0i)
`TIMESTAMP`: Javascript Date that will be displayed in the local date time format and supports sorting values chronologically. (since 5.0i)
`TRANSLATION_FIELD`: Field with multilanguage value (de:..;en:...) that will be displayed in the local language. (since 6.0.2)

Further explanation for data types **DATE** and **TIMESTAMP**:


For these data types the row value must be either a real JavaScript-Date-Object,

an Integer-Number in milliseconds since epoch or a string in the date time string format (ISO 8601).