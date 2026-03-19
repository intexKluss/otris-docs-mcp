---
title: "Mocha-Interface"
source: "https://otris.software/documents/api/otrTest/mocha.html"
---

# Mocha-Interface

[Mocha](https://mochajs.org/) ist ein weitverbreitetes JavaScript-Testframework.
Dessen Interface wurde in otrTest implementiert, so dass Tests auch entsprechend
der Mocha-Nomenklatur geschrieben werden können.

Die otrTest-Implementierung des Mocha-Interfaces hat jedoch folgende
Einschränkung:

- describe() können nicht verschachtelt werden
- it() unterstützt keine Arrow-Funktion


## Hallo-Welt-Beispiel

Wichtigsten Elemente eines Mocha-Tests sind die beiden Funktionen

- describe(): Umfasst mehrere Tests, die das gesamte Verhalten einer Funktionalität beschreiben, z. B. describe("Create contract", ...);.
- it(): Testet ein bestimmte Verhalten der Funktionalität, z. B. it("should fail, if subject is missing", ...). Hier können Prüfungen implementiert werden. Schlagen die fehl, dann müssen die eine Exception werfen. Es können aber hier die bekannten this.assert-Funktionen oder andere Expect/Assert-Funktionen verwendet werden.

Im einfachsten Fall sieht eine Testsuite wie folgt aus.


```javascript
// #import [requireShim]

// Destructing assignment, um nicht immer die Funktionen
// in den lokalen Namensraum zu holen.
const { describe, it } = require("@otrTest/otrTest");

describe("Say Hello world", () => {
	it("should not fail, as Hello is always fine", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});
	it("should also not fail, as it does nothing", function() {
		// Do nothing
	});
	it("should not fail, but does", function() {
		throw new Error("Fail!");
	});
});
```

// #import [requireShim]

// Destructing assignment, um nicht immer die Funktionen
// in den lokalen Namensraum zu holen.
const { describe, it } = require("@otrTest/otrTest");

describe("Say Hello world", () => {
	it("should not fail, as Hello is always fine", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});
	it("should also not fail, as it does nothing", function() {
		// Do nothing
	});
	it("should not fail, but does", function() {
		throw new Error("Fail!");
	});
});Die kann normal ausgeführt werden. Das Ergebnis ist:


```javascript
Say Hello world (0 Sek.)
	Erfolgreich: 2 von 3
	Fehlgeschlagen: 1 von 3

	o should not fail, as Hello is always fine (0 Sek.)
	o should also not fail, as it does nothing (0 Sek.)
	x should not fail, but does (0 Sek.)
		Error: Fail!
		Stack:
		...
```

Say Hello world (0 Sek.)
	Erfolgreich: 2 von 3
	Fehlgeschlagen: 1 von 3

	o should not fail, as Hello is always fine (0 Sek.)
	o should also not fail, as it does nothing (0 Sek.)
	x should not fail, but does (0 Sek.)
		Error: Fail!
		Stack:
		...
## De-/Initialisierung der Testsuite

`beforeAll()` kann verwendet werden, um vor der Ausführung von Tests die
notwendigen Vorbereitungen getroffen werden, wie z. B. die notwendigen
Testdaten zu erzeugen.

Analog `afterAll()`, um nach der Ausführung der Testsuite aufzuräumen.


```javascript
// #import [requireShim]

const {
	describe,
	it,
	beforeAll,
	beforeEach,
	afterAll,
	afterEach
} = require("@otrTest/otrTest");


describe("Say Hello world", () => {

	beforeAll(function() {
		util.out("Prepare to say 'Hello'");
	});

	beforeEach(function() {
		util.out("Prepare an it");
	})

	afterAll(function() {
		util.out("No cleanup, as nothing done");
	});

	afterEach(function() {
		util.out("After an it");
	});

	it("should not fail, as Hello is always fine", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});

	it("should also not fail, as it does nothing", function() {
		// Do nothing
	});
});
```

// #import [requireShim]

const {
	describe,
	it,
	beforeAll,
	beforeEach,
	afterAll,
	afterEach
} = require("@otrTest/otrTest");


describe("Say Hello world", () => {

	beforeAll(function() {
		util.out("Prepare to say 'Hello'");
	});

	beforeEach(function() {
		util.out("Prepare an it");
	})

	afterAll(function() {
		util.out("No cleanup, as nothing done");
	});

	afterEach(function() {
		util.out("After an it");
	});

	it("should not fail, as Hello is always fine", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});

	it("should also not fail, as it does nothing", function() {
		// Do nothing
	});
});Erkennbar ist das in der Ausgabe an den `preConditions` und `postCondition`:


