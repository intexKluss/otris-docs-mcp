---
title: "Class: TableData"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.TableData.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| title | string | Set the title of the dialog if the module is displayed in a modal dialog |
| viewId | string | optional The viewId of the gadget object (The viewId specifies the destination in the DOM. This destination must exist otherwise the gadget is not rendered.) |

- Since:
Documents 5.0b


##### Example


```
//#import "ScriptList"
//#import "Gadget_API_Controller"
function gadgetUserExit() {
  this.execute = function() {
    // Create the gadget and set the title for the dialog
    var tableData = new otris.gadget.gui.TableData("Datenübernahme (Nordwind-DB)");
    // Add db connection
    var myDB = new DBConnection("odbc", "Nordwind");
    tableData.setDBConnection(myDB);
    tableData.setSqlSelect("SELECT * FROM Kunden");
    // Show the search box
    tableData.setShowSearchBox(true);
    // Add column config
    tableData.setColumns([
      {key: "Firma", label: "Firma", searchMode: "end", searchCaseSensitive: true},
      {key: "Kontaktperson", label: "Kontakt", dataType: "string", searchable: false},
      {key: "Position", label: "Funktion", dataType: "string", searchable: false},
      {key: "Ort", label: "Ort", dataType: "string", searchMode: "start", searchable: false},
      {key: "Land", label: "Land", dataType: "string", searchable: false}
    ]);
    // Set key column name
    tableData.setKeyColumn("Kunden-Code");
    // Set the sql query for the details data
    tableData.setDetailsSql('SELECT * FROM Kunden WHERE "Kunden-Code" IN (?)');
    // Add the mapping between database fields and file fields
    tableData.setMapping([
            {fieldName: "crmName", columnName: "Kontaktperson", valueCallback: function(value) { return value.split(/\s+/)[1]; }},
            {fieldName: "crmFirstName", columnName: "Kontaktperson", valueCallback: function(value) { return value.split(/\s+/)[0]; }},
            {fieldName: "crmAccountnumber", columnName: "Kunden-Code"},
            {fieldName: "crmCompany", columnName: "Firma"},
            {fieldName: "crmPhone", columnName: "Telefon"},
            {fieldName: "crmFax", columnName: "Telefax"}
        ]);
    return tableData.transfer();
  }
}
```


### Extends

- otris.gadget.gui.Transferable


### Methods


