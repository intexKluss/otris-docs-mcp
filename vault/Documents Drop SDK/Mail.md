---
title: "Interface: Mail"
source: "https://otris.software/documents/api/documents-native/Mail.html"
---

Data and files of an email


### Extends

- FileGroup


### Members


**bodyHtmlstring**
Html content of the body


**bodyTxtstring**
Text content of the body


**filesArray.<FileData>**
Array of files, which belong to this file group


**idstring**
Unique id of this fileGroup


**inReplyToIdstring**
Id of the mail being replied to. **Only works on desktop and desktop add-ins**


**isReplyboolean**
True if the mail is a reply to another mail. **Only works on desktop and desktop add-ins**


**namestring**
Name/Label for the fileGroup. In case of an email this also contains the subject


**receivedDate**
Date when the mail was received


**recipientsArray.<MailRecipient>**
The recipients of the mail


**senderMailstring**
Email address of the sender


**senderNamestring**
Display name of the sender


**sentDate**
Date when the mail was sent


**sourceFileGroup.EnumFileGroupSource**
Source of the file, using this you can determine how the user added the file to this gadget


**subjectstring**
Subject of the email


**typestring**
"mail"