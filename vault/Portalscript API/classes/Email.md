---
title: "Email | Portalscript API"
source: "https://otris.software/documents/api/portalscript/classes/Email.html"
---

# Class Email

The Email class allows to create and send an email.

All the email settings for the principal (such as SMTP server and authentication) are used when sending an email.


## Index


### Methods

- addAttachment
- getAttribute
- getLastError
- remove
- send
- setAttribute
- setBCC
- setBody
- setCC
- setDeleteAfterSending
- setFrom
- setSendingTime
- setSubject
- setTo


### Constructors

- constructor


## Methods


### addAttachment

`addAttachment(attachment: any, sourceFilePath: string): boolean`

Add an attachment to the email.

**Parameters:**

- `attachment`: `any` — Document object or string value containing the attachment name of the Email.
- `sourceFilePath`: `string` — Optional string value containing the path of the file to be attached and stored on the server's filesystem in case the first parameter is a string specifying the attachment name. You may only delete this file after calling the function send().

Note: This Parameter is ignored in case the first parameter is a Document object.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var mail = new Email("receiver@domain.de", "sender@domain.de", "Test", "This is a test.");
if (!mail.addAttachment("log.txt", "C:\\tmp\\changelog.txt"))
  util.out(mail.getLastError());
```


### getAttribute

`getAttribute(attribute: string): string`

Get the String value of an attribute of the email.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute.

**Returns:** string

**Since:** DOCUMENTS 5.0i


### getLastError

`getLastError(shortMessage?: boolean): string`

Get the description of the last error that occurred.

Since: DOCUMENTS 5.0g (new parameter shortMessage)

**Parameters:**

- `shortMessage`: `boolean` — optional Boolean; removes "Error in function: class.method(): " from the message.

Default: false

**Returns:** string

**Since:** DOCUMENTS 4.0d


### remove

`remove(): boolean`

Remove the email object from DOCUMENTS.

**Returns:** boolean

**Since:** DOCUMENTS 5.0i


### send

`send(): boolean`

Send the email to recipients.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var mail = new Email("receiver@domain.de");
mail.setSubject("Test");
mail.setBody("This is a test mail.");
if (!mail.send())
  util.out(mail.getLastError());
```


### setAttribute

`setAttribute(attribute: string, value: string): boolean`

Set the String value of an attribute of the email to the desired value.

**Parameters:**

- `attribute`: `string` — String containing the name of the desired attribute
- `value`: `string` — String containing the desired value of the attribute

**Returns:** boolean

**Since:** DOCUMENTS 5.0i


### setBCC

`setBCC(bcc: string): boolean`

Set blind carbon-copy recipients of the email.

**Parameters:**

- `bcc`: `string` — String containing the email addresses of blind carbon-copy recipients.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


### setBody

`setBody(body: string): boolean`

Set the content of the email.

Note: To send an HTML email, the body text must begin with the tag. Note: Lines may contain a maximum of 1000 characters (including the 1-2 characters for the line break).

**Parameters:**

- `body`: `string` — String containing the content of the email.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var mail = new Email("receiver@domain.de");
mail.setSubject("Test");
mail.setBody("<HTML>This is a &#x3c;HTML&#x3e; mail.");
if (!mail.send())
  util.out(mail.getLastError());
```


### setCC

`setCC(cc: string): boolean`

Set carbon-copy recipients of the email.

**Parameters:**

- `cc`: `string` — String containing the email addresses of carbon-copy recipients.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


### setDeleteAfterSending

`setDeleteAfterSending(deleteAfterSending: boolean): boolean`

Decide on whether the email is to be deleted after successful sending.

**Parameters:**

- `deleteAfterSending`: `boolean` — boolean value indicating whether the email is to be deleted after successful sending.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


### setFrom

`setFrom(from: string): boolean`

Set the sender's email address.

**Parameters:**

- `from`: `string` — String containing the sender's email address.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


### setSendingTime

`setSendingTime(sendingTime: Date): boolean`

Set sending time of the email.

**Parameters:**

- `sendingTime`: `Date` — Date object representing the sending time.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


```ts
var mail = new Email("receiver@domain.de", "sender@domain.de", "Test", "This is a test.");
var actDate = new Date();
var newDate = context.addTimeInterval(actDate, 2, "days", false);
mail.setSendingTime(newDate);
```


### setSubject

`setSubject(subject: string): boolean`

Set the subject of the email.

**Parameters:**

- `subject`: `string` — String containing the desired subject of the email.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


### setTo

`setTo(to: string): boolean`

Set the primary recipients of the email.

**Parameters:**

- `to`: `string` — String containing the email addresses of primary recipients.

**Returns:** boolean

**Since:** DOCUMENTS 4.0d


## Constructors


### constructor

`new Email( to: string, from: string, subject: string, body: string, cc: string, bcc: string, sendingTime: Date, deleteAfterSending: boolean, ): Email`

Create a new instance of the Email class.

In case of multiple recipients for the parameters to, cc or bcc, the individual email addresses are to be separated by a comma (,). It is not allowed to send an email without any primary recipients specified by the parameter to. To send a HTML email the body must begin with the tag. Emails in following cases are stored in the folder Administration > Sent eMails in the DOCUMENTS Manager:

They are to be sent in the future (specified by sendingTime);
Sending them failed;
The parameter deleteAfterSending is set to false.

Since: DOCUMENTS 4.0d

**Parameters:**

- `to`: `string` — String value containing the email addresses of primary recipients.
- `from`: `string` — Optional string value containing the sender's email address. If no sender is specified, the default sender for the principal is used.
- `subject`: `string` — Optional string value containing the subject of the email.
- `body`: `string` — Optional string value containing the content of the email.
- `cc`: `string` — Optional string value containing the email addresses of carbon-copy recipients (appearing in the header of the email).
- `bcc`: `string` — Optional string value containing the email addresses of blind carbon-copy recipients (remaining invisible to other recipients).
- `sendingTime`: `Date` — Optional Date object specifying when the email is to be sent. If sending time is not specified, the email will be sent immediately by calling send().
- `deleteAfterSending`: `boolean` — Optional flag indicating whether the email is to be deleted after successful sending. The default value is true.

**Returns:** Email

**Since:** DOCUMENTS 4.0d


```ts
var mail = new Email("receiver@domain.de", "sender@domain.de", "Test", "This is a test email.");
mail.addAttachment("log.txt", "C:\\tmp\\changelog.txt");
mail.setBCC("somebody1@domain.de,somebody2@domain.com");
mail.setDeleteAfterSending(true);
if (!mail.send())
  util.out(mail.getLastError());
```