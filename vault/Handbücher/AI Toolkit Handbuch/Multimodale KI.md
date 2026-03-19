---
title: "Multimodale AI Unterstützung"
source: "https://otris.software/documents/manuals/books/otr-ai/multimodal.html"
---

# Multimodale AI Unterstützung

Das AI Toolkit unterstützt die Verarbeitung multimodaler Eingabedaten, sofern der gewählte Anbieter dies ebenfalls unterstützt.
Es wird ausschließlich die Verarbeitung multimodaler Eingaben unterstützt. Eine Generierung von weiteren Formaten neben Texten ist über den Copiloten nicht vorgesehen.


## Bilder


### Hinzufügen von Bildern als Image-Objekt

Bilder können mittels `Image-Objekt` auf die folgende Art übergeben werden:


#### Parameter:

- type: "image"
- source: Die Quelle des Bildes kann entweder als Dateipfad oder als Documents File referenziert werden. Beispiel siehe unten. Dateipfad: { type: "file", path: string; keepSourceAfterUse?: boolean; } Document File: { type: "document", fileId: string; documentId: string; }
- format (optional): Formattyp des gewählten Bildes: "jpg" | "png" | "webp" | "gif"
- resolution (optional): Auflösung des gewählten Bildes "low" | "medium" | "high" | "auto"


### processImage()

Die Methode `processImage` dient zur Vorverarbeitung von Bildern, um eine effiziente Mehrfachnutzung zu ermöglichen. Dabei werden Informationen wie Dateiformat und -pfad automatisch angepasst und auf Kompatibilität überprüft. Zusätzlich werden die spezifischen Anforderungen des Anbieters zur Bildverarbeitung berücksichtigt. Die verarbeiteten Daten werden direkt am Bildobjekt gespeichert, um eine erneute Verarbeitung zu vermeiden.


### cleanupImage()

Die Methode `cleanupImage` entfernt temporäre Dateien und Daten, die während der Bildverarbeitung mit `processImage` entstanden sind.

Bei einem Bild, das über den Dateipfad referenziert wird, kann über den Paramter `keepSourceAfterUse` (default: false) bestimmt werden, ob das Bild beim Aufruf von dieser Methode gelöscht werden sollen.


## Beispiel: Anfügen von Bildern


```javascript
context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

// Bild Objekt referenziert Bild über Dateipfad
const imageFile = {
    type: "image",
    source: {
        type: "file",
        path: "./tmp/example.jpg",
        keepSourceAfterUse: false,
    },
};

// Bild Objekt referenziert Bild über FileID
const imageDocument = {
    type: "image",
    source: {
        type: "document",
        fileId: "otrAI_fi20240000000695",
        documentId: "otrAIdc0000000000000111",
    },
};

const messages = [
    {
        role: "system",
        content:
      'Du bist ein hilfreicher Chatbot, sprichst Deutsch und verwendest die förmliche Anrede "Sie".',
    },
    {
        role: "system",
        content:
      'Der Nutzer arbeitet zur Zeit an einem Datensatz mit dem Titel "Neues Dokument"',
    },
    {
        role: "user",
        content: [
            {
                type: "text",
                text: "Was siehst du auf den Bildern?",
            },
            imageDocument,
            imageFile
        ],
    },
];

ai.generateText(messages);
util.out(JSON.stringify(messages));
```

context.enableModules();
const AIToolkit = require("aiToolkit").AIToolkit;

const ai = new AIToolkit();

// Bild Objekt referenziert Bild über Dateipfad
const imageFile = {
    type: "image",
    source: {
        type: "file",
        path: "./tmp/example.jpg",
        keepSourceAfterUse: false,
    },
};

// Bild Objekt referenziert Bild über FileID
const imageDocument = {
    type: "image",
    source: {
        type: "document",
        fileId: "otrAI_fi20240000000695",
        documentId: "otrAIdc0000000000000111",
    },
};

const messages = [
    {
        role: "system",
        content:
      'Du bist ein hilfreicher Chatbot, sprichst Deutsch und verwendest die förmliche Anrede "Sie".',
    },
    {
        role: "system",
        content:
      'Der Nutzer arbeitet zur Zeit an einem Datensatz mit dem Titel "Neues Dokument"',
    },
    {
        role: "user",
        content: [
            {
                type: "text",
                text: "Was siehst du auf den Bildern?",
            },
            imageDocument,
            imageFile
        ],
    },
];

ai.generateText(messages);
util.out(JSON.stringify(messages));