---
title: "Zeilen und Zellen einfärben"
source: "https://otris.software/documents/howto/gentable/colorRowsAndCells.html"
---

# Zeilen und Zellen einfärben

Im Gentable gibt es Verschiedene Möglichkeite die Farben der Zeilen und Zellen zu beinflussen.


## Zeilen einfärben


Zum Einfärben von Zeilen wird der Gentable-Callback [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerCallback|Gentable.rowStyle]] eingebunden.
Dieser wird ausgeführt, wenn die Zeilen des Gentables gerendert werden. Seine Rückgabe wird im Style-Attribut der gerenderten Zeile eingefügt.
Achtung: Pflichtzellen werden nach wie vor Gelb gerendert.

Im folgenden Beispiel wird der Style-Text abhängig von dem Wert einer Zelle in der jeweiligen Gentable-Zeile erstellt.

Download: [rowStyle.js](rowStyle.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("erpOrder,erpInvoice", "Gentable.rowStyle", function(documentsContext, options) {

    var rowStyle = '',
        row = options.row,
        colourHTML = {
            blue: 'background: #A7B5CC',
            red: 'background: #F5C4C4',
            green: 'background: #A4EBD5',
            yellow: 'background: #FFFBC3',
            "default": 'background: ' + row.get('colour')
        };

    rowStyle += colourHTML[row.get('colour')] ? colourHTML[row.get('colour')] : colourHTML["default"];

    return rowStyle;
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("erpOrder,erpInvoice", "Gentable.rowStyle", function(documentsContext, options) {

    var rowStyle = '',
        row = options.row,
        colourHTML = {
            blue: 'background: #A7B5CC',
            red: 'background: #F5C4C4',
            green: 'background: #A4EBD5',
            yellow: 'background: #FFFBC3',
            "default": 'background: ' + row.get('colour')
        };

    rowStyle += colourHTML[row.get('colour')] ? colourHTML[row.get('colour')] : colourHTML["default"];

    return rowStyle;
});
## Zellen einfärben

Es gibt mehrere Wege die Zellen im Gentable einzufärben.


### CellFormatter


Der [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerCallback|Gentable.cellformatter]] ist ein Callback, der für **jede** Zelle im Gentable ausgeführt wird.
Hier muss das HTML für diese Zelle zurückgegeben werden.

Im folgenden Beispiel wird für die gerade zu rendernde Zelle, die Spalten-ID(=title) ausgelesen und abhängig von dieser entweder ein spezielles HTML oder einfach nur der Value-String zurückgegeben.

Download: [cellFormatter.js](cellFormatter.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("erpOrder,erpInvoice", "Gentable.cellFormatter", function(documentsContext, options) {

    var cellHtml = "",
        row = options.row,
        value = options.value,
        column = options.column,
        colourHtml = {
            blue:    '<div style="background: #A7B5CC; height: 100%;">' + value + '</div>',
            red:    '<div style="background: #F5C4C4; height: 100%;">' + value + '</div>',
            green:    '<div style="background: #A4EBD5; height: 100%;">' + value + '</div>',
            yellow:    '<div style="background: #FFFBC3; height: 100%;">' + value + '</div>',
            "default":'<div style="background: ' + column.id + ';height: 100%;">' + value + '</div>'
        },
        colourcellVal;

    if(column.id === "itemno" && row.get(column.id) < 0) {

        cellHtml += '<div style="color: red">' + value + '</div>';
    }
    else if(column.id === "colourcell" && (colourcellVal = row.get(column.id))) {

        cellHtml += colourHtml[colourcellVal] ? colourHtml[colourcellVal] : colourHtml["default"];
    }
    else {
        cellHtml = value;
    }

    return cellHtml;
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("erpOrder,erpInvoice", "Gentable.cellFormatter", function(documentsContext, options) {

    var cellHtml = "",
        row = options.row,
        value = options.value,
        column = options.column,
        colourHtml = {
            blue:    '<div style="background: #A7B5CC; height: 100%;">' + value + '</div>',
            red:    '<div style="background: #F5C4C4; height: 100%;">' + value + '</div>',
            green:    '<div style="background: #A4EBD5; height: 100%;">' + value + '</div>',
            yellow:    '<div style="background: #FFFBC3; height: 100%;">' + value + '</div>',
            "default":'<div style="background: ' + column.id + ';height: 100%;">' + value + '</div>'
        },
        colourcellVal;

    if(column.id === "itemno" && row.get(column.id) < 0) {

        cellHtml += '<div style="color: red">' + value + '</div>';
    }
    else if(column.id === "colourcell" && (colourcellVal = row.get(column.id))) {

        cellHtml += colourHtml[colourcellVal] ? colourHtml[colourcellVal] : colourHtml["default"];
    }
    else {
        cellHtml = value;
    }

    return cellHtml;
});
### CellRenderer


Der [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerGridCellRenderer|Cellrenderer]] wird für einen eigenen Spaltentyp (=type) verwendet. Hier wird das HTML für die Zellen diesen Types zurückgegeben.

Im folgenden Beispiel wird jede Zelle vom Typ "MY_CUSTOM_TYPE" eingefärbt.

Download: [customCellType.js](customCellType.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerGridCellRenderer("erpInvoice", "MY_CUSTOM_TYPE", function(documentsContext, options) {

    var row = options.row,
        column = options.column,
        type = options.type,
        value = options.value || "";

    return '<div style="background: #A7B5CC; height: 100%;">' + value + '</div>'
});
```

documents.sdk.gentable.gentableRegistry.registerGridCellRenderer("erpInvoice", "MY_CUSTOM_TYPE", function(documentsContext, options) {

    var row = options.row,
        column = options.column,
        type = options.type,
        value = options.value || "";

    return '<div style="background: #A7B5CC; height: 100%;">' + value + '</div>'
});
### postprocessCell

Der [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerCallback|Gentable.postprocessCell-Callback]] wird nach dem Rendern des Grids für jede Zelle ausgeführt. Der Vorteil gegenüber dem CellFormatter ist hier, das man die Zelle im Standardfall nicht berücksichtigen muss und man sie nur im gewünschten Spezialfall modifziert.

Im folgenden Beispiel wird der Text der Zelle in der Spalte "total" rot eingefärbt, wenn dessen Zahlenwert negativ ist.

Die übergebene Funktion `callback` sollte ausgeführt werden, damit das angezeigte Grid auch gecachet wird. Ändert sich etwas an den Daten, wird der Cache automatisch invalidiert und postprocessCell erneut aufrufen.


Download: [postprocessCellScript.js](postprocessCellScript.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.postprocessCell", function(celldata, callback) {

	//  check column id
	if(celldata.column.id === "total") {

		//  if number is negative make it red
		if(celldata.data.getNumber('total') < 0) {
			celldata.$cell.css('color', 'red');
		}
	}

	//	ensure cashing of results
	callback();
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.postprocessCell", function(celldata, callback) {

	//  check column id
	if(celldata.column.id === "total") {

		//  if number is negative make it red
		if(celldata.data.getNumber('total') < 0) {
			celldata.$cell.css('color', 'red');
		}
	}

	//	ensure cashing of results
	callback();
});