---
title: "Weitere Integrationsmöglichkeiten von Gadgets"
source: "https://otris.software/documents/manuals/books/gadget/integration/integration-additional.html"
---

# Weitere Integrationsmöglichkeiten von Gadgets

Neben den bereits beschriebenen Einbindungen gibt es weitere Möglichkeiten, Gadgets in den Client zu integrieren. Je nach Anwendungsfall können sie in weiteren Bereichen platziert oder clientseitig aufgerufen werden.

Gadget-Konfigurationen können:

- Der Kopfzeile als Icon hinzugefügt werden.
ein einzelnes Gadget - globalGadgetConfig
mehrere Gadgets - menubarGadgetConfigs
- Der Kopfzeile als Gadget (z.B. ein Eingabefeld) hinzugefügt werden.
naviBarGadgetConfig
- Aus dem Client aufgerufen werden.
documentsContext.callGadget()
- In einer Auflistung eine aufklappbare Zeile konfigurieren

Für Icons, die aus Platzgründen nicht dargestellt werden können, gibt es mit dem "Magic-Button" ein Overflow-Menü.


![menubar.png](../assets/img/integration/menubar.png)

Abb. 71 - Gadget-Konfigurationen in der Kopfleiste


---


## Gadgets als Icons in der Menüleiste

**Hinweis:** Nach der Einrichtung oder einer Wertänderung muss der Webclient-Cache aktualisiert werden, damit die Änderungen wirksam werden.

Gadgets können als Icons in der Menüleiste eingebunden werden.
Mit der **globalen Eigenschaft globalGadgetConfig** kann ein einzelnes Gadget definiert werden, mit der **globalen Eigenschaft menubarGadgetConfigs** ein Array von Gadgets.


### Konfigurationsattribute

| Attribut | Beschreibung |
| --- | --- |
| gadgetScript | Skriptname des Gadgets |
| gadgetAction | Startfunktion im Skript |
| gadgetIcon | Icon des Gadgets (Icons-Dokumentation) |
| tooltip | Tooltip-Text beim Überfahren mit der Maus |
| gadgetDestination | Zielort des Gadgets ("dialog", "folder", "file") |
| gadgetWidth, gadgetHeight | Größe des Dialogfensters (nur für "gadgetDestination": "dialog") |

Ein Beispiel für eine `globalGadgetConfig` die ein Kalender-Gadget in einem **Dialogfenster** öffnet:


```json
{
    "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
    "gadgetAction": "show",
    "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;",
    "tooltip": "Gadget im Dialog anzeigen",
    "gadgetDestination": "dialog",
    "gadgetWidth": 700,
    "gadgetHeight": 700
}
```

