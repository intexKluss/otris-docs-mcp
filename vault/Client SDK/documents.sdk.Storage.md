---
title: "Class: Storage"
source: "https://otris.software/documents/api/client-sdk/documents.sdk.Storage.html"
---

### Constructors


****
- Since:
5.0c


### Methods


**clear()**
Removes all items of the storage at once.


##### Example


```
storage.clear();
```


**contains(key){boolean}**
Returns whether or not an item exits in the storage by its key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the item |


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true if the storage contains the key, false otherwise |


##### Example


```
if(storage.contains("pi")) {
	console.log("storage contains pi");
}
```


**erase()**
Erases the underlying HTML5 WebStorage area.


**get(key){boolean|number|string|object|array}**
Returns an item value of the storage by its key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the item |


##### Returns:

| Type | Description |
| --- | --- |
| boolean | number | string | object | array | the value of the item |


##### Example


```
var passenger = storage.get("passenger");
```


**getOptions(){Object}**
Returns the current storage options.


##### Returns:

| Type | Description |
| --- | --- |
| Object | the storage options |


##### Example


```
var storageOptions = storage.getOptions();
```


**keys(){Array.<string>}**
Returns all the keys of the storage.


##### Returns:

| Type | Description |
| --- | --- |
| Array.<string> | the storage keys |


##### Example


```
var storageKeys = storage.keys();
console.log(storageKeys);  //  ->  ["airline", "flightNo", "passenger", "numbers", "departure"]
```


**load()**
Loads and deserializes the storage from the underlying HTML5 WebStorage area.


**remove(key)**
Deletes an item of the storage by its key.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the item |


##### Example


```
storage.remove("departure");
```


**save()**
Serializes and saves the storage to the underlying HTML5 WebStorage area.


**set(key, value)**
Puts a new item or replaces an old item into the storage. Alternatively puts multiple items into the storage at once (see example below).

If the `autoSave` option is switched on (which is default), the storage will be automatically saved afterwards.

Otherwise, an explicit `save` has to be performed to persist all the items that are currently present in the storage.

| Name | Type | Description |
| --- | --- | --- |
| key | string | the key of the item |
| value | Object | the value of the item |


##### Examples


```
storage.set("airline", "Oceanic");
```


```
storage.set("flightNo", 815);
```


```
storage.set("arrivalStatus", false);
```


```
storage.set("passenger", { firstName : "Hugo", lastName, "Reyes", married : false });
```


```
storage.set("numbers", [4, 8, 15, 16, 23, 42]);
```


```
storage.set({
	"departure" : {
		city : "Sydney",
		IATA : "SYD",
		overdue : true
	},
	"primes" : [2, 3, 5, 7, 11, 13, 17, 19, 23],
	"pi" : 3.14159265359
});
```


**setOptions(newOptions){boolean}**
Sets the current storage options.

| Name | Type | Description |
| --- | --- | --- |
| newOptions | Object | the storage options |


##### Returns:

| Type | Description |
| --- | --- |
| boolean | newOptions.autoSave true if the automatic save mode is switched on, false otherwise |


##### Example


```
storage.setOptions({ autoSave : true });
```


**toJSON(){Object}**
Returns a (shallow) copy of the entire storage for JSON serialization.

For example this method can be used for persistence, serialization or augmentation before being sent to the server.


##### Returns:

| Type | Description |
| --- | --- |
| Object | the storage json clone |


##### Example


```
var storageJson = storage.toJSON();
console.log( JSON.stringify(storageJson) );
// -> "{"departure": {"city": "Sydney", "IATA": "SYD", "overdue": true}, "primes": [2, 3, 5, 7, 11, 13, 17, 19, 23], "pi": 3.14159265359}"
```