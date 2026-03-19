---
title: "Zusatzbereiche rendern"
source: "https://otris.software/documents/howto/gentable/customContainers.html"
---

# Zusatzbereiche rendern

Im Gentable gibt es drei Bereiche die zusätzlich mit HTML befüllt werden können.
Hierfür gibt es die Funktionen:

- gentableContext.getCustomContainerNorth() (Dieser Bereich liegt über der Gentabletoolbar)
- getCustomContainerCenter() (liegt zwischen Gentabletoolbar und Gentable)
- getCustomContainerSouth() (liegt unter dem Gentable).

Diese Bereiche können jederzeit angepasst werden, ein sinnvoller Callback ist
hier zum Beispiel **Gentable.afterRender**. Hier ist es möglich zusätzliche
Informationen mit Anweisungen zur Nutzung des Gentables anzuzeigen.


Download: [customContainers.js](customContainers.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.afterRender", function(documentsContext, options) {

	var gentableContext = documentsContext.getGentableContext(),
		$customElementNorth = gentableContext.getCustomContainerNorth(),
		$customElementCenter = gentableContext.getCustomContainerCenter(),
		formatNumber = function(number) {

			return documents.sdk.utils.formatNumber(number, { decimalPrecision : 2 });
		},
		calcRowTotal = function(row) {

			var rowAmount = row.get("amount"),
				rowUnitPrice = row.get("unitprice"),
				rowTotal = rowAmount * rowUnitPrice;

			return rowTotal;
		},
		grid = documentsContext.getGentableContext().getGridModel(),
		total = 0,
		totalFormatted;

	//		calc sum of all rows
	grid.getRows().each( function(row) {

		total += calcRowTotal(row);
	});

	total = Math.round((total + 0.00001) * 100) / 100;

	//	get correct file field depending on file type
	totalFormatted = formatNumber(total);

	drawSum(gentableContext, totalFormatted);

	$customElementNorth.css({
		"margin-top":	"9px",
		"margin-left":	"9px",
		"margin-right":	"9px",
		"text-align":	"right"
	});

	$customElementCenter.css({
		"margin-top":	"4px",
		"margin-bottom":	"6px",
		"margin-left":	"9px"
	});

	$customElementCenter.append('<span>Rechnung Imigination AG vom 18.08.2017</span>');
	$customElementNorth.append('<span>Fällig: </span><span style="color:red;">Jetzt</span>');
});

var drawSum = function(getGentableContext, totalFormatted) {

	var $customElement = getGentableContext.getCustomContainerSouth(),
		$score = $jq('<span style="color: red;position: absolute; right: 9px;bottom: 20px;">Die Gesamtsumme ist zu hoch. Bitte ändern sie die Positionen.</span>');

	//	clear content, set css & append score
	$customElement.html('');
	$customElement.append($score);
};
```

﻿documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.afterRender", function(documentsContext, options) {

	var gentableContext = documentsContext.getGentableContext(),
		$customElementNorth = gentableContext.getCustomContainerNorth(),
		$customElementCenter = gentableContext.getCustomContainerCenter(),
		formatNumber = function(number) {

			return documents.sdk.utils.formatNumber(number, { decimalPrecision : 2 });
		},
		calcRowTotal = function(row) {

			var rowAmount = row.get("amount"),
				rowUnitPrice = row.get("unitprice"),
				rowTotal = rowAmount * rowUnitPrice;

			return rowTotal;
		},
		grid = documentsContext.getGentableContext().getGridModel(),
		total = 0,
		totalFormatted;

	//		calc sum of all rows
	grid.getRows().each( function(row) {

		total += calcRowTotal(row);
	});

	total = Math.round((total + 0.00001) * 100) / 100;

	//	get correct file field depending on file type
	totalFormatted = formatNumber(total);

	drawSum(gentableContext, totalFormatted);

	$customElementNorth.css({
		"margin-top":	"9px",
		"margin-left":	"9px",
		"margin-right":	"9px",
		"text-align":	"right"
	});

	$customElementCenter.css({
		"margin-top":	"4px",
		"margin-bottom":	"6px",
		"margin-left":	"9px"
	});

	$customElementCenter.append('<span>Rechnung Imigination AG vom 18.08.2017</span>');
	$customElementNorth.append('<span>Fällig: </span><span style="color:red;">Jetzt</span>');
});

var drawSum = function(getGentableContext, totalFormatted) {

	var $customElement = getGentableContext.getCustomContainerSouth(),
		$score = $jq('<span style="color: red;position: absolute; right: 9px;bottom: 20px;">Die Gesamtsumme ist zu hoch. Bitte ändern sie die Positionen.</span>');

	//	clear content, set css & append score
	$customElement.html('');
	$customElement.append($score);
};