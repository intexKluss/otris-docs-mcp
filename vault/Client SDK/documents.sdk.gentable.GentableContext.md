---
title: "Class: GentableContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.gentable.GentableContext.html"
---

### Constructors


****
The GentableContext provides full access to the [[Client SDK/documents.sdk.gentable.grid.GentableGridModel|GentableGridModel]],
[[Client SDK/documents.sdk.gentable.grid.GentableGridColumnModel|GentableGridColumnModel]] and the
[[Client SDK/documents.sdk.gentable.grid.GentableGridRowModel|GentableGridRowModel]]. It also provides basic functions like

copyRow, moveRow and resetSelection.


### Methods


**getCustomContainerCenter(){JQuery}**
Returns a jQuery reference to a div that is rendered between the gentable toolbar and the gentable that can be filled with custom html.

- Since:
5.0d


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | Container that can be modified |


**getCustomContainerNorth(){JQuery}**
Returns a jQuery reference to a div that is rendered above the gentable toolbar that can be filled with custom html.

- Since:
5.0d


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | Container that can be modified |


**getCustomContainerSouth(){JQuery}**
Returns a jQuery reference to a div that is rendered beneath the gentable that can be filled with custom html.

- Since:
5.0d


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | Container that can be modified |


**getGridModel(){documents.sdk.gentable.grid.GentableGridModel}**
Returns a gentable grid model.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.gentable.grid.GentableGridModel | A gentable grid model |