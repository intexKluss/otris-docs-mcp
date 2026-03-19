---
title: "Gadgetfeld mit Autocomplete-Referenz"
source: "https://otris.software/documents/howto/gadgets/autocomplete-reference.html"
---

# Gadgetfeld mit Autocomplete-Referenz


Abb. 1 - Autocomplete-Feld als Referenz

Wenn in einem Gadgetformular bei einem Feld ein **Wert** (z.B. Ansprechpartner-ID) getrennt von seinem **Anzeigewert**
(z.B. Name) gespeichert werden soll, eignet sich ein Autocompletefeld mit Referenz.

Hierzu muss in der Autocomplete-Konfiguration die Einstellung `isReference=true` übergeben werden.


```json
autocompleteConfig = {
    scriptName: "Gadget_autocompleteReference",
    isReference: true, // Referenzfeld
    ...
}
```

autocompleteConfig = {
    scriptName: "Gadget_autocompleteReference",
    isReference: true, // Referenzfeld
    ...
}Bei einem vorselektierten Eintrag muss für den Feldwert ein Objekt mit **ID** und **Label** verwendet werden.
Die vergebene ID ist dann der *Feldwert*, während das Label als *Anzeigewert* verwendet wird.


```javascript
refObject = { label: "Angus Maxgyver", id: "9347" }; // vorselektierte Auswahl
form.addAutoCompleteField("otrGadgetForm_contact", "Ansprechpartner", refObject, autocompleteConfig);
```

refObject = { label: "Angus Maxgyver", id: "9347" }; // vorselektierte Auswahl
form.addAutoCompleteField("otrGadgetForm_contact", "Ansprechpartner", refObject, autocompleteConfig);Beim Auswählen von Autocomplete-Einträgen, müssen diese dann ebenfalls eine ID und Label auf dem zugehörigen Feld setzen.


```javascript
entries = [
	{
        value: "Angus MaxGyver", // Anzeigewert im Autocomplete-Menü
        fields: [{
            name: "otrGadgetForm_contact", // Name des Gadgetfeldes
            value: {
                id: "9347", // gespeicherter Feldwert
                label: "Angus MaxGyver" // angezeigter Feldwert
            }
        }]
    },
	...
];
```

entries = [
	{
        value: "Angus MaxGyver", // Anzeigewert im Autocomplete-Menü
        fields: [{
            name: "otrGadgetForm_contact", // Name des Gadgetfeldes
            value: {
                id: "9347", // gespeicherter Feldwert
                label: "Angus MaxGyver" // angezeigter Feldwert
            }
        }]
    },
	...
];**Beispiel:**

Download: [Gadget_autocompleteReference.js](Gadget_autocompleteReference.js)


```javascript
const entries = [
	{ value: "Angus MaxGyver", fields: [{ name: "otrGadgetForm_contact", value: { id: "9347", label: "Angus MaxGyver"} }] },
	{ value: "Barnabus Wahlberg", fields: [{ name: "otrGadgetForm_contact", value: { id: "9348", label: "Barnabus Wahlberg"} }] },
	{ value: "Cornelius Sentiment", fields: [{ name: "otrGadgetForm_contact", value: { id: "9349", label: "Cornelius Sentiment"} }] },
	{ value: "Darius Hoffmann", fields: [{ name: "otrGadgetForm_contact", value: { id: "9350", label: "Darius Hoffmann"} }] }

];

// fetch autocomplete entries
if(typeof query === "string") {
	context.returnValue = JSON.stringify(query ? entries.filter(entry => entry.value.toLowerCase().includes(query.toLowerCase())) : entries);
}
else { // Gadget-Form

	const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

	// Gadget-Config: { gadgetScript: "Gadget_autocompleteReference", gadgetAction: "showForm" }
	gadgetAPI.registerGadgetAction("showForm", (gadgetContext) => {
		const form = gadgetAPI.getFormInstance();
		const autocompleteConfig = {
				scriptName: "Gadget_autocompleteReference",
				isReference: true,
				minQueryChars: 0
		};
		const refObject = { label: entries[0].value, id: entries[0].fields[0].value.id }; // preselected object
		form.addAutoCompleteField("otrGadgetForm_contact", "Ansprechpartner", refObject, autocompleteConfig);
		return form;
	});

	context.returnValue = gadgetAPI.transfer();
}
```

const entries = [
	{ value: "Angus MaxGyver", fields: [{ name: "otrGadgetForm_contact", value: { id: "9347", label: "Angus MaxGyver"} }] },
	{ value: "Barnabus Wahlberg", fields: [{ name: "otrGadgetForm_contact", value: { id: "9348", label: "Barnabus Wahlberg"} }] },
	{ value: "Cornelius Sentiment", fields: [{ name: "otrGadgetForm_contact", value: { id: "9349", label: "Cornelius Sentiment"} }] },
	{ value: "Darius Hoffmann", fields: [{ name: "otrGadgetForm_contact", value: { id: "9350", label: "Darius Hoffmann"} }] }

];

