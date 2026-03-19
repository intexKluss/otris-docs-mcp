---
title: "Class: DocumentsContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.DocumentsContext.html"
---

### Constructors


****
The universal interface for user-exits, gentable and gadgets. It includes opening of dialogs and navigation

to folders, files, the extended search other etc. Additional interfaces are available via the
[[Client SDK/documents.sdk.UserContext|UserContext]],
[[Client SDK/documents.sdk.FileContext|FileContext]],
[[Client SDK/documents.sdk.I18nContext|I18nContext]],
[[Client SDK/documents.sdk.LayoutContext|LayoutContext]],
[[Client SDK/documents.sdk.GadgetContext|GadgetContext]] and the
[[Client SDK/documents.sdk.gentable.GentableContext|GentableContext]].

- Since:
5.0a


### Methods


**cacheEventClearAll(options){Promise.<any>}**
This function clears the property-cache of the tomcat. It does not trigger a reload of the page, therefore properties that are requested once initially will not be refreshed on client-side.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | optional additional options Name Type Default Description reload boolean false optional if true a reload is triggered after clearing the cache | Name | Type | Default | Description | reload | boolean | false | optional if true a reload is triggered after clearing the cache |
| Name | Type | Default | Description |
| reload | boolean | false | optional if true a reload is triggered after clearing the cache |

- Since:
5.0 h


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | the Promise that is fulfilled when the cache clearing request has been completed |


**callGadget(gadgetConfig)**
Starts a new gadget. Requires a gadgetConfig as a parameter.

| Name | Type | Description |
| --- | --- | --- |
| gadgetConfig | object | a JSON-Object to configure the settings of the gadget Name Type Description gadgetScript string name of the gadget-script on server gadgetAction string name of the function of the gadgetScript that will be executed gadgetId string optional id of the gadget. If there is already a gadget opended with the same id, the old gadget will be replaced, regardless of the gadgetDestination. gadgetDestination string optional location the gadget will be displayed at. Available are: dialog, folder and file. Defaults to dialog. | Name | Type | Description | gadgetScript | string | name of the gadget-script on server | gadgetAction | string | name of the function of the gadgetScript that will be executed | gadgetId | string | optional id of the gadget. If there is already a gadget opended with the same id, the old gadget will be replaced, regardless of the gadgetDestination. | gadgetDestination | string | optional location the gadget will be displayed at. Available are: dialog, folder and file. Defaults to dialog. |
| Name | Type | Description |
| gadgetScript | string | name of the gadget-script on server |
| gadgetAction | string | name of the function of the gadgetScript that will be executed |
| gadgetId | string | optional id of the gadget. If there is already a gadget opended with the same id, the old gadget will be replaced, regardless of the gadgetDestination. |
| gadgetDestination | string | optional location the gadget will be displayed at. Available are: dialog, folder and file. Defaults to dialog. |

- Since:
5.0f


##### Example


```
documentsContext.callGadget({"gadgetScript": "Gadget_myGadget", "gadgetAction":"showGadget", "gadgetId": "myGadgetId", "gadgetDestination": "folder"});
```


**closeDialog()**
Closes any dialog that is currently displayed.

- Since:
5.0a


##### Example


```
documentsContext.closeDialog();
```


**closeGadget()**
Closes a gadget. Currently only useful when the gadget is used in a popup dialog.

- Since:
5.0


**encodeURL(url){string}**
Encodes an URL by adding the `jsessionid` and the `cnvid` to it. A `jsessionid` is provided if cookies are disabled only.

URLs must be encoded always if calling custom servlets or jsps and access to the tomcat server session is required.

| Name | Type | Description |
| --- | --- | --- |
| url | string | the url to be encoded |

- Since:
5.0a
- See:  getBaseParams getBaseParamsQueryString


##### Returns:

| Type | Description |
| --- | --- |
| string | the encoded url |


##### Examples


```
var encodedUrl = documentsContext.encodeURL("./ext/jsp/invoice/table.jsp");
//  "./ext/jsp/invoice/table.jsp;cnvid=NeRbCno7Vbp5Wj07" (cookies enabled)
//  "./ext/jsp/invoice/table.jsp;jsessionid=686826E7F0B8212A3D97010F3ECB1936;cnvid=NeRbCno7Vbp5Wj07" (cookies disabled)
```


```
var encodedUrl = documentsContext.encodeURL("./ext/jsp/invoice/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());
//  "./ext/jsp/invoice/table.jsp;cnvid=NeRbCno7Vbp5Wj07?pri=dopaag&lang=de" (cookies enabled)
//  "./ext/jsp/invoice/table.jsp;jsessionid=686826E7F0B8212A3D97010F3ECB1936;cnvid=NeRbCno7Vbp5Wj07?pri=dopaag&lang=de" (cookies disabled)
```


