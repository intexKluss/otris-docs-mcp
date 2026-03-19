---
title: "Gadget zur Auswahl von Referenzfeld Einträgen"
source: "https://otris.software/documents/howto/gadgets/reference-field-gadget.html"
---

# Gadget zur Auswahl von Referenzfeld Einträgen

Es ist möglich einen eigenen Referenzfelddialog zum Setzen einer Verknüpfung zu einer Mappe zu erstellen.
Hierzu muss am Referenzeld die Eigenschaft


```javascript
referenceSelect = false
```

referenceSelect = falsegesetzt sein. Diese bewirkt dann, dass der normale Referenzbutton nicht angezeigt wird.
Stadtdessen wird dann am Referenzfeld der Exit "Aktionsknopf neben Feld" aktiviert und am Referenzfeld die Eigenschaft


```javascript
gadgetConfig = {
 gadgetScript: "<script>",
 gadgetAction: "<gadget-action>",
 gadgetId: "<gadget-id>"
}
```

gadgetConfig = {
 gadgetScript: "<script>",
 gadgetAction: "<gadget-action>",
 gadgetId: "<gadget-id>"
}gesetzt.

In dem Gadget-Skript kann dann zum Beispiel eine Skriptliste erzeugt werden, welche einen Button enthalten muss, der anschließend die Referenz setzt.

Beispiel:

Download: [Beispielmappentyp zum Auswählen von Referenzen](referenceFieldGadget.xml)

Download: [Verknüpfter Beispielmappentyp](referenceConnect.xml)

Download: [Gadget_referenceField.js](Gadget_referenceField.js)


```javascript
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptListAPI = require("otris.scriptlist");

//  gadgetConfig: { gadgetScript: "Gadget_referenceField", gadgetAction: "showDialog", gadgetDialog: true, gadgetId: "gadgetReferenceFieldDialog" }
gadgetAPI.registerGadgetAction("showDialog", (gadgetContext) => {

	var docFile = context.getFileById(gadgetContext.fileId),
		list = new scriptListAPI.List(),
		register = docFile.getRegisterByName("referenceConnect"),
		wrapper, col1, col2;

	col1 = list.addColumn("title", "Titel");
	col2 = list.addColumn("conValue", "conValue");

	var fileResultSet = register.getFiles(),
		labelRegister = register.getLocaleLabel();

	for(subFile = fileResultSet.first(); subFile; subFile = fileResultSet.next()) {
		var subFileId = subFile.getAutoText("%id%");
		var row = list.addRow(subFileId, [subFile.getAutoText("%title%"), subFile.referenceLinkValue]);
		row.setOnDoubleClick((event, options) => {
			if(options.row) {
				var fileContext = documentsContext.getFileContext();
				fileContext.setFileFieldReference("referenceField", options.row.get("id"));
				documentsContext.closeDialog();
			}
		});
	}

	// list.setAutoHeight(true);
	list.setShowTitle(false);

	list.setShowSearchBox({
		remoteSearch: false
	});

	list.endList();

	wrapper = gadgetAPI.getScriptListWrapperInstance();
	wrapper.addScriptList(list);
	wrapper.setTitle("Gadget reference field dialog");

	wrapper.addContainerButton({
		id: "clear",
		label: "Eintrag löschen",
		clickFunction: "clearReferenceField"
	});

	wrapper.addContainerButton({
		id: "ok",
		label: "OK",
		clickFunction: "setReferenceField"
	});

	wrapper.addContainerButton({
		id: "cancel",
		label: "Abbrechen",
		clickFunction: "cancel"
	});

	wrapper.addClientFunction(function clearReferenceField() {
		var fileContext = documentsContext.getFileContext();
		fileContext.setFileFieldReference("referenceField", null);
		documentsContext.closeDialog();
	});

	wrapper.addClientFunction(function cancel() {
		documentsContext.closeDialog();
	});

	return wrapper;
});

context.returnValue = gadgetAPI.transfer();
```

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptListAPI = require("otris.scriptlist");

//  gadgetConfig: { gadgetScript: "Gadget_referenceField", gadgetAction: "showDialog", gadgetDialog: true, gadgetId: "gadgetReferenceFieldDialog" }
gadgetAPI.registerGadgetAction("showDialog", (gadgetContext) => {

	var docFile = context.getFileById(gadgetContext.fileId),
		list = new scriptListAPI.List(),
		register = docFile.getRegisterByName("referenceConnect"),
		wrapper, col1, col2;

	col1 = list.addColumn("title", "Titel");
	col2 = list.addColumn("conValue", "conValue");

	var fileResultSet = register.getFiles(),
		labelRegister = register.getLocaleLabel();

	for(subFile = fileResultSet.first(); subFile; subFile = fileResultSet.next()) {
		var subFileId = subFile.getAutoText("%id%");
		var row = list.addRow(subFileId, [subFile.getAutoText("%title%"), subFile.referenceLinkValue]);
		row.setOnDoubleClick((event, options) => {
			if(options.row) {
				var fileContext = documentsContext.getFileContext();
				fileContext.setFileFieldReference("referenceField", options.row.get("id"));
				documentsContext.closeDialog();
			}
		});
	}

	// list.setAutoHeight(true);
	list.setShowTitle(false);

	list.setShowSearchBox({
		remoteSearch: false
	});

	list.endList();

	wrapper = gadgetAPI.getScriptListWrapperInstance();
	wrapper.addScriptList(list);
	wrapper.setTitle("Gadget reference field dialog");

	wrapper.addContainerButton({
		id: "clear",
		label: "Eintrag löschen",
		clickFunction: "clearReferenceField"
	});

	wrapper.addContainerButton({
		id: "ok",
		label: "OK",
		clickFunction: "setReferenceField"
	});

	wrapper.addContainerButton({
		id: "cancel",
		label: "Abbrechen",
		clickFunction: "cancel"
	});

	wrapper.addClientFunction(function clearReferenceField() {
		var fileContext = documentsContext.getFileContext();
		fileContext.setFileFieldReference("referenceField", null);
		documentsContext.closeDialog();
	});

	wrapper.addClientFunction(function cancel() {
		documentsContext.closeDialog();
	});

	return wrapper;
});

context.returnValue = gadgetAPI.transfer();