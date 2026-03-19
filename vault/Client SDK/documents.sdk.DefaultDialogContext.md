---
title: "Class: DefaultDialogContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.DefaultDialogContext.html"
---

### Constructors


****
The DefaultDialogContext provides general information or functions related to a dialog.

- Since:
5.0e


### Members


**getDialogModel**
Returns the Backbone Model of the dialog. Be aware: Not every dialog has a model.

- See:  Backbone.Model


### Methods


**focusButton(identifier)**
focusses a button of a dialog

| Name | Type | Description |
| --- | --- | --- |
| identifier | Object | object to identify the button |


##### Example


```
dialogContext.focusButton({label: "Abbrechen"});
```


**startBusyPanel()**
This function locks this dialog.  For furhter information and examples see [[Client SDK/documents.sdk.DocumentsContext#startBusyPanel|documents.sdk.DocumentsContext#startBusyPanel]]

- Since:
6.0
- See:  startBusyPanel stopBusyPanel


**stopBusyPanel()**
This function unlocks this dialog

- Since:
6.0
- See:  startBusyPanel