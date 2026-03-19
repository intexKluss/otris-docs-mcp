---
title: "Class: Timeline"
source: "https://otris.software/documents/api/gadgets/otris.gadget.gui.Timeline.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| viewId | string | optional the viewId of this HTML Component (The viewId specifies the destination in the DOM. This destination must exist otherwise the gadget is not rendered.) |


### Methods


**addBubble(config)**
Adds a bubble to the Timeline

| Name | Type | Description |
| --- | --- | --- |
| config | object | The json configuration object Name Type Default Description id string Unique identifier for this bubble (The bubbleOnClick function is called with this id as parameter) content string The content to display in the bubble (can contain html) highlight boolean false optional Highlight the bubble cssClass string optional Additional css class to add to the bubble title string optional The title that is displayed at the top of the bubble onClick string | boolean optional Name of a client function to be executed on click (function is called with bubble id as parameter). Set to false to disable onClick for this bubble. (since Documents 5.0e) | Name | Type | Default | Description | id | string |  | Unique identifier for this bubble (The bubbleOnClick function is called with this id as parameter) | content | string |  | The content to display in the bubble (can contain html) | highlight | boolean | false | optional Highlight the bubble | cssClass | string |  | optional Additional css class to add to the bubble | title | string |  | optional The title that is displayed at the top of the bubble | onClick | string | boolean |  | optional Name of a client function to be executed on click (function is called with bubble id as parameter). Set to false to disable onClick for this bubble. (since Documents 5.0e) |
| Name | Type | Default | Description |
| id | string |  | Unique identifier for this bubble (The bubbleOnClick function is called with this id as parameter) |
| content | string |  | The content to display in the bubble (can contain html) |
| highlight | boolean | false | optional Highlight the bubble |
| cssClass | string |  | optional Additional css class to add to the bubble |
| title | string |  | optional The title that is displayed at the top of the bubble |
| onClick | string | boolean |  | optional Name of a client function to be executed on click (function is called with bubble id as parameter). Set to false to disable onClick for this bubble. (since Documents 5.0e) |


##### Example


```
// Example for the config object
var bubbleConfig = {
    id: "bubble1",
    content: "My bubble content.",
    highlight: true,
    cssClass: "MyCssClass",
    title: "MyTitle"
    onClick: "myClientFunctionName"
};
gadgetTimeline.addBubble(bubbleConfig);
```


**setBubbleOnClick(onClickFunction)**
Sets a function which is executed when a bubble is clicked.

| Name | Type | Description |
| --- | --- | --- |
| onClickFunction | function | The function to be executed on click. The function is called with the id of the clicked bubble |


**setHeader(header)**
Sets the header of this timeline to be displayed above the timeline

| Name | Type | Description |
| --- | --- | --- |
| header | string | the new header |


**transfer(){string}**
Make this object ready for beeing transferred to the client


##### Returns:

| Type | Description |
| --- | --- |
| string |  |