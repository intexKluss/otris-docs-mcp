---
title: "Defaultwerte"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/default.html"
---

# Defaultwerte

Eine Mappe, die eine andere Mappe referenziert, kann auch weitere Feldwerte der referenzierten Mappe anzeigen. Genauer gesagt können in dem Moment, in dem die Referenz im Web-Client gesetzt wird, Werte aus der referenzierten Mappe in die referenzierende Mappe kopierte werden. Dies wird wieder am Beispiel erklärt.


## Beispiel

Zur Veranschaulichung wird das Beispiel aus den [einfachen Referenzfeldern](../referencefields/simple.html) erweitert. Der Mappentyp `rechnung` erhält die Felder `adresse` und `ort` für die Adresse des Kunden. Dem Mappentyp `firma` werden die Felder `strasse`, `hausnummer`, `postleitzahl` und `stadt` zugefügt. Dann kann die Adresse des referenzierten Kunden direkt in die Rechnung kopiert werden wenn die Referenz im Web-Client angelegt wird.


## Konfiguration

Der Eintrag im Feld **Aufzählungswerte** im Konfigurationsdialog des Referenzfeldes muss in dem Beispiel folgendermaßen erweitert werden.


```javascript
firma.id
%name%
adresse = %strasse% %hausnummer%
ort = %postleitzahl% %stadt%
```

firma.id
%name%
adresse = %strasse% %hausnummer%
ort = %postleitzahl% %stadt%

![default-config](../img/default-conf.png)

Abb. 9 - Konfiguration von Defaultwerten im DOCUMENTS-Manager

- Die Felder der referenzierenden Mappe (rechnung) werden direkt angegeben.
- Für die Defaultwerte, die aus der referenzierten Mappe (firma) kopiert werden sollen, werden AutoTexte verwendet.


## Zuweisungsoperationen

Bei der Zuweisung der Defaultwerte kann Einfluss auf die [Wartungsoperation updateRefFields](../referencefields/maintenance.html) genommen werden. Genaueres dazu findet sich im entsprechenden Kapitel.


## Darstellung im Web-Client

Mit den oben beschriebenen Adress-Feldern sieht die Mappe für einen Kunden **otris software AG** z.B. wie folgt aus:


![default-web1](../img/default-web1.png)

Abb. 10 - Beispiel Kunde mit Adress-Feldern im Web-Client

Vorrausgesetzt das Referenzfeld `kunde` am Mappentyp `rechnung` wurde wie oben beschrieben konfiguriert und eine Mappe vom Typ `rechnung` ist im Web-Client im Bearbeitungsmodus geöffnet. Sobald eine Referenz angelegt wird, z.B. zum Kunden **otris software AG**, werden die Adressfelder sofort kopiert.


![default-web2](../img/default-web2.png)

Abb. 11 - Beispiel Rechnung im Bearbeitungsmodus im Web-Client


## Defaultwerte aktualisieren

Die Defaultwerte werden nur in die Felder der referenzierenden Mappe kopiert und sind nicht mit den Originalfeldern verlinkt. Daher wird eine nachträgliche Änderung defaultmäßig nicht übernommen. Wie die Defaultwerte nach einer Änderung in den referenzierenden Mappen aktualisiert werden können, ist im Kapitel [Werte aktualisieren](../referencefields/update.html) beschrieben.