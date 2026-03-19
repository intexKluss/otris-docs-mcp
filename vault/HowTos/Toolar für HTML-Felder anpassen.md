---
title: "Allgemeines"
source: "https://otris.software/documents/howto/common/toolbar-html-fields.html"
---

# Allgemeines

Mappentypfelder vom Typ **HTML** ermöglichen die Eingabe und Speicherung von formatierten Texten und HTML-Inhalten. Im Bearbeitungsmodus einer Mappe wird für HTML-Felder standardmäßig ein integrierter WYSIWYG-Editor mit einer Toolbar bereitgestellt. Die Toolbar bietet diverse Formatierungsoptionen wie z. B. *Fett*, *Kursiv*, *Überschriften*, *Listen* und weitere typische Textformatierungen. Nutzer können somit den Inhalt des Feldes komfortabel bearbeiten und formatieren. Nach dem Speichern der Mappe wird der eingegebene Inhalt des HTML-Feldes als formatiertes HTML angezeigt. Die Toolbar ist im Ansichtsmodus nicht sichtbar - lediglich die fertige Formatierung des Textes ist erkennbar.

**Hinweise:** Bis einschließlich **Documents 5i HF4** bzw. **documentsOS 6.0.0** wurde standardmäßig die externe Bibliothek *CKEditor 4* als WYSIWYG-Editor verwendet. Da diese Bibliothek in der angegebenen Version nicht mehr weiterentwickelt wird und auch keine Sicherheitsupdates mehr erhält, wird ab **Documents 5i HF5** bzw. **documentsOS 6.0.1** standardmäßig die externe Bibliothek *Quill* als WYSIWYG-Editor verwendet. Ab **documentsOS 6.3.0** können mit der Toolbar des Editors (Quill) auch Tabellen erstellt und im HTML-Format gespeichert werden. Da sich HTML-Felder insbesondere zum Erfassen und Formatieren von Fließtexten sowie zur Darstellung einfacher HTML-Inhalte eignen, wird zur Speicherung tabellarischer Daten, die strukturiert verarbeitet werden sollen, die Verwendung der Gentable-Funktionalität empfohlen. Diese bietet eine gezielte und standardisierte Möglichkeit, Tabelleninhalte zu verwalten. Die Nutzung von HTML-Tabellen innerhalb eines HTML-Felds wird daher insbesondere im Hinblick auf die Weiterverarbeitung und Datenintegration nicht empfohlen. Ab **documentsOS 6.3.0** steht zusätzlich eine weitere Möglichkeit bereit, Texte im Bearbeitungsmodus zu formatieren und im Anzeigemodus als HTML zu rendern. In diesem Fall muss das Feld vom Typ **Text** sein und zusätzlich die Eigenschaft **alternativeRendering** mit dem Wert **markdown** bzw. einer **JSON-Konfiguration** verwendet werden. Für so konfigurierte Felder wird dann ebenfalls ein spezieller WYSIWYG-Editor bereitgestellt, alternativ dazu kann die Eingabe auch direkt in Markdown-Syntax erfolgen, weitere Hinweise siehe [Markdown Editor](../../manuals/books/alternative-rendering/markdown.html).

Dieses HowTo beschreibt, wie die Toolbar für den WYSIWYG-Editor (Quill) angepasst werden kann.


## Standard-Einstellungen

Ohne weitere Einstellungen stellt ein Feld vom Typ **HTML** im Bearbeitungsmodus der Mappe eine Toolbar mit folgenden Einstellungen bereit:


Abb. 1 - Standard Toolbar


## Änderung der Toolbar

Um Änderungen an der Toolbar vorzunehmen, muss die Eigenschaft **editorConfig** gesetzt werden, der Wert der Eigenschaft muss ein JSON-String sein.

**Hinweis:** Die Eigenschaft kann als *Documents-Eigenschaft* oder als *Eigenschaft am Feld* gesetzt werden. Als Documents-Eigenschaft gilt die Einstellung global für alle HTML-Felder aller Mappentypen, als Feldeigenschaft nur für das Feld des entsprechenden Mappentypen, diese Eigenschaft hat Vorrang gegenüber der Documents-Eigenschaft.

