---
title: "Interface: EmailFile"
source: "https://otris.software/documents/api/documents-native/EmailFile.html"
---

This class currently has no attributes and is only used to designate,

that a this file is representing the parent email object, for example

a ".msg" file


### Extends

- FileData


### Members


**attributesnumber**
File system attributes as flags in a number


**createdDate**
Creation date of the file


**directoryNamestring**
Name of the directory, when the file was part of a directory drop


**idstring**
Unique id of this file.

**IMPORTANT:** This id is only unique in its fileGroup, it is not globally unique!


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
"emailFile"