{
    "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
    "gadgetAction": "show",
    "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;",
    "tooltip": "Gadget im Dialog anzeigen",
    "gadgetDestination": "dialog",
    "gadgetWidth": 700,
    "gadgetHeight": 700
}[Beschreibung des FullCalendar-Gadget Beispiels](../gadget-types/fullcalendar.html#funktionales-fullcalendar-gadget-beispiel-f%C3%BCr-documentsos---relations)

Ein Beispiel für eine `menubarGadgetConfigs` ist im Beispiel HTML-Gadget beschrieben.


### Einrichtung der Menüleiste im Manager

Die Konfiguration erfolgt über die Anwendung **Documents-Manager**.

**Gadget-Konfiguration hinzufügen**

- Pfad: Documents -> Administration -> Mandanten
- Aktion: Startseite des Mandanten öffnen, falls nicht sichtbar
- Abschnitt: Eigenschaften (aufklappen, falls nicht geöffnet)
Aktion: Property hinzufügen (am Ende der Liste)
Aktion: globalGadgetConfig | menubarGadgetConfigs | naviBarGadgetConfig hinzufügen
(Das Feld für den Wert öffnet sich zur Bearbeitung durch einen Doppelklick)


![dOS_manager_globalGadgetConfig.png](../assets/img/integration/dOS_manager_globalGadgetConfig.png)

Abb. 72 - globale Gadgetkonfiguration im DOCUMENTS Manager hinzufügen


### Einrichtung der Menüleiste im AdminCenter

Die Einrichtung erfolgt über die **Erweiterung Admin Tools** im **AdminCenter** des Webclients.

**Gadget-Konfiguration hinzufügen**

- Pfad: Administration -> Einstellungen -> Globale Einstellungen
- Reiter: Eigenschaften
- Aktion: globalGadgetConfig | menubarGadgetConfigs | naviBarGadgetConfig hinzufügen


![dOS_admincenter_menubarGadgetConfigs.png](../assets/img/integration/dOS_admincenter_menubarGadgetConfigs.png)

Abb. 73 - Menübar-Gadgetkonfiguration im AdminCenter hinzufügen


---


## Gadget mit Eingabefeld in der Menüleiste

Mit `naviBarGadgetConfig` kann ein Gadget in der Menüleiste hinzugefügt werden, das individuellen Inhalt anzeigt.
Das Beispiel **GadgetSample_MyNavibarGadget** fügt der Menübar ein **Form-Gadget** hinzu, das ein Textfeld mit integriertem Button enthält.

Details zum Beispiel: GadgetSample_MyNavibarGadget

**Konfiguration: naviBarGadgetConfig:**


```json
{
    "gadgetScript": "GadgetSample_MyNavibarGadget",
    "gadgetAction": "initGadget",
    "gadgetWidth": 150
}
```

{
    "gadgetScript": "GadgetSample_MyNavibarGadget",
    "gadgetAction": "initGadget",
    "gadgetWidth": 150
}**Hinweis:**
Wird die `naviBarGadgetConfig` ohne das `gadgetWidth`-Attribut angelegt, beansprucht das `GadgetSample_MyNavibarGadget` den gesamten Platz der `menubar` und verdrängt spätestens bei der Größenänderung des Fensters die anderen Gadgets in den Magic-Button.

Die Einrichtung erfolgt im Manager oder im AdminCenter:

- Einrichtung im Manager
- Einrichtung im AdminCenter


---


## Overflow-Menü "Magic-Button"

Wenn die Menüleiste nicht genügend Platz für alle Gadget-Icons bietet, werden die überzähligen Aktionen im **Overflow-Menü** gesammelt.
Dieses Menü wird über einen **Button mit drei Punkten …** dargestellt und enthält eine **Klapp-Liste** mit den ausgeblendeten Gadget-Aktionen.

**Funktionsweise:**

- Bei einer breiten Ansicht werden alle Gadgets direkt in der Menüleiste angezeigt.
- Sobald die verfügbare Breite nicht ausreicht, werden nicht sichtbare Gadgets automatisch ins Overflow-Menü verschoben.
- Der Benutzer kann das Menü per Klick öffnen und auf die "versteckten" Gadgets zugreifen.

**Darstellung:**

- Standardansicht (genug Platz): Alle Gadget-Icons sind sichtbar.
- Kompakte Ansicht (zu wenig Platz): Ein …-Button erscheint, der die ausgeblendeten Gadgets als Dropdown-Menü anzeigt.


---


## Gadgets in aufklappbarer Zeile darstellen

Im HowTo [Aufklappbaren Zeilen im Ordner](../../../../howto/list/fileDetails.html) wird erläutert, wie man ein `fileDetailsScript` einbindet, um Zusatzinformationen im Ordner anzuzeigen. Hier ist es auch möglich, **ein oder mehrere Gadgets** einzublenden.

Dazu muss HTML in folgender Form zurückgegeben werden:


```html
<div class="gadgetField"
     id="gadgetView_<Gadget-Id>"
     data-gadget-config="{
         gadgetScript: '<Gadget-Script>',
         gadgetAction: '<Gadget-Action>',
         gadgetId: '<Gadget-Id>'
     }">
</div>
```

<div class="gadgetField"
     id="gadgetView_<Gadget-Id>"
     data-gadget-config="{
         gadgetScript: '<Gadget-Script>',
         gadgetAction: '<Gadget-Action>',
         gadgetId: '<Gadget-Id>'
     }">
</div>Beim Aufklappen der Zeile wird für jedes Element mit der Klasse "gadgetField" die entsprechende Gadget-Konfiguration ausgeführt.
Um mehrere Gadgets in einer Reihe anzuzeigen, kann auf diese z.B. der Style `display: inline-block` angewendet werden.


