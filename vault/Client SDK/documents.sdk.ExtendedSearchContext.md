---
title: "Class: ExtendedSearchContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.ExtendedSearchContext.html"
---

### Constructors


****
The ExtendedSearchContext provides access to the Extended Search Dialog

and gives access to various GUI functions like get/set field values,

change the color of fields, change the focus to a specific field etc.


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| SUFFIX_DATE_FROM | string | suffix for all from date type search fields |
| SUFFIX_DATE_UNTIL | string | suffix for all until date type search fields |
| SUFFIX_NUMBER_FROM | string | suffix for all from number type search fields |
| SUFFIX_NUMBER_UNTIL | string | suffix for all until number type search fields |
| SEARCH_FULLTEXT | string | field name for the "Full text" search field |
| SEARCH_DATE_FROM | string | field name for the "Date created (from)" search field |
| SEARCH_DATE_UNTIL | string | field name for the "Date created (to)" search field |
| SEARCH_TITLE | string | field name for the "Title" search field |
| SEARCH_OWNER | string | field name for the "Owner" search field |
| SEARCH_LAST_EDITOR | string | field name for the "Last Editor" search field |
| SEARCH_MOD_DATE_FROM | string | field name for the "Date modified (from)" search field |
| SEARCH_MOD_DATE_UNTIL | string | field name for the "Date modified (to)" search field |
| SEARCH_SOURCE_GROUP_DLC | string | identifier for the Documents file types tree |
| SEARCH_SOURCE_GROUP_EEI | string | identifier for the EE.i archive tree |
| SEARCH_SOURCE_GROUP_EEX | string | identifier for the EE.x archive tree |
| SEARCH_SOURCE_GROUP_NOAH | string | identifier for the EDA archive tree |
| SEARCH_SOURCE_ALL_FILE_TYPES | string | identifier to select all file types |
| SEARCH_SOURCE_NOAH_DLC_TOGGLE | string | identifier for the "actual processes" node in the EDA archive tree |

- Since:
5.0b


### Methods


**getSearchField$El(fieldName){JQuery}**
Returns the jQuery object of a search field's input field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | the jQuery object of the input field |


**getSearchFieldEl(fieldName){Element}**
Returns the DOM element of a search field's input field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| Element | the DOM element of the input field |


**getSearchFieldLabel$El(fieldName){JQuery}**
Returns the jQuery object of a search field's label by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | the jQuery object of the label |


**getSearchFieldNumberValue(fieldName, decimalSeparator, groupingSeparator){number}**
Gets the value of a search field as a Number. If the parameters decimalSeparator and

groupingSeparator are not set the method will use localized values.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the file field name |
| decimalSeparator | string | optional the decimal separator |
| groupingSeparator | string | optional the grouping separator |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| number | the current value of the file field |


##### Example


```
documentsContext.getExtendedSearchContext().getSearchFieldNumberValue("erpNetAmount", ".", ",");
```


**getSearchFieldValue(fieldName){string}**
Gets the value of a search field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the search field name |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| string | the current value of the search field |


**getSearchFieldValues(fieldNames){Object}**
Gets the values for an array of search fields by their names.

| Name | Type | Description |
| --- | --- | --- |
| fieldNames | Array.<string> | the search field names |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| Object | the current values of the search fields |


**getSearchFormModel(){documents.sdk.ExtendedSearchFormModel}**
Returns the current search form model.

To modify the current search form *before* being displayed, it is recommended to use this function

combined with (while not limited to) the exit event `ExtendedSearch.afterSetModelData`.

- Since:
5.0d
- See:  exitRegistry.registerSearchExitCallback


##### Returns:

| Type | Description |
| --- | --- |
| documents.sdk.ExtendedSearchFormModel | the extended search form model |


**getSearchFormView$El(){JQuery}**
Returns the jQuery object of the entire search form view.

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| JQuery | the jQuery object of the search form view |


**getSearchFormViewEl(){Element}**
Returns the DOM element of the entire search form view.

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| Element | the DOM element of the search form view |


**getSearchSourceNames(options)**
Returns a shallow array of all currently available search source names.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | optional Name Type Description filter Object optional a filter | Name | Type | Description | filter | Object | optional a filter |
| Name | Type | Description |
| filter | Object | optional a filter |

- Since:
5.0d


##### Example


```
var searchSourceNames = extSearchContext.getSearchSourceNames();
```


**getSearchSources(options)**
Returns a shallow array of all currently available search source items.

Each item contains (at least) the attributes `id`, `name`, `type`, `label`, `selected` and `opened`.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | optional Name Type Description filter Object optional a filter | Name | Type | Description | filter | Object | optional a filter |
| Name | Type | Description |
| filter | Object | optional a filter |

- Since:
5.0d


##### Example