**executeScript(scriptName, scriptParams, options){Promise.<any>|string|undefined}**
Executes a server-side global script by its name. Any defined script parameters can be transmitted alike.

The script can either be called *synchronous* (default) or *asynchronous* (via options parameter).

If the script result has a defined `returnType` (defined by context.returnType in the portal script) the

function has **no return value** and the output depends on the returnType.

With the option `dispatch` it is possible to always retrieve the script result even if a returnType is defined.

options.dispatch must be set to **false** (defaults to true) to use the script result as return value.

With `option.async = true` the function always returns a Promise object. If this option is set it is also

possible to input script parameters defined in the Documents Manager via a dialog. Script parameters added via dialog

will override duplicate `scriptParams` keys.

| Name | Type | Description |
| --- | --- | --- |
| scriptName | string | the name of the script |
| scriptParams | Object | optional the input parameters for the script |
| options | Object | optional additional options Name Type Default Description dispatch boolean true optional if false scriptResult is returned even if the script has a returnType async boolean false optional if true the script will be executed asynchronous and will return a promise defaultErrorHandling boolean true optional if set to false documents defaultErrorHandling, like opening an error-dialog will be prevented, only works if options.async = true. (Since: 5.0f) useScriptParameterDialog boolean false optional if true a script parameter dialog will always be displayed if the script has defined parameter, only works if options.async = true dialogTitle string optional the title of the script parameter dialog | Name | Type | Default | Description | dispatch | boolean | true | optional if false scriptResult is returned even if the script has a returnType | async | boolean | false | optional if true the script will be executed asynchronous and will return a promise | defaultErrorHandling | boolean | true | optional if set to false documents defaultErrorHandling, like opening an error-dialog will be prevented, only works if options.async = true. (Since: 5.0f) | useScriptParameterDialog | boolean | false | optional if true a script parameter dialog will always be displayed if the script has defined parameter, only works if options.async = true | dialogTitle | string |  | optional the title of the script parameter dialog |
| Name | Type | Default | Description |
| dispatch | boolean | true | optional if false scriptResult is returned even if the script has a returnType |
| async | boolean | false | optional if true the script will be executed asynchronous and will return a promise |
| defaultErrorHandling | boolean | true | optional if set to false documents defaultErrorHandling, like opening an error-dialog will be prevented, only works if options.async = true. (Since: 5.0f) |
| useScriptParameterDialog | boolean | false | optional if true a script parameter dialog will always be displayed if the script has defined parameter, only works if options.async = true |
| dialogTitle | string |  | optional the title of the script parameter dialog |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| Promise.<any> | string | undefined | Promise if options.async === true (see example below), undefined if script result contains returnType, script result String otherwise |


##### Examples


```
var scriptResult = documentsContext.executeScript("countryScript", { country : "Austria" }, { async : false });
// scriptResult: "Burgenland, Kärnten, Niederösterreich, Oberösterreich, Salzburg, Steiermark, Tirol, Vorarlberg, Wien"
```


```
var promise = documentsContext.executeScript("countryScript", { country : "Austria" }, { async : true });
promise.then(function(value) {
	console.log(value); // "Burgenland, Kärnten, Niederösterreich, Oberösterreich, Salzburg, Steiermark, Tirol, Vorarlberg, Wien"
});
```


```
var scriptResult = documentsContext.executeScript("aScriptWithReturnType", {param: 'value1'}, { dispatch : false });
// scriptResult is given even if the script has a returnType because dispatch is set to false
```


```
---example script---
var capitals = { "Germany" : "Berlin", "Austria" : "Vienna", ... };
return JSON.stringify(capitals);
---example script---

// if options.async === false, the server always returns a string no matter what the original format in the script was. Example to transfer and receive a JSON Object:
var jsonString = documentsContext.executeScript("exampleScript", { }, { async : false });
var capitals = JSON.parse(jsonString);
// capitals: { "Germany" : "Berlin", "Austria" : "Vienna", ... }
```


**getBaseParams(){Object}**
Returns all documents application related base parameters as object. It includes both the principal (`pri`) and the language (`lang`) parameter.

- Since:
5.0a
- See:  encodeURL getBaseParamsQueryString


##### Returns:

| Type | Description |
| --- | --- |
| Object | the base parameters |


##### Example


```
var urlBaseParams = documentsContext.getBaseParams();  //  -> { "pri" : "dopaag", "lang" : "en" }
```