Der Standardwert (wenn keine Eigenschaft gesetzt ist) lautet:


```json
{
    "quill": {
        "theme": "snow",
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                ["link"],
                [{ "header": 1 }, { "header": 2 }],
                [{ "list": "ordered"}, { "list": "bullet" }, { "list": "check" }],
                [{ "script": "sub"}, { "script": "super" }],
                [{ "indent": "-1"}, { "indent": "+1" }],
                [{ "header": [1, 2, 3, 4, 5, 6, false] }],
                [{ "color": [] }, { "background": [] }],
                [{ "align": [] }],
                ["clean"]
            ]
        }
    }
}
```

{
    "quill": {
        "theme": "snow",
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                ["link"],
                [{ "header": 1 }, { "header": 2 }],
                [{ "list": "ordered"}, { "list": "bullet" }, { "list": "check" }],
                [{ "script": "sub"}, { "script": "super" }],
                [{ "indent": "-1"}, { "indent": "+1" }],
                [{ "header": [1, 2, 3, 4, 5, 6, false] }],
                [{ "color": [] }, { "background": [] }],
                [{ "align": [] }],
                ["clean"]
            ]
        }
    }
}
### Beispiel 1: Entfernen von Standard-Toolbar Einstellungen

Sollen z.B. nur Toolbar Einstellungen für *fett*, *kursiv*, *unterstrichen* sowie *Überschrift1* und *Überschrift2* ermöglicht werden, kann die Eigenschaft *editorConfig* mit folgendem Wert angegeben werden:


```json
{
    "quill": {
        "theme": "snow",
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline"],
                [{ "header": 1 }, { "header": 2 }],
            ]
        }
    }
}
```

{
    "quill": {
        "theme": "snow",
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline"],
                [{ "header": 1 }, { "header": 2 }],
            ]
        }
    }
}In diesem Beispiel wäre die Ansicht im Bearbeitungsmodus wie folgt:


Abb. 2 - Angepasste Toolbar 1 (Nur bestimmte Toolbar Schalter)


### Beispiel 2: Andern von Reihenfolgen der Toolbar Schalter

Soll die Reihenfolge der Toolbar Schalter aus Beispiel 1 geändert werden, müssen lediglich die jeweiligen Arrays verändert werden:


```json
{
    "quill": {
        "theme": "snow",
        "modules": {
            "toolbar": [
                [{ "header": 1 }, { "header": 2 }],
                ["bold", "italic", "underline"]
            ]
        }
    }
}
```

{
    "quill": {
        "theme": "snow",
        "modules": {
            "toolbar": [
                [{ "header": 1 }, { "header": 2 }],
                ["bold", "italic", "underline"]
            ]
        }
    }
}In diesem Beispiel wäre die Ansicht im Bearbeitungsmodus wie folgt:


Abb. 3 - Angepasste Toolbar 2 (Reihenfolge geändert)


### Beispiel 3: Tabellen als Toolbar-Schalter ermöglichen

Ab **documentsOS 6.3.0** können auch Tabellen über die Toolbar ermöglicht werden. In diesem Fall muss dies in der *editorConfig* explizit angegeben werden:


```json
{
    "quill": {
        "quillTable": true
    }
}
```

{
    "quill": {
        "quillTable": true
    }
}In diesem Beispiel wäre die Ansicht im Bearbeitungsmodus wie folgt (Schalter für Tabelle ist im Screenshot rot markiert):


Abb. 4 - Zusatzschalter für Tabellen in der Toolbar

Wird auf den entsprechenden Toolbar Schalter geklickt, kann die Tabelle mit einer Voreinstellung von Spalten und Zeilen gezeichnet werden:


Abb. 5 - Tabelle zeichnen

Wurde die Tabelle eingefügt, wird für die Tabelle standardmäßig eine weitere Toolbar mit weiteren Einstellungen bereitgestellt (im Screenshot rot markiert):


Abb. 6 - Zusätzliche Tabellenaktionen

