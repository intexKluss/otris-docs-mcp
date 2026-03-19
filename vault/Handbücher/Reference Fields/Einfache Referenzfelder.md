---
title: "Einfache Referenzfelder"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/simple.html"
---

# Einfache Referenzfelder

Alle einfachen und erweiterten Referenzfelder enthalten eine *Referenzregel*, ein *Schlüsselfeld* und einen *Schlüsselwert*. Diese Begriffe werden hier erklärt. Erweiterte Referenzfelder haben weitere Eigenschaften, diese werden in den folgenden Kapiteln erklärt.


## Schlüsselfeld und Schlüsselwert

Ein *Schlüsselwert* ist ein Wert, der innerhalb eines Mappentyps eindeutig ist. Ein *Schlüsselfeld* ist ein Feld, das einen Schlüsselwert enthält.


## Beispiel

Wenn der Mappentyp `firma` aus dem Beispiel in der [[Client SDK/index|Einleitung]] wird um das Schlüsselfeld `id` erweitert wird, dann kann jede Mappe vom Typ `firma` durch Angabe von Mappentyp und `id`-Feld eindeutig identifiziert werden.


## Referenzregel

Eine *Referenzregel* enthält mindestens die gerade beschriebenen Angaben durch die eine Mappe eindeutig identifiziert werden kann. Dies ist der technische Namen des Mappentyps, gefolgt von dem technischen Namen des Schlüsselfelds. Beide Namen werden durch einen Punkt getrennt.

Allgemeine Referenzregel:


```javascript
filetype.keyField
```

filetype.keyFieldFür das verwendete Beispiel sieht die Referenzregel dann so aus:


```javascript
firma.id
```

firma.id
## Konfiguration

Referenzfelder werden im Konfigurations-Dialog für Felder im DOCUMENTS-Manager konfiguriert.

- Als Typ muss Referenz ausgewählt werden.
- Im Eingabefeld für Aufzählungswerte muss die Referenzregel eingetragen werden.

Beispiel im Konfigurations-Dialog:


![example-config](../img/simple-conf.png)

Abb. 3 - Konfiguration eines Referenzfeldes im DOCUMENTS-Manager


## Referenz erstellen (Web-Client)

Wenn das Referenzfeld `kunde` im Mappentyp `rechnung` wie oben beschrieben konfiguriert ist, enthält es im Bearbeitungsmodus des Web-Clients eine kleine Lupe. Darüber kann ein Auswahldialog geöffnet und eine Mappe vom Typ `firma` ausgewählt werden. Durch die Auswahl wird der Wert des Felds `id` in das Feld `kunde` eingetragen. In einfachen Referenzfeldern kann dieser Schlüsselwert auch direkt in das Feld eingegeben werden. Die direkte Eingabe ist in einem erweiterten Referenzfeld nicht möglich!


![example-web](../img/simple-web.png)

Abb. 4 - Referenzfeld im Web-Client - Liste aller Firmen öffnet sich nach Klick auf die Lupe


## Bitte beachten

Der Schlüsselwert einer referenzierten Mappe darf nicht verändert werden! In dem Beispiel heißt das, sobald der Wert des Feldes `id` im Referenzfeld `kunde` einer Mappe vom Typ `rechnung` angegeben wurde, darf das Feld `id` nicht mehr geändert werden. Ansonsten kann die Referenz nicht mehr aufgelöst werden.