**getBaseParamsQueryString(){string}**
Returns the query string of all documents application related base parameters as query string. It includes both the principal (`pri`) and the language (`lang`) parameter.

- Since:
5.0a
- See:  encodeURL getBaseParams


##### Returns:

| Type | Description |
| --- | --- |
| string | the query string of the base parameters |


##### Example


```
var urlBaseParams = documentsContext.getBaseParamsQueryString();  //  -> "pri=dopaag&lang=en"
```


**getContextParameter(){Object}**
Returns ids of currently opened modules and information about the viewport

- Since:
`5.0i HF5`


##### Returns:

| Type | Description |
| --- | --- |
| Object |  |


**getExtendedSearchContext(){documents.sdk.ExtendedSearchContext}**
Returns an [[Client SDK/documents.sdk.ExtendedSearchContext|ExtendedSearchContext]].

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.ExtendedSearchContext | the ExtendedSearchContext |


##### Example


```
var extSearchContext = documentsContext.getExtendedSearchContext();
```


**getFileContext(){documents.sdk.FileContext}**
Returns a [[Client SDK/documents.sdk.FileContext|FileContext]].

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.FileContext | the FileContext |


##### Example


```
var fileContext = documentsContext.getFileContext();
```


**getGadgetContext(){documents.sdk.GadgetContext}**
Returns a [[Client SDK/documents.sdk.GadgetContext]].

- Since:
5.0c


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.GadgetContext | the GadgetContext |


##### Example


```
var gadgetContext = documentsContext.getGadgetContext();
```


**getGadgetId(){string}**
Returns the gadgetId if defined.

- Since:
5.0e


##### Returns:

| Type | Description |
| --- | --- |
| string |  |


**getGentableContext(){documents.sdk.gentable.GentableContext}**
Returns a `GentableContext`.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.gentable.GentableContext | the GentableContext |


##### Example


```
var gentableContext = documentsContext.getGentableContext();
```


**getI18nContext(){documents.sdk.I18nContext}**
Returns an [[Client SDK/documents.sdk.I18nContext|I18nContext]].

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.I18nContext | the I18nContext |


**getLayoutContext(){documents.sdk.LayoutContext}**
Get information about the layout.

Currently contains information about the `toolbarDesign` and `Menubar` size info

- Returns a LayoutContext.

- Since:
5.0f


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.LayoutContext |  |


##### Example


```
var layoutContext = documentsContext.getLayoutContext(),
    design = layoutContext.getToolbarDesign(), // default | titleToolbar
    menubarSize = layoutContext.getMenubarSize(); // { width: <width>, height: <height> }
```


**getLocalStorage(key){documents.sdk.LocalStorage}**
Returns a persistent local web storage by its key. If the key is omitted, a "custom" local storage is returned by default.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the storage |

- Since:
5.0c


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.LocalStorage | The LocalStorage |


##### Examples


```
var localStorage1 = documentsContext.getLocalStorage("oceanic");
```


```
var localStorage2 = documentsContext.getLocalStorage();  //  "custom"
```


**getSessionStorage(key){documents.sdk.SessionStorage}**
Returns a transient session web storage by its key. If the key is omitted, a "custom" session storage is returned by default.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the storage |

- Since:
5.0c


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.SessionStorage | The SessionStorage |


##### Examples


```
var sessionStorage1 = documentsContext.getSessionStorage("oceanic");
```


```
var sessionStorage2 = documentsContext.getSessionStorage();  //  "custom"
```


**getURL(type, options){boolean}**
Creates and returns a documents application servlet url by a defined type. Optional parameters must be provided in some cases.

| Name | Type | Description |
| --- | --- | --- |
| type | string | the type of the servlet url that should be returned annotation (options: fileId, documentId) URL to access the annotations of a pdf/tif file controlSheet (options: fileId, registerId) URL for a control sheet docDownload URL to download a file (options: fileId, documentId, attachmentType, versionId, attachmentMode) docUpload URL to access the upload servlet gadget URL for a gadget pdfjsViewer URL to access the pdfjs viewer report URL for a report system URL for the system userLogin URL to login the current user userLogout URL to logout the current user |
| options | Object | optional additional options needed for some types Name Type Default Description absolute boolean false optional default false, if true the function will return an absolute url, otherwise a relative url fileId string optional the id of the file documentId string optional the id of the file document registerId string optional the id of the file register filename string optional the file name of a file document attachmentType string optional versionId string optional the id of a file document version | Name | Type | Default | Description | absolute | boolean | false | optional default false, if true the function will return an absolute url, otherwise a relative url | fileId | string |  | optional the id of the file | documentId | string |  | optional the id of the file document | registerId | string |  | optional the id of the file register | filename | string |  | optional the file name of a file document | attachmentType | string |  | optional | versionId | string |  | optional the id of a file document version |
| Name | Type | Default | Description |
| absolute | boolean | false | optional default false, if true the function will return an absolute url, otherwise a relative url |
| fileId | string |  | optional the id of the file |
| documentId | string |  | optional the id of the file document |
| registerId | string |  | optional the id of the file register |
| filename | string |  | optional the file name of a file document |
| attachmentType | string |  | optional |
| versionId | string |  | optional the id of a file document version |