Diese zusätzliche Toolbar ermöglicht u.a. das Einfügen, Löschen und auswählen von Spalten und Zeilen, das Trennen und Zusammenführen von Zeilen sowie besondere Einstellungen für Zellen (Rahmen, Farben, Background, Höhe, Breite und Textausrichtung) und weitere Aktionen.

Wurden Tabellen mit der o.a. Einstellung ermöglicht (quilltable = true), wird die Tabellenfunktionalität grundsätzlich bereitgestellt, zusätzliche Anpassungen, z.B. zur Einschränkung der *zusätzlichen Tabellenaktionen* sind dann allerdings nicht möglich. Im nächsten Beispiel wird dargestellt, wie weitere Einstellungen vorgenommen werden können.


### Beispiel 4: Zusätzliche Tabellen-Einstellungen bereitstellen

Statt der im vorherigen Beispiel dargestellten grundsätzlichen Tabellenfunktionalität (quilltable = true) können weitere Einstellungen vorgenommen werden, folgende Konfiguration stellt das dar:


```json
{
    "quill": {
        "theme": "snow",
        "quillTable": true,
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                ["link"],
                [{ "header": 1 }, { "header": 2 }],
                [{ "list": "ordered"}, { "list": "bullet" }, { "list": "check" }, "table-better"],
                [{ "script": "sub"}, { "script": "super" }],
                [{ "indent": "-1"}, { "indent": "+1" }],
                [{ "header": [1, 2, 3, 4, 5, 6, false] }],
                [{ "color": [] }, { "background": [] }],
                [{ "align": [] }],
                ["clean"]
            ],
            "table-better": {
                "language": "en_US",
                "menus": ["column", "row", "merge", "table", "cell", "wrap", "copy", "delete"],
                "toolbarButtons": {
                    "whiteList": [ "bold", "italic", "underline", "strike", "size", "color", "background", "font", "list", "header", "align", "link"],
                    "singleWhiteList": ["link"]
                },
                "toolbarTable": true
            }
        }
    }
}
```

{
    "quill": {
        "theme": "snow",
        "quillTable": true,
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                ["link"],
                [{ "header": 1 }, { "header": 2 }],
                [{ "list": "ordered"}, { "list": "bullet" }, { "list": "check" }, "table-better"],
                [{ "script": "sub"}, { "script": "super" }],
                [{ "indent": "-1"}, { "indent": "+1" }],
                [{ "header": [1, 2, 3, 4, 5, 6, false] }],
                [{ "color": [] }, { "background": [] }],
                [{ "align": [] }],
                ["clean"]
            ],
            "table-better": {
                "language": "en_US",
                "menus": ["column", "row", "merge", "table", "cell", "wrap", "copy", "delete"],
                "toolbarButtons": {
                    "whiteList": [ "bold", "italic", "underline", "strike", "size", "color", "background", "font", "list", "header", "align", "link"],
                    "singleWhiteList": ["link"]
                },
                "toolbarTable": true
            }
        }
    }
}**Erläuterungen:**

- An einer dafür vorgesehenen Stelle (im Beispiel nach list: check) wird die Zusatzkomponente table-better bereitgestellt
- Für diese Zusatzkomponente können nun weitere Einstellungen vorgenommen werden, z.B.:
Über menus können die Tabellen-Aktionen, die in dem separaten Menü möglich sind, wenn eine oder mehrere Zellen ausgewählt wurden, angepasst werden
Über whitelist können Standard Toolbar-Aktionen (von Quill, nicht von der Tabellen-Komponente) definiert werden, wenn eine oder mehrere Zellen ausgewählt sind
Über singleWhiteList können die in whitelist angegebenen Aktionen definiert werden, die nicht möglich sein sollen, wenn mehr als eine Zelle ausgewählt ist
Über toolbarTable: true wird angegeben, das über den Tabellen-Schalter in der Quill-Toolbar Tabellen gezeichnet werden können

Im dargestellten Beispiel Beispiel wird somit definiert, dass

