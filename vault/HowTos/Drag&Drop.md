---
title: "Drag&amp;Drop"
source: "https://otris.software/documents/howto/outbar-tree/drag-and-drop.html"
---

# Drag&Drop

Die in diesem HowTo beschriebene Drag&Drop-Funktionalität steht ab
der Version **8.0a HF2** von *DOCUMENTS 5* zur Verfügung.


## Konfiguration

Seit der oben genannten Version ist es möglich Portalskripte für verschiedene
Drag&Drop-Ereignisse zu konfigurieren. Skripte können für Ordner, Skript-Bäume
und Aktenpläne hinterlegt werden. Die Skripte müssen im *DOCUMENTS Manager* an den
folgenden Stellen definiert werden. Für die Skript-Bäume erfolgt die Definition direkt
im dazugehörigen Portalskript (Drag&Drop für Skript-Bäume).


### Drag&Drop für Ordner

Für Ordner wird in den globalen *DOCUMENTS* Eigenschaften eine Eigenschaft
`DefaultDropOnFolderScript` angelegt.


Abb. 1 - Definition des DefaultDropOnFolderScript im DOCUMENTS Manager

Die vorhandene Drag&Drop-Funktionalität auf Ordnern wird dabei nicht überschrieben,
sondern hat in jedem Fall eine höhere Priorität.


### Drag&Drop für Aktenpläne

Um Drag&Drop bei Aktenplänen zu nutzen muss der Name des auszuführenden Portalskripts
im *DOCUMENTS Manager* als Eigenschaft `dropActionScriptName` der Outbar hinterlegt
werden, in der der Aktenplan angezeigt wird.


Abb. 2 - Definition des dropActionScriptName als Eigenschaft der Outbar


### Drag&Drop für Skript-Bäume

Bei Skript-Bäumen werden die Portalskripte für die Drag&Drop Funktionalität direkt
im Skript des Skript-Baums angegeben. Über die Eigenschaft `docItemsDropAction` auf
einem *TreeItem* wird das Portalskript festgelegt.


#### Beispiel-Skript für einen Skript-Baum mit docItemsDropAction


```javascript
//#import "ScriptTree"
// Beispiel-Skript für einen Skript-Baum mit docItemsDropAction
//
var item, rootItem = new otris.TreeItem(1909, "Drag&Drop Beispiel-Baum");

item = new otris.TreeItem(1910, "Drop Action 10");
item.action = 'executeScript:TS_ScriptList_Example';
item.docItemsDropAction = 'executeScript:DD-Example_DropActionScript';
rootItem.addItem(item);

// …

context.returnType = "scriptTreeOutbar";
//call the transfer function to get the scripttree XML
return rootItem.transfer();
```

//#import "ScriptTree"
// Beispiel-Skript für einen Skript-Baum mit docItemsDropAction
//
var item, rootItem = new otris.TreeItem(1909, "Drag&Drop Beispiel-Baum");

item = new otris.TreeItem(1910, "Drop Action 10");
item.action = 'executeScript:TS_ScriptList_Example';
item.docItemsDropAction = 'executeScript:DD-Example_DropActionScript';
rootItem.addItem(item);

// …

context.returnType = "scriptTreeOutbar";
//call the transfer function to get the scripttree XML
return rootItem.transfer();
## Verwendung

Die so definierten Skripte werden immer dann aufgerufen wenn Mappen
(Bei Skript-Bäumen auch Einträge aus Skript-Listen) auf Ordner, Aktenpläne
bzw. Skript-Bäume mit der Maus *„gezogen und fallen gelassen“* werden.


Abb. 3 - Beispiel für eine Drag&Drop Aktion

Das jeweilige Skript bekommt dabei ein JSON kodiertes `dndAction`-Objekt übergeben.
Im Skript wandelt man diesen JSON-String wieder in ein JavaScript-Objekt um
und hat dann Zugriff auf die folgenden Eigenschaften.


```javascript
var dndAction = JSON.parse(dndActionJSON);
```

var dndAction = JSON.parse(dndActionJSON);
#### Eigenschaften von dndAction

- treeType (folderTree|filingPlanTree|scriptTree)
- nodeId ID des Knoten auf dem das Drop-Event ausgeführt wurde
- action copy/move
- itemIds IDs der gedroppten Elemente
- itemType file/genericItem/.. Typ der IDs
- (sourceFolder) ID des Ordners (Nur gesetzt wenn die gedroppten Elemente aus einem Ordner stammen.)
- (dbValue) Datenbankwert für ein Mappenfeld vom Type Aktenplan (Nur in Kombination mit dem treeType filingPlanTree. Der Wert kann für ein Mappenfeld vom Typ Aktenplan verwendet werden.)


### Beispiel Skript

Dieses Beispiel zeigt eine Liste der *„gedroppten“* Mappen an und gibt zusätzlich das `dndAction`-Objekt
in formatierter Form aus.


```javascript
// Parse dndActionJSON to get dndAction object
// (treeType, nodeId, action, itemIds, itemType, (sourceFolder))
var dndAction = JSON.parse(dndActionJSON),
    ids  = dndAction.itemIds,
    length = ids.length,
    retVal = "", liEl = "", file, i;

for(i=0; i<length;i+=1) {
	file = context.getFileById(ids[i]);
	liEl += "<li>" + file.getAutoText("title") + "</li>";
}

retVal += "<h2>Mappentitel: </h2><ul style='margin-left:20px;'>" + liEl + "</ul>";
retVal += "<h2>dndAction: </h2><pre>" + JSON.stringify(dndAction, null, 2) + "</pre>";

context.returnType = "HTML";
return retVal;
```

// Parse dndActionJSON to get dndAction object
// (treeType, nodeId, action, itemIds, itemType, (sourceFolder))
var dndAction = JSON.parse(dndActionJSON),
    ids  = dndAction.itemIds,
    length = ids.length,
    retVal = "", liEl = "", file, i;

for(i=0; i<length;i+=1) {
	file = context.getFileById(ids[i]);
	liEl += "<li>" + file.getAutoText("title") + "</li>";
}

retVal += "<h2>Mappentitel: </h2><ul style='margin-left:20px;'>" + liEl + "</ul>";
retVal += "<h2>dndAction: </h2><pre>" + JSON.stringify(dndAction, null, 2) + "</pre>";

context.returnType = "HTML";
return retVal;