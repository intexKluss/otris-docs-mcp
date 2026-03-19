---
title: "PDFjs Viewer"
source: "https://otris.software/documents/howto/files/pdfjs.html"
---

# PDFjs Viewer

| Version | PDFjs Version | PdfJS Version Internet Explorer |
| --- | --- | --- |
| 5.0b | 1.6.210 | 1.6.210 |
| 5.0c | 1.6.210 | 1.6.210 |
| 5.0d | 1.10.88 | 1.10.88 |
| 5.0e | 1.10.110 | 1.10.110 |
| 5.0f | 1.10.110 | 1.10.110 |
| 5.0g | 2.6.347 | 2.5.207 |
| 5.0h | 2.10.377 | 2.5.207 |
| 5.0i | 3.0.279 | 2.5.207 |
| 5.0i HF1 | 3.6.172 | 2.5.207 |
| 5.0i HF5 | 4.2.67 / 3.6.172 | 2.5.207 |
| 5.0i HF7 | 4.4.168 / 3.6.172 | 2.5.207 |
| 6.0 | 4.0.189 / 3.6.172 | entfällt |
| 6.0.1 | 4.3.136 / 3.6.172 | entfällt |
| 6.1.0 | 4.8.69 / 3.6.172 | entfällt |
| 6.2.0 | 5.4.394 / 3.6.172 | entfällt |

Mozilla hat mit der Version 2.6.347 die Unterstützung des Internet Explorers
eingestellt ([https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-support](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-support)). Diese Version enthält
einen Bug, welcher dafür sorgt, dass einige PDFs nicht korrekt angezeigt werden bzw. Buchstaben/Zeichen fehlen. Für den
Internet Explorer wird daher die vorherige Version 2.5.207 ausgeliefert, weitere Updates wird es nur geben, falls
Mozilla den genannten Bug fixt.

Mit kommenden Documents Versionen kann es dazu kommen, dass einzelne Features im Internet Explorer nicht verfügbar sein
werden. Dies beschränkt sich, soweit möglich, auf neue Features. Alle bestehenden Features werden weiterhin unterstützt.
Mit der Documents Version 5.0g (2300) werden alle von uns entwickelten Features unterstützt.

Mit Documents Version 5.0h (2310) werden keine neuen Features mehr für den Internet Explorer eingebaut oder erweitert.
Dies betrifft unter anderem die Erweiterungen zu den erweiterten Konfigurationsmöglichkeiten durch die Eigenschaft
pdfjsViewerConfig.

Mit DocumentsOS (6.0) wird die PDF.js Version für den Internet Explorer komplett entfernt.

Durch Änderungen im PDF.js kann es vereinzelt bei Versionen nach 3.6.172 dazu kommen, dass PDFs nicht korrekt angezeigt
werden, wenn die genutzten Schriftarten nicht eingebettet sind. Für diese Fälle gibt es die Möglichkeit die PDF.js
Version über die `clientLibConfiguration` auf die Version 3.6.172 zu setzen.


## Neuerungen mit Version 5.0h

- Erweiterte Konfigurationsmöglichkeiten
- Die Eigenschaften pdfjsViewerButtonDownload und pdfjsViewerButtonPrint wurden aus dem HowTo entfernt. Die Eigenschaften können weiterhin genutzt werden, sollten aber, wenn möglich, durch die entsprechende Einstellung in pdfjsViewerConfig ersetzt werden.


## Neuerungen mit Version 5.0g

- OCR Modus
- Annotationen drucken
- Erweiterte Konfigurationsmöglichkeiten


## Eigenschaften für den PDFjs Viewer


### pdfjsViewerSkin (ab 5.0f, Änderung in 5.0g)

Ändert den Skin des PDFjs Viewers. Benutzerdefinierte Skins können über
den [externen Kontext](../exit/externalResources.html) unter `/css/lib/pdfjs/[pdfjsVersion]/` (5.0f)
oder `/css/lib/pdfjs/customSkins/` (ab 5.0g) eingebunden werden. Die .css Dateien müssen dabei dem
Namensschema `viewer_[skinName].css` folgen, wobei `skinName` dem Wert der Eigenschaft entspricht.

Der Skin `lightgray` wird mit ausgeliefert und ist für alle Browser außer dem Internet Explorer verfügbar.


### pdfjsAllowAutoSearch (ab 5.0f)

Default: `false`
Mögliche Werte: `true`, `false`

