---
title: "Class: ScriptParameterFormModel"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.ScriptParameterFormModel.html"
---

### Constructors


****
The ScriptParameterFormModel is the representing model for script parameter forms. It provides various methods to inspect and manipulate the form model data.

Every ScriptParameterFormModel is a [Backbone.Model](http://backbonejs.org/#Model).

It contains a collection of [[Client SDK/documents.sdk.ScriptFieldModel|ScriptFieldModels]] representing the form fields.

- Since:
5.0d
- See:  Backbone.Model ScriptFieldModel


### Extends

- documents.sdk.FormModel


### Methods


**inherited getFieldById(id){FieldModel}**
Searches for and returns a field model by its id.

| Name | Type | Description |
| --- | --- | --- |
| id | string | the id of the field model to be searched for |


##### Returns:

| Type | Description |
| --- | --- |
| FieldModel | the field model if it could be found, null otherwise |


**inherited getFieldByName(name){FieldModel}**
Searches for and returns a field model by its name.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the field model to be searched for |


##### Returns:

| Type | Description |
| --- | --- |
| FieldModel | the field model if it could be found, null otherwise documents.sdk.FileFieldModel |


**inherited getFields()**
Returns a [Backbone.Collection](http://backbonejs.org/#Collection) of all field models containing this form model.

- See:  Backbone.Collection


##### Returns:

[Backbone.Collection](http://backbonejs.org/#Collection) the collection of all field models






##### Examples


```
//You can use the different methods from Backbone.Collection on the return value. Following are some examples for the most common ones.
// forEch method: Iterates over the fields and calls a function with each field as a param
form.getFields().forEach(function(field){
  console.log(field.toJSON());
});
```


```
// filter method: Looks through each field and tests each with a conditioning function, returns an array of fields where the function returns true
// this example returns an array of all the date-fields
form.getFields().filter(function(field){
return field.getType() == documents.sdk.FieldModel.Types.DATE;
});
```


```
// find method: Looks through the fields and returns the first field where the function returns true
// this example returns an array of all the date-fields
form.getFields().find(function(field){
  return field.getName === "Customer";
});
```


```
// map method: Iterates over each field and collects the return value of the inner function as an Array.
form.getFields().map(function(field){
  return field.getName();
});
```


```
// countBy method: Groups the fields into different categories and returns the amount of entries within the categories.
form.getFields().countBy(function(field){
  if(field.getValue() >= 0){
    return 'positivSaldo';
  }
  return 'negativSaldo';
});
```


**inherited getFieldsById(ids){Array.<FieldModel>}**
Searches for and returns an array of all field models by its ids.

| Name | Type | Description |
| --- | --- | --- |
| ids | Array.<string> | the array of all field model ids to be searched for |


##### Returns:

| Type | Description |
| --- | --- |
| Array.<FieldModel> | the array of all fields models that could be found |


**inherited getFieldsByName(names){Array.<FieldModel>}**
Searches for and returns an array of all field models by its names.

| Name | Type | Description |
| --- | --- | --- |
| names | Array.<string> | the array of all field model names to be searched for |


##### Returns:

| Type | Description |
| --- | --- |
| Array.<FieldModel> | the array of all fields models that could be found |


**getScriptName(){string}**
Returns the name of the associated script.


##### Returns:

| Type | Description |
| --- | --- |
| string | the name of the associated script |


**inherited setFieldValuesById(object)**
Sets the values of multiple fields. A key of the parameter-object defines the field-id and the corresponding value the new value.

| Name | Type | Description |
| --- | --- | --- |
| object | Object | the objects keys is defines the fields and the values define the values. |


**inherited setFieldValuesByName(object)**
Sets the values of multiple fields. A key of the parameter-object defines the field-name and the corresponding value the new value.

| Name | Type | Description |
| --- | --- | --- |
| object | Object | the objects keys is defines the fields and the values define the values. |


##### Example


```
//usage of setFieldValuesByName on fileForm:
documents.sdk.exitRegistry.registerFileFieldExitCallback("crmAccount", "crmCompany", function(documentsContext, options) {
	var fileForm = options.fileForm;
	fileForm.setFieldValuesByName({
		crmCompany: "otris software AG",
		crmStreet: "Königswall 21",
		crmCity: "Dortmund"
		crmCountry: "Germany",
		crmRegion: "NRW"
	});
});
```