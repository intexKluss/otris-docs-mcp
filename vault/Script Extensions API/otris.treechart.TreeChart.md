---
title: "Class: TreeChart"
source: "https://otris.software/documents/api/scriptextensions/otris.treechart.TreeChart.html"
---

### Constructors


****

##### Properties:

| Name | Type | Argument | Default | Description |
| --- | --- | --- | --- | --- |
| data | otris.treechart.TreeNode |  |  | Root node with the data |
| title | string |  |  | Title of the tree chart; HTML tags are allowed |
| backgroundColor | string |  |  | background color of the canvas |
| collapsible | boolean |  |  | Flag, if branches of the tree can be collapsed or not |
| orientation | otris.treechart.Orientation |  |  | Code for the tree orientation |
| levelSeparation | number |  |  | Minimal margin between the tree levels |
| nodeSeparation | number |  |  | Minimal margin between the nodes |
| drag | boolean |  |  | Flag, if nodes are draggable |
| skin | otris.treechart.Skin |  |  | Skin of the tree chart diagram |
| Style | otris.treechart.NodeStyle |  |  | that should be applied on any new created tree node |
| oneNodeWidthByLevel | boolean | <optional> | false | Render all nodes on the same level with the same width |
| zoomConfiguration | object |  |  | Enable and configure zoom functionality Properties Name Type Argument Default Description contain boolean <optional> false Scale the chart to fit in container center boolean <optional> true Initially show the center of the chart controlIconsEnabled boolean <optional> false Show/hide the control icons | Name | Type | Argument | Default | Description | contain | boolean | <optional> | false | Scale the chart to fit in container | center | boolean | <optional> | true | Initially show the center of the chart | controlIconsEnabled | boolean | <optional> | false | Show/hide the control icons |
| Name | Type | Argument | Default | Description |
| contain | boolean | <optional> | false | Scale the chart to fit in container |
| center | boolean | <optional> | true | Initially show the center of the chart |
| controlIconsEnabled | boolean | <optional> | false | Show/hide the control icons |


##### Example


```
// #import [TreeChart]
var chart = new otris.treechart.TreeChart();
chart.title = "Example for the Dynamic Tree Chart";
chart.defaultNodeStyle = new otris.treechart.NodeStyle("#ffffff", "#000000", "Arial", "#000000", 11, 14, 6, 16);
var root = chart.createNode("1", "Root");
var leaf1 = chart.createLeaf("2", "1st leaf");
var leaf2 = chart.createLeaf("3", "2nd leaf");
root.addChild(leaf1);
root.addChild(leaf2);
chart.setRoot(root);

context.returnType = "treeChart";
return chart.transfer();
```


### Methods


**createLeaf(id, label){otris.treechart.TreeNode}**
Creates a tree node and initialize it as a leaf. This method is provided for convenience.

Tree nodes can be also created via the constructor of [[Script Extensions API/otris.treechart.TreeNode]].

| Name | Type | Description |
| --- | --- | --- |
| id | string | Id of the new node |
| label | string | Label of the node |


##### Returns:

| Type | Description |
| --- | --- |
| otris.treechart.TreeNode | Created tree node as leaf |


**createNode(id, label){otris.treechart.TreeNode}**
Creates a tree node. This method is provided for convenience.

Tree nodes can be also created via the constructor of [[Script Extensions API/otris.treechart.TreeNode]].

| Name | Type | Description |
| --- | --- | --- |
| id | string | Id of the new node |
| label | string | Label of the node |


##### Returns:

| Type | Description |
| --- | --- |
| otris.treechart.TreeNode | Created tree node |


**getRoot()**
Gets the root node of the tree.


**setRoot(node)**
Sets the root node of the tree.

| Name | Type | Description |
| --- | --- | --- |
| node | otris.treechart.TreeNode | Root node of the tree |


**transfer(){string}**
Transfer function generating the data for the Dynamic Tree Chart.


##### Returns:

| Type | Description |
| --- | --- |
| string | JSON representation of the gathered data |