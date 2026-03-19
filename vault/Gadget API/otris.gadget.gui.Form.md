---
title: "Class: Form"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.Form.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| viewId | string | optional the viewId of the form (The viewId specifies the destination in the DOM. This destination must exist otherwise the gadget is not rendered.) |


### Extends

- otris.gadget.gui.Transferable


### Methods


**addAutoCompleteField(name, label, value, autoCompleteConfig){otris.gadget.gui.Element}**
Adds an autoComplete field to the form.

The script defined in the autoComplete configuration `autoCompleteConfig.scriptName`

is called with a script parameter `query` containing the current value of the autoComplete field.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | object | the predefined value of the autoCompleteField. Type object if autoCompleteConfig.isReference is used. See example for details. |
| autoCompleteConfig | string | object | optional autocomplete config object or only the name of the autoComplete script (string) Name Type Default Description scriptName string the name of the autoComplete script to execute. maxResults number 10 optional max results minQueryChars number 3 optional min query length queryDelay number 0.5 optional delay in seconds autoSelectFirstResult boolean true optional auto select first result scriptParams object optional optional script parameter isReference boolean | "any" optional Use the autocomplete field as reference field. See example for details (since: DOCUMENTS 5.0e) If value is "any", the clear button will show after user input (since DOCUMENTS 6.1.1). | Name | Type | Default | Description | scriptName | string |  | the name of the autoComplete script to execute. | maxResults | number | 10 | optional max results | minQueryChars | number | 3 | optional min query length | queryDelay | number | 0.5 | optional delay in seconds | autoSelectFirstResult | boolean | true | optional auto select first result | scriptParams | object |  | optional optional script parameter | isReference | boolean | "any" |  | optional Use the autocomplete field as reference field. See example for details (since: DOCUMENTS 5.0e) If value is "any", the clear button will show after user input (since DOCUMENTS 6.1.1). |
| Name | Type | Default | Description |
| scriptName | string |  | the name of the autoComplete script to execute. |
| maxResults | number | 10 | optional max results |
| minQueryChars | number | 3 | optional min query length |
| queryDelay | number | 0.5 | optional delay in seconds |
| autoSelectFirstResult | boolean | true | optional auto select first result |
| scriptParams | object |  | optional optional script parameter |
| isReference | boolean | "any" |  | optional Use the autocomplete field as reference field. See example for details (since: DOCUMENTS 5.0e) If value is "any", the clear button will show after user input (since DOCUMENTS 6.1.1). |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


##### Examples


```
var autoCompleteConfig = {
	 scriptName: "autoCompleteScript",
	 maxResults: 10,
	 minQueryChars: 3,
	 queryDelay: 0.5, // in seconds
	 autoSelectFirstResult: true,
	 scriptParams: {
    autoCompleteContextJSON: JSON.stringify({ numberParam: 911, anotherParam: "sample value", booleanFlag: true })
	 }
};
var autoCompleteField = form.addAutoCompleteField("fieldName", "Field label", "Default value", autoCompleteConfig);
```


```
// AutoComplete field as reference field (since: `Documents 5.0e`)
var autocompleteConfig = {
			scriptName: "autocompleteScript",
			isReference: true,
			// ...other params
};
var refObject = { label: "Angus MaxGyver", id: "9347" };
form.addAutoCompleteField("otrGadgetForm_contact", "Ansprechpartner", refObject, autocompleteConfig);
```


```
// Example code for the autocomplete script
// The script parameter "query" always contains the current value of the autoComplete field
var json = [{
  // this is the label of the entry which is displayed in the auto complete list
  value: 'First GmbH',
  // this is optional and can be used to change the value of file or gadget fields when the user selects
  // an entry in the auto complete list (clientside)
  fields: [
    {
      // the technical name of the file or gadget field which should be updated after the user has clicked
      // an entry in the auto complete list
      name: 'otrGadgetForm_contact',
      value: {
        // the technical field value which should be written to the configured field (name) above
        id: "1",
        // the label which should be displayed in the automcomplete field itself after the user has clicked
        // an entry in the auto complete list
        label: "One"
      }
    }
  ]
},
{
  value: 'Third GmbH & Co KG',
  fields: [
    { name: 'otrGadgetForm_contact', value: { id: "3", label: "Three" } }
  ]
}
// ...more entries
];
return JSON.stringify(json);
```


