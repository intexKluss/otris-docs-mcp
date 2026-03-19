---
title: "Verwendung des reloadRow-Events in Skriptlisten"
source: "https://otris.software/documents/howto/list/reloadrow-event.html"
---

# Verwendung des reloadRow-Events in Skriptlisten

Seit der Documents Version `5.0d HF2` gibt es die Möglichkeit in Skriptlisten
auf das *reloadRow-Event* zu reagieren. Es besteht dadurch die Möglichkeit die
Liste beispielsweise nach Änderung einer Mappe zu aktualisieren. Die Werte eines bestehenden
Listeneintrags können über den eingeführten Mechanismus aktualisiert werden.

Über die Funktion `addListener()` wird die Funktionalität aktiviert.


```javascript
const scriptListAPI = require("otris.scriptlist");
scriptList = new scriptListAPI.List("Titel der Skriptliste");
// Aktiviere die reloadRow Funktionalität
scriptList.addListener("reloadRow");
// [...]
context.returnType = "scriptList";
context.returnValue = scriptList.transfer();
```

const scriptListAPI = require("otris.scriptlist");
scriptList = new scriptListAPI.List("Titel der Skriptliste");
// Aktiviere die reloadRow Funktionalität
scriptList.addListener("reloadRow");
// [...]
context.returnType = "scriptList";
context.returnValue = scriptList.transfer();Tritt im Client nun eine Mappenänderung auf wird das *Listen-Skript* mit einem **ScriptList-Event** aufgerufen.
Das Event enthält den Namen `reloadRow` und ein Array von **IDs** die aktualisiert wurden.
Für diese **IDs** kann man nun mit Hilfe der `RowUpdate`-Klasse `otris.scriptlist.RowUpdate` die aktualisierten Daten zurück liefern.
Um eine Zeile zu entfernen muss diese mit `addRemoveEntry(row-id)` dem RowUpdate hinzugefügt werden.


```javascript
event = scriptListAPI.getScriptListEvent();
if(event && event.name === "reloadRow") {
    rowUpdate = new scriptListAPI.RowUpdate();
    // Verarbeite alle ids in event.ids und schicke die
    // Aktualisierungen zurück an den Client
    rowUpdate.addEntry("id6", {columnTwo: "6 New!"});
    rowUpdate.addRemoveEntry("id9");
    context.returnValue = rowUpdate.transfer();
}
```

event = scriptListAPI.getScriptListEvent();
if(event && event.name === "reloadRow") {
    rowUpdate = new scriptListAPI.RowUpdate();
    // Verarbeite alle ids in event.ids und schicke die
    // Aktualisierungen zurück an den Client
    rowUpdate.addEntry("id6", {columnTwo: "6 New!"});
    rowUpdate.addRemoveEntry("id9");
    context.returnValue = rowUpdate.transfer();
}
## Aktualisieren per Notification

Wenn in einer Liste Zustände von Komponenten angezeigt werden (z.B. Installationsstatus), dann können diese auch zur
Laufzeit per **Notification** aktualisiert werden.

Damit eine Notification nur Einträge in einer bestimmen Liste aktualisiert, muss in der Liste eine **Listen-ID** gesetzt werden.


```javascript
list.setListId(listId);
```

list.setListId(listId);Beim Erzeugen der Notification muss die *Listen-ID* dann dem Row-Update übergeben werden.


```javascript
// Notification erzeugen
notification = new notificationAPI.Notification("Installation abgeschlossen", "OCI Container");

// Row-Update erzeugen
rowUpdate = new scriptListAPI.RowUpdate(listId);
rowUpdate.addEntry("oci_1", { status: "Installation abgeschlossen" });

// Row-Update der Notification hinzufügen
scriptReturn = new notificationAPI.ScriptReturn("rowUpdate", rowUpdate.transfer());
notification.setOnloadAction(scriptReturn);
```

// Notification erzeugen
notification = new notificationAPI.Notification("Installation abgeschlossen", "OCI Container");

// Row-Update erzeugen
rowUpdate = new scriptListAPI.RowUpdate(listId);
rowUpdate.addEntry("oci_1", { status: "Installation abgeschlossen" });

// Row-Update der Notification hinzufügen
scriptReturn = new notificationAPI.ScriptReturn("rowUpdate", rowUpdate.transfer());
notification.setOnloadAction(scriptReturn);**Beispiel:**

Download: [scriptList_notificationUpdate.js](scriptList_notificationUpdate.js)


```javascript
const scriptListAPI = require("otris.scriptList");
const listId = "notificationUpdate";

// Eintrag aktualisieren
if(typeof finishInstallation === "string" && finishInstallation === "true") {

	// Notification erzeugen
	const notificationAPI = require("otris.notifications");
	const notification = new notificationAPI.Notification("Installation abgeschlossen", "OCI Container");

	// Row-Update erzeugen
	const rowUpdate = new scriptListAPI.RowUpdate(listId);
	rowUpdate.addEntry("oci_1", { status: "Installation abgeschlossen" });

	// Row-Update der Notification hinuufügen
	const scriptReturn = new notificationAPI.ScriptReturn("rowUpdate", rowUpdate.transfer());
	notification.setOnloadAction(scriptReturn);

	context.returnType = "notification";
	context.returnValue = notification.transfer();
}
else {

	const list = new scriptListAPI.List("Notification Update Beispiel");

	// Listen-ID setzen
	list.setListId(listId);

	list.addColumn({
		key: "package",
		label: "Paket",
	});
	list.addColumn("status", "Status").setWidth(200);

	// Zeile zeigt Zustand eines installierenden Pakets
	list.addRow("oci_1", ["OCI Container", "Installiere Paket..."]).setMetaData({ readonly: true });
	list.endList();

	list.addAction({ name: "finishInstallation", label: "Installation abschließen", action: `runScript:${context.scriptName}&finishInstallation=true` });

	context.returnType = "scriptList";
	context.returnValue = list.transfer();
}
```

const scriptListAPI = require("otris.scriptList");
const listId = "notificationUpdate";

// Eintrag aktualisieren
if(typeof finishInstallation === "string" && finishInstallation === "true") {

	// Notification erzeugen
	const notificationAPI = require("otris.notifications");
	const notification = new notificationAPI.Notification("Installation abgeschlossen", "OCI Container");

	// Row-Update erzeugen
	const rowUpdate = new scriptListAPI.RowUpdate(listId);
	rowUpdate.addEntry("oci_1", { status: "Installation abgeschlossen" });

	// Row-Update der Notification hinuufügen
	const scriptReturn = new notificationAPI.ScriptReturn("rowUpdate", rowUpdate.transfer());
	notification.setOnloadAction(scriptReturn);

	context.returnType = "notification";
	context.returnValue = notification.transfer();
}
else {

	const list = new scriptListAPI.List("Notification Update Beispiel");

	// Listen-ID setzen
	list.setListId(listId);

	list.addColumn({
		key: "package",
		label: "Paket",
	});
	list.addColumn("status", "Status").setWidth(200);

	// Zeile zeigt Zustand eines installierenden Pakets
	list.addRow("oci_1", ["OCI Container", "Installiere Paket..."]).setMetaData({ readonly: true });
	list.endList();

	list.addAction({ name: "finishInstallation", label: "Installation abschließen", action: `runScript:${context.scriptName}&finishInstallation=true` });

	context.returnType = "scriptList";
	context.returnValue = list.transfer();
}