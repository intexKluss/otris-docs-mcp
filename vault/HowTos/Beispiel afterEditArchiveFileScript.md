---
title: "Neue Archivversion in Trefferliste markieren"
source: "https://otris.software/documents/howto/list/after-edit-archive-file-example.html"
---

# Neue Archivversion in Trefferliste markieren

Mit diesem Skript kann man in einer Trefferliste mit Archivtreffern nach dem Bearbeiten eines Archivtreffers, die Trefferliste aktualisieren und die neue Version dann in der Trefferliste wieder markieren.
Zum Ausführen nach dem Speichern der Archivemappe, muss am entsprechenden Mappentyp die Property afterEditArchiveFileScript setzen.

Download: [afterEditArchiveFileScript.js](afterEditArchiveFileScript.js)


```javascript
// Das Script wird nach dem Bearbeiten einer Archivmappe aufgerufen.
// Es gibt dem WebClient zurück, dass der Folder/Trefferliste neu geladen werden
// muss und welcher Archivtreffer selektiert werden soll.

// d.h.  context.returnType="refreshFolder";
//       return { selectedHit: "WebKey" }

// WebKey hat das Format:  {fileType@archiveServer|id}
// Die Teile fileType@archiveServer und die id müssen URL-encoded werden

var archiveFile = context.file;
if (!archiveFile.isArchiveFile()) {
    return;
}

var retObj = {};
retObj.selectedHit = createWebKey(archiveFile);
context.returnType="refreshFolder";

var retVal = JSON.stringify(retObj);
//throw retVal;
return retVal;

function createWebKey(archiveFile) {
    var archiveKey = archiveFile.getArchiveKey(true);  // Format = id@archiveServer
    var tmp = archiveKey.split('@');
    var id = tmp[0];
    var archiveServer = tmp[1];
    var fileType = archiveFile.getAutoText("fileType");
    var webKey = "{" + util.encodeUrlCompatible(fileType + "@" + archiveServer);
    webKey += "|" + util.encodeUrlCompatible(id) + "}";
    return webKey;
}
```

// Das Script wird nach dem Bearbeiten einer Archivmappe aufgerufen.
// Es gibt dem WebClient zurück, dass der Folder/Trefferliste neu geladen werden
// muss und welcher Archivtreffer selektiert werden soll.

// d.h.  context.returnType="refreshFolder";
//       return { selectedHit: "WebKey" }

// WebKey hat das Format:  {fileType@archiveServer|id}
// Die Teile fileType@archiveServer und die id müssen URL-encoded werden

var archiveFile = context.file;
if (!archiveFile.isArchiveFile()) {
    return;
}

var retObj = {};
retObj.selectedHit = createWebKey(archiveFile);
context.returnType="refreshFolder";

var retVal = JSON.stringify(retObj);
//throw retVal;
return retVal;

function createWebKey(archiveFile) {
    var archiveKey = archiveFile.getArchiveKey(true);  // Format = id@archiveServer
    var tmp = archiveKey.split('@');
    var id = tmp[0];
    var archiveServer = tmp[1];
    var fileType = archiveFile.getAutoText("fileType");
    var webKey = "{" + util.encodeUrlCompatible(fileType + "@" + archiveServer);
    webKey += "|" + util.encodeUrlCompatible(id) + "}";
    return webKey;
}