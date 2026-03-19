---
title: "Class: UserContext"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.UserContext.html"
---

### Constructors


****
The UserContext provides access to information related to the current system user like the used language, login name,

accessProfiles and custom properties.


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| absent | boolean | The state of absence. True if the system user is absent, false otherwise. |
| accessProfiles | Array.<string> | All technical access profile names of the system user, e.g. ["Administration", "Service", "Warehouse", "Employee"]. |
| dateFormatPattern | string | The date format pattern of the current system user language according to ISO 8601, e.g. "dd.MM.yyyy" or "MM/dd/yyyy". In DOCUMENTS Manager, the date format setting is defined at "Documents Settings" / "Locale/Format" / "Locale n" / "Date format". |
| eMail | string | The business email address of the system user. |
| fax | string | The business fax number of the system user. |
| firstName | string | The first name of the system user. |
| fullName | string | The full name of the system user, i.e. the concatenation of the first name and the last name. |
| language | string | The current language of the system user according to ISO 639-1 (two-letter codes), e.g. "de", "en" or "fr". |
| lastName | string | The last name of the system user. |
| login | string | The login name of the system user. |
| mobile | string | The business mobile number of the system user. |
| numberFormatDecimalSeparator | string | The decimal separator of the current system user language, e.g. "," or ".". In DOCUMENTS Manager, the decimal separator character setting is defined at "Documents Settings" / "Locale/Format" / "Locale n" / "Decimal point". |
| numberFormatGroupingSeparator | string | The thousands grouping separator of the current system user language, e.g. ".", "," or "'". In DOCUMENTS Manager, the grouping separator character setting is defined at "Documents Settings" / "Properties" / "groupingNumeric<language>" while "Documents Settings" / "Properties" / "groupingNumeric" has to be set to "1". |
| principal | string | The principal name of the system user, e.g. "dopaag". |
| salutation | string | The DOCUMENTS Manager value of "title" of the system user. |
| sex | string | The DOCUMENTS Manager value of "salutation" of the system user. |
| telephone | string | The business telephone number of the system user. |

- Since:
5.0a


### Methods


**clearUserPropertyCache(options){Promise}**
Clears all (server-side) cached user properties. A full page reload can be triggered after clearing the cache optionally.

Note: If the page is not refreshed subsequently, the effects of the cleared user cache may not be visible to the user initially!

| Name | Type | Description |
| --- | --- | --- |
| options | object | optional Name Type Default Description reload boolean false optional if true, a full page reload is triggered after clearing the cache | Name | Type | Default | Description | reload | boolean | false | optional if true, a full page reload is triggered after clearing the cache |
| Name | Type | Default | Description |
| reload | boolean | false | optional if true, a full page reload is triggered after clearing the cache |

- Since:
6.1.0


##### Returns:

| Type | Description |
| --- | --- |
| Promise | Promise that is fulfilled when the user property cache clearing request has been completed |


**getCustomPropertyValue(name, type){string}**
Returns a custom user property value by its name and type.

Custom user properties can be used to persist (i.e. load and store) arbitrary, user related application data across user sessions. The data type has to be `String`, e.g. JSON, XML or plain text data.

In DOCUMENTS Manager, any custom user property can be found at the *lower* properties tab of the user account settings dialog.

Notice that this function performs a request against the application server which is called *synchronous* by default. Thus the JavaScript- and UI thread of the browser will be blocked until the server response has returned.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the property |
| type | string | the type of the property |

- Since:
5.0a
- See:  setCustomPropertyValue removeCustomProperty


##### Returns:

| Type | Description |
| --- | --- |
| string | the value of the property |


##### Examples


```
//  JSON example
//  Note: the custom user property "worldJSON" is stored in the corresponding setCustomPropertyValue() example
var worldJSON = documentsContext.getUserContext().getCustomPropertyValue("worldJSON", "");
console.log(worldJSON);  //  -> "{"Asia" : ["China", "India", "Japan"], "Europe" : ["Austria", "Denmark", "Germany", "Great Britain", "Norway", "Sweden", ...}"
var worldMap = JSON.parse(worldJSON);
var continent = worldMap["Oceania"];

for(var i = 0; i < continent.length; i++) {
	console.log(continent[i]);  //  -> "Australia", "New Zealand"
}
```


```
// XML example
// Note: the custom user property "worldXML" is stored in the corresponding setCustomPropertyValue() example
var worldXML = documentsContext.getUserContext().getCustomPropertyValue("worldXML", "");
console.log(worldXML);  // -> "<World><Continent name="Asia"><Country>China</Country><Country>India</Country><Country>Japan</Country></Continent><Continent name="Europe"><Country>Austria</Country>..."
var parser = new DOMParser();
var worldNode = parser.parseFromString(worldXML, "application/xml");
var countryNodes = worldNode.querySelectorAll("Continent[name='Oceania'] Country");

for(var i = 0; i < countryNodes.length; i++) {
	console.log(countryNodes[i].textContent);  //  -> "Australia", "New Zealand"
}
```


**getProperty(key){string}**
Returns a system user property by its key.

User properties can be used to define arbitrary, user related application settings. They are *read-only* by default. The data type has to be `String`, e.g. JSON, XML or plain text data.

In DOCUMENTS Manager, any user property can be found at the *upper* properties tab of the user account settings dialog.

