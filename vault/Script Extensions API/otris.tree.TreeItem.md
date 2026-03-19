---
title: "Class: TreeItem"
source: "https://otris.software/documents/api/scriptextensions/otris.tree.TreeItem.html"
---

### Constructors


****
| Name | Type | Description |
| --- | --- | --- |
| id | string | Unique id of the item in the tree |
| name | string | Name of this node |


##### Example


```
// rootnode of the tree
var rootItem = new otris.tree.TreeItem(4711, "RootNodeLabel");
// first entry
var subItem = new otris.tree.TreeItem(0815, "SubNodeLabel");
//action will be fired if the node is clicked
subItem.action = "showFile:" + docFile.getAutoText("%id%");
subItem.isActive = true; // directly selected
//add node to the rootnode
rootItem.addItem(subItem);
//call the transfer function to get the scripttree XML
return rootItem.transfer();
```


### Members


**actionstring**
Action which will be fired when the node is clicked.

Possible actions `showFile:[FILE_ID]`, `showFolder:[FOLDER_ID]` and `executeScript:[SCRIPTNAME]`


##### Example


```
rootItem.action = "showFile:" + myFileId;
```


**activebulletstring**
Adds an icon to the tree item. Possible values: **image path**, **entypo icon** or **ionicons icon**


##### Example


```
item.activebullet = "entypo:help;";
```


**bullet**
**DEPRECATED!** Do not use this attribute!


**busyPanel"Dialog" "Gadget" "MainFile" "MainFileGentable" "MainList" "MainTree" "Workspace"**
Use this to start a busy panel if the defined action may have a longer execution time.

- Since:
DOCUMENTS 5.0i


##### Example


```
item.busyPanel = "MainList";
```


**docItemsDropActionstring**
Drop action which will be fired when something will be dropped to this node.

The script is only executed if items from within documents are dropped on the node

The script is called with the following json encoded parameter object (parameter name: `dndActionJSON`):


```
dndAction = {
   treeType  string  "scriptTree"
   nodeId    string  id of the drop target
   action    string  "copy"/"move"
   itemIds   array   ids of the dropped items
   itemType  string  type of the items
}
```

Decode the parameter object in the script:


```
var dndAction = JSON.parse(dndActionJSON);
```


##### Example


```
item.docItemsDropAction = "executeScript:myScript";
```


**draggableboolean**
Specifies if the tree item is draggable (defaults to `true`)


##### Example


```
treeItem.draggable = false;
```


**dropactionstring**
Drop action which will be fired when something will be dropped to this node.

The defined script is executed before a file is uploaded. The script should return

a fileId of a document. script returnType = (showFile|showNewFile)


##### Example


```
item.dropaction = "executeScript:myScript&myParam=1234";
```


**expandFirstTreeItemboolean**
Exand the first TreeItem (Only relevant for the root node and `treeVisualizationType = "sidebar"`)

- Since:
DOCUMENTS 5.0g HF2


##### Example


```
rootItem.expandFirstTreeItem = true;
```


**hasChildsboolean**
Specifies if the tree item has childs (relevant for lazy loading, defaults to `false`)

- Since:
DOCUMENTS 5.0d HF2


##### Example


```
treeItem.hasChilds = true;
```


**idstring**
Unique id of the node in the tree


**isActiveboolean**
Selection of this node true or false


**isDisabledboolean**
Disables selection of this node


**itemsArray.<otris.tree.TreeItem>**
List of nodes


