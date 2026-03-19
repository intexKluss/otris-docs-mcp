---
title: "Erweiterte Referenzfelder"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/extended.html"
---

# Erweiterte Referenzfelder

Erweiterte Referenzfelder unterscheiden sich von einfachen Referenzfeldern durch Angabe eines Anzeigenamen. Außerdem werden in erweiterten Referenzfeldern noch weitere Funktionen unterstützt. Diese werden in den folgenden Kapiteln beschrieben.


## Anzeigename

In einem einfachen Referenzfeld wird der Schlüsselwert der referenzierten Mappe angezeigt. Dieser hat meistens wenig Aussagekraft. Deshalb gibt es die Möglichkeit, für die Anzeige in einem Referenzfeld ein anderes Feld der referenzierten Mappe zu verwenden. Sobald ein solcher *Anzeigename* konfiguriert ist, ist das Referenzfeld ein *erweitertes Referenzfeld*.


## Konfiguration

Anzeigename und weitere Einstellungen werden wie beim einfachen Referenzfeld im Feld **Aufzählungswerte** im Konfigurationsdialog eingetragen. Zur Referenzregel wird dazu mindestens eine weitere Zeile mit dem Anzeigenamen zugefügt. Allgemein sieht der Eintrag wie folgt aus.


```javascript
filetype.keyField|hitlist=hitlist1|filterField<operator>’filterValue’
%DisplayName%
DefaultField1=%Field1%
DefaultField2=%Field2%
```

filetype.keyField|hitlist=hitlist1|filterField<operator>’filterValue’
%DisplayName%
DefaultField1=%Field1%
DefaultField2=%Field2%Der Eintrag besteht aus mehreren Zeilen

- Die erste Zeile enthält die Referenzregel. Die Referenzregel kann Angaben zum Auswahldialog enthalten.
- Die zweite Zeile enthält den Anzeigenamen. Diese Zeile ist für erweiterte Referenzfelder zwingend erforderlich.
- Zeile drei bis n enthalten Defaultwerte.


## idFile

In einem erweiterten Referenzfeld kann als Schlüsselfeld auch die Mappen-ID verwendet werden. Dazu muss das Wort `idFile` statt des Schlüsselfeldes in der Referenzregel angegeben werden.

In dem Beispiel sieht die Referenzregel mit Mappen-ID so aus:


```javascript
firma.idFile
```

firma.idFileUnd die gesamte Konfiguration im Dialog:


![extended-idfile](../img/extended-idfile.png)

Abb. 5 - Konfiguration eines Referenzfeldes im DOCUMENTS-Manager


## Wert eines erweiterten Referenzfeldes

Im Web-Client ist in einem erweiterten Referenzfeld nur der Anzeigewert zu sehen. Wie sieht aber der tatsächliche Wert eines solchen Feldes aus?

Im DOCUMENTS Manager unter **Monitoring → Vorgänge** sind alle Mappen des Systems zu finden. Dort kann auch für jedes Feld der Konfigurationsdialog geöffnet werden. Darin ist unter **Wert / Voreinstellung** der tatsächliche Wert des Feldes eingetragen. Dieser Wert enthält bei einem erweiterten Referenzfeld immer zwei Zeilen. In der ersten Zeile steht der Schlüsselwert gefolgt von dem Zeilenumbruch. In der zweiten Zeile steht der Anzeigename.


![display-file](../img/display-file.png)

Abb. 6 - Wert des Referenzfeldes im DOCUMENTS-Manager

Durch diese Darstellung ist es möglich, Schlüsselwerte unterschiedlicher Länge ohne Probleme zu benutzen und nach ihnen zu suchen, da immer der Zeilenumbruch das Ende des Schlüsselwertes anzeigt. Der Zeilenumbruch wird mit dem AutoText `%LF%` dargestellt.


## Bitte beachten

Auch bei Verwendung von erweiterten Referenzfeldern darf der Schlüsselwert einer referenzierten Mappe nicht verändert werden! Ansonsten kann die Referenz nicht mehr aufgelöst werden.