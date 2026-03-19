---
title: "Tastaturkürzel in Documents konfigurieren"
source: "https://otris.software/documents/howto/common/shortcuts.html"
---

# Tastaturkürzel in Documents konfigurieren

**Since**: `5.0f`

Über den Documents-Manager lassen sich Tastaturkürzel konfigurieren.

Die Tastaturkürzel-Konfigurationen werden als globale-Eigenschaft hinterlegt. Für jeden Benutzer lässt sich anschließend angeben, welche Konfigurationen verwendet werden sollen.


## Anlegen einer Tastaturkürzel-Konfiguration

Es wird eine neue globale Eigenschaft vom Typ `shortcutConfig` angelegt.


Abb. 1 - Globale Eigenschaften

Der Name der Eigenschaft ist frei wählbar. Wird als Name `DefaultShortcutDefinition` gewählt, werden die eingestellten Tastaturkürzel automatisch für jeden Benutzer verwendet.


Abb. 2 - Globale Eigenschaft hinzufügen

Anschließend können Tastaturkürzeldefinitionen angelegt werden. Diese werden durch Zeilenumbrüche getrennt und besitzen folgende Struktur:

`Technischer-Name` = `Taste1` + `Taste2` ...

Zum Beispiel:


```javascript
OUTBAR_NEXT = STRG + ALT + BILD_OBEN
OUTBAR_PREVIOUS = CTRL + ALT + BILD_UNTEN
```

OUTBAR_NEXT = STRG + ALT + BILD_OBEN
OUTBAR_PREVIOUS = CTRL + ALT + BILD_UNTENEs lässt sich immer nur eine einzelne Taste alleine oder zusammen mit einer beliebigen Kombination der Tasten `STRG`, `ALT` und `SHIFT` verwenden.

Folgendes Tastaturkürzel ist dementsprechend nicht zulässig:


```javascript
OUTBAR_NEXT = BILD_OBEN + b
// nicht zulässig, da zwei Tasten verwendet werden die nicht Shift, Alt oder Strg sind.
```

OUTBAR_NEXT = BILD_OBEN + b
// nicht zulässig, da zwei Tasten verwendet werden die nicht Shift, Alt oder Strg sind.Es ist ebenfalls möglich ein Tastaturkürzel komplett zu deaktivieren. Hierzu kann dieses auf `INACTIVE` gesetzt werden.


```javascript
OUTBAR_NEXT = INACTIVE
```

OUTBAR_NEXT = INACTIVE
## Tastaturkürzel-Konfiguration am Benutzer hinterlegen

Alle Tastaturkürzel die nicht in `DefaultShortcutDefinition` konfiguriert sind, müssen zu erst an einem Benutzer hinterlegt werden. Hierzu muss eine oder mehrere Tastaturkürzel-Konfigurationen entsprechend der vorangegangenden Anleitung erzeugt werden oder bestehende Konfiguration verwendet werden.

Die Konfiguration am Benutzer läuft anschließend wie folgt ab:

Im ersten Schritt wird am DOCUMENTS-Manager der Bereich `Benutzerkonten` ausgewählt.


Abb. 3 - Benutzerverzeichnis

Es wird ein Benutzer ausgewählt und unter Eigenschaften die Eigenschaft `shortcutProfiles` angelegt. Hier können mehrere, mit Komma separierte, Tastaturkürzel-Konfiguration hinterlegt werden.


Abb. 4 - Eigenschaft am Benutzer


## Liste der konfigurierbaren Tastaturkürzel:

| Name | Key | Beschreibung |
| --- | --- | --- |
| Homeview öffnen | HOMEVIEW_OPEN | Mit diesem Tastaturkürzel kann die Homview in der Dialogansicht geöffnet werden. |
| Ordnertoolbar fokussieren | FOLDER_TOOLBAR_FOCUS | Durch Betätigung dieses Tastaturkürzels wird die Toolbar des angezeigten Ordners fokussiert. |
| Outbar vorheriger Eintrag | OUTBAR_PREVIOUS | Mit diesem Tastaturkürzel wird die Outbar über der aktuell geöffneten geöffnet. |
| Outbar nächster Eintrag | OUTBAR_NEXT | Mit diesem Tastaturkürzel wird die Outbar unter der aktuell geöffneten geöffnet. |
| Baumnansicht aus-/ und einklappen | TREE_TOGGLE | Mit diesem Tastaturkürzel kann die Baumansicht ein- beziehungsweise ausgeklappt werden. |
| Mappenansicht aus-/ und einklappen | FILE_TOGGLE | Die Mappenansicht wird aus beziehungsweise eingeklappt. |
| Mappe speichern | FILE_COMMIT | Löst die "Speichern"-Operation auf einer Mappe aus. |
| Mappe bearbeiten | FILE_EDIT | Die angezeigte Mappe wechselt in den Bearbeiten-Modus. |
| Mappe bearbeiten abbrechen | FILE_CANCEL | Der Bearbeiten-Modus einer Mappe wird abgebrochen. |
| Mappe nächstes Dokument anzeigen | FILE_DOCUMENT_NEXT | Wenn ein Dokument einer Mappe angezeigt wird, kann mit diesem Tastaturkürzel das nächste Dokument angezeigt werden. |
| Mappe vorheriges Dokument anzeigen | FILE_DOCUMENT_PREVIOUS | Wenn ein Dokument einer Mappe angezeigt wird, kann mit diesem Tastaturkürzel das vorherige Dokument angezeigt werden. |
| Mappe Registerübersicht ein-/ausklappen | FILE_REGISTER_TOGGLE | Mit diesem Tastaturkürzel kann die Registeransicht einer Mappe ein- beziehungsweise ausgeklappt werden. |
| Mappe nächstes Register anzeigen | FILE_REGISTER_NEXT | Mit diesem Tastaturkürzel kann zum nächsten Register einer Mappe gewechselt werden. |
| Mappe vorheriges Register anzeigen | FILE_REGISTER_PREVIOUS | Mit diesem Tastaturkürzel kann zum vorherigen Register einer Mappe gewechselt werden. |
| Vorherige Mappe aus Trefferliste | HITLIST_PREVIOUS | Mit diesem Tastaturkürzel kann bei einer Suche zu der Mappe über der aktuellen in der Trefferliste gewechselt werden. |
| Nächste Mappe aus Trefferliste | HITLIST_NEXT | Mit diesem Tastaturkürzel kann bei einer Suche zu der Mappe unter der aktuellen in der Trefferliste gewechselt werden. |


