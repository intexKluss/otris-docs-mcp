---
title: "Eigener Cell-Renderer"
source: "https://otris.software/documents/howto/gentable/gridCellRenderer.html"
---

# Eigener Cell-Renderer


Abb. 1 - Einfacher eigener Renderer

Im Gentable können auch eigene Renderer zum Darstellen von Daten eingebunden werden.
Hierzu gibt es in der Documents Client SDK die Funktionen [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerGridCellRenderer|registerGridCellRenderer]].
Diese hat Zugriff auf den DocumentsContext und auf die Daten des Gentables und muss das zu rendernde HTML zurück geben.


## Beispiel Grid Cell Renderer einbinden

Download: [gridCellRenderer.js](gridCellRenderer.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerGridCellRenderer("erpInvoice", "MY_CUSTOM_TYPE", function(documentsContext, options) {

	var row = options.row,
		column = options.column,
		type = options.type,
		value = options.value;

	return '<div style="background: #A7B5CC; height: 100%;">custom cell: ' + value + '</div>'
});
```

documents.sdk.gentable.gentableRegistry.registerGridCellRenderer("erpInvoice", "MY_CUSTOM_TYPE", function(documentsContext, options) {

	var row = options.row,
		column = options.column,
		type = options.type,
		value = options.value;

	return '<div style="background: #A7B5CC; height: 100%;">custom cell: ' + value + '</div>'
});