![relations_detailsScript.png](../assets/img/integration/relations_detailsScript.png)

Abb. 74 - Beispielansicht 2 Gadgets in einer aufklappbaren Zeile


### Beispiel detailsScript für mehrere Gadgets in aufklappbarer Zeile

Für die Konfiguration der aufklappbaren Zeile

- in den Einträgen eines Ordners muss:
Am Ordner die Eigenschaft fileDetailsShowColumn: true hinzugefügt werden.
Der im Ordner gefilterte Mappentyp muss mit der Eigenschaft fileDetailsScript: detailsScript versehen werden, wobei detailsScript der Skriptname mit den Gadget-Konfigurationen ist.
- in einer eigens programmierten Skriptliste muss:
Die Funktion setShowDetailsColumn auf der Liste mit dem Parameter true aufgerufen werden.
Die Funktion setDetailsScriptName auf den jeweiligen Zeilen oder der Liste mit dem Parameter "detailsScript" aufgerufen werden, wobei detailsScript der Skriptname mit den Gadget-Konfigurationen ist.
bei Einträgen, welche keine fileId einer Mappe als Id haben, der Funktion setDetailsParams auf den jeweiligen Zeilen ein Objekt übergeben werden, welches _useFileContext auf false setzt.

**Das detailsScript gadget-fields.js:**


```javascript
// This script generates HTML for gadgets to be displayed in expandable rows;
// Replace `gadgetScript` and `gadgetAction` with the appropriate script and action names.

const gadget1 =
    '<div style="display:inline-block;vertical-align:top;height: 80px;" ' +
    'class="gadgetField" id="gadgetView_detailGadget1" ' +
    'data-gadget-config="{ ' +
        'gadgetScript: \'GadgetSample_HtmlGadget\', ' +
        'gadgetAction: \'showHtmlText\', ' +
        'gadgetId:\'detailGadget1\' }"></div>';

const gadget2 =
    '<div style="display:inline-block;vertical-align:top;height: 80px;" ' +
    'class="gadgetField" id="gadgetView_detailGadget2" ' +
    'data-gadget-config="{ ' +
        'gadgetScript: \'GadgetSample_HtmlGadget\', ' +
        'gadgetAction: \'showHtmlText2\', ' +
        'gadgetId:\'detailGadget2\' }"></div>';

const returnString = gadget1 + gadget2;

context.returnType = "html";
context.returnValue = returnString;
```

// This script generates HTML for gadgets to be displayed in expandable rows;
// Replace `gadgetScript` and `gadgetAction` with the appropriate script and action names.

const gadget1 =
    '<div style="display:inline-block;vertical-align:top;height: 80px;" ' +
    'class="gadgetField" id="gadgetView_detailGadget1" ' +
    'data-gadget-config="{ ' +
        'gadgetScript: \'GadgetSample_HtmlGadget\', ' +
        'gadgetAction: \'showHtmlText\', ' +
        'gadgetId:\'detailGadget1\' }"></div>';

const gadget2 =
    '<div style="display:inline-block;vertical-align:top;height: 80px;" ' +
    'class="gadgetField" id="gadgetView_detailGadget2" ' +
    'data-gadget-config="{ ' +
        'gadgetScript: \'GadgetSample_HtmlGadget\', ' +
        'gadgetAction: \'showHtmlText2\', ' +
        'gadgetId:\'detailGadget2\' }"></div>';

const returnString = gadget1 + gadget2;

context.returnType = "html";
context.returnValue = returnString;
Download [gadget-fields.js](../assets/samples/gadget-fields.js)


---


## Beispiel: HTML-Gadget

Ein HTML-Gadget zeigt einen Tooltip am jeweiligen Button, der angibt, wo es geöffnet wird. Das Gadget selbst verwendet das Attribut **gadgetDestination**, um den jeweiligen Bereich als HTML-formatierten Text anzuzeigen.


![relations_menubarGadgetConfigs_globalGadgetConfig.png](../assets/img/integration/relations_menubarGadgetConfigs_globalGadgetConfig.png)

