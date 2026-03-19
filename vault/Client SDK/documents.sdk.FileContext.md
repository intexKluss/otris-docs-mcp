---
title: "Class: FileContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.FileContext.html"
---

### Constructors


****
The FileContext provides general information about a document, the possibility to execute scripts, control the edit mode

and gives access to various GUI functions like get/set field values, change the color of fields, change the focus to a

specific field etc.

- Since:
5.0a


### Methods


**cancelFileEditMode(){Promise.<any>}**
Aborts the file edit mode. Any changes to the temporary file working copy will be discarded.

This function will operate only if the user is already in edit mode.

This is an asynchronous operation and it immediately returns a `Promise` object to allow a synchronized control flow of subsequent operations.

- Since:
5.0a
- See:  startFileEditMode commitFileEditMode


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | the Promise object for the eventual completion of this asynchronous operation |


##### Example


```
fileContext.cancelFileEditMode().then(function() {
  console.log("file edit cancel completed");
});
console.log("file edit cancel started, please wait");
```


**commitFileEditMode(){Promise.<any>}**
Stops the file edit mode. Any changes to the temporary file working copy will be commited.

This function will operate only if the user is already in edit mode.

This is an asynchronous operation and it immediately returns a `Promise` object to allow a synchronized control flow of subsequent operations.

- Since:
5.0a
- See:  startFileEditMode cancelFileEditMode


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | the Promise object for the eventual completion of this asynchronous operation |


##### Example


```
fileContext.commitFileEditMode().then(function() {
  console.log("file edit commit completed");
});
console.log("file edit commit started, please wait");
```


**createFileQuickviewLink(options){string}**
Creates a quickview link containing the file information

| Name | Type | Description |
| --- | --- | --- |
| options | Object | optional Name Type Description register boolean optional true (default) if set to true the register will be included in the quickview link, in the case a register is opened, false otherwise register boolean optional true (default) if set to true the document will be included in the quickview link, in the case a document is opened, false otherwise | Name | Type | Description | register | boolean | optional true (default) if set to true the register will be included in the quickview link, in the case a register is opened, false otherwise | register | boolean | optional true (default) if set to true the document will be included in the quickview link, in the case a document is opened, false otherwise |
| Name | Type | Description |
| register | boolean | optional true (default) if set to true the register will be included in the quickview link, in the case a register is opened, false otherwise |
| register | boolean | optional true (default) if set to true the document will be included in the quickview link, in the case a document is opened, false otherwise |

- Since:
5.0h


##### Returns:

| Type | Description |
| --- | --- |
| string | quickviewlink the quickviewlink |


**executeScript(scriptName, scriptParams, options){Promise.<any>|string|undefined}**
Executes a server-side file script by its name. Any defined script parameters can be transmitted alike.

The script can either be called *synchronous* (default) or *asynchronous* (via options parameter).

If the script result has a defined `returnType` (defined by context.returnType in the portal script) the

function has **no return value** and the output depends on the returnType.

With the option `dispatch` it is possible to always retrieve the script result even if a returnType is defined.

options.dispatch must be set to **false** (defaults to true) to use the script result as return value.

With `option.async = true` the function always returns a Promise object. If this option is set it is also

possible to input script parameters defined in the Documents Manager via a dialog. Script parameters added via dialog

will override duplicate `scriptParams` keys.

