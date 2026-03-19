---
title: "Class: ClientHeaderCode"
source: "https://otris.software/documents/api/scriptextensions/otris.tools.ClientHeaderCode.html"
---

### Constructors


****
A class to generate client header code. Use this class for the script defined as `clientHeaderCode` script in the global properties.

- Since:
DOCUMENTS 5.0e


##### Example


```
// #import [ClientHeaderCode]
var clientHeaderCode = new otris.tools.ClientHeaderCode();
clientHeaderCode.addScriptCodeByScriptName("myCustomGentableCallbacks");
return clientHeaderCode.transfer();
```


### Methods


**addCode(code)**
Add javascript code as string.

| Name | Type | Description |
| --- | --- | --- |
| code | string | javascript code |


##### Example


```
clientHeaderCode.addCode("console.log('Hello World!')");
```


**addHeadString(headString)**
Add the given string inside the `<head>` tag.

| Name | Type | Description |
| --- | --- | --- |
| headString | string | string to embed in <head> tag |


##### Example


```
clientHeaderCode.addHeadString('<link rel="icon" type="image/x-icon" href="data:image/png;base64,iVB...5CYII=">');
```


**addScriptCodeByScriptName(names)**
Add javascript code from portal scripts.

The scripts are not executed. Only the contents of the scripts were added as script code to the header.

**Note:** Each script code is embedded in an IIFE (Immediately-invoked Function Expression) to prevent the pollution of the global scope.

| Name | Type | Description |
| --- | --- | --- |
| names | Array.<string> | script names |


##### Example


```
clientHeaderCode.addScriptCodeByScriptName("myCustomGentableCallbacks");
clientHeaderCode.addScriptCodeByScriptName(["myPortalScript1", "myPortalScript2"]);
```


**addScriptCodeWithFunction(codeFunction, dataObject)**
Add the code of a given function. The native *toString()* method is used to serialize the function code.

On the client side the function is executed with an IIFE (Immediately-invoked Function Expression).

Optionally, you can pass a data object (The data object is serialized with `JSON.stringify`).

If a data object `dataObject` is defined. The function is called *(in the browser)* with this object as parameter.

| Name | Type | Description |
| --- | --- | --- |
| codeFunction | function | function |
| dataObject | object | optional data object |


##### Example


```
var customData = { myKey: "My custom value!" };
var myClientHeaderCodeFunction = function (data) {
    console.log("This code is executed on the client side");
    console.log(data.myKey);
};
clientHeaderCode.addScriptCodeWithFunction(myClientHeaderCodeFunction, customData);
```


**addStyle(cssCode)**
Add the given CSS code inside a `<style>` tag.

| Name | Type | Description |
| --- | --- | --- |
| cssCode | string | CSS code |


##### Example


```
clientHeaderCode.addStyle(".otrMenu .icon_exit { color:red }");
```


**getInfo(){otris.tools.ClientInformation}**
Returns information about the client

- Since:
DOCUMENTS 5.0f


##### Returns:

| Type | Description |
| --- | --- |
| otris.tools.ClientInformation | client information |


**transfer()**
Generates the client header code string.