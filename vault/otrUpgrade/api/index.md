---
title: "@otr-documents/otrupgrade"
source: "https://otris.software/documents/api/otrUpgrade/api/index.html"
---

# @otr-documents/otrupgrade


# otrUpgrade

Bibliothek mit Funktionen zum Implementierung von Upgrade-Scripts für Lösungen.


## Beispiele


```js
context.enableModules();
const otrUpgrade = require("otrUpgrade");

//
// Mappentyp anlegen
//

otrUpgrade.attachFileType({
	attributes: {
		Title: "crmAccount",
		Released: true,
		AutoTitle: "[PARTNER] %crmCompany%",
		MultiLangLabel: "de:Vertragspartner;en:Contractual partner;nl:Contractuele partner;"
	}
});

//
// Feld hinzufügen
//

const fileType = otrUpgrade.getFileType("crmAccount");
otrUpgrade.attachFieldToFileType({
	Name: "crmProfit",
	Label: "de:Gewinnbetrag;en:Profit",
	Type: otrUpgrade.FieldDataType.F_NUMERIC,
	SameLine: false,
	Value: 0
}, fileType);
```


## Typings

Typings stehen zur Verfügung und können als dev-Abhängigkeit wie folgt
installiert werden:


```sh
npm install @types/otrupgrade --save-dev
```

Bei der Verwendung muss der Modulname in Kleinbuchstaben geschrieben werden.


```js
const otrUpgrade = require("otrupgrade");
```

In der Regel spielt Groß-Klein-Schreibung in Documents keine Rolle. Wenn
doch, kann mit der Pfadangabe die Datei direkt referenziert werden:


```js
const otrUpgrade = require("otrupgrade/core.cat/otrUpgrade");
```