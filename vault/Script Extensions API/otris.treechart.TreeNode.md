---
title: "Class: TreeNode"
source: "https://otris.software/documents/api/scriptextensions/otris.treechart.TreeNode.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| id | string | Id of the node |


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| id | string | Id of the node |
| actionEvents | otris.treechart.EventHandlers | Object with the event handlers |
| html | string | HTML content for node |
| label | string | Can be used instead of label1, label2, label3 and may have multiple lines (Line1\r\Line2...) |
| label1 | string | First line of the label for the node |
| label2 | string | Second line of the label for the node |
| label3 | string | Third line of the label for the node |
| level | number | Level of the node |
| leaf | boolean | Flag, if node is leaf of the tree |
| children | Array.<otris.treechart.TreeNode> | Children nodes of the node |
| childRelations | otris.treechart.Edge | Labels of the edges to the children nodes |
| color | string | Color code for the fill color of the node |
| borderColor | string | Color code for the border of the node |
| font | string | Name of the font |
| fontColor | string | Color code for the |
| fontSize | string | Font size of the node text |
| fontStyle | string | Specifies the font style for the node text. Possible values: normal, italic, oblique, initial, inherit |
| textAlign | string | Specifies the text alignment. Possible values: center, left, right |
| borderRoundness | number | Radius if the corner should be rounded |
| minWidth | number | Set a minimum width for the node |
| maxWidth | number | Set a maximum width for the node |
| staticWidth | number | Enforce a specific width for the node |
| vMargin | number | Vertical margin of the node |
| hMargin | number | Horizontal margin of the node |
| currentFileId | string | File id of the file associated with this node |
| clientScript | string | JS script execute, if the node is clicked |
| treeParams | object | Parameter as key-value pair needed for the tree generation. Will be forwarded to the generator script |


##### Example


```
var node = new otris.treechart.TreeNode("1");
// "88:392091" is a folder id
node.actionEvents = {
  click: "showFile:ims_fi20150000001783",
  dblClick: "showFolder:88:392091",
  rightClick: "runScript:imsScript"
};
node.clientScript = "alert('Hello World');"
```


### Methods


**addChild(child)**
Adds another node as child to the node.

| Name | Type | Description |
| --- | --- | --- |
| child | otris.treechart.TreeNode | Node to add as a child |


**getActionEvents(){otris.treechart.EventHandlers}**
Convenience method to retrieve the event handlers of the node.

Possible actions:

  showFile:fileId[?dlcRegisterId=registerId&dlcDocumentId=documentId]

  showFolder:folderId

  runScript:scriptName


##### Returns:

| Type | Description |
| --- | --- |
| otris.treechart.EventHandlers | Object with the node's event handlers |


##### Example


```
// [...]
node.getActionEvents().click = "showFile:tree_fi20160000000037"
node.getActionEvents().dblClick = "showFolder:88:392091"
node.getActionEvents().rightClick = "runScript:imsScript"
```


**isChild(node){boolean}**
Checks, if a node is a child of this node.

| Name | Type | Description |
| --- | --- | --- |
| node | otris.treechart.TreeNode | Node to be checked |


##### Returns:

| Type | Description |
| --- | --- |
| boolean | true, if the node is a child of this node |


**setEdgeLabel(child, label)**
Convenience method for setting the label of an edge to a child node.
**If the child-node is not a child yet, it becomes a child.**

| Name | Type | Description |
| --- | --- | --- |
| child | otris.treechart.TreeNode | Child node which edge should be labeled. If the node is not a child, it becomes a child. |
| label | string | Label of the edge to the child node |


**setGroupable(groupable)**
Method to set a tree node to be groupable. This will collapse all grouped nodes to one node.

Attention: Only nodes that are leafs can be grouped together, otherwise the design will break!

| Name | Type | Description |
| --- | --- | --- |
| groupable | boolean | Value of groupable |