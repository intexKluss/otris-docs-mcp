---
title: "Referenzlisten beim Referenzfeld gruppieren"
source: "https://otris.software/documents/howto/list/referenceListGroupBy.html"
---

# Referenzlisten beim Referenzfeld gruppieren

Die verknüpften Listen die beim Anzeigen des Referenzfelddialogs angezeigt werden, können sehr lang und übersichtlich werden. Hier ist es möglich die Liste der Vorgänge nach ein oder mehreren Spalten zu gruppieren.


### Beispiel gruppierte Referenzliste


Abb. 1 - Gruppierte Liste beim Öffnet des Referenzfelddialogs

Hierzu müssen am Referenzfeld für die Eigenschaft *ReferenceListGroupBy* ein oder mehrere Spaltenindexe (kommasepariert) gesetzt sein.


Abb. 2 - Setzen der Eigenschaft ReferenceListGroupBy

Die Gruppen können auch inital ein- oder ausgeklappt dargestellt werden, hierzu fügt man dem Spaltenindenx ein +(aufgeklappt) oder -(eingeklappt) hinzu.


```javascript
Erste Spalte aufgeklappt und zweite zu:
ReferenceListGroupBy = 1+,2-

Ersten drei Spalte aufgeklappt:
ReferenceListGroupBy = 1+,2+,3+
```

Erste Spalte aufgeklappt und zweite zu:
ReferenceListGroupBy = 1+,2-

Ersten drei Spalte aufgeklappt:
ReferenceListGroupBy = 1+,2+,3+Damit alle Gruppen angezeigt werden können, listet Documents beim Anzeigen des Referenzfelddialogs alle vorhandenen Vorgänge des verknüpften Typs.

Dies kann bei sehr vielen Vorgängen sehr lange dauern.

Um die Anzeigezeit zu verkürzen, kann hier zusätzlich für die Eigenschaft *ReferenceListGroupByLimit* ein Ganzzahlwert gesetzt werden. Dieser begrenzt die Anzahl der zu ladenden Listeneinträge. Die fehlenden Zeilen werden dann nach dem Aufklappen und Scrollen der Listeneinträge nachgeladen.


Abb. 3 - Setzen der Eigenschaft ReferenceListGroupByLimit