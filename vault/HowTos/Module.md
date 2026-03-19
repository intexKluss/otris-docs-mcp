---
title: "Module"
source: "https://otris.software/documents/howto/scripting/modules.html"
---

# Module


## Einleitung

In DOCUMENTS 5 konnten scripte als Module entweder per `#import` oder
per `require()` eingebunden werden. In documentsOS werden zusätzlich
die nativen Modul- und Importmechanismen unterstützt. Das Howto
erläutert, wie diese verwendet werden können und erläutert technische
Hintergründe.

- Getting started
- Besonderheiten
- Konfiguration
- Modul-Script
- Statischer Script-Import
- Dynamischer Script-Import


## Getting started

Die einfachste Art, ein Modul-Script zu entwickeln, ist die jeweiligen
Konstrukte zu schreiben und per `export` für den Export zu markieren:


```js
export function doSomething() {
    return "I did something";
}

export class TheClass {
    constructor(name) {
        this.name = name;
    }
}
```

export function doSomething() {
    return "I did something";
}

export class TheClass {
    constructor(name) {
        this.name = name;
    }
}Zudem ist für dieses Script der Script-Modus `Module` zu aktivieren:


Abb. 1 - Script-Modus 'Module'

Das Script in kann in anderen Scripten importiert werden, wobei der
native Import-Mechanismus hier ebenfalls aktiviert werden muss.


```js
import { doSomething, TheClass} from "import-script";

const o = new TheClass("O");
context.returnValue = doSomething() + " / Name: " + o.name;

// Return-Type: string
// Return-Value: I did something / Name: O
```

import { doSomething, TheClass} from "import-script";

const o = new TheClass("O");
context.returnValue = doSomething() + " / Name: " + o.name;

// Return-Type: string
// Return-Value: I did something / Name: O
## Besonderheiten

Für Scripte, die die nativen Importmechanismen verwenden, gelten
folgende Besonderheiten:

- Die standardkonformen import- und export-Anweisungen sind verfügbar.
- Die veralteten #import Direktiven existieren nicht mehr.
- require() lädt keine ECMA-Modul-Script, sondern nur herkömmliche Module ohne #import.
- Modul-Script dürfen außerhalb von Funktionen keine return-Anweisung enthalten. Rückgabewerte an DOCUMENTS müssen deshalb in context.returnValue geschrieben werden.
- Modul-Script laufen immer im 'strict mode'.


## Konfiguration


### Globale Konfiguration

Soll das für den kompletten Server generell genutzt werden, so sind
in der Server-Konfiguration die folgenden beiden Einstellungen zu
setzen:


```javascript
JSCompatImport false
JSCompatReturn false
```

JSCompatImport false
JSCompatReturn falseDadurch werden die Kompatibilitätsmodi deaktiviert, und für die native
Importmechanismen in allen Script per Default verfügbar.


### Pro-Script-Konfiguration

Soll pro Script konfiguriert werden, so gibt es zwei Möglichkeiten

- Einstellen des Script-Modus Module am Script im Manager.
Abb. 1 - Script-Modus 'Module'
- Script mit Dateierweiterung .mjs werden beim Hochladen durch die die VS Code Extension automatisch auf den Script-Modus Module gesetzt. .js-Dateien auf Classic.


## Modul-Script

Um Sprachelemente zu exportieren, können diese im Script mit dem
`export`-Schlüsselwort markiert werden


```js
export const CONSTANT = 1;

export let languages = ["de", "en"];

export function doSomething() {
    return "I did something";
}

export class TheClass {
    constructor(name) {
        this.name = name;
    }
}
```

export const CONSTANT = 1;

export let languages = ["de", "en"];

export function doSomething() {
    return "I did something";
}

export class TheClass {
    constructor(name) {
        this.name = name;
    }
}oder am Ende des Scripts in einem `export`-Block aufgelistet werden:


```js
const CONSTANT = 1;

let languages = ["de", "en"];

function doSomething() {
    return "I did something";
}

class TheClass {
    constructor(name) {
        this.name = name;
    }
}

export {
    CONSTANT,
    languages,
    doSomething,
    TheClass
};
```

const CONSTANT = 1;

let languages = ["de", "en"];

function doSomething() {
    return "I did something";
}

class TheClass {
    constructor(name) {
        this.name = name;
    }
}

export {
    CONSTANT,
    languages,
    doSomething,
    TheClass
};
## Scripte importieren


### Statischer Import

Statische Importe werden bei der Kompilierung des Scriptes ausgeführt.
Zudem müssen statische Importe auf der obersten Ebene des Scripts
definiert werden.


```js
import { doSomething } from "import-script";
util.out(doSomething());
```

import { doSomething } from "import-script";
util.out(doSomething());
### Dynamischer Import


#### Dynamischen Import per require

Ein dynamischer Import ist ebenso möglich. Zum einen über die bereits
verfügbare Funktion `require()`:

- Die Aktivierung per context.enableModules() kann entfallen. Die ist nicht mehr notwendig.
- require() und damit verbundene Alt-Scripte könnten daher mit Scripten verwendet werden, die im neuen ECMA-Modul-Modus laufen.

Zudem gibt es die Möglichkeit Scripte per `import()` einzubinden. Die
weist aber die Besonderheit auf, dass die Ausführung des Imports
asynchron erfolgt, d.h., sie gibt ein Promise zurück, welches entweder
durch passende Callback-Funktionen oder durch ein `await` aufgelöst
werden muss.


#### Dynamischen Import per import


##### Dynamischen Import per await auflösen


```js
const m = await import("import-script");
util.out(m.doSomething());
util.out("The script has ended");
```

const m = await import("import-script");
util.out(m.doSomething());
util.out("The script has ended");Die Log-Ausgabe sieht wie folgt aus:


```javascript
The script has ended
I did something
```

The script has ended
I did something`await` aber nur in Modulen auf oberste Ebene verwendet werden.
Ansonsten nur in asynchronen Funktionen. Siehe hierzu auch
[Top-level await](https://v8.dev/features/top-level-await).

Mit asynchronen Funktionen sähe ein Aufruf wie folgt aus:


```js
async function fun() {
    const m = await import("import-script");
    util.out(m.doSomething());
}
await fun(); // Resolve promise of async function
util.out("The script has ended");
```

async function fun() {
    const m = await import("import-script");
    util.out(m.doSomething());
}
await fun(); // Resolve promise of async function
util.out("The script has ended");
##### Dynamischen Import selbst auflösen


```js
import("import-script").then((module) => {
    util.out(module.doSomething());
}).catch((reason) => {
    if (reason.cause) {
      util.out("Had previously handled error");
    } else {
      util.out(`Trouble with importing module: ${reason}`);
    }
}).finally((info) => {
    util.out("All done");
})
util.out("The script has ended");
```

import("import-script").then((module) => {
    util.out(module.doSomething());
}).catch((reason) => {
    if (reason.cause) {
      util.out("Had previously handled error");
    } else {
      util.out(`Trouble with importing module: ${reason}`);
    }
}).finally((info) => {
    util.out("All done");
})
util.out("The script has ended");*Achtung*: Das Promise wird nicht sofort ausgeführt, sondern vom
Server serialisiert. D. h., erst nach Beendigung des Scripts, wird
der Code der Promise ausgeführt. Die Ausgabe im Server-Log würde
daher in dem Beispiel wie folgt aussehen:


```javascript
The script has ended
I did something
All done
```

The script has ended
I did something
All doneSiehe hierzu auch [Module execution order](https://v8.dev/features/top-level-await#module-execution-order).