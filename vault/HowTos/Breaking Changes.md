---
title: "Breaking Changes in documentsOS"
source: "https://otris.software/documents/howto/scripting/breaking.html"
---

# Breaking Changes in documentsOS


## Einleitung

Dieses Howto gibt eine Übersicht über Änderungen, die zu DOCUMENTS 5 nicht abwärtskompatibel sind:

- Einschränkung der Skriptausführung Einschränkung der Skriptausführung
- Aktualisierung von externen Bibliotheken
Aktualisierung Chart.js ChartJS 4
Aktualisierung Fullcalendar.io Fullcalendar 6
- Änderung der Signaturschnittstelle otrSign Änderung der Signaturschnittstelle
- Portalscripting
Caching von DocFile-Objekten
Caching von DOCUMENTS-Objekten
Globaler Rückgabewert
Zeichensätze bei File-Objekten
Verfügbarkeit des module-Objekts
Datentyp von context.returnValue
Erzeugen von File-Objekten
Zugriff auf gelöschte Objekte
debugger-Statement
ScriptCall mit Nutzerkontext
JavaScript/ECMAScript


## Einschränkung der Skriptausführung

Als zusätzliches Sicherheitsfeature wird ab documentsOS Build #2504 die Ausführung von bestimmten Skripten aus dem Webclient standardmäßig geblockt. Dies betrifft insbesondere folgende Skripte:

- sämtliche AutoComplete-Skripte
- sämtliche Skripte, die per Script Extension API oder Documents Client SDK andere Skripte per runscript bzw. executeScript aufrufen, z.B. per TreeItem.action=executeScript:script name oder List.addAction({action:"runScript:script name"}) usw.
- Skripte, die in ScriptLists als Detailskripte aufgerufen werden, z.B. per List.setDetailsScriptName(<script name>)

Wird bei einer Aktion im Webclient ein Skript aufgerufen, welches nun standardmäßig blockiert ist, wird eine entsprechende Fehlermeldung ausgegeben:


