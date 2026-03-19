---
title: "Feldvorschläge erzeugen"
source: "https://otris.software/documents/manuals/books/otr-ai/suggestions-api.html"
---

# Feldvorschläge erzeugen

Wie im Kapitel ["Feldvorschläge"](suggestions.html) beschrieben, sind Feldvorschläge eine besondere Darstellungsform möglicher Feldwerte. Sie werden typischerweise beim Ausfüllen von Mappeninhalten durch eine KI gesetzt, können aber auch über das Skripting erzeugt werden. Dadurch ist es möglich, Feldvorschläge auch außerhalb der KI-Verarbeitung zu nutzen.


## Speicherverhalten von Feldvorschlägen

Für Feldvorschläge existieren zwei verschiedene **Speichermöglichkeiten**:

|  | Feldvorschlag per Copilot | Feldvorschlag per Skripting |
| --- | --- | --- |
| Speicherung als Benutzereigenschaft | ☑ | ☑ |
| Speicherung als globale Eigenschaft |  | ☑ |

Feldvorschläge, die mit dem Copilot erstellt werden, werden immer **benutzerspezifisch** gespeichert.
Dadurch kann jeder Benutzer eigene Vorschläge haben. Feldvorschläge, die per Skripting erstellt werden, können **entweder benutzerspezifisch oder global** gespeichert werden.


### Anzeigeverhalten

Globale Vorschläge (nur per Skripting möglich) werden **allen Benutzern angezeigt**.
Existieren gleichzeitig benutzerspezifische Vorschläge, werden **diese vorrangig angezeigt**.
Erst wenn keine benutzerspezifischen Vorschläge vorhanden sind, werden die globalen Vorschläge verwendet.


### Speicherverhalten

Beim Speichern von Feldwerten (z. B. mit der Mappenaktion *Alle verbleibenden Vorschläge übernehmen*
oder der Feldaktion *Annehmen*) wird **immer der zuletzt gespeicherte Wert** übernommen,
also der Wert des Benutzers, der zuletzt gespeichert hat.


## Einfaches Beispiel

Die folgenden Minimalbeispiele zeigen, wie Feldvorschläge als benutzerdefinierte oder globale Eigenschaften erstellt oder aktualisiert werden können.


### Speicherung als Benutzereigenschaft


```javascript
// Mappe holen
const file = context.file;

// Benutzerrepository importieren
const userRepository = require("otrSuggestionRepository").userRepository;

// Mappe im Repository suchen und vorhandene Vorschläge löschen
const entry = userRepository.findEntryByFileId(file.getid());
entry && entry.delete();

// Neuen Vorschlag erzeugen
userRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: {
        aiReceiptSubject: "Beispiel-Feldvorschlag für den Betreff",
        aiReceiptSummary: "Beispiel-Feldvorschlag für den Zusammenfassung"
    }
});
```

// Mappe holen
const file = context.file;

// Benutzerrepository importieren
const userRepository = require("otrSuggestionRepository").userRepository;

// Mappe im Repository suchen und vorhandene Vorschläge löschen
const entry = userRepository.findEntryByFileId(file.getid());
entry && entry.delete();

// Neuen Vorschlag erzeugen
userRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: {
        aiReceiptSubject: "Beispiel-Feldvorschlag für den Betreff",
        aiReceiptSummary: "Beispiel-Feldvorschlag für den Zusammenfassung"
    }
});

### Speicherung als globale Eigenschaft


```javascript
// Mappe holen
const file = context.file;

// Globales Repository importieren
const globalRepository = require("otrSuggestionRepository").globalRepository;

// Mappe im Repository suchen und vorhandene Vorschläge löschen
const oldEntry = globalRepository.findEntryByFileId(file.getid());
oldEntry && oldEntry.delete();

// Neuen Vorschlag erzeugen
globalRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: {
        aiReceiptSubject: "Beispiel-Feldvorschlag für den Betreff",
        aiReceiptSummary: "Beispiel-Feldvorschlag für den Zusammenfassung"
    }
});

// Bestehenden Vorschlag aktualisieren
const newEntry = globalRepository.findEntryByFileId(file.getid());
newEntry.updateData({ aiReceiptSubject: "Aktualisierter Feldvorschlag für den Betreff" });
```