| Name | Type | Description |
| --- | --- | --- |
| scriptName | string | the name of the script |
| scriptParams | Object | optional the input parameters for the script |
| options | Object | optional additional options Name Type Default Description dispatch boolean true optional if false scriptResult is returned even if the script has a returnType async boolean false optional if true the script will be executed asynchronous and will return a promise useScriptParameterDialog boolean false optional if true a script parameter dialog will always be displayed if the script has defined parameter, only works if options.async = true defaultErrorHandling boolean true optional if set to false documents defaultErrorHandling, like opening an error-dialog will be prevented, only works if options.async = true. (Since: 5.0f) dialogTitle string optional the title of the script parameter dialog | Name | Type | Default | Description | dispatch | boolean | true | optional if false scriptResult is returned even if the script has a returnType | async | boolean | false | optional if true the script will be executed asynchronous and will return a promise | useScriptParameterDialog | boolean | false | optional if true a script parameter dialog will always be displayed if the script has defined parameter, only works if options.async = true | defaultErrorHandling | boolean | true | optional if set to false documents defaultErrorHandling, like opening an error-dialog will be prevented, only works if options.async = true. (Since: 5.0f) | dialogTitle | string |  | optional the title of the script parameter dialog |
| Name | Type | Default | Description |
| dispatch | boolean | true | optional if false scriptResult is returned even if the script has a returnType |
| async | boolean | false | optional if true the script will be executed asynchronous and will return a promise |
| useScriptParameterDialog | boolean | false | optional if true a script parameter dialog will always be displayed if the script has defined parameter, only works if options.async = true |
| defaultErrorHandling | boolean | true | optional if set to false documents defaultErrorHandling, like opening an error-dialog will be prevented, only works if options.async = true. (Since: 5.0f) |
| dialogTitle | string |  | optional the title of the script parameter dialog |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | string | undefined | Promise if options.async === true (see example below), undefined if script result contains returnType, script result String otherwise |


##### Examples


```
var scriptResult = documentsContext.executeScript("countryScript", { country : "Austria" }, { async : false });
// scriptResult: "Burgenland, Kärnten, Niederösterreich, Oberösterreich, Salzburg, Steiermark, Tirol, Vorarlberg, Wien"
```


```
var promise = documentsContext.getFileContext().executeScript("countryScript", { country : "Austria" }, { async : true });
promise.then(function(value) {
	console.log(value); // "Burgenland, Kärnten, Niederösterreich, Oberösterreich, Salzburg, Steiermark, Tirol, Vorarlberg, Wien"
});
```


```
var scriptResult = documentsContext.executeScript("aScriptWithReturnType", {param: 'value1'}, { dispatch : false });
// scriptResult is given even if the script has a returnType because dispatch is set to false
```


```
---example script---
var capitals = { "Germany" : "Berlin", "Austria" : "Vienna", ... };
return JSON.stringify(capitals);
---example script---

// if options.async === false, the server always returns a string no matter what the original format in the script was. Example to transfer and receive a JSON Object:
var jsonString = documentsContext.getFileContext().executeScript("exampleScript", { }, { async : false });
var capitals = JSON.parse(jsonString);
// capitals: { "Germany" : "Berlin", "Austria" : "Vienna", ... }
```


**getArchiveFileVersion(){string}**
Return the archive file version.

- Since:
DOCUMENTS 6.0.1


##### Returns:

| Type | Description |
| --- | --- |
| string | archive version of the file |


**getDocumentId(){string}**
Returns the id of the current document.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The id of the current document |


**getDocumentTitle(){string}**
Returns the title of the current document.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The title of the current document |


**getFileField$El(fieldName){JQuery}**
Returns the jQuery object of a file field's input field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | the jQuery object of the input field |


**getFileFieldEl(fieldName){Element}**
Returns the DOM element of a file field's input field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| Element | the DOM element of the input field |


**getFileFieldElId(fieldName){string}**
Returns the DOM element id of a file field's input field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| string | the DOM element id of the input field |


**getFileFieldId(fieldName){string}**
Returns the id of a file field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | the id of the field |


**getFileFieldLabel$El(fieldName){JQuery}**
Returns the jQuery object of a file field's label by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | the jQuery object of the label |


**getFileFieldNumberValue(fieldName, decimalSeparator, groupingSeparator, options){number}**
Returns the current value of a file field as a number by its name.

If, for any reason, the field is currently not visible, the field value will be retrieved from the file instance on the server. This default fallback behaviour can be disabled by the `serverMode` option.

If any of the optional `decimalSeparator` or `groupingSeparator` parameters is not set, this function will automatically use the default value of the current user locale configured in the Documents Manager.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the technical file field name |
| decimalSeparator | string | optional the decimal separator character |
| groupingSeparator | string | optional the grouping separator character |
| options | Object | optional Name Type Description serverMode boolean optional if true (default) and the field is currently not visible, gets the field value from the server | Name | Type | Description | serverMode | boolean | optional if true (default) and the field is currently not visible, gets the field value from the server |
| Name | Type | Description |
| serverMode | boolean | optional if true (default) and the field is currently not visible, gets the field value from the server |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| number | the value of the file field as number |


