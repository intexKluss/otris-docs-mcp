---
title: "Interface: Directory"
source: "https://otris.software/documents/api/documents-native/Directory.html"
---

This class currently has no attributes and is only used to designate,

that the files in this group were part of a directory drop.

The `name` attribute represents the name of the directory


### Extends

- FileGroup


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
"directory"