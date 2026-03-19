---
title: "Tipps und Tricks"
source: "https://otris.software/documents/api/otrTest/tips-and-tricks.html"
---

# Tipps und Tricks


## Testausführung beenden

Die Ausführung einer Testsuite kann abgebrochen werden, indem das Property `otrTestCancelTestExecution` im PropCache gesetzt wird:


```js
propCache.otrTestCancelTestExecution = true;
```

propCache.otrTestCancelTestExecution = true;Ein bereits laufender Test wird noch zuende ausgeführt. otrTest beendet die Ausführung mit dem nächsten Test der Testsuite und löscht das Property wieder aus dem PropCache.

Der propCache-Wert kann bspw. schnell und einfach im Skriptausführungsfenster mit der Serverkonsole der DOCUMENTS-Toolbox gesetzt werden.


## Coverage-Daten von Gadgets-, Exits-, ScriptCall-Scripten und globale return-Statements

Werden Script im Rahmen von Tests nicht direkt ausgeführt,
sondern z. B. durch ScriptCalls oder durch ausgelöste
Exits, werden deren Coverage-Daten erfasst. Skripte mit
globalem `return`-Statement werden ebenfalls nicht erfasst, da
globale `return`-Statements nach ECMA-Standard syntaktisch
falsch sind und vom Code Instrumenter übersprungen werden.

Um die Coverage-Daten solcher Scripte zu erfassen, kann
das Script `collect-coverage-data` in diesen Scripten
importiert werden. Das sorgt dafür, dass die Coverage-Daten
in einem CustomProperty gespeichert werden, so dass
Testframework die Daten herunterladen kann.

Zusätzlich ist es notwendig, globale return-Statements auf
`context.returnValue` umzustellen.

Beispiel:


```js
context.returnType = 'html';
// #import [collect-coverage-data]
context.returnValue = 'Alarm'; // statt return 'Alarm!';
```

context.returnType = 'html';
// #import [collect-coverage-data]
context.returnValue = 'Alarm'; // statt return 'Alarm!';Per Default lädt das Testframework die Daten herunter.
Kann aber auch mittels des Schalters `--fetch-coverage-data`
gesteuert werden.