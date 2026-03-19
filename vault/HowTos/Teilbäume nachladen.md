---
title: "Teilbäume nachladen"
source: "https://otris.software/documents/howto/outbar-tree/lazy-load-subtree.html"
---

# Teilbäume nachladen

Seit der Documents Version `5.0d HF2` gibt es für Skriptbäume die Möglichkeit Teilbäume
eines Baums erst beim Öffnen eines Knotens zu laden.
Um diese Funktionalität für einen Baum zu nutzen muss auf der Wurzel (*root item*)
des Baumes das Attribut `lazyLoad` auf `true` gesetzt werden.


```javascript
//#import "ScriptTree"
rootItem = new otris.TreeItem("treeLazyLoad", "Lazy Load Tree");
rootItem.lazyLoad = true;
// [...]
context.returnType = "scripttreeoutbar";
return rootItem.transfer();
```

//#import "ScriptTree"
rootItem = new otris.TreeItem("treeLazyLoad", "Lazy Load Tree");
rootItem.lazyLoad = true;
// [...]
context.returnType = "scripttreeoutbar";
return rootItem.transfer();Für Knoten deren Teilbäume nachgeladen werden sollen muss das Attribut `hasChilds` auf `true` gesetzt werden.
Diesen Knoten darf dann auch **nicht** über `addItem` ein Kindknoten zugeordnet werden.


```javascript
newNode = new otris.TreeItem("newNodeId", "New node title");
newNode.hasChilds = true;
rootItem.addItem(newNode);
```

newNode = new otris.TreeItem("newNodeId", "New node title");
newNode.hasChilds = true;
rootItem.addItem(newNode);Beim Öffnen eines so definierten Knotens wird das *Baum-Skript* mit einem **Tree-Event** aufgerufen.
Im Fall des Nachladens enthält das Event den Namen `subtree` und die ID (`nodeId`) des Knotens, der geöffnet werden soll.
Als Rückgabe wird der Wurzelknoten des Teilbaums mit den angeforderten Kindknoten erwartet.


```javascript
var treeEvent = otris.tree.getScriptTreeEvent();
// Prüfen ob das Skript über ein "subtree"-Event aufgerufen wurde
if(treeEvent && treeEvent.name === "subtree") {
    nodeId = treeEvent.nodeId;
    // Erzeuge den Wurzelknoten des Teilbaums
    subtreeRootItem = new otris.TreeItem(nodeId, nodeId);
    for (index = 1; index < 5; index++) {
        childNodeId = nodeId +"_"+ index;
        childNode = new otris.TreeItem(childNodeId, "child node " + childNodeId);
        childNode.hasChilds = true;
        // Füge die Kindknoten hinzu
        subtreeRootItem.addItem(childNode);
    }
    return subtreeRootItem.transfer();
}
```

var treeEvent = otris.tree.getScriptTreeEvent();
// Prüfen ob das Skript über ein "subtree"-Event aufgerufen wurde
if(treeEvent && treeEvent.name === "subtree") {
    nodeId = treeEvent.nodeId;
    // Erzeuge den Wurzelknoten des Teilbaums
    subtreeRootItem = new otris.TreeItem(nodeId, nodeId);
    for (index = 1; index < 5; index++) {
        childNodeId = nodeId +"_"+ index;
        childNode = new otris.TreeItem(childNodeId, "child node " + childNodeId);
        childNode.hasChilds = true;
        // Füge die Kindknoten hinzu
        subtreeRootItem.addItem(childNode);
    }
    return subtreeRootItem.transfer();
}Das gesamte Beispielskript kann hier heruntergeladen werden.

Download: [scriptTree_lazyLoad.js](scriptTree_lazyLoad.js)


```javascript
//#import "ScriptTree"
var rootItem, newNode, treeEvent;

rootItem = new otris.TreeItem("treeLazyLoad", "Lazy Load Tree");
rootItem.lazyLoad = true;

newNode = new otris.TreeItem("id1", "New node title 1");
newNode.hasChilds = true;
rootItem.addItem(newNode);

newNode = new otris.TreeItem("id2", "New node title 2");
newNode.hasChilds = true;
rootItem.addItem(newNode);

function returnSubtree(nodeId) {
    // Erzeuge den Wurzelknoten des Teilbaums
    var index, childNodeId, childNode,
        subtreeRootItem = new otris.TreeItem(nodeId, nodeId);
    for (index = 1; index < 5; index++) {
        childNodeId = nodeId +"_"+ index;
        childNode = new otris.TreeItem(childNodeId, "child node " + childNodeId);
        childNode.hasChilds = true;
        // Füge die Kindknoten hinzu
        subtreeRootItem.addItem(childNode);
    }
    return subtreeRootItem.transfer();
}


treeEvent = otris.tree.getScriptTreeEvent();
// Prüfen ob das Skript über ein "subtree"-Event aufgerufen wurde
if(treeEvent && treeEvent.name === "subtree") {
    return returnSubtree(treeEvent.nodeId);
}

context.returnType = "scripttreeoutbar";
return rootItem.transfer();
```

//#import "ScriptTree"
var rootItem, newNode, treeEvent;

rootItem = new otris.TreeItem("treeLazyLoad", "Lazy Load Tree");
rootItem.lazyLoad = true;

newNode = new otris.TreeItem("id1", "New node title 1");
newNode.hasChilds = true;
rootItem.addItem(newNode);

newNode = new otris.TreeItem("id2", "New node title 2");
newNode.hasChilds = true;
rootItem.addItem(newNode);

function returnSubtree(nodeId) {
    // Erzeuge den Wurzelknoten des Teilbaums
    var index, childNodeId, childNode,
        subtreeRootItem = new otris.TreeItem(nodeId, nodeId);
    for (index = 1; index < 5; index++) {
        childNodeId = nodeId +"_"+ index;
        childNode = new otris.TreeItem(childNodeId, "child node " + childNodeId);
        childNode.hasChilds = true;
        // Füge die Kindknoten hinzu
        subtreeRootItem.addItem(childNode);
    }
    return subtreeRootItem.transfer();
}


treeEvent = otris.tree.getScriptTreeEvent();
// Prüfen ob das Skript über ein "subtree"-Event aufgerufen wurde
if(treeEvent && treeEvent.name === "subtree") {
    return returnSubtree(treeEvent.nodeId);
}

context.returnType = "scripttreeoutbar";
return rootItem.transfer();