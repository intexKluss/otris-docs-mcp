---
title: "Knoten gruppieren"
source: "https://otris.software/documents/howto/treechart/groupable.html"
---

# Knoten gruppieren

Wenn man in einer **TreeChart** an bestimmten Stellen sehr viele Blätter (Knoten ohne Kinder) hat, kann der visualisierte Graph unübersichtlich werden.


Abb. 1 - Einfache TreeChart mit vielen Kindern auf einer Ebene

Hier gibt es die Möglichkeit Abhilfe zu schaffen, indem man bei den Blattknoten das Attribut `"groupable"=true` setzt.


```javascript
node.groupable = true;
```

node.groupable = true;In den *ScriptExtensions* gibt es auch die Methode [[Script Extensions API/otris.treechart.TreeNode#setGroupable|setGroupable]] um dieses Attribut zu setzen.


```javascript
node.setGroupable(true);
```

node.setGroupable(true);Die gruppierten Blattknoten werden dann unter einem automatisch ausgewählten Hauptknoten zusammengefasst:


Abb. 2 - Beispiel mit gruppierten Kindern

Zusätzlich gibt es noch ein paar allgemeine Properties die man auf der Chart setzen kann, um die Darstellung zu beeinflussen:


```javascript
chart.alignGroupedChildren = "left|center|right"; // Stellt Gruppenknotenkinder linkbündig, zenrtiert oder rechtsbündig dar, default ist linksbündig
chart.oneGroupHeightByLevel = true; // Sorgt dafür, dass alle Gruppen Knoten auf einer Ebene die selbe Höhe haben
chart.oneNodeWidthByGroup = true;  // Sorgt dafür, dass alle Kindknoten einer Gruppe dieselbe Breite haben
chart.oneNodeWidthByLevel = true; // bewirkt, dass alle Knoten auf der selben Ebene auch die selbe Breite haben
chart.groupConnectorIndentMargin = 10; // Ausgangspunkt der Kante die zu den Kinderknoten führt
chart.groupIndentMargin = 20; // Länge der einführenden Kante der gruppierten Kindknoten
chart.groupNodeOverflow = 5;   // Breitenabstand den der Elternknoten über seine gruppierten Kindknoten hinausgeht
chart.groupedChildNodeSeparation = 10; // Abstand zwischen gruppierten Kindknoten
chart.firstGroupedChildNodeSeparation = 40; // Vertikaler Abstand vom Elternknoten zum Ersten gruppierten Kind
```

chart.alignGroupedChildren = "left|center|right"; // Stellt Gruppenknotenkinder linkbündig, zenrtiert oder rechtsbündig dar, default ist linksbündig
chart.oneGroupHeightByLevel = true; // Sorgt dafür, dass alle Gruppen Knoten auf einer Ebene die selbe Höhe haben
chart.oneNodeWidthByGroup = true;  // Sorgt dafür, dass alle Kindknoten einer Gruppe dieselbe Breite haben
chart.oneNodeWidthByLevel = true; // bewirkt, dass alle Knoten auf der selben Ebene auch die selbe Breite haben
chart.groupConnectorIndentMargin = 10; // Ausgangspunkt der Kante die zu den Kinderknoten führt
chart.groupIndentMargin = 20; // Länge der einführenden Kante der gruppierten Kindknoten
chart.groupNodeOverflow = 5;   // Breitenabstand den der Elternknoten über seine gruppierten Kindknoten hinausgeht
chart.groupedChildNodeSeparation = 10; // Abstand zwischen gruppierten Kindknoten
chart.firstGroupedChildNodeSeparation = 40; // Vertikaler Abstand vom Elternknoten zum Ersten gruppierten Kind

Abb. 3 - Auswirkung der Properties in Zusammenhang mit groupable


## Beispielskript für eine einfache TreeChart mit groupable per ScriptExtensions

Download: [treeChartRL_groupable.js](treeChartRL_groupable.js)


```javascript
// #import "TreeChart"
// Create the TreeChart and initialize variables
var node, dev, documents, privacy, frontend, frontend2, frontend3, backend, node1, root, nodeStyle, chart = new otris.treechart.TreeChart();


var actEvents = undefined;


// Add some options
nodeStyle = new otris.treechart.NodeStyle("#BCC5AA", "#374F5A", "Roboto", "#374F5A", 11, 0, 0, 32);
chart.defaultNodeStyle = nodeStyle;

myNodeStyle = new otris.treechart.NodeStyle("#00e500", "#374F5A", "Roboto", "#374F5A", 11, 0, 0, 5);
myNodeStyle2 = new otris.treechart.NodeStyle("lime", "#374F5A", "Roboto", "#374F5A", 11, 0, 0, 5);

chart.backgroundColor = "#fff";
chart.orientation = "LR";
chart.displayBoxShadow = false;  //  Schatten anzeigen/ausblenden
chart.useGradientBoxColor = false;  //  Farbverlauf zum Füllen der Knoten
chart.oneNodeWidthByLevel = true;
chart.groupConnectorIndentMargin = 5;
chart.groupIndentMargin = 20;

// Create a node
root = chart.createNode("1", "otris software AG");

node = chart.createLeaf("2", "Support");
root.addChild(node);


dev = chart.createNode("3", "Entwicklung");
root.addChild(dev);

documents = chart.createNode("20", "Documents");
dev.addChild(documents);

frontend = chart.createNode("4", "Frontend");
documents.addChild(frontend);

node1 = chart.createNode("5", "Jan Snoma");
node1.setGroupable(true);
frontend.addChild(node1);

node1 = chart.createNode("6", "Martin Neuer");
node1.setGroupable(true);
frontend.addChild(node1);

node1 = chart.createNode("7", "David Trommer");
node1.setGroupable(true);
frontend.addChild(node1);

frontend2 = chart.createNode("14", "Frontend 2");
frontend.addChild(frontend2);

node = chart.createNode("15", "Volker Dasvidanja");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("18", "Sigmund Freud");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("19", "Bernhard Nietsche");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("21", "Maximilian Bell");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("22", "Harley Davidson");
node.setGroupable(true);
frontend2.addChild(node);

frontend3 = chart.createNode("16", "Frontend 3");
frontend.addChild(frontend3);

node = chart.createNode("17", "Sven Quack");
node.setGroupable(true);
frontend3.addChild(node);

backend = chart.createNode("8", "Backend");
documents.addChild(backend);

node1 = chart.createNode("9", "Janine Heller");
node1.setGroupable(true);
backend.addChild(node1);

node1 = chart.createNode("10", "Phillip Richter");
node1.setGroupable(true);
backend.addChild(node1);

node1 = chart.createNode("11", "Willi Meißner");
node1.setGroupable(true);
backend.addChild(node1);

privacy = chart.createNode("12", "Privacy");
dev.addChild(privacy);

node1 = chart.createNode("13", "Dirk Honigmund");
node1.setGroupable(true);
privacy.addChild(node1);

// Set the root node on the TreeChart
chart.setRoot(root);
// Set the correct returnType and transfer the TreeChart to the client
context.returnType = "treeChart";
return chart.transfer();
```

﻿// #import "TreeChart"
// Create the TreeChart and initialize variables
var node, dev, documents, privacy, frontend, frontend2, frontend3, backend, node1, root, nodeStyle, chart = new otris.treechart.TreeChart();


var actEvents = undefined;


// Add some options
nodeStyle = new otris.treechart.NodeStyle("#BCC5AA", "#374F5A", "Roboto", "#374F5A", 11, 0, 0, 32);
chart.defaultNodeStyle = nodeStyle;

myNodeStyle = new otris.treechart.NodeStyle("#00e500", "#374F5A", "Roboto", "#374F5A", 11, 0, 0, 5);
myNodeStyle2 = new otris.treechart.NodeStyle("lime", "#374F5A", "Roboto", "#374F5A", 11, 0, 0, 5);

chart.backgroundColor = "#fff";
chart.orientation = "LR";
chart.displayBoxShadow = false;  //  Schatten anzeigen/ausblenden
chart.useGradientBoxColor = false;  //  Farbverlauf zum Füllen der Knoten
chart.oneNodeWidthByLevel = true;
chart.groupConnectorIndentMargin = 5;
chart.groupIndentMargin = 20;

// Create a node
root = chart.createNode("1", "otris software AG");

node = chart.createLeaf("2", "Support");
root.addChild(node);


dev = chart.createNode("3", "Entwicklung");
root.addChild(dev);

documents = chart.createNode("20", "Documents");
dev.addChild(documents);

frontend = chart.createNode("4", "Frontend");
documents.addChild(frontend);

node1 = chart.createNode("5", "Jan Snoma");
node1.setGroupable(true);
frontend.addChild(node1);

node1 = chart.createNode("6", "Martin Neuer");
node1.setGroupable(true);
frontend.addChild(node1);

node1 = chart.createNode("7", "David Trommer");
node1.setGroupable(true);
frontend.addChild(node1);

frontend2 = chart.createNode("14", "Frontend 2");
frontend.addChild(frontend2);

node = chart.createNode("15", "Volker Dasvidanja");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("18", "Sigmund Freud");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("19", "Bernhard Nietsche");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("21", "Maximilian Bell");
node.setGroupable(true);
frontend2.addChild(node);

node = chart.createNode("22", "Harley Davidson");
node.setGroupable(true);
frontend2.addChild(node);

frontend3 = chart.createNode("16", "Frontend 3");
frontend.addChild(frontend3);

node = chart.createNode("17", "Sven Quack");
node.setGroupable(true);
frontend3.addChild(node);

backend = chart.createNode("8", "Backend");
documents.addChild(backend);

node1 = chart.createNode("9", "Janine Heller");
node1.setGroupable(true);
backend.addChild(node1);

node1 = chart.createNode("10", "Phillip Richter");
node1.setGroupable(true);
backend.addChild(node1);

node1 = chart.createNode("11", "Willi Meißner");
node1.setGroupable(true);
backend.addChild(node1);

privacy = chart.createNode("12", "Privacy");
dev.addChild(privacy);

node1 = chart.createNode("13", "Dirk Honigmund");
node1.setGroupable(true);
privacy.addChild(node1);

// Set the root node on the TreeChart
chart.setRoot(root);
// Set the correct returnType and transfer the TreeChart to the client
context.returnType = "treeChart";
return chart.transfer();