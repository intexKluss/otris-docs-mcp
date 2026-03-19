---
title: "Class: NotificationManager"
source: "https://otris.software/documents/api/scriptextensions/otris.notifications.NotificationManager.html"
---

### Constructors


****
The [[Script Extensions API/otris.notifications.NotificationManager]] provides several methods to retrieve and manipulate notifications

- Since:
DOCUMENTS 5.0e


##### Example


```
var manager = new otris.notifications.NotificationManager(),
    systemUser = context.getSystemUser(),
    entries = manager.getNotificationEntries(systemUser);

if(Array.isArray(entries) && entries.length > 0) {
    // Do something with the notifications entries
}
```


### Methods


**deleteNotificationsByStatus(user, status)**
Deletes all notifications of the given status

| Name | Type | Description |
| --- | --- | --- |
| user | string | SystemUser | login of a user or a SystemUser |
| status | otris.notifications.Status | notification status |


**getNotificationEntries(user, status){Array.<otris.notifications.NotificationEntry>}**
Returns the notifications of a given user

| Name | Type | Description |
| --- | --- | --- |
| user | string | SystemUser | login of a user or a SystemUser |
| status | otris.notifications.Status | optional restrict to specific status |


##### Returns:

| Type | Description |
| --- | --- |
| Array.<otris.notifications.NotificationEntry> | array of notification entries otris.notifications.NotificationEntry |