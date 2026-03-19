---
title: "Interface: MailRecipient"
source: "https://otris.software/documents/api/documents-native/MailRecipient.html"
---

Recipient of a mail


### Members


**emailstring**
Email address of the recipient


**namestring**
Display name of the recipient


**recipientTypeMailRecipient.EnumRecipientType**
Type of the recipient


**typestring**
"mailRecipient"


### Type Definitions


**MailRecipient.EnumRecipientType"to" "cc" "bcc" "other"**
Type of a recipient


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| "to" | string | Recipient of the mail |
| "cc" | string | CC recipient |
| "bcc" | string | BCC recipient (Not supported in web based addins for outlook) |
| "other" | string | Currently unused |