---
title: "Class: Element"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.Element.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| type | string | the type of the form field |


### Methods


**addStyleClass(styleClass){otris.gadget.gui.Element}**
Adds a css class to the form field

| Name | Type | Description |
| --- | --- | --- |
| styleClass | string | the style class to be added |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**endHorizontalRuler(endBefore){otris.gadget.gui.Element}**
End a current horizontal ruler group.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| endBefore | boolean | false | optional set to true to end the ruler group before this element |

- Since:
Documents 5.0f


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**getAttribute(name){string}**
Finds and returns the value of a given attribute

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the attribute to look for/ return its value |


##### Returns:

| Type | Description |
| --- | --- |
| string | the value of the given attribute or "" in case the attribute was not found/ empty |


**moveAfter(name){otris.gadget.gui.Element}**
Moves the element after a given element in the form.

| Name | Type | Description |
| --- | --- | --- |
| name | string | name of an existing form element |

- Since:
Documents 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**moveBefore(name){otris.gadget.gui.Element}**
Moves the element before a given element in the form.

| Name | Type | Description |
| --- | --- | --- |
| name | string | name of an existing form element |

- Since:
Documents 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**remove(){otris.gadget.gui.Element}**
Remove the element from the form

- Since:
Documents 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setAttribute(name, value){otris.gadget.gui.Element}**
Replace or set an attribute

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the attribute to replace/ set |
| value | string | the value to set |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setEvent(event, handler){otris.gadget.gui.Element}**
Adds an event handler

| Name | Type | Description |
| --- | --- | --- |
| event | string | name of the event (e.g. change) |
| handler | string | the name of the client function (e.g. myOnchangeFunction) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setInLine(inLine){otris.gadget.gui.Element}**
Sets wether or not the form field should be displayed in one line with the previous form field

| Name | Type | Description |
| --- | --- | --- |
| inLine | boolean | in same line as previous? |

- Default Value:
false


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setLabel(label){otris.gadget.gui.Element}**
Sets the label of the form field

| Name | Type | Description |
| --- | --- | --- |
| label | string | boolean | the new label (if set to false the label-tag will not be generated) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setMandatory(mandatory){otris.gadget.gui.Element}**
Sets wether or not the form field will be required to submit the form

| Name | Type | Description |
| --- | --- | --- |
| mandatory | boolean | is the field mandatory? |

- Default Value:
false


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setReadonly(readonly){otris.gadget.gui.Element}**
Sets wether or not the form field will readonly

For compatibility reasons it is necessary to pass the string `readonly` if you

want to set the element ONLY as readable. Otherwise, the element is also set `disabled`. (since: `DOCUMENTS 5.0f HF2`)

| Name | Type | Description |
| --- | --- | --- |
| readonly | boolean | "readonly" | is the field readonly? |

- Default Value:
false


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setReloadOnChange(options){otris.gadget.gui.Element}**
Sets wether or not the form should reload if the the value of the field changes.

The form ist submitted to the current gadgetAction and the client side validation is disabled.
*Note:* For single-select lists, the delay applies only when the value is selected via keyboard interaction.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | boolean | object | true | optional Name Type Description delay number optional the form is not sent until the value does not change for the given delay of time in milliseconds | Name | Type | Description | delay | number | optional the form is not sent until the value does not change for the given delay of time in milliseconds |
| Name | Type | Description |
| delay | number | optional the form is not sent until the value does not change for the given delay of time in milliseconds |

- Since:
Documents 5.0f
- Default Value:
false


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setStyle(name, value){otris.gadget.gui.Element}**
Set a style attribute of the form field

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the style parameter (e.g. height) |
| value | string | the value of the style parameter (e.g. 100px) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setValidator(validator){otris.gadget.gui.Element}**
Applies a validator to the input element

A [[Documents Drop SDK/global#validatorFunction|validatorFunction]] is used to validate the content of the input element

The form can only be submitted if all validators are successful

| Name | Type | Description |
| --- | --- | --- |
| validator | function | function to validate an input field validatorFunction(field, gadgetForm, options){validationResult} The validator function The field object contains a single field if this validator function is used by otris.gadget.gui.Element#setValidator The field object contains multiple fields if this validator function is used by otris.gadget.gui.Form#setFormValidator Name Type Description field GadgetFormField | object single input field information or object containing mutliple field informations gadgetForm documents.sdk.gadget.GadgetForm reference to the documents.sdk.gadget.GadgetForm options object options Name Type Description documentsContext documents.sdk.DocumentsContext reference to the documents.sdk.DocumentsContext Returns: Type Description validationResult validation result should be generated via documents.sdk.gadget.GadgetForm | Name | Type | Description | field | GadgetFormField | object | single input field information or object containing mutliple field informations | gadgetForm | documents.sdk.gadget.GadgetForm | reference to the documents.sdk.gadget.GadgetForm | options | object | options Name Type Description documentsContext documents.sdk.DocumentsContext reference to the documents.sdk.DocumentsContext | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | reference to the documents.sdk.DocumentsContext | Type | Description | validationResult | validation result should be generated via documents.sdk.gadget.GadgetForm |
| Name | Type | Description |
| field | GadgetFormField | object | single input field information or object containing mutliple field informations |
| gadgetForm | documents.sdk.gadget.GadgetForm | reference to the documents.sdk.gadget.GadgetForm |
| options | object | options Name Type Description documentsContext documents.sdk.DocumentsContext reference to the documents.sdk.DocumentsContext | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | reference to the documents.sdk.DocumentsContext |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | reference to the documents.sdk.DocumentsContext |
| Type | Description |
| validationResult | validation result should be generated via documents.sdk.gadget.GadgetForm |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


##### Example


```
//validates whether the element value is equal to "otris"
element.setValidator(function validateEqualsOtris(field, gadgetForm, options){
     var successful = field.value === "otris";
     return gadgetForm.createFormValidatorResult(successful, "This value has to equal 'otris'");
});
```


**setValue(value){otris.gadget.gui.Element}**
Sets the value of the element dependend on the element type

| Name | Type | Description |
| --- | --- | --- |
| value | string | value of the element |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |


**setWidth(width){otris.gadget.gui.Element}**
Sets the width of the form field

| Name | Type | Description |
| --- | --- | --- |
| width | number | the width (in Pixels) of the form field |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | current instance for chaining methods |