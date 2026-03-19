---
title: "@otr-documents/otrassert"
source: "https://otris.software/documents/api/otrAssert/api/index.html"
---

# @otr-documents/otrassert


# otrAssert

Modul für die Definition von Zusicherungen (assert) in Portalskripten.


```js
context.enableModules();
var otrAssert = require("otrAssert");
var a = 1;

// Throws, if a <= 0
otrAssert.assert(a > 0, "sampleOtrAssert", "a is not greater than zero!");

// Throws, if DocFile.sync() failed for DocFile f
otrAssert.assertSync(f, "sampleOtrAssert");
```


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

In der Regel spielt Groß-Klein-Schreibung in Documents keine Rolle. Wenn
doch, kann mit der Pfadangabe die Datei direkt referenziert werden:


```js
const otrAssert = require("otrassert/core.cat/otrAssert");
```