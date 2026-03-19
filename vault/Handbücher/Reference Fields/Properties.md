---
title: "Properties"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/prop-ref.html"
---

# Properties


## autoUpdateByRefFields

Dieses Property wird in einem eigenen [Kapitel](../referencefields/autoUpdateByRefFields.html) beschrieben.


## ReferenceFileClearDefaultValuesOnDeselect

Property am Feld oder am Mappentypen. Wenn diese Eigenschaft gesetzt wird, werden der Anzeigename und die Defaultwerte aus der Referenzierenden Mappe entfernt, sobald eine Referenz im Web-Client aus dem Referenzfeld entfernt wird.


```javascript
ReferenceFileClearDefaultValuesOnDeselect=1
```

ReferenceFileClearDefaultValuesOnDeselect=1
## ScriptExit: afterSetReferenceFieldScript

Property am Feld oder Mappentypen.


```javascript
afterSetReferenceFieldScript=scriptName
```

afterSetReferenceFieldScript=scriptNameDas Script wird ausgeführt, direkt nachdem in einem Referenzfeld im Web-Client eine Referenz angelegt wurde.