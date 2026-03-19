---
title: "Namespace: utils"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.utils.html"
---

### Methods


**staticdocuments.sdk.utils.closeOverlay(region)**
Closes the overlay at a given region and destroys the displayed module

| Name | Type | Description |
| --- | --- | --- |
| region | string | defines which overlay should be closed. Available are file or MAIN2 and folder or MAIN |

- Since:
5.0i-hf3


##### Example


```
//open a gadget in overlayMode ontop of the file-view
documentsContext.callGadget({
		'gadgetScript':'Gadget_myGadget',
		gadgetAction':'show',
		'overlayMode': true,
		'gadgetDestination':'file'
});
//close the overlay and destroy the gadget
documents.sdk.utils.closeOverlay("file");
```


**staticdocuments.sdk.utils.copyToClipboard(text, options){Promise}**
Copies the given text to the users clipboard.

| Name | Type | Description |
| --- | --- | --- |
| text | string | text to be copied to clipboard |
| options | object | optional Name Type Description showNotification boolean optional If true a notification will be shown on success. Defaults to true title string optional title of the shown notification message string optional message of the shown notification. It is possible to pass HTML as the message. If no message is given, the copied text will be used (html escaped). timeout number optional time the notification is shown in milliseconds sticky boolean optional defines whether the notification is sticky | Name | Type | Description | showNotification | boolean | optional If true a notification will be shown on success. Defaults to true | title | string | optional title of the shown notification | message | string | optional message of the shown notification. It is possible to pass HTML as the message. If no message is given, the copied text will be used (html escaped). | timeout | number | optional time the notification is shown in milliseconds | sticky | boolean | optional defines whether the notification is sticky |
| Name | Type | Description |
| showNotification | boolean | optional If true a notification will be shown on success. Defaults to true |
| title | string | optional title of the shown notification |
| message | string | optional message of the shown notification. It is possible to pass HTML as the message. If no message is given, the copied text will be used (html escaped). |
| timeout | number | optional time the notification is shown in milliseconds |
| sticky | boolean | optional defines whether the notification is sticky |

- Since:
5.0i


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Resolved after text is added to clipboard and notification is shown |


##### Example


```
documents.sdk.utils.copyToClipboard("my clipboard message", { title: "Success", message: "Copied message to clipboard successfully"});
```


**staticdocuments.sdk.utils.createDocumentsContext(){documents.sdk.DocumentsContext}**
Creates and returns a new [[Client SDK/documents.sdk.DocumentsContext|DocumentsContext]].

- Since:
5.0e


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.DocumentsContext | the new DocumentsContext |


##### Example


```
var documentsContext = documents.sdk.utils.createDocumentsContext();
var fileContext = documentsContext.getFileContext();

console.log(fileContext.getFileTitle());
```


