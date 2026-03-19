---
title: "Class: ExtTable"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.ExtTable.html"
---

### Constructors


****
**ATTENTION:** Since Documents 5, this component was marked as deprecated.

In Documents 6, the ExtJS library has been removed. Using this component

in Documents 6 will therefore directly lead to an error.

| Name | Type | Description |
| --- | --- | --- |
| title | string | the title of the Ext table |
| dataGadgetConfig | GadgetConfig | the gadgetConfig for the gadget to be called when the table retrieves its data |

- Deprecated
Use ScriptList with otris.gadget.gui.ScriptListWrapper instead


### Extends

- otris.gadget.gui.Transferable


### Methods


**inherited addClientFunction(clientFn, functionName)**
Adds a JavaScript Function to this Transferable Object. When the Object is transfered to the client the functions added to this Object will be available on the client side.

To achieve better code readability, it is also possible to swap the two parameters (The 1st parameter must be a string and the 2nd of the type function).

eg: `addClientFunction("myFunctionName", function() { ... })`, since: `Documents 5.0i`

| Name | Type | Description |
| --- | --- | --- |
| clientFn | string | function | otris.gadget.util.FunctionUtils.FunctionObject | The function to be added to the clientFunctions of this Object. (Can be a JavaScript Function or an Object returned by otris.gadget.util.FunctionUtils.getFunctionObject) |
| functionName | string | function | optional Set a specific function name. Useful if a source code minifier is used (since: Documents 5.0i) |


**addColumnDef(def, index)**
Add a column definition to the table. A column

definition can contain detailed settings for single

columns.

| Name | Type | Description |
| --- | --- | --- |
| def | ColumnDefinition | column definition object |
| index | number | optional the index of the column to specify the defintion for (if omitted, a new column is appended) |


##### Example


```
// this will set all currently supported
 // column settings
 table.addColumnDef({
     header: "FirstName",
     dataIndex: "firstName",
     minWidth: 100,
     maxWidth: 250
 },2);
```


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


**addHandler(event, handler)**
Adds a handler function to this Ext table which will be fired when the given event is triggered

| Name | Type | Description |
| --- | --- | --- |
| event | string | the event which fires the handler |
| handler | function | the handler function |


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


**onUpdate(handler)**
Adds a handler function to the table which is called each time the table has been edited by the user.

The handler is passed an Array of entries currently in the table

| Name | Type | Description |
| --- | --- | --- |
| handler | function | the handler to call |


**setAddEmptyRow(addEmptyRow)**
Sets whether or not an empty row should be added to the end of the table so that

new entries can be added by simply editing the last empty row. (default: true)

This option only has an effect if the table is editable.

| Name | Type | Description |
| --- | --- | --- |
| addEmptyRow | boolean |  |


**setColumnDefaults(def)**
Set a default column defintion with settings to use for all columns

| Name | Type | Description |
| --- | --- | --- |
| def | ColumnDefinition | column definition object to use as the default |

- See:
addColumnDef


**setColumnStyle(columnStyle)**
Sets a css Style for all columns in the table

| Name | Type | Description |
| --- | --- | --- |
| columnStyle | string | the new columnStyle |


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


**setDataGadgetConfig(dataGadgetConfig)**
Sets the gadgetConfig Object for retrieving the data

| Name | Type | Description |
| --- | --- | --- |
| dataGadgetConfig | GadgetConfig | the new config object |


**setDataIndex(dataIndex)**
Sets the dataIndex of the Ext table

| Name | Type | Description |
| --- | --- | --- |
| dataIndex | Array.<string> | an array containing the names of the properties for the columns. This name is used to retrieve the value for the current cell from the result returned by the dataScript. |


**setDataParams(dataParams)**
Sets additional parameters which should be passed to the dataAction each time the data is retrieved

| Name | Type | Description |
| --- | --- | --- |
| dataParams | object | a JavaScript Object containing each parameter as a property. |


**setDataStoreId(dataStoreId)**
Sets the dataStoreId for the data store of this table. Data of this table can later be aquired on the clientside using this id.

By default the dataStoreId is set to the gadgetId of the gadget.

| Name | Type | Description |
| --- | --- | --- |
| dataStoreId | string | the new dataStoreId |


**inherited setDialogOptions(options)**
Set dialog options for this gadget.

| Name | Type | Description |
| --- | --- | --- |
| options | DialogOptions | jQuery UI dialog options to be set on dialog. |


**setDisableSearch(disableSearch)**
Sets whether or not the search field should be disabled (default: true)

| Name | Type | Description |
| --- | --- | --- |
| disableSearch | boolean |  |


**setEditable(editable)**
Sets whether or not the entries of the table should be editable (default: false)

| Name | Type | Description |
| --- | --- | --- |
| editable | boolean |  |


**setFitColumns(fit)**
Fit column widths to the width of the table? (default: true)

| Name | Type | Description |
| --- | --- | --- |
| fit | boolean | fit column widths to table? |


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


**setHeader(header)**
Sets the headers of the Ext table

| Name | Type | Description |
| --- | --- | --- |
| header | Array.<string> | array of new column headings |


**setHeight(height)**
Sets the height of the Ext table

| Name | Type | Description |
| --- | --- | --- |
| height | number | the height (in Pixels) of the table |


**setHideFirstCol(hideFirstCol)**
| Name | Type | Description |
| --- | --- | --- |
| hideFirstCol | boolean |  |

- See:
setHideFirstColumn


**setHideFirstColumn(hideFirstCol)**
Sets whether or not the first column of the table should be hidden

| Name | Type | Description |
| --- | --- | --- |
| hideFirstCol | boolean |  |


**inherited setNavibarEntry(gadgetConfig, label)**
Add a navibar entry. Define a gadgetConfig that reloads the gadget.
*Only works if the gadget ist displayed in main list view area.*

| Name | Type | Description |
| --- | --- | --- |
| gadgetConfig | object | gadgetConfig |
| label | string | optional label for the navibar entry (defaults to the gadget title) |

- Since:
Documents 5.0e


**setPageSize(pageSize)**
Sets the page size

| Name | Type | Description |
| --- | --- | --- |
| pageSize | number | the new page size (amount of entries displayed on one page) |


**setRemoteSort(remoteSort)**
Sets whether or not the sorting of the table should be handled by the dataScript

| Name | Type | Description |
| --- | --- | --- |
| remoteSort | boolean |  |


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


**setShowBottomToolbar(show)**
Sets whether or not the table should habe a bottom toolbar

| Name | Type | Description |
| --- | --- | --- |
| show | boolean |  |


**setShowCheckboxes(showCheckboxes)**
Sets whether or not a column with a checkbox should be shown on each line so that rows can be selected

| Name | Type | Description |
| --- | --- | --- |
| showCheckboxes | boolean |  |


**setShowTopToolbar(show)**
Sets whether or not the table should habe a top toolbar

| Name | Type | Description |
| --- | --- | --- |
| show | boolean |  |


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


**setWidth(width)**
Sets the width of the Ext table

| Name | Type | Description |
| --- | --- | --- |
| width | number | the width (in Pixels) of the table |


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