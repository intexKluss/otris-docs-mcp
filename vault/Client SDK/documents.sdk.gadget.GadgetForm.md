---
title: "Class: GadgetForm"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.gadget.GadgetForm.html"
---

### Constructors


****
The gadget client object for gadget forms.

Provides gadget form related functions for the client side scripting

- Since:
5.0d


### Methods


**closeHorizontalRuler(rulerName)**
Close a horizontal ruler.

| Name | Type | Description |
| --- | --- | --- |
| rulerName | string | name of the ruler field |

- Since:
5.0f


**createFormValidatorResult(result, errorMessage, options){validationResult}**
Creates a ValidationResult object to be returned by a custom

form validator

| Name | Type | Description |
| --- | --- | --- |
| result | boolean | if the validation has failed or succeeded |
| errorMessage | string | optional displayed if the validation failed |
| options | object | optional option object to add additional information |


##### Returns:

| Type | Description |
| --- | --- |
| validationResult | object containing result of the validation |


**getFormData(){Object}**
Returns the current data for every element of the form


##### Returns:

| Type | Description |
| --- | --- |
| Object | form data |


##### Example


```
//the form object in this example has 3 textFields with the following names: nameField, firstNameField, phoneNumberField
form.onGadgetLoad(function (){
	var formData = documentsContext.getGadgetContext().getClientObject().getFormData();
	//formData -> {nameField: ["Musterman"], firstNameField: ["Max"], phoneNumberField: ["0123456789"]}
});
```


**openHorizontalRuler(rulerName)**
Open a horizontal ruler.

| Name | Type | Description |
| --- | --- | --- |
| rulerName | string | name of the ruler field |

- Since:
5.0f


**setFieldValue(fieldName, value)**
Sets the value of a field

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | name of the field |
| value | any | value to be set |

- Since:
6.1.0


**submitForm(targetGadgetConfig, options)**
Submit the form data to the defined gadget.

The following attributes, `gadgetId`, `gadgetScript` and `gadgetAction`,

are always added from the *current gadgetConfig*, if they were missing in the given gadgetConfig parameter.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| targetGadgetConfig | object | {} | optional gadgetConfig (e.g. {gadgetAction: 'processForm'}) |
| options | object |  | optional custom options Name Type Default Description validateForm boolean true optional validate the form before submit showBusyPanel boolean false optional show a busy panel on the container after submitting the form async boolean false optional the submit process will be executed asynchronous (in favour of long form validations) | Name | Type | Default | Description | validateForm | boolean | true | optional validate the form before submit | showBusyPanel | boolean | false | optional show a busy panel on the container after submitting the form | async | boolean | false | optional the submit process will be executed asynchronous (in favour of long form validations) |
| Name | Type | Default | Description |
| validateForm | boolean | true | optional validate the form before submit |
| showBusyPanel | boolean | false | optional show a busy panel on the container after submitting the form |
| async | boolean | false | optional the submit process will be executed asynchronous (in favour of long form validations) |


**toggleHorizontalRuler(rulerName)**
Toggle the state of a horizontal ruler.

| Name | Type | Description |
| --- | --- | --- |
| rulerName | string | name of the ruler field |

- Since:
5.0f


**validateForm(validationOptions){boolean|Promise.<boolean>}**
Validate form based on default and custom set validators

| Name | Type | Description |
| --- | --- | --- |
| validationOptions | object | optional Name Type Default Description async boolean false optional | Name | Type | Default | Description | async | boolean | false | optional |
| Name | Type | Default | Description |
| async | boolean | false | optional |


##### Returns:

| Type | Description |
| --- | --- |
| boolean | Promise.<boolean> | true if the form is valid and false if the form is invalid |