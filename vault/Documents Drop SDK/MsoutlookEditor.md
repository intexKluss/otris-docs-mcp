---
title: "Interface: MsoutlookEditor"
source: "https://otris.software/documents/api/documents-native/MsoutlookEditor.html"
---

The current Outlook mail editor


### Methods


**insertText(text){Promise.<boolean>}**
Inserts text at cursor position into the mail

| Name | Type | Description |
| --- | --- | --- |
| text | string | The text to be inserted |


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<boolean> | Promise which resolves after the text was inserted. Resolves with true if the text could be inserted. |


**onMailSend(handler)**
Registers an event handler for the click on the send button in outlook.

After registering this handler the mail will only be sent after you invoke

the callback parameter of the event handler function

**Only available on desktop outlook add-in**

| Name | Type | Description |
| --- | --- | --- |
| handler | MsoutlookEditor.OnMailSendHandler | The function which gets called before the mail is sent |


**sendMail(){Promise}**
Sends the mail

**Only available on desktop outlook add-in**


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after the mail was sent. |


**setAttribute(key, value){Promise}**
Inserts text at cursor position into the mail

| Name | Type | Description |
| --- | --- | --- |
| key | MsoutlookEditor.EnumAttributeKey | The key of the attribute which should be set |
| value | string | The new value for the attribute |


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise which resolves after the attribute was set. |


### Type Definitions


**MsoutlookEditor.EnumAttributeKey"to" "cc" "bcc" "subject"**
Name of the attribute to set


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| "to" | string | Recipient(s) of the mail (separated by semicolon) |
| "cc" | string | CC recipient(s) (separated by semicolon) |
| "bcc" | string | BCC recipient(s) (separated by semicolon) |
| "subject" | string | Subject of the mail |


**MsoutlookEditor.OnMailSendCallback(continueSending)**
Callback for the result of the OnMailSendHandler

| Name | Type | Description |
| --- | --- | --- |
| continueSending | boolean | Whether to conitune sending the mail or not |


**MsoutlookEditor.OnMailSendHandler(callback)**
Event handler for when the user clicks on send

| Name | Type | Description |
| --- | --- | --- |
| callback | MsoutlookEditor.OnMailSendCallback | Callbackfunction which has to be called with true to continue sending the mail |