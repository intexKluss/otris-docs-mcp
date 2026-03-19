---
title: "QuickCheck-Tests"
source: "https://otris.software/documents/api/otrTest/quickcheck.html"
---

# QuickCheck-Tests

Was genau QuickCheck-Tests sind, könnt ihr [hier](https://en.wikipedia.org/wiki/QuickCheck) nachlesen.
Das Testframework hat die Bibliothek [jsverify](https://github.com/jsverify/jsverify) eingebunden. Die Typings für VS Code wurden entsprechend erweitert und eingebunden, sodass die volle Code-Completion zur Verfügung steht.

Um einen QuickCheck-Test anzulegen, geht man wie folgt vor:


```javascript
// #import [requireShim]
const QuickCheckTest = require("@otrTest/test.otrQuickCheckTest");
const TestOutput = require("@otrTest/test.otrUnitTestOutput");

var otrTest = require("@otrTest/otrTest");
var testContainer = otrTest.getUnitTestContainer({
    name: "QuickCheckExample",                  // Name der Testsuite
    logPerf: true,                                // Loggt die Ausführungszeit der Tests
    formatter: new TestOutput.JUnitXMLFormatter() // Optional. Formatter für die Testergebnisse
 });

testContainer.addTest(new QuickCheckTest(function(jsc) {
	// Stellt sicher, dass die Wurzel einer zufällig quadrierten Zahl
	// der Ausgangszahl entspricht.
	var quickCheckFunction = this.bind(function(randomNumber) {
		return Math.sqrt(Math.pow(randomNumber, 2)) === randomNumber;
	});

	// Führt den Test 100! mal aus, mit zufällig generierten Eingabeparametern
	jsc.assertForall(jsc.nat, quickCheckFunction);
}, "<Benutzer-Login>", "<Name des Tests>"));
```

// #import [requireShim]
const QuickCheckTest = require("@otrTest/test.otrQuickCheckTest");
const TestOutput = require("@otrTest/test.otrUnitTestOutput");

var otrTest = require("@otrTest/otrTest");
var testContainer = otrTest.getUnitTestContainer({
    name: "QuickCheckExample",                  // Name der Testsuite
    logPerf: true,                                // Loggt die Ausführungszeit der Tests
    formatter: new TestOutput.JUnitXMLFormatter() // Optional. Formatter für die Testergebnisse
 });

testContainer.addTest(new QuickCheckTest(function(jsc) {
	// Stellt sicher, dass die Wurzel einer zufällig quadrierten Zahl
	// der Ausgangszahl entspricht.
	var quickCheckFunction = this.bind(function(randomNumber) {
		return Math.sqrt(Math.pow(randomNumber, 2)) === randomNumber;
	});

	// Führt den Test 100! mal aus, mit zufällig generierten Eingabeparametern
	jsc.assertForall(jsc.nat, quickCheckFunction);
}, "<Benutzer-Login>", "<Name des Tests>"));Der Unterschied zum Erzeugen eines UnitTests ist der Klassenname (`UnitTest` vs. `QuickCheckTest`). Viel wichtiger ist, dass der auszuführenden Funktion (der 1. Parameter des Klassen-Konstruktors) ein Parameter übergeben wird, über den die Funktionen der [jsverify](https://github.com/jsverify/jsverify)-Bibliothek verwendet werden können.