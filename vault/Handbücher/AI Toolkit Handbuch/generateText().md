---
title: "API-Methode generateText()"
source: "https://otris.software/documents/manuals/books/otr-ai/generate-text.html"
---

# API-Methode generateText()

Die Methode `generateText` ist eine Funktion der `AIToolkit`-Klasse, die Text basierend auf einem gegebenen Prompt generiert. Diese Methode nutzt den gewünschten KI-Dienst, um Text zu erstellen, der den spezifizierten Anforderungen entspricht.

Sie dient dazu, generierten Text in verschiedenen Anwendungsfällen zu erstellen, wie z.B. beim Verfassen von E-Mails, der Erstellung von Dokumentationen oder Zusammenfassungen oder zur Verbesserung/Überarbeitung von bestehenden Texten.


## Parameter

Die Methode `generateText` benötigt einen Parameter, um verwendet werden zu können:

1. prompt: Ein Textprompt, der die notwendigen Informationen und Anweisungen enthält, um den gewünschten Text zu generieren. Der Prompt sollte alle erforderlichen Daten und Anweisungen enthalten, wie z.B. den Kontext oder die gewünschte Struktur des Textes.


## Optionen

Die Methode akzeptiert darüber hinaus verschiedene Optionen, um das Verhalten anzupassen:

1. model: Das Modell, das für die Anfrage verwendet werden soll. Falls nicht angegeben, wird ein implementierungsspezifisches Standardmodell verwendet.
2. temperature: Die Temperatur, die für die Anfrage verwendet werden soll. Wenn nicht angegeben, wird eine Standardtemperatur verwendet. Die Standardtemperatur ist spezifisch für die jeweilige Implementierung.
3. retries: Die Anzahl der Wiederholungsversuche im Falle von Fehlern. Standardwert: 0
4. systemPrompt: Ein zusätzlicher Systemprompt, der zusammen mit dem gegebenen Prompt verwendet wird. Standardwert: ""


## Beispiele

Nachfolgend finden Sie mehrere Beispiele und mögliche Anwendungsfälle zur Verwendung von generateObject


### Einfaches Beispiel: Schreiben einer kurzen Geschichte


```javascript
const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();
const myShortStory = ai.generateText(
  "Tell me a short story about Marty and his work with the document management system 'documentsOS'"
);
util.out(myShortStory);
```

const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();
const myShortStory = ai.generateText(
  "Tell me a short story about Marty and his work with the document management system 'documentsOS'"
);
util.out(myShortStory);
### Multimodales Beispiel: Einbinden von Bildern


```javascript
const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();

var messages = [
  {
    type: "text",
    text: "Was siehst du auf dem Bild?",
  },
  {
    type: "image",
    source: {
      type: "document",
      fileId: "otrAI_fi20240000000231",
      documentId: "otrAIdc0000000000000036",
    },
  },
];

return ai.generateText(messages);
```

const AIToolkit = require("aiToolkit").AIToolkit;
const ai = new AIToolkit();

var messages = [
  {
    type: "text",
    text: "Was siehst du auf dem Bild?",
  },
  {
    type: "image",
    source: {
      type: "document",
      fileId: "otrAI_fi20240000000231",
      documentId: "otrAIdc0000000000000036",
    },
  },
];

return ai.generateText(messages);
### Zusammenfassung eines Vertrages


```javascript
const { AIToolkit } = require("aiToolkit");

// Initialisiere das AI Toolkit
const ai = new AIToolkit();

// Definiere den Prompt zur Generierung einer Vertragszusammenfassung
const prompt = "Erstelle eine kurze Zusammenfassung des folgenden Vertrags: Der Vertrag zwischen der Firma A und der Firma B umfasst die Bereitstellung von IT-Dienstleistungen für einen Zeitraum von zwei Jahren. Firma A verpflichtet sich, die notwendigen Ressourcen bereitzustellen und regelmäßige Wartungen durchzuführen. Firma B verpflichtet sich zur Zahlung eines jährlichen Betrags von 100.000 Euro. Beide Parteien können den Vertrag mit einer Kündigungsfrist von drei Monaten kündigen.";

// Optionen zur Generierung des Textes
const options = {
    systemPrompt: "Erstelle eine prägnante Zusammenfassung eines Vertrags."
};

// Generiere den Text
const summary = ai.generateText(prompt, options);

// Ausgabe der Zusammenfassung
util.out(summary);
```

const { AIToolkit } = require("aiToolkit");

// Initialisiere das AI Toolkit
const ai = new AIToolkit();

// Definiere den Prompt zur Generierung einer Vertragszusammenfassung
const prompt = "Erstelle eine kurze Zusammenfassung des folgenden Vertrags: Der Vertrag zwischen der Firma A und der Firma B umfasst die Bereitstellung von IT-Dienstleistungen für einen Zeitraum von zwei Jahren. Firma A verpflichtet sich, die notwendigen Ressourcen bereitzustellen und regelmäßige Wartungen durchzuführen. Firma B verpflichtet sich zur Zahlung eines jährlichen Betrags von 100.000 Euro. Beide Parteien können den Vertrag mit einer Kündigungsfrist von drei Monaten kündigen.";

// Optionen zur Generierung des Textes
const options = {
    systemPrompt: "Erstelle eine prägnante Zusammenfassung eines Vertrags."
};

// Generiere den Text
const summary = ai.generateText(prompt, options);

// Ausgabe der Zusammenfassung
util.out(summary);