- menu: alle zusätzlichen Tabellenaktionen möglich sein sollen (z.B. Spalten, Zeilen, Tabelleneigenschaften, Kopieren, Löschen, usw.), diese Einstellungen könnten durch die Entfernung von Einträgen eingeschränkt werden
- toolbarButtons - whiteList: die Standard Toolbar-Aktionen (z.B. fett, kursiv, unterstrichen, usw.) möglich sein sollen, wenn eine oder mehrere Zellen ausgewählt sind, diese Einstellungen könnten durch die Entfernung von Einträgen eingeschränkt werden
- toolbarButtons - singleWhiteList: die Standard Toolbar-Aktion link nicht möglich sein soll, wenn mehrere Zellen in der Tabelle ausgewählt sind


## Zusätzliche Informationen

Wenn die Eigenschaft (global oder Mappentyp) **sendEmailAsHTML***true oder 1* gesetzt ist, wird beim Dialog *Mappe als E-Mail versenden* anstatt eines Textfeldes zum Bearbeiten des Emailtextes ein HTML-Feld angezeigt. Für dieses HTML-Feld kann dann ebenfalls die Toolbar angepasst werden. Ein Beispiel ist im entsprechenden HowTo zu finden [Mappe als E-Mail versenden](../email/send-file-as-email.html#fileemail-beforeopen).

Bei der Verwendung von Form-Gadgets können ebenfalls HTML-Felder verwendet werden. Werden mit *formGadget.addHtmlField()* HTML-Felder hinzugefügt, wird für dieses Feld die Standard-Toolbar dargestellt. Durch die Definition einer eigenen *editorConfig* ist es auch hier, diese Toolbar anzupassen, Beispiel:


```javascript
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const myDefaultValue = '<p style="text-align: center;"><strong style="color: rgb(136, 136, 136);">Please use the toolbar to format the HTML content.</strong></p>';
const myEditorConfig = {
    quill: {
        "quillTable": true,
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline"],
                [{ "list": "ordered"}, { "list": "bullet" }, { "list": "check" }, "table-better"],
                [{ "color": [] }, { "background": [] }],
            ],
            "table-better": {
                "language": "en_US",
                "menus": ["column", "row", "merge", "table", "cell", "wrap", "copy", "delete"],
                "toolbarButtons": {
                    "whiteList": [ "bold", "italic", "underline","color", "background","list"],
                },
                "toolbarTable": true
            }
        }
    }
};
gadgetAPI.registerGadgetAction("showFormGadget", function (gadgetContext) {
    const formGadget = gadgetAPI.getFormInstance();
    formGadget.addHtmlField('myHtmlField', 'My html field', myDefaultValue, myEditorConfig);
    formGadget.setTitle('Gadget with HTML field and customized editorConfig');
    return formGadget;
});
context.returnValue = gadgetAPI.transfer();
```

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const myDefaultValue = '<p style="text-align: center;"><strong style="color: rgb(136, 136, 136);">Please use the toolbar to format the HTML content.</strong></p>';
const myEditorConfig = {
    quill: {
        "quillTable": true,
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline"],
                [{ "list": "ordered"}, { "list": "bullet" }, { "list": "check" }, "table-better"],
                [{ "color": [] }, { "background": [] }],
            ],
            "table-better": {
                "language": "en_US",
                "menus": ["column", "row", "merge", "table", "cell", "wrap", "copy", "delete"],
                "toolbarButtons": {
                    "whiteList": [ "bold", "italic", "underline","color", "background","list"],
                },
                "toolbarTable": true
            }
        }
    }
};
gadgetAPI.registerGadgetAction("showFormGadget", function (gadgetContext) {
    const formGadget = gadgetAPI.getFormInstance();
    formGadget.addHtmlField('myHtmlField', 'My html field', myDefaultValue, myEditorConfig);
    formGadget.setTitle('Gadget with HTML field and customized editorConfig');
    return formGadget;
});
context.returnValue = gadgetAPI.transfer();Im Beispiel würde die Toolbar für das Gadget HTML-Feld wie folgt aussehen:


Abb. 7 - Gadget mit HTML-Feld und angepasster Toolbar