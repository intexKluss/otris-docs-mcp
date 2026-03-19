---
title: "Callback-Dokumentation"
source: "https://otris.software/documents/manuals/books/otrlifecycle/callbacks.html"
---

# Callback-Dokumentation


In order to provide callbacks, a callback script must be created that conforms to the following naming convention: `<name>_Callback_<name>`, e.g.: otrLifeCycle_Callback_relations. The required callback functions are then provided in the script.

**Example**


```js
// The correct callback version must be used
module.exports.version = 2;
// Define a module name
module.exports.moduleName = "relations";
// Provide the callbacks for otrLifeCycle
module.exports.otrLifeCycle = {
	// Define the callbacks, e.g.:
	checkRoles: function(options) {
		// ...
	},
	beforeRuleListAddAction: function (options) {
		// ...
	},
	// ...
};
```

// The correct callback version must be used
module.exports.version = 2;
// Define a module name
module.exports.moduleName = "relations";
// Provide the callbacks for otrLifeCycle
module.exports.otrLifeCycle = {
	// Define the callbacks, e.g.:
	checkRoles: function(options) {
		// ...
	},
	beforeRuleListAddAction: function (options) {
		// ...
	},
	// ...
};- otrLifeCycle
~checkRoles(options)
~beforeRuleListAddAction(options)
~beforeEditorAddManualActions(options)
~afterEditorCreateFormSection(options)
~afterConfigureProcessTypeCreateForm(options)
~afterEditorGetAutocompleteItems(options)
~beforeSaveRetentionPolicy(options)


### otrLifeCycle~checkRoles(options)

