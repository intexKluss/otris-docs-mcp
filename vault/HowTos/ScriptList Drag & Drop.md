---
title: "Drag &amp; Drop von Zeilen"
source: "https://otris.software/documents/howto/list/scriptlist-dnd.html"
---

# Drag & Drop von Zeilen


Abb. 1 - Einzelne Zeile verschiebenAbb. 2 - Mehrere Zeilen verschiebenAbb. 3 - Zeile in andere Gruppe verschieben

Die Zeilen einer ScriptList können per Drag & Drop an andere Positionen verschoben werden. Hierbei wird zwischen client-seitigem und server-seitigem Verschieben von Zeilen unterschieden.


## Client-Seitig Zeilen verschieben

Hierzu muss auf der ScriptList [[Script Extensions API/otris.scriptlist.List#setMoveRows|setMoveRows(true)]] ausgeführt werden. Die Zeilen werden dann in der Ansicht verschoben, ohne dass das serverseitige Skript nochmal ausgeführt wird.


```javascript
list.setMoveRows(true);
```

list.setMoveRows(true);
## Server-Seitig Zeilen verschieben

Hierfür muss auf der ScriptList mit [[Script Extensions API/otris.scriptlist.List#addListener|addListener("moveRow")]] ein Handler für das serverseitige Verschieben von Zeilen aktiviert werden. [[Script Extensions API/otris.scriptlist.List#setMoveRows|setMoveRows(true)]] wird dabei implizit eingeschaltet.


```javascript
list.addListener("moveRow");
```

list.addListener("moveRow");Beim Verschieben der Zeilen wird das Ursprungs-Skript nach dem Drop ausgeführt und ein **ScriptList-Event** übergeben, welches mit [[Script Extensions API/otris.scriptlist#getScriptListEvent|getScriptListEvent()]] abgerufen werden kann.


```javascript
var event = scriptlistAPI.getScriptListEvent();
```

var event = scriptlistAPI.getScriptListEvent();In diesem Objekt sind dann alle Informationen zum handeln des Drops zusammengefasst.


### Aufbau des Skriptlist-Events beim Drop


```javascript
{
 name: "moveRow", // Event Name
 ids: [<id_row_1>, <id_row_2>,...], // ids der gedraggten Zeilen
 newIndex: Number,  // Index der Zeile auf der gedroppt wurde
 newGroup: {
   <grouping_1>: <group1_label>,  // <Spalte:Wert> der Gruppe auf oder in der gedroppt wurde
   <grouping_2>: <group2_label>,
   ...
 },
 newGroupIds: {
   <grouping_1>: <group1_id>,  // <Spalte:Id> der Default-Gruppe auf oder in der gedroppt wurde
   <grouping_2>: <group2_id>,
   ...
 }
}
```

{
 name: "moveRow", // Event Name
 ids: [<id_row_1>, <id_row_2>,...], // ids der gedraggten Zeilen
 newIndex: Number,  // Index der Zeile auf der gedroppt wurde
 newGroup: {
   <grouping_1>: <group1_label>,  // <Spalte:Wert> der Gruppe auf oder in der gedroppt wurde
   <grouping_2>: <group2_label>,
   ...
 },
 newGroupIds: {
   <grouping_1>: <group1_id>,  // <Spalte:Id> der Default-Gruppe auf oder in der gedroppt wurde
   <grouping_2>: <group2_id>,
   ...
 }
}
### Beispiel ScriptList-Event beim Drop in einer neuen Gruppe

Die Zeile wurde hier in der Spalte **abteilung** innerhalb oder auf der Gruppe **Entwicklung** gedroppt.


```javascript
{
    name:  "moveRow",
    ids:   ["docfeat_fi20200000002914"],
    newIndex: 9,
    newGroup: {
      abteilung: "Entwicklung"
    },
    newGroupIds: {
      abteilung: "research"
    }
}
```

{
    name:  "moveRow",
    ids:   ["docfeat_fi20200000002914"],
    newIndex: 9,
    newGroup: {
      abteilung: "Entwicklung"
    },
    newGroupIds: {
      abteilung: "research"
    }
}
### Event-Handling nach Drop

Nach dem Drop kann das ausgeführte Script die gesamte Liste entsprechend der neuen Reihenfolge zurückgeben oder das Ergebnis der Drag & Drop Aktion validieren/falsifizieren und optional auch eine Nachricht anzeigen.

**Beispielcode ganze Liste zurückgeben**


```javascript
//  check for event
var event = scriptListAPI.getScriptListEvent();

//  check event type
if (event && event.name === "moveRow") {
    newIndex = event.newIndex;

    var idsArr = event.ids;	//	contains all selected ids

    if (newIndex < oldIndex)) {
		// move rows to new position in data
    } else {
		// move rows to new position in data
    }
}

// Fill the list with data
for (var i = 0; i < baseList.length; i++) {
    var row = list.addRow(/* new data from list */);
}
...
context.returnValue = list.transfer();
```

//  check for event
var event = scriptListAPI.getScriptListEvent();

//  check event type
if (event && event.name === "moveRow") {
    newIndex = event.newIndex;

    var idsArr = event.ids;	//	contains all selected ids

    if (newIndex < oldIndex)) {
		// move rows to new position in data
    } else {
		// move rows to new position in data
    }
}

// Fill the list with data
for (var i = 0; i < baseList.length; i++) {
    var row = list.addRow(/* new data from list */);
}
...
context.returnValue = list.transfer();**Beispielcode Verschieben validieren**


```javascript
//  check event type
if(event && event.name === "moveRow") {
	context.returnType = "scriptList";
	return "MOVE_ROW_SUCCESS";
}
```

//  check event type
if(event && event.name === "moveRow") {
	context.returnType = "scriptList";
	return "MOVE_ROW_SUCCESS";
}**Beispielcode Verschieben falsifizieren**


```javascript
//  check event type
if(event && event.name === "moveRow") {
	context.returnType = "scriptList";
	return "MOVE_ROW_DENIED";
}
```

//  check event type
if(event && event.name === "moveRow") {
	context.returnType = "scriptList";
	return "MOVE_ROW_DENIED";
}**Beispielcode Validieren/Falsifizieren mit Anzeige einer Nachricht**


```javascript
//  check event type
if(event && event.name === "moveRow") {
	newIndex = event.newIndex;

	if(newIndex < 6) {

		var res = new scriptListAPI.MoveRowResult({
			success: true,
			message: "Erlaubt!"
		});

		context.returnType = "scriptList";
		return res.transfer();
	}
	else {

		var res = new scriptListAPI.MoveRowResult({
			success: false,
			message: "Nicht erlaubt!"
		});

		context.returnType = "scriptList";
		return res.transfer();
	}
}
```

//  check event type
if(event && event.name === "moveRow") {
	newIndex = event.newIndex;

	if(newIndex < 6) {

		var res = new scriptListAPI.MoveRowResult({
			success: true,
			message: "Erlaubt!"
		});

		context.returnType = "scriptList";
		return res.transfer();
	}
	else {

		var res = new scriptListAPI.MoveRowResult({
			success: false,
			message: "Nicht erlaubt!"
		});

		context.returnType = "scriptList";
		return res.transfer();
	}
}**Beispielcode Zeilen in andere Gruppen verschieben**


```javascript
//  check event type
if(event && event.name === "moveRow" && event.newGroup !== undefined) {

	//	apply new group data
	var personFile = context.getFileById(event.ids[0]);
	personfile["abteilung"] = personfile[event.newGroup["abteilung"]];
	personFile.sync();

	return "MOVE_ROW_SUCCESS";
}
```

//  check event type
if(event && event.name === "moveRow" && event.newGroup !== undefined) {

	//	apply new group data
	var personFile = context.getFileById(event.ids[0]);
	personfile["abteilung"] = personfile[event.newGroup["abteilung"]];
	personFile.sync();

	return "MOVE_ROW_SUCCESS";
}
## Beispiele zum Ausprobieren

Alle Skripte können mit der Eigenschaft **runScript** jeweils an einem Ordner angebunden werden. Einige Beispiele generieren eine eigene Liste und speichern diese im PropCache. Beim Drag & Drop im Grid wird das Datenmodell im PropCache des Servers verändert und das Ergebnis dann zurück an den Client geschickt.

Download: [Ganze Liste zurückgeben](scriptList_moveRemote.js)

Download: [Verschieben validieren](scriptList_moveRemote_SUCCESS.js)

Download: [Verschieben falsifizieren](scriptList_moveRemote_DENIED.js)

Download: [Validieren/Falsifizieren mit Anzeige einer Nachricht](scriptList_moveRemote_MoveRowResult.js)

Zum Testen des Drag & Drops in andere Gruppen, müssen vorher ein paar Vorgänge des Mappentyps **Person** angelegt werden.

Download: [Mappentyp für Zeilen in andere Gruppe verschieben](Person.xml)

Download: [Skript für Zeilen in andere Gruppe verschieben](scriptList_grouping_person_short.js)