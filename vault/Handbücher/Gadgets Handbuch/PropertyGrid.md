---
title: "Property-Grid"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/propertygrid.html"
---

# Property-Grid


## Allgemeines

Mit diesem Gadget kann ein besonders Formularelement zur geführten Eingabe von Schlüssel-Wert-Paaren bereitgestellt werden.


## Wesentliche Merkmale

- Das Gadget basiert auf der Gentable-Funktionalität.
- Die Speicherung der Daten erfolgt als JSON-String.
- Für jeden Schlüssel kann ein JSON-Datenformat gewählt werden.
- Es können die Editor- (Bearbeitung) und Render-Typen (Anzeige) des Gentables genutzt werden.


## Allgemeines Beispiel

Ein PropertyGrid kann z.B. als Feld einer Mappe verwendet werden:


![propertygrid-1](../assets/img/propertygrid-1.png)

Abb. 95 - Standard PropertyGrid als Mappentypfeld (Anzeigemodus)

Im Bearbeitungsmodus der Mappe können Schlüssel-Wert-Paare über die entsprechenden Schaltflächen hinzugefügt, gelöscht oder verschoben werden:


![propertygrid-2](../assets/img/propertygrid-2.png)

Abb. 96 - Standard PropertyGrid als Mappentypfeld (Bearbeitungsmodus)

In diesem Fall werden z.B. 2 Felder an einem Mappentyp angelegt:

- Feld 1 (zur Anzeige):
Typ: Gadget
In Mappenansicht darstellen
gadgetConfig mit gadgetScript und gadgetAction
- Feld 2 (zur Speicherung)
Typ: Text
Nicht in Mappenansicht darstellen

Das Gadget-Skript zur Anzeige und zur Speicherung der Daten könnte wie folgt aussehen:


```javascript
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
gadgetAPI.registerGadgetAction("show", function() {
    const propertyGrid = gadgetAPI.getPropertyGridInstance();
    propertyGrid.setStore({
        type: "field",
        fieldName: "mySaveFieldName",
    });
    propertyGrid.setColumnOptions({
        keyLabel: "Property",
        valueLabel: "PropertyValue",
        keySelectionType: "TEXT"
    });
    return propertyGrid;
});
context.returnValue = gadgetAPI.transfer();
```

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
gadgetAPI.registerGadgetAction("show", function() {
    const propertyGrid = gadgetAPI.getPropertyGridInstance();
    propertyGrid.setStore({
        type: "field",
        fieldName: "mySaveFieldName",
    });
    propertyGrid.setColumnOptions({
        keyLabel: "Property",
        valueLabel: "PropertyValue",
        keySelectionType: "TEXT"
    });
    return propertyGrid;
});
context.returnValue = gadgetAPI.transfer();Alternativ zur Verwendung von *setStore* per Skript mit Angabe type=field und fieldName kann in der gadgetConfig am Feld auch die Zusatzoption *dataFieldName* verwendet werden, z.B.:
*gadgetConfig={gadgetScript:'Gadget_myGadgetScript',gadgetAction:'myGadgetAction',dataFieldName:'myDataFieldName'}*

Die Speicherung der Daten kann aber auch per Skript durchgeführt werden, um z.B. die Daten nicht als Mappenfeld sondern an einem anderen Speicherort zu speichern. In diesem Fall ist bei *setStore* der type=script und ein Skriptname anzugeben. Das Skript wird in diesem Fall immer mit einem Parameter *gentableData* aufgerufen, in diesem Parameter stehen die Daten zur Verfügung (es darf dabei aber kein eigener Skriptparameter mit demselben Namen verwendet werden). Das Skript kann aber mit weiteren Parametern aufgerufen werden, z.B.:


```javascript
...
propertyGrid.setStore({
    type: "script",
    scriptName: "mySaveScript",
    scriptParams: {
        myScriptParam: "myScriptParamValue"
    }
})
...
```

...
propertyGrid.setStore({
    type: "script",
    scriptName: "mySaveScript",
    scriptParams: {
        myScriptParam: "myScriptParamValue"
    }
})
...

## Weitere Beispiele


### Beispiel zur Verwendung als Mappenfeld