```javascript
Say Hello world (0 Sek.)
	Erfolgreich: 3 von 3
	Fehlgeschlagen: 0 von 3

	o preConditions (0 Sek.)
	o should not fail, as Hello is always fine (0 Sek.)
	o postConditions (0 Sek.)
```

Say Hello world (0 Sek.)
	Erfolgreich: 3 von 3
	Fehlgeschlagen: 0 von 3

	o preConditions (0 Sek.)
	o should not fail, as Hello is always fine (0 Sek.)
	o postConditions (0 Sek.)Auszug aus dem Server-Log:


```javascript
preConditions: SUCCESS
Prepare an it
After an it
Delete test data of test 'should not fail, as Hello is always fine'
should not fail, as Hello is always fine: SUCCESS
Execute unit test (2 of 2): should also not fail, as it does nothing
Prepare an it
After an it
Delete test data of test 'should also not fail, as it does nothing'
should also not fail, as it does nothing: SUCCESS
Prepare an it
No cleanup, as nothing done
After an it
Delete test data of test 'postConditions'
postConditions: SUCCESS
```

preConditions: SUCCESS
Prepare an it
After an it
Delete test data of test 'should not fail, as Hello is always fine'
should not fail, as Hello is always fine: SUCCESS
Execute unit test (2 of 2): should also not fail, as it does nothing
Prepare an it
After an it
Delete test data of test 'should also not fail, as it does nothing'
should also not fail, as it does nothing: SUCCESS
Prepare an it
No cleanup, as nothing done
After an it
Delete test data of test 'postConditions'
postConditions: SUCCESS
## Testausführung steuern

Um nur einzelne Tests zu überspringen oder nur genau einen Tests auszuführen,
stehen die beiden Funktionen

- only(): Nur dieser Test wird ausgeführt; alle anderen nicht
- skip(): Dieser Test wird nicht ausgeführt; alle anderen schon

zur Verfüfung. Geschrieben werden sie "hinter" die Funktionen `it()`.


### only()


```javascript
// #import [requireShim]

const { describe, it } = require("@otrTest/otrTest");

describe("Say Hello world", () => {
	it.only("I am the only one", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});
	it("will be not executed", function() {
		// Do nothing
	});
});
```

// #import [requireShim]

const { describe, it } = require("@otrTest/otrTest");

describe("Say Hello world", () => {
	it.only("I am the only one", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});
	it("will be not executed", function() {
		// Do nothing
	});
});Ausgabe:


```javascript
Say Hello world (0,001 Sek.)
	Erfolgreich: 1 von 1
	Fehlgeschlagen: 0 von 1

	o I am the only one (0,001 Sek.)
```

Say Hello world (0,001 Sek.)
	Erfolgreich: 1 von 1
	Fehlgeschlagen: 0 von 1

	o I am the only one (0,001 Sek.)
### skip()


```javascript
// #import [requireShim]

const { describe, it } = require("@otrTest/otrTest");

describe("Say Hello world", () => {
	it.skip("I will be skipped", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});
	it("I will be executed", function() {
		// Do nothing
	});
});
```

// #import [requireShim]

const { describe, it } = require("@otrTest/otrTest");

describe("Say Hello world", () => {
	it.skip("I will be skipped", function() {
		var say = "Hello World!";
		this.assertIsExactEqual(say, "Hello World!");
	});
	it("I will be executed", function() {
		// Do nothing
	});
});Ausgabe:


```javascript
Say Hello world (0 Sek.)
	Erfolgreich: 1 von 1
	Fehlgeschlagen: 0 von 1

	o I will be executed (0 Sek.)
```

Say Hello world (0 Sek.)
	Erfolgreich: 1 von 1
	Fehlgeschlagen: 0 von 1

	o I will be executed (0 Sek.)
## Löschen der Testdaten deaktivieren

otrTest löscht automatisch nach Abschluss eines Testfalls (sowohl im Erfolgs- als auch im Fehlerfall) alle Testdaten, die z. B. per `this.addDataToDelete` an otrTest übergeben wurden. Zu Debug-Zwecken kann es hilfreich sein, das Löschen der Testdaten zu deaktivieren:


```js
it("will not delete my test data", function() {
	this.disableTestDataDeletion();

	var myFile = context.createFile("myFileType");
	this.addDocFileToDelete(myFile); // wird wegen this.disableTestDataDeletion() nicht gelöscht
});
```

it("will not delete my test data", function() {
	this.disableTestDataDeletion();

	var myFile = context.createFile("myFileType");
	this.addDocFileToDelete(myFile); // wird wegen this.disableTestDataDeletion() nicht gelöscht
});Sofern die Tests per CLI ausgeführt werden, wirft der Aufruf `this.disableTestDataDeletion()` eine Exception, um zu verhindern, dass der Aufruf versehntlich eingecheckt wird und damit die Ausführung andere Tests ggf. beeinflusst.