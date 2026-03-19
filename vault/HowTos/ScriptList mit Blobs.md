---
title: "ScriptList mit Blobs anzeigen"
source: "https://otris.software/documents/howto/list/scriptlist-blobs.html"
---

# ScriptList mit Blobs anzeigen


Abb. 1 - ScriptList mit Blobs

Um eine Ansicht wie das Feature "HitListWithBlobInfo" als ScriptList zu realisieren, muss man in einer ScriptList einer Row Subrows hinzufügen:


```javascript
row = list.addRow(...);
row.addSubrow({
    documentId: docId,
    documentName: doc.fullname,
    extension: doc.extension,
    size: doc.size
});
```

row = list.addRow(...);
row.addSubrow({
    documentId: docId,
    documentName: doc.fullname,
    extension: doc.extension,
    size: doc.size
});Anhand der übergebenen Informationen werden dann in der Zeile auch entsprechende Datei-Icons anhand der Extension gerendert.

Die Zeilen können auch einzeln nochmal spezialisert werden, z.B. durch eigene Icons oder einen anderen Anzeigenamen.
Näheres Hierzu steht in der ScriptList-API unter [[Script Extensions API/otris.scriptlist.Row#addSubrow|addSubrow(true)]].


## ScriptList mit Blob Thumbnails


Abb. 2 - ScriptList mit Blobthumbnails

Es ist auch Möglich die Sublist analog zum Feature "HitListBlobThumbnails" als Liste von Thumbnails anzuzeigen:


```javascript
list.setSublistBlobThumbnails(true);
```

list.setSublistBlobThumbnails(true);
### Beispielskript ScriptList mit BlobThumbnails

Download: [subListScriptList.js](../list/subListScriptList.js)


```javascript
const scriptListAPI = require("otris.scriptlist");

var list = scriptListAPI.List(),
    titleColumn = list.addColumn("filename", "Titel"),
    fillColumn = list.addColumn("fillColumn", "");

titleColumn.setWidth(100);
fillColumn.setWidth(200);

//  sets whether the sublist rows should be displayed as a list of thumbnails
list.setSublistBlobThumbnails(true);

var fileId = "docfeat_fi20170000004436",
    file = context.getFileById(fileId),
    docReg = file.getRegisterByName("Attachments"),
    docsIt = docReg.getDocuments(),
    row = list.addRow(fileId, ["Mappe 1"]);

row.setOnClick("documentsContext.openFileView('" + fileId + "');");

//  iterate documents
for (var doc = docsIt.first(); doc; doc = docsIt.next()) {

    var docId = doc.getAttribute("id"),
        documentRow = row.addSubrow({
            documentId: docId,
            documentName: doc.fullname,
            extension: doc.extension,
            size: doc.size
        });
}

list.endList();

context.returnType = "scriptList";

var result = list.transfer();
util.out(result);
context.returnValue = result;
```

const scriptListAPI = require("otris.scriptlist");

var list = scriptListAPI.List(),
    titleColumn = list.addColumn("filename", "Titel"),
    fillColumn = list.addColumn("fillColumn", "");

titleColumn.setWidth(100);
fillColumn.setWidth(200);

//  sets whether the sublist rows should be displayed as a list of thumbnails
list.setSublistBlobThumbnails(true);

var fileId = "docfeat_fi20170000004436",
    file = context.getFileById(fileId),
    docReg = file.getRegisterByName("Attachments"),
    docsIt = docReg.getDocuments(),
    row = list.addRow(fileId, ["Mappe 1"]);

row.setOnClick("documentsContext.openFileView('" + fileId + "');");

//  iterate documents
for (var doc = docsIt.first(); doc; doc = docsIt.next()) {

    var docId = doc.getAttribute("id"),
        documentRow = row.addSubrow({
            documentId: docId,
            documentName: doc.fullname,
            extension: doc.extension,
            size: doc.size
        });
}

list.endList();

context.returnType = "scriptList";

var result = list.transfer();
util.out(result);
context.returnValue = result;