##### Example


```
documentsContext.getFileContext().getFileFieldNumberValue("erpNetAmount", ".", ",");
```


**getFileFieldOptions(fieldName){Object}**
Gets all available options of a select menu or a double list.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the file field name |

- Since:
5.0c


##### Returns:

| Type | Description |
| --- | --- |
| Object | An object with the following structure: {"key1":"value1", "key2":"value2",...} |


##### Example


```
documents.sdk.exitRegistry.registerFileFieldExitCallback("ftRecord", "hrRemarks", function(documentsContext, options) {
	var selectOptions = documentsContext.getFileContext().getFileFieldOptions("hrType"),
		keys = Object.keys(selectOptions);
		values = Object.values(selectOptions);
});
```


**getFileFieldValue(fieldName, options){string|Array.<string>}**
Returns the current value of a file field by its name.

If, for any reason, the field is currently not visible, the field value will be retrieved from the file instance on the server. This default fallback behaviour can be disabled by the `serverMode` option.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the technical file field name |
| options | Object | optional Name Type Description serverMode boolean optional if true (default) and the field is currently not visible, gets the field value from the server | Name | Type | Description | serverMode | boolean | optional if true (default) and the field is currently not visible, gets the field value from the server |
| Name | Type | Description |
| serverMode | boolean | optional if true (default) and the field is currently not visible, gets the field value from the server |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | Array.<string> | the value of the file field, array if the field type is a multi select field like the double list |


**getFileFieldValues(fieldNames, options){Object}**
Gets the values for an array of file fields by their names.

| Name | Type | Description |
| --- | --- | --- |
| fieldNames | Array.<string> | the file field names |
| options | Object | optional Name Type Description serverMode boolean optional get the field value from the server if the field is not visible, default true | Name | Type | Description | serverMode | boolean | optional get the field value from the server if the field is not visible, default true |
| Name | Type | Description |
| serverMode | boolean | optional get the field value from the server if the field is not visible, default true |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| Object | the current values of the file fields |


**getFileFormModel(){documents.sdk.FileFormModel}**
Returns the current file form model.

To modify the current file form *before* being displayed, it is recommended to use this function

combined with (while not limited to) the exit event `File.afterSetModelData`.

- Since:
5.0d
- See:  exitRegistry.registerFileExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.FileFormModel | the file form model documents.sdk.FileFormModel |


**getFileId(){string}**
Returns the id of the current file.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The id of the current file |


**getFileProperty(key){string}**
Returns the file property for the given key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the property |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | the file property |


**getFileRegisterProperty(key){string}**
Returns the file register property for the given key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the property |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | the file register property |


**getFileTask(){string}**
Returns the current file task.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The current file task |


**getFileTitle(){string}**
Returns the title of the current file.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The title of the current file |


**getFileTypeName(){string}**
Returns the file type name of the current file.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The file type name of the current file |


**getRegisterId(){string}**
Returns the id of the current register.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The id of the current register |


**getRegisterInfo(){Object}**
Returns a variation of identifier-information of the current register. (technical Name, registerId, label, type)

- Since:
5.0g-hf2


##### Returns:

| Type | Description |
| --- | --- |
| Object | A variation of identifier-information of the current register. |


**getRegisterName(){string}**
Returns the technical name of the current register.

- Since:
5.0g-hf2


##### Returns:

| Type | Description |
| --- | --- |
| string | The technical name of the current register. |


**getRegisterTitle(){string}**
Returns the title of the current register.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The title of the current register |


**getRegisterType(){string}**
Returns the type of the current register.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | The type of the current register |


**getScrollPositionLeft(){number}**
Returns the current horizontal scroll position from the left.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| number | the current horizontal scroll position |


**getScrollPositionTop(){number}**
Returns the current vertical scroll position from the top.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| number | the current vertical scroll position |


**isArchiveFile(){boolean}**
Returns whether a file is an archive file or not.

- Since:
DOCUMENTS 6.0.1


##### Returns:

| Type | Description |
| --- | --- |
| boolean | file is archive file |