- Since:
5.0c


##### Returns:

| Name | Type | Description |
| --- | --- | --- |
| [options.attachmentMode] | boolean |  |
| the | string | created url |


##### Example


```
var fileContext = documentsContext.getFileContext();
var urlParams = {
  fileId : fileContext.getFileId(),
  documentId : fileContext.getDocumentId()
};

documentsContext.getURL("annotation", urlParams);
//  -> "http://localhost:8081/srv/annotation;cnvid=[...];jsessionid=[...]?fileId=dopaag_fi201600000386&documentId=dopaagdc00000000000289"
```


**getUserContext(){documents.sdk.UserContext}**
Returns the [[Client SDK/documents.sdk.UserContext|UserContext]] of the current system user.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.UserContext | the UserContext |


##### Example


```
var userContext = documentsContext.getUserContext();
```


**logoutUser(toLoginScreen)**
This function logs out the user. By default it does not return to the login screen.

This can be used when the user is logged into a gadget view without any

documents functionality available.

| Name | Type | Description |
| --- | --- | --- |
| toLoginScreen | boolean | Redirects to the login screen if true (Since: 5.0h). Default false. |

- Since:
5.0e


**openConfirmationDialog(title, message, onOk, onCancel, onClose)**
Displays a dialog window that requests the current system user for confirmation.

The dialog window is displayed in front of the main window and system users always have to interact with it before they can return to the main window.

Note that unlike a `window.prompt()` dialog, the execution of the current program flow is *not* paused until the user cancels or confirms the dialog.

| Name | Type | Description |
| --- | --- | --- |
| title | string | object | the title of the dialog window or an object containing all options |
| message | string | the confirmation message text |
| onOk | function | a function that is executed if the user clicks "OK" |
| onCancel | function | optional a function that is executed if the user clicks "Cancel" |
| onClose | function | optional a function that is executed if the user clicks "OK", "Cancel" or "X". The function is executed after the onOk or onCancel function. |

- Since:
5.0a
- See:  closeDialog


##### Example


```
var title = "Confirmation Dialog";
var message = "Confirmation message text inside the dialog.";
var onOk = function() { console.log("onOk"); }
var onCancel = function() { console.log("onCancel"); }
var onClose = function() { console.log("onClose"); }

documentsContext.openConfirmationDialog(title, message, onOk, onCancel, onClose);
```


**openDocument(fileId, registerId, documentId, options)**
Opens a document.

| Name | Type | Description |
| --- | --- | --- |
| fileId | string | the id of the file |
| registerId | string | the id of the register the document is in |
| documentId | string | the id of the document |
| options | object | optional additional options Name Type Description page number optional the page the document should be opened at, currently only works for pdf.js | Name | Type | Description | page | number | optional the page the document should be opened at, currently only works for pdf.js |
| Name | Type | Description |
| page | number | optional the page the document should be opened at, currently only works for pdf.js |

- Since:
6.1.0


**openExtendedSearchView()**
Changes the current view to the extended search view.

Caution: This function will not process any actions if the kiosk view-mode is used.

- Since:
5.0a


**openFileView(fileId, registerId, documentId, options)**
Changes the current view to a file view. It is allowed to navigate to a file (cover), to a register or to a document.

Caution: This function will not process any actions if the user is currently in edit mode.

