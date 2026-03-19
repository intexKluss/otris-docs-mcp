---
title: "Suchfunktion auf Listen verwenden"
source: "https://otris.software/documents/howto/list/list-search.html"
---

# Suchfunktion auf Listen verwenden


In Skriptlisten kann auf verschiedene weisen gesucht werden.


## Search Context

Der Suchkontext ist die globale Suche die in DOCUMENTS in der Kopfzeile angezeigt wird.
Mit [[Script Extensions API/otris.scriptlist.List#setSearchContext|list.setSearchContext()]] kann man hier einen weiteren Suchkontext zum Suchen innerhalb der Skriptliste registrieren.
Beim Registrieren wird auch angegeben, ob die Liste serverseitig (**remoteSearch=true**) oder clientseitig durchsucht werden soll.
Mit der Option **liveSearch** wird die Suche sofort beim Tippen ausgeführt.


```javascript
list.setSearchContext({
	name: "remote search", // name wird im Suchkontext übernommen
	remoteSearch: true, // serverseitig suchen
	liveSearch: true // Tippen führt Suche aus
});
```

list.setSearchContext({
	name: "remote search", // name wird im Suchkontext übernommen
	remoteSearch: true, // serverseitig suchen
	liveSearch: true // Tippen führt Suche aus
});
## Search Box

Oberhalb der Liste kann mit [[Script Extensions API/otris.scriptlist.List#setShowSearchBox|list.setShowSearchBox()]] ein Suchfeld angezeigt werden.
Hier kann ebenfalls festgelegt werden, ob die Liste client- oder serverseitig durchsucht werden soll.


```javascript
list.setShowSearchBox({
	remoteSearch: false
});
```

list.setShowSearchBox({
	remoteSearch: false
});
## Quickfilter

Über den Spalten kann mit [[Script Extensions API/otris.scriptlist.List#setShowQuickFilter|list.setShowQuickFilter()]] eine Spaltenbasierte Suche eingeschaltet werden.
Die Suche wird hier immer clientseitig ausgeführt.


```javascript
list.setShowQuickFilter();
```

list.setShowQuickFilter();
## serverseitige Suche

Wenn die serverseitige Suche eingeschaltet ist, dann wird beim Ausführen der Suche,
das Ursprungsskript mit Suchparametern aufgerufen.
Die Suchparameter können mit [[Script Extensions API/otris.scriptlist|list.getScriptListParameters()]] abgefragt werden.
Der eingegebene Begriff ist über den Parameter **searchExpression** verfügbar.
Dieser muss verwendet werden, um die zugrundeliegenden Daten zu filtern.


```javascript
// Suchparameter abfragen
const scriptListParams = listAPI.getScriptListParameters();

// es wurde kein Suchbegriff eingegeben
if (scriptListParams.searchExpression == null) {
    rows.forEach(addRow); // alle Zeilen hinzufügen
}
else { // gefilterte Zeilen hinzufügen
    rows.filter(rowData => /* Ergebnisse filtern*/).forEach(addRow);
}
```

// Suchparameter abfragen
const scriptListParams = listAPI.getScriptListParameters();

// es wurde kein Suchbegriff eingegeben
if (scriptListParams.searchExpression == null) {
    rows.forEach(addRow); // alle Zeilen hinzufügen
}
else { // gefilterte Zeilen hinzufügen
    rows.filter(rowData => /* Ergebnisse filtern*/).forEach(addRow);
}
Im folgenden Beispiel ist die serverseitige Suche über den Suchkontext eingeschaltet.
Im Suchfeld werden die Zeilen clientseitig gefiltert.
Der Quickfilter ist auch eingeschaltet.

Die Daten werden beim Anzeigen der Liste über das SampleData-Skript eingebunden und verarbeitet.

Download: [scriptListSearchAndFilter_tutorialSampleData.js](scriptListSearchAndFilter_tutorialSampleData.js)

Download: [scriptListSearchAndFilter_tutorial.js](scriptListSearchAndFilter_tutorial.js)


```javascript
const listAPI = require("otris.scriptlist");
const list = new listAPI.List("client filter");
const scriptListParams = listAPI.getScriptListParameters();
const filterRow = function (rowData) {

	// kein Suchbegriff eingegeben
	if (scriptListParams.searchExpression == null) {
		return true;
	}

	var values = [];

	// create searchable string values
	Object.keys(rowData).forEach(key => {

		if (rowData[key]) {

			// make string lower case
			if (typeof rowData[key] === "string") {
				values.push(rowData[key].toLowerCase());
			}
			else if (rowData[key] instanceof Date) { // Datum zu durchsuchbaren String konvertieren
				values.push(context.convertDateToString(rowData[key]));
			}
			else { // make string
				values.push(rowData[key].toString());
			}
		}
		else { // Leerstring als Wert verwenden
			values.push("");
		}
	});

	// Werte filtern
	return values.some(val => {
		return val.indexOf(scriptListParams.searchExpression.toLowerCase()) !== -1;
	});
};
const createRows = () => {

	const rows = require("scriptListSearchAndFilter_tutorialSampleData").rows;

	// Ergebnisse filtern
	const filteredRows = rows.filter(rowData => filterRow(rowData));

	//	Ergebnisse zu Zeilen hinzufügen
	filteredRows.forEach((rowData, i) => list.addRow("row_" + i, rowData));
};

// Optionen setzen
list.setShowSearchBox({
	remoteSearch: false
});
list.setSearchContext({
	name: "remote search",
	remoteSearch: true,
	liveSearch: true
});
list.setShowQuickFilter(true);
list.endList();

// Spalten hinzufügen
list.addColumn("status", "Status", "CUSTOM");
list.addColumn({ key: "nummer", label: "Nummer" });
list.addColumn("month", "Month");
list.addColumn("checkbox", "CHECKBOX", "CHECKBOX");
list.addColumn("unsortierbar", "Unsortierbar");
list.addColumn("date", "Datum", "DATE");
list.addColumn("timestamp", "Zeitstempel", "TIMESTAMP");

// Zeilen erzeugen
createRows();

context.returnType = "scriptList";
return JSON.stringify(list.transfer());
```

const listAPI = require("otris.scriptlist");
const list = new listAPI.List("client filter");
const scriptListParams = listAPI.getScriptListParameters();
const filterRow = function (rowData) {

	// kein Suchbegriff eingegeben
	if (scriptListParams.searchExpression == null) {
		return true;
	}

	var values = [];

	// create searchable string values
	Object.keys(rowData).forEach(key => {

		if (rowData[key]) {

			// make string lower case
			if (typeof rowData[key] === "string") {
				values.push(rowData[key].toLowerCase());
			}
			else if (rowData[key] instanceof Date) { // Datum zu durchsuchbaren String konvertieren
				values.push(context.convertDateToString(rowData[key]));
			}
			else { // make string
				values.push(rowData[key].toString());
			}
		}
		else { // Leerstring als Wert verwenden
			values.push("");
		}
	});

	// Werte filtern
	return values.some(val => {
		return val.indexOf(scriptListParams.searchExpression.toLowerCase()) !== -1;
	});
};
const createRows = () => {

	const rows = require("scriptListSearchAndFilter_tutorialSampleData").rows;

	// Ergebnisse filtern
	const filteredRows = rows.filter(rowData => filterRow(rowData));

	//	Ergebnisse zu Zeilen hinzufügen
	filteredRows.forEach((rowData, i) => list.addRow("row_" + i, rowData));
};

// Optionen setzen
list.setShowSearchBox({
	remoteSearch: false
});
list.setSearchContext({
	name: "remote search",
	remoteSearch: true,
	liveSearch: true
});
list.setShowQuickFilter(true);
list.endList();

// Spalten hinzufügen
list.addColumn("status", "Status", "CUSTOM");
list.addColumn({ key: "nummer", label: "Nummer" });
list.addColumn("month", "Month");
list.addColumn("checkbox", "CHECKBOX", "CHECKBOX");
list.addColumn("unsortierbar", "Unsortierbar");
list.addColumn("date", "Datum", "DATE");
list.addColumn("timestamp", "Zeitstempel", "TIMESTAMP");

// Zeilen erzeugen
createRows();

context.returnType = "scriptList";
return JSON.stringify(list.transfer());