Notice that this function performs a request against the application server which is called *synchronous* by default. Thus the JavaScript- and UI thread of the browser will be blocked until the server response has returned.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the property |

- Since:
5.0a


##### Returns:

| Type | Description |
| --- | --- |
| string | the value of the property |


##### Example


```
var userContext = documentsContext.getUserContext();
var b0 = userContext.getProperty("color") || "blue";  //  type: String, default "blue"
var b1 = userContext.getProperty("availableOnWeekends") === "true";  //  type: boolean, default: false
var b2 = userContext.getProperty("availableDuringWeek") !== "false";  //  type: boolean, default: true
var b3 = parseInt(userContext.getProperty("hoursPerWeek"), 10) || 25;  // type: Number (Integer), default: 25
```


**removeCustomProperty(name, type){string}**
Removes a custom user property by its name and type and returns its previous value.

Custom user properties can be used to persist (i.e. load and store) arbitrary, user related application data across user sessions. The data type has to be `String`, e.g. JSON, XML or plain text data.

In DOCUMENTS Manager, any custom user property can be found at the *lower* properties tab of the user account settings dialog.

Notice that this function performs a request against the application server which is called *synchronous* by default. Thus the JavaScript- and UI thread of the browser will be blocked until the server response has returned.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the property |
| type | string | the type of the property |

- Since:
5.0a
- See:  getCustomPropertyValue setCustomPropertyValue


##### Returns:

| Type | Description |
| --- | --- |
| string | the value of the property previous to removal |


##### Examples


```
documentsContext.getUserContext().removeCustomProperty("worldXML", "");
```


```
documentsContext.getUserContext().removeCustomProperty("pdfViewerUserProperty", "json");
```


**setCustomPropertyValue(name, type, value, options){string}**
Sets a custom user property value by its name and type.

Custom user properties can be used to persist (i.e. load and store) arbitrary, user related application data across user sessions. The data type has to be `String`, e.g. JSON, XML or plain text data.

In DOCUMENTS Manager, any custom user property can be found at the *lower* properties tab of the user account settings dialog.

Notice that this function performs a request against the application server which is called *synchronous* by default. Thus the JavaScript- and UI thread of the browser will be blocked until the server response has returned.

| Name | Type | Description |
| --- | --- | --- |
| name | string | the name of the property |
| type | string | the type of the property |
| value | string | the new value of the property |
| options | object | optional Name Type Default Description async boolean false optional if true the property will be changed asynchronous. A promise will be returned | Name | Type | Default | Description | async | boolean | false | optional if true the property will be changed asynchronous. A promise will be returned |
| Name | Type | Default | Description |
| async | boolean | false | optional if true the property will be changed asynchronous. A promise will be returned |

- Since:
5.0a
- See:  getCustomPropertyValue removeCustomProperty


##### Returns:

| Type | Description |
| --- | --- |
| string | the previous value of the property |


##### Examples


```
//  JSON example
//  Note: the custom user property "worldJSON" is read in the corresponding getCustomPropertyValue() example
var worldMap = {
	"Asia" : ["China", "India", "Japan"],
	"Europe" : ["Austria", "Denmark", "Germany", "Great Britain", "Norway", "Sweden", "Switzerland"],
	"Oceania" : ["Australia", "New Zealand"],
	"South America" : ["Argentina", "Brazil", "Chile", "Peru", "Venezuela"]
}

var worldJSON = JSON.stringify(worldMap);
console.log(worldJSON);  //  -> "{"Asia" : ["China", "India", "Japan"], "Europe" : ["Austria", "Denmark", "Germany", "Great Britain", "Norway", "Sweden", ...}"

documentsContext.getUserContext().setCustomPropertyValue("worldJSON", "", worldJSON);
```


```
//  XML example
//  Note: the custom user property "worldXML" is read in the corresponding getCustomPropertyValue() example
var worldMap = {
	"Asia" : ["China", "India", "Japan"],
	"Europe" : ["Austria", "Denmark", "Germany", "Great Britain", "Norway", "Sweden", "Switzerland"],
	"Oceania" : ["Australia", "New Zealand"],
	"South America" : ["Argentina", "Brazil", "Chile", "Peru", "Venezuela"]
}

var createContinent = function(worldNode, continent, countries) {
 var continentNode = document.createElementNS("", 'Continent');
     continentNode.setAttribute('name', continent);
     worldNode.appendChild(continentNode);

 createCountries(continentNode, countries);
}

var createCountries = function(continentNode, countries) {
	for(var i = 0; i < countries.length; i++) {
		var countryNode = document.createElementNS("", 'Country');
		countryNode.appendChild( document.createTextNode(countries[i]) );
		continentNode.appendChild(countryNode);
	}
}

var worldNode = document.createElementNS("", "World");

for(continent in worldMap) {
	createContinent(worldNode, continent, worldMap[continent]);
}

var serializer = new XMLSerializer();
var worldXML = serializer.serializeToString(worldNode);
console.log(worldXML);  // -> "<World><Continent name="Asia"><Country>China</Country><Country>India</Country><Country>Japan</Country></Continent><Continent name="Europe"><Country>Austria</Country>..."

documentsContext.getUserContext().setCustomPropertyValue("worldXML", "", worldXML);
```