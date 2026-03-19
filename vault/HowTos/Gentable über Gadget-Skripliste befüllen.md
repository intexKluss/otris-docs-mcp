---
title: "Gentable über Gadget-Skripliste befüllen"
source: "https://otris.software/documents/howto/gentable/gentableGadgetScriptList.html"
---

# Gentable über Gadget-Skripliste befüllen

Eine Zeile im Gentable kann auch über einen Gadget-Dialog mit Skripliste, ähnlich dem Referenzfeldialog, befüllt werden.


Abb. 1 - Gadget-Dialog mit Skripliste

Im folgenden Beispiel wurde der **relations-Mandant** erweitert.


### Gentable-Definition

Im DOCUMENTS-Manager ist unter **Monitoring / Globale Eigenschaften / crmQuote** die Gentable-Definition für den Mappentyp
**Angebot (crmQuote)** hinterlegt.

Hier kann folgende Felddefinition vor dem ersten Gentablefeld eingefügt werden.


```xml
<field number="1">
    <title>productReference</title>
    <img>mdi:mdi-magnify;line-height:13px;padding-bottom:1px</img>
    <tooltip>de:Produkt auswählen;en:Choose product</tooltip>
    <type>BUTTON</type>
    <width>70</width>
    <editable>true</editable>
    <event type="onClick">showProducts</event>
</field>
```

<field number="1">
    <title>productReference</title>
    <img>mdi:mdi-magnify;line-height:13px;padding-bottom:1px</img>
    <tooltip>de:Produkt auswählen;en:Choose product</tooltip>
    <type>BUTTON</type>
    <width>70</width>
    <editable>true</editable>
    <event type="onClick">showProducts</event>
</field>Hierdurch erscheint als erstes Feld ein Gentable-Button zum Öffnen der Gadget-Skriptliste.


### Gentable-Callback