Eine Übersicht zu blockierten Skripten kann als Dashboard-Kachel im **documentsOS-AdminCenter** eingestellt werden, siehe dazu auch die Dokumentation zum [AdminCenter](../../manuals/books/admin-center/dashboard.html#uebersicht).

Um blockierte Skripte verfügbar zu machen, können verschiedene Einstellungen gewählt werden:

- Globale Eigenschaft clientExecutableCheck=false, diese Einstellung wird allerdings nicht empfohlen, da somit wieder alle Skripte ausgeführt werden können
- Eigenschaft am jeweiligen Skript: clientExecutable=true, diese Einstellung wird empfohlen, wenn z.B. wenige Skripte betroffen sind
- Whitelist als globale Eigenschaft: Name: clientExecutableWhitelist, Typ: clientExecutableWhitelist mit Angabe der jeweiligen Skriptnamen, diese Einstellung wird z.B. für Lösungen empfohlen, bei denen mehrere Skripte betroffen sind

Weitere Informationen dazu sind dem entsprechenden HowTo zu entnehmen: [HowTo-Skriptausführung absichern](../common/secure-script-execution.html).


## Aktualisierung von externen Bibliotheken


### ChartJS 4

Ab **documentsOS Build 2504** steht ChartJS 4 zur Verfügung, vorher wurde ChartsJS 2 verwendet.

Sowohl in der vorherigen Version *ChartJS 3* als auch in Version *ChartJS 4* gab es diverse *Breaking Changes*, die insbesondere Optionsänderungen bei der Anzeige von Diagrammen enthalten, die wichtigsten Änderungen können dem entsprechenden HowTo entnommen werden: [ChartJS 4 Upgrade Guide](../common/chartjs-upgrade-guide.html)

Ausführliche Upgrade Information gibt es in den Migrationsguides von ChartJS:

- 3.x Migration Guide
- 4.x Migration Guide

**Hinweis:** Da die vorher verwendete Version *ChartsJS 2* noch im Auslieferungsumfang enthalten ist, kann diese bei Umstellungsproblemen ggf. noch verwendet werden, dazu kann die globale Eigenschaft `clientLibConfiguration` mit einem entsprechenden Wert verwendet werden. Diese Einstellung wird allerdings nicht empfohlen, da in späteren Versionen von documentsOS veraltete Bibliotheken entfernt werden.


### Fullcalendar 6

Ab **documentsOS Build 2504** steht FullCalendar 6 zur Verfügung, vorher wurde FullCalendar 3 verwendet.

In den vorherigen (übersprungenen) Versionen *FullCalendar 4* und *FullCalendar 5* als auch in der jetzt verwendeten Version *FullCalendar 6* gab es diverse *Breaking Changes*, die insbesondere bei der Verwendung eigener Konfigurationen mit `setConfig(calConfig)` überprüft werden sollten.

Ausführliche Upgrade Information gibt es in den Migrationsguides von fullcalendar.io:

- v4 upgrading from v3
- v5 upgrading from v4
- v6 upgrading from v5

**Hinweis:** Da die vorher verwendete Version *FullCalendar 3* noch im Auslieferungsumfang enthalten ist, kann diese bei Umstellungsproblemen ggf. noch verwendet werden, dazu kann die globale Eigenschaft `clientLibConfiguration` mit einem entsprechenden Wert verwendet werden. Diese Einstellung wird allerdings nicht empfohlen, da in späteren Versionen von documentsOS veraltete Bibliotheken entfernt werden.


## Verwaltung von API Keys

Ab **documentsOS Build 2504** ist die Verwaltung der API Keys nicht mehr über den Eintrag *API Keys* in den persönlichen Einstellungen des Benutzers abrufbar. Die Verwaltung ist nun unter dem Eintrag *Apps und Dienste* verfügbar.


Abb. 1 - Apps und Dienste - API-Schlüssel


## Änderung der Signaturschnittstelle

Ab **documentsOS Build 2504** wird die Signaturschnittstelle zentral über Skriptbibliotheken (*scriptlibs*) bereitgestellt, vorher war die Installation und Aktualisierung im Mandanten notwendig. Außerdem kann die Signaturschnittstelle nun als Erweiterung im **documentsOS-AdminCenter** eingestellt und konfiguriert werden, siehe dazu auch die Dokumentation zum [AdminCenter](../../manuals/books/admin-center/extensions.html#informationen-zu-aktuellen-erweiterungen).

**Wichtiger Hinweis:** Wurde die Signaturschnittstelle in einer DOCUMENTS 5 Installation genutzt, müssen diverse, bisher im Mandanten installierte Skriptbibliotheken entfernt werden. Dazu wird ein Wartungsskript bereitgestellt, dass ausgeführt werden muss, weitere Informationen sind dem Kapitel Nachbereitungen aus dem documentsOS - Migration Guide zur jeweiligen Installationsart (*Windows* bzw. *Linux*) zu entnehmen: [[Client SDK/index|documentsOS - Migration Guide (de)]] bzw. [[Client SDK/index|documentsOS - Migration Guide (en)]].


## Portalscripting


### Caching von DocFile-Objekten

Innerhalb eines Script-Kontexts werden `DocFile`-Objekt nicht mehrmals
erzeugt, sondern gecacht. Das bedeutet ein Performance-Gewinn, da während
der Script-Ausführung ein `DocFile`-Objekt nur genau einmal geladen
wird, egal wie oft und auf welchem Weg darauf zugegriffen wird.

Folgende Funktionen liefern also immer das gleiche `DocFile`-Objekt
zurück:

- context.file
- context.getFileById()
- FileResultset

Beispiel für die Verhaltensänderung:


```js
var fileId = "...";
var f = context.getFileById(fileId);
f.Test = "TEST";
var g = context.getFileById(fileId);
if (f.Test === g.Test) {
	util.out("Will happen in documentsOS");
} else {
	util.out("Will happen in DOCUMENTS 5");
}
```

var fileId = "...";
var f = context.getFileById(fileId);
f.Test = "TEST";
var g = context.getFileById(fileId);
if (f.Test === g.Test) {
	util.out("Will happen in documentsOS");
} else {
	util.out("Will happen in DOCUMENTS 5");
}Das bewirkt aber auch, dass Änderungen an dem `DocFile`-Objekt,
die im Hintergrund (Workflow, Job usw.) ausgeführt wurden, nicht
während der Script-Laufzeit verfügbar sind. Sollen deshalb die
Daten der Mappe vollständig neu aus der Datenbank geladen werden,
muss die neue Funktionen `DocFile.restore()` aufgerufen werden:


```js
let fileId = "...";
let f = context.getFileById(fileId);
f.Test = "TEST"; // neuer Wert
f.restore();
util.out(f.Test);
// f.Test !== "TEST"
```

let fileId = "...";
let f = context.getFileById(fileId);
f.Test = "TEST"; // neuer Wert
f.restore();
util.out(f.Test);
// f.Test !== "TEST"
### Caching von DOCUMENTS-Objekten

Alle DOCUMENTS-bezogenen JavaScript-Objekte werden analog zu
`DocFile`-Objekten gecacht. Anders als bei `DocFile`-Objekten
werden diese Objekte beim Zugriff neugeladen, so dass kein
`restore()` notwendig ist:

- AccessProfile
- Folder
- Register
- Document
- WorkflowStep
- ContorlFlow
- Email
- UserAction
- ArchiveServer


### Globaler Rückgabewert

Scripte, die als ECMAScript-Module markiert sind, dürfen keinen globales
`return` mehr enthalten. Stattdessen ist das Property `context.returnValue`
dafür zu benutzen.

Das Property gibt es seit DOCUMENTS 5.0h HF1, so dass bereits jetzt
Scripte in DOCUMENTS 5 entwickelt werden können, die in documentsOS als
ECMAScript-Module verwendet werden können.

Für ECMAScript-Module in documentsOS siehe das Modul-Tutorial.

**Hinweis**: Auch das Verhalten, wenn `context.returnValue` und `return`
gleichzeitig verwendet werden, unterscheidet sich zwischen Documents 5
und documentsOS. In documentsOS wird immer der Wert von
`context.returnValue` als Rückgabewert des ScriptLists verwendet, so wie
es auch geplant ist. In Documents 5 überschreibt das globale Return
diesen Wert jedoch.


```js
context.returnValue = "A";
return "B";

// Documents 5: B
// Documents 6: A
```

context.returnValue = "A";
return "B";

// Documents 5: B
// Documents 6: A
### Zeichensätze bei File-Objekten

Die Unterstützung von Zeichensätzen bei der `File`-Klasse wurde
erweitert, und das Default-Verhalten beim Zeichensatz verändert.
Wird nichts angegeben wird die Datei im Zeichensatz des
Betriebssystems (`local`) geöffnet bzw. geschrieben. Bisher war
es immer UTF-8, unabhängig vom Zeichensatz des Betriebssystems.


```js
var f = new File("file.text", "w");
f.writeLine("☺");
f.close();
// Output Windows: ??
// Output Linux: ☺

f = new File("file.text", "w", "local");
f.writeLine("☺");
f.close();
// Output Windows: ??
// Output Linux: ☺

f = new File("file.text", "w", "utf-8");
f.writeLine("☺");
f.close();
// Output Windows: ☺
// Output Linux: ☺
```

var f = new File("file.text", "w");
f.writeLine("☺");
f.close();
// Output Windows: ??
// Output Linux: ☺

f = new File("file.text", "w", "local");
f.writeLine("☺");
f.close();
// Output Windows: ??
// Output Linux: ☺

f = new File("file.text", "w", "utf-8");
f.writeLine("☺");
f.close();
// Output Windows: ☺
// Output Linux: ☺Analog gilt dies auch beim Lesen einer Datei.

**Hinweis**: Unter Windows wird zudem das Byte-Order-Mark (BOM)
berücksichtigt. Wenn eine Datei ein BOM enthält, wird die Datei
beim Lesen automatisch im entsprechendem Zeichensatz geöffnet.
Dies geschieht unabhängig davon, welcher Zeichensatz bei der
Erzeugung des `File`-Objekts angegeben wurde. Siehe hierzu
auch die Dokumentation der `File`-Klasse.


### Verfügbarkeit des module-Objekts

Das `module`-Objekt war nur dann in einem Script verfügbar, wenn
das Script per `require()` eingebunden wurde. In documentsOS ist
das `module` analog zu Node.JS jedoch immer verfügbar, womit die
bisherigen Tests, ob ein Script per `require()` eingebunden wird,
nicht mehr funktionieren. Der Test konnte wie folgt vorgenommen
werden:


```js
if (typeof module === "undefined") {
   // Direkt / Nicht per require()
} else {
   // Per require()
}
```

if (typeof module === "undefined") {
   // Direkt / Nicht per require()
} else {
   // Per require()
}Der Test greift nun nicht, da das `module`-Objekt in beiden Fällen
verfügbar ist. Um in documentsOS zu prüfen, ob ein Script per
`require()` eingebunden wird, kann in documentsOS der
[Standardweg von Node.JS](https://nodejs.org/api/modules.html#accessing-the-main-module)
verwendet werden:


```js
if (require.main === module) {
   // Direkt / Nicht per require()
} else {
   // Per require()
}
```

if (require.main === module) {
   // Direkt / Nicht per require()
} else {
   // Per require()
}Soll das Script sowohl auf Documents 5, als auch documentsOS laufen,
sind beide Tests wie folgt zu kombinieren:


```js
if (typeof module === "undefined" || typeof require !== "undefined" || ("main" in require && require.main === module)) {
   // Direkt / Nicht per require()
} else {
   // Per require()
}
```

if (typeof module === "undefined" || typeof require !== "undefined" || ("main" in require && require.main === module)) {
   // Direkt / Nicht per require()
} else {
   // Per require()
}Der Test funktioniert auch unabhängig davon, ob `context.enableModules()`
aktiviert wurde oder nicht.


### Datentyp von context.returnValue

In Documents 5 wurden der globale Rückgabewert bzw. der Wert von
`context.returnValue` durch eine fehlerhafte Implementierung als
String serialisiert. Dadurch ging der Datentyp des ursprünglichem
Werts verloren. Zudem wurden Arrays und Objekte als String
serialisiert, was in der Form nicht beabsichtigt war. Wird nun
in documentsOS ein Array, Objekt usw. übergeben, so ist der Wert
von `context.returnValue` gleich `null`:


```js
context.returnValue = [1];
// Doc 5: 1
// documentsOS: (empty return value)
```

context.returnValue = [1];
// Doc 5: 1
// documentsOS: (empty return value)
Dadurch behält `context.returnValue` den Datentyp des Originalwerts
bei, wodurch es aber in documentsOS zu Verhaltensänderungen kommt,
wenn später im Script der Wert von `context.returnValue` gelesen
wird:


```js
context.returnValue = 1;
// ...
if (context.returnValue === 1) {
   // documentsOS
} else {
   // Documents 5, da context.returnValue === "1" (also ein String)
}
```

context.returnValue = 1;
// ...
if (context.returnValue === 1) {
   // documentsOS
} else {
   // Documents 5, da context.returnValue === "1" (also ein String)
}
### Erzeugen von File-Objekten

Die `File`-Klasse kann nicht mehr als Funktion verwendet werden. Bisher war
das möglich, war aber nicht offiziell dokumentiert. Das wurde nun korrigiert.


```js
var docFile = File("test.txt", "r");

// DOCUMENTS 5: OK
// documentsOS:
// Script-ErrorMsg: JavaScript Error in line 4 column 8 to 9 of /_global/db/core/script1.js:
// Error: Error in function: File is only a constructor function. Use 'new File' to create an object.
// ...
// var x = File("test.txt", "r");
// ...
```

var docFile = File("test.txt", "r");

// DOCUMENTS 5: OK
// documentsOS:
// Script-ErrorMsg: JavaScript Error in line 4 column 8 to 9 of /_global/db/core/script1.js:
// Error: Error in function: File is only a constructor function. Use 'new File' to create an object.
// ...
// var x = File("test.txt", "r");
// ...Hier ist der `new`-Operator zu ergänzen.


```js
var docFile = new File("test.txt", "r");
```

var docFile = new File("test.txt", "r");
### Zugriff auf gelöschte Objekte

Ab DOCUMENTS 6.2.0 wird eine Exception geworfen, wenn auf gelöschte Mappen zugegriffen wird, die nicht im Papierkorb liegen.


```js
var fileId = "...";
var f = context.getFileById(fileId);
f.deleteFile();
f.Test = "TEST";
// Exception: DocFile.Set(): Not allowed for a pool file."
```

var fileId = "...";
var f = context.getFileById(fileId);
f.deleteFile();
f.Test = "TEST";
// Exception: DocFile.Set(): Not allowed for a pool file."
### debugger-Statement

Ist das Debugging aktiviert, dann bleibt in Documents 5 die Scripting-Engine
immer an Code-Stellen stehen, an denen ein `debugger`-Statement definiert
ist. Das Script bleibt dann solange dort stehen, bis sich ein Debug-Client
verbindet, um die Stelle zu untersuchen oder das Script fortzusetzen
bzw. zu beenden.

In documentsOS bleibt die Scripting-Engine hingegen nicht immer an der
Code-Stelle stehen, sondern *nur* dann, wenn ein Debug-Client verbunden ist.
Ein im Code vergessenes `debugger` kann daher die Anwendung nicht mehr
ohne weiteres blockieren.

Soll aber das Script dort zwecks Debugging anhalten, muss sich zuerst
ein Debug-Client mit der Engine verbinden, und dann das Script
ausgeführt werden. Details dazu finden sich im
[Howto zum Debugging](./debug.md).


### ScriptCall mit Nutzerkontext

In documentsOS benötigt der `ScriptCall` immer einen Nutzerkontext. Wird
der `ScriptCall` ohne Nutzerkontext ausgeführt, dann wird in documentsOS
folgende Fehlermeldung geworfen:


```javascript
Error in function ScriptCall.new():  The function has been invoked outside a valid execution context. Detail: invalid Systemuser
```

Error in function ScriptCall.new():  The function has been invoked outside a valid execution context. Detail: invalid Systemuser
### JavaScript/ECMAScript


#### const

`const`-Variablen haben nun einen Block Scope und keine Function Scope
mehr. Sie können also außerhalb des Blocks, in dem sie definiert wurden
nicht mehr referenziert werden. Siehe hierzu auch die
[ECMAScript spec](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-let-and-const-declarations).


```js
{
	const x = 1;
}
context.returnValue = x;

// documentsOS: ReferenceError: x is not defined
// DOCUMENTS 5: 1
```

{
	const x = 1;
}
context.returnValue = x;

// documentsOS: ReferenceError: x is not defined
// DOCUMENTS 5: 1
#### arguments

Das `arguments`-Objekt wird nicht mehr in Arrow-Funktionen
unterstützt, was der ECMAScript-Spezifikation entspricht.


```js
var a = (param1, param2) => {
	return JSON.stringify(arguments) + " / " + arguments.length;
};
util.out(a(1, 1));
// documentsOS: {} / 0
// DOCUMENTS 5: {"0":1,"1":1} / 2
```

var a = (param1, param2) => {
	return JSON.stringify(arguments) + " / " + arguments.length;
};
util.out(a(1, 1));
// documentsOS: {} / 0
// DOCUMENTS 5: {"0":1,"1":1} / 2
#### Error

Das `Error`-Objekt hat keine Properties `fileName`, `lineNumber`
und `columnNumber` mehr. Dies waren Erweiterungen der
SpiderMonkey-Engine, die nicht konform mit der ECMAScript-Spezifikation
sind. Die Informationen können aber weiterhin dem Stacktrace
entnommen werden (`fileName:lineNumber:columName`):


```javascript
Stacktrace:
		at logAsException (/relations/crypt/db/otrLogger.js :737:13)
		at otrLoggerClass.logError (/relations/crypt/db/otrLogger.js :375:5)
		at __JANUS (/relations/db/Logger.js :4:5)
		at  /relations/db/Logger.js :5:3.
```

	Stacktrace:
		at logAsException (/relations/crypt/db/otrLogger.js :737:13)
		at otrLoggerClass.logError (/relations/crypt/db/otrLogger.js :375:5)
		at __JANUS (/relations/db/Logger.js :4:5)
		at  /relations/db/Logger.js :5:3.
#### Gebunden Funktionen

Gebunden `function` haben einen anderen Namen. In der
SpiderMonkey-Engine haben gebundene Funktionen den gleichen Namen
wie die Originalfunktion. Entsprechend der ECMAScript-Spezifikation
beginnen die Namen nun mit "bound". Siehe hierzu auch
[ECMAScript spec](https://262.ecma-international.org/6.0/#sec-function.prototype.bind), Punkt 15.


```js
function a() {
	return 0;
}
util.out(b.bind(null).name);
// documentsOS: "bound a"
// DOCUMENTS 5: "a"
```

function a() {
	return 0;
}
util.out(b.bind(null).name);
// documentsOS: "bound a"
// DOCUMENTS 5: "a"
#### Vergleichsfunktion von Array.sort()

Im Falle von nicht-wohlgeformten Vergleichsfunktionen, ist das Verhalten
der Sortier-Funktion des Arrays im ECMAScript-Standard nicht definiert. Hier kann
sich daher das Verhalten der Sortier-Funktion in den ECMAScript-Implementierungen unterscheiden, was bei SpiderMonkey und V8 der Fall ist.

Nicht-wohlgeformten Vergleichsfunktionen sind z. B. Funktionen, die nicht
die Werte `-1`, `0` und `1` zurückgeben, sondern z. B. nur `0/false` und
`1/true`. V8 sortiert dann das Array nicht/verändert es nicht, SpiderMonkey
sortiert es in einigen Fällen schon:


```js
context.returnValue = JSON.stringify({
    array1: ["b","a"].sort(function(a, b) { return a > b}),
    array2: ["b","a"].sort(function(a, b) { return a < b})
}, null, 2);
// documentsOS: {"array1":["b","a"],"array2":["b","a"]}
// DOCUMENTS 5: {"array1":["a","b"],"array2":["b","a"]}
```

context.returnValue = JSON.stringify({
    array1: ["b","a"].sort(function(a, b) { return a > b}),
    array2: ["b","a"].sort(function(a, b) { return a < b})
}, null, 2);
// documentsOS: {"array1":["b","a"],"array2":["b","a"]}
// DOCUMENTS 5: {"array1":["a","b"],"array2":["b","a"]}
#### Sortierung von Strings

Kein *Breaking Change*, sondern nur eine kleine Verhaltensänderung, die
abwärtskompatibel ist. `String.localeCompare()` gibt nur noch `1`
oder `-1` zurück, und keine Zahl mehr, die den Abstand der beiden
Strings ausdrückt. Ist standard-konform, da der Standard nur die
Vorgabe macht, dass der Rückgabewert positiv oder negativ sein muss.
Siehe hierzu auch [ECMAScript spec](https://262.ecma-international.org/5.1/#sec-15.5.4.9).


```js
util.out("A".localeCompare("Z"));
// documentsOS: -1
// DOCUMENTS 5: -25
```

util.out("A".localeCompare("Z"));
// documentsOS: -1
// DOCUMENTS 5: -25Zudem spielt die Groß-/Kleinschreibung im Default bei der Sortierung keine
Rolle mehr.


```js
const x = [ "b", "A", "C" ];
const sortFunction = (a, b) => {
	return a.localeCompare(b);
};

context.returnValue = JSON.stringify(x.sort(sortFunction));

// documentsOS: ["A","b","C"]
// DOCUMENTS 5: ["A","C","b"]
```

const x = [ "b", "A", "C" ];
const sortFunction = (a, b) => {
	return a.localeCompare(b);
};

context.returnValue = JSON.stringify(x.sort(sortFunction));

// documentsOS: ["A","b","C"]
// DOCUMENTS 5: ["A","C","b"]Generell lässt sich die Sortierung durch die `Intl.Collator`-Klasse
besser steuern. Siehe hierzu auch [ECMAScript spec](https://tc39.es/ecma402/#collator-objects).

Siehe auch die [V8-Seite zur Internationalisierung](https://v8.dev/blog/intl).


#### Suchfunktion in Strings

Bei SpiderMonkey verfügten Strings über die Funktion `contains()`, mit
der geprüft werden konnte, ob eine Zeichenfolge in einem String enthalten
ist. Diese ist in documentsOS durch die standard-konforme Funktion
[includes](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.includes)
ersetzt worden.


```js
context.returnValue = "abc".contains("bc"); // Documents 5
context.returnValue = "abc".includes("bc"); // documentsOS
```

context.returnValue = "abc".contains("bc"); // Documents 5
context.returnValue = "abc".includes("bc"); // documentsOS
#### Iteratoren und Iterator-Objekte

Iteratoren liefern nun ein Iterator-Objekt zurück, und nicht mehr den
Wert. Betrifft alle Funktionen, die Iteratoren zurückgegeben haben.
Siehe [ECMAScript spec](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-iteratorresult-interface).


```js
const m = new Map();
m.set("a", "b");
var it = m.keys();
context.returnValue = JSON.stringify(it.next());

// documentsOS: {"value":"a","done":false}
// DOCUMENTS 5: "a"
```

const m = new Map();
m.set("a", "b");
var it = m.keys();
context.returnValue = JSON.stringify(it.next());

// documentsOS: {"value":"a","done":false}
// DOCUMENTS 5: "a"Ferner tritt nun keine Exception mehr auf, wenn das Ende des Iterators
erreicht wurde:


```js
const m = new Map();
m.set("a", "b");
var it = m.keys();
it.next();
context.returnValue = JSON.stringify(it.next())

// documentsOS: {"done":true}
// DOCUMENTS 5: uncaught exception: [object StopIteration]
```

const m = new Map();
m.set("a", "b");
var it = m.keys();
it.next();
context.returnValue = JSON.stringify(it.next())

// documentsOS: {"done":true}
// DOCUMENTS 5: uncaught exception: [object StopIteration]
### Parsen von Datum- und Zeitstrings

Der `Date`-Konstruktor und die Funktion `Date.parse()` müssen
laut Standard eine [vereinfachte Version des ISO 8601 Extended Format](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format)
parsen können. Darüber hinaus können Implementationen weitere
String-Formate unterstützen, wovon V8 Gebrauch macht.


```js
util.out(new Date("01.01.2015"));
// documentsOS: Thu Jan 01 2015 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
// DOCUMENTS 5: Invalid Date
```

util.out(new Date("01.01.2015"));
// documentsOS: Thu Jan 01 2015 00:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
// DOCUMENTS 5: Invalid DateHingegen wandelt `Date.parse()` der SpiderMonkey Strings mit einem
ungültigen Datum in ein Datum um, während auf V8 in dem Fall ein
`NaN` zurückgibt:


```js
const d = Date.parse("Thu Aug 49 2024 13:17:41 GMT+0200 (Mitteleuropäische Sommerzeit)");
util.out(d);
// documentsOS: NaN
// DOCUMENTS 5: 1726658261000
```

const d = Date.parse("Thu Aug 49 2024 13:17:41 GMT+0200 (Mitteleuropäische Sommerzeit)");
util.out(d);
// documentsOS: NaN
// DOCUMENTS 5: 1726658261000