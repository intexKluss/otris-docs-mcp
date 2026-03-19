---
title: "Class: Notification"
source: "https://otris.software/documents/api/scriptextensions/otris.notifications.Notification.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| message | string | optional message |
| title | string | optional notification title |
| type | otris.notifications.Type | optional notification type |
| action | otris.notifications.ScriptReturn | optional Add a click action for the notification |
| sticky | boolean | optional Remove notification only if closed or clicked (otris.notifications.NotificationDefaults.sticky) |

- Since:
DOCUMENTS 5.0d


##### Examples


```
// #import [Notification_API]
var loginName = "schreiber";
var notification = new otris.notifications.Notification("Just a test... " + (new Date()).toISOString(), "My title");
notification.publish(loginName);
```


```
// #import [Notification_API]
// Create a progress notification
var loginName = "schreiber";
var notification = new otris.notifications.Notification("My custom message", "My custom title");
// Set the type to "progress"
notification.setType("progress");
// Set the current progress as a integer value between 0 and 100. see setProgressValue() for details
notification.setProgressValue(10);
// All progress notification concerning the same task must have the same referenceId
notification.setReferenceId("myCustomProgress007");
notification.publish(loginName);
```


### Methods


**getAction(){otris.notifications.ScriptReturn}**
Get action


##### Returns:

| Type | Description |
| --- | --- |
| otris.notifications.ScriptReturn | action |


**getFileId(){string}**
Get filedId


##### Returns:

| Type | Description |
| --- | --- |
| string | fileId |


**getMessage(){string}**
Get message


##### Returns:

| Type | Description |
| --- | --- |
| string | message |


**getOnloadAction(){otris.notifications.ScriptReturn}**
Get onload action


##### Returns:

| Type | Description |
| --- | --- |
| otris.notifications.ScriptReturn | onload action |


**getReferenceId(){string}**
Get referenceId


##### Returns:

| Type | Description |
| --- | --- |
| string | referenceId |


**getStyle()**
Get notification style

- Since:
DOCUMENTS 5.0i


**getTitle(){string}**
Get title


##### Returns:

| Type | Description |
| --- | --- |
| string | title |


**getType(){otris.notifications.Type}**
Get title


##### Returns:

| Type | Description |
| --- | --- |
| otris.notifications.Type | title |


**publish(user, accessProfile, options)**
Publish the notification to the given user(s) and/or users of the given access profile(s).

One of the parameters (user, accessProfile) must be provided.

| Name | Type | Description |
| --- | --- | --- |
| user | string | SystemUser | Array.<string> | Array.<SystemUser> | optional recipients |
| accessProfile | string | AccessProfile | Array.<string> | Array.<AccessProfile> | optional access profile containing the recipients (since: Documents 5.0g) |
| options | object | optional publish options Name Type Default Description includeSubProfiles boolean true optional parameter used for AccessProfile#getSystemUsers() includeLockedUsers boolean false optional parameter used for AccessProfile#getSystemUsers() includeInvisibleUsers boolean true optional parameter used for AccessProfile#getSystemUsers() | Name | Type | Default | Description | includeSubProfiles | boolean | true | optional parameter used for AccessProfile#getSystemUsers() | includeLockedUsers | boolean | false | optional parameter used for AccessProfile#getSystemUsers() | includeInvisibleUsers | boolean | true | optional parameter used for AccessProfile#getSystemUsers() |
| Name | Type | Default | Description |
| includeSubProfiles | boolean | true | optional parameter used for AccessProfile#getSystemUsers() |
| includeLockedUsers | boolean | false | optional parameter used for AccessProfile#getSystemUsers() |
| includeInvisibleUsers | boolean | true | optional parameter used for AccessProfile#getSystemUsers() |


**setAction(action)**
Set the click action of the notification

| Name | Type | Description |
| --- | --- | --- |
| action | otris.notifications.ScriptReturn | notification onclick action |


**setDeleteOnload(deleteOnload)**
Delete the notification (on the server) automatically after it has been displayed on the client

| Name | Type | Description |
| --- | --- | --- |
| deleteOnload | boolean | delete on load flag |

- Since:
DOCUMENTS 5.0f HF2


**setMessage(message)**
Set the notification message

| Name | Type | Description |
| --- | --- | --- |
| message | string | message |


**setOnloadAction(onloadAction)**
Set the onload action of the notification

| Name | Type | Description |
| --- | --- | --- |
| onloadAction | otris.notifications.ScriptReturn | notification onload action |


**setProducer(user)**
Set the user who *produced* the notification (e.g. the author of a file message)

Defaults to the current system user

| Name | Type | Description |
| --- | --- | --- |
| user | SystemUser | optional system user |

- Since:
DOCUMENTS 5.0d HF2


**setProgressValue(progressValue)**
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


**setReferenceId(referenceId)**
Set a referenceId for the notification

| Name | Type | Description |
| --- | --- | --- |
| referenceId | string | reference id |


**setRemoveOnAction(removeOnAction)**
Remove the notification if action is executed

| Name | Type | Description |
| --- | --- | --- |
| removeOnAction | boolean | remove on action flag |


**setSticky(sticky)**
Remove notification only if closed or clicked (otris.notifications.NotificationDefaults.sticky)

| Name | Type | Description |
| --- | --- | --- |
| sticky | boolean | sticky flag |


**setStyle(options)**
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


**setTimeout(timeout)**
Set the timeout (in ms) for this notification

| Name | Type | Description |
| --- | --- | --- |
| timeout | number | notification timeout (in ms) |


**setTitle(title)**
Set the notification title

| Name | Type | Description |
| --- | --- | --- |
| title | string | notification title |


**setType(type)**
Set the type of the notification

| Name | Type | Description |
| --- | --- | --- |
| type | otris.notifications.Type | notification type |


**transfer(){string}**
Use this method to transfer a notification as return value to the client

- Since:
DOCUMENTS 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| string | returnValue |


##### Example


```
// #import [Notification_API]
const notification = new otris.notifications.Notification("Just a test... " + (new Date()).toISOString(), "My title");
context.returnType = "notification";
return notification.transfer();
```