**isFileEditMode(){boolean}**
Returns if the file is currently in edit mode or not.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true, if the file is in edit mode, false otherwise |


**isFileFieldVisible(fieldName){boolean}**
Checks if a file field is currently displayed or not.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the field is visible, false otherwise |


**openDocument(registerId, documentId, options)**
Opens a document.

| Name | Type | Description |
| --- | --- | --- |
| registerId | string | the id of the register the document is in |
| documentId | string | the id of the document |
| options | object | optional additional options Name Type Description page number optional the page the document should be opened at, currently only works for pdf.js | Name | Type | Description | page | number | optional the page the document should be opened at, currently only works for pdf.js |
| Name | Type | Description |
| page | number | optional the page the document should be opened at, currently only works for pdf.js |

- Since:
6.1.0


**openRegister(registerId)**
Opens a register.

Static register ids:

- FileCover
- FileStatus
- FileMonitor

| Name | Type | Description |
| --- | --- | --- |
| registerId | string | the id of the register to open |

- Since:
6.2.0


**sendAsEmail()**
Opens the dialog to send the current file as an email. This function can only be used if not in edit mode.

- Since:
6.0.1


**setFileFieldBgColor(fieldName, color)**
Sets the background-color of a file field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0a


##### Example


```
documentsContext.getFileContext().setFileFieldBgColor("erpInvoiceNumber", "#2F4F4F")
```


**setFileFieldBorderColor(fieldName, color)**
Sets the border-color of a file field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0a


##### Example


```
documentsContext.getFileContext().setFileFieldBorderColor("erpInvoiceNumber", "#2F4F4F")
```


**setFileFieldColor(fieldName, color)**
Sets the text-color of a file field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0a


##### Example


```
documentsContext.getFileContext().setFileFieldColor("erpInvoiceNumber", "#2F4F4F")
```


**setFileFieldFocus(fieldName)**
Sets the focus to a file field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0a


**setFileFieldLabelColor(fieldName, color)**
Sets the text-color of a file field label by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0a


##### Example


```
documentsContext.getFileContext().setFileFieldLabelColor("erpInvoiceNumber", "#2F4F4F")
```


**setFileFieldOptions(fieldName, values, options)**
Sets the options for a select menu or the doublelist. This method does not work if the file is not in edit mode.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the select/doublelist field |
| values | string | Array.<string> | Object | the values for the select/doublelist field |
| options | Object | keepSelected === true: the previously selected value will be kept even if not inside the value String (default), false: the previously selected value will be removed except when inside the value String |

- Since:
5.0a (select menu) / 5.0c (doublelist)


##### Example


```
Possible input for the value parameter
All formats work for both the select menu and the doublelist.
"value,value,..."
"key:value,key:value,..."
"key;locale:value;locale:value,key;locale:value;locale:value,..."
["value1","value2",...]
["key1;value", "key2;value", ...]
["key1;locale1:value;locale2:value", "key2;locale1:value;locale2:value", ...]
{"key1":"value1", "key2":"value2",...}
group and selected are doublelist only parameter, they will be skipped if used for a select menu
{"key1":{"group":"group","selected":true/false,"locale1":"value","locale2":"value"}, "key2":{"group":"group","selected":true/false,"locale1":"value","locale2":"value"}, ...}
```


**setFileFieldReference(fieldName, referenceFileId, options)**
Sets a file reference.

Removing the file reference can be achieved by passing `null` or `""` in referenceFileId.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| referenceFileId | string | the id of the reference file, null or "" to reset |
| options | Object | optional Name Type Description serverMode boolean optional set the reference field value on the server if the field is not visible, default true | Name | Type | Description | serverMode | boolean | optional set the reference field value on the server if the field is not visible, default true |
| Name | Type | Description |
| serverMode | boolean | optional set the reference field value on the server if the field is not visible, default true |

- Since:
5.0b


**setFileFieldValue(fieldName, value, options){string|Array.<string>}**
Sets the value of a file field to the specified value by its name.

Caution: This function will work correctly only if the current file is already in edit mode.