Abb. 75 - menubarGadgetConfigs und globalGadgetConfig in der Weboberfläche


### menubarGadgetConfigs-Objekt mit Tooltip-Attribut


```json
[
    {
        "gadgetScript": "Gadget_gadgetDestinationHTML",
        "gadgetAction": "showInDialog",
        "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;",
        "gadgetDestination": "dialog",
        "gadgetWidth": 700,
        "gadgetHeight": 700,
        "tooltip": "Gadget im Dialog anzeigen"
    },
    {
        "gadgetScript": "Gadget_gadgetDestinationHTML",
        "gadgetAction": "showInFolder",
        "gadgetIcon": "mdi:mdi-folder;top:-2px;font-size: 29px;",
        "gadgetDestination": "folder",
        "tooltip": "Gadget in der Hauptansicht anzeigen"
    },
    {
        "gadgetScript": "Gadget_gadgetDestinationHTML",
        "gadgetAction": "showInFile",
        "gadgetIcon": "mdi:mdi-file;top:-2px;font-size: 29px;",
        "gadgetDestination": "file",
        "tooltip": "Gadget in der Mappenansicht anzeigen"
    }
]
```

[
    {
        "gadgetScript": "Gadget_gadgetDestinationHTML",
        "gadgetAction": "showInDialog",
        "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;",
        "gadgetDestination": "dialog",
        "gadgetWidth": 700,
        "gadgetHeight": 700,
        "tooltip": "Gadget im Dialog anzeigen"
    },
    {
        "gadgetScript": "Gadget_gadgetDestinationHTML",
        "gadgetAction": "showInFolder",
        "gadgetIcon": "mdi:mdi-folder;top:-2px;font-size: 29px;",
        "gadgetDestination": "folder",
        "tooltip": "Gadget in der Hauptansicht anzeigen"
    },
    {
        "gadgetScript": "Gadget_gadgetDestinationHTML",
        "gadgetAction": "showInFile",
        "gadgetIcon": "mdi:mdi-file;top:-2px;font-size: 29px;",
        "gadgetDestination": "file",
        "tooltip": "Gadget in der Mappenansicht anzeigen"
    }
]
### Das Gadget_gadgetDestinationHTML-Skript:

Das Skript registriert die drei `gadgetAction`-Typen und weist ihnen ein einheitliches Design mit unterschiedlichen Texten zu.


```javascript
/**
 * Configuration for the "menubarGadgetConfigs" array to display gadgets
 * in three different destinations: "dialog", "folder", and "file".
 *
 * Usage example:
 * "menubarGadgetConfigs"
 *
 * [
 *   { "gadgetScript": "Gadget_gadgetDestinationHTML", "gadgetAction": "showInDialog", "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;", "gadgetDestination": "dialog", "gadgetWidth": 700, "gadgetHeight": 700 },
 *   { "gadgetScript": "Gadget_gadgetDestinationHTML", "gadgetAction": "showInFolder", "gadgetIcon": "mdi:mdi-folder;top:-2px;font-size: 29px;", "gadgetDestination": "folder" },
 *   { "gadgetScript": "Gadget_gadgetDestinationHTML", "gadgetAction": "showInFile", "gadgetIcon": "mdi:mdi-file;top:-2px;font-size: 29px;", "gadgetDestination": "file" }
 * ]
 */

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Registers gadget actions for different destinations.
gadgetAPI.registerGadgetAction("showInFolder", () => createStyledGadget("folder"));
gadgetAPI.registerGadgetAction("showInFile", () => createStyledGadget("file"));
gadgetAPI.registerGadgetAction("showInDialog", () => createStyledGadget("dialog"));

context.returnValue = gadgetAPI.transfer();

// Creates an HTML gadget for the specified destination.
function createStyledGadget(destination) {
    const htmlGadget = gadgetAPI.getHTMLInstance();

    htmlGadget.appendHtml(`
            <div style="
                margin: 20px;
                padding: 15px;
                text-align: center;
                background-color: #f5f5f5;
                color: #333;
                font-size: 16px;
                font-weight: bold;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">

                "gadgetDestination": "${destination}"
            </div>
        `);

    return htmlGadget;
}
```

