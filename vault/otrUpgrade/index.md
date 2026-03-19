---
title: "Einleitung"
source: "https://otris.software/documents/api/otrUpgrade/index.html"
---

# Einleitung

Die ist das Handbuch für die Bibliothek otrUpgrade.

**WARNUNG:** Mit diese Bibliothek lassen sich DOCUMENTS-Strukturen wie
Mappentypen, Felder, Ordner usw. anlegen, verändern und löschen. Bei
der Programmierung mit dieser Bibliothek ist entsprechende Sorgfalt
walten zu lassen, da sonst der DOCUMENTS-Mandant beschädigt werden
kann. Im Extremfall ist eine Reparatur eines solchen Mandantens nicht
möglich.


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