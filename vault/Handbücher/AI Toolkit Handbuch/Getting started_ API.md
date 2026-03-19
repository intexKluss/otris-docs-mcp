---
title: "Getting started: API"
source: "https://otris.software/documents/manuals/books/otr-ai/getting-started-api.html"
---

# Getting started: API

Nachfolgend wird erläutert, wie man nach der Aktivierung der Erweiterung *AI Toolkit* und der Beachtung der Voraussetzungen (siehe [Voraussetzungen und Aktivierung](requirements.html)) diese nutzen kann. Die Erweiterung ermöglicht es, mit AI-Services Antworten zu generieren, die optional durch Kontexte und Prompts beeinflusst werden können. Für weitere Informationen zur AI Toolkit API nutzen Sie bitte die entsprechenden Kapitel des Handbuchs, sowie die [[Client SDK/index|API-Dokumentation]].


## Nutzung des AI Toolkits im Skripting

Im Folgenden werden die einzelnen Funktionen des AI-Toolkits vorgestellt.
Die Übersicht soll dabei helfen die jeweiligen Anwendungsbereiche der Funktionen klar abzugrenzen.
In der Tabelle sind sämtliche Funktionen aufgeführt, jeweils mit Verweis auf die zugehörige Dokumentation.

| Generative Funktionen |  |  |
| --- | --- | --- |
| generateText() | Generiert Text basierend auf einem Prompt | Beispiel |
| generateObject() | Generiert ein JavaScript-Objekt basierend auf einem Prompt und einem Schema | Beispiel |
| generateEmbeddings() | Generiert Embeddings zu einem übergebenen Text | Beispiel |
|  |  |  |
| Verarbeitung von Bildern und Audio |  |  |
| processImage() | Verarbeitet ein Bild für den mehrfachen KI-Einsatz | Beispiel |
| cleanupImage() | Bereinigt von temporären Dateien und Daten der Bildverarbeitung | Beispiel |
| transcribe() | Transkribiert eine Audiodatei in Text | Beispiel |
|  |  |  |
| Vektorbasierte Operationen (Wissenssammlungen) |  | Doku Erstellung, Doku Verwendung |
| otrAIVectorIndex | Zugriff auf den Haupt-Vektorindex |  |
| ensureCollection() | Erstellt eine neue Wissenssammlung (falls nicht vorhanden) | Beispiel |
| deleteCollection() | Löscht eine Wissenssammlung |  |
| findInIndex() | Sucht gezielt in einer Wissenssammlung nach Vektoren anhand ihrer Keys | Beispiel |
| queryIndex() | Führt eine semantische Suche in der Wissenssammlung durch | Beispiel |
| indexText() | Fügt einen Text einer Wissenssammlung hinzu | Beispiel |
| deindexFile() | Entfernt eine indexierte Datei aus einer Wissenssammlung |  |
| indexDocument() | Fügt ein Dokument einer Wissenssammlung hinzu | Beispiel |
| deindexDocument() | Entfernt ein indexiertes Dokument aus einer Wissenssammlung |  |
| chunkText() | Wendet einen Chunker auf einen übergebenen Text an, um einen Text in kleinere Abschnitte zu zerteilen |  |
|  |  |  |
| Service-spezifische Hilfsfunktionen |  |  |
| getImplInfo() | Gibt Informationen zur ausgewählten Implementierung zurück (Bezeichnungen, Funktionsumfang) |  |
| listServices() | Listet alle Service-Instanzen des jeweiligen Dienstes auf |  |
|  |  |  |
| Globale Hilfsfunktionen |  |  |
| listAllServices() | Listet alle Service-Instanzen aller Dienste auf |  |
| getKnowledgeByKey() | Gibt gespeichertes Wissen anhand eines Schlüssels zurück |  |
| getPromptByKey() | Gibt einen gespeicherten Prompt anhand eines Schlüssels zurück |  |
| createJSONFromFile() | Konvertiert eine DocFile-Datei in JSON gemäß Vorlage | Beispiel |
| createFileDataFromJSON() | Erstellt eine DocFile-Datei aus JSON-Daten gemäß Vorlage | Beispiel |
| createJSONSchemaForFileType() | Erstellt ein JSON-Schema für den angegebenen Dateityp | Beispiel |


## Funktionen im Detail


### Generative Funktionen


#### generateText()

Die Funktion `generateText()` eignet sich für alle Anwendungsfälle,
in denen aus einem Eingabetext als Output ebenfalls ein Text/String erzeugt werden soll,
z. B. für automatische Antwortgenerierung, Inhaltsvorschläge, Textzusammenfassungen oder personalisierte Nachrichten.


```javascript
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

const response = ai.generateText("Beschreibe kurz was ein Hello World Beispiel ist.");

util.out("hello_world_example, Antwort: " + response);
```

const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

const response = ai.generateText("Beschreibe kurz was ein Hello World Beispiel ist.");

