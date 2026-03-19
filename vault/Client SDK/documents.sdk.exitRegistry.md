---
title: "Namespace: exitRegistry"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.exitRegistry.html"
---

### Methods


**staticdocuments.sdk.exitRegistry.getAlternativeCellRenderingCallbacks(callbackName, fieldType, moduleName){Array.<function()>}**
Returns all callback-functions that can be used to set a field cell renderer of a field with the property "alternativeCellRendering".

| Name | Type | Description |
| --- | --- | --- |
| callbackName | string | Identifier of the callback. |
| fieldType | documents.sdk.FileFieldTypes | Type of the field |
| moduleName | string | name of the module |

- Since:
6.1.0


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getAlternativeRenderingCallbacks(fieldName, fieldType, moduleName){Array.<function()>}**
Returns all callback-functions that can be used to replace the default field renderer of a field with the property "alternativeRendering".

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | identifier of the new field-type. |
| fieldType | documents.sdk.FileFieldTypes |  |
| moduleName | string | name of the module |

- Since:
5.0i


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getFileExitCallbacks(fileTypeName, event){Array.<function()>}**
Returns all callback functions that are registered to a file related exit event.

| Name | Type | Description |
| --- | --- | --- |
| fileTypeName | string | the technical name of the file type |
| event | string | the exit event name |

- Since:
5.0a
- See:  registerFileExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getFileFieldExitCallbacks(fileTypeName, fieldName){Array.<function()>}**
Returns all callback functions that are registered to a file field related exit event.

| Name | Type | Description |
| --- | --- | --- |
| fileTypeName | string | the technical name of the file type |
| fieldName | string | the technical name of the file field |

- Since:
5.0a
- See:  registerFileFieldExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getOutbarExitCallbacks(outbarName, event){Array.<function()>}**
Returns all callback functions that are registered to an outbar related exit event.

| Name | Type | Description |
| --- | --- | --- |
| outbarName | string | the technical name of the outbar |
| event | string | the exit event name, i.e. one of the valid event identifiers listed in registerOutbarExitCallback |

- Since:
5.0d
- See:  registerOutbarExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getScriptParameterExitCallbacks(scriptName, event){Array.<function()>}**
Returns all callback functions that are registered to a script parameter related exit event.

| Name | Type | Description |
| --- | --- | --- |
| scriptName | string | the name(s) of the script configered in the manager |
| event | string | the exit event name, i.e. one of the valid event identifiers listed in registerScriptParameterExitCallback |

- Since:
5.0d
- See:  registerScriptParameterExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getScriptParameterFieldExitCallbacks(scriptName, fieldName){Array.<function()>}**
Returns all callback functions that are registered to a ScriptParameterField related exit event.

| Name | Type | Description |
| --- | --- | --- |
| scriptName | string | the name(s) of the script configered in the manager |
| fieldName | string | the exit field name, i.e. the name of a parameter of the script |

- Since:
5.0d
- See:  registerScriptParameterFieldExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getSearchExitCallbacks(event){Array.<function()>}**
Returns all callback functions that are registered to a search related exit event.

| Name | Type | Description |
| --- | --- | --- |
| event | string | the exit event name |

- Since:
5.0b
- See:  registerSearchExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getSearchFieldExitCallbacks(fieldName){Array.<function()>}**
Returns all callback functions that are registered to a search field related exit event.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the fields name |

- Since:
5.0d
- See:  registerSearchFieldExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.getTreeChartExitCallbacks(event){Array.<function()>}**
Returns all callback functions that are registered to a TreeChart related exit event.

| Name | Type | Description |
| --- | --- | --- |
| event | string | exit event name |

- Since:
5.0i HF5
- See:  registerTreeChartExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| Array.<function()> | the exit functions (or callbacks) |


**staticdocuments.sdk.exitRegistry.registerAlternativeCellRenderingCallback(callbackName, fieldType, moduleName, fn, options)**
Registers a callback function that can be used to replace the default cell renderer of a field with the property "alternativeCellRendering" or all file fields with a certain type.

