---
title: "Objekt- und Schemaerzeugung"
source: "https://otris.software/documents/manuals/books/otr-ai/schema-methods.html"
---

# Objekt- und Schemaerzeugung

Das AI Toolkit bietet mehrere Methoden zur Erzeugung von Objekten und Schemata und erleichtert somit den Austausch strukturierter Daten mit KI-Diensten. Hierzu bietet das AI Toolkit drei Methoden: `createJSONSchemaForFileType`, `createFileDataFromJSON` und `createJSONFromFile`. Diese Methoden werden im folgenden erläutert.


## createJSONSchemaForFileType

Die Methode `createJSONSchemaForFileType` erstellt ein JSON-Schema für einen angegebenen Mappentypen. Dieses Schema kann verwendet werden, um mit Hilfe einer KI Objekte gemäß dem definierten Mappentypen zu generieren.


### Parameter

- fileType: Der Name des Mappentypen, für den das Schema erstellt werden soll.


### Rückgabewert

- Ein JSON-Schema, das die Struktur des angegebenen Mappentypen in einem von KIs besser verständlichen Format definiert.


### Beispiel


```javascript
const { AIToolkit } = require("aiToolkit");
const schema = AIToolkit.createJSONSchemaForFileType("invoice");
console.log(JSON.stringify(schema, null, 2));
```

const { AIToolkit } = require("aiToolkit");
const schema = AIToolkit.createJSONSchemaForFileType("invoice");
console.log(JSON.stringify(schema, null, 2));
## createFileDataFromJSON

Die Methode `createFileDataFromJSON` transformiert JSON-Daten, die gemäß dem mit der o.g. Methode erzeugten JSON-Schema formatiert sind, in ein einfaches Objekt mit Attributen für jedes Feld. Die Daten können somit z.B. mit `setFieldValue` verwendet werden. Optional können Felder, die als "readonly" markiert sind, gefiltert werden. (vgl. hierzu auch [Datenstruktur des Mappentypen für die KI beeinflussen](ai-relevant.html))


### Parameter

- fileType: Der Name des Mappentypen, für den die Daten transformiert werden sollen.
- data: Ein JSON-String oder Objekt, das die Daten im Format des JSON-Schemas für diesen Mappentypen enthält.
- options: (Optional) Ein Objekt, das angibt, wie die JSON-Daten geparst werden sollen. Das Feld filterReadonly kann verwendet werden, um schreibgeschützte Felder zu filtern, damit diese im Ergenisobjekt nicht mehr auftauchen.


### Rückgabewert

- Ein Objekt, das die Daten für eine Mappe des angegebenen Typs mit Attributen für jedes Feld enthält.


### Beispiel


```javascript
const { AIToolkit } = require("aiToolkit");
const jsonData = {
    firstName: "John",
    lastName: "Doe",
    hobby: "Reading",
};
const fileData = AIToolkit.createFileDataFromJSON("person", jsonData, {
    filterReadonly: true,
});
console.log(fileData);
```

const { AIToolkit } = require("aiToolkit");
const jsonData = {
    firstName: "John",
    lastName: "Doe",
    hobby: "Reading",
};
const fileData = AIToolkit.createFileDataFromJSON("person", jsonData, {
    filterReadonly: true,
});
console.log(fileData);

## createJSONFromFile

Die Methode `createJSONFromFile` transformiert die Felddaten einer gegebenen Mappe in JSON-Daten, die gemäß dem JSON-Schema des Mappentypen formatiert sind.


### Parameter

- file: Das Mappenobjekt (DocFile), für das JSON-Daten erstellt werden sollen.


### Rückgabewert

- Ein Objekt mit Attributen in der Form des JSON-Schemas, das von createJSONSchemaForFileType definiert wird.


### Beispiel


```javascript
const { AIToolkit } = require("aiToolkit");
const jsonSchemaObject = AIToolkit.createJSONFromFile(context.file);
console.log(JSON.stringify(jsonSchemaObject, null, 2));
```

const { AIToolkit } = require("aiToolkit");
const jsonSchemaObject = AIToolkit.createJSONFromFile(context.file);
console.log(JSON.stringify(jsonSchemaObject, null, 2));