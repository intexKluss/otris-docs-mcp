---
title: "Class: ScriptListStyle"
source: "https://otris.software/documents/api/scriptextensions/otris.scriptlist.ScriptListStyle.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| configuration | object | style configuration Name Type Description defaultBackground string optional css color definiton (sets value for: rowBackground, rowOddBackground, listBorderColor and scrollbarBackground) mainMargin string optional css margin definiton mainBackground string optional css color definiton mainBorderColorTop string optional css color definiton headerBackground string optional css color definiton color string optional css color definiton oddColor string optional css color definiton headerColumnBackground string optional css color definiton groupColumnBackground string optional css color definiton groupColumnColor string optional css color definiton groupColumnBorderColor string optional css color definiton rowBackground string optional css color definiton rowOddBackground string optional css color definiton rowActiveBackground string optional css color definiton rowHoverBackground string optional css color definiton rowCheckboxWrapperDisplay string optional css display definiton rowCheckboxWrapperAlignItems string optional css align-items definiton listBorderColor string optional css color definiton scrollbarBackground string optional css color definiton scrollbarColor string optional css color definiton | Name | Type | Description | defaultBackground | string | optional css color definiton (sets value for: rowBackground, rowOddBackground, listBorderColor and scrollbarBackground) | mainMargin | string | optional css margin definiton | mainBackground | string | optional css color definiton | mainBorderColorTop | string | optional css color definiton | headerBackground | string | optional css color definiton | color | string | optional css color definiton | oddColor | string | optional css color definiton | headerColumnBackground | string | optional css color definiton | groupColumnBackground | string | optional css color definiton | groupColumnColor | string | optional css color definiton | groupColumnBorderColor | string | optional css color definiton | rowBackground | string | optional css color definiton | rowOddBackground | string | optional css color definiton | rowActiveBackground | string | optional css color definiton | rowHoverBackground | string | optional css color definiton | rowCheckboxWrapperDisplay | string | optional css display definiton | rowCheckboxWrapperAlignItems | string | optional css align-items definiton | listBorderColor | string | optional css color definiton | scrollbarBackground | string | optional css color definiton | scrollbarColor | string | optional css color definiton |
| Name | Type | Description |
| defaultBackground | string | optional css color definiton (sets value for: rowBackground, rowOddBackground, listBorderColor and scrollbarBackground) |
| mainMargin | string | optional css margin definiton |
| mainBackground | string | optional css color definiton |
| mainBorderColorTop | string | optional css color definiton |
| headerBackground | string | optional css color definiton |
| color | string | optional css color definiton |
| oddColor | string | optional css color definiton |
| headerColumnBackground | string | optional css color definiton |
| groupColumnBackground | string | optional css color definiton |
| groupColumnColor | string | optional css color definiton |
| groupColumnBorderColor | string | optional css color definiton |
| rowBackground | string | optional css color definiton |
| rowOddBackground | string | optional css color definiton |
| rowActiveBackground | string | optional css color definiton |
| rowHoverBackground | string | optional css color definiton |
| rowCheckboxWrapperDisplay | string | optional css display definiton |
| rowCheckboxWrapperAlignItems | string | optional css align-items definiton |
| listBorderColor | string | optional css color definiton |
| scrollbarBackground | string | optional css color definiton |
| scrollbarColor | string | optional css color definiton |

- Since:
DOCUMENTS 5.0f
- See:
otris.scriptlist.List#setListStyle


##### Example


```
var listStyle = new otris.scriplist.ScriptListStyle();
```


### Methods


**get(key){string}**
Get value for key

| Name | Type | Description |
| --- | --- | --- |
| key | string |  |


##### Returns:

| Type | Description |
| --- | --- |
| string | value for the given key. returns undefined if key is not set |


**set(key, value)**
Set style

| Name | Type | Description |
| --- | --- | --- |
| key | string | object | key to set (if key is type of object the set is done for all key&value pairs of the object) |
| value | string | optional value to set (only optional if key is of type object) |