| Name | Type | Description |
| --- | --- | --- |
| callbackName | string | Identifier of the callback. Use * if the callback should be used for all fields. |
| fieldType | documents.sdk.FileFieldTypes | Type of the field |
| moduleName | string | Name of the module in which this callback should be used or * to allow this callback for all list modules. List modules: *: any module, FileLink, FileMultiLink, FileFieldReference, FileMultiLinkReference, FilingPlan, Folder, Search |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below alternativeCellRenderingExitCallback(documentsContext, options){String} Name Type Description documentsContext documents.sdk.DocumentsContext Documents Context options object Callback options Name Type Description escapeHTML function Helpder function for escaping html row number Current row index cell number Current cell index column object Doby-Grid column definition data object Backbone model for row value string Default string-value to be rendered properties object Properties of field Returns: Type Description String HTML-String that should be rendered | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | Documents Context | options | object | Callback options Name Type Description escapeHTML function Helpder function for escaping html row number Current row index cell number Current cell index column object Doby-Grid column definition data object Backbone model for row value string Default string-value to be rendered properties object Properties of field | Name | Type | Description | escapeHTML | function | Helpder function for escaping html | row | number | Current row index | cell | number | Current cell index | column | object | Doby-Grid column definition | data | object | Backbone model for row | value | string | Default string-value to be rendered | properties | object | Properties of field | Type | Description | String | HTML-String that should be rendered |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | Documents Context |
| options | object | Callback options Name Type Description escapeHTML function Helpder function for escaping html row number Current row index cell number Current cell index column object Doby-Grid column definition data object Backbone model for row value string Default string-value to be rendered properties object Properties of field | Name | Type | Description | escapeHTML | function | Helpder function for escaping html | row | number | Current row index | cell | number | Current cell index | column | object | Doby-Grid column definition | data | object | Backbone model for row | value | string | Default string-value to be rendered | properties | object | Properties of field |
| Name | Type | Description |
| escapeHTML | function | Helpder function for escaping html |
| row | number | Current row index |
| cell | number | Current cell index |
| column | object | Doby-Grid column definition |
| data | object | Backbone model for row |
| value | string | Default string-value to be rendered |
| properties | object | Properties of field |
| Type | Description |
| String | HTML-String that should be rendered |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
6.1.0


**staticdocuments.sdk.exitRegistry.registerAlternativeRenderingCallback(fieldName, fieldType, moduleName, fn, options)**
Registers a callback function that can be used to replace the default field renderer of a field with the property "alternativeRendering". Examples are available in the how-to section

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | identifier of the new field-type. |
| fieldType | documents.sdk.FileFieldTypes |  |
| moduleName | string | name of the module |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below alternativeRenderingExitCallback(options, callbacks){String} Name Type Description options Object the options passed to fn Name Type Description editMode string the edit-state of the current file. callbacks Object Callback-trigger used to manually trigger exit-registry callbacks Name Type Description change function triggers the change-callback focusin function triggers the focusin-callback focusout function triggers the focusout-callback button function triggers the exit-button-callback Returns: Type Description String In case of the Folder-Module: return the html-string that should be rendered | Name | Type | Description | options | Object | the options passed to fn Name Type Description editMode string the edit-state of the current file. | Name | Type | Description | editMode | string | the edit-state of the current file. | callbacks | Object | Callback-trigger used to manually trigger exit-registry callbacks Name Type Description change function triggers the change-callback focusin function triggers the focusin-callback focusout function triggers the focusout-callback button function triggers the exit-button-callback | Name | Type | Description | change | function | triggers the change-callback | focusin | function | triggers the focusin-callback | focusout | function | triggers the focusout-callback | button | function | triggers the exit-button-callback | Type | Description | String | In case of the Folder-Module: return the html-string that should be rendered |
| Name | Type | Description |
| options | Object | the options passed to fn Name Type Description editMode string the edit-state of the current file. | Name | Type | Description | editMode | string | the edit-state of the current file. |
| Name | Type | Description |
| editMode | string | the edit-state of the current file. |
| callbacks | Object | Callback-trigger used to manually trigger exit-registry callbacks Name Type Description change function triggers the change-callback focusin function triggers the focusin-callback focusout function triggers the focusout-callback button function triggers the exit-button-callback | Name | Type | Description | change | function | triggers the change-callback | focusin | function | triggers the focusin-callback | focusout | function | triggers the focusout-callback | button | function | triggers the exit-button-callback |
| Name | Type | Description |
| change | function | triggers the change-callback |
| focusin | function | triggers the focusin-callback |
| focusout | function | triggers the focusout-callback |
| button | function | triggers the exit-button-callback |
| Type | Description |
| String | In case of the Folder-Module: return the html-string that should be rendered |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0i


