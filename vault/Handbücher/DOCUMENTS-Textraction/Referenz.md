---
title: "Referenz"
source: "https://otris.software/documents/manuals/books/textraction-ocr/Reference.html"
---

# Referenz


## OCR-Properties

Die folgenden Properties sind, soweit nicht anders angegeben, für Tesseract und für Abbyy wirksam.


### OCREngine

- Ab Version 5.0f
- Am Register, Mappentyp oder global
- Mit diesem Property kann das Tool angegeben werden mit dem OCR ausgeführt werden soll. Falls das gewünschte Tool nicht mit DOCUMENTS mitgeliefert wird, muss noch dafür gesorgt werden, dass der OCR Job das entsprechende Tool aufruft. Dazu muss ein Script in der Installation im Unterordner \server\scriptlibs vorhanden sein mit dem das entsprechende Tool aufgerufen wird. Für den Aufruf eignet sich die Funktion context.extProcess. Damit kann das Binary direkt oder auch z.B. ein Batch- oder Shell-Script aufgerufen werden. Im Script wird stehen verschiedene Ein- und Ausgabeparameter zur Verfügung.
param.inputFile - Eingabeparameter, enthält den Pfad auf das Dokument
param.docExt- Eingabeparameter, enthält die Dateiendung
param.languages - Eingabeparameter, enthält die Sprachen, d.h. den Inhalt des Properties OCRLanguages
param.textFormat - Eingabeparameter, enthält den Inhalt des Properties OCRTextFormat
param.outputFile - Ausgabeparameter, hier wird der Pfad auf die durch OCR erzeugte Datei angegeben
param.outputFileText- Ausgabeparameter, falls eine zusätzliche Textdatei erzeugt wurde (siehe param.textFormat und OCRTextFormat) muss hier der Pfad auf die entsprechende erzeugte Datei angegeben werden
- Mögliche Werte
Tesseract
Abbyy
ToolName - dann muss das Script den Namen otr<ToolName> haben


### OCR

- Ab Version 5.0e
- Am Register, Mappentyp oder global
- Wenn dieses Property gesetzt ist, wird nach dem Upload eines Dokuments im Hintergrund ein Job gestartet, der die Texterkennung durchführt. Der Job startet in der Regel spätestens eine Minute nach dem Upload.
- Defaultmäßig wird Tesseract verwendet. Für die Verwendung eines anderen Tools siehe OCREngine.
- Mögliche Werte
0 - default, es wird kein OCR durchgeführt
Dateiendung (für Tesseract: pdf, jpg, png, tiff) - OCR wird für die angegebenen Dateiformate durchgeführt. Das Ergebnis der Texterkennung ist immer ein PDF Dokument. Wenn das hochgeladene Dokument kein PDF ist, wird für das Ergebnis ein zusätzlicher Anhang im gleichen Register angelegt.


### OCROutputFormat (nicht bei Tesseract)

- Ab Version 5.0f
- Am Register, Mappentyp oder global
- Der durch OCR erkannte Text wird defaultmäßig in das PDF eingefügt. Optional kann aber auch ein Word Dokument (.docx) erstellt werden.
- Mögliche Werte
pdf: default, die erstellte Datei ist ein PDF mit Text
docx: es wird ein Word Dokument (.docx) erstellt


### OCRTextFormat

- Ab Version 5.0f
- Am Register, Mappentyp oder global
- Der durch OCR erkannte Text wird im Script Exit afterOcr im Parameter ocrText zur Verfügung gestellt.
- Mögliche Werte
Leerstring: default
txt: der erkannte Text wird als unveränderter Text zur Verfügung gestellt
alto: der erkannte Text wird im ALTO XML Format zur Verfügung gestellt
hocr: nur für Tesseract, der erkannte Text wird als hocr zur Verfügung gestellt


### OCRTextTarget

- Ab Version 5.0f
- Am Register, Mappentyp oder global
- Nur im Zusammenhang mit dem Property OCRTextFormat
- Falls OCRTextTarget einen gültigen Registernamen enthält, wird der mit OCR erkannte Text als zusätzliche Datei in das entsprechende Register hochgeladen. Falls OCRTextTarget keinen gültigen Registernamen aber einen Wert ungleich dem Leerstring enthält, wird der Text im Register des aktuellen Dokuments als Datei hochgeladen. Die Dateiendung hängt von OCRTextFormat ab.
- Mögliche Werte
Leerstring - default
Registername: der erkannte Text wird als Datei in das angegebene Register hochgeladen
Beliebiger Wert (ungleich Registernamen): der erkannte Text wird als Datei in das Register des aktuellen Dokuments hochgeladen


### OCRLanguages

