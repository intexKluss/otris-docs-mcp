---
title: "Module: FileMessageManager"
source: "https://otris.software/documents/api/scriptextensions/module-FileMessageManager.html"
---

The **FileMessageManager** provides an API to access and edit the file messages (*comments*).

For all methods concerning the messages it is necessary to initialize the manager with the [[Script Extensions API/module-FileMessageManager#init|init()]] method.
**Notice:** It is always necessary to use the [[Script Extensions API/module-FileMessageManager#commit|commit()]] method to persist any modifications.

- Since:
DOCUMENTS 5.0g


### Example


```
context.enableModules(undefined, 3);
const fileMessageManager = require("util.FileMessageManager");
// intialize without fileId (context.file is used)
fileMessageManager.init();
// set the current user as default user
fileMessageManager.setDefaultUser(context.getSystemUser());
// add a new message with the default user as author
fileMessageManager.addMessage("This is a new file message.");
// save and publish
fileMessageManager.commit();
```


### Methods


**addMessage(body, author, recipients)**
Add a new message.

Please note that added messages must be persisted/published with [[Script Extensions API/module-FileMessageManager#commit|commit()]].

| Name | Type | Description |
| --- | --- | --- |
| body | string | message body |
| author | string | SystemUser | optional author of the message (fallback to default user if not given) |
| recipients | Array.<string> | optional recipients as user logins (The recipients receive a notification of the new message). |

- See:
setDefaultUser()


**commit()**
Save changes and publish messages.


##### Throws:

| Type | Description |
| --- | --- |
| Error | Throws an error if the "CommentField hash" changed after intializing the FileMessageManager or if an error occurs on save |


**deleteMessage(messageId)**
Mark a message as deleted. [[Script Extensions API/module-FileMessageManager#commit|commit()]] needed to persist this modification.

| Name | Type | Description |
| --- | --- | --- |
| messageId | string | optional id of a file message |


##### Throws:

| Type | Description |
| --- | --- |
| Error | Throws an error if messageId is not valid |


##### Returns:

[[Script Extensions API/module-FileMessageManager|FileMessageManager]]


**getMessage(messageId){FileMessage}**
Get a file message by id.

| Name | Type | Description |
| --- | --- | --- |
| messageId | string | id of a file message |


##### Throws:

| Type | Description |
| --- | --- |
| Error | Throws an error if messageId is not type of string |


##### Returns:

| Type | Description |
| --- | --- |
| FileMessage | file message or undefined if message does not exist |


**getMessages(author){Array.<FileMessage>}**
Get messages.

| Name | Type | Description |
| --- | --- | --- |
| author | string | SystemUser | optional optional filter by message author |


##### Returns:

| Type | Description |
| --- | --- |
| Array.<FileMessage> | list of file Messages |


**getSubscriptions(user, asIdList){FileResultset|Array.<string>}**
Get all files where the user has subscribed to the comments.

**Note:** In order to get the current user subscriptions the [[Script Extensions API/module-FileMessageManager#resyncUserSubscriptionLists|resyncUserSubscriptionLists()]] method

must be called at least once for an existing system.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| user | string | SystemUser |  | optional user (use default user if none given) |
| asIdList | boolean | false | optional set to true to get a list of ids |


##### Returns:

| Type | Description |
| --- | --- |
| FileResultset | Array.<string> | FileResultset or a list of ids if asIdList = true |


**init(fileId)**
This function must be called to initialize the FileMessageManager.

| Name | Type | Description |
| --- | --- | --- |
| fileId | string | optional if not given context.file is used. |


##### Throws:

| Type | Description |
| --- | --- |
| Error | Will throw an error if initializing fails |


##### Returns:

[[Script Extensions API/module-FileMessageManager|FileMessageManager]]


**removeAuthor(messageId)**
Remove the author of a message. [[Script Extensions API/module-FileMessageManager#commit|commit()]] needed to persist this modification.

| Name | Type | Description |
| --- | --- | --- |
| messageId | string | optional id of a file message |


##### Throws:

| Type | Description |
| --- | --- |
| Error | Throws an error if messageId is not valid |


##### Returns:

[[Script Extensions API/module-FileMessageManager|FileMessageManager]]


**removeMessage(messageId)**
Remove a message. [[Script Extensions API/module-FileMessageManager#commit|commit()]] needed to persist this modification.

| Name | Type | Description |
| --- | --- | --- |
| messageId | string | id of a file message |


##### Throws:

| Type | Description |
| --- | --- |
| Error | Throws an error if messageId is not valid |


##### Returns:

[[Script Extensions API/module-FileMessageManager|FileMessageManager]]


**resyncUserSubscriptionLists(){boolean}**
Sync the *user subscriptions lists* with the subscription information stored in the files.

**Notice:** The execution can be very resource-intensive.

- See:
getSubscriptions()


##### Returns:

| Type | Description |
| --- | --- |
| boolean |  |


**setDefaultUser(user)**
Set a default user for the following methods:
[[Script Extensions API/module-FileMessageManager#addMessage|addMessage()]], [[Script Extensions API/module-FileMessageManager#subscribeUser|subscribeUser()]], [[Script Extensions API/module-FileMessageManager#unsubscribeUser|unsubscribeUser()]] and [[Script Extensions API/module-FileMessageManager#getSubscriptions|getSubscriptions()]]

If these methods were called without a `user` parameter the default user is used.

| Name | Type | Description |
| --- | --- | --- |
| user | SystemUser |  |


##### Returns:

[[Script Extensions API/module-FileMessageManager|FileMessageManager]]


**subscribeUser(user)**
Subscribe a user from to the file messages of the current file.

| Name | Type | Description |
| --- | --- | --- |
| user | string | SystemUser | optional user (use default user if none given) |


##### Returns:

[[Script Extensions API/module-FileMessageManager|FileMessageManager]]


**unsubscribeUser(user)**
Unsubscribe a user from the file messages of the current file.

| Name | Type | Description |
| --- | --- | --- |
| user | string | SystemUser | optional user (use default user if none given) |


##### Returns:

[[Script Extensions API/module-FileMessageManager|FileMessageManager]]


**updateMessageBody(messageId, newBody){FileMessage}**
Update the body (message text) of a message. [[Script Extensions API/module-FileMessageManager#commit|commit()]] needed to persist this modification.

| Name | Type | Description |
| --- | --- | --- |
| messageId | string | id of a file message |
| newBody | string | id of a file message |


##### Throws:

| Type | Description |
| --- | --- |
| Error | Throws an error if messageId is invalid or newBody is not type of string |


##### Returns:

| Type | Description |
| --- | --- |
| FileMessage |  |