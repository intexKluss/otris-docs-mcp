---
title: "OCR Modus"
source: "https://otris.software/documents/manuals/books/textraction-ocr/OcrMode.html"
---

# OCR Modus

Dieses Feature ist verfügbar ab DOCUMENTS 5.0g.

Mit dem OCR Modus können Ausschnitte aus PDF Dateien ausgeschnitten und an ein Texterkennungstool weitergegeben werden. Die generierten Texte können anschließend in Mappenfelder, Gentable-Zellen oder die Zwischenablage eingefügt werden.

Der OCR Modus kann über die Eigenschaft `ocrClientConfig` freigeschaltet und konfiguriert werden. Wenn der OCR Modus freigeschaltet ist, erscheint in der Toolbar über der Mappe ein weiterer Button, über den der OCR Modus für die aktuelle Mappe aktiviert werden kann.


## Voraussetzungen

- In der viewer-config.xml muss der PdfJSViewer als Viewer für PDF Dateien eingestellt sein, der NativePdfViewer kann nicht verwendet werden.


## ocrClientConfig

Beispielkonfiguration:


```json
{
  "mode":"file|clipboard|script",
  "scriptName":"...",               //optional
  "alwaysEnabled": true|false       //optional
}
```

{
  "mode":"file|clipboard|script",
  "scriptName":"...",               //optional
  "alwaysEnabled": true|false       //optional
}Wenn die Eigenschaft mit dem Wert `true` gesetzt wurde, wird die folgende Konfiguration genutzt:


```json
{
  "mode":"file"
}
```

{
  "mode":"file"
}- mode

| mode | Funktion |
| --- | --- |
| file | Zuerst muss ein Klick in ein Mappenfeld oder eine Gentable Zelle ausgeführt werden. Das Feld oder die Zelle werden dann umrandet. Anschließend wird ein Rahmen auf dem PDF gezeichnet. Der Inhalt des Ausschnittes wird an das Texterkennungstool weitergegeben und der zurückgegebene Text wird in das Feld oder die Gentable Zelle eingefügt. Der Text wird nicht an bestehende Inhalte angehängt, der Feldinhalt wird überschrieben. |
| clipboard | Es wird ein Rahmen auf dem PDF gezogen. Der Inhalt des Ausschnittes wird an das Texterkennungstool weitergegeben und der zurückgegebene Text wird in die Zwischenablage kopiert. |
| script | Es wird ein Rahmen auf dem PDF gezogen. Der Inhalt des Ausschnittes wird an das Texterkennungstool weitergegeben und der zurückgegebene Text wird an das in scriptName definierte Portalscript weitergegeben. |

- scriptName

Der Name eines Portalscripts, in dem der vom Texterkennungstool zurückgegebene Text bearbeitet werden kann. Für den `"mode":"script"` muss der Parameter gesetzt sein, für `"mode":"file"` und `"mode":"clipboard"` ist er optional.

Im Skript stehen folgende Parameter zur Verfügung:

- ocrResult
Das Ergebnis des OCR-Scans
- fileId
Die ID der gerade geöffneten Mappe
- registerId
Die ID des geöffneten Registers
- mode
Der in der Konfiguration festgelegte Modus

Im `"mode":"script"` wird der `returnType` des Skripts ausgewertet, im `"mode":"file"` und `"mode":"clipboard"` wird der Rückgabewert des Skripts entweder in das Mappenfeld/die Gentable Zelle eingefügt oder in die Zwischenablage kopiert.

- alwaysEnabled

Der Parameter `alwaysEnabled` sorgt im `"mode":"clipboard"` dafür, dass der OCR Modus dauerhaft aktiviert ist. Der Button zum Aktivieren/deaktivieren ist dann nicht vorhanden.