## Liste von unterstützen Tasten und deren Bezeichner

Grundsätzlich werden alle Tasten der deutschen Tastatur unterstützt und können mit Ausnahme der Leertaste über einfache Eingabe der Taste verwendet werden. Für alle anderen Tasten müssen die gelisteten Bezeichner verwendet werden.


### Bearbeitungstasten

- Leertaste: SPACE oder LEERTASTE
- Enter: ENTER
- Löschen: BACKSPACE
- Einfügen: INSERT, EINFG oder EINFÜGEN
- Entfernen: DELETE, ENTF oder ENTFERNEN


### Pfeil-/Steuerungstasten

- Links: ARROW_LEFT oder PFEIL_LINKS
- Rechts: ARROW_RIGHT oder PFEIL_RECHTS
- Oben: ARROW_UP oder PFEIL_OBEN
- Unten: ARROW_DOWN oder PFEIL_UNTEN
- Bild auf: PAGE_UP oder BILD_OBEN
- Bild ab: PAGE_DOWN oder BILD_UNTEN
- Pos1: POS1
- Ende: END oder ENDE


### Funktionstasten

- F1-F12: F1 bis F12
- ESC ESC oder ESCAPE


### Umschalttasten

- Windows-/Supertaste META oder SUPERKEY
- Steuerung: CTRL oder STRG
- Umschalt: SHIFT
- Feststelltaste: CAPS_LOCK oder FESTSTELLTASTE
- Alt: ALT
- NUM_LOCK: NUM_LOCK oder NUMPAD_NUM_LOCK


### Numpadtasten

Bestehen immer aus `NUMPAD_` und der Taste. Zum Beispiel `NUMPAD_/` für geteilt oder `NUMPAD_8` für die Zahl 8. Ausnahmen werden im Folgenden aufgelistet.

**Wichtig:** Die Tasten unterscheiden sich bei aktivierten NUM_LOCK. Tasten mit entsprechender Doppelfunktion (zum Beispiel die Taste 7, die bei aktivierten NUM_LOCK Pos1 auslöst) kann im Pos1-Fall nicht von anderen Pos1-Tasten auf der Tastatur unterschieden werden.

- NUM_LOCK: NUM_LOCK oder NUMPAD_NUM_LOCK
- Entfernen: NUMPAD_ENTF
- ENTER: Enter - An dieser Stelle gibt es keine Unterscheidung zwischen den beiden Entertasten.


## Übersicht mit Standardwerten


```javascript
HOMEVIEW_OPEN = STRG + ALT + F1
FOLDER_TOOLBAR_FOCUS = STRG + ALT + A
OUTBAR_PREVIOUS = STRG + ALT + PFEIL_OBEN
OUTBAR_NEXT = STRG + ALT + PFEIL_UNTEN
TREE_TOGGLE = STRG + ALT + PFEIL_LINKS
FILE_TOGGLE = STRG + ALT + Z
FILE_COMMIT = STRG + ALT + S
FILE_EDIT = STRG + ALT + E
FILE_CANCEL = STRG + ALT + C
FILE_DOCUMENT_NEXT = STRG + PFEIL_RECHTS
FILE_DOCUMENT_PREVIOUS = STRG + PFEIL_LINKS
FILE_REGISTER_TOGGLE = STRG + ALT + PFEIL_RECHTS
FILE_REGISTER_PREVIOUS = ALT + PFEIL_OBEN
FILE_REGISTER_NEXT = ALT + PFEIL_UNTEN
```

HOMEVIEW_OPEN = STRG + ALT + F1
FOLDER_TOOLBAR_FOCUS = STRG + ALT + A
OUTBAR_PREVIOUS = STRG + ALT + PFEIL_OBEN
OUTBAR_NEXT = STRG + ALT + PFEIL_UNTEN
TREE_TOGGLE = STRG + ALT + PFEIL_LINKS
FILE_TOGGLE = STRG + ALT + Z
FILE_COMMIT = STRG + ALT + S
FILE_EDIT = STRG + ALT + E
FILE_CANCEL = STRG + ALT + C
FILE_DOCUMENT_NEXT = STRG + PFEIL_RECHTS
FILE_DOCUMENT_PREVIOUS = STRG + PFEIL_LINKS
FILE_REGISTER_TOGGLE = STRG + ALT + PFEIL_RECHTS
FILE_REGISTER_PREVIOUS = ALT + PFEIL_OBEN
FILE_REGISTER_NEXT = ALT + PFEIL_UNTEN