---
title: "Class: GentableGridColumnModel"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.gentable.grid.GentableGridColumnModel.html"
---

### Constructors


****


### Extends

- documents.sdk.grid.GridColumnModel


### Methods


**getButtonLabel(){string}**
Returns the button label of the current column.

- Since:
5.0c HF1


##### Returns:

| Type | Description |
| --- | --- |
| string | the button label of the current column |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").getButtonLabel();
}
```


**getDataType(){string}**
Returns the data type of the current column.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | the data type of the current column |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").getDataType(); //NUMBER
}
```


**getDecimalPlaces(){number}**
Returns the number of decimal places of the current column.

- Since:
5.0c HF1


##### Returns:

| Type | Description |
| --- | --- |
| number | the number of decimal places of the current column |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").getDecimalPlaces(); //2
}
```


**getLabel(){string}**
Returns the localized label of the current column.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | the localized label of the current column |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").getLabel(); //unit price
}
```


**getName(){string}**
Returns the key of the current column.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | the key of the current column |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").getName(); //unitprice
}
```


**getNumberFormat(){string}**
Returns the number format of the current column.

- Since:
5.0c HF1


##### Returns:

| Type | Description |
| --- | --- |
| string | the number format of the current column |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").getNumberFormat(); //n.2
}
```


**getTooltip(){string}**
Returns the tooltip of the current column.

- Since:
5.0c HF1


##### Returns:

| Type | Description |
| --- | --- |
| string | the tooltip of the current column |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").getTooltip(); //unit price
}
```


**isEditable(){boolean}**
Checks if the current column is editable.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the column is editable, false otherwise |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").isEditable(); //false
}
```


**isFocusable(){boolean}**
Checks if the current column is focusable.

- Since:
5.0c HF1


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the column is focusable, false otherwise |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").isFocusable(); //false
}
```


**isVisible(){boolean}**
Checks if the current column is visible.

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the column is visible, false otherwise |


##### Example


```
documents.sdk.gentable.gentableRegistry.registerCallback("*", "Gentable.afterRender", function(documentsContext, options) {
	documentsContext.getGentableContext().getGridModel().getColumn("unitprice").isVisible(); //true
}
```