---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/textraction-ocr/index.html"
---

# Einleitung

Mit der Version 5.0f gibt es in DOCUMENTS die Möglichkeit für hochgeladene Dokumente automatisch eine
Texterkennung (engl. optical character recognition, OCR) und Textextraktion durchzuführen.

OCR wird unterstützt für Dateiformate wie

- nicht durchsuchbare pdf-Dateien
- Image Formate wie jpg, png, tiff

Für PDF Dateien gibt es mit der Version 5.0g außerdem die Möglichkeit, die Texterkennung nur für markierte Ausschnitte durchzuführen. Siehe dazu den Abschnitt [OCR Modus](./OcrMode.html).

Die Textextraktion wird mit Hilfe der Funktionalität der unterstützten OCR-Engines oder optional über die in
der `documents.ini` definierbaren Extraktionsfilter realisiert.

Der gesamte Prozess findet transparent im Hintergrund statt und es ist unerheblich über welche Schnittstellen
das Dokument hochgeladen wurde

- Web-Client
- SOAP
- docimport
- Scripting
- DROP

Nach der Behandlung durch die OCR-Engine sind sind die Dokumente durchsuchbar und Inhalte können optional auch mit der Volltextsuche
recherchiert werden. Dieses findet implizit im Hintergrund statt, kann aber auch mit API Funktionen des PortalScriptings oder Wartungsmethoden initiiert werden. Eine Weiterverarbeitung von extrahierten Inhalten für die Kategorisierung der Dokumente ist
ebenfalls möglich.

Das OCR-Textraction Modul ist lizenzpflichtig und muss in der Lizenz-Datei (`.pem`) mit dem Lizenzflag `ocr` auf `1` freigeschaltet sein. Neben dem OCR-Textraction Modul muss eine OCR-Engine installiert sein.

Derzeit werden die folgenden OCR-Engines unterstützt:

- Tesseract (wird lizenzfrei mit ausgelliefert)
- Abbyy Finereader (separat zu lizensieren)