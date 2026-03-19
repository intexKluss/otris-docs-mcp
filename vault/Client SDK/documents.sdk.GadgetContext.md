---
title: "Class: GadgetContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.GadgetContext.html"
---

### Constructors


****
The GadgetContext provides gadget related functions for the client side scripting

- Since:
5.0c


### Methods


**disableContainerButton(buttonId, allBtns)**
Disable container button(s)

| Name | Type | Description |
| --- | --- | --- |
| buttonId | string | optional id of the container button |
| allBtns | string | optional disable multiple buttons (possible values: top, bottom, all) |

- Since:
5.0f


**enableContainerButton(buttonId, allBtns)**
Enable container button(s)

| Name | Type | Description |
| --- | --- | --- |
| buttonId | string | optional id of the container button |
| allBtns | string | optional enable multiple buttons (possible values: top, bottom, all) |

- Since:
5.0f


**getClientObject(){undefined|external:ChartJs|external:DobyGrid|external:FullcalendarJQueryElement|documents.sdk.gadget.GadgetForm|documents.sdk.gadget.GadgetTree}**
Returns the gadget client object **if available**.

Currently the following Gadgets have a client object:

- FullCalendar: external:FullcalendarJQueryElement (jQuery element) is returned
- Chart: The external:ChartJs is returned,
- Form: documents.sdk.gadget.GadgetForm is returned,
- Tree: documents.sdk.gadget.GadgetTree is returned,
- ScriptList: The external:DobyGrid grid object is returned


##### Returns:

| Type | Description |
| --- | --- |
| undefined | external:ChartJs | external:DobyGrid | external:FullcalendarJQueryElement | documents.sdk.gadget.GadgetForm | documents.sdk.gadget.GadgetTree | The client object |


##### Examples


```
// Get the GadgetContext
var gadgetContext = documentsContext.getGadgetContext();
// Get the FullCalendar client object
var $fullCalendar = gadgetContext.getClientObject();
```


```
var gTree = documentsContext.getGadgetContext().getClientObject();
console.log("selectedIds", gTree.getSelectedIds());
```


**getContainerElement()**
Returns the dom element of the gadget container

- Since:
5.0i


**getContextData(){any}**
Get the contextData added in the gadget portal script with the function `setContextData`


##### Returns:

| Type | Description |
| --- | --- |
| any | contextData - The context data |


**getGadgetId()**
Returns the gadgetId if defined.

- Since:
5.0e


**hideContainerButton(buttonId, allBtns)**
Hide container button(s)

| Name | Type | Description |
| --- | --- | --- |
| buttonId | string | optional id of the container button |
| allBtns | string | optional enable multiple buttons (possible values: top, bottom, all) |

- Since:
5.0i HF8


**saveGadgetGentable(){Promise.<any>}**
Stores the gadget gentable data asynchronously. Returns a `Promise`.

- Since:
5.0e


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | the Promise object for the eventual completion of this asynchronous operation |


**showContainerButton(buttonId, allBtns)**
Show container button(s)

| Name | Type | Description |
| --- | --- | --- |
| buttonId | string | optional id of the container button |
| allBtns | string | optional enable multiple buttons (possible values: top, bottom, all) |

- Since:
5.0i HF8