**staticdocuments.sdk.utils.formatDate(date, options){string}**
Formats an ECMAScript Date or a [Moment.js](https://momentjs.com/docs/) Date object and returns it as a string using the date format for the current user. This string is accepted by date fields.

| Name | Type | Description |
| --- | --- | --- |
| date | Date | moment.Moment | the date value to be formatted |
| options | Object | optional Name Type Description fieldType string optional The type the Date object should be formatted to. Either "date" or "timestamp" dateType string optional The input type of the Date. Either "ecma" (default) or "moment" | Name | Type | Description | fieldType | string | optional The type the Date object should be formatted to. Either "date" or "timestamp" | dateType | string | optional The input type of the Date. Either "ecma" (default) or "moment" |
| Name | Type | Description |
| fieldType | string | optional The type the Date object should be formatted to. Either "date" or "timestamp" |
| dateType | string | optional The input type of the Date. Either "ecma" (default) or "moment" |


##### Returns:

| Type | Description |
| --- | --- |
| string | the formatted string value |


##### Examples


```
var fileContext = documentsContext.getFileContext();
//set the current date
fileContext.setFileFieldValue("date", documents.sdk.utils.formatDate(new Date(), {fieldType: "date", dateType: "ecma"}));
```


```
var fileContext = documentsContext.getFileContext();
//set the current date
fileContext.setFileFieldValue("date", documents.sdk.utils.formatDate(moment(), {fieldType: "date", dateType: "moment"}));
```


```
var fileContext = documentsContext.getFileContext();
//set the current date and time
fileContext.setFileFieldValue("timestamp", documents.sdk.utils.formatDate(new Date(), {fieldType: "timestamp", dateType: "ecma"}));
```


```
var fileContext = documentsContext.getFileContext();
//set the current date and time
fileContext.setFileFieldValue("timestamp", documents.sdk.utils.formatDate(moment(), {fieldType: "timestamp", dateType: "moment"}));
```


**staticdocuments.sdk.utils.formatNumber(value, decimalSeparator_or_options, groupingSeparator, decimalPrecision){string}**
Formats a number and returns it as string.

If any of the optional `decimalSeparator`, `groupingSeparator` or `decimalPrecision` parameters is not set, this function will use the default value of the current user locale configured in the Documents Manager.

| Name | Type | Description |
| --- | --- | --- |
| value | number | the number value to be formatted |
| decimalSeparator_or_options | string | Object | optional the decimal separator character that should be used or an object that contains any of the decimalSeparator, groupingSeparator or decimalPrecision options |
| groupingSeparator | string | optional the grouping separator character |
| decimalPrecision | number | optional the decimal precision, if set to -1, it is left untouched |


##### Returns:

| Type | Description |
| --- | --- |
| string | the formatted string value |


##### Examples


```
documents.sdk.utils.formatNumber(1910.96, ",", ".", -1);  //  "1.910,96"
```


```
documents.sdk.utils.formatNumber(1910.96, ",", ".", 0);  //  "1.911"
```


```
documents.sdk.utils.formatNumber(1910.96, ",", ".", 1);  //  "1.911,0"
```


```
documents.sdk.utils.formatNumber(1910.96, ",", ".", 2);  //  "1.910,96"
```


```
documents.sdk.utils.formatNumber(1910.96, ",", ".", 3);  //  "1.910,960"
```


```
documents.sdk.utils.formatNumber(1910.96, { decimalSeparator : ",", groupingSeparator : ".", decimalPrecision : 2 }  //  "1.910,96"
```


**staticdocuments.sdk.utils.getLocaleValue(localizedString, lang){String}**
Parses localized input (e.g. "en:my input;de::meine Eingabe") and returns the text of the given language.

| Name | Type | Description |
| --- | --- | --- |
| localizedString | String | The text to be parsed. |
| lang | String | optional The language of the String. Falls back to the users system language. |

- Since:
5.0g


##### Returns:

| Type | Description |
| --- | --- |
| String | text of the language or default text, if no language is found. |


##### Example


```
documents.sdk.utils.getLocaleValue("defaultValue;de:mein Wert;en:my value", "en");  //  my value
```


**staticdocuments.sdk.utils.parseDate(date, options){Date|moment.Moment}**
Parses a date string and returns either a ECMAScript or a [Moment.js](https://momentjs.com/docs/) Date object.

This method expects a string with the date format of the current user, for example by using FileContext#getFileFieldValue on a Date or Timestamp field.

| Name | Type | Description |
| --- | --- | --- |
| date | string | the date/timestamp string value to be parsed |
| options | Object | optional Name Type Description fieldType string optional The type of the string to parse. Either "date" (default) or "timestamp". dateType string optional The type of the return object. Either "ecma" (default) or "moment" | Name | Type | Description | fieldType | string | optional The type of the string to parse. Either "date" (default) or "timestamp". | dateType | string | optional The type of the return object. Either "ecma" (default) or "moment" |
| Name | Type | Description |
| fieldType | string | optional The type of the string to parse. Either "date" (default) or "timestamp". |
| dateType | string | optional The type of the return object. Either "ecma" (default) or "moment" |


##### Returns:

| Type | Description |
| --- | --- |
| Date | moment.Moment | the Date object |


##### Examples


```
var fileContext = documentsContext.getFileContext();
var date = documents.sdk.utils.parseDate(fileContext.getFileFieldValue("date"), {fieldType: "date", dateType: "moment"});
//check if the date is in the future
if (date.isAfter(moment())) {
	//change the field background color to red if the date is in the future
	documentsContext.getFileContext().setFileFieldBgColor("date", "#FF0000");
}
```


```
var fileContext = documentsContext.getFileContext();
var date = documents.sdk.utils.parseDate(fileContext.getFileFieldValue("date"), {fieldType: "date", dateType: "ecma"});
//check if the date is in the future
if (new Date() - date < 0) {
	//change the field background color to red if the date is in the future
	documentsContext.getFileContext().setFileFieldBgColor("date", "#FF0000");
}
```


```
var fileContext = documentsContext.getFileContext();
var timestamp = documents.sdk.utils.parseDate(fileContext.getFileFieldValue("timestamp"), {fieldType: "timestamp", dateType: "moment"});
//check if the timestamp is between 8:00 and 18:00
if (!timestamp.isBetween(moment('08:00', 'hh:mm'), moment('18:00', 'hh:mm'), null, "[]")) {
	//change the field background color to red if the time is not between 8:00 and 18:00
	documentsContext.getFileContext().setFileFieldBgColor("timestamp", "#FF0000");
}
```


```
var fileContext = documentsContext.getFileContext();
var timestamp = documents.sdk.utils.parseDate(fileContext.getFileFieldValue("timestamp"), {fieldType: "timestamp", dateType: "ecma"});
//check if the timestamp is between 8:00 and 18:00
if (!(timestamp.getHours() >= 8 && timestamp.getHours()< 18 || timestamp.getHours() === 18 && timestamp.getMinutes() === 0)) {
	//change the field background color to red if the time is not between 8:00 and 18:00
	documentsContext.getFileContext().setFileFieldBgColor("timestamp", "#FF0000");
}
```


**staticdocuments.sdk.utils.parseLocalizedString(localizedString){Object.<("de"|"en"|string), string>}**
Parses localized input (e.g. "en:my input;de::meine Eingabe") into a an object containing the language as a key and the text as a value. If a default value is given, it is available by retrunValue.default

| Name | Type | Description |
| --- | --- | --- |
| localizedString | String | The text to be parsed |

- Since:
5.0g


##### Returns:

| Type | Description |
| --- | --- |
| Object.<("de"|"en"|string), string> | object containing the language as key and the language-text as value. |


**staticdocuments.sdk.utils.parseNumber(value, decimalSeparator, groupingSeparator){number}**
Parses a number string and returns it as number.

If any of the optional `decimalSeparator` or `groupingSeparator` parameters is not set, this function will automatically use the default value of the current user locale configured in the Documents Manager.

| Name | Type | Description |
| --- | --- | --- |
| value | string | the number string value to be parsed |
| decimalSeparator | string | optional the decimal separator character |
| groupingSeparator | string | optional the grouping separator character |


##### Returns:

| Type | Description |
| --- | --- |
| number | the parsed number value |


##### Examples


```
documents.sdk.utils.parseNumber("1.910,96", ",", ".");  //  1910.96
```


```
documents.sdk.utils.parseNumber("1.910,96");  //  1910.96
```


**staticdocuments.sdk.utils.toggleFieldTooltips(hide)**
Globally hides or displays tooltips of file fields for a user. The setting will be saved at the user.

| Name | Type | Description |
| --- | --- | --- |
| hide | boolean | optional Optional Setting of the state of the tooltips. If true tooltips will be disabled. If false they will be displayed. If no value is given the setting switches to the one that is currently not set. |

- Since:
5.0h