---
title: "Zeilen zusammenfassen"
source: "https://otris.software/documents/howto/gentable/GridColumnAggregator.html"
---

# Zeilen zusammenfassen

Mit einem DobyGrid ColumnAggregator können die Inhalte einer Spalte zusammengefasst werden. Unterhalb des Gentables erscheint dann eine zusätzliche Zeile, welche nicht Bestandteil des Datenmodells ist.


Mit [[Client SDK/documents.sdk.gentable.gentableRegistry#.registerGridColumnAggregator|gentableRegistry.registerGridColumnAggregator(...)]] wird ein Aggregator für ein bestimmtes Feld in der Gentabledefinition registriert.

Die Funktion muss einen DobyGrid Aggregator zurückgeben, der folgende Form hat:


```javascript
aggregator = {
    name: <Aggregatorname>,
    description: <Beschreibung>,
    fn: function(column) {
        this.formatter = function() { Hier muss das anzuzeigende HTML für die Summenzelle zurück gegeben werden. }
        this.process = function() { Wird für die Werte der Spalte aufgerufen. Besimmt wie die Werte für einen Aufruf aufsummiert werden. }
        this.reset = function() { Wird aufgerufen um den Aggregator wieder auf den Ursprungswert zu setzen. Das passiert z.B. wenn gefiltert wird (Suche), da hier die Summe über den gefilterten Elementen gebildet werden muss. }
    }
}
```

aggregator = {
    name: <Aggregatorname>,
    description: <Beschreibung>,
    fn: function(column) {
        this.formatter = function() { Hier muss das anzuzeigende HTML für die Summenzelle zurück gegeben werden. }
        this.process = function() { Wird für die Werte der Spalte aufgerufen. Besimmt wie die Werte für einen Aufruf aufsummiert werden. }
        this.reset = function() { Wird aufgerufen um den Aggregator wieder auf den Ursprungswert zu setzen. Das passiert z.B. wenn gefiltert wird (Suche), da hier die Summe über den gefilterten Elementen gebildet werden muss. }
    }
}Die Attribute *name* und *description* sind nur für das DobyGrid von Bedeutung und haben keine sichtbare Auswirkung auf das Gentable, helfen aber bei der Dokumentation der Funkionalität des Aggregators.

Download: [GridColumnAggregator_example.js](GridColumnAggregator_example.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerGridColumnAggregator("erpInvoice", "total", function(documentsContext, options) {

	var aggregator = {	/*	aggregator to sum up all total fields	*/
			name: "Total Summary",
	        description: "A simple aggregator for calculating the total of all values in this column",
			fn: function (column) {

				// This function will be called when the Aggregator cell is being rendered.
	            // Should return a valid HTML string.
				this.formatter = function () {
					var totalFormatted = documents.sdk.utils.formatNumber(this.total, { decimalPrecision: 2 });
					return "Gesammt: <strong>" + totalFormatted + "</strong>";
				};

				// This function will be called on each item row when processing the aggregator.
				this.process = function (item) {
					this.total += item.get(column.field);
				};

				// This function will be called anytime the aggregator needs to be reset, like
	            // in the event of a filter being applied to the data set.
				this.reset = function () {
					this.total = 0;
				};

				return this;
			}
	};

	return aggregator;
});
```

﻿documents.sdk.gentable.gentableRegistry.registerGridColumnAggregator("erpInvoice", "total", function(documentsContext, options) {

	var aggregator = {	/*	aggregator to sum up all total fields	*/
			name: "Total Summary",
	        description: "A simple aggregator for calculating the total of all values in this column",
			fn: function (column) {

				// This function will be called when the Aggregator cell is being rendered.
	            // Should return a valid HTML string.
				this.formatter = function () {
					var totalFormatted = documents.sdk.utils.formatNumber(this.total, { decimalPrecision: 2 });
					return "Gesammt: <strong>" + totalFormatted + "</strong>";
				};

				// This function will be called on each item row when processing the aggregator.
				this.process = function (item) {
					this.total += item.get(column.field);
				};

				// This function will be called anytime the aggregator needs to be reset, like
	            // in the event of a filter being applied to the data set.
				this.reset = function () {
					this.total = 0;
				};

				return this;
			}
	};

	return aggregator;
});