**lazyLoadboolean**
If set to `true` the children of the nodes are lazy loaded (Only relevant for the root node, defaults to `false`)
**Note:** Lazy loading is only used if the node data does not contain `children` (added with [[Script Extensions API/otris.tree.TreeItem#addItem|addItem]]) and the `hasChilds` flag is set to `true`.

In the example below you can see how to return a subtree using `otris.tree.getScriptTreeEvent()`.

- Since:
DOCUMENTS 5.0d HF2


##### Example


```
rootItem.lazyLoad = true;

var nodeId, subTreeRoot, index, newNode,
    treeEvent = otris.tree.getScriptTreeEvent();
if(treeEvent && treeEvent.name === "subtree" && treeEvent.nodeId) {
    nodeId = treeEvent.nodeId;
    subTreeRoot = new otris.tree.TreeItem(nodeId, nodeId);
    for (index = 0; index < 5; index++) {
        newNode = new otris.tree.TreeItem(nodeId + "_" + index, nodeId + "_" + index);
        newNode.activebullet = "entypo:leaf";
        subTreeRoot.addItem(newNode);
    }
    return subTreeRoot.transfer();
}
```


**namestring**
Name of the tree node


**openTreeLevelnumber**
Sets the opened tree level.


**ordernumber**
Used to sort child items. Use a value below the default 0 to move items to the end.

- Since:
DOCUMENTS 5.0i


##### Example


```
item.order = -1;
```


**parentotris.tree.TreeItem**
Parent of this child, or null if it is the root node


**preventDeselectTreeItemboolean**
Prevents the currently selected tree-item from loosing selection, if a folder that has an id that is not contained within the tree entries is opened. (Only relevant for the root node)

- Since:
DOCUMENTS 5.0g HF2


##### Example


```
rootItem.preventDeselectTreeItem = false;
```


**tooltipstring**
Tooltip for the tree node

- Since:
DOCUMENTS 5.0c


**treeItemsDropActionstring**
The tree item drop action will be fired when one or more tree items are dropped on a tree node.

The script is called with the following json encoded parameter object (parameter name: `dndActionJSON`):
**This property is only relevant for the root node**


```
dndAction = {
   nodeId    string  id of the drop target
   itemIds   array   ids of the dropped nodes
   action    string  "copy"/"move"
}
```

Decode the parameter object in the script:


```
var dndAction = JSON.parse(dndActionJSON);
```


##### Example


```
item.treeItemsDropAction = "executeScript:treeItemsDropScript";
```


**treeVisualizationTypestring**
Defines the type of visualization. (possible values: `tree` (default), `sidebar`)

- Since:
DOCUMENTS 5.0f


##### Example


```
rootItem.treeVisualizationType = "sidebar";
```


**updateOutbarLabelboolean**
If set to true the outbar label is updated with the defined tree title (Only relevant for the root node)


##### Example


```
rootItem.updateOutbarLabel = false;
```


**url**
**DEPRECATED!** Do not use this attribute!


### Methods


**addItem(treeItem)**
Add a new node as a child node to this node.

This node will be the parent of the added node.

| Name | Type | Description |
| --- | --- | --- |
| treeItem | otris.tree.TreeItem | child node |


##### Example


```
var rootItem = new otris.tree.TreeItem(4711, "RootNodeLabel");
var subItem = new otris.tree.TreeItem(0815, "SubNodeLabel");
rootItem.addItem(subItem);
```


**convertToXMLString(input){string}**
Escapes a xml string. Applicable for both xml text and xml attribute content. For internal purposes only!
*Note: If the input is not a string, then it will be returned unchanged!*

| Name | Type | Description |
| --- | --- | --- |
| input | string | the unescaped xml string |

- See:
https://www.w3.org/TR/xml/#syntax


##### Returns:

| Type | Description |
| --- | --- |
| string | the escaped xml string |


**getAll(myLevel){string}**
Internal function for building the ScriptTree XML.

| Name | Type | Description |
| --- | --- | --- |
| myLevel | number | Current level in the tree |


##### Returns:

| Type | Description |
| --- | --- |
| string | XML document representing the tree |


**getAsXML(){string}**
Internal function returning the attributes of this class as ScriptTree XML.


##### Returns:

| Type | Description |
| --- | --- |
| string | XML fragment with the attributes of this class |


**remove()**
Removes the item from the items list of his parent (if parent exists).

- Since:
DOCUMENTS 5.0i


**setAcceptedTypes(types)**
Sets the accepted types (e.g. for drag and drop) for this tree item (defaults to: `["node"]`)

See `setType` for valid type strings

| Name | Type | Description |
| --- | --- | --- |
| types | Array.<string> | An array of accepted types |


**setOpenTreeLevel(level)**
Set the level up to which the tree will be opened.

| Name | Type | Description |
| --- | --- | --- |
| level | number | Level up wich the tree will be opened |


**setType(type)**
Sets the type for this tree item (defaults to: `node`)

Only accepts the following characters for the given string: `a-z`,`0-9`,`-` and `_`

Non valid strings are automatically transformed (characters are transformed to lower case or replaced with `_`)

| Name | Type | Description |
| --- | --- | --- |
| type | string | The type for this tree item |


**transfer(){string}**
Make this object ready for being transferred to the client.


##### Returns:

| Type | Description |
| --- | --- |
| string | transferable string |