/**
 * Configuration for the "menubarGadgetConfigs" array to display gadgets
 * in three different destinations: "dialog", "folder", and "file".
 *
 * Usage example:
 * "menubarGadgetConfigs"
 *
 * [
 *   { "gadgetScript": "Gadget_gadgetDestinationHTML", "gadgetAction": "showInDialog", "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;", "gadgetDestination": "dialog", "gadgetWidth": 700, "gadgetHeight": 700 },
 *   { "gadgetScript": "Gadget_gadgetDestinationHTML", "gadgetAction": "showInFolder", "gadgetIcon": "mdi:mdi-folder;top:-2px;font-size: 29px;", "gadgetDestination": "folder" },
 *   { "gadgetScript": "Gadget_gadgetDestinationHTML", "gadgetAction": "showInFile", "gadgetIcon": "mdi:mdi-file;top:-2px;font-size: 29px;", "gadgetDestination": "file" }
 * ]
 */

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Registers gadget actions for different destinations.
gadgetAPI.registerGadgetAction("showInFolder", () => createStyledGadget("folder"));
gadgetAPI.registerGadgetAction("showInFile", () => createStyledGadget("file"));
gadgetAPI.registerGadgetAction("showInDialog", () => createStyledGadget("dialog"));

context.returnValue = gadgetAPI.transfer();

// Creates an HTML gadget for the specified destination.
function createStyledGadget(destination) {
    const htmlGadget = gadgetAPI.getHTMLInstance();

    htmlGadget.appendHtml(`
            <div style="
                margin: 20px;
                padding: 15px;
                text-align: center;
                background-color: #f5f5f5;
                color: #333;
                font-size: 16px;
                font-weight: bold;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">

                "gadgetDestination": "${destination}"
            </div>
        `);

    return htmlGadget;
}Download: [Gadget_gadgetDestinationHTML.js](../assets/samples/Gadget_gadgetDestinationHTML.js)


### menubarGadgetConfigs mit FullCalendar-Varianten

Diese Konfiguration fügt verschiedene Varianten des **FullCalendar-Gadgets** in die Menüleiste ein.
Je nach `gadgetDestination` öffnet sich das Gadget entweder als **Dialog**, in einem **Ordner** oder in einer **Dateiansicht**.