**staticdocuments.sdk.exitRegistry.registerFileExitCallback(fileTypeName, event, fn, options)**
Registers a callback function that can be attached to a file related exit event.

| Name | Type | Description |
| --- | --- | --- |
| fileTypeName | string | the technical name(s) of the file type(s), each separated by , or * for any file type name |
| event | string | the exit event name, i.e. one of the valid event identifiers listed below File.afterSetModelData (e.g. for modifications of the FileFormModel) File.beforeFileRender File.afterFileRender File.afterFileOpen File.beforeFileEditStart (optionally aborts the file edit start action if fn returns false) File.afterFileEditStart File.beforeFileEditCancel (optionally aborts the file edit cancel action if fn returns false) File.afterFileEditCancel File.beforeFileEditCommit (optionally aborts the file edit commit action if fn returns false) File.afterFileEditCommit File.beforeFileCustomAction (optionally aborts the file custom action if fn returns false) File.afterFileCustomAction File.beforeFileWorkflowAction (optionally aborts the file workflow action if fn returns false) File.afterFileWorkflowAction File.beforeFileAction File.afterFileAction File.afterUpdateFileAction triggers after a portalscript return with the retrunType updateFile or after FileContext.updateFile is used. File.afterFileClose triggers after a file has been closed FileEmail.recipients (file action dialog "send file as email") FileEmail.beforeOpen (before opening "send file as email" dialog, see example, since 5.0h) FileEmail.beforeSend (before sending the "send file as email" form data, see example, since 5.0h) FileEmail.afterSetModelData (used to change the model) since 6.0.1 |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below fileExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn options Object the options passed to fn Name Type Description fileTypeName string the technical name of the file type | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | options | Object | the options passed to fn Name Type Description fileTypeName string the technical name of the file type | Name | Type | Description | fileTypeName | string | the technical name of the file type |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| options | Object | the options passed to fn Name Type Description fileTypeName string the technical name of the file type | Name | Type | Description | fileTypeName | string | the technical name of the file type |
| Name | Type | Description |
| fileTypeName | string | the technical name of the file type |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0a
- See:  DocumentsContext FileContext


##### Examples


```
documents.sdk.exitRegistry.registerFileExitCallback("crmAccount", "File.afterFileRender", function(documentsContext, options) {
	 var fileContext = documentsContext.getFileContext();
	 console.log(options);
});
```


```
documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.beforeOpen", function(documentsContext, options) {
  options.dialogSize.width = 960;
  options.dialogSize.height = 760;

  options.editorConfig.ckEditor = {
    forcePasteAsPlainText: true,
    extraPlugins: ["colorbutton", "font"]
    // ...
    // See ckEditor documentation for details
    // https://ckeditor.com/docs/ckeditor4/latest/index.html
  };
});
```


```
documents.sdk.exitRegistry.registerFileExitCallback("*", "FileEmail.beforeSend", function(documentsContext, options) {
  options.data.body = options.data.body.replace("</body>", "<p>Sent with DOCUMENTS.</p></body>")
});
```