In diesem Beispiel werden folgende Konfigurationen für Felder verwendet:

- Gadget-Feld
Typ: Gadget
In Mappenansicht darstellen
gadgetConfig={gadgetScript:'GadgetSample_PropertyGrid_Field', gadgetAction:'show'}
- Speicher-Feld
Typ: Text
Name: propertyGridData
Nicht in Mappenansicht darstellen

Im Skript werden außerdem verschiedene Möglichkeiten dargestellt, z.B.:

- setColumnOptions: (SELECT) Damit werden als Schlüssel nur die definierten Werte zugelassen
- addProperty: Verwendung diverser Feldtypen wie CHECKBOX, NUMBER, DATE2 usw. sowie Verwendung von Auswahllisten für Werte, Vorbelegungen für Defaults und die Verwendung von Tooltips
- setGridButtons: Um nur bestimmte Grid-Schaltflächen zuzulassen


![propertygrid-3](../assets/img/propertygrid-3.png)

Abb. 97 - Anzeige des Gadget-Feldes als Mappenfeld


```javascript
/**
 * Simple example for a property grid gadget
 * Use the store at a field (propertyGridData)
 * Configure 2 fields at a file type, e.g. propertyGridGadget as gadget and propertyGridData as not displayed text field for saving the data
 * Use the following gadgetConfig at the gadget field: {gadgetScript:'GadgetSample_PropertyGrid_Field', gadgetAction:'show'}
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register the gadget action
gadgetAPI.registerGadgetAction("show", function() {

	// Create the property grid
	const propertyGrid = gadgetAPI.getPropertyGridInstance();

	// Set the store to the field "propertyGridData", e.g. a not displayed text field at the file type
	propertyGrid.setStore({
            type: "field",
            fieldName: "propertyGridData",
        });

	// Set the column options, in this case only predefined selections for the property keys are allowed (keySelectionType=SELECT)
    propertyGrid.setColumnOptions({
        keyLabel: context.getLocaleValue("de:Eigenschaft;en:Property"),
        valueLabel: context.getLocaleValue("de:Wert;en:Value"),
        keySelectionType: "SELECT"
    });

	// Add the properties, in this case with different types and options
	// A checkbox field
	propertyGrid.addProperty(
		"active",
		"boolean",
		"CHECKBOX",
		context.getLocaleValue("de:Aktiv;en:Active"),
		{
			description: context.getLocaleValue("de:Das könnte ein Tooltip sein;en:this could be a tooltip")
		}
	);
	// A number field
	propertyGrid.addProperty(
		"weight",
		"number",
		"NUMBER",
		context.getLocaleValue("de:Gewicht (in kg);en:Weight (in kg)")
	);
	// A date field
	propertyGrid.addProperty(
		"maintenanceDate",
		"string",
		"DATE2",
		context.getLocaleValue("de:Wartungstermin;en:Service date")
	);
	// A string field with predefined select options for the value
	propertyGrid.addProperty(
		"colors",
		"string[]",
		"SELECT",
		context.getLocaleValue("de:Farbe;en:Color"),
		{
			selectOptions:[
				["green", context.getLocaleValue("de:grün;en:green")],
				["red", context.getLocaleValue("de:rot;en:red")],
				["blue", context.getLocaleValue("de:blau;en:blue")]
		]}
	);
	// A text field
	propertyGrid.addProperty(
		"dimension",
		"string",
		"TEXT",
		context.getLocaleValue("de:Maße (BxHxT in mm);en:Dimensions (WxHxD in mm)")
	);
	// A text field with a default value
	propertyGrid.addProperty(
		"description",
		"string",
		"TEXT",
		context.getLocaleValue("de:Beschreibung;en:Description"),
		{
			default: context.getLocaleValue("de:Das könnte der Standardwert sein;en:This could be the default value")
		}
	);
	// In this case only add and remove are allowed (no moving buttons)
    propertyGrid.setGridButtons([{ id: "add" }, { id: "remove" }]);

	// Return the property grid
	return propertyGrid;
});

// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple example for a property grid gadget
 * Use the store at a field (propertyGridData)
 * Configure 2 fields at a file type, e.g. propertyGridGadget as gadget and propertyGridData as not displayed text field for saving the data
 * Use the following gadgetConfig at the gadget field: {gadgetScript:'GadgetSample_PropertyGrid_Field', gadgetAction:'show'}
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register the gadget action
gadgetAPI.registerGadgetAction("show", function() {

	// Create the property grid
	const propertyGrid = gadgetAPI.getPropertyGridInstance();

	// Set the store to the field "propertyGridData", e.g. a not displayed text field at the file type
	propertyGrid.setStore({
            type: "field",
            fieldName: "propertyGridData",
        });

	// Set the column options, in this case only predefined selections for the property keys are allowed (keySelectionType=SELECT)
    propertyGrid.setColumnOptions({
        keyLabel: context.getLocaleValue("de:Eigenschaft;en:Property"),
        valueLabel: context.getLocaleValue("de:Wert;en:Value"),
        keySelectionType: "SELECT"
    });

	// Add the properties, in this case with different types and options
	// A checkbox field
	propertyGrid.addProperty(
		"active",
		"boolean",
		"CHECKBOX",
		context.getLocaleValue("de:Aktiv;en:Active"),
		{
			description: context.getLocaleValue("de:Das könnte ein Tooltip sein;en:this could be a tooltip")
		}
	);
	// A number field
	propertyGrid.addProperty(
		"weight",
		"number",
		"NUMBER",
		context.getLocaleValue("de:Gewicht (in kg);en:Weight (in kg)")
	);
	// A date field
	propertyGrid.addProperty(
		"maintenanceDate",
		"string",
		"DATE2",
		context.getLocaleValue("de:Wartungstermin;en:Service date")
	);
	// A string field with predefined select options for the value
	propertyGrid.addProperty(
		"colors",
		"string[]",
		"SELECT",
		context.getLocaleValue("de:Farbe;en:Color"),
		{
			selectOptions:[
				["green", context.getLocaleValue("de:grün;en:green")],
				["red", context.getLocaleValue("de:rot;en:red")],
				["blue", context.getLocaleValue("de:blau;en:blue")]
		]}
	);
	// A text field
	propertyGrid.addProperty(
		"dimension",
		"string",
		"TEXT",
		context.getLocaleValue("de:Maße (BxHxT in mm);en:Dimensions (WxHxD in mm)")
	);
	// A text field with a default value
	propertyGrid.addProperty(
		"description",
		"string",
		"TEXT",
		context.getLocaleValue("de:Beschreibung;en:Description"),
		{
			default: context.getLocaleValue("de:Das könnte der Standardwert sein;en:This could be the default value")
		}
	);
	// In this case only add and remove are allowed (no moving buttons)
    propertyGrid.setGridButtons([{ id: "add" }, { id: "remove" }]);

	// Return the property grid
	return propertyGrid;
});

// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();Download: [GadgetSample_PropertyGrid_Field.js](../assets/samples/GadgetSample_PropertyGrid_Field.js)


### Beispiel mit Speicherung als globale Eigenschaft

In diesem Beispiel sollen die Daten aus dem PropertyGrid als *globale Eigenschaft* gespeichert werden (Manager / Monitoring / Globale Eigenschaften bzw. AdminCenter (AdminTools) / Entwicklung / Properties). Ein derartiges Skript kann dann an allen Stellen verwendet werden, an denen Gadgets möglich sind. Im Beispiel wird eine benutzerdefinierte Aktion an einem Ordner erstellt:

- Typ der Aktion: Gadget
- gadgetConfig={gadgetScript:'GadgetSample_PropertyGrid_Script', gadgetAction:'show'}

Beim Ausführen der Aktion wird das Gadget dargestellt, über die standardmäßig vorhandenen Schaltflächen können z.B. neue Zeilen hinzugefügt oder vorhandene Zeilen gelöscht werden:


![propertygrid-4](../assets/img/propertygrid-4.png)

Abb. 98 - PropertyGrid als benutzerdefinierte Aktion an einem Ordner

Beim Speichern werden die Daten in der vorgesehenen Art und Weise gespeichert:


![propertygrid-5](../assets/img/propertygrid-5.png)

Abb. 99 - Gespeicherte Daten (AdminCenter (AdminTools) / Entwicklung / Properties)

Das Gadget-Skript zur Anzeige des Gadgets könnte wie folgt aussehen:


```javascript
/**
 * Simple example for a property grid gadget
 * Use the store with a script (Example_Save_PropertyGrid)
 * Configure a field at a file type, e.g. propertyGridGadget as gadget
 * Use the following gadgetConfig at the gadget field: {gadgetScript:'GadgetSample_PropertyGrid_Script', gadgetAction:'show'}
 * Create the store script
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register the gadget action
gadgetAPI.registerGadgetAction("show", function() {

	// Create the property grid
	const propertyGrid = gadgetAPI.getPropertyGridInstance();

	// Set the store to the field "propertyGridData", e.g. a not displayed text field at the file type
	propertyGrid.setStore({
            type: "script",
            scriptName: "Example_Save_PropertyGrid",
    });

    // Enable the edit mode
    propertyGrid.setEditable(true);

	// Set the column options, in this case, it is possible to enter the key and value manually
    propertyGrid.setColumnOptions({
        keyLabel: context.getLocaleValue("de:Eigenschaft;en:Property"),
        valueLabel: context.getLocaleValue("de:Wert;en:Value")
    });

	// Return the property grid
	return propertyGrid;
});

// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple example for a property grid gadget
 * Use the store with a script (Example_Save_PropertyGrid)
 * Configure a field at a file type, e.g. propertyGridGadget as gadget
 * Use the following gadgetConfig at the gadget field: {gadgetScript:'GadgetSample_PropertyGrid_Script', gadgetAction:'show'}
 * Create the store script
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register the gadget action
gadgetAPI.registerGadgetAction("show", function() {

	// Create the property grid
	const propertyGrid = gadgetAPI.getPropertyGridInstance();

	// Set the store to the field "propertyGridData", e.g. a not displayed text field at the file type
	propertyGrid.setStore({
            type: "script",
            scriptName: "Example_Save_PropertyGrid",
    });

    // Enable the edit mode
    propertyGrid.setEditable(true);

	// Set the column options, in this case, it is possible to enter the key and value manually
    propertyGrid.setColumnOptions({
        keyLabel: context.getLocaleValue("de:Eigenschaft;en:Property"),
        valueLabel: context.getLocaleValue("de:Wert;en:Value")
    });

	// Return the property grid
	return propertyGrid;
});

// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();Download: [GadgetSample_PropertyGrid_Script.js](../assets/samples/GadgetSample_PropertyGrid_Script.js)

Das Skript zur Speicherung der Daten (und zum Laden von Daten, wenn bereits Daten vorhanden sind) könnte wie folgt aussehen:


```javascript
/**
 * Simple example for saving the property grid values as global property
 * This script is called when loading or saving property grid data with the example "GadgetSample_PropertyGrid_Script"
 * The script is called with an implicit parameter "gentableData" which contains the grid data
 **/

