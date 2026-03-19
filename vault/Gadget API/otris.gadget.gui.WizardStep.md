---
title: "Class: WizardStep"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.WizardStep.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| id | string |  |
| label | string |  |
| gadgetConfig | object | string | gadget config (object) or gadgetAction (string). |
| dataClientFunction | string | optional Name of the client function that provides the step data |


### Methods


**addInfo(info)**
Add info content for the step. The content is displayed in a extra column or row.

| Name | Type | Description |
| --- | --- | --- |
| info | object | Name Type Description title string optional Adds a title to the info content (html markup is allowed) text string optional Adds text to the info content (html markup is allowed) html string optional Adds html content to the info content | Name | Type | Description | title | string | optional Adds a title to the info content (html markup is allowed) | text | string | optional Adds text to the info content (html markup is allowed) | html | string | optional Adds html content to the info content |
| Name | Type | Description |
| title | string | optional Adds a title to the info content (html markup is allowed) |
| text | string | optional Adds text to the info content (html markup is allowed) |
| html | string | optional Adds html content to the info content |


**getId(){string}**
Get the step id

- Since:
Documents 6.2.0


##### Returns:

| Type | Description |
| --- | --- |
| string | step id |


**setShowBusyPanel(showBusyPanelFlag)**
Show a busy panel while the step is loading.

| Name | Type | Description |
| --- | --- | --- |
| showBusyPanelFlag | boolean |  |

- Since:
Documents 5.0h