[Beschreibung des FullCalendar-Gadget Beispiels](../gadget-types/fullcalendar.html#funktionales-fullcalendar-gadget-beispiel-f%C3%BCr-documentsos---relations)


```json
[
    {
        "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
        "gadgetAction": "show",
        "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;",
        "gadgetDestination": "dialog",
        "gadgetWidth": 700,
        "gadgetHeight": 700
    },
    {
        "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
        "gadgetAction": "show",
        "gadgetIcon": "mdi:mdi-folder;top:-2px;font-size: 29px;",
        "gadgetDestination": "folder"
    },
    {
        "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
        "gadgetAction": "show",
        "gadgetIcon": "mdi:mdi-file;top:-2px;font-size: 29px;",
        "gadgetDestination": "file"
    }
]
```

[
    {
        "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
        "gadgetAction": "show",
        "gadgetIcon": "mdi:mdi-dock-window;top:-2px;font-size: 29px;",
        "gadgetDestination": "dialog",
        "gadgetWidth": 700,
        "gadgetHeight": 700
    },
    {
        "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
        "gadgetAction": "show",
        "gadgetIcon": "mdi:mdi-folder;top:-2px;font-size: 29px;",
        "gadgetDestination": "folder"
    },
    {
        "gadgetScript": "GadgetSample_FullCalendar_crmQuote",
        "gadgetAction": "show",
        "gadgetIcon": "mdi:mdi-file;top:-2px;font-size: 29px;",
        "gadgetDestination": "file"
    }
]
---


## Beispiel GadgetSample_MyNavibarGadget

Das **GadgetSample_MyNavibarGadget** fügt der Menüleiste ein **Form-Gadget** mit einem **Textfeld und integriertem Button** hinzu.
Es ermöglicht die Eingabe eines Textes, der nach dem Absenden zur Erstellung eines neuen Termins weiterverarbeitet wird.


### Funktionsweise

- Eine Hilfsfunktion extrahiert das Startdatum, die Startzeit und den Titel aus der Eingabe.
- Diese Werte werden als Skriptparameter an das executeScript crmAppointment_newAppointment übergeben.
- Der Skriptparameter-Dialog wird geöffnet, sodass der Benutzer den Termin prüfen, bearbeiten und speichern kann.
- Der ursprüngliche Text aus dem Eingabefeld wird in die Terminbeschreibung übernommen. Abb. 76 - neuer Termin aus der naviBarGadgetConfig


### Integration

Das Gadget wird über `naviBarGadgetConfig` eingebunden: (siehe: Gadget mit Eingabefeld in der Menüleiste)


```json
{
    "gadgetScript": "GadgetSample_MyNavibarGadget",
    "gadgetAction": "initGadget"
}
```

{
    "gadgetScript": "GadgetSample_MyNavibarGadget",
    "gadgetAction": "initGadget"
}Das Beispiel besteht aus 2 Skripten:

- executeScript crmAppointment_newAppointment zum Erstellen und Updaten von Terminen: Das Skript wird mit Scriptparametern für den Create-Dialog im Mandanten integriert. Diese Parameter werden im AdminCenter bzw. Manager dem Skript hinzugefügt und sind in der XML des Skripts zu diesem Beispiel bereits vorhanden. Download: crmAppointment_newAppointment.xml Download: crmAppointment_newAppointment.js
- GadgetSample_MyNavibarGadget-Skript


```javascript
/**
 * Gadget for the relations demo principal in documentsOS, designed for use in the "navibar".
 *
 * This gadget configures a single text field within a form gadget, along with a button.
 * When the button is pressed, the text field input is used to create a new appointment.
 * The input is assigned to a new appointment via the script parameter dialog of
 * `executeScript("crmAppointment_newAppointment")`.
 *
 * Usage:
 * naviBarGadgetConfig
 * { gadgetScript: 'GadgetSample_MyNavibarGadget', gadgetAction: 'initGadget' }
 */

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("initGadget", function () {

    // Centralized i18n
    const navibarI18N = {
        textFieldDefault: context.getLocaleValue("de:Neuer Termin;en:New Appointment"),
        addNewAppointment: context.getLocaleValue("de:Neuen Termin hinzufügen;en:Add new appointment"),
    };
    const formGadget = gadgetAPI.getFormInstance();

    // Provide i18n data to the client
    formGadget.setContextData(navibarI18N);

    // Text field with button
    formGadget.addTextField('newAppointment', false, navibarI18N.textFieldDefault, {
        button: {
            action: 'handleNewAppointmentClick',
            tooltip: navibarI18N.addNewAppointment,
            icon: 'mdi:mdi-chevron-right-box'
        }
    });

    // Register client-side function
    formGadget.addClientFunction(function handleNewAppointmentClick(event, fieldValue, fieldDomElement) {
        const navibarI18N = documentsContext.getGadgetContext().getContextData();
        const fmtDate = (m) => documents.sdk.utils.formatDate(m, { fieldType: "timestamp", dateType: "moment" });

        const { startMoment, endMoment, title } = parseAppointmentInput(fieldValue);

        const scriptParams = {
            actionType: "create",
            startDateString: fmtDate(startMoment),
            endDateString: fmtDate(endMoment),
            title: title || navibarI18N.addNewAppointment,
            description: fieldValue,
            crmType: { key: "Appointment" }
        };

        const opts = { dialogTitle: navibarI18N.addNewAppointment, async: true, useScriptParameterDialog: true };

        documentsContext.executeScript("crmAppointment_newAppointment", scriptParams, opts);

        fieldDomElement.value = navibarI18N.textFieldDefault;
    });
    // Register input parsing function for client-side use
    formGadget.addClientFunction(parseAppointmentInput);

    formGadget.setStyle("box-sizing", "border-box");
    formGadget.setStyle("border", "1px solid black");

    return formGadget;
});

context.returnValue = gadgetAPI.transfer();

/**
 * Function to parse the input text (e.g., "12.2 19 Uhr Besprechung mit Hans")
 */
function parseAppointmentInput(input) {
    let now = moment();
    let date = now.clone(); // Default: today's date
    let title = input.trim(); // Default: everything as title
    let time = { hour: 9, minute: 0 }; // Default: 9 AM

    // Accepted date formats (dd mm): "15-08", "15.08", "15/08", "15August", "3Juni"
    // (1-2 digits), optional separator, month (digits or word), and optional trailing dot
    let dateMatch = input.match(/(\d{1,2})[.\-/]?(\d{1,2}|\w+)\.?/i);
    if (dateMatch) {
        let day = parseInt(dateMatch[1], 10);
        let month = isNaN(dateMatch[2])
            ? moment().month(dateMatch[2]).month() + 1
            : parseInt(dateMatch[2], 10);
        date = moment().month(month - 1).date(day);

        if (date.isBefore(now, "day")) {
            date.add(1, "year"); // If the date is in the past, set it to next year
        }

        title = title.replace(dateMatch[0], "").trim();
    }

    // Accepted time formats: "12:30", "9:15", "14h30", "7H45", "10 15", "18h", "8 Uhr"
    let timeMatch = title.match(/(\d{1,2})(?:[:hH ]?(\d{2}))?\s*(?:uhr|h)?/i);
    if (timeMatch) {
        time.hour = parseInt(timeMatch[1], 10);
        time.minute = timeMatch[2] ? parseInt(timeMatch[2], 10) : 0;

        title = title.replace(timeMatch[0], "").trim(); // Remove extracted time from title
    }

    // Set start and end time
    date.set({ hour: time.hour, minute: time.minute });
    let startMoment = date.clone();
    let endMoment = startMoment.clone().add(30, "minutes");

    return { startMoment, endMoment, title };
}
```

/**
 * Gadget for the relations demo principal in documentsOS, designed for use in the "navibar".
 *
 * This gadget configures a single text field within a form gadget, along with a button.
 * When the button is pressed, the text field input is used to create a new appointment.
 * The input is assigned to a new appointment via the script parameter dialog of
 * `executeScript("crmAppointment_newAppointment")`.
 *
 * Usage:
 * naviBarGadgetConfig
 * { gadgetScript: 'GadgetSample_MyNavibarGadget', gadgetAction: 'initGadget' }
 */

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("initGadget", function () {

    // Centralized i18n
    const navibarI18N = {
        textFieldDefault: context.getLocaleValue("de:Neuer Termin;en:New Appointment"),
        addNewAppointment: context.getLocaleValue("de:Neuen Termin hinzufügen;en:Add new appointment"),
    };
    const formGadget = gadgetAPI.getFormInstance();

    // Provide i18n data to the client
    formGadget.setContextData(navibarI18N);

    // Text field with button
    formGadget.addTextField('newAppointment', false, navibarI18N.textFieldDefault, {
        button: {
            action: 'handleNewAppointmentClick',
            tooltip: navibarI18N.addNewAppointment,
            icon: 'mdi:mdi-chevron-right-box'
        }
    });

    // Register client-side function
    formGadget.addClientFunction(function handleNewAppointmentClick(event, fieldValue, fieldDomElement) {
        const navibarI18N = documentsContext.getGadgetContext().getContextData();
        const fmtDate = (m) => documents.sdk.utils.formatDate(m, { fieldType: "timestamp", dateType: "moment" });

        const { startMoment, endMoment, title } = parseAppointmentInput(fieldValue);

        const scriptParams = {
            actionType: "create",
            startDateString: fmtDate(startMoment),
            endDateString: fmtDate(endMoment),
            title: title || navibarI18N.addNewAppointment,
            description: fieldValue,
            crmType: { key: "Appointment" }
        };

        const opts = { dialogTitle: navibarI18N.addNewAppointment, async: true, useScriptParameterDialog: true };

        documentsContext.executeScript("crmAppointment_newAppointment", scriptParams, opts);

        fieldDomElement.value = navibarI18N.textFieldDefault;
    });
    // Register input parsing function for client-side use
    formGadget.addClientFunction(parseAppointmentInput);

    formGadget.setStyle("box-sizing", "border-box");
    formGadget.setStyle("border", "1px solid black");

    return formGadget;
});

context.returnValue = gadgetAPI.transfer();

/**
 * Function to parse the input text (e.g., "12.2 19 Uhr Besprechung mit Hans")
 */
function parseAppointmentInput(input) {
    let now = moment();
    let date = now.clone(); // Default: today's date
    let title = input.trim(); // Default: everything as title
    let time = { hour: 9, minute: 0 }; // Default: 9 AM

    // Accepted date formats (dd mm): "15-08", "15.08", "15/08", "15August", "3Juni"
    // (1-2 digits), optional separator, month (digits or word), and optional trailing dot
    let dateMatch = input.match(/(\d{1,2})[.\-/]?(\d{1,2}|\w+)\.?/i);
    if (dateMatch) {
        let day = parseInt(dateMatch[1], 10);
        let month = isNaN(dateMatch[2])
            ? moment().month(dateMatch[2]).month() + 1
            : parseInt(dateMatch[2], 10);
        date = moment().month(month - 1).date(day);

        if (date.isBefore(now, "day")) {
            date.add(1, "year"); // If the date is in the past, set it to next year
        }

        title = title.replace(dateMatch[0], "").trim();
    }

    // Accepted time formats: "12:30", "9:15", "14h30", "7H45", "10 15", "18h", "8 Uhr"
    let timeMatch = title.match(/(\d{1,2})(?:[:hH ]?(\d{2}))?\s*(?:uhr|h)?/i);
    if (timeMatch) {
        time.hour = parseInt(timeMatch[1], 10);
        time.minute = timeMatch[2] ? parseInt(timeMatch[2], 10) : 0;

        title = title.replace(timeMatch[0], "").trim(); // Remove extracted time from title
    }

    // Set start and end time
    date.set({ hour: time.hour, minute: time.minute });
    let startMoment = date.clone();
    let endMoment = startMoment.clone().add(30, "minutes");

    return { startMoment, endMoment, title };
}
Download: [GadgetSample_MyNavibarGadget.js](../assets/samples/GadgetSample_MyNavibarGadget.js)


---


## documentsContext.callGadget(config)

Mit `documentsContext.callGadget(config)` kann ein Gadget **aus dem Webclient gestartet** werden.
Die Methode erwartet ein **Gadget-Konfigurationsobjekt**, das die erforderlichen Parameter sowie individuelle Werte an das Gadget übergibt.

**Syntax:**


```js
documentsContext.callGadget({
    "gadgetScript": "Gadget_myGadget",
    "gadgetAction": "showGadget",
    "gadgetId": "myGadgetId",
    "gadgetDestination": "folder"
    ...
});
```

documentsContext.callGadget({
    "gadgetScript": "Gadget_myGadget",
    "gadgetAction": "showGadget",
    "gadgetId": "myGadgetId",
    "gadgetDestination": "folder"
    ...
});
### Beispiel Layout-Gadget

Dieses Beispiel zeigt, wie ein Gadget **drei weitere Gadgets** in einer `refreshView`-Funktion aufruft.
Dabei wird jedem aufgerufenen Gadget der Login-Name des gewählten Users übergeben.


```js
...
function refreshView() {
    const gc = documentsContext.getGadgetContext();
    const cxtData = gc.getContextData();
    const formData = gc.getClientObject().getFormData();
    const arr = JSON.parse(cxtData.otherGadgetsJSON);

    arr.forEach(function(cfg) {
        cfg.login = formData.user + "";
        documentsContext.callGadget(cfg);
    });
}
...
```

...
function refreshView() {
    const gc = documentsContext.getGadgetContext();
    const cxtData = gc.getContextData();
    const formData = gc.getClientObject().getFormData();
    const arr = JSON.parse(cxtData.otherGadgetsJSON);

    arr.forEach(function(cfg) {
        cfg.login = formData.user + "";
        documentsContext.callGadget(cfg);
    });
}
...Beschreibung siehe:  [Beispiel Layout-Gadget](../gadget-types/layout.html#weiteres-beispiel-relations-mitarbeiter)

Download: [GadgetSample_LayoutGadget_relations.js](../assets/samples/GadgetSample_LayoutGadget_relations.js)