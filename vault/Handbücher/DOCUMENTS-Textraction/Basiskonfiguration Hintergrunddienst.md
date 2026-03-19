---
title: "Basiskonfiguration Hintergrunddienst"
source: "https://otris.software/documents/manuals/books/textraction-ocr/Baseconfig.html"
---

# Basiskonfiguration Hintergrunddienst

Im folgenden wird die Basiskonfiguration für die Verwendung des OCR-Tessearact Moduls dargestellt.
Diese bewirkt, dass beim Upload von definierten Dateiarten die OCR-Funktionalität transparent im Hintergrund
durchgeführt wird.
Dies findet immer asynchron statt, da die Laufzeiten der OCR-Engines stark abhängig von der Seitenanzahl und Komplexität des Dokuments
sind und der Benutzer in seinem Arbeitsabfluss möglichst nicht beeinträchtigt werden soll.


![overview](images/overview.png)

Abb. 1 - Ablauf OCR und Textextraktion

- Nach Upload wird ein OCR-Flag am neu hochgeladenen oder geänderten Dokument gesetzt
- Der asynchrone OCR-Thread prüft einmal pro Minute Dokumente mit einem OCR-Flag
- Dokumente, die aktuell bearbeitbar sind (Mappe nicht im Bearbeitungsmodus), werden vom OCR-Thread verarbeitet
- Über das Wrapperscript ocr/otrTesseract.js bzw. ocr/otrAbbyy.js wird die entsprechende OCR-Engine gestartet
- Upload des von der OCR-Engine erzeugten Dokuments als zweite Version des Ursprungdokuments, wenn das Ursprung vom Typ *.pdf war
als zusätzliches Dokument *_ocr.pdf, wenn das Ursprungsdokument ein Imageformat war (z.B. *.jpg)


![ocroutputformat](images/ocr_outputformat.png)

Abb. 2 - OCROutputFormat

I. Definition der zu verwendenden OCR-Engine als Eigenschaft unter Documents-Einstellungen


```http
OCREngine=Tesseract oder OCREngine=Abbyy
```

OCREngine=Tesseract oder OCREngine=AbbyyTesseract ist Bestandteil der DOCUMENTS-Installation. Abby Finereader muss separat installiert und lizensiert werden.
Die DOCUMENTS-Installtion liefert aber einen Abbyy-Wrapper, der für den Aufruf der Abbyy Engine benötigt wird, mit aus.

II. Definition der Dateiarten, die von der OCR-Engine verabeitet werden sollen


```http
OCR=pdf,jpg,png,tiff
```

OCR=pdf,jpg,png,tiffDiese Eigenschaft kann global in Documents-Einstellungen definiert werden und gilt dann über alle hochgeladenen Dokumente.
Sie kann aber auch am Mappentypen oder dem einzelnen Register definiert werden und wirk dann nur auf die ensprechenden Dokumente

III. Definition des Zieldateityps nach der OCR-Verarbeitung


```http
OCROutputFormat=pdf oder OCROutputFormat=docx
```

OCROutputFormat=pdf oder OCROutputFormat=docxHinweis: Das Zielformat `docx` wird von Tesseract nicht unterstützt

Hinweis: Der OCR-Thread verwendet das unter Documents-Einstellungen `Job-User` eingetragene Benutzerkonto. Wenn dieses nicht definiert ist, bricht der OCR-Job ab.