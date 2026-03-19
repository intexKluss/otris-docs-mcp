---
title: "runscript"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/runscript.html"
---

# runscript

Statt der Referenzregel kann im Konfigurationsdialog auch


```javascript
%runscript:scriptname%
```

%runscript:scriptname%angegeben werden, wobei `scriptname` der Name eines Scripts ist, der einen geeigneten Mappentypen und das Schlüsselfeld zurückgibt. Näheres dazu gibt es auch in den Folien zur DoPaK 2018.


## Option uniqueKey in AutoUpdateByRefFields

Wenn ein Referenzfeld mit `runscript` konfiguriert wird,


```javascript
%runscript:scriptname%
%displayname%
```

%runscript:scriptname%
%displayname%dann wird das Referenzfeld nach einer Änderung des Originalfelds `displayname` defaultmäßig nicht aktualisiert, auch wenn am Feld `displayname` die Eigenschaft `AutoUpdateByRefFields` gesetzt ist. Falls auch die mit `runscript` konfigurierten Referenzfelder aktualisiert werden sollen, muss die Option `uniqueKey` in `AutoUpdateByRefFields` angegeben werden und der Wert in `keyField` muss im gesamten System eindeutig sein.


```javascript
AutoUpdateByRefFields=keyField,uniqueKey
```

AutoUpdateByRefFields=keyField,uniqueKey
### Bitte Beachten

Bei der Aktualisierung mit der Option `uniqueKey` wird nur noch der Wert in `keyField` aber nicht mehr der Mappentyp berücksichtigt. Wenn also der Wert in `uniqueKey` nicht im gesamten System eindeutig ist, werden die Referenzfelder, die den gleichen Wert enthalten auch aktualisiert.