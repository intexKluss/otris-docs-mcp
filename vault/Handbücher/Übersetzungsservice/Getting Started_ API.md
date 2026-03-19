---
title: "Getting started: API"
source: "https://otris.software/documents/manuals/books/otrtranslate/getting-started-api.html"
---

# Getting started: API

Hier ist in Kürze erklärt, wie die Erweiterung genutzt werden kann, um Texte oder Dokumente zu übersetzen.
Die jeweiligen spezifischen Optionen und Features sind von den jeweiligen Schnittstellen abhängig und müssen in der Implementierung bei Bedarf nachgesehen werden (z.B. Google Translate bietet keine Dokumentenübersetzung).


## Übersetzen von Texten

Zum Übersetzen wird eine Instanz der Klasse TranslationToolkit erstellt.
Übergeben wird in diesem Beispiel optional der Name der Implementierung (hier "googleTranslate").

Wird keine Name der Implementierung übergeben greift die Erweiterung auf das globale Attribut **$otrTranslateImpl** oder auf die default Implementierung **deepL** zurück.


```javascript
context.enableModules();

// Initialize toolkit
const translationToolkit = require("translationToolkit").TranslationToolkit;

// Define text and target language
const text = "Hello World";
const targetLang = "de";

// Using Google Translate, an API-Key for the service is required
const translate = new translationToolkit("googleTranslate");

// Translate the text
const translatedText = translate.translateText(text, targetLang);

// Output
util.out("Translate \"" + text + "\" to \"" +  translatedText + "\"" + " (" + targetLang + ")");
```

context.enableModules();

// Initialize toolkit
const translationToolkit = require("translationToolkit").TranslationToolkit;

// Define text and target language
const text = "Hello World";
const targetLang = "de";

// Using Google Translate, an API-Key for the service is required
const translate = new translationToolkit("googleTranslate");

// Translate the text
const translatedText = translate.translateText(text, targetLang);

// Output
util.out("Translate \"" + text + "\" to \"" +  translatedText + "\"" + " (" + targetLang + ")");

## Fortgeschrittenes Übersetzen von Texten

Übergeben wird in diesem Beispiel optional der Name der Implementierung (hier "deepL"). Da mehrere Service Instanzen z.B. von DeepL vorhanden sein können, kann über die ServiceID ein bestimmter Service ausgewählt werden. Services IDs setzten sich i.d.R. aus dem Servicenamen und dem Servicealias (in diesem Beispiel "myService") zusammen und können bei nicht vorhandenem Alias auch mit dem Impl-Bezeichner übereinstimmen.

Darüber hinaus wird in diesem Beispiel eine optionale Übersetzungsoption gesetzt: Die nur vor DeepL unterstützte formalere Sprache.


```javascript
context.enableModules();

// Initialize toolkit
const translationToolkit = require("translationToolkit").TranslationToolkit;

// Define text, source and target language and optiopns
const text = "Hello, i welcome you to my world.";
const sourceLang = "en";
const targetLang = "de";
const implName = "deepL";
const optOptions = { formality: "prefer_more" };

// Define the service id: myService is the created alias
const serviceID = "deepL::myService";

// Using DeepL, an API-Key for the service is required
const translate = new translationToolkit(implName, serviceID);

// Translate the text
const translatedText = translate.translateText(text, targetLang, sourceLang, optOptions);

// Output
util.out("Translate \"" + text + "\" (" + sourceLang + ") to \"" + translatedText + "\" (" + targetLang + ")");
```

context.enableModules();

// Initialize toolkit
const translationToolkit = require("translationToolkit").TranslationToolkit;

// Define text, source and target language and optiopns
const text = "Hello, i welcome you to my world.";
const sourceLang = "en";
const targetLang = "de";
const implName = "deepL";
const optOptions = { formality: "prefer_more" };

// Define the service id: myService is the created alias
const serviceID = "deepL::myService";

// Using DeepL, an API-Key for the service is required
const translate = new translationToolkit(implName, serviceID);

// Translate the text
const translatedText = translate.translateText(text, targetLang, sourceLang, optOptions);

// Output
util.out("Translate \"" + text + "\" (" + sourceLang + ") to \"" + translatedText + "\" (" + targetLang + ")");
## Übersetzen von Dokumenten

Dieses Javascript Beispiel zeigt, wie man einen ausgewählten Anhang übersetzt (im Beispiel mit "libreTranslate") und das vorherige Dokument ersetzt.


```javascript
context.enableModules();

// Initialize toolkit
const translationToolkit = require("translationToolkit").TranslationToolkit;

// Use the first selected document
let doc = [...context.selectedDocuments][0];

// Define source and target language
const sourceLang = "en";
const targetLang = "de";

// Using libreTranslate, an API-Key for the service is not required
const translate = new translationToolkit("libreTranslate");

// Download the document
const tmpFile = doc.downloadDocument();

// Translate the document
const translateDoc = translate.translateDocument(tmpFile, targetLang, sourceLang, doc.fullname);
const path = translateDoc.download();

// Upload the document and replace the exiting one
const currentRegister = doc.getRegister();
currentRegister.uploadDocument(path, doc.fullname);
```

context.enableModules();

// Initialize toolkit
const translationToolkit = require("translationToolkit").TranslationToolkit;

// Use the first selected document
let doc = [...context.selectedDocuments][0];

// Define source and target language
const sourceLang = "en";
const targetLang = "de";

// Using libreTranslate, an API-Key for the service is not required
const translate = new translationToolkit("libreTranslate");

// Download the document
const tmpFile = doc.downloadDocument();

// Translate the document
const translateDoc = translate.translateDocument(tmpFile, targetLang, sourceLang, doc.fullname);
const path = translateDoc.download();

// Upload the document and replace the exiting one
const currentRegister = doc.getRegister();
currentRegister.uploadDocument(path, doc.fullname);