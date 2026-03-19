---
title: "Class: ScriptReturn"
source: "https://otris.software/documents/api/scriptextensions/otris.notifications.ScriptReturn.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| returnType | string | returnType of the ScriptReturn |
| returnValue | string | returnValue of the ScriptReturn |

- Since:
DOCUMENTS 5.0d


##### Example


```
// #import [Notification_API]

var notification = new otris.notifications.Notification("Just a test... " + (new Date()).toISOString(), "My title");
var scriptReturn = new otris.notifications.ScriptReturn("showFile", "dopaag_112000911");

notification.setAction(scriptReturn);
```


### Methods


**setReturnType(returnType)**
Set the returnType

| Name | Type | Description |
| --- | --- | --- |
| returnType | string | returnType of the ScriptReturn |


**setReturnValue(returnValue)**
Set the returnValue

| Name | Type | Description |
| --- | --- | --- |
| returnValue | string | returnValue of the ScriptReturn |