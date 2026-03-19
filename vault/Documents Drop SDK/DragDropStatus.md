---
title: "Interface: DragDropStatus"
source: "https://otris.software/documents/api/documents-native/DragDropStatus.html"
---

Event with information about an active drag and drop operation


### Members


**eventDragDropStatus.EnumDragDropEvent**
Type of drag and drop event


**filesArray.<FileData>**
File information, unparsed fileData (no subclasses) with some missing properties


**posXnumber**
X position of mouse cursor relative to html page


**posYnumber**
Y position of mouse cursor relative to html page


**typestring**
"dragDropStatus"


### Type Definitions


**DragDropStatus.EnumDragDropEvent"enter" "move" "leave" "drop"**
Type of the drag & drop event


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| "enter" | string | Mouse with drag drop data entered the gadget |
| "move" | string | Mouse moved over the gadget while drag drop is in progress |
| "leave" | string | Mouse left the gadget without dropping |
| "drop" | string | Mouse dropped files into the gadget |