- Ab Version 5.0e
- Global
- Die Sprache der Dokumente angeben. Es können mehrere Sprachen angegeben werden. Bei der Texterkennung werden die Sprachen in der angegebenen Reihenfolge angewendet, bis die passende Sprach erkannt wurde. Für deutsche Dokumente ist die Angabe der Sprache wichtig, damit Umlaute erkannt werden. Die Sprache muss passend zur OCREngine angegeben werden.
Tesseract verwendet 3-character ISO 639-2 language codes (Siehe Wikipedia). Mehrere Sprachen werden durch ein plus Zeichen (+) getrennt. Beispiel: deu+eng+nld+fra. Die Sprachen Deutsch, Englisch, Niederländisch und Französisch sind in der DOCUMENTS Installation enthalten. Weitere Sprachen können, wie in Tesseract Dokumentation zu Sprachen beschrieben, ergänzt werden. Die dort beschriebenen traineddata Dateien für die gewünschten Sprachen müssen dazu in das Unterverzeichnis der DOCUMENTS Installation ..\Documents5\addon\otrOcr\tesseract\tessdata kopiert werden.
Abbyy verwendet die in Abbyy Sprachen beschriebenen Sprachbezeichnungen. Mehrere Sprachen werden durch ein Leerzeichen getrennt. Beispiel German English Dutch French.
- Mögliche Werte
Sprache (Beispiel Tesseract: deu+eng+nld+fra, Beispiel Abbyy: German English Dutch French)


### OCRJpegQuality (nur Tesseract)

- Ab Version 5.0f
- Global
- Gilt nur für Tesseract.
- Mögliche Werte
Zahl: 1-100 - Bestimmt die Qualität der umgewandelten PDF-Dateien. Der Defaultwert ist 75, dieser Wert liefert in den meisten Fällen ein gutes Ergebnis.


### OCRDpi (nur Tesseract)

- Ab Version 5.0f
- Global
- Gilt nur für Tesseract.
- Mögliche Werte
Zahl: 100-1000 - Die DPI (Dots per inch), mit welcher die PDF-Dateien bei der Umwandlung gerastert werden. Der Defaultwert ist 300, dieser Wert liefert in den meisten Fällen ein gutes Ergebnis.


### OCRMinWordCount

- Ab Version 5.0f
- Global
- Falls OCR auf einem PDF durchgeführt werden soll wird zunächst geprüft, ob das Dokument bereits Text enthält. Dazu wird der Text aus dem Dokument extrahiert und es werden die Wörter gezählt. Wenn das Dokument mindestens fünf Wörter enthält, wird keine Texterkennung mehr durchgeführt. Die Anzahl der Wörter, die bestimmt, dass das Dokument schon ein Textdokument ist, kann mit diesem Property verändert werden.
- Mögliche Werte
Anzahl der Wörter, ab der angenommen wird, dass das Dokument bereits Text enthält.


### OCRForce

- Ab Version 5.0h HF2
- Global
- Falls OCR auf einem PDF durchgeführt werden soll, wird normalerweise zunächst geprüft, ob das Dokument bereits Text enthält (siehe Propery OCRMinWordCount). Diese Prüfung entfällt, wenn dieses Property auf 1 gesetzt ist. Die Texterkennung wird dann in jedem Fall durchgeführt.
- Mögliche Werte
0, 1


---


## PortalScripting


### Document.doOcr()

OCR wird unabhängig von den Properties auf dem entsprechenden Dokument ausgeführt. Defaultmäßig wird OCR direkt ausgeführt. Es gibt einen Parameter `background`, mit dem die Ausführung in einen Hintergrund verschoben werden kann (wie bei Verwendung des Properties OCR). Weiterhin gibt es einen Parameter `force`, der bewirkt, dass die Texterkennung auch dann durchgeführt wird, wenn das Dokument schon Text enthält. Außerdem gibt es zu den Properties OCRTextFormat und OCRTextTarget auch entsprechende Parameter.

Im Folgenden ist die Funktion mit Parametern dargestellt:


```javascript
boolean doOCR(String ocrOutputFormat, String ocrTextFormat = "", String ocrTextTarget = "", boolean background = false, boolean force = false);
```

boolean doOCR(String ocrOutputFormat, String ocrTextFormat = "", String ocrTextTarget = "", boolean background = false, boolean force = false);Ein einfaches Beispiel zeigt die Verwendung der Funktion. OCR wird hier direkt, d.h. nicht im Hintergrund ausgeführt (`background = false`). Bei großen Dokumenten kann dies eine Weile dauern. Falls das Dokument allerdings schon Text enthält, wird die Texterkennung nicht durchgeführt (`force = false`). Die weiteren Parameter sind in den Kommentaren des Beispiel Codes erklärt.


```javascript
var file = context.file;
var reg1 = file.getRegisterByName("RegisterA");
var offerDoc = reg1.getDocuments().first();
if (offerDoc) {
    try {
        // e.g. offerDoc.fullname = "offer.tif"
        var ocrText = offerDoc.doOCR("pdf", "txt", "RegisterA", false, false);
        util.out(ocrText);  // text content of offer.tif after OCR
        // now there are 3 documents at RegisterA
        // 1. offer.tif
        // 2. offer-ocr.pdf
        // 3. offer.txt
    } catch (ex) {
        util.out(ex);
    }
}
```

