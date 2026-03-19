---
title: "Anzahl Einträge am Register"
source: "https://otris.software/documents/howto/list/count.html"
---

# Anzahl Einträge am Register

Wenn an einem Register vom Typ **externer Aufruf** ein Gadget mit Skriptliste hinterlegt ist, ist es auch möglich,
wie bei Verknüpfungsregistern die Anzahl der Einträge neben dem Registernamen anzuzeigen.


## Konfiguration

Um die Anzahl anzuzeigen, muss am Register die Eigenschaft **countScript=<Skriptname>** gesetzt werden.
Dieses Skript wird aufgerufen, wenn an einer Mappe die Register angezeigt werden.

Das hinterlegte Skript muss die **Anzahl** der Einträge zurück geben.


## Count-Skript

Zur Implementierung des Count-Skriptes gibt es in der ScriptList-API die Hilfsmethode [[Script Extensions API/otris.scriptlist|otris.scriptlist.getCount()]].
Diese verwaltet ein internes Caching, sodass die Anzahl der Einträge nicht jedes mal neu berechnet werden muss,
wenn man innerhalb der angezeigten Mappe navigiert. Verlässt man die Mappe, wird dieser Cache automatisch geleert.

Wenn das Skript zur Anzeige des Count-Callbacks aufgerufen wird, wird das ScriptListEvent **Count** übergeben, welches ausgewertet werden kann.

Der Funktion getCount() muss ein Count-Callback übergeben werden, der die Berechnung der Anzahl übernimmt.


```javascript
const event = scriptListAPI.getScriptListEvent();

// script was called from register for displaying count
if (event && event.name === "count") {

  return scriptListAPI.getCount({
    countCallback: () => {...}
  }) + ""; // transfer count back to client
}
```

const event = scriptListAPI.getScriptListEvent();

// script was called from register for displaying count
if (event && event.name === "count") {

  return scriptListAPI.getCount({
    countCallback: () => {...}
  }) + ""; // transfer count back to client
}Im folgenden Beispiel wurde beim Relations-Mandant für den Mappentyp **Vorgang** (crmQuote) ein Register mit allen Vorgängen dieses Mappentyps hinzugefügt.

Am Anfang des Skriptes steht der Code zur Berechnung der Anzahl an Einträgen. Danach folgt der Code für die Anzeige des Gadgets.

Download: [Gadget_hitlist_crmQuote.js](Gadget_hitlist_crmQuote.js)


```javascript
const scriptListAPI = require("otris.scriptlist");
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

const event = scriptListAPI.getScriptListEvent();

// script was called from register for displaying count
if (event && event.name === "count") {

  return scriptListAPI.getCount({
    countCallback: () => {

      // create hitlist
      var hitlist = new scriptListAPI.HitresultList({
        pageSize: 0, // load all hits
        searchResources: ["crmQuote"]
      });

      // execute hitlist to fetch all pages
      hitlist.transfer();
      return hitlist.getTotalSize();
    }
  }) + ""; // transfer count back to client
}

//  gadgetConfig: { gadgetScript: "Gadget_hitlist_crmQuote", gadgetAction: "showList" }
gadgetAPI.registerGadgetAction("showList", () => {

  const slWrapper = gadgetAPI.getScriptListWrapperInstance();
  const hitlist = new scriptListAPI.HitresultList({
    searchResources: ["crmQuote"]
  });
  slWrapper.addScriptList(hitlist);
  return slWrapper;
});

return gadgetAPI.transfer();
```

const scriptListAPI = require("otris.scriptlist");
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

const event = scriptListAPI.getScriptListEvent();

// script was called from register for displaying count
if (event && event.name === "count") {

  return scriptListAPI.getCount({
    countCallback: () => {

      // create hitlist
      var hitlist = new scriptListAPI.HitresultList({
        pageSize: 0, // load all hits
        searchResources: ["crmQuote"]
      });

      // execute hitlist to fetch all pages
      hitlist.transfer();
      return hitlist.getTotalSize();
    }
  }) + ""; // transfer count back to client
}

//  gadgetConfig: { gadgetScript: "Gadget_hitlist_crmQuote", gadgetAction: "showList" }
gadgetAPI.registerGadgetAction("showList", () => {

  const slWrapper = gadgetAPI.getScriptListWrapperInstance();
  const hitlist = new scriptListAPI.HitresultList({
    searchResources: ["crmQuote"]
  });
  slWrapper.addScriptList(hitlist);
  return slWrapper;
});

return gadgetAPI.transfer();
## Eigener Cache-Key

Die Anzahl der Einträge im Register werden mit einem Default-Cache-Key **<file-id>:<register-id>-count** im PropCache gespeichert.

Wenn diese Anzahl für alle Vorgänge gleich ist, kann man auch einen eigenen Cache-Key vergeben.

Dazu muss getCount() der Parameter **cacheKey** übergeben werden.


```javascript
otris.scriptlist.getCount({
    cacheKey: "<cache-key>",
    countCallback: ...
});
```

otris.scriptlist.getCount({
    cacheKey: "<cache-key>",
    countCallback: ...
});
## Cache manuell leeren

Wenn sich die Anzahl der Einträge geändert hat, kann man mit der Funktion [[Script Extensions API/otris.scriptlist|otris.scriptlist.clearCount()]]
die gecachte Anzahl löschen.


```javascript
scriptListAPI.clearCount({
    cacheKey: "<cache-key>"
});
```

scriptListAPI.clearCount({
    cacheKey: "<cache-key>"
});