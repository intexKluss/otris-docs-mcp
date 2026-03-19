---
title: "Class: Tour"
source: "https://otris.software/documents/api/scriptextensions/otris.tour.Tour.html"
---

### Constructors


****
- Since:
DOCUMENTS 5.0d


##### Example


```
// #import [ScriptTour]
var tour = new otris.tour.Tour();
tour.setTourConfiguration({
    defaults: {
	       cancelable: true,
        disableInteraction: true
    },
    steps: [{
        title: "Willkommen",
        text: "Möchten Sie eine kleine Einführung in documents erhalten?",
        cancelButton: true
    }, {
        type: "prep",
        text: "Die Tour wird vorbereitet...",
        openDashboard: true
    }, {
        text: "Persönliches Dashboard als Übersicht",
        selector: "dashboard.element:container center"
    }, {
        text: "Eingangskorb für Vorgänge",
        selector: "dashboard.element:tile_inbox right"
    }]
});
context.returnType="tour";
return tour.transfer();
```


### Methods


**getTourConfiguration(){object}**
Gets the tour configuration


##### Returns:

| Type | Description |
| --- | --- |
| object | tourConfiguration - complete tour configuration |


**getTourLanguage()**
Gets the language of the tour (Is used for button labels and loading text).

The default value is the language of the current system user.


**setTourConfiguration(tourConfiguration)**
Sets the tour configuration.

This overrides all previously made settings like language, etc.

| Name | Type | Description |
| --- | --- | --- |
| tourConfiguration | object | complete tour configuration |


**setTourLanguage(lang)**
Sets the language of the tour (Is used for button labels and loading text).

The default value is the language of the current system user.

| Name | Type | Description |
| --- | --- | --- |
| lang | string | a language string like "en" or "de" |


**transfer(){string}**
Return the JSON representation of the tour


##### Returns:

| Type | Description |
| --- | --- |
| string | JSON representation that can be used as a return value of a PortalScript |