// Define the name and the type for the global property to be used
const propertyName = "myGlobalProperty";
const propertyType = "myGlobalPropertyType"

// Save the data
var prop;
if (typeof gentableData === "string") {
    const data = gentableData;
    prop = context.setOrAddCustomProperty(propertyName, propertyType, data);
}
// Load the data
else {
    prop = context.getCustomProperties(propertyName, propertyType);
    if (prop.size()) {
        prop = prop.first();
        context.returnValue = prop.value;
    }
}
```

/**
 * Simple example for saving the property grid values as global property
 * This script is called when loading or saving property grid data with the example "GadgetSample_PropertyGrid_Script"
 * The script is called with an implicit parameter "gentableData" which contains the grid data
 **/

// Define the name and the type for the global property to be used
const propertyName = "myGlobalProperty";
const propertyType = "myGlobalPropertyType"

// Save the data
var prop;
if (typeof gentableData === "string") {
    const data = gentableData;
    prop = context.setOrAddCustomProperty(propertyName, propertyType, data);
}
// Load the data
else {
    prop = context.getCustomProperties(propertyName, propertyType);
    if (prop.size()) {
        prop = prop.first();
        context.returnValue = prop.value;
    }
}Download: [Example_Save_PropertyGrid.js](../assets/samples/Example_Save_PropertyGrid.js)