**staticdocuments.sdk.exitRegistry.registerFileFieldExitCallback(fileTypeName, fieldName, fn, options)**
Registers a callback function that can be attached to a file field related exit event.

| Name | Type | Description |
| --- | --- | --- |
| fileTypeName | string | the technical name(s) of the file type(s), each separated by , or * for any file type name |
| fieldName | string | the technical name(s) of the file field(s), each separated by , or * for any file field name |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below fileFieldExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn options Object the options passed to fn Name Type Description fileTypeName string the technical name of the file type fileFieldId string the id of the file field fileFieldName string the technical name of the file field fileForm documents.sdk.FileFormModel the file form model fileField documents.sdk.FileFieldModel the file field model | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | options | Object | the options passed to fn Name Type Description fileTypeName string the technical name of the file type fileFieldId string the id of the file field fileFieldName string the technical name of the file field fileForm documents.sdk.FileFormModel the file form model fileField documents.sdk.FileFieldModel the file field model | Name | Type | Description | fileTypeName | string | the technical name of the file type | fileFieldId | string | the id of the file field | fileFieldName | string | the technical name of the file field | fileForm | documents.sdk.FileFormModel | the file form model | fileField | documents.sdk.FileFieldModel | the file field model |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| options | Object | the options passed to fn Name Type Description fileTypeName string the technical name of the file type fileFieldId string the id of the file field fileFieldName string the technical name of the file field fileForm documents.sdk.FileFormModel the file form model fileField documents.sdk.FileFieldModel the file field model | Name | Type | Description | fileTypeName | string | the technical name of the file type | fileFieldId | string | the id of the file field | fileFieldName | string | the technical name of the file field | fileForm | documents.sdk.FileFormModel | the file form model | fileField | documents.sdk.FileFieldModel | the file field model |
| Name | Type | Description |
| fileTypeName | string | the technical name of the file type |
| fileFieldId | string | the id of the file field |
| fileFieldName | string | the technical name of the file field |
| fileForm | documents.sdk.FileFormModel | the file form model |
| fileField | documents.sdk.FileFieldModel | the file field model |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0a
- See:  DocumentsContext FileContext


##### Example


```
documents.sdk.exitRegistry.registerFileFieldExitCallback("crmContact", "crmName", function(documentsContext, options) {
	var fileContext = documentsContext.getFileContext();
	console.log(options);
});
```


**staticdocuments.sdk.exitRegistry.registerOutbarExitCallback(outbarName, event, fn, options)**
Registers a callback function that can be attached to an outbar related exit event.

| Name | Type | Description |
| --- | --- | --- |
| outbarName | string | the technical name(s) of the outbar(s), each separated by , or * for any outbar name The following are the names of the default outbars: DlcOutbarPrivateFolder DlcOutbarPublicFolder HIT_TREE DlcOutbarFolder |
| event | string | the exit event name, i.e. one of the valid event identifiers listed below Outbar.beforeOutbarOpen Outbar.afterOutbarOpen Outbar.beforeOutbarRender Outbar.afterOutbarRender Outbar.beforeTreeRender Outbar.afterTreeRender Outbar.beforeTreeSetData since 6.3.0 |
| fn | function | the function (or callback) that will be called if the exit event occurs Notice: Any callback will be executed according to the function signature listed below. outbarExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed in the function options Object the options passed in the function Name Type Description outbarName string the technical name of the outbar | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed in the function | options | Object | the options passed in the function Name Type Description outbarName string the technical name of the outbar | Name | Type | Description | outbarName | string | the technical name of the outbar |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed in the function |
| options | Object | the options passed in the function Name Type Description outbarName string the technical name of the outbar | Name | Type | Description | outbarName | string | the technical name of the outbar |
| Name | Type | Description |
| outbarName | string | the technical name of the outbar |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0d
- See:  DocumentsContext


##### Examples


```
documents.sdk.exitRegistry.registerOutbarExitCallback("DlcOutbarPrivateFolder", "Outbar.afterTreeRender", function(documentsContext, options) {
	console.log(options.outbarName);
});
```


