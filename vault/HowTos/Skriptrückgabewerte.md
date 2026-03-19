---
title: "Skript-Rückgabewerte returnType"
source: "https://otris.software/documents/howto/common/returnTypes.html"
---

# Skript-Rückgabewerte returnType

In der nachfolgenden Tabelle sind die möglichen Skript-Rückgabewert-Typen aufgelistet.
Der Rückgabewert-Typ wird im Portal-Skript über `context.returnType = "<RÜCKGABEWERT-TYP>";` festgelegt.


## Einfaches Beispiel


```javascript
context.returnType = "clientScript";
return "alert('Nur ein Beispiel')";
```

context.returnType = "clientScript";
return "alert('Nur ein Beispiel')";
## Liste der verfügbaren Werte

| returnType | Rückgabewert | Beschreibung |
| --- | --- | --- |
| checkoutDocuments | JSON String, siehe Beispiele | Startet den checkout von einem Dokument und falls verfügbar die lokale Bearbeitung. |
| clientScript | Javascript-Code als Zeichenkette | Führt den übergebenen Javascript-Code auf dem Client aus. |
| dashboard |  | Öffnet das Standard-Dashboard (Verfügbar ab documents OS 6.1.0). |
| destroyHitTree |  | Entfernt den momentanen Trefferbaum aus dem Serverseitigen Cache. Dieser ist dann nach dem Logout nicht mehr verfügbar. |
| download:<filename> | Dateiname auf dem Server | Startet den Download einer Datei die auf dem Server vorhanden ist. |
| file:<filename> | Binärer Datenstrom als String | Startet den Download einer Datei die direkt als Datenstrom mitgegeben wurde. |
| gadget | GadgetConfig als JSON-String {gadgetScript:"Gadget_SimpleSample", gadgetAction: "initGadget"} | Das in der GadgetConfig definierte Gadget wird in einem Dialog dargestellt. |
| hitTree |  | Öffnet die Trefferbaumoutbar. |
| html | HTML String oder JSON String, siehe Beispiele | Zeigt das übergebene Html an. |
| htmlpopup | HTML String oder JSON String, siehe Beispiele | Erzeugt einen Dialog mit dem übergebenen HTML als Inhalt. |
| multipleAction | Array von Objekten mit den beiden Attributen returnType und returnValue [{returnType: 'showFile', returnValue : fileId}, {returnType: 'html', returnValue : '<div>HTML-Code</div>'}, ...] | Die in dem Array angegebenen Aktionen werden auf dem Client ausgeführt. ACHTUNG: returnValue-Werte müssen immer vom Typ String sein (Bei Bedarf JSON.stringify() anwenden). |
| notification | Notification Rückgabe von otris.notifications.Notification.transfer() | Zeigt eine Benachrichtigung im Client an (Details: otris.notifications.Notification) |
| openAndReloadOutbar | outbarName Technischer Bezeicher einer Outbar | Öffnet die Outbar mit dem angegebenen technischen Bezeichner und lädt den Inhalt dieser Outbar neu. |
| openOutbar | outbarName Technischer Bezeicher einer Outbar | Öffnet die Outbar mit dem angegebenen technischen Bezeichner |
| recordView | fileId | Öffnet die Aktenansicht einer Mappe (Verfügbar ab documents OS 6.1.0). |
| rowUpdate | RowUpdate Rückgabe von otris.scriptlist.RowUpdate.transfer() | Aktualisiert Zeilen einer Skriptliste mit einer bestimmten list-id. (Verfügbar ab Documents 5.0i. Details: otris.scriptlist.RowUpdate) |
| refreshFolder | folderId ID um einen bestimmten Ordner zu aktualisieren selectedHit Mappe die Markiert werden soll (verfügbar ab Documents 5.0e) {folderId: "<folderId>", selectedHit: <fileId oder webKey>} oder kein Return-Wert | Aktualisiert den Ordner mit der entsprechenden Id wenn er angezeigt wird. Wenn keine folderId angegeben wurde, wird der gerade angezeigte Ordner aktualisiert. Mit selectedHit, kann eine bestimmte Mappe im Ordner markiert werden. |
| refreshScriptList |  | Läd eine angezeigte Skriptliste neu durch erneutes Ausführen des referenzierten Skripts. |
| scriptList | ScriptList Rückgabe von otris.scriptlist.List.transfer() | Zeigt die erstellte Skriptliste an. (Details: otris.scriptlist.List) |
| showFile | fileId[&registerId=<registerId>] | Zeigt die Mappe mit der entsprechenden fileId an. Mit registerId (optional) kann auch ein Register angesteuert werden. |
| showEditFile | fileId[&registerId=<registerId>] | Zeigt die Mappe mit der entsprechenden fileId an. Mit registerId (optional) kann auch ein Register angesteuert werden. |
| showNewFile | fileId[&registerId=<registerId>] | Zeigt die Mappe mit der entsprechenden fileId im Bearbeitungsmodus an. Mit registerId (optional) kann auch ein Register angesteuert werden. ACHTUNG: Nur mit neu angelegten Mappen verwenden, da ein "Abbruch" die Mappe löscht! |
| showFolder | folderId | Zeigt den Ordner mit der entsprechenden folderId an. |
| treeChart | TreeChart als stringified JSON | Zeigt eine TreeChart an. |
| updateFile | undefined oder fileId oder JSON String, siehe Beispiele | Aktualisiert die angezeigte Mappe |