Schaltet die automatische Suche von Feldwerten im Pdfjs Viewer global an. Dies kann durch einen Button im Pdfjs Viewer
vom Benutzer aktiviert/deaktiviert werden. Das Feature muss für jedes Feld über die Eigenschaft `pdfjsAutoSearch` oder
für alle Felder über die Eigenschaft `pdfjsAutoSearchAllFields` zusätzlich aktiviert werden.

Die automatische Suche kann nur im DoubleView verwendet werden.


### pdfjsAutoSearchAllFields (ab 5.0f)

Default: `false`
Mögliche Werte: `true`, `false`

Aktiviert die automatische Suche von Feldwerten im Pdfjs für alle Felder. Es muss zusätzlich die globale
Eigenschaft `pdfjsAllowAutoSearch` aktiviert sein.

Bei einem Klick auf dem Feld wird der aktuelle Feldwert als Suche an den PDF.js übergeben und sofern das PDF
durchsuchbar ist markiert. Über die Feldeigenschaft `pdfjsAutoSearch` können einzelne Felder wieder deaktiviert werden.


### pdfjsAutoSearch (ab 5.0f)

Default: `false`
Mögliche Werte: `true`, `false`, `[Funktionsname]`

Aktiviert die automatische Suche von Feldwerten im Pdfjs für das Feld. Es muss zusätzlich die globale
Eigenschaft `pdfjsAllowAutoSearch` aktiviert sein.

Bei einem Klick auf dem Feld wird der aktuelle Feldwert als Suche an den PDF.js übergeben und sofern das PDF
durchsuchbar ist markiert. Über den Wert `Funktionsname` kann eine Funktion angegeben werden, die über den
ClientHeaderCode eingebunden wurde. Diese wird mit dem Feldwert als Argument aufgerufen und gibt den Returnwert an den
PDF.js als Suche weiter, wodurch die Feldwerte vorab formatiert werden können.

Aktuell unterstützte Feldtypen sind: String, Text, Datum, Numerisch, Referenz, Text (Fixed Font), E-Mail, Url,
Zeitstempel)


### pdfjsInstantAutoSearch (ab 5.0f)

Default: `false`
Mögliche Werte: `true`, `false`

Aktiviert die direkte automatische Suche von Feldwerten im Pdfjs. Wenn das Feature aktiviert ist (`pdfjsAllowAutoSearch`
und entweder `pdfjsAutoSearchAllFields` oder `pdfjsAutoSearch`) wird die Suche direkt bei der Eingabe in das Feld
durchgeführt. Die Suche wird dabei erst ab dem dritten Zeichen gestartet.


### pdfjsViewerHideToolbar (ab 5.0f)

Default: `false`
Mögliche Werte: `true`, `false`

Ermöglicht es die Toolbar im PDF.js Viewer auszublenden, sodass diese nur angezeigt wird, wenn sich der Mauszeiger am
oberen Rand des PDFs befindet.


### pdfjsViewerConfig (ab 5.0g)

Über die Eigenschaft `pdfjsViewerConfig` (global oder für einen Mappetyp) kann ein JSON Objekt zur Konfiguration des
PDFjs Viewers angegeben werden.

| Feature | Version | Hinweise |
| --- | --- | --- |
| Buttons ein/ausblenden | 5.0g |  |
| Settings - sidebarViewOnLoad | 5.0h |  |
| Settings - printResolution | 5.0h |  |
| Buttons - editorFreeText | 5.0i | Erlaubt Änderungen am PDF im Viewer, diese sind nicht persistent und werden im Documents auch nicht gespeichert. Wir empfehlen daher diese Buttons dauerhaft deaktiviert zu lassen. |
| Buttons - editorInk | 5.0i | Erlaubt Änderungen am PDF im Viewer, diese sind nicht persistent und werden im Documents auch nicht gespeichert. Wir empfehlen daher diese Buttons dauerhaft deaktiviert zu lassen. |

Beispiel JSON mit den Default-Werten. Es muss nicht jeder Eintrag übernommen werden, fehlende Einträge werden mit den
Default-Werten belegt.


```json
{
    "buttons": {
        "presentationMode": true,
        "openFile": false,
        "print": true,
        "download": true,
        "bookmark": false,
        "firstPage": true,
        "lastPage": true,
        "rotateCw": true,
        "rotateCcw": true,
        "selectTool": true,
        "handTool": true,
        "scrollVertical": false,
        "scrollHorizontal": false,
        "scrollWrapped": false,
        "spreadNone": false,
        "spreadOdd": false,
        "spreadEven": false,
        "documentProperties": true,
        "editorFreeText": false,
        "editorInk": false
    },
    "settings": {
        "sidebarViewOnLoad": -1,
        "printResolution": 150
  }
}
```