| Name | Type | Description |
| --- | --- | --- |
| fileId | string | the id of the file |
| registerId | string | optional the id of the file register |
| documentId | string | optional the id of the file document |
| options | Object | optional Name Type Default Description autoOpenDocumentMode boolean optional , default: true checkConstraints boolean optional if constraints should be checked or not, default: true startFileEditMode boolean optional if file edit mode should be start ed or not, default: false externalMode boolean optional if file should be opened in the external view-mode (popup), default: false (since 5.0h-hf2) registerBarState string optional "open", "min", "closed", default : useMainWindow boolean false optional Opens the file in the main window. Only relevant for decoupled windows (popups). (since 5.0i-hf2)* | Name | Type | Default | Description | autoOpenDocumentMode | boolean |  | optional , default: true | checkConstraints | boolean |  | optional if constraints should be checked or not, default: true | startFileEditMode | boolean |  | optional if file edit mode should be start ed or not, default: false | externalMode | boolean |  | optional if file should be opened in the external view-mode (popup), default: false (since 5.0h-hf2) | registerBarState | string |  | optional "open", "min", "closed", default : | useMainWindow | boolean | false | optional Opens the file in the main window. Only relevant for decoupled windows (popups). (since 5.0i-hf2)* |
| Name | Type | Default | Description |
| autoOpenDocumentMode | boolean |  | optional , default: true |
| checkConstraints | boolean |  | optional if constraints should be checked or not, default: true |
| startFileEditMode | boolean |  | optional if file edit mode should be start ed or not, default: false |
| externalMode | boolean |  | optional if file should be opened in the external view-mode (popup), default: false (since 5.0h-hf2) |
| registerBarState | string |  | optional "open", "min", "closed", default : |
| useMainWindow | boolean | false | optional Opens the file in the main window. Only relevant for decoupled windows (popups). (since 5.0i-hf2)* |

- Since:
5.0a


##### Examples


```
documentsContext.openFileView(fileId);
```


```
documentsContext.openFileView(fileId, registerId);
```


```
documentsContext.openFileView(fileId, registerId, documentId);
```


```
documentsContext.openFileView(fileId, null, null, { startFileEditMode : true, registerBarState : "closed" });
```


**openFolderView(folderId)**
Changes the current view to a folder view. It is allowed to navigate to any private or public folder.

Caution: This function will not process any actions if the user is currently in edit mode.

| Name | Type | Description |
| --- | --- | --- |
| folderId | string | the id of the folder |

- Since:
5.0a


**openFrameDialog(title, frameSrc, options)**
Displays a dialog with an embedded iframe.

| Name | Type | Description |
| --- | --- | --- |
| title | string | the title of the dialog window |
| frameSrc | string | the url of the embedded iframe |
| options | Object | Name Type Description width number optional the width of the dialog, default: 400 height number optional the height of the dialog, default: 300 top number optional the distance from the top of the window left number optional the distance from the left of the window frameStyles Object optional the styles of the dialog frameStyleClasses Object optional the classes of the dialog onClose function optional function to execute when close is clicked onOk function optional function to execute when ok is clicked onCancel function optional function to execute when cancel is clicked | Name | Type | Description | width | number | optional the width of the dialog, default: 400 | height | number | optional the height of the dialog, default: 300 | top | number | optional the distance from the top of the window | left | number | optional the distance from the left of the window | frameStyles | Object | optional the styles of the dialog | frameStyleClasses | Object | optional the classes of the dialog | onClose | function | optional function to execute when close is clicked | onOk | function | optional function to execute when ok is clicked | onCancel | function | optional function to execute when cancel is clicked |
| Name | Type | Description |
| width | number | optional the width of the dialog, default: 400 |
| height | number | optional the height of the dialog, default: 300 |
| top | number | optional the distance from the top of the window |
| left | number | optional the distance from the left of the window |
| frameStyles | Object | optional the styles of the dialog |
| frameStyleClasses | Object | optional the classes of the dialog |
| onClose | function | optional function to execute when close is clicked |
| onOk | function | optional function to execute when ok is clicked |
| onCancel | function | optional function to execute when cancel is clicked |

- Since:
5.0c


##### Example


```
var title = "Product";
var url = documentsContext.encodeURL("./ext/jsp/invoice/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

documentsContext.openFrameDialog(title, url, {
	width : 800,
	height : 400,
	frameStyles : { background-color : "darkgrey" },
	frameStyleClasses : [ "dialogFrame" ],
	onClose : function() { console.log("onClose"); },
	onOk : function() { console.log("onOk"); },
	onCancel : function() { console.log("onCancel"); }
});
```


**openHomeView()**
Changes the current view to the start screen view.

Caution: This function will not process any actions if the user is currently in edit mode.

- Since:
5.0d


##### Example


```
documents.sdk.exitRegistry.registerFileFieldExitCallback("erpInvoice", "erpInvoiceNumber", function(documentsContext, options) {
	documentsContext.openHomeView();
}
```


**openHtmlDialog(title, html, onOk, onClose)**
Displays a html dialog window.

The dialog window is displayed in front of the main window and system users always have to interact with it before they can return to the main window.