```
//for a more detailed example see howto
documents.sdk.exitRegistry.registerOutbarExitCallback("DlcOutbarPrivateFolder", "Outbar.beforeTreeSetData", (dc, options) => {
  options.treeItems.push({
    label: "otris Suiten",
    type: "DlcFolderTypeDynamicCallback",
    key: "otris_suites",
    icon: "mdi:mdi-account-card-details"
  });
});
```


**staticdocuments.sdk.exitRegistry.registerScriptParameterExitCallback(scriptName, event, fn, options)**
Registers a callback function that can be attached to a script parameter related exit event.

| Name | Type | Description |
| --- | --- | --- |
| scriptName | string | the technical name(s) of the script(s), each separated by , or * for any script name |
| event | string | the exit event name, i.e. one of the valid identifiers listed below ScriptParameter.afterSetModelData (e.g. for modifications of the ScriptParameterFormModel) ScriptParameter.beforeRender ScriptParameter.afterRender ScriptParameter.beforeExecuteScript (optionally aborts the script action if fn returns false) |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below scriptParameterExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn options Object the options passed to fn Name Type Description scriptName string the technical name of the script scriptForm documents.sdk.ScriptParameterFormModel the script form model | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | options | Object | the options passed to fn Name Type Description scriptName string the technical name of the script scriptForm documents.sdk.ScriptParameterFormModel the script form model | Name | Type | Description | scriptName | string | the technical name of the script | scriptForm | documents.sdk.ScriptParameterFormModel | the script form model |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| options | Object | the options passed to fn Name Type Description scriptName string the technical name of the script scriptForm documents.sdk.ScriptParameterFormModel the script form model | Name | Type | Description | scriptName | string | the technical name of the script | scriptForm | documents.sdk.ScriptParameterFormModel | the script form model |
| Name | Type | Description |
| scriptName | string | the technical name of the script |
| scriptForm | documents.sdk.ScriptParameterFormModel | the script form model |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0d
- See:  DocumentsContext


##### Example


```
documents.sdk.exitRegistry.registerScriptParameterExitCallback("customScript", "ScriptParameter.afterSetModelData", function(documentsContext, options) {
	console.log(options);
});
```


**staticdocuments.sdk.exitRegistry.registerScriptParameterFieldExitCallback(scriptName, fieldName, fn, options)**
Registers a callback function that can be attached to a script parameter field related exit event.

| Name | Type | Description |
| --- | --- | --- |
| scriptName | string | the technical name(s) of the script(s), each separated by , or * for any script name |
| fieldName | string | the technical name of the script parameter field |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below scriptParameterFieldExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn options Object the options passed to fn Name Type Description scriptName string the technical name of the script scriptFieldId string the id of the script field scriptFieldName string the technical name of the script field scriptFieldValue string the value of the script field scriptForm documents.sdk.ScriptParameterFormModel the script form model scriptField documents.sdk.ScriptFieldModel the script field model | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | options | Object | the options passed to fn Name Type Description scriptName string the technical name of the script scriptFieldId string the id of the script field scriptFieldName string the technical name of the script field scriptFieldValue string the value of the script field scriptForm documents.sdk.ScriptParameterFormModel the script form model scriptField documents.sdk.ScriptFieldModel the script field model | Name | Type | Description | scriptName | string | the technical name of the script | scriptFieldId | string | the id of the script field | scriptFieldName | string | the technical name of the script field | scriptFieldValue | string | the value of the script field | scriptForm | documents.sdk.ScriptParameterFormModel | the script form model | scriptField | documents.sdk.ScriptFieldModel | the script field model |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| options | Object | the options passed to fn Name Type Description scriptName string the technical name of the script scriptFieldId string the id of the script field scriptFieldName string the technical name of the script field scriptFieldValue string the value of the script field scriptForm documents.sdk.ScriptParameterFormModel the script form model scriptField documents.sdk.ScriptFieldModel the script field model | Name | Type | Description | scriptName | string | the technical name of the script | scriptFieldId | string | the id of the script field | scriptFieldName | string | the technical name of the script field | scriptFieldValue | string | the value of the script field | scriptForm | documents.sdk.ScriptParameterFormModel | the script form model | scriptField | documents.sdk.ScriptFieldModel | the script field model |
| Name | Type | Description |
| scriptName | string | the technical name of the script |
| scriptFieldId | string | the id of the script field |
| scriptFieldName | string | the technical name of the script field |
| scriptFieldValue | string | the value of the script field |
| scriptForm | documents.sdk.ScriptParameterFormModel | the script form model |
| scriptField | documents.sdk.ScriptFieldModel | the script field model |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0d
- See:  DocumentsContext