```
var searchSources = extSearchContext.getSearchSources();
```


**getSelectedSearchSourceNames(options)**
Returns a shallow array of all currently selected search source names.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | optional Name Type Description filter Object optional a filter | Name | Type | Description | filter | Object | optional a filter |
| Name | Type | Description |
| filter | Object | optional a filter |

- Since:
5.0d


##### Example


```
var searchSourceNames = extSearchContext.getSelectedSearchSourceNames();
```


**getSelectedSearchSources(options)**
Returns a shallow array of all currently selected search source items.

Each item contains (at least) the attributes `id`, `name`, `type`, `label`, `selected` and `opened`.

| Name | Type | Description |
| --- | --- | --- |
| options | Object | optional Name Type Description filter Object optional a filter | Name | Type | Description | filter | Object | optional a filter |
| Name | Type | Description |
| filter | Object | optional a filter |

- Since:
5.0d


##### Example


```
var searchSources = extSearchContext.getSelectedSearchSources();
```


**isSearchFieldVisible(fieldName){boolean}**
Checks if a search field is currently displayed or not.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the field is visible, false otherwise |


**setSearchFieldBgColor(fieldName, color)**
Sets the background-color of a search field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0b


##### Example


```
documentsContext.getExtendedSearchContext().setSearchFieldBgColor("erpInvoiceNumber", "#2F4F4F")
```


**setSearchFieldBorderColor(fieldName, color)**
Sets the border-color of a search field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0b


##### Example


```
documentsContext.getExtendedSearchContext().setSearchFieldBorderColor("erpInvoiceNumber", "#2F4F4F")
```


**setSearchFieldColor(fieldName, color)**
Sets the text-color of a search field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0b


##### Example


```
documentsContext.getExtendedSearchContext().setSearchFieldColor("erpInvoiceNumber", "#2F4F4F")
```


**setSearchFieldFocus(fieldName)**
Sets the focus to a search field by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |

- Since:
5.0b


**setSearchFieldLabelColor(fieldName, color)**
Sets the text-color of a search field label by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the field |
| color | string | the new color |

- Since:
5.0b


##### Example


```
documentsContext.getExtendedSearchContext().setSearchFieldLabelColor("erpInvoiceNumber", "#2F4F4F")
```


**setSearchFieldOptions(fieldName, value, options)**
Sets the options for a select menu.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the name of the select field |
| value | string | Array.<string> | Object | the values for the select field |
| options | Object | keepSelected === true: the previously selected value will be kept even if not inside the value String (default), false: the previously selected value will be removed except when inside the value String |

- Since:
5.0b


##### Example


```
Possible input for the value parameter
"value,value,..."
"key:value,key:value,..."
"key;locale:value;locale:value,key;locale:value;locale:value,..."
["value1","value2",...]
["key1;locale1:value;locale2:value", "key2;locale1:value;locale2:value", ...]
{"key1":"value1", "key2":"value2",...}
{"key1":{"locale1":"value";"locale2":"value"}, "key2":{"locale1":"value";"locale2":"value"}, ...}
```


**setSearchFieldValue(fieldName, value){string}**
Sets the value of a search field to the specified value by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldName | string | the search field name |
| value | string | the new value of the search field |

- Since:
5.0b


##### Returns:

| Type | Description |
| --- | --- |
| string | the old value of the search field |


**setSearchFieldValues(fieldValues)**
Sets the value of multiple search fields to the specified value by its name.

| Name | Type | Description |
| --- | --- | --- |
| fieldValues | Object |  |

- Since:
5.0b


##### Example


```
documentsContext.getExtendedSearchContext().setSearchFieldValues({"hrFirstName":"Matt","hrLastName":"Buchanan"})
```


**setSearchSourcesVisibility(ids){boolean}**
Changes the visibility of a search-source entry.

| Name | Type | Description |
| --- | --- | --- |
| ids | string | Array.<string> | an Array of ids or a single id of the nodes whose visibility should be changes |

- Since:
5.0e


##### Returns:

| Type | Description |
| --- | --- |
| boolean | [state] defines whether a node is displayed; true for visible, false for invisible. If its not set it the current state will be inverted. |


##### Examples


```
var searchSources = extendedSearchContext.getSearchSources();
var filterdNodes = searchSources.filter(function(node){
		if(node.name === "crmAccount") return true;
});
if (filterdNodes[0] && filterdNodes[0].id){
extendedSearchContext.setSearchSourcesVisibility(filterdNodes[0].id, false);
}
```


```
var searchSources = extendedSearchContext.getSearchSources();
var filterdNodes = [];
searchSources.forEach(function(node){
		if(node.name.indexOf("crm") === 0  && node.id){ filterdNodes.push(node.id)};
});
extendedSearchContext.setSearchSourcesVisibility(filterdNodes, false);
```