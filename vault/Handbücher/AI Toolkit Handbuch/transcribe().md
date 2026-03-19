---
title: "API-Methode transcribe()"
source: "https://otris.software/documents/manuals/books/otr-ai/transcribe.html"
---

# API-Methode transcribe()

Die Methode `transcribe` ist eine Funktion der `AIToolkit`-Klasse, die eine Audiodatei in Text umwandeln kann. Diese Methode nutzt den gewünschten KI-Dienst, um den Text zu transkribieren.

Hiermit können bspw. Spracheingaben ermöglich werden. Des weiteren könnten Telefongespräche transkribiert und dann weiterverarbeitet werden. Auch Meetingnotizen o.Ä. könnten so erstellt werden.


## Parameter

Die Methode `transcribe` benötigt einen Parameter, um verwendet werden zu können:

1. path: Pfad einer Audiodatei auf der Festplatte. Diese Audiodatei wird dann an den gewünschten KI-Dienst übertragen und durch diesen transkribiert. Das Transkript wird dann zurückgegeben.


## Optionen

Die Methode akzeptiert darüber hinaus verschiedene Optionen, um das Verhalten anzupassen:

1. model: Das Modell, das für die Anfrage verwendet werden soll. Falls nicht angegeben, wird ein implementierungsspezifisches Standardmodell verwendet.
2. prompt: Ein zusätzlicher Prompt. Kann z.B. dazu genutzt werden einige Fachbegriffe beizusteuern welche dann besser transkribiert werden
3. language: Die Sprache in der die zu transkribierende Audiodatei ist (in ISO-639-1)
4. format: Das Format der eingegebenen Datei. Wird automatisch bestimmt, falls nicht angegeben.


## Beispiele

Nachfolgend finden Sie ein Beispiel zur Verwendung von transcribe


### Beispiel: Transkribieren einer Audiodatei


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