// Mappe holen
const file = context.file;

// Globales Repository importieren
const globalRepository = require("otrSuggestionRepository").globalRepository;

// Mappe im Repository suchen und vorhandene Vorschläge löschen
const oldEntry = globalRepository.findEntryByFileId(file.getid());
oldEntry && oldEntry.delete();

// Neuen Vorschlag erzeugen
globalRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: {
        aiReceiptSubject: "Beispiel-Feldvorschlag für den Betreff",
        aiReceiptSummary: "Beispiel-Feldvorschlag für den Zusammenfassung"
    }
});

// Bestehenden Vorschlag aktualisieren
const newEntry = globalRepository.findEntryByFileId(file.getid());
newEntry.updateData({ aiReceiptSubject: "Aktualisierter Feldvorschlag für den Betreff" });

### Referenzfelder setzen

Auch für Referenzfelder können Feldvorschläge erzeugt werden.
Dazu muss ein Objekt mit der ID der referenzierten Mappe sowie optional ein Label übergeben werden.


```javascript
userRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: {
        aiSomeReference: { fileId: "[EXAMPLE_ID]", label: "example_label" }
    }
});
```

userRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: {
        aiSomeReference: { fileId: "[EXAMPLE_ID]", label: "example_label" }
    }
});

## Beispiel mit Verwendung des AI Toolkits

Dieses Beispiel zeigt, wie das **AI Toolkit** den Text einer Mappe analysiert und daraus strukturierte Feldvorschläge erzeugt. Dabei wird zunächst ein JSON-Schema passend zum Mappentyp generiert (siehe [Objekt- und Schemaerzeugung](schema-methods.html)) und mit dem Prompt dem AI Toolkit übermittelt.
Die ermittelten Werte werden anschließend als Feldvorschläge für die vorliegende Mappe angelegt.
Der dargestellte Ablauf veranschaulicht die Möglichkeit der Erstellung von Feldvorschlägen mittels Skripting unter Verwendung des AI Toolkits. Dieser Prozess ähnelt dem Vorgehen des Copiloten.


```javascript
// Lade AI Toolkit
const AIToolkit = require("aiToolkit").AIToolkit;

// Extrahiere den Text des ersten Dokuments aus der vorliegenden Mappe
const file = context.file;
let docText = "";
const reg = file.getRegisters("documents").first();
const document = reg.getDocuments().first();
docText = document.extractText();

// Erstelle Prompt
let prompt = file.getAutoText( `Du bist ein gewissenhafter Daten-Analyst in einem erstklassigen Unternehmen.
    Du untersuchst ein Dokument mit dem vom Typ '%fileType%'. Heute ist der %currentDate%.
    Deine Aufgabe ist es, die im unten vorgegebenen JSON-Schema Eigenschaften aus dem in 'triple quotes' vorgegebenen Text zu extrahieren.
    Wenn Du eine Information nicht findest oder Du Dir nicht sicher bist, dann lasse die Eigenschaft aus oder leer('')`);

// Füge Text hinzu
prompt +=
`
Text:
"""
${docText}
"""
`;

// Erstelle JSON-Schema
const fileType = file.getAutoText("fileType");
const schema = AIToolkit.createJSONSchemaForFileType(fileType);

// Generiere auf Grundlage des Schemas ein Objekt
const ai = new AIToolkit();
const resultObject = ai.generateObject(prompt, schema);

// Erstelle Feldvorschläge
const fieldData = AIToolkit.createFileDataFromJSON(fileType, resultObject, { filterReadonly: true });

// Mappe im Repository suchen und vorhandene Vorschläge löschen
const userRepository = require("otrSuggestionRepository").userRepository;
const entry = userRepository.findEntryByFileId(file.getid());
entry && entry.delete();

// Neue Vorschläge erzeugen
userRepository.addEntry({ fileId: file.getid(), title: file.getid(), fileType: fileType, data: fieldData });
```

// Lade AI Toolkit
const AIToolkit = require("aiToolkit").AIToolkit;

// Extrahiere den Text des ersten Dokuments aus der vorliegenden Mappe
const file = context.file;
let docText = "";
const reg = file.getRegisters("documents").first();
const document = reg.getDocuments().first();
docText = document.extractText();

