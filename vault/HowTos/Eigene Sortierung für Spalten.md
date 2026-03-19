---
title: "Eigene Sortierung für Spalten"
source: "https://otris.software/documents/howto/gentable/comparators.html"
---

# Eigene Sortierung für Spalten


Für spezielle Datentypen, dessen Werte nicht lexikographisch oder nach
Zahlenwert sortiert werden können, wie z.B. Dateigrößen als Text, können
eigene Komparatoren eingebunden werden.

Dessen Implementierung orientiert sich an Komparatoren wie in Java und anderen
Programmiersprachen. Über die Gentable-Registry werden alle Spalten-Komparatoren
für eine Definition registriert:

Download: [singleComparator.js](singleComparator.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.comparators", function(documentsContext, options) {

    return {
                              // ( Wert Zeile a, Wert Zeile b, Model Zeile a, Model Zeile b )
            "unitprice": function(a, b, rowAData, rowBData) {

                // Wert ist gleich
                if(a == b) {
                    return 0;
                }

                //  Wert ist höher 1 sonst -1
                return(a > b) ? 1 : -1;
            },
            "amount": function(){...}
    };
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.comparators", function(documentsContext, options) {

    return {
                              // ( Wert Zeile a, Wert Zeile b, Model Zeile a, Model Zeile b )
            "unitprice": function(a, b, rowAData, rowBData) {

                // Wert ist gleich
                if(a == b) {
                    return 0;
                }

                //  Wert ist höher 1 sonst -1
                return(a > b) ? 1 : -1;
            },
            "amount": function(){...}
    };
});Zum Sortieren von Gruppen im Gentable müssen sogenannte *groupComparators*
eingebunden werden. Der unterschied zu den normalen Komparatoren besteht darin,
dass die Daten anders aufbereitet und zur Verfügung gestellt werden.
Damit die normalen Komparatoren von den Gruppenkomparatoren unterscheidbar sind,
kann *rowComparators* verwendet werden:

Download: [multiComparator.js](multiComparator.js)


```javascript
documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.comparators", function(documentsContext, options) {

	return {
		groupComparators: {

			"itemno": function(groupA, groupB) {

				// Index der Gruppe holen
				var groupIndexA = +(groupA.grouprows[0].get('groupindex')),
					groupIndexB = +(groupB.grouprows[0].get('groupindex'));

				// Gruppen haben den selben Index
				if(groupIndexA === groupIndexB) {
					return 0;
				}

				// Gruppe A > Gruppe B
				return (groupIndexA > groupIndexB) ? 1 : -1;
			}
		},
		rowComparators: {

			"unitprice": function(a, b, rowAData, rowBData) {

				//  Wert der Summenspalte holen
				var sumRowA = rowAData.get("amount") * a,
					sumRowB = rowBData.get("amount") * b;

				if(sumRowA == sumRowB) {
					return 0;
				}

				//  Sortieren nach Summe
				return (sumRowA > sumRowB) ? 1 : -1;
			}
		}
	};
});
```

documents.sdk.gentable.gentableRegistry.registerCallback("erpInvoice", "Gentable.comparators", function(documentsContext, options) {

	return {
		groupComparators: {

			"itemno": function(groupA, groupB) {

				// Index der Gruppe holen
				var groupIndexA = +(groupA.grouprows[0].get('groupindex')),
					groupIndexB = +(groupB.grouprows[0].get('groupindex'));

				// Gruppen haben den selben Index
				if(groupIndexA === groupIndexB) {
					return 0;
				}

				// Gruppe A > Gruppe B
				return (groupIndexA > groupIndexB) ? 1 : -1;
			}
		},
		rowComparators: {

			"unitprice": function(a, b, rowAData, rowBData) {

				//  Wert der Summenspalte holen
				var sumRowA = rowAData.get("amount") * a,
					sumRowB = rowBData.get("amount") * b;

				if(sumRowA == sumRowB) {
					return 0;
				}

				//  Sortieren nach Summe
				return (sumRowA > sumRowB) ? 1 : -1;
			}
		}
	};
});