{
    "buttons": {
        "presentationMode": true,
        "openFile": false,
        "print": true,
        "download": true,
        "bookmark": false,
        "firstPage": true,
        "lastPage": true,
        "rotateCw": true,
        "rotateCcw": true,
        "selectTool": true,
        "handTool": true,
        "scrollVertical": false,
        "scrollHorizontal": false,
        "scrollWrapped": false,
        "spreadNone": false,
        "spreadOdd": false,
        "spreadEven": false,
        "documentProperties": true,
        "editorFreeText": false,
        "editorInk": false
    },
    "settings": {
        "sidebarViewOnLoad": -1,
        "printResolution": 150
  }
}Die Buttons im folgenden Screenshot sind in derselben Reihenfolge wie in der Beispielkonfiguration. Zur
Veranschaulichung sind alle Buttons eingeblendet. Buttons, welche durch Features wie z.B. Annotationen hinzugefügt
werden können über die Eigenschaft nicht ausgeblendet werden.


Die Buttons zum Drucken (print) und Herunterladen (download) können auch über die Eigenschaften `pdfjsViewerButtonPrint`
und `pdfjsViewerButtonDownload` gesteuert werden. Die Eigenschaft `pdfjsViewerConfig` überschreibt die genannten
Eigenschaften wenn 'print' oder 'download' gesetzt werden.


#### Settings

| Einstellung | Version | Mögliche Werte | Default | Erklärung |
| --- | --- | --- | --- | --- |
| sidebarViewOnLoad | 5.0h | -1, 0, 1, 2, 3 | -1 | Regelt die initiale Sichtbarkeit der linken Sidebar. -1: Default, abhängig vom Dokument 0: Sidebar wird nie automatisch eingeblendet 1: Sidebar zeigt Vorschau der PDF Seiten 2: Sidebar zeigt, sofern Verfügbar, Dokumentenstruktur 3: Sidebar zeigt, sofern Verfügbar, Anhänge am PDF |
| printResolution | 5.0h | Number | 150 | Regelt die DPI beim Drucken eines PDFs. Höhere Werte verbessern die Druckqualität, allerdings verlangsamt es auch das Drucken und beeinträchtigt unter Umständen temporär den Browser |


## Notizen, Markierungen und Stempel

In Documents5 ist es möglich auf PDF-Dateien Notizen, Markierungen und Stempel aufzubringen. Dies wird über die globale
Property `viewerAnnotationMode` gesteuert. Die aufgebrachten Notizen sind nur im Web-Client sichtbar und können nicht
gedruckt werden. Mögliche Werte sind:

- rw - Notizen, Markierungen und Stempel können gelesen und verändert werden (default)
- r - Notizen, Markierungen und Stempel können gelesen aber nicht verändert werden
- off - Notizen, Markierungen und Stempel sind nicht sichtbar


### Für alle Typen gültige Eigenschaften


#### viewerAnnotationConfig

- Ab Version 5.0a
- global
- Aktiviert einen Menüpunkt, über den die Standardkonfiguration von Notizen, Markierungen und Stempeln geändert werden kann
- Mögliche Werte: true, false


Abb. 1 - Notiz mit ViewerAnnoTrans = 50


#### positionAnnotationOnClick

- Ab Version 5.0c
- global
- Ermöglicht es Notizen, Markierungen oder Stempel direkt an die gewünschte Position im PDF aufzubringen
- Mögliche Werte:
true - Ein Klick auf das PDF erzeugt die Annotation an der geklickten Stelle.
false - Die Annotation wird in der oberen linken Ecke des PDFs platziert.


#### annotationbuttonPrimaryToolbar

- Ab Version 5.0c
- global
- Zeigt die Buttons zum erzeugen von Notizen, Markierungen und Stempeln zusätzlich in der primären Toolbar des PDF-Viewers an
- Mögliche Werte:
true - Buttons zur Anlage von Notizen, Markierungen und Stempeln sind sowohl in der primären Toolbar als auch in der Klappliste verfügbar. Die Stempelauswahl ist weiterhin nur in der Klappliste möglich.
false - Buttons zur Anlage von Notizen, Markierungen und Stempeln sind nur in der Klappliste verfügbar.


#### ViewerAnnoTrans

- Ab Version 5.0c HF1
- global
- Steuert die Transparenz von Notizen
- Mögliche Werte zwischen 0 und 100


