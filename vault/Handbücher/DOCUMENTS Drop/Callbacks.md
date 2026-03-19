---
title: "Erweiterung über Callbacks"
source: "https://otris.software/documents/manuals/books/documents-drop/extend-callbacks.html"
---

# Erweiterung über Callbacks

Eine weitere Möglichkeit die Standardimplementierung anzupassen bzw. zu
erweitern besteht über die Verwendung von **Callbacks**.
Um einen oder mehrere **Callbacks** zu registrieren muss ein Skript als Wert der
globalen Eigenschaft `DropConnectorCallbacks` hinterlegt werden.

In diesem Skript können die folgenden **Callbacks** registriert werden.


## Callbacks des Upload Gadgets

Die Callbacks des Upload Gadgets müssen mit dem *Namespace*`dropUploadDefault`
exportiert werden.


```javascript
exports.dropUploadDefault = {
    autocompleteCall: myAutocompleteCallFunction,
    switchEntry: mySwitchEntryFunction,
    dropFormConfig: myDropFormConfigFunction,
    formCallback: myFormCallbackFunction,
    addFields: true
};
```

exports.dropUploadDefault = {
    autocompleteCall: myAutocompleteCallFunction,
    switchEntry: mySwitchEntryFunction,
    dropFormConfig: myDropFormConfigFunction,
    formCallback: myFormCallbackFunction,
    addFields: true
};
#### autocompleteCall

Mit diesem Callback kann die Implementierung für das Autocomplete


#### switchEntry


#### dropFormConfig


#### formCallback

Um diesen Callback zu verwenden muss zusätzlich das Attribut `addFields` im
*Namespace*`dropUploadDefault` gesetzt werden (Ab DOCUMENTS Version 5.0g ist
dies nicht mehr notwendig).

callbacks.addFields && callbacks.formCallback(gadgetForm, selectedFiletype, $FORM[REFERENCE_FILE_KEY], { gadgetContext: gadgetContext });


## Callbacks des Textbausteine Gadgets


## Callbacks des Dokumente Gadgets

Im *Dokumente Gadget* stehen die schon erläuterten **Callbacks**`autocompleteCall` und `switchEntry` zur Verfügung. Die Callbacks müssen
für dieses Gadget mit dem *Namespace*`dropFileDocuments` exportiert werden.


```javascript
callbackFunction = callbacks.autocompleteCall || dnModule.autocompleteCall;
	return callbackFunction(REFERENCE_FILE_KEY, (typeof filetype === "string") ? filetype : undefined, query, AUTOCOMPLETE_CONFIG.maxResults);
```

	callbackFunction = callbacks.autocompleteCall || dnModule.autocompleteCall;
	return callbackFunction(REFERENCE_FILE_KEY, (typeof filetype === "string") ? filetype : undefined, query, AUTOCOMPLETE_CONFIG.maxResults);return (callbacks.switchEntry) ? callbacks.switchEntry(entry, options) : entry;


```javascript
gadgetForm = new otris.gadget.gui.DropForm(callbacks.dropFormConfig ? callbacks.dropFormConfig(defaultDropFormConfig) : defaultDropFormConfig),
		applicationInfo = gadgetForm.getApplicationInfo(),
		fileTypes = callbacks.getFileTypes ? callbacks.getFileTypes() : dnModule.getFileTypes(),
```

	gadgetForm = new otris.gadget.gui.DropForm(callbacks.dropFormConfig ? callbacks.dropFormConfig(defaultDropFormConfig) : defaultDropFormConfig),
		applicationInfo = gadgetForm.getApplicationInfo(),
		fileTypes = callbacks.getFileTypes ? callbacks.getFileTypes() : dnModule.getFileTypes(),callbacks.addFields && callbacks.formCallback(gadgetForm, selectedFiletype, $FORM[REFERENCE_FILE_KEY], { gadgetContext: gadgetContext });


```javascript
if(callbacks.processData) {
	callbackResult = callbacks.processData(formData, fileData, metadata, options);
	if(callbackResult !== true) {
		return callbackResult;
	}
}
```

if(callbacks.processData) {
	callbackResult = callbacks.processData(formData, fileData, metadata, options);
	if(callbackResult !== true) {
		return callbackResult;
	}
}dropTextSnippets
		callbackFunction = callbacks.autocompleteCall || dnModule.autocompleteCall;
		return callbackFunction(REFERENCE_FILE_KEY, null, query, AUTOCOMPLETE_CONFIG.maxResults);


```javascript
return callbacks.switchEntry(entry, options);

callbacks.snippetEntries && callbacks.snippetEntries(entries, activeFile, gadgetContext);
```

		return callbacks.switchEntry(entry, options);

callbacks.snippetEntries && callbacks.snippetEntries(entries, activeFile, gadgetContext);