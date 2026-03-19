---
title: "Namespace: notifications"
source: "https://otris.software/documents/api/scriptextensions/otris.notifications.html"
---

### Classes


**Notification**


**NotificationEntry**


**NotificationManager**


**ScriptReturn**


### Type Definitions


**otris.notifications.NotificationDefaultsobject**
Some default values for the notifications


##### Properties:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | string | info | default notification type (info) |
| sticky | boolean | false | default value for the sticky flag (false) |
| removeOnAction | boolean | true | default value for the remove on action flag (true) |
| deleteOnload | boolean | false | default value for the delete on load (false)* |
| timeout | number | true | default timeout value (8000) |

- Since:
DOCUMENTS 5.0d


**otris.notifications.Status"new" "read" "delivered"**
The type of the notification. `info`, `progress`, `warning`, `error`, `success`.

- Since:
DOCUMENTS 5.0e


**otris.notifications.Type"info" "progress" "warning" "error" "success" "info-colored" "info-colored1" "info-colored2" "info-colored3" "progress-colored" "progress-colored1" "progress-colored2" "progress-colored3"**
The type of the notification. `info`, `progress`.

Since *DOCUMENTS 5.0i* also: `warning`, `error`, `success`, `*-colored*`.