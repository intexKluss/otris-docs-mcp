---
title: "Wissenssammlungen erstellen"
source: "https://otris.software/documents/manuals/books/otr-ai/generate-document-vector-index.html"
---

# Wissenssammlungen erstellen


## Wissenssammlungen anlegen

Das folgende Skript zeigt, wie eine Wissenssammlung angelegt wird und wieder gelöscht wird.


```javascript
context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();
const collectionName = "lawDE";
const collectionLabel = "de:Deutsche Gesetztestexte;en:German legal texts;";

try {
    ai.ensureCollection(collectionName, collectionLabel);
    util.out("Neue Wissenssammlung erstellt.");
}
catch(error) {
    util.out("Fehler beim Erstellen der Sammlung: " + error.message);
}

try {
    ai.deleteCollection(collectionName);
    util.out("Wissenssammlung gelöscht.");
}
catch(error) {
    util.out("Fehler beim Löschen der Wissenssammlung: " + error.message);
}
```

context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();
const collectionName = "lawDE";
const collectionLabel = "de:Deutsche Gesetztestexte;en:German legal texts;";

try {
    ai.ensureCollection(collectionName, collectionLabel);
    util.out("Neue Wissenssammlung erstellt.");
}
catch(error) {
    util.out("Fehler beim Erstellen der Sammlung: " + error.message);
}

try {
    ai.deleteCollection(collectionName);
    util.out("Wissenssammlung gelöscht.");
}
catch(error) {
    util.out("Fehler beim Löschen der Wissenssammlung: " + error.message);
}

## Dokumente indexieren

Das folgende Skript demonstriert, wie ein Dokument zu einer zuvor erstellten Wissenssammlung des AI-Toolkits hinzugefügt (indexiert) wird.

Dabei wird das Dokument in kleinere Segmente (Chunks) zerlegt, deren Größe und Überlappung sich über Konfigurationsoptionen anpassen lassen. Ebenso können Dokumente bei Bedarf aus der Wissenssammlung entfernt werden.


```javascript
context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();
const collectionName = "lawDE"; // Name einer bereits erstellten Collection
const optChunkingOptions = {
    chunkSize: 250, // Maximale Größe eines Chunks
    chunkOverlap: 70  // Überlappung zwischen zwei Chunks
};
const fileId = "otrAI_fi20240000000695"; // ID der Mappe, in die das Dokument hochgeladen ist
const documentId = "otrAIdc0000000000000111"; // ID des Dokuments

try {
    ai.ensureCollection(collectionName, "Deutsche Gesetztestexte");
    util.out("Sammlung wurde erstellt.");
}
catch(error) {
    util.out("Fehler beim Erstellen der Sammlung: " + error.message);
}

try {
    ai.indexDocument(collectionName, fileId, documentId, optChunkingOptions);
    util.out("Dokument wurde der Sammlung hinzugefügt.");
}
catch(error) {
    util.out("Fehler beim Hinzufügen des Dokuments zur Sammlung: " + error.message);
}

try {
    ai.deindexDocument(collectionName, documentId);
    util.out("Dokument wurde aus der Sammlung entfernt.");
}
catch(error) {
    util.out("Fehler beim Entfernen des Dokuments aus der Sammlung: " + error.message);
}
```

context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();
const collectionName = "lawDE"; // Name einer bereits erstellten Collection
const optChunkingOptions = {
    chunkSize: 250, // Maximale Größe eines Chunks
    chunkOverlap: 70  // Überlappung zwischen zwei Chunks
};
const fileId = "otrAI_fi20240000000695"; // ID der Mappe, in die das Dokument hochgeladen ist
const documentId = "otrAIdc0000000000000111"; // ID des Dokuments

try {
    ai.ensureCollection(collectionName, "Deutsche Gesetztestexte");
    util.out("Sammlung wurde erstellt.");
}
catch(error) {
    util.out("Fehler beim Erstellen der Sammlung: " + error.message);
}

try {
    ai.indexDocument(collectionName, fileId, documentId, optChunkingOptions);
    util.out("Dokument wurde der Sammlung hinzugefügt.");
}
catch(error) {
    util.out("Fehler beim Hinzufügen des Dokuments zur Sammlung: " + error.message);
}

try {
    ai.deindexDocument(collectionName, documentId);
    util.out("Dokument wurde aus der Sammlung entfernt.");
}
catch(error) {
    util.out("Fehler beim Entfernen des Dokuments aus der Sammlung: " + error.message);
}

## Texte indexieren

Neben Dokumenten können auch Textdaten in Form eines Strings einer Wissenssammlung direkt hinzugefügt werden.
Die Methode `indexText` benötigt jedoch eine Referenz, welcher Mappe und optional welchem Dokument die Indexierung zugeordnet werden soll.


```javascript
context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();
const collectionName = "lawDE"; // Name einer bereits erstellten Collection
const optChunkingOptions = {
    chunkSize: 250, // Maximale Größe eines Chunks
    chunkOverlap: 70  // Überlappung zwischen zwei Chunks
};

const fileId =  "otrAI_fi20240000000695"; // ID der Mappe, in die das Dokument hochgeladen ist

const reference = {
    fileId: fileId,
    documentId: "otrAIdc0000000000000111" // ID des Dokuments Bsp. law.txt
};

const lawtxt = "..."; // Inhalt des Dokuments als String

try {
    ai.ensureCollection(collectionName, "Deutsche Gesetztestexte");
    util.out("Sammlung wurde erstellt.");
}
catch(error) {
    util.out("Fehler beim Erstellen der Sammlung: " + error.message);
}

try {
    ai.indexText(collectionName, lawtxt, reference, optChunkingOptions);
    util.out("Mappe wurde der Sammlung hinzugefügt.");
}
catch(error) {
    util.out("Fehler beim Hinzufügen der Mappe zur Sammlung: " + error.message);
}

try {
    ai.deindexFile(collectionName, fileId);
    util.out("Mappe wurde aus der Sammlung entfernt.");
}
catch(error) {
    util.out("Fehler beim Entfernen der Mappe aus der Sammlung: " + error.message);
}
```

context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();
const collectionName = "lawDE"; // Name einer bereits erstellten Collection
const optChunkingOptions = {
    chunkSize: 250, // Maximale Größe eines Chunks
    chunkOverlap: 70  // Überlappung zwischen zwei Chunks
};

const fileId =  "otrAI_fi20240000000695"; // ID der Mappe, in die das Dokument hochgeladen ist

const reference = {
    fileId: fileId,
    documentId: "otrAIdc0000000000000111" // ID des Dokuments Bsp. law.txt
};

const lawtxt = "..."; // Inhalt des Dokuments als String

try {
    ai.ensureCollection(collectionName, "Deutsche Gesetztestexte");
    util.out("Sammlung wurde erstellt.");
}
catch(error) {
    util.out("Fehler beim Erstellen der Sammlung: " + error.message);
}

try {
    ai.indexText(collectionName, lawtxt, reference, optChunkingOptions);
    util.out("Mappe wurde der Sammlung hinzugefügt.");
}
catch(error) {
    util.out("Fehler beim Hinzufügen der Mappe zur Sammlung: " + error.message);
}

try {
    ai.deindexFile(collectionName, fileId);
    util.out("Mappe wurde aus der Sammlung entfernt.");
}
catch(error) {
    util.out("Fehler beim Entfernen der Mappe aus der Sammlung: " + error.message);
}

## Wissensammlungen nutzen

Wie der Copilot auf die Wissenssammlung zugreifen und diese nutzen kann, ist [hier](./vector-index.html) ausführlich beschrieben.