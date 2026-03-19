---
title: "Listen serverseitig sortieren"
source: "https://otris.software/documents/howto/list/list-remote-sorting.html"
---

# Listen serverseitig sortieren

Skriptlisten können serverseitig nach einer oder mehreren Spalten sortiert werden.


## Einfache Sortierung


Die Sortierung nach einer Spalte wird mit [[Script Extensions API/otris.scriptlist.List#setSort|list.setSort({ multiSort: false, remoteSort: true })]] eingeschaltet.

Wenn in der Skriptliste eine Spalte angeklickt wird, wird das Urpsrungskript mit Sortierparametern aufgerufen.

Zum Auswerten der Sortierparameter steht die Funktion [[Script Extensions API/otris.scriptlist.List#applySortOrder|list.applySortOrder()]] zur Verfügung.
Diese Funktion muss aufgerufen werden, nach dem alle Spalten der Liste hinzugefügt wurden.
Danach ist auf jeder Spalte die SortOrder als Number definiert. Ist die SortOrder positiv, wird die Spalte aufsteigen sortiert, ist sie negativ wird sie absteigend sortiert.

Die Sortierung der Spalte muss ausgelesen und auf die zu sortierenden Daten angewendet werden.


```javascript
// Spalten hinzufügen
const colYear = list.addColumn("year", "Year");
const colMonth = list.addColumn("month", "Month");

// Sortierung auf Spalten anwenden
list.applySortOrder();

// Sortierung auf Daten anwenden
if (colYear.getSortOrder()) { // nach Jahr sortiert
    // Daten nach Jahr sortieren
}
else if (colMonth.getSortOrder()) { // nach Monat sortiert
    // Daten nach Monat sortieren
}
```

// Spalten hinzufügen
const colYear = list.addColumn("year", "Year");
const colMonth = list.addColumn("month", "Month");

// Sortierung auf Spalten anwenden
list.applySortOrder();

// Sortierung auf Daten anwenden
if (colYear.getSortOrder()) { // nach Jahr sortiert
    // Daten nach Jahr sortieren
}
else if (colMonth.getSortOrder()) { // nach Monat sortiert
    // Daten nach Monat sortieren
}Im folgenden Beispiel wird eine Skriptliste mit sortierbaren Spalten für Jahr und Monat erzeugt.

Download: [scriptListRemoteSort_tutorial.js](scriptListRemoteSort_tutorial.js)


```javascript
// Liste erzeugen
const scriptListAPI = require("otris.scriptlist");
const list = new scriptListAPI.List("Remote Sort Tutorial (no multisort)");

// remote Sortierung
list.setSort({ remoteSort: true });

// Daten
const yearsAndMonths = [[2019, 9], [2032, 5], [2014, 6], [2009, 3], [1988, 4], [1994, 11]];

// Spalten hinzufügen
const colYear = list.addColumn("year", "Year");
const colMonth = list.addColumn("month", "Month");

// Sortierung auf Spalten anwenden
list.applySortOrder();

// Sortierung auf Daten anwenden
if (colYear.getSortOrder()) { // nach Jahr sortiert

	// Abstand bestimmen und Sortierrichtung anwenden (sortOrder: -1 = abwärts, 1 = aufwärts)
	yearsAndMonths.sort((ymA, ymB) => (ymA[0] - ymB[0]) * colYear.getSortOrder());
}
else if (colMonth.getSortOrder()) { // nach Monat sortiert

	// Abstand bestimmen und Sortierrichtung anwenden (sortOrder: -1 = abwärts, 1 = aufwärts)
	yearsAndMonths.sort((ymA, ymB) => (ymA[1] - ymB[1]) * colMonth.getSortOrder());
}

// Zeilen hinzufügen
yearsAndMonths.forEach((ym, i) => list.addRow(i + "", ym));

// alle Zeilen wurden geladen
list.endList();

context.returnType = "scriptList";
return list.transfer();
```

// Liste erzeugen
const scriptListAPI = require("otris.scriptlist");
const list = new scriptListAPI.List("Remote Sort Tutorial (no multisort)");

// remote Sortierung
list.setSort({ remoteSort: true });

// Daten
const yearsAndMonths = [[2019, 9], [2032, 5], [2014, 6], [2009, 3], [1988, 4], [1994, 11]];

// Spalten hinzufügen
const colYear = list.addColumn("year", "Year");
const colMonth = list.addColumn("month", "Month");

// Sortierung auf Spalten anwenden
list.applySortOrder();

// Sortierung auf Daten anwenden
if (colYear.getSortOrder()) { // nach Jahr sortiert

	// Abstand bestimmen und Sortierrichtung anwenden (sortOrder: -1 = abwärts, 1 = aufwärts)
	yearsAndMonths.sort((ymA, ymB) => (ymA[0] - ymB[0]) * colYear.getSortOrder());
}
else if (colMonth.getSortOrder()) { // nach Monat sortiert

	// Abstand bestimmen und Sortierrichtung anwenden (sortOrder: -1 = abwärts, 1 = aufwärts)
	yearsAndMonths.sort((ymA, ymB) => (ymA[1] - ymB[1]) * colMonth.getSortOrder());
}

// Zeilen hinzufügen
yearsAndMonths.forEach((ym, i) => list.addRow(i + "", ym));

// alle Zeilen wurden geladen
list.endList();

context.returnType = "scriptList";
return list.transfer();

## Mehrfache Sortierung


Die Sortierung nach einer Spalte wird mit [[Script Extensions API/otris.scriptlist.List#setSort|list.setSort({ multiSort: true, remoteSort: true })]] eingeschaltet.

Hier kann die Spaltensortierung ebenfalls mit [[Script Extensions API/otris.scriptlist.List#applySortOrder|list.applySortOrder()]] auf die  Spalten angewendet werden.

Die Daten müssen dann anhand der Sortierung beider Spalten sortiert werden. Die SortOrder beträgt den Wert der Reihenfolge, nach der Sortiert wurde: Erste Sortierspalte = 1, 2. Sortierspalte = 2 etc. Das Vorzeichen gibt an, ob Auf- oder Abwärts sortiert wurde.


```javascript
// Sortierung auf Daten anwenden
if (Math.abs(colYear.getSortOrder()) === 1) { // 1. nach Jahr sortiert

    // nur nach Jahr sortiert
    if (!colMonth.getSortOrder()) {
        // nach Jahr sortiern
    }
    else { // 2. nach Monat sortiert
        // nach Jahr und Monat sortieren
    }
}
else if (Math.abs(colMonth.getSortOrder()) === 1) { // 1. nach Monat sortiert

    // nur nach Monat sortiert
    if (!colYear.getSortOrder()) {
        // nach Monat sortieren
    }
    else { // 2. nach Monat sortiert
        // nach Monat und Jahr sortieren
    }
}
```

// Sortierung auf Daten anwenden
if (Math.abs(colYear.getSortOrder()) === 1) { // 1. nach Jahr sortiert

    // nur nach Jahr sortiert
    if (!colMonth.getSortOrder()) {
        // nach Jahr sortiern
    }
    else { // 2. nach Monat sortiert
        // nach Jahr und Monat sortieren
    }
}
else if (Math.abs(colMonth.getSortOrder()) === 1) { // 1. nach Monat sortiert

    // nur nach Monat sortiert
    if (!colYear.getSortOrder()) {
        // nach Monat sortieren
    }
    else { // 2. nach Monat sortiert
        // nach Monat und Jahr sortieren
    }
}Im folgenden Beispiel werden Spalten nach Jahr und Monat sortiert.

Download: [scriptListRemoteSort_multiSort_tutorial.js](scriptListRemoteSort_multiSort_tutorial.js)


```javascript
// Liste erzeugen
const scriptListAPI = require("otris.scriptlist");
const list = new scriptListAPI.List("Remote Sort Tutorial (no multisort)");

// remote Sortierung
list.setSort({ remoteSort: true, multiSort: true });

// Daten
const yearsAndMonths = [[2014, 6], [2019, 9], [1994, 4], [2014, 3], [1994, 11], [2019, 5], [2015, 6], [2018, 9], [1995, 4], [2007, 3], [1997, 5], [2009, 11]];

// Spalten hinzufügen
const colYear = list.addColumn("year", "Year");
const colMonth = list.addColumn("month", "Month");

// Sortierung auf Spalten anwenden
list.applySortOrder();

// comparators für Jahr und Monat
const sortYear = (ymA, ymB) => (ymA[0] - ymB[0]) * colYear.getSortOrder();
const sortMonth = (ymA, ymB) => (ymA[1] - ymB[1]) * colMonth.getSortOrder();

// Sortierung auf Daten anwenden
if (Math.abs(colYear.getSortOrder()) === 1) { // 1. nach Jahr sortiert

	// Abstand bestimmen und Sortierrichtung anwenden (sortOrder: -1 = abwärts, 1 = aufwärts)
	yearsAndMonths.sort((ymA, ymB) => {

		// nur nach Jahr sortiert oder Jahre sind unterschiedlich
		if (!colMonth.getSortOrder() || ymA[0] !== ymB[0]) {
			return sortYear(ymA, ymB);
		}

		// nach Jahr und Monat soritert, Jahr ist gleich
		return sortMonth(ymA, ymB);
	});
}
else if (Math.abs(colMonth.getSortOrder()) === 1) { // 1. nach Monat sortiert

	yearsAndMonths.sort((ymA, ymB) => {

		// nur nach Monat sortiert oder Monate sind unterschiedlich
		if (!colYear.getSortOrder() || ymA[1] !== ymB[1]) {
			return sortMonth(ymA, ymB);
		}

		// nach Jahr und Monat soritert, Monat ist gleich
		return sortYear(ymA, ymB);
	});
}

// Zeilen hinzufügen
yearsAndMonths.forEach((ym, i) => list.addRow(i + "", ym));

// alle Zeilen wurden geladen
list.endList();

context.returnType = "scriptList";
return list.transfer();
```

// Liste erzeugen
const scriptListAPI = require("otris.scriptlist");
const list = new scriptListAPI.List("Remote Sort Tutorial (no multisort)");

// remote Sortierung
list.setSort({ remoteSort: true, multiSort: true });

// Daten
const yearsAndMonths = [[2014, 6], [2019, 9], [1994, 4], [2014, 3], [1994, 11], [2019, 5], [2015, 6], [2018, 9], [1995, 4], [2007, 3], [1997, 5], [2009, 11]];

// Spalten hinzufügen
const colYear = list.addColumn("year", "Year");
const colMonth = list.addColumn("month", "Month");

// Sortierung auf Spalten anwenden
list.applySortOrder();

// comparators für Jahr und Monat
const sortYear = (ymA, ymB) => (ymA[0] - ymB[0]) * colYear.getSortOrder();
const sortMonth = (ymA, ymB) => (ymA[1] - ymB[1]) * colMonth.getSortOrder();

// Sortierung auf Daten anwenden
if (Math.abs(colYear.getSortOrder()) === 1) { // 1. nach Jahr sortiert

	// Abstand bestimmen und Sortierrichtung anwenden (sortOrder: -1 = abwärts, 1 = aufwärts)
	yearsAndMonths.sort((ymA, ymB) => {

		// nur nach Jahr sortiert oder Jahre sind unterschiedlich
		if (!colMonth.getSortOrder() || ymA[0] !== ymB[0]) {
			return sortYear(ymA, ymB);
		}

		// nach Jahr und Monat soritert, Jahr ist gleich
		return sortMonth(ymA, ymB);
	});
}
else if (Math.abs(colMonth.getSortOrder()) === 1) { // 1. nach Monat sortiert

	yearsAndMonths.sort((ymA, ymB) => {

		// nur nach Monat sortiert oder Monate sind unterschiedlich
		if (!colYear.getSortOrder() || ymA[1] !== ymB[1]) {
			return sortMonth(ymA, ymB);
		}

		// nach Jahr und Monat soritert, Monat ist gleich
		return sortYear(ymA, ymB);
	});
}

// Zeilen hinzufügen
yearsAndMonths.forEach((ym, i) => list.addRow(i + "", ym));

// alle Zeilen wurden geladen
list.endList();

context.returnType = "scriptList";
return list.transfer();