---
title: "Default-Gruppen bei ScriptList"
source: "https://otris.software/documents/howto/list/scriptlist-default-groups.html"
---

# Default-Gruppen bei ScriptList


Abb. 1 - Default-Gruppen

Wenn die Zeilen einer ScriptList mit [[Script Extensions API/otris.scriptlist.List#setGrouping|setGrouping()]] nach bestimmten Spalten in Gruppen zusammengefasst werden, dann werden nur die Gruppen angezeigt, die anhand der übergebenen Zeilen-Daten generiert werden können.
Mithilfe von Default-Gruppen ist es Möglich, vorher definierte Gruppen immer anzuzeigen.
Diese können dann z.B. beim Drag & Drop benutzt werden um leere Gruppen zu befüllen.


## Group

Das Hilfsobjekt [[Script Extensions API/otris.scriptlist.Group|Group]] kann anhand eines übergebenen JSONs erstellt werden.


### Aufbau des Group-Objekts


```javascript
{
 id:        string  // ID der Gruppe
 label:     string  // Label der Gruppenzeile
 emptyText: string  // optional: Text der angezeigt wird, wenn eine Gruppe keine Zeilen enthält
}
```

{
 id:        string  // ID der Gruppe
 label:     string  // Label der Gruppenzeile
 emptyText: string  // optional: Text der angezeigt wird, wenn eine Gruppe keine Zeilen enthält
}Wenn kein emptyText übergeben wurde, wird nur die Gruppenzeile selbst angezeigt.


### Beispiel Group-Objekt instanziieren


```javascript
group = new scriptListAPI.Group({
 id:        "april",
 label:     "April",
 emptyText: "Für diesen Monat sind keine Einträge vorhanden"
});
```

group = new scriptListAPI.Group({
 id:        "april",
 label:     "April",
 emptyText: "Für diesen Monat sind keine Einträge vorhanden"
});Die einzelnen Eigenschaften können auch nach dem instanziieren noch geändert werden.


### Methoden des Group-Objekts


```javascript
group.setId(id);               //  ID setzen
group.setLabel(label);         //  Label setzen
group.setEmptyText(emptyText); // emptyText setzen
```

group.setId(id);               //  ID setzen
group.setLabel(label);         //  Label setzen
group.setEmptyText(emptyText); // emptyText setzenNach dem eine Default-Gruppe erstellt wurde, muss diese einem [[Script Extensions API/otris.scriptlist.Grouping|Grouping]] übergeben werden.
Das Grouping legt fest, nach welchen Spalten gruppiert werden soll.


### Grouping mit Default-Gruppen erstellen


```javascript
grouping = new scriptListAPI.Grouping({
    column_id:      "month",
    defaultGroups:  [groupJanuary, groupFebruary, ...]
});
```

grouping = new scriptListAPI.Grouping({
    column_id:      "month",
    defaultGroups:  [groupJanuary, groupFebruary, ...]
});
### Gruppe an Grouping übergeben

Die Gruppen können auch einem schon bestehenden Grouping übergeben werden.


```javascript
grouping.setDefaultGroups([groupJanuary, groupFebruary, ...]); // Default-Gruppen setzen
grouping.addDefaultGroup(groupDecember);    // Gruppen einzeln hinzufügen
```

grouping.setDefaultGroups([groupJanuary, groupFebruary, ...]); // Default-Gruppen setzen
grouping.addDefaultGroup(groupDecember);    // Gruppen einzeln hinzufügen
## Alternative Notationen

Anstatt die Hilfsobjekte **Grouping** und **Group** zu verwenden, können die Daten auch direkt per String oder JSON übergeben werden.


### Beispiele für andere Notationen


```javascript
// Grouping und Gruppe als JSON
list.setGrouping([{
    column_id: "Month",
    default_groups: [
        {
            id: "january",
            label: "Januar",
            emptyText: "Keine Einträge vorhanden"
        },
        {
            id: "february",
            ...
        },
        ...]
}]);

// Grouping als JSON und Gruppen als String
list.setGrouping([{ column_id: "Month", default_groups: ["Januar", "Februar", ...] }]);
```

// Grouping und Gruppe als JSON
list.setGrouping([{
    column_id: "Month",
    default_groups: [
        {
            id: "january",
            label: "Januar",
            emptyText: "Keine Einträge vorhanden"
        },
        {
            id: "february",
            ...
        },
        ...]
}]);

// Grouping als JSON und Gruppen als String
list.setGrouping([{ column_id: "Month", default_groups: ["Januar", "Februar", ...] }]);
### Beispielscript Default-Gruppen

Hier werden Einträge für alle Monate erzeugt.


```javascript
...

var list = new scriptListAPI.List("default groups");
var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
var monthGrouping = new scriptListAPI.Grouping({ column_id: "month" });

months.forEach(function(month) {
	var monthGroup = new scriptListAPI.Group({
		id: month[0].toLowerCase() + month.substr(1),
		label: month,
		emptyText: "Keine Einträge vorhanden"
	});
	monthGrouping.addDefaultGroup(monthGroup);
});

list.setGrouping([monthGrouping]);

...
```

...

var list = new scriptListAPI.List("default groups");
var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
var monthGrouping = new scriptListAPI.Grouping({ column_id: "month" });

months.forEach(function(month) {
	var monthGroup = new scriptListAPI.Group({
		id: month[0].toLowerCase() + month.substr(1),
		label: month,
		emptyText: "Keine Einträge vorhanden"
	});
	monthGrouping.addDefaultGroup(monthGroup);
});

list.setGrouping([monthGrouping]);

...Das Skript kannn mit der Eigenschaft **runScript** an einem Ordner angebunden werden.

Download: [Skript Default-Gruppen](scriptList_grouping_defaultGroups_short.js)