Note that unlike a `window.alert()` dialog, the execution of the current program flow is *not* paused until the user cancels or confirms the dialog.

| Name | Type | Description |
| --- | --- | --- |
| title | string | the title of the dialog window |
| html | string | the inner html content source |
| onOk | function | optional a function that is executed if the user clicks "OK" |
| onClose | function | optional a function that is executed if the user clicks "OK" or "X". The function is executed after the onOk function. |

- Since:
5.0a
- See:  closeDialog


##### Example


```
var title = "HTML Dialog";
var html = "<div style=\"background-color: darkgrey; color: darkred;\">TestDiv</div>";
var onOk = function() { console.log("onOk"); }
var onClose = function() { console.log("onClose"); }

documentsContext.openHtmlDialog(title, html, onOk, onClose);
```


**openMessageDialog(title, message, onOk, onClose)**
Displays a message dialog window.

The dialog window is displayed in front of the main window and system users always have to interact with it before they can return to the main window.

Note that unlike a `window.alert()` dialog, the execution of the current program flow is *not* paused until the user cancels or confirms the dialog.

| Name | Type | Description |
| --- | --- | --- |
| title | string | object | the title of the dialog window or an object containing all options |
| message | string | the message text |
| onOk | function | optional a function that is executed if the user clicks "OK" |
| onClose | function | optional a function that is executed if the user clicks "OK" or "X". The function is executed after the onOk function. |

- Since:
5.0a
- See:  closeDialog


##### Example


```
var title = "Message Dialog";
var message = "Message text inside the dialog.";
var onOk = function() { console.log("onOk"); }
var onClose = function() { console.log("onClose"); }

documentsContext.openMessageDialog(title, message, onOk, onClose);
```


**openOutbar(options)**
Opens the outbar with the given name.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | Name Type Description name string Possible values: OutbarPublicFolder //The outbar for public folders (Documents Manager - Settings - Documents (display) - Combined folder tree not checked) OutbarPrivateFolder //The outbar for private folders (Documents Manager - Settings - Documents (display) - Combined folder tree not checked) OutbarCombinedFolder //The outbar for a combination of public and private folders (Documents Manager - Settings - Documents (display) - Combined folder tree checked) OutbarHitTree //The outbar for a hit tree (Documents Manager - Settings - Global Settings - Hit tree checked) User defined outbars can be accessed by their name (Documents Manager - settings - Outbars). | Name | Type | Description | name | string | Possible values: OutbarPublicFolder //The outbar for public folders (Documents Manager - Settings - Documents (display) - Combined folder tree not checked) OutbarPrivateFolder //The outbar for private folders (Documents Manager - Settings - Documents (display) - Combined folder tree not checked) OutbarCombinedFolder //The outbar for a combination of public and private folders (Documents Manager - Settings - Documents (display) - Combined folder tree checked) OutbarHitTree //The outbar for a hit tree (Documents Manager - Settings - Global Settings - Hit tree checked) User defined outbars can be accessed by their name (Documents Manager - settings - Outbars). |
| Name | Type | Description |
| name | string | Possible values: OutbarPublicFolder //The outbar for public folders (Documents Manager - Settings - Documents (display) - Combined folder tree not checked) OutbarPrivateFolder //The outbar for private folders (Documents Manager - Settings - Documents (display) - Combined folder tree not checked) OutbarCombinedFolder //The outbar for a combination of public and private folders (Documents Manager - Settings - Documents (display) - Combined folder tree checked) OutbarHitTree //The outbar for a hit tree (Documents Manager - Settings - Global Settings - Hit tree checked) User defined outbars can be accessed by their name (Documents Manager - settings - Outbars). |

- Since:
5.0d


##### Example


```
documents.sdk.exitRegistry.registerFileFieldExitCallback("erpInvoice", "erpInvoiceNumber", function(documentsContext, options) {
	documentsContext.openOutbar({
		name: "OutbarPublicFolder"
	});
}
```


**openRecordView(options)**
Opens the record view as folder overlay.

| Name | Type | Description |
| --- | --- | --- |
| options | object | Options for opening a record view. Name Type Description fileId string fileId | Name | Type | Description | fileId | string | fileId |
| Name | Type | Description |
| fileId | string | fileId |

- Since:
6.1.0


**openTableDataDialog(title, url, options)**
Opens a dedicated dialog for the tabledata plugin.

Basically, there are two different dialog types available, one (internal) iframe dialog (default) and another (external) popup window dialog.

The internal iframe dialog appears like an ordinary DOCUMENTS 5 dialog, the external popup window dialog is the more traditional way.

