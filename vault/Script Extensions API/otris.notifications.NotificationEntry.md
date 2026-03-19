---
title: "Class: NotificationEntry"
source: "https://otris.software/documents/api/scriptextensions/otris.notifications.NotificationEntry.html"
---

### Constructors


****
A [[Script Extensions API/otris.notifications.NotificationEntry]] is the **persisted** version of a [[Script Extensions API/otris.notifications.Notification]].

- Since:
DOCUMENTS 5.0e


### Extends

- otris.notifications.Notification


### Methods


**delete()**
Delete entry


**inherited getAction(){otris.notifications.ScriptReturn}**
Get action


##### Returns:

| Type | Description |
| --- | --- |
| otris.notifications.ScriptReturn | action |


**inherited getFileId(){string}**
Get filedId


##### Returns:

| Type | Description |
| --- | --- |
| string | fileId |


**inherited getMessage(){string}**
Get message


##### Returns:

| Type | Description |
| --- | --- |
| string | message |


**inherited getOnloadAction(){otris.notifications.ScriptReturn}**
Get onload action


##### Returns:

| Type | Description |
| --- | --- |
| otris.notifications.ScriptReturn | onload action |


**inherited getReferenceId(){string}**
Get referenceId


##### Returns:

| Type | Description |
| --- | --- |
| string | referenceId |


**getStatus(){otris.notifications.Status}**
Returns the status of the notification entry.


##### Returns:

| Type | Description |
| --- | --- |
| otris.notifications.Status | current status |


**inherited getStyle()**
Get notification style

- Since:
DOCUMENTS 5.0i


**getTimestamp(){Number}**
Returns the timestamp of the notification entry.


##### Returns:

| Type | Description |
| --- | --- |
| Number | timestamp (number of milliseconds elapsed since January 1, 1970 00:00:00 UTC) |


**inherited getTitle(){string}**
Get title


##### Returns:

| Type | Description |
| --- | --- |
| string | title |


**inherited getType(){otris.notifications.Type}**
Get title


##### Returns:

| Type | Description |
| --- | --- |
| otris.notifications.Type | title |


**publish()**
Alias for [[Script Extensions API/otris.notifications.NotificationEntry#save|save()]].


**save()**
Persists the notification entry


**inherited setAction(action)**
Set the click action of the notification

| Name | Type | Description |
| --- | --- | --- |
| action | otris.notifications.ScriptReturn | notification onclick action |


**inherited setDeleteOnload(deleteOnload)**
Delete the notification (on the server) automatically after it has been displayed on the client

| Name | Type | Description |
| --- | --- | --- |
| deleteOnload | boolean | delete on load flag |

- Since:
DOCUMENTS 5.0f HF2


**inherited setMessage(message)**
Set the notification message

| Name | Type | Description |
| --- | --- | --- |
| message | string | message |


**inherited setOnloadAction(onloadAction)**
Set the onload action of the notification

| Name | Type | Description |
| --- | --- | --- |
| onloadAction | otris.notifications.ScriptReturn | notification onload action |


**inherited setProducer(user)**
Set the user who *produced* the notification (e.g. the author of a file message)

Defaults to the current system user

| Name | Type | Description |
| --- | --- | --- |
| user | SystemUser | optional system user |

- Since:
DOCUMENTS 5.0d HF2


**inherited setProgressValue(progressValue)**
Set the current progress value for a long running task. Set a integer value between 0 and 100.

A value over 100 means the task is done and was successful.

A negative value indicates that the task failed.

A non-integer value is automatically rounded.

The notification type must be set to `progress`.

It is also necessary to set a [[Script Extensions API/otris.notifications.Notification#setReferenceId|referenceId]] as a identifier for the task.

| Name | Type | Description |
| --- | --- | --- |
| progressValue | Number | current progress |

- Since:
DOCUMENTS 5.0e


**inherited setReferenceId(referenceId)**
Set a referenceId for the notification

| Name | Type | Description |
| --- | --- | --- |
| referenceId | string | reference id |


**inherited setRemoveOnAction(removeOnAction)**
Remove the notification if action is executed

| Name | Type | Description |
| --- | --- | --- |
| removeOnAction | boolean | remove on action flag |


**setStatus(status)**
Change the status of the notification entry.

| Name | Type | Description |
| --- | --- | --- |
| status | otris.notifications.Status | new status |


**inherited setSticky(sticky)**
Remove notification only if closed or clicked (otris.notifications.NotificationDefaults.sticky)

| Name | Type | Description |
| --- | --- | --- |
| sticky | boolean | sticky flag |


**inherited setStyle(options)**
Set notification style

Please note that the settings overwrite the default values of the notification type ([[Script Extensions API/otris.notifications#.Type|otris.notifications.Type]]).

| Name | Type | Description |
| --- | --- | --- |
| options | object | Name Type Default Description icon string optional icon definition (e.g. mdi:mdi-fruit-pineapple;color:green)* iconBackground string optional icon background color background string optional background color color string optional text color for title & message (e.g.: #eeeeee) className string optional sets the given class to the notification container (usage: use custom predefined stylings. e.g. added with client header code mechanism) lightness number .1 optional lightness adjustment of background colors when hovering the notification | Name | Type | Default | Description | icon | string |  | optional icon definition (e.g. mdi:mdi-fruit-pineapple;color:green)* | iconBackground | string |  | optional icon background color | background | string |  | optional background color | color | string |  | optional text color for title & message (e.g.: #eeeeee) | className | string |  | optional sets the given class to the notification container (usage: use custom predefined stylings. e.g. added with client header code mechanism) | lightness | number | .1 | optional lightness adjustment of background colors when hovering the notification |
| Name | Type | Default | Description |
| icon | string |  | optional icon definition (e.g. mdi:mdi-fruit-pineapple;color:green)* |
| iconBackground | string |  | optional icon background color |
| background | string |  | optional background color |
| color | string |  | optional text color for title & message (e.g.: #eeeeee) |
| className | string |  | optional sets the given class to the notification container (usage: use custom predefined stylings. e.g. added with client header code mechanism) |
| lightness | number | .1 | optional lightness adjustment of background colors when hovering the notification |

- Since:
DOCUMENTS 5.0i


**inherited setTimeout(timeout)**
Set the timeout (in ms) for this notification

| Name | Type | Description |
| --- | --- | --- |
| timeout | number | notification timeout (in ms) |


**inherited setTitle(title)**
Set the notification title

| Name | Type | Description |
| --- | --- | --- |
| title | string | notification title |


**inherited setType(type)**
Set the type of the notification

| Name | Type | Description |
| --- | --- | --- |
| type | otris.notifications.Type | notification type |


**transfer()**
Alias for [[Script Extensions API/otris.notifications.NotificationEntry#save|save()]].