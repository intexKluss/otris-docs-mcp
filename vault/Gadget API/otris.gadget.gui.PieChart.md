---
title: "Class: PieChart"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.PieChart.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| dataGadgetConfig | GadgetConfig | the data gadget config |

- Deprecated
Use otris.gadget.gui.Chart instead


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


**addHandler(event, handler)**
Adds a handler function to this PieChart which will be fired when the given event is triggered

The Piechart object supports the following events:

- itemmouseover
- itemmouseout
- itemmousedown
- itemmouseup


 An "item" object is passed to the function registered to any of these events.
 The stored data of this item is available in the function through: "item.storeItem.data".
        | Name | Type | Description |
| --- | --- | --- |
| event | string | the event which fires the handler |
| handler | function | the handler function |


##### Example


```
pie.addHandler("itemmousedown", function(item){
         var itemData = item.storeItem.data;
         alert(itemData.name + ": " + itemData.value);
 });
```


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


**setDataAction(dataAction)**
Sets the name of the gadgetAction to be called for retrieveing the Data for the PieChart

| Name | Type | Description |
| --- | --- | --- |
| dataAction | string | name of the gadgetAction |

- Deprecated
please use setDataGadgetConfig


**setDataGadgetConfig(dataGadgetConfig)**
Sets the gadgetConfig Object for retrieving the data

| Name | Type | Description |
| --- | --- | --- |
| dataGadgetConfig | GadgetConfig | the new config object |


**setDataParams(dataParams)**
Function: setDataParams

| Name | Type | Description |
| --- | --- | --- |
| dataParams | object | a JavaScript Object containing each parameter as a property. |

- Deprecated
please use setDataGadgetConfig


**setDataScript(dataScript)**
Sets the dataScript to use for this PieChart

| Name | Type | Description |
| --- | --- | --- |
| dataScript | string | name of the dataScript |

- Deprecated
please use setDataGadgetConfig


**inherited setDialogOptions(options)**
Set dialog options for this gadget.

| Name | Type | Description |
| --- | --- | --- |
| options | DialogOptions | jQuery UI dialog options to be set on dialog. |


**setGadgetHeight(height)**
Sets the height of the PieChart. The PieChart *must* have a given height. Its height can not be determined dynamicly.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| height | number | 500 | the new height in pixels |


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


**setGadgetWidth(width)**
Sets the Width of the PieChart. The PieChart *must* have a given width. Its width can not be determined dynamicly.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| width | number | 500 | the new width in pixels |


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


**setTooltipRenderer(fn)**
Sets the TooltipRenderer function for this pie chart

| Name | Type | Description |
| --- | --- | --- |
| fn | function | the function which will be called to render the tooltip of the differend sections of this pie chart |


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