This function supports fully automatic setting of file field data, gentable row data or email dialog recipient data on a tabledata row selection.

Alternatively, a custom handler function can be implemented which will be executed on tabledata row selection.

If the automatic field setting should be used, the `exitOptions` option must be specified. Otherwise, if a custom row selection handler should be used, the the `onSelect` option must be specified.

If both options are set by accident, `onSelect` option overrides the `exitOptions` option and also any automatic data setting.

See the examples below for recommended implementations of `detail.jsp`. Legacy D5 implementations of `detail.jsp` are fully supported so updating the code is not mandatory in most cases.

| Name | Type | Description |
| --- | --- | --- |
| title | string | the title of the dialog window |
| url | string | the url of the table.jsp |
| options | Object | Name Type Description onSelect function optional custom handler function that is executed after the selection of a tabledata row entry, the selected data is available as a function parameter. Notice: If this option is set, none of the fields will be set automatically. exitOptions Object optional the options object of the registered exit callback function, see examples below for details. Should be provided if options.onSelect option is not set. popupWin boolean optional true, if an (external) popup window should be used to display the tabledata, otherwise an (internal) iframe dialog is used (default) width number optional the width of the dialog, default: 400 height number optional the height of the dialog, default: 300 top number optional the top position of the dialog left number optional the left position of the dialog onClose function optional custom handler function that is executed when the dialog is closed, not available if popupWin: true is set sortColumn string optional the column that sorts the tabledata, add '+' or '-' at the end of the column name to set the sort order. Default: '+' searchText string optional the default search text, tabledata is searched on opening searchColumn string optional the column to search the searchText in params Object optional additional parameter that will be added to the url | Name | Type | Description | onSelect | function | optional custom handler function that is executed after the selection of a tabledata row entry, the selected data is available as a function parameter. Notice: If this option is set, none of the fields will be set automatically. | exitOptions | Object | optional the options object of the registered exit callback function, see examples below for details. Should be provided if options.onSelect option is not set. | popupWin | boolean | optional true, if an (external) popup window should be used to display the tabledata, otherwise an (internal) iframe dialog is used (default) | width | number | optional the width of the dialog, default: 400 | height | number | optional the height of the dialog, default: 300 | top | number | optional the top position of the dialog | left | number | optional the left position of the dialog | onClose | function | optional custom handler function that is executed when the dialog is closed, not available if popupWin: true is set | sortColumn | string | optional the column that sorts the tabledata, add '+' or '-' at the end of the column name to set the sort order. Default: '+' | searchText | string | optional the default search text, tabledata is searched on opening | searchColumn | string | optional the column to search the searchText in | params | Object | optional additional parameter that will be added to the url |
| Name | Type | Description |
| onSelect | function | optional custom handler function that is executed after the selection of a tabledata row entry, the selected data is available as a function parameter. Notice: If this option is set, none of the fields will be set automatically. |
| exitOptions | Object | optional the options object of the registered exit callback function, see examples below for details. Should be provided if options.onSelect option is not set. |
| popupWin | boolean | optional true, if an (external) popup window should be used to display the tabledata, otherwise an (internal) iframe dialog is used (default) |
| width | number | optional the width of the dialog, default: 400 |
| height | number | optional the height of the dialog, default: 300 |
| top | number | optional the top position of the dialog |
| left | number | optional the left position of the dialog |
| onClose | function | optional custom handler function that is executed when the dialog is closed, not available if popupWin: true is set |
| sortColumn | string | optional the column that sorts the tabledata, add '+' or '-' at the end of the column name to set the sort order. Default: '+' |
| searchText | string | optional the default search text, tabledata is searched on opening |
| searchColumn | string | optional the column to search the searchText in |
| params | Object | optional additional parameter that will be added to the url |

- Since:
5.0c


##### Examples


```
**custom tabledata row selection handler**

documents.sdk.exitRegistry.registerFileFieldExitCallback("crmContact", "crmName", function(documentsContext, options) {
	var title = "Ansprechpartner";
	var url = documentsContext.encodeURL("./ext/jsp/tabledata/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

 documentsContext.openTableDataDialog(title, url, {
 	width: 1000,
 	height: 400,
 	popupWin: false,  //  optional
 	onSelect: function(data) {
 		documentsContext.openMessageDialog("", JSON.stringify(data));
 		console.log(data);
 	},
 	sortColumn: "PLZ-", //sort with column PLZ in descending order
 	searchColumn: "PLZ", //search in column PLZ
 	searchText: "531" //search for values that contain 531
 });
});
```