##### Example


```
documents.sdk.exitRegistry.registerScriptParameterFieldExitCallback("customScript", "customScriptField", function(documentsContext, options) {
	console.log(options);
});
```


**staticdocuments.sdk.exitRegistry.registerSearchExitCallback(event, fn, options)**
Registers a callback function that can be attached to a search related exit event.

| Name | Type | Description |
| --- | --- | --- |
| event | string | the exit event name, i.e. one of the valid identifiers listed below ExtendedSearch.afterSetModelData (e.g. for modifications of the ExtendedSearchFormModel) ExtendedSearch.beforeRenderSearchForm ExtendedSearch.afterRenderSearchForm ExtendedSearch.beforeRenderSearchSourceTree ExtendedSearch.afterRenderSearchSourceTree ExtendedSearch.beforeExecuteSearch (optionally aborts the search action if fn returns false) ExtendedSearch.afterExecuteSearch ExtendedSearch.beforeClearSearchForm ExtendedSearch.afterClearSearchForm ExtendedSearch.beforeToggleSearchSource ExtendedSearch.afterToggleSearchSource ExtendedSearch.beforeToggleMainSearchSource ExtendedSearch.afterToggleMainSearchSource ExtendedSearch.beforeToggleSearchMask ExtendedSearch.afterToggleSearchMask ExtendedSearch.beforeToggleHitListMask ExtendedSearch.afterToggleHitListMask DefaultSearch.beforeExecuteSearch (optionally aborts the search action if fn returns false) DefaultSearch.afterExecuteSearch |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below searchExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn options Object the options passed to fn Name Type Description searchForm documents.sdk.ExtendedSearchFormModel optional the search form model | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | options | Object | the options passed to fn Name Type Description searchForm documents.sdk.ExtendedSearchFormModel optional the search form model | Name | Type | Description | searchForm | documents.sdk.ExtendedSearchFormModel | optional the search form model |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| options | Object | the options passed to fn Name Type Description searchForm documents.sdk.ExtendedSearchFormModel optional the search form model | Name | Type | Description | searchForm | documents.sdk.ExtendedSearchFormModel | optional the search form model |
| Name | Type | Description |
| searchForm | documents.sdk.ExtendedSearchFormModel | optional the search form model |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0b
- See:  DocumentsContext ExtendedSearchContext


##### Example


```
documents.sdk.exitRegistry.registerSearchExitCallback("ExtendedSearch.afterRenderSearchForm", function(documentsContext, options) {
	var extSearchContext = documentsContext.getExtendedSearchContext();
	console.log(options);
});
```


