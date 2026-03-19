---
title: "PortalScripting"
source: "https://otris.software/documents/manuals/books/reference-fields/apis/portalscripting.html"
---

# PortalScripting

Über die Klasse `DocFile` kann im PortalScripting eine Mappe bearbeitet werden. Ein `DocFile` Objekt des Mappentyps `rechnung` wird zum Beispiel beim Aufruf der Funktion `context.createFile("rechnung")` zurückgegeben. Damit wird eine neue Mappe erzeugt. Über das `DocFile` Objekt können alle Felder der Mappe auf verschiedene Arten gesetzt werden (siehe Dokumentation zu `DocFile` in der **Portalscript API**). Auch erweiterte Referenzfelder können auf beide Arten gesetzt werden.


### Feldname als JavaScript Property

Diese Variante sollte nicht verwendet werden, da es hier keine Fehlermeldung gibt, wenn das Feld nicht gesetzt wurde.

Alle Felder einer Mappe sind als Property mit gleichem Namen am `DocFile` Objekt verfügbar und können darüber gesetzt werden. Bei erweiterten Referenzfeldern muss darauf geachtet werden, dass der Feldwert den Schlüsselwert und den Anzeigenamen getrennt duch einen Zeilenvorschub (`\n`) enthalten muss.


```javascript
var firma = context.createFile('firma');
firma.name = "otris";
firma.id = "2345";
firma.sync();

var rechnung = context.createFile('rechnung');
rechnung.kunde = "2345\notris";
rechnung.sync();
```

var firma = context.createFile('firma');
firma.name = "otris";
firma.id = "2345";
firma.sync();

var rechnung = context.createFile('rechnung');
rechnung.kunde = "2345\notris";
rechnung.sync();
### Funktion setFieldValue

Bei Verwendung der Funktion `setFieldValue` muss nur der Schlüsselwert gesetzt werden. Es ist zwar möglich aber nicht mehr notwendig den Anzeigenamen mit anzugeben. Wenn für ein erweitertes Referenzfeld der Anzeigename nicht angegeben ist, wird er automatisch hinzugefügt.


```javascript
var firma = context.createFile('firma');
firma.setFieldValue("name", "otris");
firma.setFieldValue("id", "2345");
firma.sync();

var rechnung = context.createFile('rechnung');
rechnung.setFieldValue("kunde", "2345");
rechnung.sync();
```

var firma = context.createFile('firma');
firma.setFieldValue("name", "otris");
firma.setFieldValue("id", "2345");
firma.sync();

var rechnung = context.createFile('rechnung');
rechnung.setFieldValue("kunde", "2345");
rechnung.sync();
### Neu ab Version DOCUMENTS 5.0e

Dies ist die empfohlene Variante zum Setzen eines Referenzfeldes.

Die Funktion `setReferenceFile` ermöglicht die direkte Verknüpfung zur referenzierten Mappe.


```javascript
var firma = context.createFile('firma');
firma.setFieldValue("name", "otris");
firma.setFieldValue("id", "2345");
firma.sync();

var rechnung = context.createFile('rechnung');
rechnung.setReferenceFile("kunde", firma);
rechnung.sync();
```

var firma = context.createFile('firma');
firma.setFieldValue("name", "otris");
firma.setFieldValue("id", "2345");
firma.sync();

var rechnung = context.createFile('rechnung');
rechnung.setReferenceFile("kunde", firma);
rechnung.sync();