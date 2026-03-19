---
title: "Textextraktion"
source: "https://otris.software/documents/manuals/books/textraction-ocr/Textraction.html"
---

# Textextraktion

Neben der Durchsuchbarkeit, kann der im hochgeladenen Dokument erkannte Text auch ausgewertet werden. Dazu
muss definiert werden in welchem Format der identifizierte Text von der OCR-Engine zurück gegeben werden
soll.

**I. Definition des Formates des identifizierten Textes (Text-Extrakt)**


```http
OCRTextFormat=txt oder alto, hocr
```

OCRTextFormat=txt oder alto, hocrals Eigenschaft in Documents-Einstellungen oder am Mappentypen oder am Register.

- txt = Text-Datei
- alto = ALTO.xml
- hocr = hOCR.xml

**II. Optionale Definition der Speicherung des Text-Extrakt**


---

Definition eins Zielregisters für die Speicherung als Datei mit dem Text-Extrakt


```http
OCRTextTarget={Registername}
```

OCRTextTarget={Registername}  als Mappentyp-Eigenschaft. Die Datei mit dem Text-Extrakt wird implzit auf das Register hochgeladen

Definition eines Mappenfeldes, in die der Text-Extrakt geschrieben werdden soll


```http
OCRTextTarget={Feldname}   (ab 5.0f HF1)
```

OCRTextTarget={Feldname}   (ab 5.0f HF1)als Mappentyp-Eigenschaft. Der Text-Extrakt wird implzit in das Feld geschrieben.

**III. Optionale Definition eines afterOcrScript**


```http
afterOcrScript={Scriptname}
```

afterOcrScript={Scriptname}als Eigenschaft in Documents-Einstellungen oder am Mappentypen oder am Register. Das angebene Script wird
nach der OCR-Verarbeitung ausgeführt (s. [OCR-Durchsuchbarkeit](Searchable.md)) und erhält Text-Extrakt als globale Konstante `ocrText`