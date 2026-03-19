---
title: "Einleitung"
source: "https://otris.software/documents/api/otrAssert/index.html"
---

# Einleitung

Modul für die Definition von Zusicherungen (assert) in Portalskripten und Wrapper für die PortalScript-API, so
dass die Funktionen Exceptions werfen.

Das Modul kann sowohl per `#import` als auch per `require()` eingebunden werden.
Letzteres wird empfohlen.


## Beispiel


```javascript
context.enableModules(undefined, 3);
const otrAssert = require("otrAssert");
try {
	var throwingFile = otrAssert.getThrowingObject(context.file, [
		"abort",
		"sync"
	]);

	throwingFile.lcmSubject = "ACME";
	throwingFile.sync(); // throws exception, if sync() fails

	if (throwingFile.startEdit()) {
		throwingFile.abort(); // throws exception, if abort() fails
	} else {
		// no throw in case of error, as not specified in the wrapping
		// list
		util.out("startEdit() failed!")
	}
} catch (e) {
	util.out("Error: " + e);
}
```

context.enableModules(undefined, 3);
const otrAssert = require("otrAssert");
try {
	var throwingFile = otrAssert.getThrowingObject(context.file, [
		"abort",
		"sync"
	]);

	throwingFile.lcmSubject = "ACME";
	throwingFile.sync(); // throws exception, if sync() fails

	if (throwingFile.startEdit()) {
		throwingFile.abort(); // throws exception, if abort() fails
	} else {
		// no throw in case of error, as not specified in the wrapping
		// list
		util.out("startEdit() failed!")
	}
} catch (e) {
	util.out("Error: " + e);
}
## Typings

Typings stehen zur Verfügung und können als dev-Abhängigkeit wie folgt
installiert werden:


```sh
npm install @types/otrassert --save-dev
```

Bei der Verwendung muss der Modulname in Kleinbuchstaben geschrieben werden.


```js
const otrAssert = require("otrassert");
```

const otrAssert = require("otrassert");In der Regel spielt Groß-Klein-Schreibung in Documents keine Rolle. Wenn
doch, kann mit der Pfadangabe die Datei direkt referenziert werden:


```js
const otrAssert = require("otrassert/core.cat/otrAssert");
```

const otrAssert = require("otrassert/core.cat/otrAssert");Analog können die Typings auch in TypeScript verwendet werden:


```ts
import * as otrAssert from "otrassert";
import * as otrAssert from "otrassert/core.cat/otrAssert";
```