**addAction(action)**
Adds a new action to the list. For details see ScriptList API (ScriptExtensions).
**SEE:**[[Script Extensions API/otris.scriptlist.List#addAction|otris.scriptlist.List.html#addAction]]

| Name | Type | Description |
| --- | --- | --- |
| action | object | List action to be addded to the list. |


**inherited addClientFunction(clientFn, functionName)**
Adds a JavaScript Function to this Transferable Object. When the Object is transfered to the client the functions added to this Object will be available on the client side.

To achieve better code readability, it is also possible to swap the two parameters (The 1st parameter must be a string and the 2nd of the type function).

eg: `addClientFunction("myFunctionName", function() { ... })`, since: `Documents 5.0i`

| Name | Type | Description |
| --- | --- | --- |
| clientFn | string | function | otris.gadget.util.FunctionUtils.FunctionObject | The function to be added to the clientFunctions of this Object. (Can be a JavaScript Function or an Object returned by otris.gadget.util.FunctionUtils.getFunctionObject) |
| functionName | string | function | optional Set a specific function name. Useful if a source code minifier is used (since: Documents 5.0i) |


**inherited addContainerButton(buttonConfig){object}**
Adds a container button.

| Name | Type | Description |
| --- | --- | --- |
| buttonConfig | ContainerButtonConfig | button config object |

- Since:
Documents 5.0e


##### Returns:

| Type | Description |
| --- | --- |
| object | buttonConfig |


##### Example


```
// Alternative gadget action button
gadgetForm.addContainerButton({ id: "myCustomSaveButton", label: "Speichern", clickFunction: "saveGadgetData" });
gadgetForm.addClientFunction(function saveGadgetData(event) {
  var gForm = documentsContext.getGadgetContext().getClientObject();
  gForm.submitForm({ gadgetAction: "processForm" }, { showBusyPanel: true });
});
```


**inherited addFullscreenButton(value)**
Adds a button to display the gadget content in fullscreen mode (https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API).

| Name | Type | Description |
| --- | --- | --- |
| value | boolean | optional Enable/disable fullscreen button |

- Since:
Documents 6.0.1


##### Example


```
myGadget.addFullscreenButton(true);
```


**inherited addGadgetStyles(lessCode)**
Append less code
**Attention:** For general style changes (CSS) or adaptations that should be applied globally, adaptation should take place via the Standard-LESS or ClientHeaderCode mechanism.

| Name | Type | Description |
| --- | --- | --- |
| lessCode | string | less code |

- Since:
Documents 5.0h HF2
- See:
otris.gadget.gui.Transferable#setGadgetStyles


**inherited addOnGadgetLoad(onLoadHandlerFunction)**
Adds an onLoad handler for the Gadget. The handler is executed when the gadget is displayed at the client.

| Name | Type | Description |
| --- | --- | --- |
| onLoadHandlerFunction | function | the handler to be executed (must be either a javascript function) |

- Since:
Documents 5.0h HF2
- See:
otris.gadget.gui.Transferable#onGadgetLoad


**inherited addPdfButton(config)**
Adds a button to download the displayed gadget as pdf. The button will show on hover in the left top corner of the gadget.

| Name | Type | Description |
| --- | --- | --- |
| config | object | optional config object Name Type Default Description fileName string content.pdf optional filename of the pdf for download buttonStyle string left: 200px; optional style for the pdf button to be applied to openDocument boolean optional open document after download, default is true (since 5.0e HFII) beforeSend function optional callback to be executed before generating the pdf (since 5.0e HFII) | Name | Type | Default | Description | fileName | string | content.pdf | optional filename of the pdf for download | buttonStyle | string | left: 200px; | optional style for the pdf button to be applied to | openDocument | boolean |  | optional open document after download, default is true (since 5.0e HFII) | beforeSend | function |  | optional callback to be executed before generating the pdf (since 5.0e HFII) |
| Name | Type | Default | Description |
| fileName | string | content.pdf | optional filename of the pdf for download |
| buttonStyle | string | left: 200px; | optional style for the pdf button to be applied to |
| openDocument | boolean |  | optional open document after download, default is true (since 5.0e HFII) |
| beforeSend | function |  | optional callback to be executed before generating the pdf (since 5.0e HFII) |

- Since:
Documents 5.0d


##### Example


```
myGadget.addPdfButton({ beforeSend: function($el) { $el.css("background","red"); }, buttonStyle: "left: 200px;", fileName: "myCustomFilename.pdf" });
```


**inherited addSettings(option)**
Adds a setting (an option that can be defined by the user) to the gadget.

| Name | Type | Description |
| --- | --- | --- |
| option | GadgetSetting | Array.<GadgetSetting> | the setting(s) to add to the gadget. |

- Since:
Documents 5.0a


**inherited getApplicationInfo()**
Return the `ApplicationInfo ` if gadget is called by a *native addin*.

See DocumentsNativeConnector API for details.

- Since:
Documents 5.0f


**inherited getClientLibConfiguration()**
Return the client library configuration.

- Since:
Documents 6.0.0


**inherited getContainerButton(buttonId){object|undefined}**
Returns a buttonConfig by id

| Name | Type | Description |
| --- | --- | --- |
| buttonId | string | button id |

- Since:
Documents 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| object | undefined | buttonConfig |


**inherited getContainerButtons(){Array.<object>}**
Returns an array of container button definitions

- Since:
Documents 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| Array.<object> | buttonConfig[] |


**inherited getContextData(){object}**
Get the current context data object

- Since:
Documents 5.0i


##### Returns:

| Type | Description |
| --- | --- |
| object | contextData |


**inherited getGadgetType(){string|undefined}**
Returns the gadget type (e.g., "Form", "HTML", "Gentable").

It´s the classname of the Transferable-Child-class.

Returns undefined for the base class.

- Since:
Documents 6.2.0


##### Returns:

| Type | Description |
| --- | --- |
| string | undefined | The classname of the Transferable-Child-class or undefined for the base class. |


##### Example


```
const formGadget = require("gadgetAPI.module.gadgetAPI").getFormInstance();
util.out(formGadget.getGadgetType()); // "Form"
```


**inherited onGadgetLoad(onloadHandler)**
Sets an onLoad handler for the Gadget. The handler is executed when the gadget is displayed at the client.

| Name | Type | Description |
| --- | --- | --- |
| onloadHandler | function | string | the handler to be executed (must be either a javascript function or a string representing a function) |

- See:
otris.gadget.gui.Transferable#addOnGadgetLoad


**setBeforeExecuteQuery(beforeExecuteQueryFunction)**
Register a **before execute query callback**.

The function is called with 2 parameters: **sqlStmt** and the **TableData gadget instance**.

If the callback returns a string this string is set and used as sql query.

| Name | Type | Description |
| --- | --- | --- |
| beforeExecuteQueryFunction | function | the escape function |

- Since:
Documents 5.0g HF2


**setColumns(columns)**
Add the column configuration for the list.

| Name | Type | Description |
| --- | --- | --- |
| columns | Array.<TableDataColumn> | array of TableDataColumns |


##### Example


```
tableData.setColumns([
    {key: "Firma", label: "Firma", searchMode: "end", dataType: "string", searchCaseSensitive: true},
    {key: "Kontaktperson", label: "Kontakt", dataType: "string", searchable: false},
    {key: "Position", label: "Funktion", dataType: "string", searchable: false},
    {key: "Ort", label: "Ort", dataType: "string", searchMode: "start", searchable: false},
    {key: "Land", label: "Land", dataType: "string", searchable: false}
]);
```


**inherited setContainerButtons(containerButtonConfigs, options)**
Set the container buttons.

Please note that existing default buttons are removed by this operation.

| Name | Type | Description |
| --- | --- | --- |
| containerButtonConfigs | Array.<ContainerButtonConfig> | optional array of button config objects |
| options | object | optional container button configuration (since: Documents 5.0f) Name Type Description topStyle string optional css styles added to the top button container bottomStyle string optional css styles added to the bottom button container magicButton boolean optional Collapse overlapping buttons in a magic button. (default: true, since 6.0.0) topStyleType "fileviewHeader" | string | object optional set a predefined style type for the top button container (available types: fileviewHeader, see example for details) bottomStyleType string | object optional set a predefined stye type for the bottom button container | Name | Type | Description | topStyle | string | optional css styles added to the top button container | bottomStyle | string | optional css styles added to the bottom button container | magicButton | boolean | optional Collapse overlapping buttons in a magic button. (default: true, since 6.0.0) | topStyleType | "fileviewHeader" | string | object | optional set a predefined style type for the top button container (available types: fileviewHeader, see example for details) | bottomStyleType | string | object | optional set a predefined stye type for the bottom button container |
| Name | Type | Description |
| topStyle | string | optional css styles added to the top button container |
| bottomStyle | string | optional css styles added to the bottom button container |
| magicButton | boolean | optional Collapse overlapping buttons in a magic button. (default: true, since 6.0.0) |
| topStyleType | "fileviewHeader" | string | object | optional set a predefined style type for the top button container (available types: fileviewHeader, see example for details) |
| bottomStyleType | string | object | optional set a predefined stye type for the bottom button container |

- Since:
Documents 5.0e
- See:
otris.gadget.gui.Transferable#addContainerButton


##### Example


```
// activate the "fileviewHeader" style type for the top button container
gadgetForm.setContainerButtons(arrContainerButtons, { topStyleType: "fileviewHeader" });
// or with custom configuration
var topStyleType = {
    type: "fileviewHeader",
    title: "My custom gadget title",
	   titleColor: "green",
    icon: "ionicons:ion-md-pizza",
    backgroundColor: "lightblue",
    subText: [{value: "my additional information", icon: "entypo:pencil"}],
    actionFunction: "myClientFunctionName" (since: `Documents 6.0`, call client function on title or icon click)
};
gadgetForm.setContainerButtons(arrContainerButtons, { topStyleType: topStyleType });
```


**inherited setContextData(contextData)**
Set additional data which is serialized with [JSON.stringify()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and then transferred to the client

On the client side the the context data is accessible with the `GadgetContext`

| Name | Type | Description |
| --- | --- | --- |
| contextData | any | the context data |

- Since:
Documents 5.0c


##### Example


```
var htmlGadget = new otris.gadget.gui.HTML("<h1>Only a simple example</h1>");
var myGadgetData = {
    mySpecialId: 44137,
    myIndexArray: [1,7,6,3,2],
    myTitle: "A special GadgetTitle"
};
htmlGadget.setContextData(myGadgetData);
```


**setDBConnection(dbConnection)**
Sets the db connection which is used to excecute the database queries

Expects an instance of DBConnection class defined in the PortalScripting API

| Name | Type | Description |
| --- | --- | --- |
| dbConnection | DBConnection | database connection |


##### Example


```
// Add db connection
var myDB = new DBConnection("odbc", "Nordwind");
tableData.setDBConnection(myDB);
```


**setDetailsHandler(detailsHandler)**
Set a callback function to handle the details data

| Name | Type | Description |
| --- | --- | --- |
| detailsHandler | function | callback function. The function is called with two parameters: items (array of detail data), mapping (the mapping added with setMapping) |


##### Example


```
tableData.setDetailsHandler(function details(items, mapping) {
    alert(JSON.stringify(items, null, 2));
});
```


**setDetailsSql(detailsSql)**
Set the sql query to fetsch the details for the selected entries.

The query must contain a ? so the values of the defined key column could be added to the query

(The ? ist replaced by a comma seperated list of the key colum values).

| Name | Type | Description |
| --- | --- | --- |
| detailsSql | string | sql select query with WHERE-clause |


##### Example


```
tableData.setDetailsSql('SELECT * FROM Kunden WHERE "Kunden-Code" IN (?)');
```


**inherited setDialogOptions(options)**
Set dialog options for this gadget.

| Name | Type | Description |
| --- | --- | --- |
| options | DialogOptions | jQuery UI dialog options to be set on dialog. |


**inherited setGadgetStyles(lessCode)**
Transfers the given less code to the client and append the resulting css code on the client side.

The complete code is wrapped with the CSS id of the module instance.

The styles are only available for the lifetime of the gadget module.
**Attention:** For general style changes (CSS) or adaptations that should be applied globally, adaptation should take place via the Standard-LESS or ClientHeaderCode mechanism.

| Name | Type | Description |
| --- | --- | --- |
| lessCode | string | less code |

- Since:
Documents 5.0h HF2
- See:
otris.gadget.gui.Transferable#addGadgetStyles


**setKeyColumn(keyColumn)**
Set the key column for the list entries. The value of this column is used as a identifier for the entries.

For example the details query is called with this values

| Name | Type | Description |
| --- | --- | --- |
| keyColumn | string | key column |


##### Example


```
tableData.setKeyColumn("Kunden-Code");
```


**setListTitle(title)**
Sets the title of the list (Display above the list)

| Name | Type | Description |
| --- | --- | --- |
| title | string | title of the list |


**setMapping(mappings)**
Set a mapping to automatically fill file fields of the current map.

For example if the gadget is used a user-exit

| Name | Type | Description |
| --- | --- | --- |
| mappings | Array.<TableDataMapping> | Array of TableDataMappings |


##### Example


```
tableData.setMapping([
      {
      	fieldName: "crmName",
      	columnName: "Kontaktperson",
      	valueCallback: function(value, documentsContext, item, mappingConfig) {
      		return value.split(/\s+/)[1];
      	}
      },
      {
      	fieldName: "crmFirstName",
      	columnName: "Kontaktperson",
      	valueCallback: function(value, documentsContext) {
      		return value.split(/\s+/)[0];
      	}
      },
      {fieldName: "crmAccountnumber", columnName: "Kunden-Code"},
      {fieldName: "crmCompany", columnName: "Firma"},
      {fieldName: "crmPhone", columnName: "Telefon"}
  ]);
```


**setMultiColumnSort(multiColumnSort)**
Enable or disable multi column sorting

| Name | Type | Description |
| --- | --- | --- |
| multiColumnSort | boolean | enable or disable multi column sorting |


**setMultiSelect(multiSelect, buttonLabel, the)**
Enable multi select

| Name | Type | Description |
| --- | --- | --- |
| multiSelect | boolean | Enable or disable multi select |
| buttonLabel | string | label for the button to call the detailsHandler |
| the | function | function to be executed if the button is clicked. See setDetailsHandler(detailsHandler) detailsHandler |


**inherited setNavibarEntry(gadgetConfig, label)**
Add a navibar entry. Define a gadgetConfig that reloads the gadget.
*Only works if the gadget ist displayed in main list view area.*

| Name | Type | Description |
| --- | --- | --- |
| gadgetConfig | object | gadgetConfig |
| label | string | optional label for the navibar entry (defaults to the gadget title) |

- Since:
Documents 5.0e


**inherited setResizeObserver(resizeObserver)**
Add a client function which is executed when the gadget container resizes

**Attention:** The function is called at each resizing. Therefore, the performance

of the function should always be taken into account during implementation.

| Name | Type | Description |
| --- | --- | --- |
| resizeObserver | function | resize observer function gadgetResizeObserver(target, options) Resize observer function. Name Type Description target external:Element the gadget container options object Name Type Description width number current width height number current height rect external:DOMRectReadOnly rect (DOMRectReadOnly) entry external:ResizeObserverEntry optional entry (ResizeObserverEntry) This object is not available in the initial (first) call. | Name | Type | Description | target | external:Element | the gadget container | options | object | Name Type Description width number current width height number current height rect external:DOMRectReadOnly rect (DOMRectReadOnly) entry external:ResizeObserverEntry optional entry (ResizeObserverEntry) This object is not available in the initial (first) call. | Name | Type | Description | width | number | current width | height | number | current height | rect | external:DOMRectReadOnly | rect (DOMRectReadOnly) | entry | external:ResizeObserverEntry | optional entry (ResizeObserverEntry) This object is not available in the initial (first) call. |
| Name | Type | Description |
| target | external:Element | the gadget container |
| options | object | Name Type Description width number current width height number current height rect external:DOMRectReadOnly rect (DOMRectReadOnly) entry external:ResizeObserverEntry optional entry (ResizeObserverEntry) This object is not available in the initial (first) call. | Name | Type | Description | width | number | current width | height | number | current height | rect | external:DOMRectReadOnly | rect (DOMRectReadOnly) | entry | external:ResizeObserverEntry | optional entry (ResizeObserverEntry) This object is not available in the initial (first) call. |
| Name | Type | Description |
| width | number | current width |
| height | number | current height |
| rect | external:DOMRectReadOnly | rect (DOMRectReadOnly) |
| entry | external:ResizeObserverEntry | optional entry (ResizeObserverEntry) This object is not available in the initial (first) call. |

- Since:
Documents 5.0h


**inherited setRoute(routeId)**
Sets a custom route identifier for the browser's location hash navigation.

| Name | Type | Description |
| --- | --- | --- |
| routeId | string | The route identifier. |

- Since:
Documents 6.2.0


**setShowSearchBox(showSearchBox)**
Enable the search box

| Name | Type | Description |
| --- | --- | --- |
| showSearchBox | boolean | show or hide the search box |


**setSqlEscapeFunction(escapeFunction)**
Register your own escape function to prevent sql injection (Warning: Replaces the default implementation).

The function is called with 2 parameters: **searchExpression** and **column** (column definition, not always defined).

The returned value (string) is used in the sql query wrapped by single quotes so the escape function must escape those.

| Name | Type | Description |
| --- | --- | --- |
| escapeFunction | function | the escape function |


**setSqlFilter(sqlFilter)**
Sets a default filter for the select query (WHERE-clause used for the sql query to fetch the list entries).

| Name | Type | Description |
| --- | --- | --- |
| sqlFilter | string | sql WHERE-clause |


##### Example


```
tableData.setSqlFilter("WHERE active = '1'");
```


**setSqlSelect(sqlSelect)**
Set the sql query used to fetch the list entries

Set only the simple query without WHERE- and ORDER-clause.

For default filtering entries use the [[Gadget API/otris.gadget.gui.TableData#setSqlFilter|setSqlFilter(sqlFilter)]] method

| Name | Type | Description |
| --- | --- | --- |
| sqlSelect | string | sql select query |


##### Example


```
tableData.setSqlSelect("SELECT * FROM Kunden");
```


**inherited setStyle(name, value)**
Sets a style attribute of the html container

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the style parameter (i.e. "height") |
| value | string | the value of the style parameter (i.e. "100px") |


**inherited setTitle(title, titleIcon)**
Sets the Title of the gadget

| Name | Type | Description |
| --- | --- | --- |
| title | string | the title of the gadget (will be displayed as the window header on dashboards) |
| titleIcon | string | optional optional icon for the title if gadget displayed as dialog, in common icon syntax (since: Documents 5.0f) |


**inherited store(key, value)**
Stores data that can later be accessed on client side.
**ATTENTION: The store used in this method is global.**

Use [[Gadget API/otris.gadget.gui.Transferable#setContextData|setContextData]] to store data for this gadget instance.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key to store the data |
| value | any | the value, or object that should be stored |

- Deprecated
Yes
- See:
otris.gadget.gui.Transferable#setContextData


**transfer(){string}**
Make this object ready for beeing transferred to the client


##### Returns:

| Type | Description |
| --- | --- |
| string |  |