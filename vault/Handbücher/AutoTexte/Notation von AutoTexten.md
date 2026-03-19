---
title: "Notation von AutoTexten"
source: "https://otris.software/documents/manuals/books/autotexte/Notation.html"
---

# Notation von AutoTexten

Die Eingabe von AutoTexten erfolgt in einer bestimmten Notation, um AutoTexte von gewöhnlichen Texten oder konstanten Feldinhalten systemseitig unterscheiden zu können. Der AutoText-Ausdruck ist daher stets in Prozentzeichen (`%`) eingeschlossen. Diese Ersetzungsmarken werden ausgewertet und der Text zwischen zwei Prozentzeichen als AutoText erkannt. Anschließend wird der zugehörige Wert ermittelt und dynamisch an die Stelle des Ausdrucks zurückgegeben, so dass das entsprechende Feld bzw. die Textpassage automatisch mit der angeforderten Information gefüllt wird.


## Globale und Benutzer-Informationen


### Beispiel

Die Freigabe einer Rechnung wird als Schritt in einem Workflow modelliert. Hierbei soll ein Informationstext ausgegeben werden, der das aktuelle Datum sowie den zuständigen Benutzer beinhaltet. Beide Informationen liegen im System vor und sollen bei jedem Durchlaufen des Workflow-Schrittes dynamisch eingesetzt werden. DOCUMENTS stellt hierbei die benötigten Informationen über die AutoTexte `%currentDate%` (liest das aktuelle Systemdatum aus) und `%userFullname%` (ermittelt den Namen des aktuell angemeldeten Benutzers) bereit. Diese müssen in die Textpassage eingefügt werden. Der benötige Informationstext hat somit folgendes Aussehen:


```javascript
Freigegeben am %currentDate% durch %userFullname%.
```

Freigegeben am %currentDate% durch %userFullname%.Erfolgt die Freigabe am 18. Mai 2016 durch den Benutzer Willi Schreiber, so wird für den Workflow-Schritt folgender Informationstext dynamisch erzeugt:


```javascript
Freigegeben am 18.05.2016 durch Willi Schreiber.
```

Freigegeben am 18.05.2016 durch Willi Schreiber.Die verwendeten AutoTexte aus diesem Beispiel unterscheiden sich durch die Herkunft ihrer Werte. Das aktuelle Systemdatum `%currentDate%` ist ein *globaler* AutoText, während `%userFullname%` aus den Informationen über den *Benutzer* hergeleitet wird. Neben diesen beiden Informationsquellen besteht ferner die Möglichkeit, Werte aus *Feldern einer Mappe* über AutoTexte zu referenzieren.


## Felder einer Mappe


### Beispiel

Im Rahmen einer Bestellung wird eine automatische E-Mail (Signalausgang) als Versendebestätigung an den Auftraggeber verschickt. Der zugrunde liegende Mappentyp enthält die Felder `bestellNr` und ein `versendeDatum`. Die E-Mail-Vorlage in DOCUMENTS muss die folgende Textpassage enthalten:


```javascript
Ihre Bestellung mit der Bestell-Nummer %bestellNr% wurde am %versendeDatum% versendet.
```

Ihre Bestellung mit der Bestell-Nummer %bestellNr% wurde am %versendeDatum% versendet.Die E-Mail an den Auftraggeber wird mit den entsprechenden Feldwerten der aktuellen Mappe gefüllt und wird folgendermaßen in dessen E-Mail-Anwendung dargestellt:


```javascript
Ihre Bestellung mit der Bestell-Nummer 4711 wurde am 18.05.2016 versendet.
```

Ihre Bestellung mit der Bestell-Nummer 4711 wurde am 18.05.2016 versendet.Existieren bei diesem Mappentyp noch weitere Felder, wie beispielsweise *strasse*, *plz* und *ort*, so können Sie die E-Mail-Vorlage beliebig ergänzen:


```javascript
Ihre Bestellung mit der Bestell-Nummer %bestellNr% wurde am %versendeDatum% an Ihre Adresse %strasse% in %plz% %ort% versendet.
```

Ihre Bestellung mit der Bestell-Nummer %bestellNr% wurde am %versendeDatum% an Ihre Adresse %strasse% in %plz% %ort% versendet.Im letzten Beispiel ist noch einmal die Notation mit den verwendeten Prozentzeichen ersichtlich. Die AutoTexte `%plz%` und `%ort%` liegen unmittelbar hintereinander, werden vom System jedoch anhand der jeweils umschließenden Prozentzeichen einzeln und korrekt aufgelöst.


## Optionale statische Texte

AutoTexte können auch führende und endende optionale statische Texte haben, die nur gesetzt werden, wenn der eigentliche AutoText keinen leeren Wert ergibt.


### Beispiel

Aus den AutoTexten


```javascript
%Titel{.}%%Nachname%%{, }Vorname%
```

%Titel{.}%%Nachname%%{, }Vorname%und den Feldwerten

- Feld Titel: Dr.
- Feld Vorname: Christoph
- Feld Nachname: Hofmann

wird der folgende Wert


```javascript
Dr. Hofmann, Christoph
```

Dr. Hofmann, Christoph