---
title: "Beispiel - Text extrahieren im Workflow"
source: "https://otris.software/documents/manuals/books/textraction-ocr/Workflow.html"
---

# Beispiel - Text extrahieren im Workflow


![workflow](images/workflow.png)

Abb. 3 - Workflow

Dieses Beispiel beschreibt eine Möglichkeit der Verwendung von DOCUMENTS Textraction unter
Verwendung von

- OCR-Thread
- PortalScripting
- afterOcrScript-Exit

Der Ablauf ist wie folgt:

- Ein Dokument wird eingereicht und die zugehörige Mappe in den Workflow gesendet
- In einem ersten Schritt wird im Javascript-Signalausgang Vorverarbeitung das OCR-Flag für die Hintergrund-Bearbeitung gesetzt


```js
// Signalausgang: Vorverarbeitung
var file = context.file;
var doc = file.getRegisterByName(...);
const background = true;
doc.doOCR("pdf", "alto", "", background);
return 0;
```

// Signalausgang: Vorverarbeitung
var file = context.file;
var doc = file.getRegisterByName(...);
const background = true;
doc.doOCR("pdf", "alto", "", background);
return 0;- Der OCR-Thread führt die OCR-Aufgabe und Textextraktion durch
- Es ist ein afterOcrScript definiert, welches vom OCR-Thread ausgeführt wird
- Dem afterOcrScript steht das Ergebnis der Textextraktion als globale Konstante ocrText zur Verfügung
- In dem Script wird ocrText ausgewertet und kann z.B. in diesem Fall für eine Klassifizierung verwendet werden
- Das Script triggert die direkte Weiterleitung der Mappe im Workflow an


```js
// afterOcrScript durch OCR-Job
var file = context.file;
var doc = context.document;
// Globale Konstante ocrText
// enthält die alto-xml
try {
    var dom = new DOMParser();
    DOMParser.parse(ocrText, false);
    ...
    // Kategorisierung
} catch (err) {...
file.Klassifiziert = 1;
file.sync();

// Signaleingang triggern
file.checkWorkflowReceiveSignal();
return 0;
```

// afterOcrScript durch OCR-Job
var file = context.file;
var doc = context.document;
// Globale Konstante ocrText
// enthält die alto-xml
try {
    var dom = new DOMParser();
    DOMParser.parse(ocrText, false);
    ...
    // Kategorisierung
} catch (err) {...
file.Klassifiziert = 1;
file.sync();

// Signaleingang triggern
file.checkWorkflowReceiveSignal();
return 0;