---
title: "Interface: Attachment"
source: "https://otris.software/documents/api/documents-native/Attachment.html"
---

File is an attachment of an email


### Extends

- FileData


### Members


**attributesnumber**
File system attributes as flags in a number


**contentIdstring**
A unique id which is used to reference the file in the body


**createdDate**
Creation date of the file


**directoryNamestring**
Name of the directory, when the file was part of a directory drop


**idstring**
Unique id of this file.

**IMPORTANT:** This id is only unique in its fileGroup, it is not globally unique!


**isContactPhotoboolean**
If true the file represents a contact photo


**isEmbeddedEmailboolean**
If true the file is an email file, which is attached to the email as an attachment (e.g. .msg file in an outlook email)!


**isHiddenboolean**
If true the file is hidden from the user


**isInlineboolean**
If true the file is used in the html body of the email (e.g. an embedded image)


**lastAccessDate**
Time of last access to the file


**lastWriteDate**
Time at which the file was last written to


**multiFormatGroupstring**
The name of a group of multiple files, which represent the same data but in different formats (e.g. a word document in docx, doc and pdf)


**namestring**
Filename of the file


**pathstring**
Path where the file is located in the users file system


**sizenumber**
File size in byte


**typestring**
"attachment"