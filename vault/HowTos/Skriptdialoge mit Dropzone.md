---
title: "Skriptdialoge mit Dropzone"
source: "https://otris.software/documents/howto/common/scriptdialog-dropzone.html"
---

# Skriptdialoge mit Dropzone

Ab der Documents-Version *5.0d* ist es möglich Skriptdialoge mit einem Dateiupload (Dropzone) zu versehen.

Im Manager muss dazu ein Skript-Parameter vom Typ `String` mit einer Eigenschaft `dropzoneConfig` angelegt werden. Die Dropzone-Konfiguration `dropzoneConfig` muss als JSON-String angegeben werden.


### Dropzone-Konfiguration


```javascript
dropzoneConfig = {
  // Deaktiviert die Möglichkeit mehrere Dateien hochzuladen
  "multiple": false,
  // Legt die Höhe der Dropzone in Pixeln fest
  "height": 120,
  // Icon für die Dropzone
  "icon": "ionicons:ion-md-cloud-upload;font-size:64px;",
  // Label für die Dropzone
  "label": "UploadArea",
  // Upload auf bestimmte Erweiterungen einschränken
  "extensions": ["jpg", "jpeg", "png", "gif"],
  // Maximale Dateigröße in bytes festlegen
  "maxSize": 2000000,
  // Position der Liste, der hochgeladenen Dateien "top" (Standard) oder "bottom" (5.0i)
  "listPosition": "bottom"
};
```

dropzoneConfig = {
  // Deaktiviert die Möglichkeit mehrere Dateien hochzuladen
  "multiple": false,
  // Legt die Höhe der Dropzone in Pixeln fest
  "height": 120,
  // Icon für die Dropzone
  "icon": "ionicons:ion-md-cloud-upload;font-size:64px;",
  // Label für die Dropzone
  "label": "UploadArea",
  // Upload auf bestimmte Erweiterungen einschränken
  "extensions": ["jpg", "jpeg", "png", "gif"],
  // Maximale Dateigröße in bytes festlegen
  "maxSize": 2000000,
  // Position der Liste, der hochgeladenen Dateien "top" (Standard) oder "bottom" (5.0i)
  "listPosition": "bottom"
};

Abb. 1 - Dropzone im Skriptdialog

Im Skriptdialog kann man über Drag&Drop Dateien auf die Dropzone fallen lassen. Diese werden dann direkt auf den Server hochgeladen. Es besteht außerdem die Möglichkeit, per Klick auf die Dropzone, einen Dateiauswahldialog aufzurufen.

Im Skript kann man über den Namen des Skript-Parameters ein JSON-kodiertes Array abrufen. Mit der `JSON.parse`-Methode erzeugt man aus dem JSON-String das Javascript-Array `entries = JSON.parse(feldname)`.
Das Array enthält Objekte mit den beiden Attributen `fileName` und `accessToken`.


```javascript
[
  {
    fileName: "meine-konfiguration.json",
    accessToken: "df04e675-1a76-45f7-a607-e3a6f4dbe53c"
  },
  {
    fileName: "neu-eintraege.csv",
    accessToken: "b70f4f4e-b087-4e2e-81f5-46b600f12e69"
  }
  //...
]
```

[
  {
    fileName: "meine-konfiguration.json",
    accessToken: "df04e675-1a76-45f7-a607-e3a6f4dbe53c"
  },
  {
    fileName: "neu-eintraege.csv",
    accessToken: "b70f4f4e-b087-4e2e-81f5-46b600f12e69"
  }
  //...
]Über die Methode `context.getTempPathByToken(accessToken)` bekommt man den Pfad zu einer hochgeladenen Datei.


```javascript
// uploadField ist der Feldname
var uploadFieldEntries = JSON.parse(uploadField);

uploadFieldEntries.forEach(function(entry) {
 var filePath = context.getTempPathByToken(entry.accessToken);
 util.out("name: " + entry.fileName + " path: " + filePath);
});
```

// uploadField ist der Feldname
var uploadFieldEntries = JSON.parse(uploadField);

uploadFieldEntries.forEach(function(entry) {
 var filePath = context.getTempPathByToken(entry.accessToken);
 util.out("name: " + entry.fileName + " path: " + filePath);
});