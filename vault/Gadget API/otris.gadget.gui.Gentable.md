---
title: "Class: Gentable"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.Gentable.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| viewId | string | optional The viewId of the gadget object (The viewId specifies the destination in the DOM. This destination must exist otherwise the gadget is not rendered.) |

- Since:
Documents 5.0d HF2


##### Example


```
//#import "Gadget_API_Controller"
function gadgetGentableExample() {
    this.execute = function() {
        gentableGadget = new otris.gadget.gui.Gentable();
        // definition name for caching (tomcat cache)
        gentableGadget.setDefinitionName("myFirstGentableDefinition");
        // set custom store options
        gentableGadget.setStore({type : "field", fieldName: gadgetContext.fieldName });
        // define the height of the grid
        gentableGadget.setStyle("height", "200px");
        return gentableGadget.transfer();
    };
};
// gadgetAction which returns the gentable definition
function gentableDefinition() {
    this.execute = function() {
        var xmlFile, xmlString = "";
        try {
            xmlFile = new File("C:\\development\\gadgetGentableDefinitions\\myFirstDef.xml", "r");
            if (!xmlFile.ok()) {
                throw xmlFile.error();
            }
            while (!xmlFile.eof()) {
                xmlString += xmlFile.readLine();
            }
            return xmlString;
        }
        catch (ex) {
            throw ex;
        }
        finally {
            xmlFile && xmlFile.close();
        }
    };
};
```


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


**setDefinition(definition){otris.gadget.gui.Gentable}**
Set the XML gentable definition to be used for the gentable.
**Attention**:

This must only be used in the **gentableDefinition Gadget-Action**.

| Name | Type | Description |
| --- | --- | --- |
| definition | string | xml gentable definition |

- Since:
Documents 6.0.2


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Gentable | Gentable Gadget |


##### Example


```
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
gadgetAPI.registerGadgetAction("gentableDefinition", (gadgetContext) => {
  const gentableGadget = gadgetAPI.getGentableInstance();
  gentableGadget.setDefinition(<xml-definition>); // set definition
  return gentableGadget;
});
```


**setDefinitionName(name)**
Sets the definitionName for the gentable definition. This name is used to cache the

definition. It is NOT used for the gentable registry. The registry only uses the name

defined in the XML definition (`<table_def name="nameUsedForRegistry">...`).

| Name | Type | Description |
| --- | --- | --- |
| name | string | definition name used as a cache key |


**inherited setDialogOptions(options)**
Set dialog options for this gadget.

| Name | Type | Description |
| --- | --- | --- |
| options | DialogOptions | jQuery UI dialog options to be set on dialog. |


**setEditable(editable)**
Enable/disable the edit mode of the grid

| Name | Type | Description |
| --- | --- | --- |
| editable | boolean | set the grid editable or readonly |


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


**setStore(store)**
Define which store type the grid should use.

| Name | Type | Description |
| --- | --- | --- |
| store | object | store configuration Name Type Description type string sort type field or script fieldName string optional field name for the store type field scriptName string optional script name for the store type script (Script parameter gentableData contains the grid data) scriptParams object optional optional script parameter | Name | Type | Description | type | string | sort type field or script | fieldName | string | optional field name for the store type field | scriptName | string | optional script name for the store type script (Script parameter gentableData contains the grid data) | scriptParams | object | optional optional script parameter |
| Name | Type | Description |
| type | string | sort type field or script |
| fieldName | string | optional field name for the store type field |
| scriptName | string | optional script name for the store type script (Script parameter gentableData contains the grid data) |
| scriptParams | object | optional optional script parameter |


##### Example


```
// Using a file field to store the grid data
gadgetGrid.setStore({
    type : "field",
    fieldName: gadgetContext.fieldName + "Data"
});

// Using a script to store the grid data
gadgetGrid.setStore({
    type : "script",
    scriptName: "propertyGridSaveScript",
    scriptParams: {
        myCustomParam : "myParamValue"
    }
});
// The script is called with a parameter `gentableData` which contains the grid data
```


**setStyle(name, value)**
Sets a style attribute of the html container

**Important information for autoHeight**

If autoHeight is configured in the gentable definition, the gadget container must not have a fixed height set via setStyle("height", ...) because

this can lead to a (buggy) scrollbar being displayed.

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