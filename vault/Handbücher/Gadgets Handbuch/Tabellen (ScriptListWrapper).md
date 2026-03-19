---
title: "Tabellen (ScriptListWrapper)"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/list.html"
---

# Tabellen (ScriptListWrapper)

Die Klasse [[Gadget API/otris.gadget.gui.ScriptListWrapper]] ermöglicht die Erstellung eines Gadget-Elements, das eine ScriptList kapselt und um Client-Funktionen erweitert werden kann.


## Wesentliche Merkmale

- Tabellen und Listen können mithilfe der Script-Extension scriptlist erstellt werden.
- Die Klasse scriptlist.List dient zur Erstellung generischer Listen (Tabellen), deren Daten und Verhalten direkt im Skript definiert werden.
- Mit der scriptlist.HitresultList-Klasse steht eine Komfortlösung zur Verfügung, die auf scriptlist.List basiert und speziell für die Erstellung von Hitresult-Listen optimiert ist.
- Eine Instanz von scriptlist.List wird durch .addScriptList(list) in eine ScriptListWrapper-Instanz übertragen, um sie im Gadget zu verwenden.


## Beispiel (einfach)

Dieses Beispiel konfiguriert ein **ScriptListWrapper Gadget** mit einer grundlegenden Struktur. Die Konfiguration erfolgt in zwei Abschnitten: der Erstellung und Konfiguration der **scriptlist.List** und der Integration in das Gadget.

Das Ergebnis ist ein Dialogfenster, das eine Liste mit Kontaktdaten anzeigt.

Die **Interaktion mit der Liste** ist auf verschiedene Arten möglich:

- Durch (Listen-)onRowClick: Ein Klick auf eine Zeile zeigt Details der ausgewählten Zeile in einem separaten Dialog an.
- Über (Listen-)Checkboxen: Mehrfachauswahl von Einträgen in der Liste.
- Mit (Gadget-)Aktionsbuttons: Funktionen wie "Auswahl anzeigen" oder "Abbrechen" können ausgelöst werden.


![relations_scriptlist_simple.png](../assets/img/gadget-types/relations_scriptlist_simple.png)

Abb. 82 - Simples ScriptListWrapper Gadget Dialogfenster Beispiel


### Abschnitt 1 - Die scriptlist.List

Für die Liste eines ScriptListWrapper Gadgets stehen [[Script Extensions API/otris.scriptlist.List|alle Funktionen der scriptlist.List Klasse]] für die Konfiguration zur Verfügung.


#### Grundkonfiguration der scriptlist.List

- new scriptlist.List(listTitle)
Instanziiert eine Liste (optional mit Titel).
- .addColumn(columnKey, label)
Fügt eine Spalte hinzu (optional mit Beschriftung).
- .addRow(rowKey, rowValues[])
Fügt eine Zeile mit Werten in Spaltenreihenfolge hinzu.
- .endList()
Schließt die Liste funktional ab.


#### Erweiterte Konfiguration der scriptlist.List

Dieses Beispiel nutzt folgende Funktionen für die erweiterte Konfiguration:

- .setSort({ sortConfig })
Aktiviert die Sortierbarkeit der Spalten im Dialogfenster mit remoteSort: false.
(Das multiSort-Attribut steuert die abhängige Sortierbarkeit mehrerer Spalten.)
- .setShowCheckboxes(true)
Aktiviert Checkboxen für die Mehrfachauswahl.
- .setOnRowClick(otrListRowClickCallback)
Definiert das Verhalten beim Klick auf einen Eintrag in der Liste:
documentsContext: Implizit für die Funktion vorhanden.
options: Enthält Attribute und Werte im Kontext des geklickten Eintrags. Wird durch den Klick auf einen Listeneintrag erstellt.

Die Funktion **list.setOnRowClick(function (documentsContext, options) { ... })** in diesem Beispiel konfiguriert und zeigt mit **documentsContext.openMessageDialog(dialogTitle, dialogConfig)** die Werte der geklickten Zeile. Die dafür genutzten Labels wurden aus den Kontextdaten des Gadgets übernommen, die serverseitig erstellt und dem Gadget übergeben wurden.


![relations_scriptlist_simple_onrowclick.png](../assets/img/gadget-types/relations_scriptlist_simple_onrowclick.png)

Abb. 83 - onRowClick Dialogfenster


### Abschnitt 2 - ScriptListWrapperInstance

Im zweiten Abschnitt wird die zuvor erstellte Liste an die **ScriptListWrapperInstance** übergeben. Diese wird aus der Gadget-Registrierung zurückgegeben und abschließend serialisiert, um die gesamte Gadget-Konfiguration als Rückgabewert bereitzustellen.


#### Grundkonfiguration der Gadget-Instanz

- .getScriptListWrapperInstance()
Erstellt eine neue Instanz der ScriptListWrapper.
- .addScriptList(list)
Übergabe der zuvor konfigurierten scriptlist.List an das Gadget.
- return scriptListWrapper
Rückgabe der Gadget-Instanz aus der gadgetAPI.registerGadgetAction(...).
- context.returnValue = gadgetAPI.transfer()
Übergibt die Gadget-Konfiguration serialisiert als Rückgabewert des Skripts.


#### Erweiterte Konfiguration der Gadget-Instanz

Dieses Beispiel verwendet folgende Funktionen zur weiteren Konfiguration des Gadgets:

- .setTitle(gadgetTitle)
Setzt den Titel des Dialogfensters.
- .addClientFunction(function fnName() { ... })
Fügt eine Funktion hinzu, die unter dem Namen fnName clientseitig verfügbar ist.
- .addContainerButton(buttonConfig)
Fügt dem Gadget einen Button mit einer zugewiesenen Funktionalität (clickFunction: fnName) hinzu.
- .setContextData(data)
Überträgt serverseitig bereitgestellte Daten zur clientseitigen Nutzung.


#### Button-Funktionalität: "OK"

Der Button `ok` (beschriftet als `Auswahl anzeigen`) ist mit der Funktion `onOk` verknüpft. Diese verwendet die lokalisierten Labels aus den Kontextdaten des Gadgets, um die Werte der ausgewählten Zeilen in einem Dialogfenster anzuzeigen. Dabei wird die Darstellung dynamisch an die Anzahl der ausgewählten Zeilen angepasst.
Die Anzeige erfolgt als Dialogfenster mit **documentsContext.openMessageDialog(dialogTitle, dialogConfig)**.


![relations_scriptlist_simple_onokbutton.png](../assets/img/gadget-types/relations_scriptlist_simple_onokbutton.png)

Abb. 84 - onOk Dialogfenster


### Integration und Skript

