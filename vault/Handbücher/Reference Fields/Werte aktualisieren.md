---
title: "Werte aktualisieren"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/update.html"
---

# Werte aktualisieren

Beim Setzen eines Referenzfelds werden weitere Feldwerte der referenzierten Mappe zu verschiedenen Zwecken in die referenzierende Mappe kopiert. Falls der Originalwert später verändert wird, wird der kopierte Wert defaultmäßig nicht aktualisiert. Um die Werte in einer referenzierenden Mappe zu aktualisieren gibt es zwei Möglichkeiten.


## Property AutoUpdateByRefFields

Das Property bewirkt, dass ein geänderter Anzeigename oder Defaultwert automatisch in den referenzierenden Mappen angepasst wird. Es muss an dem Feld gesetzt werden dessen Wert an der referenzierenden Mappe aktualisiert werden soll. Dem Property muss das Schlüsselfeld der referenzierten Mappe zugewiesen werden.

- Das Property wird im Kapitel Property AutoUpdateByRefFields beschrieben.


## Wartungsoperation updateRefFields

Diese Operation kann aufgerufen werden um einmalig alle Anzeigenamen und Defaultwerte zu aktualisieren.

- Die Wartungsoperation wird im Kapitel Wartungsoperation updateRefFields beschrieben.