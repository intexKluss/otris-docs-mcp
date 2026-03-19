---
title: "Mappen in ScriptList droppen"
source: "https://otris.software/documents/howto/list/scriptlist-file-dnd.html"
---

# Mappen in ScriptList droppen


Abb. 1 - Mappenicon in ScriptList droppen

In einer ScriptList können auch Vorgänge fallen gelassen werden.


## Dragbare Elemente

Um das Fallenlassen eines gedraggten Elements in der ScriptList zu erlauben, müssen dieser mit [[Script Extensions API/otris.scriptlist.List#setAcceptedDropTypes|setAcceptedDropTypes()]] erlaubte Drop-Typen zugewiesen werden.


```javascript
list.setAcceptedDropTypes([<docFile>,...])
```

list.setAcceptedDropTypes([<docFile>,...])Für die Zuweisung von Drop-Typen stehen mehrere Konfigurations-Ausprägungen zur Vefügung.


### Einfache Drop-Typen als String


```javascript
list.setAcceptedDropTypes(["docFile"])
```

list.setAcceptedDropTypes(["docFile"])
### JSON als Drop-Typ

Hier kann z.B. der Mappentyp eingegrenzt werden.


```javascript
list.setAcceptedDropTypes([{
  type: "docFile",
  fileType: "Person"
}]);
```

list.setAcceptedDropTypes([{
  type: "docFile",
  fileType: "Person"
}]);
## Drop-Ziele

Es ist auch möglich, die erlaubten Drop-Typen nur für ein [[Script Extensions API/otris.scriptlist.Grouping|Grouping]] oder für eine [[Script Extensions API/otris.scriptlist.Row|Zeile]] zu definieren.


### Drop in Grouping erlauben

Hiermit können unter anderem je Grouping nur bestimmte Mappentypen erlaubt werden.


```javascript
// acceptedDropTypes schon bei Definition des Groupings übergeben
new scriptListAPI.grouping({
  acceptedDropTypes: [{ type: "docFile", fileType: "Person" }],
  column_id: "abteilung"
});

// acceptedDropTypes setzen
grouping.setAcceptedDropTypes(["docFile"]);

// acceptedDropType hinzufügen
grouping.addAcceptedDropType(["docFile"]);
```

// acceptedDropTypes schon bei Definition des Groupings übergeben
new scriptListAPI.grouping({
  acceptedDropTypes: [{ type: "docFile", fileType: "Person" }],
  column_id: "abteilung"
});

// acceptedDropTypes setzen
grouping.setAcceptedDropTypes(["docFile"]);

// acceptedDropType hinzufügen
grouping.addAcceptedDropType(["docFile"]);
### Drop in Zeile erlauben

Hier kan der Drop für nur bestimmte Zeilen erlaubt werden oder je Zeile nur bestimmte Mappentypen erlaubt werden.


```javascript
// acceptedDropTypes setzen
row.setAcceptedDropTypes([{
  type: "docFile",
  fileType: "Person"
}]);
```

// acceptedDropTypes setzen
row.setAcceptedDropTypes([{
  type: "docFile",
  fileType: "Person"
}]);
## Auswerten der Drop-Aktion

Nach dem Fallenlassen eines Items in der ScriptList, wird das Ursprungs-Skript ausgeführt und ein **ScriptList-Event** übergeben, welches mit [[Script Extensions API/otris.scriptlist#getScriptListEvent|getScriptListEvent()]] abgerufen werden kann.


```javascript
var event = scriptListAPI.getScriptListEvent();
```

var event = scriptListAPI.getScriptListEvent();In diesem Objekt sind dann alle Informationen zum verarbeiten des Drops zusammengefasst.


### Aufbau des Skriptlist-Events beim Drop


```javascript
{
  name: "dropItemsOnRow",
  id:       string, // ID der Zeile auf der gedroppt wurde
  index:  number, // Index der Zeile auf der gedroppt wurde
  dropItems: [<docFile>,...], // Item(s) die gedroppt wurden
  group:{
      <grouping_1>: <group1_id>,  // <Spalte:Wert> der Gruppe auf oder in der gedroppt wurde
      <grouping_2>: <group2_id>,
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
  name: "dropItemsOnRow",
  id:       string, // ID der Zeile auf der gedroppt wurde
  index:  number, // Index der Zeile auf der gedroppt wurde
  dropItems: [<docFile>,...], // Item(s) die gedroppt wurden
  group:{
      <grouping_1>: <group1_id>,  // <Spalte:Wert> der Gruppe auf oder in der gedroppt wurde
      <grouping_2>: <group2_id>,
      ...
  },
 newGroupIds: {
   <grouping_1>: <group1_id>,  // <Spalte:Id> der Default-Gruppe auf oder in der gedroppt wurde
   <grouping_2>: <group2_id>,
   ...
 }
}
### Beispiel ScriptList-Event beim Drop einer Mappe auf der Zeile einer Gruppe

Eine Mappe wurde hier in der Spalte **abteilung** innerhalb der Gruppe **Entwicklung** gedroppt.


```javascript
{
  name: "dropItemsOnRow",
  id: "docfeat_fi20200000002917",
  index:  7,
  group:{
      abteilung: "Entwicklung"
  },
  groupIds:{
      abteilung: "research"
  },
  dropItems: [{
      type:"docFile",
      id:"docfeat_fi20200000002906"
  }]
}
```

{
  name: "dropItemsOnRow",
  id: "docfeat_fi20200000002917",
  index:  7,
  group:{
      abteilung: "Entwicklung"
  },
  groupIds:{
      abteilung: "research"
  },
  dropItems: [{
      type:"docFile",
      id:"docfeat_fi20200000002906"
  }]
}
### Beispiel Event-Handling nach dem Drop einer Mappe in der ScriptList

Nach dem Drop werden Felder der Mappe an die Gruppe, in der der Drop passierte, angepasst und dann die angezeigte Liste und Mappe aktualisiert.


```javascript
//  check event type
if(event && event.name === "dropItemsOnRow") {

	event.dropItems.forEach(function(dropItem) {

		//	create rowupdate if needed
		rowUpdate = rowUpdate || new scriptListAPI.RowUpdate();

		var file = context.getFileById(dropItem.id),
			newRowData;

		if(event.group) {

			// change data by group info
			//	set new group data in file
			Object.keys(group).forEach(function(groupColumn) {
				file[groupColumn] = group[groupColumn]
			});
			newRowData = event.group;
		}

		//	sync data
		file.sync();
		rowUpdate.addEntry(dropItem.id, newRowData);
	});

	//	update row & file
	context.returnType = "multipleAction";
	context.returnValue = JSON.stringify([{ returnType: 'scriptList', returnValue: rowUpdate.transfer() }, { returnType: 'updateFile', returnValue: "" }]);
}
```

//  check event type
if(event && event.name === "dropItemsOnRow") {

	event.dropItems.forEach(function(dropItem) {

		//	create rowupdate if needed
		rowUpdate = rowUpdate || new scriptListAPI.RowUpdate();

		var file = context.getFileById(dropItem.id),
			newRowData;

		if(event.group) {

			// change data by group info
			//	set new group data in file
			Object.keys(group).forEach(function(groupColumn) {
				file[groupColumn] = group[groupColumn]
			});
			newRowData = event.group;
		}

		//	sync data
		file.sync();
		rowUpdate.addEntry(dropItem.id, newRowData);
	});

	//	update row & file
	context.returnType = "multipleAction";
	context.returnValue = JSON.stringify([{ returnType: 'scriptList', returnValue: rowUpdate.transfer() }, { returnType: 'updateFile', returnValue: "" }]);
}Das Skript kannn mit der Eigenschaft **runScript** an einem Ordner angebunden werden.
Zum Testen müssen Vorgänge des Mappentyps **Person** angelegt werden.

Download: [Mappentyp für Drop in ScriptList](Person.xml)

Download: [Skript für Drop in ScriptList](scriptList_grouping_person_short.js)