**addButton(name, label, onClickHandler, options){otris.gadget.gui.Element}**
Adds a button to the form with an user defined onClickHandler.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | the (visible) label of the form field |
| onClickHandler | string | the NAME of a JavaScript function which is available at client side (called when the button is clicked) |
| options | object | optional button configuration (since: Documents 5.0f) Name Type Default Description style string optional additional css rules for the button icon string optional button icon, eg. entypo:folder;color:red;. For syntax details see Icon HowTo tooltip string optional button tooltip labelStyle string optional additional css rules for the label of the button labelPadding boolean false optional Set to true to correct the vertical alignment of the button when it is displayed in the same line as an field (since: Documents 5.0h) | Name | Type | Default | Description | style | string |  | optional additional css rules for the button | icon | string |  | optional button icon, eg. entypo:folder;color:red;. For syntax details see Icon HowTo | tooltip | string |  | optional button tooltip | labelStyle | string |  | optional additional css rules for the label of the button | labelPadding | boolean | false | optional Set to true to correct the vertical alignment of the button when it is displayed in the same line as an field (since: Documents 5.0h) |
| Name | Type | Default | Description |
| style | string |  | optional additional css rules for the button |
| icon | string |  | optional button icon, eg. entypo:folder;color:red;. For syntax details see Icon HowTo |
| tooltip | string |  | optional button tooltip |
| labelStyle | string |  | optional additional css rules for the label of the button |
| labelPadding | boolean | false | optional Set to true to correct the vertical alignment of the button when it is displayed in the same line as an field (since: Documents 5.0h) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addCheckbox(name, label, value, options){otris.gadget.gui.Element}**
Adds a checkbox to the form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | the (visible) label of the form field |
| value | string | the predefined value of the form field |
| options | boolean | object | optional checkbox options (if a boolean given it is intepreted as value for the checked flag) Name Type Default Description checked boolean false optional the initial check state verticalCentered boolean false optional use this flag to vertically center a checkbox with a another inline field element (since DOCUMENTS 5.0g HF2) | Name | Type | Default | Description | checked | boolean | false | optional the initial check state | verticalCentered | boolean | false | optional use this flag to vertically center a checkbox with a another inline field element (since DOCUMENTS 5.0g HF2) |
| Name | Type | Default | Description |
| checked | boolean | false | optional the initial check state |
| verticalCentered | boolean | false | optional use this flag to vertically center a checkbox with a another inline field element (since DOCUMENTS 5.0g HF2) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addCheckboxList(name, label, selectableValues){otris.gadget.gui.SelectableElement}**
Adds a CheckboxList (a list of checkboxes where multiple checkboxes can be checked) to the form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| selectableValues | Array | the predefined values that can be selected (an array of arrays containing values and labels, e.g.: [['value1', 'label1'],['value2', 'label2']]) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.SelectableElement | element representing the form field added which can be further manipulated before transfering the form |


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


**addCustomField(name, label, data, loader){otris.gadget.gui.Element}**
Adds a custom Component as form field to the form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | the (visible) label of the form field |
| data | any | the data that the loader function will get as its argument |
| loader | function | the function that will be called when the component is loaded into the form |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addDateField(name, label, value, addTime){otris.gadget.gui.Element}**
Adds a date field with a date picker to the Form

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | the technical name of the form field |
| label | string | boolean |  | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | Date |  | the predefined value of the form field |
| addTime | boolean | true | optional add hours and minutes |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addDependency(controller, condition, value, fields)**
Adds a dependency describing a relation between form fields

| Name | Type | Description |
| --- | --- | --- |
| controller | string | the controller form field which affects other form fields |
| condition | string | the condition to be tested ("==", "!=", "any", "non-any") |
| value | string | the value to test the controller for |
| fields | Array | the fields that are affected if the condition yields true |


**addDoubleSelectList(name, label, selectableValues){otris.gadget.gui.SelectableElement}**
Adds a double Select field to the Form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| selectableValues | Array | the predefined values that can be selected (an array of arrays containing values and labels, e.g.: [['value1', 'label1'],['value2', 'label2']]) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.SelectableElement | element representing the form field added which can be further manipulated before transfering the form |


**addDropzone(name, label, dropzoneValues, dropzoneConfig){otris.gadget.gui.Element}**
Adds a dropzone to the Form. The uploaded files could be accessed through the