Das Beispiel wurde als [Benutzerdefinierte Aktion an einem Mappentyp](../integration/integration-filetype.html#als-benutzerdefinierte-aktion-an-einer-mappe) integriert.

Eigenschaft: **gadgetConfig: {"gadgetScript": "GadgetSample_ScriptListWrapper_simple", "gadgetAction": "show"}**

Download: [GadgetSample_ScriptListWrapper_simple.js](../assets/samples/GadgetSample_ScriptListWrapper_simple.js)


```javascript
/**
 * Simple Sample for ScriptListWrapper Gadget
 * Demonstrates how to interact and display a list of sample contacts in a dialog.
 *
 * Usage:
 * - Property name: gadgetConfig
 * - Property value: {"gadgetScript": "GadgetSample_ScriptListWrapper_simple", "gadgetAction": "show"}
 */

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register a gadget action "show"
gadgetAPI.registerGadgetAction("show", function (gadgetContext) {
    // Create a simple ScriptList with a title
    const list = new scriptList.List(context.getLocaleValue("de:Listen Titel;en:List Title"));

    list.setShowCheckboxes(true);

    // Add basic columns
    list.addColumn("firstName", context.getLocaleValue("de:Vorname;en:First name"));
    list.addColumn("lastName", context.getLocaleValue("de:Nachname;en:Last name"));
    list.addColumn("email", context.getLocaleValue("de:E-Mail;en:Email"));

    // Add sample data
    list.addRow("john.doe@example.com", ["John", "Doe", "john.doe@example.com"]);
    list.addRow("jane.smith@example.com", ["Jane", "Smith", "jane.smith@example.com"]);
    list.addRow("michael.brown@example.com", ["Michael", "Brown", "michael.brown@example.com"]);
    list.addRow("emily.jones@example.com", ["Emily", "Jones", "emily.jones@example.com"]);
    list.addRow("david.clark@example.com", ["David", "Clark", "david.clark@example.com"]);

    // Configure column sorting for the list
    list.setSort({
        multiSort: false, // Allow sorting by only one column at a time
        sortable: true,   // Enable sorting (default is true for object calls like this)
        remoteSort: false // Sort locally, avoids default server reload
    });

    // Define row click action
    // `documentsContext` and `options` (row details) are implicit
    list.setOnRowClick(function (documentsContext, options) {

        // Get ContextData, transferred using .setContextData() below
        const gcData = documentsContext.getGadgetContext().getContextData();

        // Get clicked row values (keys as defined in addColumn())
        const rowData = options.rowData;

        // Construct and display the message dialog
        const dialogMessage =
            gcData.idLabel + ": " + rowData.id + "<br/><br/>" +
            gcData.firstNameLabel + ": " + rowData.firstName + "<br/>" +
            gcData.lastNameLabel + ": " + rowData.lastName + "<br/>" +
            gcData.emailLabel + ": " + rowData.email + "<br/>";

        documentsContext.openMessageDialog(gcData.setOnRowClickTitle, dialogMessage);
    });

    // Indicate that this list contains the final entries of the overall dataset
    list.endList();

    // Create the ScriptListWrapper instance
    const scriptListWrapper = gadgetAPI.getScriptListWrapperInstance();

    // Add the list to the ScriptListWrapper
    scriptListWrapper.addScriptList(list);

    // Set the title of the dialog
    scriptListWrapper.setTitle(context.getLocaleValue("de:Gadget Titel;en: Gadget Title"));

    // Add client-side "OK" button with associated onOk function to the dialog
    scriptListWrapper.addClientFunction(function onOk() {
        // Retrieve the client object for the gadget (for ScriptList gadgets, returns a DobyGrid grid object)
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const selectedRows = dobyGrid.getSelectedRows();

        // Get ContextData, transferred using .setContextData() below
        const gcData = documentsContext.getGadgetContext().getContextData();

        var dialogMessage = gcData.onOkEmpty;

        if (selectedRows && selectedRows.length > 0) {
            dialogMessage = selectedRows.length === 1 ? gcData.onOkOneSelect : gcData.onOkMultiSelect;
            dialogMessage += "<br/><br/>"
                + selectedRows.map(function (row) {
                    const parsedRow = JSON.parse(JSON.stringify(row));
                    return parsedRow.firstName + ", " + parsedRow.lastName + ", " + parsedRow.email;
                }).join("<br/>");
        }
        // Construct and display the message dialog
        documentsContext.openMessageDialog(gcData.onOkButtonTitle, dialogMessage);
    });
    scriptListWrapper.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:Auswahl anzeigen;en:Show selection"),
        clickFunction: "onOk"
    });

    // Add client-side cancel-function AND cancel-button to dialog
    scriptListWrapper.addClientFunction(function onCancel() {
        documentsContext.closeGadget();
    });
    scriptListWrapper.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "onCancel"
    });

    // Configure labels server-side and set them as localized context data
    // for client-side use in the gadget instance
    const labels = {
        onOkButtonTitle: "de:Dialogfenster, zu Button \"Auswahl anzeigen\";en:Dialog window by button \"Show selection\"",
        onOkEmpty: "de:Kein Eintrag ausgewählt;en:No entry selected",
        onOkOneSelect: "de:Ein Eintrag wurde gewählt:;en:One entry selected:",
        onOkMultiSelect: "de:Mehrere Einträge wurden gewählt:;en:Multiple entries selected:",
        setOnRowClickTitle: "de:Dialogfenster, ausgelöst mit Klick auf eine Zeile;en:Dialog window triggered by clicking a row",
        idLabel: "de:Zeilen ID;en:Row ID",
        firstNameLabel: "de:Vorname;en:First name",
        lastNameLabel: "de:Nachname;en:Last name",
        emailLabel: "de:E-Mail;en:Email"
    };
    const localizedLabels = {};
    for (var key in labels) {
        localizedLabels[key] = context.getLocaleValue(labels[key]);
    }
    scriptListWrapper.setContextData(localizedLabels);

    // Return the Gadget instance
    return scriptListWrapper;
});

// Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple Sample for ScriptListWrapper Gadget
 * Demonstrates how to interact and display a list of sample contacts in a dialog.
 *
 * Usage:
 * - Property name: gadgetConfig
 * - Property value: {"gadgetScript": "GadgetSample_ScriptListWrapper_simple", "gadgetAction": "show"}
 */

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register a gadget action "show"
gadgetAPI.registerGadgetAction("show", function (gadgetContext) {
    // Create a simple ScriptList with a title
    const list = new scriptList.List(context.getLocaleValue("de:Listen Titel;en:List Title"));

    list.setShowCheckboxes(true);

    // Add basic columns
    list.addColumn("firstName", context.getLocaleValue("de:Vorname;en:First name"));
    list.addColumn("lastName", context.getLocaleValue("de:Nachname;en:Last name"));
    list.addColumn("email", context.getLocaleValue("de:E-Mail;en:Email"));

    // Add sample data
    list.addRow("john.doe@example.com", ["John", "Doe", "john.doe@example.com"]);
    list.addRow("jane.smith@example.com", ["Jane", "Smith", "jane.smith@example.com"]);
    list.addRow("michael.brown@example.com", ["Michael", "Brown", "michael.brown@example.com"]);
    list.addRow("emily.jones@example.com", ["Emily", "Jones", "emily.jones@example.com"]);
    list.addRow("david.clark@example.com", ["David", "Clark", "david.clark@example.com"]);

    // Configure column sorting for the list
    list.setSort({
        multiSort: false, // Allow sorting by only one column at a time
        sortable: true,   // Enable sorting (default is true for object calls like this)
        remoteSort: false // Sort locally, avoids default server reload
    });

    // Define row click action
    // `documentsContext` and `options` (row details) are implicit
    list.setOnRowClick(function (documentsContext, options) {

        // Get ContextData, transferred using .setContextData() below
        const gcData = documentsContext.getGadgetContext().getContextData();

        // Get clicked row values (keys as defined in addColumn())
        const rowData = options.rowData;

        // Construct and display the message dialog
        const dialogMessage =
            gcData.idLabel + ": " + rowData.id + "<br/><br/>" +
            gcData.firstNameLabel + ": " + rowData.firstName + "<br/>" +
            gcData.lastNameLabel + ": " + rowData.lastName + "<br/>" +
            gcData.emailLabel + ": " + rowData.email + "<br/>";

        documentsContext.openMessageDialog(gcData.setOnRowClickTitle, dialogMessage);
    });

    // Indicate that this list contains the final entries of the overall dataset
    list.endList();

    // Create the ScriptListWrapper instance
    const scriptListWrapper = gadgetAPI.getScriptListWrapperInstance();

    // Add the list to the ScriptListWrapper
    scriptListWrapper.addScriptList(list);

    // Set the title of the dialog
    scriptListWrapper.setTitle(context.getLocaleValue("de:Gadget Titel;en: Gadget Title"));

    // Add client-side "OK" button with associated onOk function to the dialog
    scriptListWrapper.addClientFunction(function onOk() {
        // Retrieve the client object for the gadget (for ScriptList gadgets, returns a DobyGrid grid object)
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const selectedRows = dobyGrid.getSelectedRows();

        // Get ContextData, transferred using .setContextData() below
        const gcData = documentsContext.getGadgetContext().getContextData();

        var dialogMessage = gcData.onOkEmpty;

        if (selectedRows && selectedRows.length > 0) {
            dialogMessage = selectedRows.length === 1 ? gcData.onOkOneSelect : gcData.onOkMultiSelect;
            dialogMessage += "<br/><br/>"
                + selectedRows.map(function (row) {
                    const parsedRow = JSON.parse(JSON.stringify(row));
                    return parsedRow.firstName + ", " + parsedRow.lastName + ", " + parsedRow.email;
                }).join("<br/>");
        }
        // Construct and display the message dialog
        documentsContext.openMessageDialog(gcData.onOkButtonTitle, dialogMessage);
    });
    scriptListWrapper.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:Auswahl anzeigen;en:Show selection"),
        clickFunction: "onOk"
    });

    // Add client-side cancel-function AND cancel-button to dialog
    scriptListWrapper.addClientFunction(function onCancel() {
        documentsContext.closeGadget();
    });
    scriptListWrapper.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "onCancel"
    });

    // Configure labels server-side and set them as localized context data
    // for client-side use in the gadget instance
    const labels = {
        onOkButtonTitle: "de:Dialogfenster, zu Button \"Auswahl anzeigen\";en:Dialog window by button \"Show selection\"",
        onOkEmpty: "de:Kein Eintrag ausgewählt;en:No entry selected",
        onOkOneSelect: "de:Ein Eintrag wurde gewählt:;en:One entry selected:",
        onOkMultiSelect: "de:Mehrere Einträge wurden gewählt:;en:Multiple entries selected:",
        setOnRowClickTitle: "de:Dialogfenster, ausgelöst mit Klick auf eine Zeile;en:Dialog window triggered by clicking a row",
        idLabel: "de:Zeilen ID;en:Row ID",
        firstNameLabel: "de:Vorname;en:First name",
        lastNameLabel: "de:Nachname;en:Last name",
        emailLabel: "de:E-Mail;en:Email"
    };
    const localizedLabels = {};
    for (var key in labels) {
        localizedLabels[key] = context.getLocaleValue(labels[key]);
    }
    scriptListWrapper.setContextData(localizedLabels);

    // Return the Gadget instance
    return scriptListWrapper;
});

// Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

## Beispiel: Das „LastUsed-Gadget“

Das „LastUsed-Gadget“ konfiguriert und zeigt eine **vierspaltige Tabelle**, die eine Liste der zuletzt benutzten Mappen des **aktuell angemeldeten Benutzers** darstellt. In diesem Gadget werden die im privaten „lastused“-Ordner des Benutzers gespeicherten Mappen verarbeitet. Der „lastused“-Ordner ist einer der [[Portalscript API/interfaces/SystemUser#getPrivateFolder|persönlichen Ordner des Benutzers im Mandanten]].


![LastUsed-Gadget im relations Demo-Mandanten](../assets/img/gadget-types/relations_scriptlist_lastused.png)

Abb. 85 - LastUsed-Gadget im relations Demo-Mandanten

- Die Tabelle umfasst die folgenden 4 Spalten:
Mappentyp: Der Titel des Mappentyps.
Titel: Der Titel der Mappe.
Eigentümer: Der Ersteller der Mappe.
Zuletzt bearbeitet: Das Datum der letzten Bearbeitung.
- Aufgelistet werden alle Mappen aus dem mengenbegrenzten persönlichen "lastused"-Ordner des aktiven Benutzers:
Die Mengenbegrenzung des "lastused"-Ordners beträgt standardmäßig 10.
Über die Documents-Property "MaxLastUsedFiles" kann diese auf einen Wert zwischen 0 und maximal 100 angepasst werden.
- .setSort({}): Mit multiSort: true ist eine hierarchische Sortierung konfiguriert, die alle Spalten der Tabelle berücksichtigt.
- Klick auf einen Eintrag: Öffnet die jeweilige Mappe.
- Integration: Die Integration erfolgt an einem öffentlichen Ordner.
- Eigenschaft: gadgetConfig: { gadgetScript: 'GadgetSample_LastUsedGadget', gadgetAction: 'showLastUsed' }
- Die Liste wird abschließend der ScriptListWrapper-Instanz übergeben, ohne dass dieses Gadget weiter modifiziert wird.

In diesem Beispiel wird mit **.setAction("showFile:" + id)** jeder Zeile der Tabelle ein individuelles Interaktionsverhalten zugewiesen. **showFile: fileID** ist eine der [[Script Extensions API/otris.scriptlist.List#addAction|vordefinierten Interaktionsmethoden]]. Dadurch wird die Mappe mit der übergebenen `fileID` geöffnet.

**Download**: [GadgetSample_LastUsedGadget.js](../assets/samples/GadgetSample_LastUsedGadget.js)


```javascript
/**
 * Sample Gadget to display the user's last used files
 * Demonstrates the use of ScriptList to fetch and display data in the ScriptListWrapper gadget.
 *
 * Usage:
 * - Property name: gadgetConfig
 * - Property value: { gadgetScript: "GadgetSample_LastUsedGadget", gadgetAction: "showLastUsed" }
 */

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register the gadget action "showLastUsed"
gadgetAPI.registerGadgetAction("showLastUsed", function () {

    // Create a ScriptList.List instance with a visible title
    const list = new scriptList.List(context.getLocaleValue("de:Zuletzt genutzt;en:Recently Used"));

    // Fetch the current system user
    const user = context.getSystemUser();

    // Retrieve the "lastused" folder containing the user's recently accessed files
    const lastUsedFolder = user.getPrivateFolder("lastused");
    const fileResultSet = lastUsedFolder.getFiles();

    // ordner übergeben an hitresullist

    // Define localized columns for the ScriptList
    list.addColumn("type", context.getLocaleValue("de:Mappentyp;en:Filetype"));
    list.addColumn("title", context.getLocaleValue("de:Titel;en:Title"));
    list.addColumn("owner", context.getLocaleValue("de:Eigentümer;en:Owner"));
    list.addColumn("lastUsed", context.getLocaleValue("de:Zuletzt bearbeitet;en:Last Edited"));

    // Iterate over the FileResultSet to populate the ScriptList with rows
    for (var file = fileResultSet.first(); file; file = fileResultSet.next()) {
        const id = file.getAutoText("id");
        const row = {
            type: file.getAutoText("fileTypeTitle"),
            title: file.getAutoText("title"),
            owner: file.getAutoText("fileOwner"),
            lastUsed: context.convertDateToString(file.getLastModificationDate())
        };

        // Add a row to the ScriptList
        const scriptListRow = list.addRow(id, row);

        // Set the row action to open the file when clicked
        scriptListRow.setAction("showFile:" + id);
    }

    // Configure column sorting for the list
    list.setSort({
        multiSort: true,  // Allow sorting by multiple columns simultaneously
        sortable: true,   // Enable sorting (default is true for object calls like this)
        remoteSort: false // Sort locally within the dialog, avoids server reload
    });

    // Mark the end of the list creation
    list.endList();

    // Create a ScriptListWrapper instance
    const scriptListWrapper = gadgetAPI.getScriptListWrapperInstance();

    // Add the ScriptList to the ScriptListWrapper
    scriptListWrapper.addScriptList(list);

    // Return the ScriptListWrapper instance WITHOUT calling the .transfer() method
    return scriptListWrapper;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Sample Gadget to display the user's last used files
 * Demonstrates the use of ScriptList to fetch and display data in the ScriptListWrapper gadget.
 *
 * Usage:
 * - Property name: gadgetConfig
 * - Property value: { gadgetScript: "GadgetSample_LastUsedGadget", gadgetAction: "showLastUsed" }
 */

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register the gadget action "showLastUsed"
gadgetAPI.registerGadgetAction("showLastUsed", function () {

    // Create a ScriptList.List instance with a visible title
    const list = new scriptList.List(context.getLocaleValue("de:Zuletzt genutzt;en:Recently Used"));

    // Fetch the current system user
    const user = context.getSystemUser();

    // Retrieve the "lastused" folder containing the user's recently accessed files
    const lastUsedFolder = user.getPrivateFolder("lastused");
    const fileResultSet = lastUsedFolder.getFiles();

    // ordner übergeben an hitresullist

    // Define localized columns for the ScriptList
    list.addColumn("type", context.getLocaleValue("de:Mappentyp;en:Filetype"));
    list.addColumn("title", context.getLocaleValue("de:Titel;en:Title"));
    list.addColumn("owner", context.getLocaleValue("de:Eigentümer;en:Owner"));
    list.addColumn("lastUsed", context.getLocaleValue("de:Zuletzt bearbeitet;en:Last Edited"));

    // Iterate over the FileResultSet to populate the ScriptList with rows
    for (var file = fileResultSet.first(); file; file = fileResultSet.next()) {
        const id = file.getAutoText("id");
        const row = {
            type: file.getAutoText("fileTypeTitle"),
            title: file.getAutoText("title"),
            owner: file.getAutoText("fileOwner"),
            lastUsed: context.convertDateToString(file.getLastModificationDate())
        };

        // Add a row to the ScriptList
        const scriptListRow = list.addRow(id, row);

        // Set the row action to open the file when clicked
        scriptListRow.setAction("showFile:" + id);
    }

    // Configure column sorting for the list
    list.setSort({
        multiSort: true,  // Allow sorting by multiple columns simultaneously
        sortable: true,   // Enable sorting (default is true for object calls like this)
        remoteSort: false // Sort locally within the dialog, avoids server reload
    });

    // Mark the end of the list creation
    list.endList();

    // Create a ScriptListWrapper instance
    const scriptListWrapper = gadgetAPI.getScriptListWrapperInstance();

    // Add the ScriptList to the ScriptListWrapper
    scriptListWrapper.addScriptList(list);

    // Return the ScriptListWrapper instance WITHOUT calling the .transfer() method
    return scriptListWrapper;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();

## Beispiel: relations E-Mail-UserExit

Dieses Beispiel ist für den **relations Demo-Mandanten** konfiguriert. Es erstellt eine Liste von **Kontakten aus zwei Mappentypen** und stellt diese durch einen Klick auf den **User-Exit im E-Mail-Senden-Dialog** (Brief-Symbol in den Zeilen „An“, „CC“ und „BCC“) zur Auswahl.


![FileEmailDialog-Gadget im relations Demo-Mandanten](../assets/img/gadget-types/relations_scriptlist_fileemail.png)

Abb. 86 - FileEmailDialog-Gadget im relations Demo-Mandanten


### Konfiguration der Liste

Für das Gadget wird die Liste mit einem lokalisierten Listentitel wie folgt konfiguriert:

- .setShowCheckboxes(true): Aktiviert die Mehrfachauswahl mithilfe von Checkboxen.
- .setShowQuickFilter(true): Fügt ein Suchfeld für jede Spalte hinzu.
- .setSort({ remoteSort: false, multiSort: false }): Ermöglicht die Sortierung nach einer einzelnen Spalte im Dialog.
- .addColumn(): Definiert die Spalten der Liste.
- Über ein FileResultSet der beiden Mappentypen werden die vorhandenen Daten abgerufen.
- .addRow(): Fügt die Daten aus dem FileResultSet in die Tabelle ein, wobei file.crmEmail gleichzeitig als Zeilen-ID genutzt wird.
- .setOnRowClick(): Überträgt den Zeilenwert der Spalte email an das aufrufende Feld und schließt das Gadget.
- .endList(): Schließt die Liste funktional ab.


### Konfiguration des Gadgets

In diesem Beispiel werden alle Kontakte, die über die Checkboxen ausgewählt wurden, per Button als durch Semikolon getrennte Liste der E-Mail-Adressen übertragen.

Das Gadget selbst wird mit folgenden Methoden konfiguriert:

- .addScriptList(list): Übergabe der konfigurierten Liste an das Gadget.
- .setTitle(): Setzt den Titel des Dialogfensters.
- .setContextData(fieldName): Übergibt den Feldnamen, damit Werte von der Client-Seite aus gesetzt werden können.
gadgetContext.gadgetParams.fieldName: Identifiziert das Feld, an dem das Gadget ausgeführt wurde.
- .addClientFunction(): Registriert Funktionen für die clientseitige Verwendung.
- .addContainerButton(): Fügt dem Gadget einen Button hinzu und benennt die zugehörige Funktion.


### Integration und FileEmailDialog Skript

Das Beispiel wurde als [User-Exit im E-Mail-Sendedialog](../integration/integration-filetype.html#gadget-im-user-exit-des-e-mail-sendedialog) integriert.

**Download**: [GadgetSample_FileEmailDialog.js](../assets/samples/GadgetSample_FileEmailDialog.js)


```javascript
/**
 * Sample for email dialog with click- and multiselect
 * Configured as filetype property emailGadgetConfig
 * Returns a list of filetypes (contacts or leads) from the relations demo principal.
 *
 * To use the Gadget:
 * Property name: emailGadgetConfig
 * Property value: {"gadgetScript": "GadgetSample_FileEmailDialog", "gadgetAction": "gadgetUserExit"}
*/

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register a gadget action "gadgetUserExit"
gadgetAPI.registerGadgetAction("gadgetUserExit", function (gadgetContext) {

    // Create the ScriptList with a localized title
    const list = new scriptList.List(context.getLocaleValue("de:Kontakte;en:Contacts"));

    list.setShowCheckboxes(true); // Enable multiselect
    list.setShowQuickFilter(true); // Add a search field for each column
    list.setSort({ remoteSort: false, multiSort: false }); // Sorting by a single column

    // Define the list columns with localized labels
    list.addColumn("firstName", context.getLocaleValue("de:Vorname;en:First name"));
    list.addColumn("lastName", context.getLocaleValue("de:Nachname;en:Last name"));
    list.addColumn("email", context.getLocaleValue("de:E-Mail;en:Email"));
    list.addColumn("source", context.getLocaleValue("de:Herkunft;en:Source"));

    // Populate the list with data
    const fileTypes = ["crmContact", "crmLead"]; // FileTypes from the relations demo principal
    var frs;
    var fileTypeTitles = {};
    fileTypes.forEach(function (ft) {
        frs = new FileResultset(ft, "", "");
        var isFirstFile = true;
        for (var file = frs.first(); file; file = frs.next()) {
            if (isFirstFile) {
                fileTypeTitles[ft] = file.getAutoText("%fileTypeTitle%");
                isFirstFile = false;
            }
            list.addRow(file.crmEmail, [file.crmFirstName, file.crmName, file.crmEmail, fileTypeTitles[ft]]);
        }
    });

    // Define row click action
    list.setOnRowClick(function (dc, options) {
        const cdata = dc.getGadgetContext().getContextData();

        // "FileEmail" is a predefined property for the FileEmailDialog
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");

        dlgContext.getModel().set(cdata.fieldName, options.row.get("email") + ";");

        // Without a delay value: Closes the dialog immediately after a row is clicked
        setTimeout(function () {
            dc.closeGadget();
        });
    });
    list.endList();

    // Create and configure the ScriptListWrapper instance
    const slw = gadgetAPI.getScriptListWrapperInstance();

    // Add the ScriptList to the ScriptListWrapper
    slw.addScriptList(list);

    // Set a dynamic localized title based on fileTypes
    var titlesString = context.getLocaleValue("de:Daten aus ;en:data from ;") + " " + fileTypes.map(function (ft) {
        return fileTypeTitles[ft];
    }).join(", ");
    slw.setTitle(titlesString);

    // Set context data to provide field information on the client-side
    const fieldConfig = JSON.parse(gadgetContext.gadgetParams.formFieldsJSON);
    slw.setContextData({
        fieldName: gadgetContext.gadgetParams.fieldName,
        fieldConfig: fieldConfig
    });

    // Add a cancel button and its client-side function
    slw.addClientFunction(function onCancel() {
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "onCancel"
    });

    // Add an "OK" button with its associated client-side function
    slw.addClientFunction(function onOk() {
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const selectedRows = dobyGrid.getSelectedRows();
        const cdata = documentsContext.getGadgetContext().getContextData();
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");
        var recipients = "";

        if (selectedRows.length > 0) {
            selectedRows.forEach(item =>
                recipients += item.id + ";");
        }
        dlgContext.getModel().set(cdata.fieldName, recipients);
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:Auswahl übernehmen;en:Apply selection"),
        clickFunction: "onOk"
    });

    // Return the configured ScriptListWrapper instance
    return slw;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Sample for email dialog with click- and multiselect
 * Configured as filetype property emailGadgetConfig
 * Returns a list of filetypes (contacts or leads) from the relations demo principal.
 *
 * To use the Gadget:
 * Property name: emailGadgetConfig
 * Property value: {"gadgetScript": "GadgetSample_FileEmailDialog", "gadgetAction": "gadgetUserExit"}
*/

context.enableModules(); // not required since documentsOS

// Import required modules
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
const scriptList = require("otris.scriptlist");

// Register a gadget action "gadgetUserExit"
gadgetAPI.registerGadgetAction("gadgetUserExit", function (gadgetContext) {

    // Create the ScriptList with a localized title
    const list = new scriptList.List(context.getLocaleValue("de:Kontakte;en:Contacts"));

    list.setShowCheckboxes(true); // Enable multiselect
    list.setShowQuickFilter(true); // Add a search field for each column
    list.setSort({ remoteSort: false, multiSort: false }); // Sorting by a single column

    // Define the list columns with localized labels
    list.addColumn("firstName", context.getLocaleValue("de:Vorname;en:First name"));
    list.addColumn("lastName", context.getLocaleValue("de:Nachname;en:Last name"));
    list.addColumn("email", context.getLocaleValue("de:E-Mail;en:Email"));
    list.addColumn("source", context.getLocaleValue("de:Herkunft;en:Source"));

    // Populate the list with data
    const fileTypes = ["crmContact", "crmLead"]; // FileTypes from the relations demo principal
    var frs;
    var fileTypeTitles = {};
    fileTypes.forEach(function (ft) {
        frs = new FileResultset(ft, "", "");
        var isFirstFile = true;
        for (var file = frs.first(); file; file = frs.next()) {
            if (isFirstFile) {
                fileTypeTitles[ft] = file.getAutoText("%fileTypeTitle%");
                isFirstFile = false;
            }
            list.addRow(file.crmEmail, [file.crmFirstName, file.crmName, file.crmEmail, fileTypeTitles[ft]]);
        }
    });

    // Define row click action
    list.setOnRowClick(function (dc, options) {
        const cdata = dc.getGadgetContext().getContextData();

        // "FileEmail" is a predefined property for the FileEmailDialog
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");

        dlgContext.getModel().set(cdata.fieldName, options.row.get("email") + ";");

        // Without a delay value: Closes the dialog immediately after a row is clicked
        setTimeout(function () {
            dc.closeGadget();
        });
    });
    list.endList();

    // Create and configure the ScriptListWrapper instance
    const slw = gadgetAPI.getScriptListWrapperInstance();

    // Add the ScriptList to the ScriptListWrapper
    slw.addScriptList(list);

    // Set a dynamic localized title based on fileTypes
    var titlesString = context.getLocaleValue("de:Daten aus ;en:data from ;") + " " + fileTypes.map(function (ft) {
        return fileTypeTitles[ft];
    }).join(", ");
    slw.setTitle(titlesString);

    // Set context data to provide field information on the client-side
    const fieldConfig = JSON.parse(gadgetContext.gadgetParams.formFieldsJSON);
    slw.setContextData({
        fieldName: gadgetContext.gadgetParams.fieldName,
        fieldConfig: fieldConfig
    });

    // Add a cancel button and its client-side function
    slw.addClientFunction(function onCancel() {
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "cancel",
        label: context.getLocaleValue("de:Abbrechen;en:Cancel"),
        clickFunction: "onCancel"
    });

    // Add an "OK" button with its associated client-side function
    slw.addClientFunction(function onOk() {
        const dobyGrid = documentsContext.getGadgetContext().getClientObject();
        const selectedRows = dobyGrid.getSelectedRows();
        const cdata = documentsContext.getGadgetContext().getContextData();
        const dlgContext = documents.sdk.dialogRegistry.getDialogContext("FileEmail");
        var recipients = "";

        if (selectedRows.length > 0) {
            selectedRows.forEach(item =>
                recipients += item.id + ";");
        }
        dlgContext.getModel().set(cdata.fieldName, recipients);
        documentsContext.closeGadget();
    });
    slw.addContainerButton({
        id: "ok",
        label: context.getLocaleValue("de:Auswahl übernehmen;en:Apply selection"),
        clickFunction: "onOk"
    });

    // Return the configured ScriptListWrapper instance
    return slw;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();

## Beispiel ScriptList crmUsers_scriptList als runScript

Mit der Eigenschaft **runScript** können Skripte an Ordnern und Outbars eingebunden werden, deren Rückgabe im Ordnerframe angezeigt wird.

Das Skript **crmUsers_scriptList** konfiguriert eine [[Script Extensions API/otris.scriptlist.List|ScriptList]], die im Kontext des Ordners **"crmUsers"** des **"relations" Demo-Mandanten** verwendet wird. Es listet die aktuellen Benutzer auf und bietet über eine Detailansicht weiterführende Informationen zu jedem Benutzer.


![relations_scriptlist_crmuser.png](../assets/img/gadget-types/relations_scriptlist_crmuser.png)

Abb. 87 - Ansicht des `Kollegen`-Ordners

Die Liste der Benutzer mit relevanten Informationen und der Möglichkeit, Details einzublenden, wird wie folgt erstellt:

- Neue Benutzer anlegen: Aktion an der Liste vom Typ: type: "button".
Über eine Aktion "runScript:crmUser_New" realisiert.
- Benutzerdetails anzeigen: Details zu einzelnen Benutzern können in einer ausklappbaren Ansicht angezeigt werden:
Mit einem DetailsScript crmUsers_detailList realisiert.
Persönliche Angaben: Informationen aus den Mappenfeldern.
Foto: Falls im Register ein Foto hinterlegt ist, wird es angezeigt.

Somit besteht dieses **Beispiel aus 3 Skripten**: `crmUsers_scriptList`, `crmUser_New`, `crmUsers_detailList`.


### Integration und Skript crmUsers_scriptList

Das Script `crmUsers_scriptList` wurde als **Eigenschaft runScript** am Ordner `crmUsers (Kollegen)` mit den **Ordnerzugriffsrechten** für die `CRMAdmin`-Gruppe hinzugefügt.


#### Funktionen für die ausklappbaren Details

- .setShowDetailsColumn(true): Aktiviert Detailerweiterung für Listeneinträge.
- .setAutoShowDetails(): Aktiviert automatisches Aufklappen der Detailzeile bei Klick auf einen Eintrag.
- .setDetailsParams(): Übergibt Parameter an das Details-Skript.
- .setDetailsScriptName(): Benennt das Details-Skript.


#### Weitere verwendete Funktionen

- .setShowRefreshButton(): Zeigt eine Schaltfläche zum Aktualisieren der Liste an.
- .addColumn(): Definiert die Spalten der Liste.
- .addRow(): Fügt ausgewählte Feldwerte und Eigenschaften aus dem HitResultset der Benutzer (crmUser) in die Tabelle ein.
- .setAction(): Konfiguriert einen Button mit dem Runskript crmUser_New als Aktion.
- .setTitle(): Übernimmt den Titel von crmUsers (Kollegen) als Listentitel.
- .setAppendTotalSize(): Fügt dem Titel die Gesamtzahl der Treffer hinzu.
- .endList(): Schließt die Liste funktional ab.

**Download**: [crmUsers_scriptList.js](../assets/samples/crmUsers_scriptList.js)


```javascript
/**
 * Sample ScriptList for the "crmUsers" folder in the relations demo principal.
 * Displays a list of users with details and a picture from the register.
 * Configured to be used as a runScript property in the "crmUsers" folder.
 * Provides functionality to view details of existing users
 * through the separate "crmUsers_detailList" script.
 *
 * Usage: - Property: runScript: crmUsers_scriptList
 */

context.enableModules(); // not required since documentsOS

const scriptList = require("otris.scriptlist"); // Import required modules

// get global and some folder properties
var lang = context.getClientLang();
var folder = context.getFoldersByName("crmUsers").first();
var action = folder.getActionByName("crmUser_New");

// define the list and the properties
var list = new scriptList.List("crmUsers");
list.setShowDetailsColumn(true); // show expandable details for each row
list.setAutoShowDetails(true); // automatically expand details on row click
// exclusive mode
list.setShowRefreshButton(true); // add a refresh button to the top of the list

// define columns
list.addColumn("login", "Login");
list.addColumn("firstname", context.getLocaleValue("de:Vorname;en:First name", lang));
list.addColumn("lastname", context.getLocaleValue("de:Nachname;en:Last name", lang));
list.addColumn("email", context.getLocaleValue("de:E-Mail;en:E-mail", lang));
list.addColumn("status", context.getLocaleValue("de:Gesperrt;en:Disabled", lang), "CHECKBOX");
list.addColumn("lastchangedate", context.getLocaleValue("de:Zuletzt geändert am;en:Last modified", lang));
list.addColumn("lastchangeuser", context.getLocaleValue("de:Zuletzt geändert von;en:Last modified by", lang));

// set action to the list
list.addAction({
    name: "new",
    label: context.getLocaleValue(action.label, lang),
    action: "runScript:crmUser_New", // script "crmUser_New" must exist
    type: "button",
    imageFile: "mdi:mdi-account-plus",
    alwaysShowLabel: true,
    tooltip: context.getLocaleValue(
        "de:Bei Klick auf diesen Schalter können Sie einen neuen Benutzer anlegen.;" +
        "en:By clicking this button you can create a new user."
    )
});

// fill list with data
var hrs = new HitResultset("crmUser", "", "", "");
for (var hit = hrs.first(); hit; hit = hrs.next()) {
    var file = hit.getFile();
    var id = file.getAutoText("id");
    var row = list.addRow(id, [
        file.crmLogin,
        file.crmFirstName,
        file.crmName,
        file.crmEmail,
        file.crmDeactivated,
        file.getAutoText("lastModifiedAt"),
        file.getAutoText("lastEditor")
    ]);

    var photos = file.getRegisterByName("crmPhoto").getDocuments();
    var photo = null;
    if (photos.size() > 0) {
        photo = photos.first().getAttribute("id");
    }

    // set parameters for the expanding row script
    row.setDetailsParams({ id: id, lang: lang, photo: photo });

    // Set the script for the expandable row. "crmUsers_detailList" must exist.
    // Allowed returnTypes for the script are: "HTML" and "ScriptList"
    row.setDetailsScriptName("crmUsers_detailList");


    // set action to open the file when the row is clicked
    row.setAction("showFile:" + id);
}

// Configure the list title
list.setTitle(context.getLocaleValue(
    context.getFoldersByName("crmUsers").first().label,
    context.getClientLang()
));
list.setAppendTotalSize(true); // Append the total number of rows to the list title

// Mark the end of the list creation
list.endList();

// Specify the return type and assign the return value
context.returnType = "scriptList";
context.returnValue = list.transfer();
```

/**
 * Sample ScriptList for the "crmUsers" folder in the relations demo principal.
 * Displays a list of users with details and a picture from the register.
 * Configured to be used as a runScript property in the "crmUsers" folder.
 * Provides functionality to view details of existing users
 * through the separate "crmUsers_detailList" script.
 *
 * Usage: - Property: runScript: crmUsers_scriptList
 */

context.enableModules(); // not required since documentsOS

const scriptList = require("otris.scriptlist"); // Import required modules

// get global and some folder properties
var lang = context.getClientLang();
var folder = context.getFoldersByName("crmUsers").first();
var action = folder.getActionByName("crmUser_New");

// define the list and the properties
var list = new scriptList.List("crmUsers");
list.setShowDetailsColumn(true); // show expandable details for each row
list.setAutoShowDetails(true); // automatically expand details on row click
// exclusive mode
list.setShowRefreshButton(true); // add a refresh button to the top of the list

// define columns
list.addColumn("login", "Login");
list.addColumn("firstname", context.getLocaleValue("de:Vorname;en:First name", lang));
list.addColumn("lastname", context.getLocaleValue("de:Nachname;en:Last name", lang));
list.addColumn("email", context.getLocaleValue("de:E-Mail;en:E-mail", lang));
list.addColumn("status", context.getLocaleValue("de:Gesperrt;en:Disabled", lang), "CHECKBOX");
list.addColumn("lastchangedate", context.getLocaleValue("de:Zuletzt geändert am;en:Last modified", lang));
list.addColumn("lastchangeuser", context.getLocaleValue("de:Zuletzt geändert von;en:Last modified by", lang));

// set action to the list
list.addAction({
    name: "new",
    label: context.getLocaleValue(action.label, lang),
    action: "runScript:crmUser_New", // script "crmUser_New" must exist
    type: "button",
    imageFile: "mdi:mdi-account-plus",
    alwaysShowLabel: true,
    tooltip: context.getLocaleValue(
        "de:Bei Klick auf diesen Schalter können Sie einen neuen Benutzer anlegen.;" +
        "en:By clicking this button you can create a new user."
    )
});

// fill list with data
var hrs = new HitResultset("crmUser", "", "", "");
for (var hit = hrs.first(); hit; hit = hrs.next()) {
    var file = hit.getFile();
    var id = file.getAutoText("id");
    var row = list.addRow(id, [
        file.crmLogin,
        file.crmFirstName,
        file.crmName,
        file.crmEmail,
        file.crmDeactivated,
        file.getAutoText("lastModifiedAt"),
        file.getAutoText("lastEditor")
    ]);

    var photos = file.getRegisterByName("crmPhoto").getDocuments();
    var photo = null;
    if (photos.size() > 0) {
        photo = photos.first().getAttribute("id");
    }

    // set parameters for the expanding row script
    row.setDetailsParams({ id: id, lang: lang, photo: photo });

    // Set the script for the expandable row. "crmUsers_detailList" must exist.
    // Allowed returnTypes for the script are: "HTML" and "ScriptList"
    row.setDetailsScriptName("crmUsers_detailList");


    // set action to open the file when the row is clicked
    row.setAction("showFile:" + id);
}

// Configure the list title
list.setTitle(context.getLocaleValue(
    context.getFoldersByName("crmUsers").first().label,
    context.getClientLang()
));
list.setAppendTotalSize(true); // Append the total number of rows to the list title

// Mark the end of the list creation
list.endList();

// Specify the return type and assign the return value
context.returnType = "scriptList";
context.returnValue = list.transfer();
### Das DetailsScript crmUsers_detailList

Der Rückgabetyp für ein `DetailsScript` kann entweder **HTML** oder **ScriptList** sein.

Im Skript `crmUsers_detailList` wird mithilfe der übergebenen `DetailsParams` (`id`, `lang`, `photo`) für jede Zeile ein **HTML** generiert. Zur **Vermeidung von XSS-Angriffen** wird die `util`-Funktion **makeHTML** verwendet, die gefährliche Zeichen für die HTML-Ausgabe maskiert.

Mit `context.getAutoText()` wird hier der volle Name des Vorgesetzten ermittelt. Autotexte, die mit **value->** beginnen, erwarten einen festen Wert.

**Download**: [crmUsers_detailList.js](../assets/samples/crmUsers_detailList.js)


```javascript
/**
 * Sample for ScriptlistDetailsScript called from sample crmUsers_scriptList
 * with the set parameters id, lang, photo.
 * Generates and returns the HTML header for one row.
 */

// Beware of XSS and ensure HTML tags are properly masked.
// util.makeHTML(): Escapes special characters in a string for safe HTML output.

var file = context.getFileById(id);

var superior = context.getAutoText(
    "value->userlogin." + util.makeHTML(file.crmSuperior, true) + ".userFullname"
) || context.getLocaleValue(
    "de:Kein Vorgesetzter angegeben;en:No superior set:", lang
);

var htmlimg = "<th rowspan='2' style='padding-right: 7px'>" +
    "<img style='height: 100px;' src='{{thumbnailUrl \"" + id + "\" \""
    + photo + "\" }}'></img></th>";

var html = "<table style='margin-top: 10px; line-height: 18px'><tr>" + htmlimg +
    "<td style='vertical-align: top; padding-left: 7px;'><table><tr>" +
    "<td colspan='2' style='padding-bottom: 8px'>" +
    "<h1 style='font-size: 10pt'>" +
    util.makeHTML(file.crmSalutation, true) + " " +
    util.makeHTML(file.crmTitle, true) + " " +
    util.makeHTML(file.crmFirstName, true) + " " +
    util.makeHTML(file.crmName, true) +
    "</h1></td></tr>" +
    "<tr><td>" + context.getLocaleValue("de:Vorgesetzter:;en:Superior:", lang) + " "
    + superior + "</td></tr>" +
    "<tr><td>" + context.getLocaleValue("de:Telefon:;en:Phone:", lang) + " "
    + util.makeHTML(file.crmPhone, true) + "</td></tr>" +
    "<tr><td>" + context.getLocaleValue("de:Mobil:;en:Mobilephone:", lang) + " "
    + util.makeHTML(file.crmMobilePhone, true) + "</td></tr>" +
    "</table></td></tr></table><br/>";

context.returnType = "html";
context.returnValue = html;
```

/**
 * Sample for ScriptlistDetailsScript called from sample crmUsers_scriptList
 * with the set parameters id, lang, photo.
 * Generates and returns the HTML header for one row.
 */

// Beware of XSS and ensure HTML tags are properly masked.
// util.makeHTML(): Escapes special characters in a string for safe HTML output.

var file = context.getFileById(id);

var superior = context.getAutoText(
    "value->userlogin." + util.makeHTML(file.crmSuperior, true) + ".userFullname"
) || context.getLocaleValue(
    "de:Kein Vorgesetzter angegeben;en:No superior set:", lang
);

var htmlimg = "<th rowspan='2' style='padding-right: 7px'>" +
    "<img style='height: 100px;' src='{{thumbnailUrl \"" + id + "\" \""
    + photo + "\" }}'></img></th>";

var html = "<table style='margin-top: 10px; line-height: 18px'><tr>" + htmlimg +
    "<td style='vertical-align: top; padding-left: 7px;'><table><tr>" +
    "<td colspan='2' style='padding-bottom: 8px'>" +
    "<h1 style='font-size: 10pt'>" +
    util.makeHTML(file.crmSalutation, true) + " " +
    util.makeHTML(file.crmTitle, true) + " " +
    util.makeHTML(file.crmFirstName, true) + " " +
    util.makeHTML(file.crmName, true) +
    "</h1></td></tr>" +
    "<tr><td>" + context.getLocaleValue("de:Vorgesetzter:;en:Superior:", lang) + " "
    + superior + "</td></tr>" +
    "<tr><td>" + context.getLocaleValue("de:Telefon:;en:Phone:", lang) + " "
    + util.makeHTML(file.crmPhone, true) + "</td></tr>" +
    "<tr><td>" + context.getLocaleValue("de:Mobil:;en:Mobilephone:", lang) + " "
    + util.makeHTML(file.crmMobilePhone, true) + "</td></tr>" +
    "</table></td></tr></table><br/>";

context.returnType = "html";
context.returnValue = html;

### Das runScript: crmUser_New

Das Skript `crmUser_New` erstellt eine neue Mappe des Mappentyps `crmUser`. Die **File-ID** der neu erstellten Mappe wird als Rückgabewert (`context.returnValue`) und der Rückgabetyp **showNewFile** gesetzt, wodurch diese direkt zum Bearbeiten angezeigt wird.

**Download**: [crmUser_New.js](../assets/samples/crmUser_New.js)


```javascript
/**
 * Script used as runscript for the "new" action in `crmUsers_scriptList`.
 *
 * Creates a new `crmUser` file and sets it for editing.
 * - `showNewFile`: Displays the file for editing.
 * - `returnValue`: File-ID names the newly created file for this purpose.
 */

var file = context.createFile("crmUser");
context.returnType = "showNewFile";
context.returnValue = file.getid();
```

/**
 * Script used as runscript for the "new" action in `crmUsers_scriptList`.
 *
 * Creates a new `crmUser` file and sets it for editing.
 * - `showNewFile`: Displays the file for editing.
 * - `returnValue`: File-ID names the newly created file for this purpose.
 */

var file = context.createFile("crmUser");
context.returnType = "showNewFile";
context.returnValue = file.getid();

## Beispiel HitresultList crmProducts_hitresultList als runScript

Mit der Eigenschaft **runScript** können Skripte an Ordnern und Outbars eingebunden werden, deren Rückgabe im Ordnerframe angezeigt wird.

Das Skript **crmProducts_hitresultList** konfiguriert eine [[Script Extensions API/otris.scriptlist.HitresultList|HitresultList]], die im Kontext des Ordners **crmProducts** des **"relations" Demo-Mandanten** verwendet wird. Es listet die aktuellen Produkte auf und ermöglicht über eine Detailansicht den Zugriff auf die Dokumente aus dem Register jedes Produkts.

Die **HitresultList** ist eine Komfortklasse der **ScriptList**. Sie erlaubt die einfache Erstellung einer Hitresultset-Liste mit nur wenigen Parametern, indem Dokumenttreffer (Hitresults) als ScriptList angezeigt werden.

Für eine **HitresultList** aus **Mappentypen** sind die beiden Parameter **title** und **searchResources** zu verwenden.
Für **HitresultList** aus Ordnern (**folder:**) und Registern (**register:**) ist `title` optional.
Es gibt weitere optionale Parameter und Callbacks, die die Erstellung der Scriptlist in der **HitresultList** steuern.

In diesem Beispiel werden die Feldwerte der Datensätze über die Callbacks für die Anzeige in den Spalten konfiguriert. Einzig die Produktnummer (**crmId**) bleibt als automatisch erstellte Listenspalte unverändert erhalten. Die Spalten Produkt, Lieferant und Anhänge werden über **Formatter** in den Callbacks aus den Feldwerten konfiguriert.

- Spalte Produkt: Wird aus dem ICON zur Kategorie, Titel, Listenpreis und Einkaufspreis zusammengesetzt und formatiert. Zeigt die Mappe zum Produkt onclick in der Mappenansicht.
- Spalte Lieferant: Zeigt den Lieferantentitel farbig an, mit Farbwechsel bei mouseover, öffnet die Mappe des Lieferanten onclick.
- Spalte Anhänge: Zeigt ein Icon, öffnet das Register Anhänge onclick in der Mappenansicht.
- Subrow: Vorschaubilder der Anhänge als ausklappbare Detailspalte unter jeder Reihe.


![relations_hitresultlist_crmproduct.png](../assets/img/gadget-types/relations_hitresultlist_crmproduct.png)

Abb. 88 - Ansicht des Produktkatalogs aus HitresultList


### Der HitresultList-Constructor

Die Funktionalitäten und Werterstellung wurden außerhalb des Konstruktors ausgelagert, um die Lesbarkeit des Skripts zu verbessern.

[[Portalscript API/classes/HitResultset|Hinweise zur HitResultset-Klasse]]


#### Verwendete HitresultList-Constructor Parameter

**Grundlegende Parameter für Mappentypen:**

- title: Der Titel der Liste, der hier aus dem existierenden Ordnernamen lokalisiert wird.
- searchResources: Die Liste der zu durchsuchenden Ressourcen. In diesem Beispiel der Mappentyp crmProduct (Produkt).

**Optionale Parameter:**

- hitlist: Technische Namen der Felder (hier des Mappentyps), die für die Liste als Spalten und Werte übernommen werden.
- pageSize: Steuert die Anzahl der geladenen Treffer (0 = alle Einträge).
- multiSort: Aktiviert die Möglichkeit, mehrere Spalten hierarchisch zu sortieren.

**Optionale Callbacks:**

- afterAddColumn: Wird nach dem Hinzufügen einer einzelnen Spalte aufgerufen und ermöglicht individuelle Anpassungen wie Formatierung oder Sichtbarkeit.
- afterAddColumns: Wird nach dem Hinzufügen aller Spalten aufgerufen und erlaubt globale Anpassungen wie das Hinzufügen neuer Spalten.
- afterAddRow: Wird nach dem Hinzufügen einer einzelnen Zeile aufgerufen und ermöglicht Konfigurationen für jede Zeile der Liste.


### Die HitresultList-Funktionen

Die **scriptlist.HitresultList** erbt die Funktionen der **scriptlist.List**, kann jedoch teilweise eigene Anpassungen vornehmen. Dadurch können die nachfolgenden Beschreibungen für die Funktionalitäten spezifisch für die **HitresultList** sein.


#### verwendete HitresultList-Funktionen

- Ausklappbare Details
.setShowDetailsColumn(true): Aktiviert Detailerweiterung für Listeneinträge.
.setSublistBlobThumbnails(true): Zeigt Vorschaubilder in der Detailansicht aus den Blob-Informationen der Subrow an.
- Mehrfachauswahl - Checkboxen
.setListStyle({config}): Siehe scriptlist.ScriptListStyle
rowCheckboxWrapperDisplay: CSS-Display-Definition.
rowCheckboxWrapperAlignItems: CSS-Align-Items-Definition.
- .setRowHeight(): Verändert die Zeilenhöhe (Produkt ist zweizeilig).
- .setCompactView(): Setzt das im Skript angelegte htmlFormatters.compactViewTemplate als alternative Ansicht für begrenzten UI-Platz.
- .addAction(): Fügt der Toolbar der Liste zwei Buttons hinzu.
action: "createFile:crmProduct&startWorkflow=true": Vordefinierte documents-webclient - handleNodeAction, die eine Mappe des Mappentyps crmProduct erstellt und den zugehörigen Workflow startet.
action: "removeFile": Vordefiniertes HitresultList - scriptListEvent, das die gewählten Mappen löscht.


#### Hilfsfunktionen für die Callbacks

- afterAddColumn: function afterAddColumn(list, docHit, myHRS, column)
Callback nach dem Hinzufügen jeder Spalte (einzeln). Der Funktion steht im Kontext die Instanz (column = scriptlist.Column) der aktuell hinzugefügten Spalte zur Verfügung. column.setVisible(boolean): Steuert die Sichtbarkeit der Spalte.
column.setFormatter(formatter): Funktion oder Template, das beim Rendern jeder Zelle dieser Spalte verwendet wird.
- afterAddColumns: function configureColumns(list, docHit, myHRS)
Callback nach dem Hinzufügen aller Spalten (abschließend). Der Funktion steht im Kontext die Instanz (list = scriptlist.HitresultList) der aktuellen HitresultList zur Verfügung. .addColumn(config) = eine scriptlist.Column
index: Position, an der die Spalte eingefügt werden soll. Dynamische Indexierung.
key: Technischer Name der Spalte.
label: Spaltenüberschrift.
sortKey: Bestimmt den Key, der bei der Spaltensortierung benutzt wird (sinnvoll, wenn die Zellen in der Spalte durch mehrere Keys entstehen).
formatter: Funktion oder Template, das beim Rendern jeder Zelle dieser Spalte verwendet wird.
comparator: Callback zum Sortieren der Werte dieser Spalte. comparatorCB(valA, valB, rowA, rowB).
- afterAddRow: function configureRowData(options)
Callback nach dem Hinzufügen jeder Zeile (einzeln). Der Funktion steht im Kontext ein options-Objekt mit unter anderem der Instanz (options.row = scriptlist.Row) der aktuell hinzugefügten Reihe zur Verfügung. options.row.setMetaData({ key1: value1, key2: value2, ... }): Überträgt Daten an den Client, die nicht im gerenderten Raster angezeigt werden.
options.row.addSubrow(config): Hinzufügen der Blob-Informationen, die für Vorschaubilder in der Detailansicht verwendet werden.
documentId: Technische ID des Blobs.
documentName: Dokumentname, der angezeigt werden soll.
extension: Erweiterung des Dokuments, die als automatisch generiertes Dateitypsymbol verwendet wird.
size: Größe, die auf dem Miniaturbildsymbol angezeigt wird.


#### Formatter für HTML-Inhalte in der Liste

- crmVendor: Formatiert die Spalte "Lieferant" mit einem klickbaren Text, der den Lieferanten öffnet. Der Text wechselt die Farbe bei Mouseover.
- productSummary: Formatiert eine Zusammenfassung der Produktinformationen, einschließlich Name, Kategorie, Listenpreis und Einkaufspreis, mit Icons und einer dynamischer Anordnung.
- attachmentRegister: Zeigt ein Icon an, das als Button die Anhänge auflistet. Wechselt die Farbe bei Mouseover.
- compactViewTemplate: Zeigt eine kompakte Ansicht der Produktinformationen (Name, Listenpreis, Einkaufspreis) in einer vereinfachten Darstellung an.


### Integration und Skript crmProducts_hitresultList

Das Script `crmProducts_hitresultList` wurde als **Eigenschaft runScript** am Ordner `crmProducts (Produktkatalog)` dem **"relations" Demo-Mandanten** hinzugefügt.

**Download**: [crmProducts_hitresultList.js](../assets/samples/crmProducts_hitresultList.js)


```javascript
/**
 * Configures a HitresultList for the "crmProduct" folder in the relations demo principal.
 *
 * This script displays a list of products, including detailed information
 * and a product image retrieved from the register. It is designed to be used
 * as the `runScript` property for the "crmProduct" folder.
 *
 * Features:
 * - Dynamic and interactive columns with custom formatters.
 * - Support for viewing product details and managing attachments.
 * - Includes actions for creating and deleting products directly from the list.
 *
 * Usage:
 * Property: runScript: crmProducts_hitresultList
 */

context.enableModules(); // Not required since documentsOS

const scriptList = require("otris.scriptlist"); // Import the required module

// Retrieve the localized label of the current folder
const hitlistLabel = context.folder && context.folder.getLocaleLabel();

// Specify the file type to use as the search resource
const searchResources = ["crmProduct"];

// Define the specific fields to retrieve from the files
const hitlistFields = [
    "crmName", "crmCategory", "crmListPrice", "crmPurchasePrice",
    "crmDescription", "crmId", "crmVendor"
];

// Centralized formatters for HTML content in the list.
const htmlFormatters = {
    crmVendor: '\
        <span \
            style="color:steelblue;cursor:pointer;" \
            onclick="event.stopPropagation();documentsContext.openFileView(\'{{row.metaData.vendorId}}\');" \
            onmouseover="this.style.color=\'lightskyblue\'" \
            onmouseout="this.style.color=\'steelblue\'">\
            {{value}}\
        </span>\
    ',
    productSummary: '\
        <div \
            style="display:flex;align-items:center;height:100%;" \
            title="{{row.crmDescription}}">\
            <div \
                class="icon {{row.metaData.iconClass}}" \
                style="font-size:26px;">\
            </div>\
            <div class="info" style="padding-left:5px;">\
                <div style="color:#333;">{{row.crmName}}</div>\
                <div style="color:#777;">\
                    {{#if row.crmListPrice}}\
                        {{columnsByKey.crmListPrice.label}}: {{row.crmListPrice}}€\
                    {{/if~}}\
                    {{#if row.crmPurchasePrice}}\
                        {{#if row.crmListPrice}}, {{/if}}\
                        {{columnsByKey.crmPurchasePrice.label}}: {{row.crmPurchasePrice}}€\
                    {{/if~}}\
                </div>\
            </div>\
        </div>\
    ',
    attachmentRegister: '\
        {{#if row.metaData.attachmentRegisterId~}}\
            <div \
                class="attachmentRegister mdi mdi-attachment" \
                style="color:#333;transform:rotate(90deg);font-size:26px;cursor:pointer;display:flex;justify-content:center;position:absolute;\
                       left:0;top:0;right:0;bottom:0;align-items:center" \
                onclick="event.stopPropagation();documentsContext.openFileView(\'{{row.metaData.id}}\',\'{{row.metaData.attachmentRegisterId}}\');" \
                onmouseover="this.style.color=\'#FFA500\'" \
                onmouseout="this.style.color=\'#333\'">\
            </div>\
        {{~/if}}\
    ',
    compactViewTemplate: '\
        <div>\
            <span>' + context.getLocaleValue('de:Produktname;en:Product name') + ':</span>\
            <span style="color:gray;">{{crmName}}</span><br>\
            {{#if crmListPrice}}\
                <span>' + context.getLocaleValue('de:Listenpreis;en:List price') + ':</span>\
                <span style="color:gray;">{{crmListPrice}}€</span><br>\
            {{/if}}\
            {{#if crmPurchasePrice}}\
                <span>' + context.getLocaleValue('de:Einkaufspreis;en:Purchase price') + ':</span>\
                <span style="color:gray;">{{crmPurchasePrice}}€</span>\
            {{/if}}\
        </div>\
    '
};

// Initialize the HitresultList
const hitresultList = new scriptList.HitresultList({
    title: hitlistLabel,
    searchResources: searchResources,
    hitlist: hitlistFields,
    pageSize: 0,
    multiSort: true,
    afterAddColumn: afterAddColumn, // Callback for individual column adjustments
    afterAddColumns: configureColumns, // Callback for global column adjustments
    afterAddRow: configureRowData // Callback for row-specific logic
});

// Set the row checkbox wrapper style to use flex layout and center alignment
hitresultList.setListStyle({
    rowCheckboxWrapperDisplay: "flex",
    rowCheckboxWrapperAlignItems: "center"
});

hitresultList.setShowDetailsColumn(true); // Show expandable details for each row
hitresultList.setSublistBlobThumbnails(true); // Enable Blob-Thumbnails for sublists

// Increase the row height to accommodate blob thumbnails
hitresultList.setRowHeight(45);

// Set a compact view template for alternative display when UI space is constrained
hitresultList.setCompactView(htmlFormatters.compactViewTemplate);

// Add a button to create a new crmProduct file and start the associated workflow
hitresultList.addAction({
    action: "createFile:crmProduct&startWorkflow=true",
    name: "newCrmProduct",
    label: context.getLocaleValue("de:Neu;en:New")
});

// Add a delete button, enabled when one or more rows are selected ("onRowSelect").
hitresultList.addAction({
    action: "removeFile",
    name: "removeFile",
    label: context.getLocaleValue("de:Löschen;en:Delete"),
    enabled: "onRowSelect",
});

// Return the configured HitresultList
context.returnType = "scriptList";
context.returnValue = hitresultList.transfer();

/**
 * Callback helper function after adding a single column.
 *
 * - "crmId": Visible.
 * - "crmVendor": Visible with formatter.
 * - Others: Hidden.
 */
function afterAddColumn(list, docHit, myHRS, column) {
    switch (column.getKey()) {
        case "crmId":
            column.setVisible(true);
            break;
        case "crmVendor": // Use centralized formatter
            column.setFormatter(htmlFormatters.crmVendor).setVisible(true);
            break;
        default:
            column.setVisible(false);
    }
}

/**
 * Callback helper function after adding all columns.
 *
 * - "Product Summary": HTML-formatted column before "crmId" to show key product information.
 * - "Attachments": Column to indicate attachments, with sorting and interaction.
 */
function configureColumns(list, docHit, myHRS) {

    // Add a summary column for products with aggregated values from the file
    list.addColumn({
        index: list.getColumnIndex("crmId") - 1,
        key: "productSummary",
        label: context.getLocaleValue("de:Produkt;en:Product"),
        sortKey: "crmName", // Use the "crmName" field from the file for sorting this column
        formatter: htmlFormatters.productSummary // Use centralized formatter
    });

    // Add column to show attachments register
    list.addColumn({
        key: "attachmentRegister",
        label: context.getLocaleValue("de:Anhänge;en:Attachments"),
        comparator: function (valA, valB, rowA, rowB) {
            const hasAttachmentA = !!rowA.getMetaData("attachmentRegisterId");
            const hasAttachmentB = !!rowB.getMetaData("attachmentRegisterId");

            // Sort rows: rows with attachments come first
            if (hasAttachmentA && hasAttachmentB) return 0;
            return hasAttachmentA ? -1 : 1;
        },
        formatter: htmlFormatters.attachmentRegister // Use centralized formatter
    });
}

/**
 * Callback helper function to configure row-specific data.
 *
 * - Maps product categories to corresponding icons for display.
 * - Transfers metadata and attachments for client-side use for each row.
 * - Adds subrows to display the documents from the file register.
 */
function configureRowData(options) {

    // Map product categories to corresponding icons
    var category2IconClass = {
        "Hardware/Printer": "mdi mdi-printer",
        "Hardware/Monitor": "mdi mdi-monitor",
        "Hardware/Scanner": "mdi mdi-scanner",
        "Hardware/Notebook": "mdi mdi-laptop-windows",
        "Hardware/PC-System": "mdi mdi-desktop-tower",
        "Software/OS": "mdi mdi-windows",
        "Software/Multimedia": "mdi mdi-play-box-outline",
        "Software/Office": "mdi mdi-office",
        "Software/Other": "mdi mdi-adjust" // used as default
    };

    // Retrieve the file and its attachments register
    var docFile = options.docHit.getFile();
    var docRegAttachments = docFile.getRegisterByName("crmAttachments");

    // Transfer context data to the client-side row
    options.row.setMetaData({
        attachmentRegisterId: (docRegAttachments.getDocuments().size() > 0) ? docRegAttachments.getAttribute("id") : undefined,
        iconClass: category2IconClass[options.values.crmCategory] || category2IconClass["Software/Other"],
        vendorId: options.docHit["crmVendor"],
        id: docFile.getid()
    });

    // Add subrows for attachments thumbnails
    var pictures = docRegAttachments.getDocuments();
    for (var pic = pictures.first(); pic; pic = pictures.next()) {
        options.row.addSubrow({
            documentId: pic.id,
            documentName: pic.fullname,
            extension: pic.extension,
            size: pic.size
        });
    }
}
```

/**
 * Configures a HitresultList for the "crmProduct" folder in the relations demo principal.
 *
 * This script displays a list of products, including detailed information
 * and a product image retrieved from the register. It is designed to be used
 * as the `runScript` property for the "crmProduct" folder.
 *
 * Features:
 * - Dynamic and interactive columns with custom formatters.
 * - Support for viewing product details and managing attachments.
 * - Includes actions for creating and deleting products directly from the list.
 *
 * Usage:
 * Property: runScript: crmProducts_hitresultList
 */

context.enableModules(); // Not required since documentsOS

const scriptList = require("otris.scriptlist"); // Import the required module

// Retrieve the localized label of the current folder
const hitlistLabel = context.folder && context.folder.getLocaleLabel();

// Specify the file type to use as the search resource
const searchResources = ["crmProduct"];

// Define the specific fields to retrieve from the files
const hitlistFields = [
    "crmName", "crmCategory", "crmListPrice", "crmPurchasePrice",
    "crmDescription", "crmId", "crmVendor"
];

// Centralized formatters for HTML content in the list.
const htmlFormatters = {
    crmVendor: '\
        <span \
            style="color:steelblue;cursor:pointer;" \
            onclick="event.stopPropagation();documentsContext.openFileView(\'{{row.metaData.vendorId}}\');" \
            onmouseover="this.style.color=\'lightskyblue\'" \
            onmouseout="this.style.color=\'steelblue\'">\
            {{value}}\
        </span>\
    ',
    productSummary: '\
        <div \
            style="display:flex;align-items:center;height:100%;" \
            title="{{row.crmDescription}}">\
            <div \
                class="icon {{row.metaData.iconClass}}" \
                style="font-size:26px;">\
            </div>\
            <div class="info" style="padding-left:5px;">\
                <div style="color:#333;">{{row.crmName}}</div>\
                <div style="color:#777;">\
                    {{#if row.crmListPrice}}\
                        {{columnsByKey.crmListPrice.label}}: {{row.crmListPrice}}€\
                    {{/if~}}\
                    {{#if row.crmPurchasePrice}}\
                        {{#if row.crmListPrice}}, {{/if}}\
                        {{columnsByKey.crmPurchasePrice.label}}: {{row.crmPurchasePrice}}€\
                    {{/if~}}\
                </div>\
            </div>\
        </div>\
    ',
    attachmentRegister: '\
        {{#if row.metaData.attachmentRegisterId~}}\
            <div \
                class="attachmentRegister mdi mdi-attachment" \
                style="color:#333;transform:rotate(90deg);font-size:26px;cursor:pointer;display:flex;justify-content:center;position:absolute;\
                       left:0;top:0;right:0;bottom:0;align-items:center" \
                onclick="event.stopPropagation();documentsContext.openFileView(\'{{row.metaData.id}}\',\'{{row.metaData.attachmentRegisterId}}\');" \
                onmouseover="this.style.color=\'#FFA500\'" \
                onmouseout="this.style.color=\'#333\'">\
            </div>\
        {{~/if}}\
    ',
    compactViewTemplate: '\
        <div>\
            <span>' + context.getLocaleValue('de:Produktname;en:Product name') + ':</span>\
            <span style="color:gray;">{{crmName}}</span><br>\
            {{#if crmListPrice}}\
                <span>' + context.getLocaleValue('de:Listenpreis;en:List price') + ':</span>\
                <span style="color:gray;">{{crmListPrice}}€</span><br>\
            {{/if}}\
            {{#if crmPurchasePrice}}\
                <span>' + context.getLocaleValue('de:Einkaufspreis;en:Purchase price') + ':</span>\
                <span style="color:gray;">{{crmPurchasePrice}}€</span>\
            {{/if}}\
        </div>\
    '
};

// Initialize the HitresultList
const hitresultList = new scriptList.HitresultList({
    title: hitlistLabel,
    searchResources: searchResources,
    hitlist: hitlistFields,
    pageSize: 0,
    multiSort: true,
    afterAddColumn: afterAddColumn, // Callback for individual column adjustments
    afterAddColumns: configureColumns, // Callback for global column adjustments
    afterAddRow: configureRowData // Callback for row-specific logic
});

// Set the row checkbox wrapper style to use flex layout and center alignment
hitresultList.setListStyle({
    rowCheckboxWrapperDisplay: "flex",
    rowCheckboxWrapperAlignItems: "center"
});

hitresultList.setShowDetailsColumn(true); // Show expandable details for each row
hitresultList.setSublistBlobThumbnails(true); // Enable Blob-Thumbnails for sublists

// Increase the row height to accommodate blob thumbnails
hitresultList.setRowHeight(45);

// Set a compact view template for alternative display when UI space is constrained
hitresultList.setCompactView(htmlFormatters.compactViewTemplate);

// Add a button to create a new crmProduct file and start the associated workflow
hitresultList.addAction({
    action: "createFile:crmProduct&startWorkflow=true",
    name: "newCrmProduct",
    label: context.getLocaleValue("de:Neu;en:New")
});

// Add a delete button, enabled when one or more rows are selected ("onRowSelect").
hitresultList.addAction({
    action: "removeFile",
    name: "removeFile",
    label: context.getLocaleValue("de:Löschen;en:Delete"),
    enabled: "onRowSelect",
});

// Return the configured HitresultList
context.returnType = "scriptList";
context.returnValue = hitresultList.transfer();

/**
 * Callback helper function after adding a single column.
 *
 * - "crmId": Visible.
 * - "crmVendor": Visible with formatter.
 * - Others: Hidden.
 */
function afterAddColumn(list, docHit, myHRS, column) {
    switch (column.getKey()) {
        case "crmId":
            column.setVisible(true);
            break;
        case "crmVendor": // Use centralized formatter
            column.setFormatter(htmlFormatters.crmVendor).setVisible(true);
            break;
        default:
            column.setVisible(false);
    }
}

/**
 * Callback helper function after adding all columns.
 *
 * - "Product Summary": HTML-formatted column before "crmId" to show key product information.
 * - "Attachments": Column to indicate attachments, with sorting and interaction.
 */
function configureColumns(list, docHit, myHRS) {

    // Add a summary column for products with aggregated values from the file
    list.addColumn({
        index: list.getColumnIndex("crmId") - 1,
        key: "productSummary",
        label: context.getLocaleValue("de:Produkt;en:Product"),
        sortKey: "crmName", // Use the "crmName" field from the file for sorting this column
        formatter: htmlFormatters.productSummary // Use centralized formatter
    });

    // Add column to show attachments register
    list.addColumn({
        key: "attachmentRegister",
        label: context.getLocaleValue("de:Anhänge;en:Attachments"),
        comparator: function (valA, valB, rowA, rowB) {
            const hasAttachmentA = !!rowA.getMetaData("attachmentRegisterId");
            const hasAttachmentB = !!rowB.getMetaData("attachmentRegisterId");

            // Sort rows: rows with attachments come first
            if (hasAttachmentA && hasAttachmentB) return 0;
            return hasAttachmentA ? -1 : 1;
        },
        formatter: htmlFormatters.attachmentRegister // Use centralized formatter
    });
}

/**
 * Callback helper function to configure row-specific data.
 *
 * - Maps product categories to corresponding icons for display.
 * - Transfers metadata and attachments for client-side use for each row.
 * - Adds subrows to display the documents from the file register.
 */
function configureRowData(options) {

    // Map product categories to corresponding icons
    var category2IconClass = {
        "Hardware/Printer": "mdi mdi-printer",
        "Hardware/Monitor": "mdi mdi-monitor",
        "Hardware/Scanner": "mdi mdi-scanner",
        "Hardware/Notebook": "mdi mdi-laptop-windows",
        "Hardware/PC-System": "mdi mdi-desktop-tower",
        "Software/OS": "mdi mdi-windows",
        "Software/Multimedia": "mdi mdi-play-box-outline",
        "Software/Office": "mdi mdi-office",
        "Software/Other": "mdi mdi-adjust" // used as default
    };

    // Retrieve the file and its attachments register
    var docFile = options.docHit.getFile();
    var docRegAttachments = docFile.getRegisterByName("crmAttachments");

    // Transfer context data to the client-side row
    options.row.setMetaData({
        attachmentRegisterId: (docRegAttachments.getDocuments().size() > 0) ? docRegAttachments.getAttribute("id") : undefined,
        iconClass: category2IconClass[options.values.crmCategory] || category2IconClass["Software/Other"],
        vendorId: options.docHit["crmVendor"],
        id: docFile.getid()
    });

    // Add subrows for attachments thumbnails
    var pictures = docRegAttachments.getDocuments();
    for (var pic = pictures.first(); pic; pic = pictures.next()) {
        options.row.addSubrow({
            documentId: pic.id,
            documentName: pic.fullname,
            extension: pic.extension,
            size: pic.size
        });
    }
}

## Beispiel HitresultList crmOpportunity_hitresultList als runScript

Mit der Eigenschaft **runScript** können Skripte an Ordnern und Outbars eingebunden werden, deren Rückgabe im Ordnerframe angezeigt wird.

Die **HitresultList** ist eine Komfortklasse der **ScriptList**. Sie erlaubt die einfache Erstellung einer Hitresultset-Liste mit nur wenigen Parametern, indem Dokumenttreffer (Hitresults) als ScriptList angezeigt werden.

Dieses Beispiel nutzt Chart-Gadgets, die sich aufgrund der unterschiedlichen Versionen von Chart.js in **documentsOS** und **DOCUMENTS 5** unterscheiden ([siehe Beispiel: Anzahl Projekte als Pie-Chart](../gadget-types/diagrams.html#beispiel-anzahl-projekte-als-pie-chart)). Dieser Unterschied muss bei der Verwendung der Chart-Gadget-Skripte für die Listeneinträge berücksichtigt werden.

Das Skript **crmOpportunity_hitresultList** konfiguriert eine [[Script Extensions API/otris.scriptlist.HitresultList|HitresultList]], die im Kontext des Ordners **crmOpportunity** (Verkaufsprojekte) des **"relations" Demo-Mandanten** verwendet wird.

- Alle Felder des Mappentyps mit der Eigenschaft in der Trefferliste darstellen (InHitlist) werden als Spalten der Liste übernommen.
- Die Liste gruppiert diese nach Vertriebsphase.
- Klick auf einen Listeneintrag öffnet die zugehörige Mappe.
- Das Verschieben eines Eintrags in eine andere Gruppe ändert die Vertriebsphase der Mappe.
- In der Toolbar wird ein Button zum Erstellen eines neuen Verkaufsprojekts hinzugefügt. (rekursiver Skriptaufruf)
- In der Toolbar wird der Pulldown-Liste zur Auswertung hinzugefügt:
zwei Chart-Gadgets (Pie-Chart und Bar-Chart) über externe Gadget-Skripte
ein XLSX-Export der Diagramme über ein externes Skript


![relations_hitresultlist_crmOpportunity.png](../assets/img/gadget-types/relations_hitresultlist_crmOpportunity.png)

Abb. 89 - Ansicht der Verkaufsprojekte aus HitresultList


### Ein minimaler HitresultList-Constructor

In diesem Beispiel wird die **HitresultList** nur mit den beiden für Mappentypen notwendigsten Parametern `title` und `searchResources` sowie der optionalen Trefferbeschränkung `pageSize` instanziiert.

- title: Der Titel der Liste für die Toolbar der Liste.
- searchResources: Die Liste der zu durchsuchenden Ressourcen. In diesem Beispiel der Mappentyp crmOpportunity (Verkaufsprojekte).
- pageSize: Steuert die Anzahl der geladenen Treffer (0 = alle Einträge).

Es wird **kein Trefferlisten-Parameter** (`hitlist`) verwendet. Das Standard-Verhalten nimmt entweder die erste vorhandene Trefferliste des Mappentyps oder, wenn diese nicht vorhanden ist, alle Felder mit der Eigenschaft `in der Trefferliste darstellen` (`InHitlist`), was für dieses Beispiel zutrifft.


### Die hitresultlist_crmOpportunity HitresultList-Funktionen

- .setShowCheckboxes(false): Deaktiviert die Auswahl über Checkboxen.
- .addListener("moveRow"): Fügt der ScriptList einen Listener hinzu, der bei Auftreten des Ereignisses rekursiv das Skript aufruft.
"moveRow": Event für das Verschieben einer Zeile.
Ein vordefiniertes Ereignis für ScriptList-Listener.
Wird mit event.name === "moveRow" ausgewertet. Das entsprechende Verhalten für den rekursiven Skriptaufruf wurde implementiert.
- .setGrouping([{}]): Konfiguriert das ScriptList-Grouping der Liste.
column_id: ID der Spalte, die gruppiert werden soll.
default_groups: Gruppen, die immer angezeigt werden, auch wenn keine Zeilen dieser Gruppe entsprechen.
- .setCollapsed(false): Alle Gruppen werden beim Start des Skripts geöffnet.
- .addAction(): Fügt der Toolbar der HitresultList eine listAction als Button (Standard) oder Pulldown-Aktion hinzu.
Button Neues Verkaufsprojekt: action: "runScript:crmOpportunity_hitresultList&createFile=true"
Rekursiver Skriptaufruf, ausgewertet mit createFile === "true".
Auswertung als Chart-Gadget:
type: "list": Eintrag in der Pulldown-Liste.
clientScript: Im Client auszuführende Funktion.
Einbindung von Gadget-Skripten mit documentsContext.callGadget(gadgetConfig).
Siehe: Anzahl Projekte als Pie-Chart
und Summen nach Projektphase als Bar-Chart.
XLSX-Export: Erstellt ein Excel-Diagramm zur Darstellung des Betrags je Vertriebsphase.
action: "runScript:crmOpportunity_createExcelChart" ruft ein externes Skript auf in dem die Erstellung und der Export implementiert sind.


### Steuerung returnType = "multipleAction" für rekursive Script-Aufrufe

Das Rückgabeobjekt wird abhängig von der Ausführung gefüllt. `multipleAction`, `updateFile`, `showNewFile` und `scriptList` sind [[Portalscript API/interfaces/Context#returnType|vordefinierte context.returnType]].

- multipleAction: Array für mehrere {returnType: ..., returnValue: ...} Objekte.
- updateFile: Aktualisiert die Mappe und zeigt sie mit den Änderungen neu an.
- showNewFile: Zeigt eine neue Mappe im Bearbeitungsmodus an.
- scriptList: Gibt das ScriptList-JSON zur Anzeige zurück.


### Helferfunktion getKeyOfENUMLabel

Die Funktion `getKeyOfENUMLabel` wird verwendet, um den Key eines lokalisierten Labels aus einem ENUM-Feld zu ermitteln. In den Eventobjekten werden nur die lokalisierten Labels übergeben, aber für die Verarbeitung und Aktualisierung der Mappe wird der zugehörige ENUM-Key benötigt. Die Funktion verwendet `context.getEnumLocaleValues()`, um die Arrays `enumKeys` und `enumLocales` zu füllen und den entsprechenden Key zurückzugeben, wenn das Label gefunden wird. Falls das Label nicht vorhanden ist, wird `null` zurückgegeben.


### Integration und verwendete Skripte crmOpportunity_hitresultList, crmOpportunity_createExcelChart

Das Script `crmOpportunity_hitresultList` wurde als **Eigenschaft runScript** am Ordner `crmOpportunity (Verkaufsprojekte)` dem **"relations" Demo-Mandanten** hinzugefügt.
Die Skripte für die Gadgets sowie `crmOpportunity_hitresultList` müssen im Mandanten als Skripte zu Ausführung verfügbar sein.

**Skripte für documentsOS:**


```javascript
/**
 * ScriptList sample for documentsOS Since 6.1.0
 * Configured as property at crmOpportunity folder (runScript=crmOpportunity_hitresultList)
 * Returns a scriptList with various features
 */

const scriptList = require("otris.scriptlist");

const fileType = "crmOpportunity";
let newFileId;

// Triggered by the action name "createFile" (see .addAction further below).
if (typeof createFile !== "undefined" && createFile === "true") {
    // Create a new file and get its ID
    const newFile = context.createFile(fileType);
    newFileId = newFile.getid();
}

// Check for events
const event = scriptList.getScriptListEvent();
let updateFile = false;
let upID;

// Check event type and handle row movement to a new group
if (event && event.name === "moveRow" && event.newGroup) {
    updateFile = true;
    event.ids.forEach(fileId => {
        const file = context.getFileById(fileId);
        // Skip scratch copies
        if (!file.getOriginal()) {
            upID = file.getid();
            // Update file with new group data
            Object.keys(event.newGroup).forEach(groupColumn => {
                const localizedLabel = event.newGroup[groupColumn]; // localized value, not the ENUM key

                // Retrieve the ENUM key, fallback to localized label if not found
                const enumKey = getKeyOfENUMLabel(fileType, groupColumn, localizedLabel) || localizedLabel;
                file[groupColumn] = enumKey;
            });
            // Synchronize data
            file.sync();
        }
    });
}

const hitresultList = new scriptList.HitresultList({
    pageSize: 0,
    title: context.getLocaleValue("de:Verkaufsprojekte;en:Opportunities"),
    searchResources: fileType,
});

hitresultList.setShowCheckboxes(false);

// add actions ####

// recall this script with createFile=true
hitresultList.addAction({
    action: "runScript:crmOpportunity_hitresultList&createFile=true",
    name: "createFile",
    label: context.getLocaleValue("de:Neu;en:New"),
    imageFile: "mdi:mdi-file-plus",
    alwaysShowLabel: true,
    tooltip: context.getLocaleValue("de:Erstellt ein neues Verkaufsprojekt;en:Creates a new opportunity"),
});


hitresultList.addAction({
    name: "getPieChart",
    label: context.getLocaleValue("de:Auswertung (Pie-Chart);en:Report (Pie-Chart)"),
    imageFile: "mdi:mdi-chart-pie;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Pie-Chart mit Darstellung Anzahl je Vertriebsphase;en:Opens a pie chart with representation number per sales phase"),
    clientScript: () => {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getPieChart",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    },
});

hitresultList.addAction({
    name: "getBarChart",
    label: context.getLocaleValue("de:Auswertung (Bar-Chart);en:Report (Bar-Chart)"),
    imageFile: "mdi:mdi-chart-bar;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Bar-Chart mit Darstellung Betrag je Vertriebsphase;en:Opens a bar chart with representation amount per sales phase"),
    clientScript: () => {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getBarChart",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    },
});

hitresultList.addAction({
    name: "getExcelChart",
    label: context.getLocaleValue("de:Auswertung (Excel-Export);en:Report (Excel-Export)"),
    imageFile: "mdi:mdi-file-excel;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Erstellt ein Excel-Chart mit Darstellung Betrag je Vertriebsphase;en:Creates an excel chart with representation amount per sales phase"),
    action: "runScript:crmOpportunity_createExcelChart",
});

// Add moveRow event listener
hitresultList.addListener("moveRow");

// Get enum values and generate groups
const groups = [];
const enumField = "crmStatus"; // Field from which groups will be generated
const enumValues = context.getEnumValues(fileType, enumField);

if (enumValues.length > 0) {
    enumValues.forEach(value => {
        const label = context.getEnumErgValue(fileType, enumField, value);
        groups.push(new scriptList.Group({
            id: value,
            label: label,
            emptyText: context.getLocaleValue("de:Keine Einträge vorhanden;en:No entries available"),
        }));
    });
}

// Set up grouping
hitresultList.setGrouping([{
    column_id: enumField,
    default_groups: groups,
}]);

// Expand all groups
hitresultList.setCollapsed(false);

// Define return values
const ret = [];
context.returnType = "multipleAction";

if (updateFile) {
    ret.push({
        returnType: "updateFile",
        returnValue: JSON.stringify({ fileIds: [upID] })
    });
}

if (newFileId) {
    ret.push({
        returnType: "showNewFile",
        returnValue: newFileId
    });
}

ret.push({
    returnType: "scriptList",
    returnValue: hitresultList.transfer()
});

// Return the response
context.returnValue = JSON.stringify(ret);

/**
 * Retrieves the key corresponding to a given localized label in an ENUM field.
 *
 * @param {string} fileType - The technical name of the filetype.
 * @param {string} fieldName - The technical name of the ENUM field.
 * @param {string} localizedLabel - The localized label to retrieve the corresponding key for.
 * @returns {string|null} - The corresponding key if found, or `null` if the label is not in the ENUM values of the current user language.
 *
 * @example
 * // Example usage:
 * const fileType = "crmOpportunity";
 * const fieldName = "crmStatus";
 * const localizedLabel = "Erwartung";
 *
 * const key = getKeyOfENUMLabel(fileType, fieldName, localizedLabel);
 * util.out(key); // Output: "Prospect"
 */
function getKeyOfENUMLabel(fileType, fieldName, localizedLabel) {
    const enumKeys = []; // Example: ["Prospect", "Presentation", "Quote", "Negotiation", "Won", "Lost"]
    const enumLocales = []; // Example in "de": ["Erwartung", "Präsentation", "Angebot", "Verhandlung", "Gewonnen", "Verloren"]

    // Since documentsOS 6.1.0
    context.getEnumLocaleValues(fileType, fieldName, enumKeys, enumLocales); // Populates the arrays

    const index = enumLocales.indexOf(localizedLabel);

    return index !== -1 ? enumKeys[index] : null;
}
```

/**
 * ScriptList sample for documentsOS Since 6.1.0
 * Configured as property at crmOpportunity folder (runScript=crmOpportunity_hitresultList)
 * Returns a scriptList with various features
 */

const scriptList = require("otris.scriptlist");

const fileType = "crmOpportunity";
let newFileId;

// Triggered by the action name "createFile" (see .addAction further below).
if (typeof createFile !== "undefined" && createFile === "true") {
    // Create a new file and get its ID
    const newFile = context.createFile(fileType);
    newFileId = newFile.getid();
}

// Check for events
const event = scriptList.getScriptListEvent();
let updateFile = false;
let upID;

// Check event type and handle row movement to a new group
if (event && event.name === "moveRow" && event.newGroup) {
    updateFile = true;
    event.ids.forEach(fileId => {
        const file = context.getFileById(fileId);
        // Skip scratch copies
        if (!file.getOriginal()) {
            upID = file.getid();
            // Update file with new group data
            Object.keys(event.newGroup).forEach(groupColumn => {
                const localizedLabel = event.newGroup[groupColumn]; // localized value, not the ENUM key

                // Retrieve the ENUM key, fallback to localized label if not found
                const enumKey = getKeyOfENUMLabel(fileType, groupColumn, localizedLabel) || localizedLabel;
                file[groupColumn] = enumKey;
            });
            // Synchronize data
            file.sync();
        }
    });
}

const hitresultList = new scriptList.HitresultList({
    pageSize: 0,
    title: context.getLocaleValue("de:Verkaufsprojekte;en:Opportunities"),
    searchResources: fileType,
});

hitresultList.setShowCheckboxes(false);

// add actions ####

// recall this script with createFile=true
hitresultList.addAction({
    action: "runScript:crmOpportunity_hitresultList&createFile=true",
    name: "createFile",
    label: context.getLocaleValue("de:Neu;en:New"),
    imageFile: "mdi:mdi-file-plus",
    alwaysShowLabel: true,
    tooltip: context.getLocaleValue("de:Erstellt ein neues Verkaufsprojekt;en:Creates a new opportunity"),
});


hitresultList.addAction({
    name: "getPieChart",
    label: context.getLocaleValue("de:Auswertung (Pie-Chart);en:Report (Pie-Chart)"),
    imageFile: "mdi:mdi-chart-pie;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Pie-Chart mit Darstellung Anzahl je Vertriebsphase;en:Opens a pie chart with representation number per sales phase"),
    clientScript: () => {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getPieChart",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    },
});

hitresultList.addAction({
    name: "getBarChart",
    label: context.getLocaleValue("de:Auswertung (Bar-Chart);en:Report (Bar-Chart)"),
    imageFile: "mdi:mdi-chart-bar;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Bar-Chart mit Darstellung Betrag je Vertriebsphase;en:Opens a bar chart with representation amount per sales phase"),
    clientScript: () => {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getBarChart",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    },
});

hitresultList.addAction({
    name: "getExcelChart",
    label: context.getLocaleValue("de:Auswertung (Excel-Export);en:Report (Excel-Export)"),
    imageFile: "mdi:mdi-file-excel;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Erstellt ein Excel-Chart mit Darstellung Betrag je Vertriebsphase;en:Creates an excel chart with representation amount per sales phase"),
    action: "runScript:crmOpportunity_createExcelChart",
});

// Add moveRow event listener
hitresultList.addListener("moveRow");

// Get enum values and generate groups
const groups = [];
const enumField = "crmStatus"; // Field from which groups will be generated
const enumValues = context.getEnumValues(fileType, enumField);

if (enumValues.length > 0) {
    enumValues.forEach(value => {
        const label = context.getEnumErgValue(fileType, enumField, value);
        groups.push(new scriptList.Group({
            id: value,
            label: label,
            emptyText: context.getLocaleValue("de:Keine Einträge vorhanden;en:No entries available"),
        }));
    });
}

// Set up grouping
hitresultList.setGrouping([{
    column_id: enumField,
    default_groups: groups,
}]);

// Expand all groups
hitresultList.setCollapsed(false);

// Define return values
const ret = [];
context.returnType = "multipleAction";

if (updateFile) {
    ret.push({
        returnType: "updateFile",
        returnValue: JSON.stringify({ fileIds: [upID] })
    });
}

if (newFileId) {
    ret.push({
        returnType: "showNewFile",
        returnValue: newFileId
    });
}

ret.push({
    returnType: "scriptList",
    returnValue: hitresultList.transfer()
});

// Return the response
context.returnValue = JSON.stringify(ret);

/**
 * Retrieves the key corresponding to a given localized label in an ENUM field.
 *
 * @param {string} fileType - The technical name of the filetype.
 * @param {string} fieldName - The technical name of the ENUM field.
 * @param {string} localizedLabel - The localized label to retrieve the corresponding key for.
 * @returns {string|null} - The corresponding key if found, or `null` if the label is not in the ENUM values of the current user language.
 *
 * @example
 * // Example usage:
 * const fileType = "crmOpportunity";
 * const fieldName = "crmStatus";
 * const localizedLabel = "Erwartung";
 *
 * const key = getKeyOfENUMLabel(fileType, fieldName, localizedLabel);
 * util.out(key); // Output: "Prospect"
 */
function getKeyOfENUMLabel(fileType, fieldName, localizedLabel) {
    const enumKeys = []; // Example: ["Prospect", "Presentation", "Quote", "Negotiation", "Won", "Lost"]
    const enumLocales = []; // Example in "de": ["Erwartung", "Präsentation", "Angebot", "Verhandlung", "Gewonnen", "Verloren"]

    // Since documentsOS 6.1.0
    context.getEnumLocaleValues(fileType, fieldName, enumKeys, enumLocales); // Populates the arrays

    const index = enumLocales.indexOf(localizedLabel);

    return index !== -1 ? enumKeys[index] : null;
}
**Download**: [crmOpportunity_hitresultList_dOS.js](../assets/samples/crmOpportunity_hitresultList_dOS.js)
**Download**: [Gadget_crmOpportunity_getBarChart_dOS.js](../assets/samples/Gadget_crmOpportunity_getBarChart_dOS.js)
**Download**: [Gadget_crmOpportunity_getPieChart_dOS.js](../assets/samples/Gadget_crmOpportunity_getPieChart_dOS.js)
**Download**: [crmOpportunity_createExcelChart.js](../assets/samples/crmOpportunity_createExcelChart.js)

**Skripte für DOCUMENTS 5:**

**Download**: [crmOpportunity_hitresultList_D5.js](../assets/samples/crmOpportunity_hitresultList_D5.js)
**Download**: [Gadget_crmOpportunity_getBarChart_D5.js](../assets/samples/Gadget_crmOpportunity_getBarChart_D5.js)
**Download**: [Gadget_crmOpportunity_getPieChart_D5.js](../assets/samples/Gadget_crmOpportunity_getPieChart_D5.js)
**Download**: [crmOpportunity_createExcelChart.js](../assets/samples/crmOpportunity_createExcelChart.js)