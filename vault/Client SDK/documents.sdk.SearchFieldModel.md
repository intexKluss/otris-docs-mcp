---
title: "Class: SearchFieldModel"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.SearchFieldModel.html"
---

### Constructors


****
The SearchFieldModel represents a search field in a search form and provides various methods to inspect and manipulate the field model data.

Every SearchFieldModel is a [Backbone.Model](http://backbonejs.org/#Model).

- Since:
5.0d
- See:  Backbone.Model


### Extends

- documents.sdk.FieldModel


### Methods


**inherited getBgColor(){string}**
Returns the background color of the field.


##### Returns:

| Type | Description |
| --- | --- |
| string | the field background color |


**inherited getBorderColor(){string}**
Returns the border color of the field.


##### Returns:

| Type | Description |
| --- | --- |
| string | the field border color |


**inherited getColor(){string}**
Returns the font color of the field.


##### Returns:

| Type | Description |
| --- | --- |
| string | the field font color |


**inherited getEnumValues(){Array.<Object>}**
Returns the optional enum values of the field.


##### Returns:

| Type | Description |
| --- | --- |
| Array.<Object> | the field enum values |


##### Example


```
Return format:
[{"label" : "label1", "selected": false, "value": "value1"}, {"label" : "label2", "selected": true, "value": "value2"}, ...]
```


**inherited getId(){string}**
Returns the id of the field.


##### Returns:

| Type | Description |
| --- | --- |
| string | the field id |


**inherited getLabel(){string}**
Returns the label of the field.


##### Returns:

| Type | Description |
| --- | --- |
| string | the field label |


**inherited getLabelColor(){string}**
Returns the font color of the fields label.


##### Returns:

| Type | Description |
| --- | --- |
| string | the font color of the fields label |


**inherited getName(){string}**
Returns the technical name of the field.


##### Returns:

| Type | Description |
| --- | --- |
| string | the technical field name |


**inherited getTooltip(){string}**
Returns the tooltip of the field.


##### Returns:

| Type | Description |
| --- | --- |
| string | the field tooltip |


**inherited getType(){string}**
Returns the type of the field.

- See:
Types


##### Returns:

| Type | Description |
| --- | --- |
| string | the field type |


**inherited getValue(){string|Array.<string>|boolean}**
Returns the value(s) of the field.

- See:
getEnumValues


##### Returns:

| Type | Description |
| --- | --- |
| string | Array.<string> | boolean | the field value |


**inherited isGuiReadonly(){boolean}**
Returns if the field is gui readonly or not. Gui-Readonly is a client-side only state and does not effect the server-side readonly handling. This method is equivalent to [[Client SDK/documents.sdk.FieldModel#isGuiReadonly|isGuiReadonly]]. To check if a method is server-side reanonly use [[Client SDK/documents.sdk.FieldModel#isServerReadonly|isServerReadonly]].

- See:
isReadonly


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the field is gui readonly, false otherwise |


**inherited isHiddenField(){boolean}**
Returns if the field is hidden or not. Hidden fields are not visible on the file-view-

- Since:
5.0h


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the field is hidden, false otherwise |


**inherited isMandatory(){boolean}**
Returns if the field is mandatory or not.


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the field is mandatory, false otherwise |


**inherited isReadonly(){boolean}**
Returns if the field is gui readonly or not. Gui-Readonly is a client-side only state and does not effect the server-side readonly handling. This method is equivalent to [[Client SDK/documents.sdk.FieldModel#isGuiReadonly|isGuiReadonly]]. To check if a method is server-side reanonly use [[Client SDK/documents.sdk.FieldModel#isServerReadonly|isServerReadonly]].

- See:
isServerReadonly isGuiReadonly setGuiReadonly


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the field is readonly, false otherwise |


**inherited isSameLine(){boolean}**
Returns if the field is in the same line as the preceding field or not.


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the field is in the same line as the preceding field, false otherwise |


**inherited isServerReadonly(){boolean}**
Returns if the field is set readonly on server-side. It is not possible to change this state on the client.

- Since:
5.0e HF2


##### Returns:

| Type | Description |
| --- | --- |
| boolean | readonly @see isGuiReadonly |


**inherited setAutoComplete(options)**
Adds autocomplete to a field. Only works for STRING fields.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | the autocomplete config Name Type Description scriptName string the name of the script minQueryChars number optional amount of letters after which autocomplete starts queryDelay number optional time interval, after which autocomplete starts maxResults number optional max amount of autocomplete entries autoFocusResult boolean optional focus on the first autocomplete entry scriptParams Object optional additional parameter for the script | Name | Type | Description | scriptName | string | the name of the script | minQueryChars | number | optional amount of letters after which autocomplete starts | queryDelay | number | optional time interval, after which autocomplete starts | maxResults | number | optional max amount of autocomplete entries | autoFocusResult | boolean | optional focus on the first autocomplete entry | scriptParams | Object | optional additional parameter for the script |
| Name | Type | Description |
| scriptName | string | the name of the script |
| minQueryChars | number | optional amount of letters after which autocomplete starts |
| queryDelay | number | optional time interval, after which autocomplete starts |
| maxResults | number | optional max amount of autocomplete entries |
| autoFocusResult | boolean | optional focus on the first autocomplete entry |
| scriptParams | Object | optional additional parameter for the script |


##### Example


```
documents.sdk.exitRegistry.registerSearchExitCallback("ExtendedSearch.afterSetModelData", function(documentsContext, options) {
	var fields = options.searchForm.getSearchFields();

	var field = fields.get("crmName");

	field.setAutoComplete({
		scriptName: "auto",
		minQueryChars: 2,
		queryDelay: 0.5,
		maxResults: 25,
		autoFocusResult: false,
		scriptParams: {
			param1: "param1",
			param2: "param2"
		}
	})
});
```


**inherited setBgColor(color)**
Sets the background color of the field.

| Name | Type | Description |
| --- | --- | --- |
| color | string | the field background color. All color definitions available in CSS3 are supported as parameters. |


##### Example


```
//the following method calls are showing different ways to change the background color to red:
field.setBgColor("red");
field.setBgColor('#FF0000');
field.setBgColor('rgb(255,0,0)');
field.setBgColor('hsl(0, 100%, 50%)');
field.setBgColor('cmyk(0%, 100%, 100%, 0%)');
```


**inherited setBorderColor(color)**
Sets the border color of the field.

| Name | Type | Description |
| --- | --- | --- |
| color | string | the field border color. All color definitions available in CSS3 are supported as parameters. |


##### Example


```
//the following method calls are showing different ways to change the border color to red:
field.setBorderColor("red");
field.setBorderColor('#FF0000');
field.setBorderColor('rgb(255,0,0)');
field.setBorderColor('hsl(0, 100%, 50%)');
field.setBorderColor('cmyk(0%, 100%, 100%, 0%)');
```


**inherited setColor(color)**
Sets the font color of the field.

| Name | Type | Description |
| --- | --- | --- |
| color | string | the field font color. All color definitions available in CSS3 are supported as parameters. |


##### Example


```
//the following method calls are showing different ways to change the font color to red:
field.setColor("red");
field.setColor('#FF0000');
field.setColor('rgb(255,0,0)');
field.setColor('hsl(0, 100%, 50%)');
field.setColor('cmyk(0%, 100%, 100%, 0%)');
```


**inherited setEnumValues(enumValues, options)**
Sets the optional enum values of the field. Supported input-formats can be viewed in the examples.

| Name | Type | Description |
| --- | --- | --- |
| enumValues | Object | Array.<Object> | string | Array.<string> | the field enum values |
| options | Object | the options passed Name Type Description keepSelected boolean optional true if the current selected entry should be set as the next selected entry. If it is not included within the enumValues it will be added. Default is false. addEmptyEntry boolean optional true if an empty entry should be added to the enumValues. Default is false | Name | Type | Description | keepSelected | boolean | optional true if the current selected entry should be set as the next selected entry. If it is not included within the enumValues it will be added. Default is false. | addEmptyEntry | boolean | optional true if an empty entry should be added to the enumValues. Default is false |
| Name | Type | Description |
| keepSelected | boolean | optional true if the current selected entry should be set as the next selected entry. If it is not included within the enumValues it will be added. Default is false. |
| addEmptyEntry | boolean | optional true if an empty entry should be added to the enumValues. Default is false |


##### Examples


```
//  1. default enum value format
[{"label" : "label1", "selected" : false, "value" : "value1"}, {"label" : "label2", "selected" : true, "value" : "value2"}, ...]
```


```
//  2. value-only enum value formats
//    a. String
"value1,value2,..."
//    b. String[]
["value1", "value2", ...]
```


```
//  3. key-value enum value formats
//    a. String
"value1:label1,value2:label2,..."
//    b. Object
{"value1" : "label1", "value2" : "label2", ...}
```


```
//  4. localized enum value formats
//    a. String
"value1;locale1:label1;locale2:label2,value2;locale1:label1;locale2:label2,..."
//    b. String[]
["value1;locale1:label1;locale2:label2", "value2;locale1:label1;locale2:label2", ...]
//    c. Object
{"value1" : {"locale1" : "label1", "locale2" : "label2"}, "value2" : {"locale1" : "label1", "locale2" : "label2"}, ...}
```


**inherited setExit(options)**
Sets an exit configuration of the field.

A trigger type of the exit must always be set. Valid types are `focusin`, `focusout`, `change` and `button`.

If an exit configuration is set, a corresponding field exit callback must be registered in the [[Client SDK/documents.sdk.exitRegistry|exitRegistry]].

| Name | Type | Description |
| --- | --- | --- |
| options | Object | the exit configuration options Name Type Description type string the exit trigger type image string optional the exit button image, if the type equals button tooltip string optional the exit button image tooltip, if the type equals button | Name | Type | Description | type | string | the exit trigger type | image | string | optional the exit button image, if the type equals button | tooltip | string | optional the exit button image tooltip, if the type equals button |
| Name | Type | Description |
| type | string | the exit trigger type |
| image | string | optional the exit button image, if the type equals button |
| tooltip | string | optional the exit button image tooltip, if the type equals button |

- See:  exitRegistry.registerFileFieldExitCallback exitRegistry.registerSearchFieldExitCallback exitRegistry.registerScriptParameterFieldExitCallback


##### Examples


```
field.setExit({ type: "focusout" });
```


```
field.setExit({
	type: "button",
	tooltip: "search for contact",
	image: "entypo:flashlight"
});
```


**inherited setGuiReadonly(guiReadonly)**
Sets the field to gui readonly.Gui-Readonly is a client-side only state and does not effect the server-side readonly handling.

| Name | Type | Description |
| --- | --- | --- |
| guiReadonly | boolean | true for gui readonly, false otherwise |

- See:
isGuiReadonly


**inherited setHiddenField(hidden)**
Sets the field to hidden or visible. Can be used to hide a field. Beware: The state is only used on client-side, therefore a change of registers and a few other actions set this state back to its original value.

| Name | Type | Description |
| --- | --- | --- |
| hidden | boolean | true for a hidden field, false otherwise |

- Since:
5.0h
- See:
isHiddenField


**inherited setLabel(label)**
Sets the label of the field.

| Name | Type | Description |
| --- | --- | --- |
| label | string | the field label |


**inherited setLabelColor(color)**
Sets the font color of the fields label.

| Name | Type | Description |
| --- | --- | --- |
| color | string | the font color of the fields label. All color definitions available in CSS3 are supported as parameters. |


##### Example


```
//the following method calls are showing different ways to change the labels font color to red:
field.setLabelColor("red");
field.setLabelColor('#FF0000');
field.setLabelColor('rgb(255,0,0)');
field.setLabelColor('hsl(0, 100%, 50%)');
field.setLabelColor('cmyk(0%, 100%, 100%, 0%)');
```


**inherited setName(name)**
Sets the technical name of the field.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical field name |


**inherited setReadonly(readonly)**
Sets the field to Gui-readonly. Gui-Readonly is a client-side only state and does not effect the server-side readonly handling. This method is eqaul to [[Client SDK/documents.sdk.FieldModel#setGuiReadonly|setGuiReadonly]].

| Name | Type | Description |
| --- | --- | --- |
| readonly | boolean | true for readonly, false otherwise |

- See:
setGuiReadonly


**inherited setSameLine(sameLine)**
Sets the field to the same line as the preceding field.

| Name | Type | Description |
| --- | --- | --- |
| sameLine | boolean | true for same line as the preceding field, false otherwise |


**inherited setTooltip(tooltip)**
Sets the tooltip of the field.

| Name | Type | Description |
| --- | --- | --- |
| tooltip | string | the field tooltip |


**inherited setType(type)**
Sets the type of the field.

In case of changing a field into a checkbox or a radio-group, the displayed options will be set to a default value. If you want to change them, please use the method [[Client SDK/documents.sdk.FieldModel#setEnumValues|setEnumValues]].

| Name | Type | Description |
| --- | --- | --- |
| type | documents.sdk.FieldModelType | the field type |

- See:
setEnumValues


##### Example


```
// This example changes the field type to date using documents.sdk.FieldModel.Types.
field.setType(documents.sdk.FieldModel.Types.DATE);

//The following code can be used to change the displayed options of radio-groups or checkboxes.
field.setType(documents.sdk.FieldModel.Types.RADIO);
field.setEnumValues(["1:one","2:two"]);
```


**inherited setValue(value, options)**
Sets the value(s) of the field.

Any matching enum values will be updated automatically.

| Name | Type | Description |
| --- | --- | --- |
| value | string | Array.<string> | boolean | the field value |
| options | Object | optional Name Type Description silent boolean optional When true the silent mode is active, no backbone events will be triggered, if the model changes | Name | Type | Description | silent | boolean | optional When true the silent mode is active, no backbone events will be triggered, if the model changes |
| Name | Type | Description |
| silent | boolean | optional When true the silent mode is active, no backbone events will be triggered, if the model changes |

- See:
setEnumValues