portal script method `context.getTempPathByToken(accessToken)`.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | the (visible) label of the form field |
| dropzoneValues | DropzoneValue | Array.<DropzoneValue> | optional list of the uploaded files (see: DropzoneValue) |
| dropzoneConfig | object | optional the dropzone configuration Name Type Default Description multiple boolean true optional allow multiple uploads height number optional height in pixel style string optional additional css styles (e.g.: background-color:#333;color:#fff;) icon string ionicons:ion-md-cloud-upload optional icon for the dropzone label string | boolean Dropzone optional label for the dropzone (if set to false the label-tag will not be generated) labelStyle string optional additional css styles for the label (e.g.: font-size:32px;font-weight:bold;) extensions Array.<string> optional allowed extensions maxSize number optional max file size (in bytes) listPosition 'top' | 'bottom' top optional position of the list of the uploaded files onFinish string optional name of a client function that will be called after a successful upload. called once for multiple selection. (since: Documents 5.0g HF2) onClickEntry string optional name of a client function that will be called if a list entry is clicked in readonly mode. (since: Documents 5.0i) | Name | Type | Default | Description | multiple | boolean | true | optional allow multiple uploads | height | number |  | optional height in pixel | style | string |  | optional additional css styles (e.g.: background-color:#333;color:#fff;) | icon | string | ionicons:ion-md-cloud-upload | optional icon for the dropzone | label | string | boolean | Dropzone | optional label for the dropzone (if set to false the label-tag will not be generated) | labelStyle | string |  | optional additional css styles for the label (e.g.: font-size:32px;font-weight:bold;) | extensions | Array.<string> |  | optional allowed extensions | maxSize | number |  | optional max file size (in bytes) | listPosition | 'top' | 'bottom' | top | optional position of the list of the uploaded files | onFinish | string |  | optional name of a client function that will be called after a successful upload. called once for multiple selection. (since: Documents 5.0g HF2) | onClickEntry | string |  | optional name of a client function that will be called if a list entry is clicked in readonly mode. (since: Documents 5.0i) |
| Name | Type | Default | Description |
| multiple | boolean | true | optional allow multiple uploads |
| height | number |  | optional height in pixel |
| style | string |  | optional additional css styles (e.g.: background-color:#333;color:#fff;) |
| icon | string | ionicons:ion-md-cloud-upload | optional icon for the dropzone |
| label | string | boolean | Dropzone | optional label for the dropzone (if set to false the label-tag will not be generated) |
| labelStyle | string |  | optional additional css styles for the label (e.g.: font-size:32px;font-weight:bold;) |
| extensions | Array.<string> |  | optional allowed extensions |
| maxSize | number |  | optional max file size (in bytes) |
| listPosition | 'top' | 'bottom' | top | optional position of the list of the uploaded files |
| onFinish | string |  | optional name of a client function that will be called after a successful upload. called once for multiple selection. (since: Documents 5.0g HF2) |
| onClickEntry | string |  | optional name of a client function that will be called if a list entry is clicked in readonly mode. (since: Documents 5.0i) |

- Since:
Documents 5.0d


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


##### Example


```
var myDropzoneConfig = {
       multiple: false,
       height: 120,
       icon: "ionicons:ion-md-cloud-upload;font-size:64px;",
       label: "UploadArea",
       extensions: ["jpg", "jpeg", "png", "gif"], // only allow image formats
       maxSize: 2000000 // restrict filesize to a maximum of 2MB
};
var myDropzoneElement = form.addDropzone("myDropzone", "My dropzone", null, myDropzoneConfig);
```


**addEMailField(name, label, value){otris.gadget.gui.Element}**
Adds an E-Mail field to the Form (can only contain valid e-mail adresses)

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | the predefined value of the form field |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addExtComponent(name, label, extComponent)**
Adds an ext Component as form field to the form

**ATTENTION:** Since Documents 5, this function was marked as deprecated.

In Documents 6, the ExtJS library has been removed. Using this function

in Documents 6 will therefore directly lead to an error.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | the (visible) label of the form field |
| extComponent | otris.gadget.gui.ExtComponent | the extComponent |

- Deprecated
Yes


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


**addGadgetActionButton(name, label, gadgetConfig, options){otris.gadget.gui.Element}**
Adds a button to the form which will call another gadget

Please note that since version **2.3.3** the signature of this function has changed. The old signature
`addGadgetActionButton(name, label, gadgetConfig, newWindow, windowOptions)`

is still supported but should not be used anymore.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | the (visible) label of the form field |
| gadgetConfig | object | optional the gadget config for the gadget to be called when the button is pressed |
| options | object | optional additional options Name Type Default Description newWindow boolean optional opens the gadget in a new dialog windowOptions object optional the options to configure the appearance of the new dialog { title: "Dialog-Title" } validateForm boolean true optional whether the actionButton validates the form showBusyPanel boolean false optional Lock the target gadget container after clicking the button. (since: Documents 5.0e) style string optional additional css rules for the button (since: Documents 5.0f) icon string optional button icon, eg. entypo:folder;color:red;. For syntax details see Icon HowTo (since: Documents 5.0f) tooltip string optional button tooltip (since: Documents 5.0f) labelStyle string optional additional css rules for the label of the button (since: Documents 5.0f) disabled boolean false optional labelPadding boolean false optional Set to true to correct the vertical alignment of the button when it is displayed in the same line as an field (since: Documents 5.0h) | Name | Type | Default | Description | newWindow | boolean |  | optional opens the gadget in a new dialog | windowOptions | object |  | optional the options to configure the appearance of the new dialog { title: "Dialog-Title" } | validateForm | boolean | true | optional whether the actionButton validates the form | showBusyPanel | boolean | false | optional Lock the target gadget container after clicking the button. (since: Documents 5.0e) | style | string |  | optional additional css rules for the button (since: Documents 5.0f) | icon | string |  | optional button icon, eg. entypo:folder;color:red;. For syntax details see Icon HowTo (since: Documents 5.0f) | tooltip | string |  | optional button tooltip (since: Documents 5.0f) | labelStyle | string |  | optional additional css rules for the label of the button (since: Documents 5.0f) | disabled | boolean | false | optional | labelPadding | boolean | false | optional Set to true to correct the vertical alignment of the button when it is displayed in the same line as an field (since: Documents 5.0h) |
| Name | Type | Default | Description |
| newWindow | boolean |  | optional opens the gadget in a new dialog |
| windowOptions | object |  | optional the options to configure the appearance of the new dialog { title: "Dialog-Title" } |
| validateForm | boolean | true | optional whether the actionButton validates the form |
| showBusyPanel | boolean | false | optional Lock the target gadget container after clicking the button. (since: Documents 5.0e) |
| style | string |  | optional additional css rules for the button (since: Documents 5.0f) |
| icon | string |  | optional button icon, eg. entypo:folder;color:red;. For syntax details see Icon HowTo (since: Documents 5.0f) |
| tooltip | string |  | optional button tooltip (since: Documents 5.0f) |
| labelStyle | string |  | optional additional css rules for the label of the button (since: Documents 5.0f) |
| disabled | boolean | false | optional |
| labelPadding | boolean | false | optional Set to true to correct the vertical alignment of the button when it is displayed in the same line as an field (since: Documents 5.0h) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


##### Example


```
form.addGadgetActionButton('customerTableButton','Customers',{gadgetScript: 'CustomerGadgets', gadgetAction: 'showCustomerTable', myFilter: 'Peach*'});

 //In the called gadget the parameters in the configuration can be accessed by
 gadgetContext.gadgetParams.myFilter
 //or
 gadgetContext.gadgetParams['myFilter'];

 //The values of the form fields of the form can be accessed by
 $FORM.myFormField
 //or
 $FORM['myFormField']
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


**addHeadLine(value, options){otris.gadget.gui.Element}**
Adds a html headline to the form

| Name | Type | Description |
| --- | --- | --- |
| value | string | the text of the headline |
| options | object | number | options object or only the importance option as number (setting option as number leads to setting allowHtml to false) Name Type Default Description name string optional name to identify the field* importance number 1 optional set the importance of the headline (1-6) allowHtml boolean true optional allow html code for the content of the headline (since: Documents 5.0g) sanitize boolean true optional By default the html code is sanitized before added to the DOM to prevent XSS attacks. With this flag you can disable this mechanism. (since: Documents 5.0g) | Name | Type | Default | Description | name | string |  | optional name to identify the field* | importance | number | 1 | optional set the importance of the headline (1-6) | allowHtml | boolean | true | optional allow html code for the content of the headline (since: Documents 5.0g) | sanitize | boolean | true | optional By default the html code is sanitized before added to the DOM to prevent XSS attacks. With this flag you can disable this mechanism. (since: Documents 5.0g) |
| Name | Type | Default | Description |
| name | string |  | optional name to identify the field* |
| importance | number | 1 | optional set the importance of the headline (1-6) |
| allowHtml | boolean | true | optional allow html code for the content of the headline (since: Documents 5.0g) |
| sanitize | boolean | true | optional By default the html code is sanitized before added to the DOM to prevent XSS attacks. With this flag you can disable this mechanism. (since: Documents 5.0g) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addHiddenField(name, value){otris.gadget.gui.Element}**
Adds a hidden form field to the form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the field |
| value | string | the value of the form field |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addHorizontalRuler(name, label, value, options){otris.gadget.gui.Element}**
Adds a horizontal rule to the form

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | string |  | the technical name of the ruler |
| label | string |  | the (visible) label of the ruler |
| value | boolean | true | optional state of the ruler (default is open) |
| options | object |  | optional additional ruler settings Name Type Default Description size string default optional the view type changes the rendering of the ruler (possible values: default, small) iconOpened string entypo:chevron-down optional icon for the open state iconClosed string entypo:chevron-right optional icon for the closed state labelTemplate string optional Handlebars template for the ruler label. In the template the objects field and model (labelModel) are available (since DOCUMENTS 5.0h) labelModel string optional data which is provided as model in the handlebars template (since DOCUMENTS 5.0h) tooltip string optional tooltip to be displayed when hovering the ruler beforeStateChange function optional callback called before the ruler state changes (returning false in this callback prevents the state change). beforeRulerStateChange(name, isOpen, documentsContext) Name Type Description name string name of the horizontal ruler isOpen boolean true if the horizontal ruler is open documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn afterStateChange function optional callback called after the ruler state changes. afterRulerStateChange(name, isOpen, documentsContext) Name Type Description name string name of the horizontal ruler isOpen boolean true if the horizontal ruler is open documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn | Name | Type | Default | Description | size | string | default | optional the view type changes the rendering of the ruler (possible values: default, small) | iconOpened | string | entypo:chevron-down | optional icon for the open state | iconClosed | string | entypo:chevron-right | optional icon for the closed state | labelTemplate | string |  | optional Handlebars template for the ruler label. In the template the objects field and model (labelModel) are available (since DOCUMENTS 5.0h) | labelModel | string |  | optional data which is provided as model in the handlebars template (since DOCUMENTS 5.0h) | tooltip | string |  | optional tooltip to be displayed when hovering the ruler | beforeStateChange | function |  | optional callback called before the ruler state changes (returning false in this callback prevents the state change). beforeRulerStateChange(name, isOpen, documentsContext) Name Type Description name string name of the horizontal ruler isOpen boolean true if the horizontal ruler is open documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn | Name | Type | Description | name | string | name of the horizontal ruler | isOpen | boolean | true if the horizontal ruler is open | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn | afterStateChange | function |  | optional callback called after the ruler state changes. afterRulerStateChange(name, isOpen, documentsContext) Name Type Description name string name of the horizontal ruler isOpen boolean true if the horizontal ruler is open documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn | Name | Type | Description | name | string | name of the horizontal ruler | isOpen | boolean | true if the horizontal ruler is open | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| Name | Type | Default | Description |
| size | string | default | optional the view type changes the rendering of the ruler (possible values: default, small) |
| iconOpened | string | entypo:chevron-down | optional icon for the open state |
| iconClosed | string | entypo:chevron-right | optional icon for the closed state |
| labelTemplate | string |  | optional Handlebars template for the ruler label. In the template the objects field and model (labelModel) are available (since DOCUMENTS 5.0h) |
| labelModel | string |  | optional data which is provided as model in the handlebars template (since DOCUMENTS 5.0h) |
| tooltip | string |  | optional tooltip to be displayed when hovering the ruler |
| beforeStateChange | function |  | optional callback called before the ruler state changes (returning false in this callback prevents the state change). beforeRulerStateChange(name, isOpen, documentsContext) Name Type Description name string name of the horizontal ruler isOpen boolean true if the horizontal ruler is open documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn | Name | Type | Description | name | string | name of the horizontal ruler | isOpen | boolean | true if the horizontal ruler is open | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| Name | Type | Description |
| name | string | name of the horizontal ruler |
| isOpen | boolean | true if the horizontal ruler is open |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| afterStateChange | function |  | optional callback called after the ruler state changes. afterRulerStateChange(name, isOpen, documentsContext) Name Type Description name string name of the horizontal ruler isOpen boolean true if the horizontal ruler is open documentsContext documents.sdk.DocumentsContext the DocumentsContext passed to fn | Name | Type | Description | name | string | name of the horizontal ruler | isOpen | boolean | true if the horizontal ruler is open | documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |
| Name | Type | Description |
| name | string | name of the horizontal ruler |
| isOpen | boolean | true if the horizontal ruler is open |
| documentsContext | documents.sdk.DocumentsContext | the DocumentsContext passed to fn |

- Since:
Documents 5.0f


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addHtml(htmlCode, options){otris.gadget.gui.Element}**
Adds html content to the form

| Name | Type | Description |
| --- | --- | --- |
| htmlCode | string | Array.<string> | the html code (if multiple strings are passed, these are combined into one) |
| options | object | optional Name Type Default Description name string optional name to identify the field model object optional If model given the htmlCode is treated as handlebars template string and executed with this model (During transportation the model is serailized with JSON.stringify()). labelPadding boolean false optional Add top padding with height of the label of a form field sanitize boolean true optional By default the html code is sanitized before added to the DOM to prevent XSS attacks. With this flag you can disable this mechanism. | Name | Type | Default | Description | name | string |  | optional name to identify the field | model | object |  | optional If model given the htmlCode is treated as handlebars template string and executed with this model (During transportation the model is serailized with JSON.stringify()). | labelPadding | boolean | false | optional Add top padding with height of the label of a form field | sanitize | boolean | true | optional By default the html code is sanitized before added to the DOM to prevent XSS attacks. With this flag you can disable this mechanism. |
| Name | Type | Default | Description |
| name | string |  | optional name to identify the field |
| model | object |  | optional If model given the htmlCode is treated as handlebars template string and executed with this model (During transportation the model is serailized with JSON.stringify()). |
| labelPadding | boolean | false | optional Add top padding with height of the label of a form field |
| sanitize | boolean | true | optional By default the html code is sanitized before added to the DOM to prevent XSS attacks. With this flag you can disable this mechanism. |

- Since:
Documents 5.0g
- See:
addPlainText()


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addHtmlField(name, label, value, editorConfig){otris.gadget.gui.Element}**
Adds a html field to the Form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | optional the predefined value of the form field |
| editorConfig | object | optional editor configuration Name Type Description quill object optional configuration for the WYSIWYG editor (https://quilljs.com/) | Name | Type | Description | quill | object | optional configuration for the WYSIWYG editor (https://quilljs.com/) |
| Name | Type | Description |
| quill | object | optional configuration for the WYSIWYG editor (https://quilljs.com/) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addImage(id, src, onClickHandler){otris.gadget.gui.Element}**
Adds an image to the form

| Name | Type | Description |
| --- | --- | --- |
| id | string | the technical name of the image |
| src | string | the path to the image file |
| onClickHandler | string | the NAME of a JavaScript function which is available at client side (called when the image is clicked) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addNumberField(name, label, value){otris.gadget.gui.Element}**
Adds a number field to the Form (a text field which can only contain numbers)

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | the predefined value of the form field |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | The representing the form field added which can be further manipulated before transfering the form |


**inherited addOnGadgetLoad(onLoadHandlerFunction)**
Adds an onLoad handler for the Gadget. The handler is executed when the gadget is displayed at the client.

| Name | Type | Description |
| --- | --- | --- |
| onLoadHandlerFunction | function | the handler to be executed (must be either a javascript function) |

- Since:
Documents 5.0h HF2
- See:
otris.gadget.gui.Transferable#onGadgetLoad


**addPasswordField(name, label, value){otris.gadget.gui.Element}**
Adds a password field to the Form (the content will be hidden with asterisks while typing)

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | the predefined value of the form field |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


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


**addPlainText(text, options){otris.gadget.gui.Element}**
Adds a box with plain text to the form.

| Name | Type | Description |
| --- | --- | --- |
| text | string | the text content of the div |
| options | object | Name Type Default Description name string optional name to identify the field labelPadding boolean true optional Add top padding with height of the label of a form field | Name | Type | Default | Description | name | string |  | optional name to identify the field | labelPadding | boolean | true | optional Add top padding with height of the label of a form field |
| Name | Type | Default | Description |
| name | string |  | optional name to identify the field |
| labelPadding | boolean | true | optional Add top padding with height of the label of a form field |

- Since:
Documents 5.0g
- See:
addHtml()


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addRadiobuttonList(name, label, selectableValues){otris.gadget.gui.SelectableElement}**
Adds a radioButtonList (a list of radio buttons where only one  can be checked) to the form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| selectableValues | Array | the predefined values that can be selected (an array of arrays containing values and labels, e.g.: [['value1', 'label1'],['value2', 'label2']]) |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.SelectableElement | element representing the form field added which can be further manipulated before transfering the form |


**inherited addSettings(option)**
Adds a setting (an option that can be defined by the user) to the gadget.

| Name | Type | Description |
| --- | --- | --- |
| option | GadgetSetting | Array.<GadgetSetting> | the setting(s) to add to the gadget. |

- Since:
Documents 5.0a


**addSingleSelectList(name, label, selectableValues, multiple, size){otris.gadget.gui.SelectableElement}**
Adds an Select field to the Form. The SingleSelectList is an SelectableElement please see <otris.gadget.gui.SelectableElement> for more information.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| selectableValues | Array.<Array.<string>> | the predefined values that can be selected (an array of arrays containing values and labels, e.g.: [['value1', 'label1'],['value2', 'label2']]) |
| multiple | boolean | optional Enable multiple selection |
| size | number | optional the number of entries that are displayed by this select list without scrolling or using the dropdown menu |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.SelectableElement | element representing the form field added which can be further manipulated before transfering the form |


**addText(value){otris.gadget.gui.Element}**
Adds a html div containing text to the form.
**Notice:** This method can also be used to embed HTML code in a form. To prevent possible XSS, values may have to be masked.
**Deprecation:** Please use the more specific methods [[Gadget API/otris.gadget.gui.Form#addPlainText|addPlainText()]] or [[Gadget API/otris.gadget.gui.Form#addHtml|addHtml()]].

| Name | Type | Description |
| --- | --- | --- |
| value | string | the html content of the div |

- Deprecated
since Documents 5.0g
- See:
addPlainText() addHtml()


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addTextArea(name, label, value){otris.gadget.gui.Element}**
Adds a text area field to the Form

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | the predefined value of the form field |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addTextField(name, label, value, options){otris.gadget.gui.Element}**
Adds a text field to the Form (can contain any text)

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | the predefined value of the form field |
| options | object | optional text field options (since DOCUMENTS 5.0g HF2) Name Type Description button TextFieldButton optional button configuration | Name | Type | Description | button | TextFieldButton | optional button configuration |
| Name | Type | Description |
| button | TextFieldButton | optional button configuration |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addTranslationField(name, label, value, options){otris.gadget.gui.Element}**
Adds a translation field to the Form (can contain any text)

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | the predefined value of the form field |
| options | object | Name Type Description type string type of the field, available are input/text, textarea and htmlField | Name | Type | Description | type | string | type of the field, available are input/text, textarea and htmlField |
| Name | Type | Description |
| type | string | type of the field, available are input/text, textarea and htmlField |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**addURLField(name, label, value){otris.gadget.gui.Element}**
Adds an URL field to the Form (can only contain valid URLs)

| Name | Type | Description |
| --- | --- | --- |
| name | string | the technical name of the form field |
| label | string | boolean | the (visible) label of the form field (if set to false the label-tag will not be generated) |
| value | string | the predefined value of the form field |


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field added which can be further manipulated before transfering the form |


**inherited getApplicationInfo()**
Return the `ApplicationInfo ` if gadget is called by a *native addin*.

See DocumentsNativeConnector API for details.

- Since:
Documents 5.0f


**getChangedField(){string|undefined}**
Returns the name of the field that caused the reload triggered by [[Gadget API/otris.gadget.gui.Element#setReloadOnChange|otris.gadget.gui.Element#setReloadOnChange]]

- Since:
Documents 5.0f
- See:
{otris.gadget.gui.Element#setReloadOnChange}


##### Returns:

| Type | Description |
| --- | --- |
| string | undefined | name of the form element |


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


**getElement(name){otris.gadget.gui.Element}**
Get a form element by name or id.

| Name | Type | Description |
| --- | --- | --- |
| name | string | name or id of a existing form element |

- Since:
Documents 5.0h


##### Returns:

| Type | Description |
| --- | --- |
| otris.gadget.gui.Element | element representing the form field |


**getFormFieldNames(){Array.<string>}**
Returns the technical name of form fields in the form gadget.

Note: Some special fields (e.g. ContainerButtons, PdfButton, FullscreenButton) are not included.

- Since:
Documents 6.2.0


##### Returns:

| Type | Description |
| --- | --- |
| Array.<string> | Array of technical field names (excluding certain special fields). |


**getFormFields(){Array.<otris.gadget.gui.Element>}**
Returns an array of form fields in the form gadget.

Note: Some special fields (e.g. ContainerButtons, PdfButton, FullscreenButton) are not included.

- Since:
Documents 6.2.0


##### Returns:

| Type | Description |
| --- | --- |
| Array.<otris.gadget.gui.Element> | Array of form fields (excluding certain special fields). |


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


**setAutoOverrideDefaults(options)**
Sets the autoOverrideDefaults flag.

Replaces the values of the elements if a fitting value exists in gadgetContext.formParams

| Name | Type | Description |
| --- | --- | --- |
| options | boolean | object | boolean value whether to override the elements values OR a configuration object (since: Documents 5.0f HF2) Name Type Default Description active boolean true optional the boolean value whether to override the elements values clearUnsubmitted boolean true optional clear the value of a field if it is not present in the submitted form data (only relevant if active is set to true) | Name | Type | Default | Description | active | boolean | true | optional the boolean value whether to override the elements values | clearUnsubmitted | boolean | true | optional clear the value of a field if it is not present in the submitted form data (only relevant if active is set to true) |
| Name | Type | Default | Description |
| active | boolean | true | optional the boolean value whether to override the elements values |
| clearUnsubmitted | boolean | true | optional clear the value of a field if it is not present in the submitted form data (only relevant if active is set to true) |


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


**setDialogDefaultMargin(active)**
Sets the dafault margin of a form-gadget-dialog to the same margin as other documents-form-dialogs.

| Name | Type | Description |
| --- | --- | --- |
| active | boolean | boolean value whether to match the margin equal to other documents-form-dialogs. defaults to false |


**inherited setDialogOptions(options)**
Set dialog options for this gadget.

| Name | Type | Description |
| --- | --- | --- |
| options | DialogOptions | jQuery UI dialog options to be set on dialog. |


**setFocusField(type, fieldName)**
Focus a specific field on load.

| Name | Type | Description |
| --- | --- | --- |
| type | "first" | "current" | "next" | "name" |  |
| fieldName | string | optional name of an existing field (only used with type name) |

- Since:
Documents 5.0f


**setFormStyle(name, value)**
Sets a style attribute of the html container containing the form elements

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the style parameter (i.e. "height") |
| value | string | the value of the style parameter (i.e. "100px") |

- Since:
Documents 5.0f


**setFormValidator(validator)**
Applies a validator to the entire form

A [[Documents Drop SDK/global#validatorFunction|validatorFunction]] is used to validate the content of the input element

The form can only be submitted if all validators are successful

| Name | Type | Description |
| --- | --- | --- |
| validator | function | function to validate an input field validatorFunction(field, gadgetForm, options){validationResult} The validator function The field object contains a single field if this validator function is used by otris.gadget.gui.Element#setValidator The field object contains multiple fields if this validator function is used by otris.gadget.gui.Form#setFormValidator Name Type Description field GadgetFormField | object single input field information or object containing mutliple field informations gadgetForm documents.sdk.gadget.GadgetForm reference to the documents.sdk.gadget.GadgetForm options object options Name Type Description documentsContext documents.sdk.DocumentsContext reference to the documents.sdk.DocumentsContext Returns: Type Description validationResult validation result should be generated via documents.sdk.gadget.GadgetForm | Name | Type | Description | field | GadgetFormField | object | single input field information or object containing mutliple field informations | gadgetForm | documents.sdk.gadget.GadgetForm | reference to the documents.sdk.gadget.GadgetForm | options | object | options Name Type Description documentsContext documents.sdk.DocumentsContext reference to the documents.sdk.DocumentsContext | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | reference to the documents.sdk.DocumentsContext | Type | Description | validationResult | validation result should be generated via documents.sdk.gadget.GadgetForm |
| Name | Type | Description |
| field | GadgetFormField | object | single input field information or object containing mutliple field informations |
| gadgetForm | documents.sdk.gadget.GadgetForm | reference to the documents.sdk.gadget.GadgetForm |
| options | object | options Name Type Description documentsContext documents.sdk.DocumentsContext reference to the documents.sdk.DocumentsContext | Name | Type | Description | documentsContext | documents.sdk.DocumentsContext | reference to the documents.sdk.DocumentsContext |
| Name | Type | Description |
| documentsContext | documents.sdk.DocumentsContext | reference to the documents.sdk.DocumentsContext |
| Type | Description |
| validationResult | validation result should be generated via documents.sdk.gadget.GadgetForm |


##### Example


```
//validates whether two company fields of the form have the same value
form.setFormValidator(function validateCompaniesEqual(field, gadgetForm, options){
     //this form has two input elements with the ids company1 and company2
     var successful = field.company1.value === field.company2.value;
     return gadgetForm.createFormValidatorResult(successful, "Company1 and Company2 must be equal!");
});
```


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