Implement this to use [otrModuleAccess](https://documents-modules.pages.otris.de/otrmoduleaccess/modules.html) for authorizing use of otrLifeCycle.

**Kind**: inner method of otrLifeCycle

| Param | Type | Description |
| --- | --- | --- |
| options | object | Options for authorizing access. |
| options.user | object | User to be authorized. |

**Example**


```js
// only allow lcmAdmin to access life-cycle
if(options.user.login === "lcmAdmin") {
  options.result = true;
}
else {
  options.result = false;
}
```

// only allow lcmAdmin to access life-cycle
if(options.user.login === "lcmAdmin") {
  options.result = true;
}
else {
  options.result = false;
}


### otrLifeCycle~beforeRuleListAddAction(options)

This is called before an action is added to the rule list and should be used to allow or reject
actions to be shown.

**Kind**: inner method of otrLifeCycle

| Param | Type | Description |
| --- | --- | --- |
| options | object | Options for the action to be shown. |
| options.action | object | Action to be shown. |
| options.gadgetContext | object | gadgetContext of the rule list being created. |
| options.ruleList | object | ScriptList where the rules will be shown. |
| options.showAction | boolean | Set this to false if the action should not be shown. |

**Example**


```js
var blackList = ["applyRules", "configureProcessType"];
// do not allow actions from blacklist
if(blackList.indexOf(options.action.name) !== -1) {
	options.showAction = false;
}
```

var blackList = ["applyRules", "configureProcessType"];
// do not allow actions from blacklist
if(blackList.indexOf(options.action.name) !== -1) {
	options.showAction = false;
}


### otrLifeCycle~beforeEditorAddManualActions(options)

This is called when the form for a retention policy is created and should be used to
automatically show the manual actions eg. forbid archive, archiveAndDelete, delete.

**Kind**: inner method of otrLifeCycle

| Param | Type | Description |
| --- | --- | --- |
| options | object | Options for showing the manual actions. |
| options.fileType | object | File type for which the current retention policy is rendered. If the fileType is undefinded, the retention policy is a template. |
| options.gadgetContext | object | GadgetContext of the current editor. |
| options.retentionPolicy | object | retentionPolicy whose form is being created. |
| options.showActions | boolean | Set this to false if manual actions should not be shown. |

**Example**


```js
// only show manual actions for lcmContract
options.showActions = options.fileType === "lcmContract";
```

// only show manual actions for lcmContract
options.showActions = options.fileType === "lcmContract";


### otrLifeCycle~afterEditorCreateFormSection(options)

This is called after the form section for a retention policy has been created and should be used to modify the form before it is sent to the client.

**Kind**: inner method of otrLifeCycle

| Param | Type | Description |
| --- | --- | --- |
| options | object | Options for creating the form section. |
| options.docFile | DocFile | DocFile object of the file from which the life cycle editor was opened. |
| options.editMode | boolean | Editor is in edit mode. |
| options.fileType | string | Filetype for current retention policy. |
| options.gadgetContext | string | GadgetContext of current editor. |
| options.gadgetForm | otris.gadget.gui.Form | Gadget-Form of the currently creating lifecycle editor. |
| options.retentionPolicy | object | Current retention policy whose form is being created. |
| options.getFieldName | function | Gets the gadget field name for the currently creating form section of a retention policy. This function will also provide a name for newly created fields so changes can be tracked visually by the star shown in the rule name of a changed retention policy. The following field names are used in the form: - ruler: ruler shown on on top of a retention policy - retentionActionSelect: select for retention action - retentionAction: select for retention action mode - retentionActionValue: value for the selected action mode - referenceTime: reference time field - delay: delay field - unit: time unit - timeRule: select for time rule - startNextYear: checkbox for starting the action next year - condition: condition editor - manualActionsArchive: checkbox for manual action archive - manualActionsArchiveAndDelete: checkbox for manual action archive and delete - manualActionsDelete: checkbox for manual action delete |
| options.getFieldValue | function | Get value of a field for the current retention policy. |
| options.createSectionHtml | CreateSectionHtmlCallback | Create html for a section heading. |

**Example**


```js
// add field reference helper enabled
var nameActionSelect = options.getFieldName("retentionActionValue"),
    newFieldName = options.getFieldName("referenceHelperEnabled"),
    newFieldLabel = context.getLocaleValue("de:Abhängige prüfen;en:Check dependent"),
    referenceHelperCheckboxField = options.gadgetForm.addCheckbox(newFieldName, newFieldLabel, false, {
      checked: options.retentionPolicy.value.referenceHelperEnabled
    }).setInLine(true);

// insert field after action select
referenceHelperCheckboxField.moveAfter(nameActionSelect).setInLine(false);
referenceHelperCheckboxField.setReadonly(!options.editMode || options.retentionPolicy.readonly);
```

// add field reference helper enabled
var nameActionSelect = options.getFieldName("retentionActionValue"),
    newFieldName = options.getFieldName("referenceHelperEnabled"),
    newFieldLabel = context.getLocaleValue("de:Abhängige prüfen;en:Check dependent"),
    referenceHelperCheckboxField = options.gadgetForm.addCheckbox(newFieldName, newFieldLabel, false, {
      checked: options.retentionPolicy.value.referenceHelperEnabled
    }).setInLine(true);

// insert field after action select
referenceHelperCheckboxField.moveAfter(nameActionSelect).setInLine(false);
referenceHelperCheckboxField.setReadonly(!options.editMode || options.retentionPolicy.readonly);


### otrLifeCycle~afterConfigureProcessTypeCreateForm(options)

This is called after the set/remove lifecycle settings form was created.


Available fields:


- lifeCycleEnabledFileTypes: select field containing all lifecycle enabled file types
- nonLifeCycleEnabledFileTypes: select field containing all non-lifecycle enabled file types

**Kind**: inner method of otrLifeCycle

| Param | Type | Description |
| --- | --- | --- |
| options | object | Options for the configure process type form. |
| options.gadgetContext | object | Gadgetcontext of configure process type gadget. |
| options.gadgetForm | object | Form of the configure process type gadget. |

**Example**


```js
var gadgetForm = options.gadgetForm,
    forbidSetSettingsFiletypes = [ // cannot set lifecycle settings on these filetypes
		 "appMainConfig", "appFileConfig", "appListConfig", "otrUser", "lcmFileField", "otrAccessProfile", "otrDocumentCategory", "otrTemplater"
    ],
    forbidRemoveSettingsFiletypes = ["lcmContract"], // pre-enabled filetype never remove
    lifeCycleEnabledFileTypesSelect = gadgetForm.getElement("lifeCycleEnabledFileTypes"),
    nonLifeCycleEnabledFileTypesSelect = gadgetForm.getElement("nonLifeCycleEnabledFileTypes");

// remove file types that shoule not be available in set/remove settings
lifeCycleEnabledFileTypesSelect.setSelectableValues(lifeCycleEnabledFileTypesSelect.getSelectableValues().filter(val => forbidRemoveSettingsFiletypes.indexOf(val[0]) === -1));
nonLifeCycleEnabledFileTypesSelect.setSelectableValues(nonLifeCycleEnabledFileTypesSelect.getSelectableValues().filter(val => forbidSetSettingsFiletypes.indexOf(val[0]) === -1));
```

var gadgetForm = options.gadgetForm,
    forbidSetSettingsFiletypes = [ // cannot set lifecycle settings on these filetypes
		 "appMainConfig", "appFileConfig", "appListConfig", "otrUser", "lcmFileField", "otrAccessProfile", "otrDocumentCategory", "otrTemplater"
    ],
    forbidRemoveSettingsFiletypes = ["lcmContract"], // pre-enabled filetype never remove
    lifeCycleEnabledFileTypesSelect = gadgetForm.getElement("lifeCycleEnabledFileTypes"),
    nonLifeCycleEnabledFileTypesSelect = gadgetForm.getElement("nonLifeCycleEnabledFileTypes");

// remove file types that shoule not be available in set/remove settings
lifeCycleEnabledFileTypesSelect.setSelectableValues(lifeCycleEnabledFileTypesSelect.getSelectableValues().filter(val => forbidRemoveSettingsFiletypes.indexOf(val[0]) === -1));
nonLifeCycleEnabledFileTypesSelect.setSelectableValues(nonLifeCycleEnabledFileTypesSelect.getSelectableValues().filter(val => forbidSetSettingsFiletypes.indexOf(val[0]) === -1));


### otrLifeCycle~afterEditorGetAutocompleteItems(options)

This is called after the autocomplete items for an editor field have been fetched and can
be used to alter the list of items.

**Kind**: inner method of otrLifeCycle

| Param | Type | Description |
| --- | --- | --- |
| options | object | Options for fetching auto complete items. |
| options.autocompleteContext | object | Context with which the autocomplete was called. |
| options.autocompleteContext.config | object | Config for the current autocomplete context. |
| options.autocompleteContext.config.query | string | Entered query string. |
| options.autocompleteContext.config.field | string | Field from which the autocomplete was called. Can be either the name of a normal field or a or b in case of a condition field. a refers to the left side of a condition rule and b to the right side. |
| [options.autocompleteContext.config.rule] | object | Value of the condition rule for which the autocomplete was called. |
| options.config | object | Config options of the calling editor. |
| options.config.fileType | string | Filetype for currently editing retention policy. |
| options.autocompleteItems | boolean | List of autocomplete items to be shown. Set a new or filtered list to only show wanted entries. |

**Example**


```js
var acConfig = options.autocompleteContext.config,
    // create date with day of tomorrow
    tomorrow = new Date((new Date()).setDate((new Date()).getDate() + 1)),
    // create date with day of next week
    nextWeek = new Date((new Date()).setDate((new Date()).getDate() + 7)),
    // create array of custom autcomplete items
    customACItems = [{
        group: context.getLocaleValue("de:Benutzerdefiniert:;en:Custom"),
        value: util.convertDateToString(tomorrow, "dd.mm.yyyy"), // system date value
	       label: context.getLocaleValue("de:Morgen;en:tomorrow") + " (" + context.convertDateToString(tomorrow).substring(0, 10) + ")"
	     }, {
	       group: context.getLocaleValue("de:Benutzerdefiniert:;en:Custom"),
	       value: util.convertDateToString(nextWeek, "dd.mm.yyyy"), // system date value
	       label: context.getLocaleValue("de:Nächste Woche;en:next week") + " (" + context.convertDateToString(nextWeek).substring(0, 10) + ")"
	   }];

options.autocompleteItems = options.autocompleteItems.filter(item => item.value !== "otrMailConvertDate");

// only show custom items for field referenceTime
if(acConfig.field === "referenceTime") {
  options.autocompleteItems = options.autocompleteItems.concat(customACItems);
}
```

var acConfig = options.autocompleteContext.config,
    // create date with day of tomorrow
    tomorrow = new Date((new Date()).setDate((new Date()).getDate() + 1)),
    // create date with day of next week
    nextWeek = new Date((new Date()).setDate((new Date()).getDate() + 7)),
    // create array of custom autcomplete items
    customACItems = [{
        group: context.getLocaleValue("de:Benutzerdefiniert:;en:Custom"),
        value: util.convertDateToString(tomorrow, "dd.mm.yyyy"), // system date value
	       label: context.getLocaleValue("de:Morgen;en:tomorrow") + " (" + context.convertDateToString(tomorrow).substring(0, 10) + ")"
	     }, {
	       group: context.getLocaleValue("de:Benutzerdefiniert:;en:Custom"),
	       value: util.convertDateToString(nextWeek, "dd.mm.yyyy"), // system date value
	       label: context.getLocaleValue("de:Nächste Woche;en:next week") + " (" + context.convertDateToString(nextWeek).substring(0, 10) + ")"
	   }];

options.autocompleteItems = options.autocompleteItems.filter(item => item.value !== "otrMailConvertDate");

// only show custom items for field referenceTime
if(acConfig.field === "referenceTime") {
  options.autocompleteItems = options.autocompleteItems.concat(customACItems);
}


### otrLifeCycle~beforeSaveRetentionPolicy(options)

This is executed before a retention policy is saved to a custom property.
This can be used to modify the value of the retention policy.

**Kind**: inner method of otrLifeCycle

| Param | Type | Description |
| --- | --- | --- |
| options | object | Options for saving the retention policy. |
| options.docFile | DocFile | DocFile object of the file from which the life cycle dialog was opened. |
| options.retentionPolicy | object | Currently saving retention policy. |
| options.gadgetFormData | object | Form data of the whole dialog. The default fields are prefixed by the retention policy name eg. lcmRule1_EMP_condition. |
| options.getFieldValue | function | Helper method to directly get the value of a gadget form field by name. |

**Example**


```js
// read field referenceHelperEnabled
var referenceHelperEnabledVal = options.getFieldValue("referenceHelperEnabled"),
    referenceHelperEnabled = (referenceHelperEnabledVal !== undefined && referenceHelperEnabledVal.length) ? referenceHelperEnabledVal[0] === "on" : false;

// write value to json
retentionPolicy.value.referenceHelperEnabled = referenceHelperEnabled;
```

// read field referenceHelperEnabled
var referenceHelperEnabledVal = options.getFieldValue("referenceHelperEnabled"),
    referenceHelperEnabled = (referenceHelperEnabledVal !== undefined && referenceHelperEnabledVal.length) ? referenceHelperEnabledVal[0] === "on" : false;

// write value to json
retentionPolicy.value.referenceHelperEnabled = referenceHelperEnabled;


## CreateSectionHtmlCallback : function

**Kind**: global typedef
**Since**: DOCUMENTS 5.0i

| Param | Type | Description |
| --- | --- | --- |
| name | object | Name of the section to be displayed |
| options | object | Options for this sections' HTML |
| options.class | string | CSS-Class to be used for this sections' HTML |