util.out("hello_world_example, Antwort: " + response);
#### generateObject()

Die Funktion `generateObject()` eignet sich für alle Anwendungsfälle,
bei denen aus einer Texteingabe ein strukturiertes Objekt erzeugt werden soll –
insbesondere dann, wenn das Ergebnis in nachgelagerten Funktionen weiterverarbeitet werden muss und eine präzise Struktur erforderlich ist.

Die Qualität und Weiterverwendbarkeit des erzeugten Objekts lässt sich gezielt verbessern,
indem der Prompt mit passenden Kontextinformationen angereichert wird,
z. B. Uhrzeit, Sprache, Formatvorgaben oder durch sogenannte Rollenanweisungen („Handle als …“).

Typische Einsatzszenarien sind etwa die Extraktion strukturierter Daten aus unstrukturierten Texten,
z. B. aus Bewerbungsunterlagen, Formularen oder E-Mails – zur Übergabe an APIs, zur Speicherung oder zur Weiterverarbeitung in Anwendungen.
Das AI Toolkit kann hierfür z. B. eingesetzt werden im [IT-Support für Workflowentscheidungen](generate-object.html#workflowentscheidung-im-it-support),
im [Bewerbungsprozess zur Datenextraktion](generate-object.html#datenextraktion-aus-bewerbungsunterlagen) oder
als [Daten-Analyst](generate-object.html#copilot-als-daten-analyst-erstellen-von-feldvorschl%C3%A4gen) zur Erstellung von Feldvorschlägen in Dokumentensystemen.


```javascript
const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit();

const schema = {
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        hobby: { type: "string" },
    },
    required: ["firstName", "lastName", "hobby"],
};

const prompt =
  "Generate a person called Marty. He just came back from the future.";

const myPerson = ai.generateObject(prompt, schema);
util.out(JSON.stringify(myPerson));
```

const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit();

const schema = {
    type: "object",
    properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
        hobby: { type: "string" },
    },
    required: ["firstName", "lastName", "hobby"],
};

const prompt =
  "Generate a person called Marty. He just came back from the future.";

const myPerson = ai.generateObject(prompt, schema);
util.out(JSON.stringify(myPerson));

#### generateEmbeddings()

Die Funktion `generateEmbeddings()` konvertiert Texte in Vektoren,
um deren semantische Bedeutung maschinell vergleichbar zu machen.
Das ist besonders nützlich, wenn nicht nach exakten Begriffen, sondern nach Bedeutung gesucht werden soll.
Die thematische Beziehung kann dann über diese Vektoren errechnet werden.
Neben der Nutzung von Wissenssammlungen für Such- und Analysezwecke lassen sich Embeddings auch direkt einsetzen,
wenn man die Verarbeitung und den Vergleich der Vektoren vollständig selbst steuern möchte.


### Verarbeitung von Bildern und Audio

Das AI Toolkit unterstützt die Verarbeitung multimodaler Eingabedaten,
sofern dies von den gewählten KI-Anbietern unterstützt wird.


#### Bilder

Bilder können mittels Image-Objekt an die Funktionen `generateText()` oder `generateObject()` übergeben werden.


```javascript
// Bild Objekt referenziert Bild über Dateipfad
const imageFile = {
  type: "image",
  source: {
    type: "file",
    path: "./tmp/example.jpg",
    keepSourceAfterUse: false,
  },
};
```

// Bild Objekt referenziert Bild über Dateipfad
const imageFile = {
  type: "image",
  source: {
    type: "file",
    path: "./tmp/example.jpg",
    keepSourceAfterUse: false,
  },
};Für effiziente Mehrfachnutzung von Bilddateien können diese über die Methoden `processImage()` verarbeitet werden und über die Methode `cleanupImage()` wieder entfernt werden.

Im Fall von Dokumentenbilddateien können diese Methoden klassische OCR-Verfahren ergänzen oder ersetzen. Während klassische OCR den Text aus einem Bild extrahiert, erfasst KI-gestützte Verarbeitung zusätzlich das Layout und die Struktur des Dokuments, um Inhalte im richtigen Kontext darzustellen.


#### Audiodateien

Mithilfe der Funktion transcribe() können Audiodateien mittels KI-Dienst in Textform umgewandelt werden. Dadurch lassen sich Inhalte leichter weiterverarbeiten, etwa für Zusammenfassungen, strukturierte Auswertungen oder die automatische Extraktion von Informationen. Zuvor transkribierte Audiodateien können anschließend direkt als Text an den KI-Dienst übergeben werden.


```javascript
const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();

const audioPath = context.getDocumentById("myFile", "myDoc").downloadDocument();
const myTranscript = ai.transcribe(audioPath);

util.out(myTranscript);
```

const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();

const audioPath = context.getDocumentById("myFile", "myDoc").downloadDocument();
const myTranscript = ai.transcribe(audioPath);

util.out(myTranscript);

### Vektorbasierte Operationen (Wissenssammlungen)

Über die Skript-API lassen sich Wissenssammlungen direkt durchsuchen und in Workflows einbinden.
Mit `queryIndex` können per Freitextanfrage inhaltlich passende Dokumente gefunden werden, während `findInIndex` gezielt Einträge anhand eindeutiger Schlüssel oder Kategorien abruft.
So kann dieselbe Wissensbasis, die im Copiloten genutzt wird, auch für automatisierte Recherchen, Kontextanreicherungen
oder gezielte Datenabfragen in individuellen Skripten verwendet werden.


```javascript
context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

// Semantische Suche nach einer konkreten Frage
const query = "Welche Regeln gelten an einem Zebrastreifen?";

const result = ai.queryIndex(
    "lawDE",	// Name einer bestehenden Wissenssammlung Bsp. Gesetzestexten
    query,
    3           // Anzahl der gewünschten Treffer
);

// Ausgabe der Ergebnisse
if(result.length > 0) {
    util.out("Gefundene relevante Passagen:");
    result.forEach((match, index) => {
        const chunk = match.chunk;
        util.out(`Treffer ${index + 1} hat einen Trefferscore von ${match.score}
			und befindet sich in Chunk ${chunk.serialNumber}.`);

        util.out(`Inhalt des Chunks: ${chunk.mainText}`);
    });
}
else {
    util.out("Keine relevanten Stellen gefunden.");
}
```

context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

// Semantische Suche nach einer konkreten Frage
const query = "Welche Regeln gelten an einem Zebrastreifen?";

const result = ai.queryIndex(
    "lawDE",	// Name einer bestehenden Wissenssammlung Bsp. Gesetzestexten
    query,
    3           // Anzahl der gewünschten Treffer
);

// Ausgabe der Ergebnisse
if(result.length > 0) {
    util.out("Gefundene relevante Passagen:");
    result.forEach((match, index) => {
        const chunk = match.chunk;
        util.out(`Treffer ${index + 1} hat einen Trefferscore von ${match.score}
			und befindet sich in Chunk ${chunk.serialNumber}.`);

        util.out(`Inhalt des Chunks: ${chunk.mainText}`);
    });
}
else {
    util.out("Keine relevanten Stellen gefunden.");
}

### Hilfsfunktionen


#### Service-Informationen

Mit der Funktion `getImplInfo()` können detaillierte Metadaten zur gewählten Implementierung,
wie Bezeichnungen und den angebotenen Funktionsumfang erlangt werden.
So können z.B. Informationen ausgelesen werden, welche Funktionen der Service unterstützt.
Eine Übersicht aller bestehenden Instanzen und Services kann global über `listAllServices()`
oder service-spezifischen mit `listServices()` abgerufen werden.


```javascript
const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit("openAI");

util.out(JSON.stringify(ai.getImplInfo()));

/*
Ausgabe Informationen für OpenAI:
	{
		"description": "Integration of OpenAI",
		"generateObject": true,
		"generateText": true,
		"generateEmbeddings": true,
		"label": "OpenAI (OpenAI)",
		"name": "openAI"
	}
*/
```

const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit("openAI");

util.out(JSON.stringify(ai.getImplInfo()));

/*
Ausgabe Informationen für OpenAI:
	{
		"description": "Integration of OpenAI",
		"generateObject": true,
		"generateText": true,
		"generateEmbeddings": true,
		"label": "OpenAI (OpenAI)",
		"name": "openAI"
	}
*/

#### Gespeicherte Prompts und gespeichertes Wissen

Gespeichertes Wissen und gespeicherte Prompts werden jeweils unter einer individuellen ID abgelegt. Über die Hilfsfunktionen `getKnowledgeByKey()` und `getPromptByKey()` können diese gezielt per Skripting abgerufen und weiterverarbeitet werden.


#### JSON-Schema

Die Methoden `createJSONSchemaForFileType()`, `createFileDataFromJSON()` und `createJSONFromFile()` dienen dazu,
Mappenschemata in ein strukturiertes JSON-Format zu bringen, das sowohl von der KI als auch von DOCUMENTS verstanden wird.
Anwendungsfälle sind z.B. das automatische Befüllen von Feldern
oder das Generieren von Objekten mithilfe der KI gemäß dem definierten Mappentypen.


```javascript
const { AIToolkit } = require("aiToolkit");
const jsonData = {
    firstName: "John",
    lastName: "Doe",
    hobby: "Reading",
};
const fileData = AIToolkit.createFileDataFromJSON("person", jsonData, {
    filterReadonly: true,
});
console.log(fileData);
```

const { AIToolkit } = require("aiToolkit");
const jsonData = {
    firstName: "John",
    lastName: "Doe",
    hobby: "Reading",
};
const fileData = AIToolkit.createFileDataFromJSON("person", jsonData, {
    filterReadonly: true,
});
console.log(fileData);