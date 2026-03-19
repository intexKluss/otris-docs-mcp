---
title: "Chai.JS"
source: "https://otris.software/documents/api/otrTest/chai.html"
---

# Chai.JS

[Chai.JS](https://www.chaijs.com) ist eine Bibliothek, mit der in
Tests Prüfungen implementiert werden können. Diese steht neben den
nativ von otrTest bereitgestellten Prüffunktionen zur Verfügung.

- expect/should für Behavior-Driven Development
- assert für Test-Driven Development

Im Ergebnis verhalten sich beide Funktionen gleich, unterscheiden
sich aber in der Formulierung der Prüfbedingung.

Für Details siehe die [API-Dokumentation von Chai.JS](https://www.chaijs.com/api).


## Behavior-Driven Development


```js
context.enableModules();
const { expect, should } = require("chai");

const a = 1;
expect(a).to.be.equal(1);

function f() {
	return 1;
}
should().not.throw(f);
```

context.enableModules();
const { expect, should } = require("chai");

const a = 1;
expect(a).to.be.equal(1);

function f() {
	return 1;
}
should().not.throw(f);
## Test-Driven Development


```js
context.enableModules();
const { assert } = require("chai");

const a = 1;
assert.equal(a, 1);

function f() {
	return 1;
}
assert.doesNotThrow(f);
```

context.enableModules();
const { assert } = require("chai");

const a = 1;
assert.equal(a, 1);

function f() {
	return 1;
}
assert.doesNotThrow(f);