Der folgende Code muss entweder als [ClientHeaderCode](../common/embed-header-code.html#methode-addscriptcodebyscriptname-)
an den Client transferiert werden oder im [externen Kontext](../exit/externalResources.html) eingebunden werden.


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("crmQuote", "showProducts", function(documentsContext, options) {

	// open product reference gadget
	documentsContext.callGadget({
        gadgetScript: "Gadget_crmQuote_gentableProductReference",
        gadgetAction: "show",
        gadgetWidth: 800,
        gadgetHeight: 500,
        rowIndex: options.row.index()
    });
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("crmQuote", "showProducts", function(documentsContext, options) {

	// open product reference gadget
	documentsContext.callGadget({
        gadgetScript: "Gadget_crmQuote_gentableProductReference",
        gadgetAction: "show",
        gadgetWidth: 800,
        gadgetHeight: 500,
        rowIndex: options.row.index()
    });
});Download: [gentableGadgetScriptList.js](gentableGadgetScriptList.js)

Beim Klick auf den Button wird ein Gadget geöffnet, welches den Index der aktuellen Zeile übergeben bekommt.


### Gadget-Scriptliste zur Auswahl

Das Gadget muss als Portalskript im Mandanten hinterlegt werden.


```javascript
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("show", function (gadgetContext) {

	var frs = new HitResultset("crmProduct", "", "crmName+", ["crmId", "crmName", "crmDescription", "crmUnit", "crmListPrice"]),
		scriptListAPI = new require("otris.scriptList"),
		scriptList = new scriptListAPI.List(),
		scriptListWrapper = gadgetAPI.getScriptListWrapperInstance(),
		setProduct = function setProduct() {
			var gadgetContext = documentsContext.getGadgetContext(),
				dobyGrid = gadgetContext.getClientObject(),
				activeRow = dobyGrid.active && (dobyGrid.active.row !== undefined) && dobyGrid.getRowFromIndex(dobyGrid.active.row);

			if (activeRow) {
				var gentableContext = documentsContext.getGentableContext(),
					gentableRow = gentableContext.getGridModel().getRow(gadgetContext.getContextData().rowIndex);

				// set product data in gentable row
				gentableRow.set({
					productno: activeRow.get("productno"),
					productname: activeRow.get("productname"),
					description: activeRow.get("description"),
					unit: activeRow.get("metaData").unit,
					unitprice: activeRow.get("unitprice"),
					amount: 1
				});

				// run setPosAmount callback
				documents.sdk.gentable.gentableRegistry.getCallback("crmQuote", "setPosAmount")(documentsContext, {
					row: gentableRow
				});

				documentsContext.closeDialog();
			}
		}

	// set options
	scriptList.setTitle(false);
	scriptList.setShowSearchBox({ remoteSearch: false });
	scriptList.setEnableTextSelection(false);
	scriptList.setOnRowDoubleClick(setProduct);

	// add columns
	scriptList.addColumn({ key: "productno", label: context.getLocaleValue("de:Produktnr.;en:product code") });
	scriptList.addColumn({ key: "productname", label: context.getLocaleValue("de:Produktname;en:name"), width: 300 });
	scriptList.addColumn({ key: "unitLabel", label: context.getLocaleValue("de:Einheit;en:unit") });
	scriptList.addColumn({
		key: "unitprice",
		label: context.getLocaleValue("de:Preis;en:price"),
		width: 75,
		formatter: (row, column, value) => documents.sdk.utils.formatNumber(value, undefined, undefined, 2)
	}).setDataType("NUMBER");
	scriptList.addColumn({
		key: "description",
		label: context.getLocaleValue("de:Beschreibung;en:description"),
		width: 288,
		formatter: '<span title="{{value}}">{{value}}</span>'
	});

	//	iterate files
	for (var product = frs.first();product;product = frs.next()) {
		// add product to list
		scriptList.addRow(product.getFileId(), {
			productno: product.crmId,
			productname: product.crmName,
			description: product.crmDescription,
			unitLabel: product.getLocalValueByName("crmUnit"),
			unitprice: product.crmListPrice
		}).setMetaData({ unit: product.crmUnit });
	}

	// end list & add list to wrapper
	scriptList.endList();

	// set options
	scriptListWrapper.setContextData({ rowIndex: gadgetContext.gadgetParams.rowIndex });
	scriptListWrapper.setTitle(context.getLocaleValue("de:Produkte;en:Products"))

	// add buttons to wrapper
	scriptListWrapper.addContainerButton({
		id: "ok",
		label: "OK",
		clickFunction: "setProduct"
	});

	scriptListWrapper.addContainerButton({
		id: "cancel",
		label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
		clickFunction: "cancel"
	});

	// add clientfunctions
	scriptListWrapper.addClientFunction(setProduct);

	scriptListWrapper.addClientFunction(function cancel() {
		documentsContext.closeDialog();
	});
	scriptListWrapper.addScriptList(scriptList);

	return scriptListWrapper;
});

context.returnValue = gadgetAPI.transfer();
```

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("show", function (gadgetContext) {

	var frs = new HitResultset("crmProduct", "", "crmName+", ["crmId", "crmName", "crmDescription", "crmUnit", "crmListPrice"]),
		scriptListAPI = new require("otris.scriptList"),
		scriptList = new scriptListAPI.List(),
		scriptListWrapper = gadgetAPI.getScriptListWrapperInstance(),
		setProduct = function setProduct() {
			var gadgetContext = documentsContext.getGadgetContext(),
				dobyGrid = gadgetContext.getClientObject(),
				activeRow = dobyGrid.active && (dobyGrid.active.row !== undefined) && dobyGrid.getRowFromIndex(dobyGrid.active.row);

			if (activeRow) {
				var gentableContext = documentsContext.getGentableContext(),
					gentableRow = gentableContext.getGridModel().getRow(gadgetContext.getContextData().rowIndex);

				// set product data in gentable row
				gentableRow.set({
					productno: activeRow.get("productno"),
					productname: activeRow.get("productname"),
					description: activeRow.get("description"),
					unit: activeRow.get("metaData").unit,
					unitprice: activeRow.get("unitprice"),
					amount: 1
				});

				// run setPosAmount callback
				documents.sdk.gentable.gentableRegistry.getCallback("crmQuote", "setPosAmount")(documentsContext, {
					row: gentableRow
				});

				documentsContext.closeDialog();
			}
		}

	// set options
	scriptList.setTitle(false);
	scriptList.setShowSearchBox({ remoteSearch: false });
	scriptList.setEnableTextSelection(false);
	scriptList.setOnRowDoubleClick(setProduct);

	// add columns
	scriptList.addColumn({ key: "productno", label: context.getLocaleValue("de:Produktnr.;en:product code") });
	scriptList.addColumn({ key: "productname", label: context.getLocaleValue("de:Produktname;en:name"), width: 300 });
	scriptList.addColumn({ key: "unitLabel", label: context.getLocaleValue("de:Einheit;en:unit") });
	scriptList.addColumn({
		key: "unitprice",
		label: context.getLocaleValue("de:Preis;en:price"),
		width: 75,
		formatter: (row, column, value) => documents.sdk.utils.formatNumber(value, undefined, undefined, 2)
	}).setDataType("NUMBER");
	scriptList.addColumn({
		key: "description",
		label: context.getLocaleValue("de:Beschreibung;en:description"),
		width: 288,
		formatter: '<span title="{{value}}">{{value}}</span>'
	});

	//	iterate files
	for (var product = frs.first();product;product = frs.next()) {
		// add product to list
		scriptList.addRow(product.getFileId(), {
			productno: product.crmId,
			productname: product.crmName,
			description: product.crmDescription,
			unitLabel: product.getLocalValueByName("crmUnit"),
			unitprice: product.crmListPrice
		}).setMetaData({ unit: product.crmUnit });
	}

	// end list & add list to wrapper
	scriptList.endList();

	// set options
	scriptListWrapper.setContextData({ rowIndex: gadgetContext.gadgetParams.rowIndex });
	scriptListWrapper.setTitle(context.getLocaleValue("de:Produkte;en:Products"))

	// add buttons to wrapper
	scriptListWrapper.addContainerButton({
		id: "ok",
		label: "OK",
		clickFunction: "setProduct"
	});

	scriptListWrapper.addContainerButton({
		id: "cancel",
		label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
		clickFunction: "cancel"
	});

	// add clientfunctions
	scriptListWrapper.addClientFunction(setProduct);

	scriptListWrapper.addClientFunction(function cancel() {
		documentsContext.closeDialog();
	});
	scriptListWrapper.addScriptList(scriptList);

	return scriptListWrapper;
});

context.returnValue = gadgetAPI.transfer();Download: [Gadget_crmQuote_gentableProductReference.js](Gadget_crmQuote_gentableProductReference.js)

Im Gadget werden die Mappen des Mappentyps **Produkt (crmProduct)** als HitResultset geladen und dann Zeilenweise mit den
benötigten Informationen einer Skriptliste hinzugefügt.

Bei den Spalten *unitprice* und *description* werden [[Script Extensions API/otris.scriptlist.Column#setFormatter|Formatter]] verwendet, um den Preis mit Nachkommastelle anzuzeigen
und der Beschreibung noch einen Tooltip hinzuzufügen.
Da die Spalte *unitLabel* bei Anzeige übersetzt wird, muss noch der echte Wert für die Einheit übergeben werden.
Dies geschieht, indem jeder Zeile mit [[Script Extensions API/otris.scriptlist.Row#setMetaData|Row.setMetaData()]]
der echte Wert für *unit* übergeben wird.

Zum Auswählen einer Zeile wird die Client-Action **setProduct** hinzugefügt, welche beim Klick auf den OK-Button und
beim Doppelklick auf eine Zeile ausgeführt wird.
In der Client-Action werden über das [[Client SDK/documents.sdk.GadgetContext#getClientObject|Client-Objekt]] der Skriptliste die Informationen geladen und anschließend der
aktiven Zeile im Gentable übergeben.