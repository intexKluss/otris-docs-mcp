---
title: "Wartungsoperation updateRefFields"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/maintenance.html"
---

# Wartungsoperation updateRefFields

Diese Operation kann aufgerufen werden um einmalig alle Anzeigenamen und Defaultwerte zu aktualisieren. Dabei muss ein Mappentyp und ein Feld angegeben werden.


```javascript
updateRefFields fileTypeName fieldName
```

updateRefFields fileTypeName fieldNameFalls alle Felder oder alle Mappentypen aktualisiert werden sollen, können statt der Namen auch `*` angegeben werden.


## Zuweisungsoperatoren für Defaultwerte

Für die Zuweisung eines Defaultwerts können zwei Zuweisungsoperatoren verwendet werden. Der Unterschied wirkt sich nur bei Verwendung dieser Wartungsoperation aus.


### Zuweisung mit =

Der Wert wird beim Setzen der Referenz zugewiesen und bei Ausführung von `updateRefFields` angepasst.


```javascript
adresse = %strasse% %hausnummer%
```

adresse = %strasse% %hausnummer%
### Zuweisung mit :=

Der Wert wird beim Setzen der Referenz zugewiesen aber bei Ausführung von `updateRefFields` nicht angepasst. Das Feld wird dann ignoriert.


```javascript
principal := %principal%
```

principal := %principal%