---
title: "Class: NodeStyle"
source: "https://otris.software/documents/api/scriptextensions/otris.treechart.NodeStyle.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| color | string | Color code for the fill color of the node |
| borderColor | string | Color code for the border of the node |
| font | string | Name of the font |
| fontColor | string | Color code for the |
| fontSize | string | Font size of the node text |
| borderRoundness | number | Sharpness of the node corner |
| vMargin | number | Vertical margin of the node |
| hMargin | number | Horizontal margin of the node |


##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| minWidth | number | Set a minimum width for the node |
| maxWidth | number | Set a maximum width for the node |
| staticWidth | number | Enforce a specific width for the node |


##### Example


```
// #import [TreeChart]
var chart = new otris.treechart.TreeChart();
chart.title = "Example for the Dynamic Tree Chart";
var root = chart.createNode("1", "Root");
var leaf1 = chart.createLeaf("2", "1st leaf");
var node2 = chart.createLeaf("3", "2nd node");
var leaf2 = chart.createLeaf("4", "2nd leaf");
var leaf3 = chart.createLeaf("5", "3rd leaf");
var style = new otris.treechart.NodeStyle("#95D0F9", "#79C3F8", "Arial", "#333333", 11, 14, 6, 16);
style.applyOn(leaf1);
style.applyOn(leaf3);
root.addChild(leaf1);
root.addChild(node2);
node2.addChild(leaf2);
node2.addChild(leaf3);
chart.setRoot(root);

context.returnType = "treeChart";
return chart.transfer();
```


### Methods


**applyOn(node){otris.treechart.TreeNode}**
Applies the style specification on a node.

| Name | Type | Description |
| --- | --- | --- |
| node | otris.treechart.TreeNode | The node the style should applied on |


##### Returns:

| Type | Description |
| --- | --- |
| otris.treechart.TreeNode | The node with the applied style |


**setProperty(propertyName, propertyValue)**
Set a NodeStyle property.

- color (string) Color code for the fill color of the node
- borderColor (string) Color code for the border of the node
- font (string) Name of the font
- fontColor (string) Color code for the
- fontSize (string) Font size of the node text
- fontStyle (string) Specifies the font style for the node text. Possible values: normal, italic, oblique, initial, inherit
- borderRoundness (number) Sharpness of the node corner
- vMargin (number) Vertical margin of the node
- hMargin (number) Horizontal margin of the node

| Name | Type | Description |
| --- | --- | --- |
| propertyName | string | property name |
| propertyValue | string | number | property value |