// fetch autocomplete entries
if(typeof query === "string") {
	context.returnValue = JSON.stringify(query ? entries.filter(entry => entry.value.toLowerCase().includes(query.toLowerCase())) : entries);
}
else { // Gadget-Form

	const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

	// Gadget-Config: { gadgetScript: "Gadget_autocompleteReference", gadgetAction: "showForm" }
	gadgetAPI.registerGadgetAction("showForm", (gadgetContext) => {
		const form = gadgetAPI.getFormInstance();
		const autocompleteConfig = {
				scriptName: "Gadget_autocompleteReference",
				isReference: true,
				minQueryChars: 0
		};
		const refObject = { label: entries[0].value, id: entries[0].fields[0].value.id }; // preselected object
		form.addAutoCompleteField("otrGadgetForm_contact", "Ansprechpartner", refObject, autocompleteConfig);
		return form;
	});

	context.returnValue = gadgetAPI.transfer();
}
## Benutzereingaben als Referenz

Wenn auch bei Benutzereingaben ein Löschen-Button erscheinen soll, muss in der Autocomplete-Konfiguration
`isReference="any"` gesetzt werden.


```json
autocompleteConfig = {
    scriptName: "Gadget_autocompleteReference",
    isReference: "any", // Referenzfeld mit Benutzereingabe
    ...
}
```

autocompleteConfig = {
    scriptName: "Gadget_autocompleteReference",
    isReference: "any", // Referenzfeld mit Benutzereingabe
    ...
}**Beispiel:**

Download: [Gadget_autocompleteAnyReference.js](Gadget_autocompleteAnyReference.js)


```javascript
let entries = [
	{ value: "Angus MaxGyver", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9347", label: "Angus MaxGyver"} }] },
	{ value: "Barnabus Wahlberg", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9348", label: "Barnabus Wahlberg"} }] },
	{ value: "Cornelius Sentiment", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9349", label: "Cornelius Sentiment"} }] },
	{ value: "Darius Hoffmann", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9350", label: "Darius Hoffmann"} }] }
];

// Autocomplete Einträge zurückgeben
if(typeof query === "string") {
	context.returnValue = JSON.stringify(query ? entries.filter(entry => entry.value.toLowerCase().includes(query.toLowerCase())) : entries);
}
else { // Gadget-Formular

	const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

	// Gadget-Config: { gadgetScript: "Gadget_autocompleteAnyReference", gadgetAction: "showForm" }
	gadgetAPI.registerGadgetAction("showForm", (gadgetContext) => {
		const form = gadgetAPI.getFormInstance();
		const autocompleteConfig = {
				scriptName: "Gadget_autocompleteAnyReference",
				isReference: "any", // Referenzfeld mit Benutzereingabe
				minQueryChars: 0
		};
		const refObject = { label: "Angus MaxGyver", id: "9347" }; // Vorselektierte Auswahl
		form.addAutoCompleteField("otrGadgetForm_contact_any", "Ansprechpartner", refObject, autocompleteConfig);
		return form;
	});

	context.returnValue = gadgetAPI.transfer();
}
```

let entries = [
	{ value: "Angus MaxGyver", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9347", label: "Angus MaxGyver"} }] },
	{ value: "Barnabus Wahlberg", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9348", label: "Barnabus Wahlberg"} }] },
	{ value: "Cornelius Sentiment", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9349", label: "Cornelius Sentiment"} }] },
	{ value: "Darius Hoffmann", fields: [{ name: "otrGadgetForm_contact_any", value: { id: "9350", label: "Darius Hoffmann"} }] }
];

// Autocomplete Einträge zurückgeben
if(typeof query === "string") {
	context.returnValue = JSON.stringify(query ? entries.filter(entry => entry.value.toLowerCase().includes(query.toLowerCase())) : entries);
}
else { // Gadget-Formular

	const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

	// Gadget-Config: { gadgetScript: "Gadget_autocompleteAnyReference", gadgetAction: "showForm" }
	gadgetAPI.registerGadgetAction("showForm", (gadgetContext) => {
		const form = gadgetAPI.getFormInstance();
		const autocompleteConfig = {
				scriptName: "Gadget_autocompleteAnyReference",
				isReference: "any", // Referenzfeld mit Benutzereingabe
				minQueryChars: 0
		};
		const refObject = { label: "Angus MaxGyver", id: "9347" }; // Vorselektierte Auswahl
		form.addAutoCompleteField("otrGadgetForm_contact_any", "Ansprechpartner", refObject, autocompleteConfig);
		return form;
	});

	context.returnValue = gadgetAPI.transfer();
}