If, for any reason, the field is currently not visible, the field value will be set to the file instance on the server. This default fallback behaviour can be disabled by the `serverMode` option.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the technical file field name |
| value | string | Array.<string> | optional the new value of the file field, can be an array if used with a multi-value field type |
| options | Object | optional Name Type Description serverMode boolean optional if true (default) and the field is currently not visible, sets the field value to the server | Name | Type | Description | serverMode | boolean | optional if true (default) and the field is currently not visible, sets the field value to the server |
| Name | Type | Description |
| serverMode | boolean | optional if true (default) and the field is currently not visible, sets the field value to the server |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | Array.<string> | the old value of the file field, array if the field type is a a multi select field like the double list |


**setFileFieldValues(fieldValues, options)**
Sets the value of multiple file fields to the specified value by its name.

Caution: This function will work only if the user is already in edit mode.

| Name | Type | Description |
| --- | --- | --- |
| fieldValues | Object |  |
| options | Object | optional Name Type Description serverMode boolean optional set the field value on the server if the field is not visible, default true | Name | Type | Description | serverMode | boolean | optional set the field value on the server if the field is not visible, default true |
| Name | Type | Description |
| serverMode | boolean | optional set the field value on the server if the field is not visible, default true |

- Since:
5.0a


##### Example


```
documentsContext.getFileContext().setFileFieldValues({"hrFirstName":"value1","hrLastName":"value2"})
```


**setFileInfoIcon(icoDef)**
Sets file info icon.

Note: Only icon definition syntax is supported (eg: "mdi:mdi-folder")

| Name | Type | Description |
| --- | --- | --- |
| icoDef | string | icon definition (eg: "mdi:mdi-rocket") |

- Since:
6.1.1


**setScrollPositionLeft(value)**
Sets the horizontal scroll position from the left.

| Name | Type | Description |
| --- | --- | --- |
| value | number | the new horizontal scroll position |

- Since:
5.0a


**setScrollPositionTop(value)**
Sets the vertical scroll position from the top.

| Name | Type | Description |
| --- | --- | --- |
| value | number | the new vertical scroll position |

- Since:
5.0a


**startFileEditMode(){Promise.<any>}**
Starts the file edit mode. A temporary file working copy will be created in the background automatically.

This function will operate only if the user is not already in edit mode.

This is an asynchronous operation and it immediately returns a `Promise` object to allow a synchronized control flow of subsequent operations.

- Since:
5.0a
- See:  cancelFileEditMode commitFileEditMode


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | the Promise object for the eventual completion of this asynchronous operation |


##### Example


```
fileContext.startFileEditMode().then(function() {
  console.log("file edit start completed");
});
console.log("file edit start started, please wait");
```


**toggleMonitorView(action, options)**
Opens or closes the file monitor view.

| Name | Type | Description |
| --- | --- | --- |
| action | string | action the action that should be performed, permitted values: open, close |
| options | Object | optional Name Type Description animate boolean optional true (default) if the open or close action should be animated, false otherwise | Name | Type | Description | animate | boolean | optional true (default) if the open or close action should be animated, false otherwise |
| Name | Type | Description |
| animate | boolean | optional true (default) if the open or close action should be animated, false otherwise |

- Since:
5.0d


**toggleRegisterbarView(action, options)**
Opens or closes the file registerbar view.

| Name | Type | Description |
| --- | --- | --- |
| action | string | action the action that should be performed, permitted values: open, close |
| options | Object | optional Name Type Description animate boolean optional true (default) if the open or close action should be animated, false otherwise | Name | Type | Description | animate | boolean | optional true (default) if the open or close action should be animated, false otherwise |
| Name | Type | Description |
| animate | boolean | optional true (default) if the open or close action should be animated, false otherwise |

- Since:
5.0d


**updateFile(options){Promise.<any>}**
Updates the current file, meaning that the entire file will be reloaded.

If in edit mode, any changes to the file will be submitted to the temporary file working copy in addition.

This is an asynchronous operation and it immediately returns a `Promise` object to allow a synchronized control flow of subsequent operations.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | optional the options |

- Since:
5.0e


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | the Promise object for the eventual completion of this asynchronous operation |


##### Example


```
fileContext.updateFile().then(function() {
  console.log("file update completed");
});
console.log("file update started, please wait");
```