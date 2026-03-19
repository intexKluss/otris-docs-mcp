---
title: "Namespace: treechart"
source: "https://otris.software/documents/api/scriptextensions/otris.treechart.html"
---

### Classes


**NodeStyle**


**TreeChart**


**TreeNode**


### Type Definitions


**otris.treechart.ActionScriptstring**
Script command for executing an action. The following commands are available:

- showFile:fileId
- runScript:scriptName (return needs to be a TreeChart)
- showFolder:folderId
- clientFunction:functionName Only available if TreeChart is used as a gadget (otris.gadget.gui.TreeChart)
The client function is called with the following object as parameter
{nodeId: "[nodeId]", nodeLabel: "[nodeLabel]", eventName: "[click|dblClick|rightClick]"}


##### Example


```
showFile:ims_fi20150000001783
// "88:392091" is a folder id
showFolder:88:392091
runScript:imsScript
```


**otris.treechart.Edgeobject**
Specifies the edge between two [[Script Extensions API/otris.treechart.TreeNode]]. nodeId is the id

of the child [[Script Extensions API/otris.treechart.TreeNode]]. For every child there has to be

a corresponding property having the same name as the id of the child node.


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| nodeId | otris.treechart.EdgeLabel | Label of the edge |


##### Example


```
var edge = {
  "1": {
    label: "edge 1"
  },
  "2"; {
    label: "edge 2"
  }
};
```


**otris.treechart.EdgeLabelobject**
Label of an edge between two [[Script Extensions API/otris.treechart.TreeNode]].


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| label | string | Labe of the edge |


**otris.treechart.EventHandlersobject**
Event handlers on a [[Script Extensions API/otris.treechart.TreeNode]].


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| click | otris.treechart.ActionScript | Action for handling the click event |
| dblClick | otris.treechart.ActionScript | Action for handling the double click event |
| rightClick | otris.treechart.ActionScript | Action for handling the right click event |
| click dblClick rightClick | object | Special action configuration (since DOCUMENTS 5.0f): { doNotExecuteDefaultClientScript: true, // will prevent a defined client script from executing before action clientFunction: function(documentsContext) {...}, // javascript function that will be transferred to the client showFile: "", showFolder: "" } |


**otris.treechart.Orientationstring**
Code for the orientation of the tree. Allowed values are `LR` (left to right) and `TB` (top to bottom)


**otris.treechart.Skinobject**
Style definition for a [[Script Extensions API/otris.treechart.TreeNode]].


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| Color | string | code for node color |
| borderColor | string | Color code for the border of a node |
| font | string | Name of the font for the node's label |
| fontColor | string | Color code for the node's label |
| fontSize | number | Font size for the node's label |
| borderRoundness | number | Radius if the corner should be rounded |
| vMargin | number | Vertical margin of the label to the node's border |
| hMargin | number | Horizontal margin of the label to the node's border |
| leafRendering | string | Code how leafs should be rendered |
| highlightColorIn | string | Color code for highlighted node |
| highlightColorOut | string | Color code for de-highlighting a node |