## Weitere Beispiele


```javascript
context.returnType = "destroyHitTree";
return 0;
```

context.returnType = "destroyHitTree";
return 0;
```javascript
context.returnType = "html";
return JSON.stringify({
    // title of the dialog
 title: "<title>",
    // html content
 html: '<html>',
    // height of the dialog
 height: <integer>,
    // width of the dialog
 width: <integer>
});
```

context.returnType = "html";
return JSON.stringify({
    // title of the dialog
 title: "<title>",
    // html content
 html: '<html>',
    // height of the dialog
 height: <integer>,
    // width of the dialog
 width: <integer>
});
```javascript
context.returnType = "htmlpopup";

var popupConfiguration = {
    html: "", //  html code to embed in the popup window (only optional if custom url is set)

    // options available since DOCUMENTS 5.0f HF2

    // [optional] if set embedding html code in popup does not work
    url: "",
    // [optional] defaults to _blank
    windowTarget: "_blank",
    // [optional] see window.open for details
    windowOptions: "width=800, height=400",
    // [optional] if set to true the html code is ued as handlebars template
    // (this config object is given as model)
    useTemplate: true
};
return JSON.stringify(popupConfiguration);
```

context.returnType = "htmlpopup";

var popupConfiguration = {
    html: "", //  html code to embed in the popup window (only optional if custom url is set)

    // options available since DOCUMENTS 5.0f HF2

    // [optional] if set embedding html code in popup does not work
    url: "",
    // [optional] defaults to _blank
    windowTarget: "_blank",
    // [optional] see window.open for details
    windowOptions: "width=800, height=400",
    // [optional] if set to true the html code is ued as handlebars template
    // (this config object is given as model)
    useTemplate: true
};
return JSON.stringify(popupConfiguration);
```javascript
context.returnType = "refreshScriptList";
return 0;
```

context.returnType = "refreshScriptList";
return 0;
```javascript
context.returnType = "checkoutDocuments";

var returnValue = [
    {
        // the id of the file
        fileId: "",
        // the id of the document
        documentId: "",
        // the id of the register the document is in
        registerId: "",
        // optional, if local editing in chrome or firefox is enabled
        // the file will be opened directly, default: true
        openLocal: false
    }
];

return JSON.stringify(returnValue);
```

context.returnType = "checkoutDocuments";

var returnValue = [
    {
        // the id of the file
        fileId: "",
        // the id of the document
        documentId: "",
        // the id of the register the document is in
        registerId: "",
        // optional, if local editing in chrome or firefox is enabled
        // the file will be opened directly, default: true
        openLocal: false
    }
];

return JSON.stringify(returnValue);updateFile mit fileId:


```javascript
context.returnType = "updateFile";
context.returnValue = "<fileId1>";
```

context.returnType = "updateFile";
context.returnValue = "<fileId1>";updateFile mit JSON:


```javascript
context.returnType = "updateFile";
context.returnValue = JSON.stringify({ fileIds: ["<fileId1>", "<fileId2>"] });
```

context.returnType = "updateFile";
context.returnValue = JSON.stringify({ fileIds: ["<fileId1>", "<fileId2>"] });