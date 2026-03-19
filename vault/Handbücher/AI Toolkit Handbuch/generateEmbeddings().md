---
title: "API-Methode generateEmbeddings()"
source: "https://otris.software/documents/manuals/books/otr-ai/generate-embeddings.html"
---

# API-Methode generateEmbeddings()

Die Methode `generateEmbeddings` ist eine Funktion der Klasse `AIToolkit`, die ein Array von Embeddings (Vektoren) basierend auf einer gegebenen Eingabe erzeugt. Diese Methode verwendet den gewünschten KI-Dienst, um Embeddings zu erzeugen, die den spezifizierten Anforderungen entsprechen.


## Parameter

Die Methode `generateEmbeddings` benötigt einen Parameter um verwendet werden zu können:

1. input: Als Eingabe kann ein String oder ein String-Array übergeben werden, für das jeweils ein Embedding-Vektor erzeugt werden soll.


## Optionen

Die Methode akzeptiert darüber hinaus verschiedene Optionen, um das Verhalten anzupassen:

1. model: Das Modell, das für die Anfrage verwendet werden soll. Wenn nicht angegeben, wird ein Standardmodell verwendet. Das Standardmodell hängt von der jeweiligen Implementierung ab.
2. retries: Die Anzahl der Wiederholungsversuche im Fehlerfall. Standardwert: 0
3. dimensions: Bestimmt die Größe des generierten Embedding-Vektors. Wenn nicht angegeben, wird die Größe des Vektors von der jeweiligen Implementierung selbst gewählt. Beispiel: dimensions=3, Embeddingvektor: [0.1234, 0.3456, 0,5678].
4. embeddingType: Das EmbeddingType-Objekt ermöglicht die Optimierung der generierten Embeddings, indem den Texten ein spezifischer Aufgabentyp zugeordnet wird. type: "retrievalQuery" deklariert übergebene Texte als Suchanfragen in einem Such- und Abrufszenario während "retrievalDocument" die Texte als Dokumente deklariert.
docTitle: Wenn "retrievalDocument" verwendet wird, kann optional ein Dokumententitel angegeben werden.


## Beispiele

Nachfolgend finden Sie mehrere Beispiele und mögliche Anwendungsfälle zur Verwendung von `generateEmbeddings`.


### Embeddings Erzeugen:

Beispiel zur Verwendung der Methode `generateEmbeddings`:


```javascript
const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit();

const input = ["This is a cat.", "This is a dog."];
const options = { dimensions: 3 };

const response = ai.generateEmbeddings(input, options);
util.out(JSON.stringify(response));

// Beispielembeddings der beiden Sätze:
// [ [-0.68892974,-0.41729638,-0.59265465], [-0.9688992,-0.09339378,-0.22915511] ]
```

const { AIToolkit } = require("aiToolkit");
const ai = new AIToolkit();

const input = ["This is a cat.", "This is a dog."];
const options = { dimensions: 3 };

const response = ai.generateEmbeddings(input, options);
util.out(JSON.stringify(response));

// Beispielembeddings der beiden Sätze:
// [ [-0.68892974,-0.41729638,-0.59265465], [-0.9688992,-0.09339378,-0.22915511] ]
Embeddings sind numerische Darstellungen von Text als Vektoren, die es ermöglichen, semantische Ähnlichkeit zu messen.
Neben der Nutzung von Wissenssammlungen für Such- und Analysezwecke lassen sich Embeddings einsetzen,
wenn man die Verarbeitung und den Vergleich der Vektoren vollständig selbst steuern möchte.