var file = context.file;
var reg1 = file.getRegisterByName("RegisterA");
var offerDoc = reg1.getDocuments().first();
if (offerDoc) {
    try {
        // e.g. offerDoc.fullname = "offer.tif"
        var ocrText = offerDoc.doOCR("pdf", "txt", "RegisterA", false, false);
        util.out(ocrText);  // text content of offer.tif after OCR
        // now there are 3 documents at RegisterA
        // 1. offer.tif
        // 2. offer-ocr.pdf
        // 3. offer.txt
    } catch (ex) {
        util.out(ex);
    }
}Für Details siehe:

[[Documents Drop SDK/Document#doOCR|Document.doOcr() in der API Dokumentation]]


### Document.extractText()


```javascript
String extractText(String options = "");
```

String extractText(String options = "");Gibt den Text eines Dokuments zurück (z.B. PDF). Ein entsprechendes Tool muss in der documents.ini in `$extracttext.pdf` angegeben werden. Ein Beispiel ist hier:

[[Documents Drop SDK/Document#extractText|Document.extractText() in der API Dokumentation]]


### Document.hasWords()


```javascript
Bool hasWords(minWords, version);
```

Bool hasWords(minWords, version);Prüft ob das Dokument bereits Text enthält und OCR somit nicht mehr notwendig ist.

[[Documents Drop SDK/Document#hasWords|Document.extractText() in der API Dokumentation]]


### Document.hasOcrFlag()


```javascript
Bool hasOcrFlag();
```

Bool hasOcrFlag();Wie oben beschrieben, wird die Texterkennung in der Regel in einem Hintergrund Job ausgeführt. Damit dieser Hintergrund Job weiß für welche Dokumente OCR ausgeführt werden soll, gibt es am Dokument ein OCR Flag. Mit dieser Funktion kann dieses Flag abgefragt werden.

[[Documents Drop SDK/Document#hasOcrFlag|Document.extractText() in der API Dokumentation]]


---


## Script Exit


### afterOcrScript

Das Script wird ausgeführt nachdem der OCR Job ausgeführt wurde. Und zwar in dem Fall in dem auch tatsächlich die Texterkennung durchgeführt wurde sowie in dem Fall in dem der Job keine Texterkennung durchgeführt hat, weil das Dokument bereits Text enthält. Die Beschreibung ist auch in der Script-Exit Dokumentation enthalten.

[Script Exit after OCR in der API Dokumentation](../../../api/portalscript/tutorial-scriptexits.html#after-ocr)


---


## Wartungsoperationen

Es gibt zwei Wartungsoperationen um nachträglich Texterkennung für bereits hochgeladene Dokumente durchzuführen. Mit der ersten Wartungsoperation (`setocrflag`) kann die Texterkennung in einem Job im Hintergrund gestartet werden. Mit der zweiten Wartungsoperation (`doocr`) kann die Texterkennung für ein Dokument direkt ausgeführt werden.

**Achtung** bei Verwendung von Abbyy. Obwohl OCR im Hintergrund ausgeführt wird, kann es während der Ausführung Einschränkungen bei der Verwendung von DOCUMENTS geben. Vor allem für mehrere Dokumente sollte der Aufruf daher z.B. am Wochenende gestartet werden.


```html
setocrflag [<file-id> | <filetype-name> | <document-id>]
```

setocrflag [<file-id> | <filetype-name> | <document-id>]Als Parameter kann eine Dokumenten-ID, eine Mappen-ID oder ein Mappentyp-Name angegeben werden. Kein Parameter bedeutet alle Dokumente. Diese Wartungsoperation startet für die angegebenen Dokumente den OCR Job wenn zusätzlich ein passendes OCR Property gesetzt ist. Im prinzip erzeugt diese Funktion das Verhalten das man erhält nachdem ein Dokument hochgeladen wurde. Es werden dabei nur Dokumente aus aktiven Mappen berücksichtigt. Die Wartungsoperation startet nur die Texterkennung und wird dann sofort wieder beendet. Fehler werden wie beim Dokumenten Upload im Status-Journal angegeben.


```html
doocr <document-id>
```

doocr <document-id>Hier wird die Texterkennung direkt auf dem angegebenen Dokument ausgeführt. Das OCR Property wird nicht berücksichtigt. Da die Texterkennung in der Regel mehr Zeit benötigt, kann hier maximal ein Dokument angegeben werden. Die Wartungsoperation wird erst beendet nachdem die Texterkennung vollständig durchgeführt wurde.


```html
Document-ID und File-ID
```

Document-ID und File-IDDie ID einer Mappe oder eines Dokuments erhält man über die URL im Browser. Wenn das gewünschte Element geöffnet ist, befindet sich die entsprechende ID am Ende der URL.