```
**automatic field data setting**

documents.sdk.exitRegistry.registerFileExitCallback("crmContact", "FileEmail.recipients", function(documentsContext, options) {
 var title = "Ansprechpartner";
 var url = documentsContext.encodeURL("./ext/jsp/email/table.jsp" + "?" + documentsContext.getBaseParamsQueryString());

 documentsContext.openTableDataDialog(title, url, {
 	width: 1000,
 	height: 400,
 	popupWin: false,  //  optional
 	exitOptions: options  //  mandatory for automatic field setting
 });
});
```


```
**detail.jsp, file field data**

var fieldData = {
	crmName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[1],  //  split "firstName lastName"
	crmFirstName: '<tab:detail id="Firmentabelle" name="Kontaktperson" escapeMode="script" removeCRLF="true" />'.split(/\s+/)[0],  //  split "firstName lastName"
	crmAccountnumber: '<tab:detail id="Firmentabelle" name="Kunden-Code" escapeMode="script" removeCRLF="true" />',
	[...]
};

(window.opener || parent).postMessage({
	action: "<%= request.getParameter("actionId") %>",
	data: fieldData
}, "*");
```


```
**detail.jsp, gentable row data**

var rowData = {
	amount: '<tab:detail id="Firmentabelle" name="Lagerbestand" escapeMode="script" removeCRLF="true" />',
	itemno: '<tab:detail id="Firmentabelle" name="Artikel-Nr" escapeMode="script" removeCRLF="true" />',
	[...]
};

(window.opener || parent).postMessage({
	action: "<%= request.getParameter("actionId") %>",
	data: rowData
}, "*");
```


```
**detail.jsp, email dialog recipient data**

var emailData = {
	lastName: '<tab:detail id="Personaltabelle" name="Nachname" escapeMode="script" removeCRLF="true" />',
	firstName: '<tab:detail id="Personaltabelle" name="Vorname" escapeMode="script" removeCRLF="true" />'
};

(window.opener || parent).postMessage({
	action: "<%= request.getParameter("actionId") %>",
	data: emailData.firstName + "." + emailData.lastName + "@dopa.ag"
}, "*");
```


**startBusyPanel(view)**
This function locks a defined view for the current user by a view identifier.

Valid view identifiers are `Dialog`, `Gadget`, `MainFile`, `MainFileGentable`, `MainList`, `MainTree`, `Workspace`.

| Name | Type | Description |
| --- | --- | --- |
| view | string | the identifier of the view that is to be locked |

- Since:
5.0b
- See:  stopBusyPanel


##### Example


```
//  notice: example uses an asynchronous script action call (with promise)
var fileContext = documentsContext.getFileContext();

documentsContext.startBusyPanel("MainFile");

fileContext.executeScript("countryScript", { country : "Austria" }, { "async" : true }).then( function(result) {
	//  process the file script action result
	documentsContext.stopBusyPanel("MainFile");
});
```


**stopBusyPanel(view)**
This function unlocks a defined view for the current user by a view identifier.

Valid view identifiers are `Dialog`, `Gadget`, `MainFile`, `MainFileGentable`, `MainList`, `MainTree`, `Workspace`.

| Name | Type | Description |
| --- | --- | --- |
| view | string | the identifier of the view that is to be unlocked |

- Since:
5.0b
- See:  startBusyPanel


**updateFileView(options)**
Updates the current file view.

In file edit mode, this operation automatically stores the values of all visible file fields while ignoring any constraints.  Opened dialogs will be closed.

| Name | Type | Description |
| --- | --- | --- |
| options | object | optional Options for updating the current file view only if a file ID matches. If omitted the file view will always be updated. Name Type Description fileId string optional ID of the file that should be updated. If the current file view doesn't match this file ID it won't be updated. fileIds Array.<string> optional List of file IDs that should be updated. If the current file view's file ID is not in the list, it won't be updated. | Name | Type | Description | fileId | string | optional ID of the file that should be updated. If the current file view doesn't match this file ID it won't be updated. | fileIds | Array.<string> | optional List of file IDs that should be updated. If the current file view's file ID is not in the list, it won't be updated. |
| Name | Type | Description |
| fileId | string | optional ID of the file that should be updated. If the current file view doesn't match this file ID it won't be updated. |
| fileIds | Array.<string> | optional List of file IDs that should be updated. If the current file view's file ID is not in the list, it won't be updated. |

- Since:
4.0


##### Examples


```
documentsContext.updateFileView();
```


```
documentsContext.updateFileView({ fileId: "relations_fi20200000001335"});
```


```
documentsContext.updateFileView({ fileIds: ["relations_fi20060000001469","relations_fi20060000001611"] });
```