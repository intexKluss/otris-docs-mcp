---
title: "Testsuites"
source: "https://otris.software/documents/api/otrTest/unittests.html"
---

# Testsuites

Testsuites müssen im Verzeichnis `src/test` abgelegt werden und mit das Präfix `test.` beginnen. Ein gültiger Name für eine Testsuite lautet z.B. `test.lcmContract_CoreAPI.js`:


```javascript
src
  test
    lcmContract
      test.lcmContract_CoreAPI.js
  otrTest-config.json
```

src
  test
    lcmContract
      test.lcmContract_CoreAPI.js
  otrTest-config.json
## Testcontainer

Jede Testsuite muss einen Testcontainer erstellen, denen die UnitTests (oder QuickCheckTests) zugeordnet werden. Ein Testcontainer wird wie folgt erstellt:


```javascript
// #import [requireShim]

var otrTest = require("@otrTest/otrTest");
var testContainer = otrTest.getUnitTestContainer({
	name: "lcmContract_CoreAPI",                  // Name der Testsuite
	logPerf: true,                                // Loggt die Ausführungszeit der Tests
	formatter: new otris.test.JUnitXMLFormatter() // Optional. Formatter für die Testergebnisse
 });
```

// #import [requireShim]

var otrTest = require("@otrTest/otrTest");
var testContainer = otrTest.getUnitTestContainer({
	name: "lcmContract_CoreAPI",                  // Name der Testsuite
	logPerf: true,                                // Loggt die Ausführungszeit der Tests
	formatter: new otris.test.JUnitXMLFormatter() // Optional. Formatter für die Testergebnisse
 });
# UnitTests


## Erstellen eines UnitTests

Um einen Test zu erstellen, muss dieser dem `UnitTestContainer` hinzugefügt werden:


```javascript
testContainer.addTest(new UnitTest(function() {
	this.assertIsTrue(false, "${value1} is not true");
}, "schreiber", "assert true is false"));
```

testContainer.addTest(new UnitTest(function() {
	this.assertIsTrue(false, "${value1} is not true");
}, "schreiber", "assert true is false"));In diesem Beispiel wird der Test mit dem Benutzer `schreiber` ausgeführt. Der Test hat den Namen `assert true is false`.
Das Testframework stellt eine Reihe von Assertion-Methoden bereit, die über `this.xyz` innerhalb des UnitTests aufgerufen werden können.
Auszug der verfügbaren Assertions:

