---
title: "Listeneinträge nachladen"
source: "https://otris.software/documents/howto/list/infinite-scrolling.html"
---

# Listeneinträge nachladen

In diesem HowTo wird beispielhaft erläutert wie man das Nachladen von Listeneinträgen implementiert.


```javascript
const scriptListAPI = require("otris.scriptlist");
var scriptList = new scriptListAPI.List("Meine Liste");
var start = (typeof start != "undefined") ? parseInt(start) : 0;
var limit = (typeof limit != "undefined") ? parseInt(limit) : 50;
```

const scriptListAPI = require("otris.scriptlist");
var scriptList = new scriptListAPI.List("Meine Liste");
var start = (typeof start != "undefined") ? parseInt(start) : 0;
var limit = (typeof limit != "undefined") ? parseInt(limit) : 50;Über die beiden Parameter `start` und `limit` wird festgelegt welche Einträge
geladen werden sollen. Nachfolgend werden in diesem Beispiel die beiden Spalten
*Typ* und *Titel* konfiguriert und die Zeilen, für den von den beiden Parametern
definierten Bereich, über die Methode `addRow()` der Liste hinzugefügt.

Über die Methode `setStartIndex()` wird der Wert für den ersten Eintrag der
hinzugefügten Zeilen fesgelegt.


```javascript
scriptList.addColumn("type", "Typ", "STRING");
scriptList.addColumn("title", "Titel", "STRING");

indexLimit = scriptListParams.start + scriptListParams.limit;
for(i = scriptListParams.start; i < indexLimit; i++) {
	row = scriptList.addRow("test_" + i, {
		id: "test_" + i,
		type: "type" + i,
		title: "Titel" + i + (new Date()).toISOString()
	});
}

scriptList.setStartIndex(scriptListParams.start);
```

scriptList.addColumn("type", "Typ", "STRING");
scriptList.addColumn("title", "Titel", "STRING");

indexLimit = scriptListParams.start + scriptListParams.limit;
for(i = scriptListParams.start; i < indexLimit; i++) {
	row = scriptList.addRow("test_" + i, {
		id: "test_" + i,
		type: "type" + i,
		title: "Titel" + i + (new Date()).toISOString()
	});
}

scriptList.setStartIndex(scriptListParams.start);Wenn alle Einträge abgerufen worden sind muss die Methode `endList()` aufgerufen werden um festzulegen,
dass keine weiteren Einträge geholt werden müssen bzw. können.


```javascript
if (scriptListParams.start >= 450) {
	scriptList.endList();
}
```

if (scriptListParams.start >= 450) {
	scriptList.endList();
}Danach kann die Liste wie gewohnt an den Client transferiert werden.


```javascript
context.returnType = "scriptList";
context.returnValue = scriptList.transfer();
```

context.returnType = "scriptList";
context.returnValue = scriptList.transfer();