**staticdocuments.sdk.exitRegistry.registerSearchFieldExitCallback(fieldName, fn, options)**
Registers a callback function that can be attached to a search field related exit event.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the technical name(s) of the search field(s), each separated by , or * for any search field name |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below searchFieldExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn options Object the options passed to fn Name Type Description searchFieldId string the id of the search field searchFieldName string the technical name of the search field searchFieldValue string the value of the search field searchForm documents.sdk.ExtendedSearchFormModel the search form model searchField documents.sdk.SearchFieldModel the search field model | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | options | Object | the options passed to fn Name Type Description searchFieldId string the id of the search field searchFieldName string the technical name of the search field searchFieldValue string the value of the search field searchForm documents.sdk.ExtendedSearchFormModel the search form model searchField documents.sdk.SearchFieldModel the search field model | Name | Type | Description | searchFieldId | string | the id of the search field | searchFieldName | string | the technical name of the search field | searchFieldValue | string | the value of the search field | searchForm | documents.sdk.ExtendedSearchFormModel | the search form model | searchField | documents.sdk.SearchFieldModel | the search field model |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| options | Object | the options passed to fn Name Type Description searchFieldId string the id of the search field searchFieldName string the technical name of the search field searchFieldValue string the value of the search field searchForm documents.sdk.ExtendedSearchFormModel the search form model searchField documents.sdk.SearchFieldModel the search field model | Name | Type | Description | searchFieldId | string | the id of the search field | searchFieldName | string | the technical name of the search field | searchFieldValue | string | the value of the search field | searchForm | documents.sdk.ExtendedSearchFormModel | the search form model | searchField | documents.sdk.SearchFieldModel | the search field model |
| Name | Type | Description |
| searchFieldId | string | the id of the search field |
| searchFieldName | string | the technical name of the search field |
| searchFieldValue | string | the value of the search field |
| searchForm | documents.sdk.ExtendedSearchFormModel | the search form model |
| searchField | documents.sdk.SearchFieldModel | the search field model |
| options | Object | optional the options passed in the function Name Type Default Description priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0d
- See:  DocumentsContext ExtendedSearchContext


##### Example


```
documents.sdk.exitRegistry.registerSearchFieldExitCallback("crmName", function(documentsContext, options) {
	var extSearchContext = documentsContext.getExtendedSearchContext();
	console.log(options);
});
```


**staticdocuments.sdk.exitRegistry.registerTreeChartExitCallback(event, fn, options)**
Registers a callback function that can be executed on certain TreeChart events.

| Name | Type | Description |
| --- | --- | --- |
| event | string | exit event for which this callback is called TreeChart.beforeLoadConfig Is called before the config is loaded for a TreeChart and can be used to change the configuration for the TreeChart. TreeChart.afterChangeConfig Is called after the config has been changed and can be used to save the changed config. |
| fn | function | the function (or callback) that will be executed if the exit event occurs fn will be called according to the function signature listed below treeChartExitCallback(documentsContext, options) Name Type Description documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn options object the options passed to fn | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | options | object | the options passed to fn |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| options | object | the options passed to fn |
| options | object | optional the options passed in the function Name Type Default Description config Object optional Configuration used for this TreeChart. In the callback TreeChart.beforeLoadConfig the configuration can be changed to affect the rendering of the displayed TreeChart. priority number | string medium optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 | Name | Type | Default | Description | config | Object |  | optional Configuration used for this TreeChart. In the callback TreeChart.beforeLoadConfig the configuration can be changed to affect the rendering of the displayed TreeChart. | priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |
| Name | Type | Default | Description |
| config | Object |  | optional Configuration used for this TreeChart. In the callback TreeChart.beforeLoadConfig the configuration can be changed to affect the rendering of the displayed TreeChart. |
| priority | number | string | medium | optional (Since: 5.0h) Sets the priority of the callback. The callbacks will be executed in order from the highest priority to the lowest. If no value is set, this function defaults to medium (0). Available values are numeric values or one of the following strings (listed with their corresponding numeric value): low -100 medium 0 high 100 critical 200 |

- Since:
5.0i HF5
- See:  DocumentsContext


##### Examples


```
// change config options
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.beforeLoadConfig", function(documentsContext, options) {
  options.config.direction = "LR"; // change direction to 'LR'
});
```


```
// set new config
documents.sdk.exitRegistry.registerTreeChartExitCallback("TreeChart.beforeLoadConfig", function(documentsContext, options) {
  options.config = { direction: "LR" }; // set new config
});
```