- assertIsEqual / assertIsExactEqual: Prüfung auf Gleichheit (letztere mit Typgleichheit (== vs. ===)
- assertIsTrue / assertIsFalse
- assertIsDocFile
- assertReferenceFile
- assertIsSet

Das sind nur wenige der verfügbaren Assertions. Eine vollständige Liste kann am besten über die Code Completion von Visual Studio Code oder über die [API-Dokumentation](https://doku.otris.de/api/otrTest/) aufgerufen werden.


## Ausführen von Tests

Eine Testsuite oder einzelne UnitTests können direkt durch das Ausführen des PortalScripts ausgeführt werden. Hierzu muss am Ende der Testsuite folgende Zeile ergänzt werden:


```javascript
// Führt alle Tests aus
return testContainer.runAll();
```

// Führt alle Tests aus
return testContainer.runAll();oder


```javascript
// Führt einen einzelnen Test aus
return testContainer.run("assert true is false");
return testContainer.run("assert true *");        // Führt alle Tests aus, dessen Namen dem regulären Ausdruck entsprechen
```

// Führt einen einzelnen Test aus
return testContainer.run("assert true is false");
return testContainer.run("assert true *");        // Führt alle Tests aus, dessen Namen dem regulären Ausdruck entsprechen
## Automatisches Löschen von Testdaten

Wenn die Funktionen des Testframeworks (z.B. `createDocFile`, `createFolder`...) verwendet werden, werden die so erzeugten Daten nach dem Ausführen des UnitTests automatisch wieder gelöscht.

Um auch Daten zu löschen, die durch externe Funktionen entstanden sind, können diese dem Testframework übergeben werden:


```javascript
testContainer.addTest(new UnitTest(function() {
	/** @type {DocFile} */
        var contract = lcmContract_CoreAPI.create(...);
	this.addDocFileToDelete(contract.getid());       // Löscht nach dem Beenden des UnitTests den erstellten Vertrag
}, "<Benutzer-Login>", "<Name des Tests>"));
```

testContainer.addTest(new UnitTest(function() {
	/** @type {DocFile} */
        var contract = lcmContract_CoreAPI.create(...);
	this.addDocFileToDelete(contract.getid());       // Löscht nach dem Beenden des UnitTests den erstellten Vertrag
}, "<Benutzer-Login>", "<Name des Tests>"));Das Löschen der Testdaten kann auf mehrere Wege unterbunden werden, ohne den Testfall selbst anpassen zu müssen:
**Deaktivieren am Testcontainer**


```javascript
var testContainer = otrTest.getUnitTestContainer({
	deleteTestData: false                                  // Löschen der Testdaten deaktivieren
});
```

var testContainer = otrTest.getUnitTestContainer({
	deleteTestData: false                                  // Löschen der Testdaten deaktivieren
});**Deaktivieren am Unit-Test**


```javascript
testContainer.addTest(new UnitTest(function() {
    /** @type {DocFile} */
    var contract = lcmContract_CoreAPI.create(...);
    this.addDocFileToDelete(contract.getid());
}, "<Benutzer-Login>", "<Name des Tests>", false));           // 3. Parameter
```

testContainer.addTest(new UnitTest(function() {
    /** @type {DocFile} */
    var contract = lcmContract_CoreAPI.create(...);
    this.addDocFileToDelete(contract.getid());
}, "<Benutzer-Login>", "<Name des Tests>", false));           // 3. Parameter
## Substitutionen / Pseudo-Templateliterale

Die Fehlermeldungen können bei Assertions durch Substitutionen erweitert werden, womit man auf die Eingabeparameter zugreifen kann, die verglichen werden. Aktuell werden die folgenden Substitutions unterstützt:


```javascript
this.assertIsExactEqual(1, 2, "Values (${values}) are not equal"); // => "Values (1, 2) are not equal"
this.assertIsExactEqual(1, 2, "${value1} is not equal to ${value2}"); // => "1 is not equal to 2"
```

this.assertIsExactEqual(1, 2, "Values (${values}) are not equal"); // => "Values (1, 2) are not equal"
this.assertIsExactEqual(1, 2, "${value1} is not equal to ${value2}"); // => "1 is not equal to 2"
## preConditions / postConditions

Am Testcontainer können so genannte preConditions bzw. postConditions definiert werden. Das sind Funktionen, die vor bzw. nach dem Ausführen der UnitTests des Testcontainers aufgerufen werden. Technisch gesehen handelt es sich dabei ebenfalls um einen UnitTests, weshalb innerhalb der Funktion sämtliche Funktionen des UnitTests über das `this`-Objekt verfügbar sind:


```javascript
testContainer.setPreConditions(function() {
    // z. B. Erstellen von Testdaten
}, "schreiber");

testContainer.setPostconditions(function() {
    // z. B. aufräumen, nachträgliche Auswertung etc.
}, "schreiber");
```

testContainer.setPreConditions(function() {
    // z. B. Erstellen von Testdaten
}, "schreiber");

testContainer.setPostconditions(function() {
    // z. B. aufräumen, nachträgliche Auswertung etc.
}, "schreiber");Auch innerhalb der preConditions können Testdaten per `this.addDocFileToDelete` zum Löschen nach dem Ausführen **aller** UnitTests definiert werden.


# Ausführungsablauf

Die Tests werden wie folgt ausgeführt:

1. Ausführen der preCondtions
2. Ausführen aller UnitTests. Die Reihenfolge ist dabei nicht definiert (UnitTests sollten keine Voraussetzungen / Abhängigkeiten zu anderen UnitTests aufweisen).
3. Ausführen der postConditions

Ein UnitTest wird wie folgt ausgeführt:

1. Wechsel zum angegebenen Skriptuser (hier: schreiber)
2. Ausführen der Funktion, die dem UnitTest übergeben wurde. Sollte die Funktion eine Exception werfen, wird diese vom Testframework abgefangen und die Ausführung des nächsten Tests begonnen.
3. Nach dem ein UnitTest (mit oder ohne Fehler) beendet wurde, werden alle Testdaten in umgekehrter Reihenfolge gelöscht (First in, last out).


# Vollständiges Beispiel


```javascript
var otrTest = require("@otrTest/otrTest");
var testContainer = otrTest.getUnitTestContainer({
	name: "lcmContract_CoreAPI",                          // Name der Testsuite
	logPerf: true,                                        // Loggt die Ausführungszeit der Tests
	formatter: new otris.test.JUnitXMLFormatter(),        // Formatter für die Testergebnisse
      	appendStacktraceForUnitTests: true,                   // Gibt den Stacktrace in der Fehlermeldung des Testfalls aus
});

testContainer.addTest(new UnitTest(function() {
	this.assertIsTrue(false, "${value1} is not true");
}, "schreiber", "assert true is false"));

// Führt alle Tests aus
return testContainer.runAll();
```

var otrTest = require("@otrTest/otrTest");
var testContainer = otrTest.getUnitTestContainer({
	name: "lcmContract_CoreAPI",                          // Name der Testsuite
	logPerf: true,                                        // Loggt die Ausführungszeit der Tests
	formatter: new otris.test.JUnitXMLFormatter(),        // Formatter für die Testergebnisse
      	appendStacktraceForUnitTests: true,                   // Gibt den Stacktrace in der Fehlermeldung des Testfalls aus
});

testContainer.addTest(new UnitTest(function() {
	this.assertIsTrue(false, "${value1} is not true");
}, "schreiber", "assert true is false"));

// Führt alle Tests aus
return testContainer.runAll();