// Erstelle Prompt
let prompt = file.getAutoText( `Du bist ein gewissenhafter Daten-Analyst in einem erstklassigen Unternehmen.
    Du untersuchst ein Dokument mit dem vom Typ '%fileType%'. Heute ist der %currentDate%.
    Deine Aufgabe ist es, die im unten vorgegebenen JSON-Schema Eigenschaften aus dem in 'triple quotes' vorgegebenen Text zu extrahieren.
    Wenn Du eine Information nicht findest oder Du Dir nicht sicher bist, dann lasse die Eigenschaft aus oder leer('')`);

// Füge Text hinzu
prompt +=
`
Text:
"""
${docText}
"""
`;

// Erstelle JSON-Schema
const fileType = file.getAutoText("fileType");
const schema = AIToolkit.createJSONSchemaForFileType(fileType);

// Generiere auf Grundlage des Schemas ein Objekt
const ai = new AIToolkit();
const resultObject = ai.generateObject(prompt, schema);

// Erstelle Feldvorschläge
const fieldData = AIToolkit.createFileDataFromJSON(fileType, resultObject, { filterReadonly: true });

// Mappe im Repository suchen und vorhandene Vorschläge löschen
const userRepository = require("otrSuggestionRepository").userRepository;
const entry = userRepository.findEntryByFileId(file.getid());
entry && entry.delete();

// Neue Vorschläge erzeugen
userRepository.addEntry({ fileId: file.getid(), title: file.getid(), fileType: fileType, data: fieldData });

## Beispiel mit Verwendung von Vorschlägen mit Regulären Ausdrücken

Mit **Regulären Ausdrücken** können besonders gut Informationen extrahiert werden, die einem klaren Format folgen und keinen semantischen Kontext erfordern. Sie können lokal ausgeführt werden und sind daher besonders hilfreich, wenn sensible Daten nicht an externe KI-Dienste übertragen werden sollen. Dadurch lassen sich z. B. Rechnungsnummern oder Beträge zuverlässig erkennen und als Vorschläge hinterlegen.

Im Folgenden wird mit einem Regulären Ausdruck nach einer Kundennummer gesucht, und ein Feldvorschlag wird global hinterlegt. Dieser könnte dann von der ersten Person geprüft werden, die die initiale Bearbeitung der Mappe vornimmt.


```javascript
// Mappe holen
const file = context.file;

// Globales Repository importieren
const globalRepository = require("otrSuggestionRepository").globalRepository;

// OCR aus z.B. einer Rechnung holen
const docs = file.getRegisterByName("Documents");
const doc = docs.getDocumentByName("invoice.pdf");
const ocrText = doc.doOCR("pdf", "txt");

// Kundennummer per Regex extrahieren
// Beispiele: "Kundennr: 12345", "Kunden-Nr. 99-AB7", "Customer ID: XZ-554"
const regex = /(?:Kunden\-?Nr\.?|Customer ID)\s*[:\-]?\s*([A-Z0-9\-]+)/i;
const customerNumberMatch = ocrText.match(regex);

// Vorschlagsdaten vorbereiten
const data = {};

if(customerNumberMatch) {
    data.aiCustomerNumber = customerNumberMatch[1];
}

// Neuen Vorschlag erzeugen
globalRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: data
});
```

// Mappe holen
const file = context.file;

// Globales Repository importieren
const globalRepository = require("otrSuggestionRepository").globalRepository;

// OCR aus z.B. einer Rechnung holen
const docs = file.getRegisterByName("Documents");
const doc = docs.getDocumentByName("invoice.pdf");
const ocrText = doc.doOCR("pdf", "txt");

// Kundennummer per Regex extrahieren
// Beispiele: "Kundennr: 12345", "Kunden-Nr. 99-AB7", "Customer ID: XZ-554"
const regex = /(?:Kunden\-?Nr\.?|Customer ID)\s*[:\-]?\s*([A-Z0-9\-]+)/i;
const customerNumberMatch = ocrText.match(regex);

// Vorschlagsdaten vorbereiten
const data = {};

if(customerNumberMatch) {
    data.aiCustomerNumber = customerNumberMatch[1];
}

// Neuen Vorschlag erzeugen
globalRepository.addEntry({
    fileId: file.getid(),
    title: file.getid(),
    fileType: file.getAutoText("fileType"),
    data: data
});