Abb. 2 - Notiz mit ViewerAnnoTrans = 50


#### multipleAnnotations

- Ab Version 5.0c HF1
- global
- Nur in Kombination mit 'positionAnnotationOnClick' true
- Erlaubt es mehrere Notizen, Markierungen oder Stempel nacheinander auf das PDF aufzubringen
- Mögliche Werte:
true - Jeder Klick auf das PDF erzeugt eine neue Annotation des gewählten Typs.
false - Nach jeder Annotation ist ein erneutes auswählen des Annotationstyps notwendig


Abb. 3 - Toolbar mit aktivierter Notiz


#### pdfjsPrintAnnotations

- Ab Version 5.0g
- global oder Featuremanager
- Aktiviert einen Schalter im PDFjs Viewer, über den das Drucken von Annotationen für den jeweiligen Nutzer aktiviert werden kann.


### Nur für Stempel gültige Eigenschaften


#### stamp

- Ab Version 5.0a
- Eigenschaft am Mappentyp
- Erzeugt einen einfachen Stempel
- Mögliche Werte: Der Text, welcher für den Stempel benutzt werden soll


#### advancedStamp

- Ab Version 5.0a
- Eigenschaft am Mappentyp
- Erzeugt einen über ein Skript definierten Stempel
- Mögliche Werte: true, false


### Besonderheiten der einzelnen Typen


#### Notizen

Notizen lassen sich einzeln bearbeiten. Durch einen Doppelklick auf die Notiz öffnet sich ein Dialog, in dem
verschiedene Eigenschaften der Notiz verändert werden können.


Abb. 4 - Dialog zum Bearbeiten einer Notiz


#### Stempel

Stempel sind vordefinierte Notizen und können vom Benutzer nicht weiter bearbeitet werden. Die Stempeldefinition kann
dabei auf folgenden Wegen erfolgen:

- Eigenschaft stamp, der gesetzte Wert entspricht dem Stempeltext.
- Eigenschaft advancedStamp, über das Skript getStamp wird die Stempeldefinition erzeugt.

Es ist möglich beide Eigenschaften zeitgleich für eine Mappe zu verwenden, der unter `stamp` definierte Stempel wird
dann in die Auswahlliste der über `advancedStamp` definierten Stempel integriert. Der Stempeltext entspricht dann dem
Bezeichner, unter dem dieser zu finden ist.


Abb. 5 - Auswahlliste für Stempel mit 'stamp' = Stempeltext... und dem getStamp Beispielskript


#### Das getStamp Skript

Das getStamp Skript muss einen String mit einer XML-Struktur zurückgeben. Diese ist wie folgt aufgebaut:

- <stamps>...</stamps> umschließendes Tag
- <stamp name="" width="" height="" opacity="">Stempeltext</stamp> Tag für einen Stempel

Die Parameter im `<stamp>` Tag:

- name - der Name, unter dem der Stempel ausgewählt werden kann (nicht optional, muss eindeutig sein)
- width - die initiale Breite des Stempels, die Angabe erfolgt in Pixel (optional, default = 200)
- height - die initiale Höhe des Stempels, die Angabe erfolgt in Pixel (optional, default = 100)
- opacity - die Transparenz des Stempels, mögliche Werte liegen zwischen 0 und 100 (optional, default = 100)

Der Wert innerhalb des Tags entspricht dem Text, der später im Stempel zu sehen ist. Über den Platzhalter `${...}$` kann
ein Datum eingefügt werden. Die Formatierung muss dem Java SimpleDateFormat entsprechen.


#### Beispielskript


```javascript
/* Stempeldefinitionen */
function getStamp() {
  var xml = "<stamps>";
  xml += '<stamp name="otris" width="50" height="100" opacity="50">otris software AG</stamp>';
  xml += '<stamp name="Erledigt">Erledigt ${dd.MM.yyyy}$ Hurra</stamp>';
  xml += '<stamp name="Eingang">Eingang ${dd.MM.yyyy}$</stamp>';
  xml += '</stamps>';
  return xml;
}

return getStamp();
```

/* Stempeldefinitionen */
function getStamp() {
  var xml = "<stamps>";
  xml += '<stamp name="otris" width="50" height="100" opacity="50">otris software AG</stamp>';
  xml += '<stamp name="Erledigt">Erledigt ${dd.MM.yyyy}$ Hurra</stamp>';
  xml += '<stamp name="Eingang">Eingang ${dd.MM.yyyy}$</stamp>';
  xml += '</stamps>';
  return xml;
}

return getStamp();