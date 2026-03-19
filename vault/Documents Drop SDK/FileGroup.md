---
title: "Interface: FileGroup"
source: "https://otris.software/documents/api/documents-native/FileGroup.html"
---

Groups multiple files per selection together


### Members


**filesArray.<FileData>**
Array of files, which belong to this file group


**idstring**
Unique id of this fileGroup


**namestring**
Name/Label for the fileGroup. In case of an email this also contains the subject


**sourceFileGroup.EnumFileGroupSource**
Source of the file, using this you can determine how the user added the file to this gadget


**typestring**
"fileGroup"


### Type Definitions


**FileGroup.EnumFileGroupSource"msoutlook" "msword" "drop" "app"**
Source of a fileGroup


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| "msoutlook" | string | Selection in outlook window |
| "msword" | string | Current open word document |
| "drop" | string | A file which was dropped onto the gadget, or sent to the desktop client |
| "app" | string | Images/Pdf from app |