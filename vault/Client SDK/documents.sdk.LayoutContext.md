---
title: "Class: LayoutContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.LayoutContext.html"
---

### Constructors


****
The LayoutContext provides information about the currently displayed layout.

It gives access to general layout info and about the current sizes of certain rendered elements.

- Since:
5.0f HF2


### Members


**toolbarDesign**

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| toolbarDesign | string | Design type of the toolbars (Possible values: default, titleToolbar). |


### Methods


**getMenubarSize(){object}**
Returns the size info for the Menubar


##### Returns:

| Type | Description |
| --- | --- |
| object | The size info as object: { width: <width>, height: <height> } |


**getToolbarDesign(){object}**
Returns the design type of the toolbars (Possible values: `default`, `titleToolbar`)


##### Returns:

| Type | Description |
| --- | --- |
| object | Design type of the toolbars (Possible values: default, titleToolbar) |