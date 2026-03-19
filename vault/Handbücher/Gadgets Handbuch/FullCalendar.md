---
title: "FullCalendar - Gadget"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/fullcalendar.html"
---

# FullCalendar - Gadget

Kalender können mit dem FullCalendar-Gadget konfiguiert werden. Hierzu wird die Klasse [[Gadget API/otris.gadget.gui.FullCalendar]] konfiguriert und als Ergebnis des Gadgets zurückgegeben.


## Wesentliche Merkmale

- Das FullCalendar-Gadget basiert auf FullCalendar.io documentsOS verwendet v6.1.15. - Dokumentation FullCalendar.io v6
DOCUMENTS 5 verwendet v3.10.2. - Dokumentation FullCalendar.io v3
- Dynamisches Event-Handling über eine Event-Loader-Funktion.
- Variable Anzeigeformate, wie Monats-, Wochen-, Listenansichten und weitere.
- Suche und Filterung von Events innerhalb des Kalenders.


## Einfaches FullCalendar-Gadget für documentsOS

Dieses Beispiel zeigt, wie das **FullCalendar-Gadget** in **documentsOS** integriert wird, um eine einfache Kalenderansicht mit Grundfunktionen bereitzustellen. Es verwendet **FullCalendar.io v6** und bietet:

- Standardansicht: Wochenansicht (timeGridWeek)
- Navigationselemente: Vorwärts, Rückwärts, Heute (prev, next, today)
- Ereignisverwaltung:
Doppelklick erstellt einen 30-minütigen Termin.
Der Termin wird beispielhaft nur temporär angezeigt und nicht gespeichert.

Dieses Beispiel dient als Grundlage für erweiterte Funktionen.


![relations_fullcalendar_simple.png](../assets/img/gadget-types/relations_fullcalendar_simple.png?class=medium)

Abb. 90 - Wochenansicht des einfachen FullCalender-Gadgets


### Integration in documentsOS: GadgetSample_FullCalendar_simple

Das FullCalendar-Gadget-Beispiel wird als **benutzerdefinierte Aktion im Mappentyp** eingebunden. Dies geschieht in diesem Beispiel über einen **Button**, der das Skript ausführt.
Details zur Integration sind hier verfügbar: [Benutzerdefinierte Aktion im Mappentyp einrichten](../integration/integration-filetype.html#als-benutzerdefinierte-aktion-an-einer-mappe).

Konfiguration:
**gadgetConfig = {"gadgetScript": "GadgetSample_FullCalendar_simple", "gadgetAction": "show"}**


### Das Skript GadgetSample_FullCalendar_simple

Das Skript ist für documentsOS konzipiert und nutzt die JSON-Konfiguration im FullCalendar.io v6-Format.

Die **Funktionen:**

- .getFullCalendarInstance(): Konstruiert ein FullCalender-Gadget-Element.
- .setConfig(calendarConfig): Legt die Kalenderkonfiguration fest, mit:
headerToolbar: Positionierung der Navigationselemente.
start – Blättern und heute (prev, next, today)
center – title = Titel im Kontext der gewählten Kalenderansicht.
end – Auswahl von Kalenderansichten bereitstellen (dayGridMonth, timeGridWeek, timeGridDay, listYear)
initialView: Standardansicht beim Öffnen des Kalenders.
locale: Sprache im Kalender.
editable: Aktiviert das Bearbeiten von Ereignissen per Drag & Drop.
dayMaxEventRows: Begrenzung der sichtbaren Ereignisse pro Tag.
- .setDoubleClickFunction(event, dateString, documentsContext): Legt das Verhalten für Doppelklicks im Kalender fest:
event – Das vollständige Event-Objekt.
dateString – Der ISO 8601-Zeitstempel des Doppelklicks.
documentsContext – Die implizite DocumentsContext-Instanz.

Das **Skript**:


```javascript
/**
 * Simple Sample for FullCalendar Gadget in documentsOS (FullCalendar.io v6.x.x)
 * Demonstrates how to integrate a Calendar with a FullCalendar Gadget.
 * Example without unnecessary functionalities.
 *
 * Usage:
 * - Property name: gadgetConfig
 * - Property value: {"gadgetScript": "GadgetSample_FullCalendar_simple", "gadgetAction": "show"}
 */

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("show", function () {
    // Create FullCalendar instance
    const gadgetCalendar = gadgetAPI.getFullCalendarInstance();

    // Minimal configuration for FullCalendar in documentsOS
    const calendarConfig = {
        headerToolbar: {
            start: "prev,next today", // Navigation buttons
            center: "title", // Displays current view title
            end: "dayGridMonth,timeGridWeek,timeGridDay listYear" // Available calendar views
        },
        initialView: "timeGridWeek", // Default to weekly view
        locale: context.getClientLang(), // Set calendar language dynamically
        editable: true, // Allow user event modifications
        dayMaxEventRows: true,
    };

    gadgetCalendar.setConfig(calendarConfig);

    // Set DoubleClick Function to create new static events (30-minute duration)
    gadgetCalendar.setDoubleClickFunction((event, dateString, documentsContext) => {
        if (!documentsContext || !dateString) return;
        console.log("event", event);

        const fullcal = documentsContext.getGadgetContext().getClientObject();
        fullcal.addEvent({
            title: "Neuer Termin",
            start: moment(dateString).format("YYYY-MM-DDTHH:mm:ss"),
            end: moment(dateString).add(30, "minutes").format("YYYY-MM-DDTHH:mm:ss"),
            allDay: false
        });
    });

    return gadgetCalendar;
});

context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple Sample for FullCalendar Gadget in documentsOS (FullCalendar.io v6.x.x)
 * Demonstrates how to integrate a Calendar with a FullCalendar Gadget.
 * Example without unnecessary functionalities.
 *
 * Usage:
 * - Property name: gadgetConfig
 * - Property value: {"gadgetScript": "GadgetSample_FullCalendar_simple", "gadgetAction": "show"}
 */

const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("show", function () {
    // Create FullCalendar instance
    const gadgetCalendar = gadgetAPI.getFullCalendarInstance();

    // Minimal configuration for FullCalendar in documentsOS
    const calendarConfig = {
        headerToolbar: {
            start: "prev,next today", // Navigation buttons
            center: "title", // Displays current view title
            end: "dayGridMonth,timeGridWeek,timeGridDay listYear" // Available calendar views
        },
        initialView: "timeGridWeek", // Default to weekly view
        locale: context.getClientLang(), // Set calendar language dynamically
        editable: true, // Allow user event modifications
        dayMaxEventRows: true,
    };

    gadgetCalendar.setConfig(calendarConfig);

    // Set DoubleClick Function to create new static events (30-minute duration)
    gadgetCalendar.setDoubleClickFunction((event, dateString, documentsContext) => {
        if (!documentsContext || !dateString) return;
        console.log("event", event);

        const fullcal = documentsContext.getGadgetContext().getClientObject();
        fullcal.addEvent({
            title: "Neuer Termin",
            start: moment(dateString).format("YYYY-MM-DDTHH:mm:ss"),
            end: moment(dateString).add(30, "minutes").format("YYYY-MM-DDTHH:mm:ss"),
            allDay: false
        });
    });

    return gadgetCalendar;
});

context.returnValue = gadgetAPI.transfer();
Download: [GadgetSample_FullCalendar_simple.js](../assets/samples/GadgetSample_FullCalendar_simple.js)


## Funktionales FullCalendar-Gadget-Beispiel für documentsOS - relations

In diesem Beispiel werden Termine als Mappen gespeichert und verwaltet. Hierzu wird der Mappentyp `crmAppointment` (Termin) im Demo-Mandanten **relations** unter documentsOS genutzt.

Der Kalender bietet folgende Funktionalitäten:

- Startansicht:
Öffnet mit der aktuellen Woche
Fokussiert auf den aktuellen Tag und die aktuelle Uhrzeit
- Datenladefunktion:
Lädt alle vorhandenen Termine
Weist den Termintypen einen Farbcode zu
- Kopfzeile:
Ansichten: Monat, Woche, Tag
Jahresübersicht: Anzeige einer Terminliste für das gesamte Jahr im Kontext der aktuellen Ansicht
Titel: Zeigt den Datumsbereich der aktuellen Ansicht
"Heute"-Button, Navigation in Sprungweiten der aktuellen Ansicht sowie Jahr für Jahr, Vollbildmodus-Button
- Interaktive Funktionen:
Einfachklick auf einen leeren Bereich: Öffnet die zugehörige Tagesansicht
Klick auf einen Termin: Öffnet die entsprechende Mappe in einem neuen Browser-Tab im externen Modus
Verschieben eines Termins: Beim Verschieben (gesamte Terminfläche oder Änderung des Endzeitpunkts) werden die Start- und Endzeiten in der zugehörigen Mappe angepasst
Doppelklick auf einen leeren Bereich: Öffnet einen Dialog zur Erstellung eines neuen Termins

| Abb. 91 - FullCalendar-Gadget an einer Mappe | Abb. 92 - ScriptParameter-Dialog zu neuem Termin nach DoppelKlick |
| --- | --- |


### Integration in documentsOS: GadgetSample_FullCalendar_crmQuote

Dieses Beispiel besteht aus zwei Teilen:

- FullCalendar-Gadget: Das Gadget wird in diesem Beispiel als benutzerdefinierte Aktion am Mappentyp integriert. Das Gadget wird mit dem gadgetConfig-Objekt wie folgt konfiguriert: { "gadgetScript": "GadgetSample_FullCalendar_crmQuote", "gadgetAction": "show", "gadgetWidth": 700, "gadgetHeight": 700
}
- executeScript crmAppointment_newAppointment zum Erstellen und Updaten von Terminen: Das Skript wird mit Scriptparametern für den Create-Dialog im Mandanten integriert.
Diese Parameter werden im AdminCenter bzw. Manager dem Skript hinzugefügt und sind in der XML des Skripts zu diesem Beispiel bereits vorhanden.


### Das Gadget-Skript GadgetSample_FullCalendar_crmQuote

Das FullCalendar-Gadget nutzt in documentsOS zur Konfiguration die `FullCalender.io v6`-Version.

Für die Darstellung der unterschiedlichen Terminarten im Mappentyp crmQuote werden Farben definiert und beim erstellen der Liste aus dem FileResultset aller Termine entsprechend zugewiesen.

Die `calendarConfig` nutzt in diesem Beispiel:

- locale: Die Sprache und Lokalisierung des Kalenders.
- slotMinTime: Die früheste anzuzeigende Uhrzeit im Zeitraster.
- headerToolbar: Konfiguriert die Kopfzeile des Kalenders.
start: Monats-, Wochen- und Tagesansicht sowie die Jahresliste.
center: Titel (Datumsbereich) der aktuellen Ansicht.
end: Heute, vorher/nächste Periode, vorheriges/nächstes Jahr, benutzerdefinierter Vollbildbutton.
- initialView: Die Startansicht des Kalenders. (hier: Wochenansicht mit Zeitgitter).
- initialDate: Das Startdatum des Kalenders.
- scrollTime: Die Scrollposition (Uhrzeit) des Kalenders beim Start.
- views: Definition spezifischer Einstellungen für einzelne Ansichten.
Beispiel: Im dayGridMonth wird das Zeitformat für Events (Stunden und Minuten) festgelegt.
- eventClick: Definiert eine Funktion, die beim Klick auf einen Termin ausgeführt wird.
documentsContext.openFileView(): Hier wird die zugehörige Mappe im externen Modus geöffnet.
- dateClick: Legt fest, was passiert, wenn auf einen leeren Bereich (Datum) geklickt wird.
info.view.calendar.changeView("timeGridDay", info.dateStr) Aktiviert die Tagesansicht des angeklickten Datums.
- eventChange: Wird aufgerufen, wenn ein Termin (Event) verschoben oder verändert wird.
Aktualisiert die Start- und Endzeiten der zugehörigen Mappe über ein Skript.
- editable:true : Gibt an, dass Termine im Kalender verschoben/angepasst werden können.
- customButtons: Ermöglicht das Hinzufügen benutzerdefinierter Buttons.
Beispiel: fullscreenButton – Ein Button zum Wechsel in den Vollbildmodus (hier wird document.exitFullscreen() aufgerufen).

**Funktionen** im Skript:

- .setConfig(calendarConfig): Übergibt der FullCalendar-Gadget-Instanz das Konfigurationsobjekts.
- .setContextData(): Setzt serverseitig Kontextdaten zur clientseitigen Verwendung.
- .addSource(): Fügt dem Kalender eine Quelle hinzu, aus der Termine geladen werden.
- .setDoubleClickFunction(): Legt die Funktion fest, die beim Doppelklick auf einen leeren Bereich ausgeführt wird.
documentsContext.getGadgetContext().getContextData(): Holt clienseitig die serverseitig übergebenen Kontextdaten ab.
documents.sdk.utils.formatDate(): Formatiert Datumsangaben, wie sie von Datumsfeldern in Mappen akzeptiert werden.
documentsContext.getI18nContext().getServerMessages(): Holt clientseitig die serverseitig verfügbaren i18n.properties lokalisiert ab.
documentsContext.executeScript(): Clientseitiger Aufruf. Führt ein serverseitiges globales Skript über seinen Namen serverseitig aus.
documentsContext.openMessageDialog(): Öffnet clientseitig einen Dialog zur Anzeige von Meldungen.
documentsContext.getGadgetContext().getClientObject(): Das FullCalendar-Gadget-spezifische Clientobjekt.
.addEvent(): Dem Client-Objekt neue Termine hinzufügen.
- .setSearchContext(label, filterFunction): Fügt der globalen Suche einen Eintrag für das FullCalendar-Gadget hinzu.
- .setLazyLoad(false): Deaktiviert das Lazy Loading, um alle Termine auf einmal zu laden.


```javascript
/**
 * FullCalendar Gadget for documentsOS using the `crmAppointment` map type
 * in the relations demo principal as a storage location.
 * Loads all appointments and displays them with colors. Supports creation and editing.
 *
 * gadgetConfig:
 * As a button: {"gadgetScript": "GadgetSample_FullCalendar_crmQuote", "gadgetAction": "show", "gadgetWidth": 700, "gadgetHeight": 700}
 * As a folder: {"gadgetScript": "GadgetSample_FullCalendar_crmQuote", "gadgetAction": "show"}
 */

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Color definitions for different appointment types
const colors = {
    Appointment: "#FF5722", // Warm Orange
    Note: "#FF9800", // Amber
    CallIn: "#388E3C", // Green
    CallOut: "#4CAF50", // Lighter Green
    LetterIn: "#D32F2F", // Red
    LetterOut: "#F44336", // Lighter Red
    EmailIn: "#0288D1", // Blue
    EmailOut: "#1976D2", // Lighter Blue
    Internet: "#00BCD4", // Cyan
    Job: "#9C27B0", // Purple
    Task: "#512DA8", // Deep Purple
    Campaign: "#795548" // Brown
};

gadgetAPI.registerGadgetAction("show", function () {

    // FullCalendar-Gadget
    const gadgetCalendar = gadgetAPI.getFullCalendarInstance();

    // Define file type for storing and fetching appointments
    const fileType = "crmAppointment";
    const appointments = new FileResultset(fileType);

    // Get the title from the file in context if available.
    const contextFile = context.file;
    const fileTitle = contextFile ? contextFile.getAutoText("title") : "";

    // Store all existing events in a single list.
    const allEvents = [];
    if (appointments) {
        for (var file = appointments.first(); file; file = appointments.next()) {
            const crmType = file.getAutoText("crmType.key");

            // Define an all-day appointment as an appointment that starts at 00:00 and has no end time.
            const startDateString = util.convertDateToString(file.crmDate, "yyyy-mm-dd HH:MM");
            const isAllDay = !file.crmEndDate && startDateString.endsWith("00:00");

            allEvents.push({
                id: file.getAutoText("id"),
                title: file.getAutoText("crmSubject"),
                start: startDateString,
                end: file.crmEndDate ? util.convertDateToString(file.crmEndDate, "yyyy-mm-dd HH:MM") : undefined,
                allDay: isAllDay,
                color: colors[crmType] || "#333"
            });
        }
    }

    const calendarConfig = {
        locale: context.getClientLang(),
        slotMinTime: "06:00:00",
        headerToolbar: {
            start: "dayGridMonth,timeGridWeek,timeGridDay listYear",
            center: "title",
            end: "today prev,next prevYear,nextYear fullscreenButton"
        },
        initialView: "timeGridWeek",
        initialDate: new Date().toISOString().split("T")[0],
        scrollTime: new Date().toTimeString().split(" ")[0],
        views: {
            dayGridMonth: { eventTimeFormat: { hour: "2-digit", minute: "2-digit" } }
        },
        eventClick: function (info) {
            // Open file in an external mode
            documentsContext.openFileView(info.event.id, null, null, { externalMode: true });
        },
        dateClick: function (info, dc) {
            // Switch to the day view when clicking on an empty slot.
            info.view.calendar.changeView("timeGridDay", info.dateStr);
        },
        eventChange: function (info) {
            // Update file on change when the appointment in the calendar is moved.
            const event = info.event;

            const fmtDate = (m) => documents.sdk.utils.formatDate(m, { fieldType: "timestamp", dateType: "moment" });
            const scriptParams = {
                actionType: "update",
                id: event.id,
                startDateString: fmtDate(moment(event.start)),
                endDateString: event.end ? fmtDate(moment(event.end)) : null
            };

            documentsContext.executeScript("crmAppointment_newAppointment", scriptParams).then((strJSON) => {
                const result = JSON.parse(strJSON);
                if (result.error) {
                    return documentsContext.openMessageDialog("Fehler", result.error);
                }
            });
        },
        editable: true,
        // Custom button for fullscreen mode.
        customButtons: {
            fullscreenButton: {
                text: "⛶ " + context.getLocaleValue("de: Vollbild; en: Fullscreen"),
                click: function () {
                    const ce = documentsContext.getGadgetContext().getContainerElement();
                    console.log("ce", ce);
                    if (!document.fullscreenElement) {
                        ce.requestFullscreen();
                    }
                    else {
                        document.exitFullscreen();
                    }
                }
            }
        }
    };

    gadgetCalendar.setContextData({
        description: fileTitle ? (context.getLocaleValue("de:Neuer Termin zu: ;en:New appointment for: ") + fileTitle) : "",
        appointmentDialogTitle: context.getLocaleValue("de:Einen neuen Termin erstellen;en:Create a new appointment")
    });

    // documentsOS since 6.1.1 (FullCalendar v6)
    gadgetCalendar.setSearchContext("Gadget_Calendar", function filterFunction(events, searchExpression) {
        return events.filter(e => e.title.toLowerCase().includes(searchExpression.toLowerCase()));
    });

    // documentsOS since 6.1.1 (FullCalendar v6) with defaultFilterFinction
    // gadgetCalendar.setSearchContext("Gadget_Calendar");

    gadgetCalendar.setConfig(calendarConfig);

    // Add all events to a single source.
    gadgetCalendar.addSource({
        id: "allEvents",
        events: allEvents
    });

    // Create file on double-click.
    gadgetCalendar.setDoubleClickFunction((event, dateString, documentsContext) => {
        if (!documentsContext || !dateString) return;
        const { description, appointmentDialogTitle } = documentsContext.getGadgetContext().getContextData();

        const startMoment = moment(dateString);
        const fmtDate = (m) => documents.sdk.utils.formatDate(m, { fieldType: "timestamp", dateType: "moment" });

        const scriptParams = {
            actionType: "create",
            startDateString: fmtDate(startMoment),
            endDateString: fmtDate(startMoment.add(30, "minutes")),
            description: description,
            crmType: { key: "Appointment" }
        };

        const i18nContext = documentsContext.getI18nContext();
        const msg = i18nContext.getServerMessages();

        const opts = { dialogTitle: appointmentDialogTitle, async: true, useScriptParameterDialog: true };

        documentsContext.executeScript("crmAppointment_newAppointment", scriptParams, opts).then(function (strJSON) {
            const result = JSON.parse(strJSON);
            if (result.error) {
                return documentsContext.openMessageDialog(msg.get("title_error"), result.error);
            }
            const fullcal = documentsContext.getGadgetContext().getClientObject();
            fullcal.addEvent(result);
        });
    });

    // Disable lazy loading to load all calendar events at once.
    gadgetCalendar.setLazyLoad(false);
    gadgetCalendar.setTitle("FullCalendar-Gadget");

    return gadgetCalendar;
});

context.returnValue = gadgetAPI.transfer();
```

/**
 * FullCalendar Gadget for documentsOS using the `crmAppointment` map type
 * in the relations demo principal as a storage location.
 * Loads all appointments and displays them with colors. Supports creation and editing.
 *
 * gadgetConfig:
 * As a button: {"gadgetScript": "GadgetSample_FullCalendar_crmQuote", "gadgetAction": "show", "gadgetWidth": 700, "gadgetHeight": 700}
 * As a folder: {"gadgetScript": "GadgetSample_FullCalendar_crmQuote", "gadgetAction": "show"}
 */

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Color definitions for different appointment types
const colors = {
    Appointment: "#FF5722", // Warm Orange
    Note: "#FF9800", // Amber
    CallIn: "#388E3C", // Green
    CallOut: "#4CAF50", // Lighter Green
    LetterIn: "#D32F2F", // Red
    LetterOut: "#F44336", // Lighter Red
    EmailIn: "#0288D1", // Blue
    EmailOut: "#1976D2", // Lighter Blue
    Internet: "#00BCD4", // Cyan
    Job: "#9C27B0", // Purple
    Task: "#512DA8", // Deep Purple
    Campaign: "#795548" // Brown
};

gadgetAPI.registerGadgetAction("show", function () {

    // FullCalendar-Gadget
    const gadgetCalendar = gadgetAPI.getFullCalendarInstance();

    // Define file type for storing and fetching appointments
    const fileType = "crmAppointment";
    const appointments = new FileResultset(fileType);

    // Get the title from the file in context if available.
    const contextFile = context.file;
    const fileTitle = contextFile ? contextFile.getAutoText("title") : "";

    // Store all existing events in a single list.
    const allEvents = [];
    if (appointments) {
        for (var file = appointments.first(); file; file = appointments.next()) {
            const crmType = file.getAutoText("crmType.key");

            // Define an all-day appointment as an appointment that starts at 00:00 and has no end time.
            const startDateString = util.convertDateToString(file.crmDate, "yyyy-mm-dd HH:MM");
            const isAllDay = !file.crmEndDate && startDateString.endsWith("00:00");

            allEvents.push({
                id: file.getAutoText("id"),
                title: file.getAutoText("crmSubject"),
                start: startDateString,
                end: file.crmEndDate ? util.convertDateToString(file.crmEndDate, "yyyy-mm-dd HH:MM") : undefined,
                allDay: isAllDay,
                color: colors[crmType] || "#333"
            });
        }
    }

    const calendarConfig = {
        locale: context.getClientLang(),
        slotMinTime: "06:00:00",
        headerToolbar: {
            start: "dayGridMonth,timeGridWeek,timeGridDay listYear",
            center: "title",
            end: "today prev,next prevYear,nextYear fullscreenButton"
        },
        initialView: "timeGridWeek",
        initialDate: new Date().toISOString().split("T")[0],
        scrollTime: new Date().toTimeString().split(" ")[0],
        views: {
            dayGridMonth: { eventTimeFormat: { hour: "2-digit", minute: "2-digit" } }
        },
        eventClick: function (info) {
            // Open file in an external mode
            documentsContext.openFileView(info.event.id, null, null, { externalMode: true });
        },
        dateClick: function (info, dc) {
            // Switch to the day view when clicking on an empty slot.
            info.view.calendar.changeView("timeGridDay", info.dateStr);
        },
        eventChange: function (info) {
            // Update file on change when the appointment in the calendar is moved.
            const event = info.event;

            const fmtDate = (m) => documents.sdk.utils.formatDate(m, { fieldType: "timestamp", dateType: "moment" });
            const scriptParams = {
                actionType: "update",
                id: event.id,
                startDateString: fmtDate(moment(event.start)),
                endDateString: event.end ? fmtDate(moment(event.end)) : null
            };

            documentsContext.executeScript("crmAppointment_newAppointment", scriptParams).then((strJSON) => {
                const result = JSON.parse(strJSON);
                if (result.error) {
                    return documentsContext.openMessageDialog("Fehler", result.error);
                }
            });
        },
        editable: true,
        // Custom button for fullscreen mode.
        customButtons: {
            fullscreenButton: {
                text: "⛶ " + context.getLocaleValue("de: Vollbild; en: Fullscreen"),
                click: function () {
                    const ce = documentsContext.getGadgetContext().getContainerElement();
                    console.log("ce", ce);
                    if (!document.fullscreenElement) {
                        ce.requestFullscreen();
                    }
                    else {
                        document.exitFullscreen();
                    }
                }
            }
        }
    };

    gadgetCalendar.setContextData({
        description: fileTitle ? (context.getLocaleValue("de:Neuer Termin zu: ;en:New appointment for: ") + fileTitle) : "",
        appointmentDialogTitle: context.getLocaleValue("de:Einen neuen Termin erstellen;en:Create a new appointment")
    });

    // documentsOS since 6.1.1 (FullCalendar v6)
    gadgetCalendar.setSearchContext("Gadget_Calendar", function filterFunction(events, searchExpression) {
        return events.filter(e => e.title.toLowerCase().includes(searchExpression.toLowerCase()));
    });

    // documentsOS since 6.1.1 (FullCalendar v6) with defaultFilterFinction
    // gadgetCalendar.setSearchContext("Gadget_Calendar");

    gadgetCalendar.setConfig(calendarConfig);

    // Add all events to a single source.
    gadgetCalendar.addSource({
        id: "allEvents",
        events: allEvents
    });

    // Create file on double-click.
    gadgetCalendar.setDoubleClickFunction((event, dateString, documentsContext) => {
        if (!documentsContext || !dateString) return;
        const { description, appointmentDialogTitle } = documentsContext.getGadgetContext().getContextData();

        const startMoment = moment(dateString);
        const fmtDate = (m) => documents.sdk.utils.formatDate(m, { fieldType: "timestamp", dateType: "moment" });

        const scriptParams = {
            actionType: "create",
            startDateString: fmtDate(startMoment),
            endDateString: fmtDate(startMoment.add(30, "minutes")),
            description: description,
            crmType: { key: "Appointment" }
        };

        const i18nContext = documentsContext.getI18nContext();
        const msg = i18nContext.getServerMessages();

        const opts = { dialogTitle: appointmentDialogTitle, async: true, useScriptParameterDialog: true };

        documentsContext.executeScript("crmAppointment_newAppointment", scriptParams, opts).then(function (strJSON) {
            const result = JSON.parse(strJSON);
            if (result.error) {
                return documentsContext.openMessageDialog(msg.get("title_error"), result.error);
            }
            const fullcal = documentsContext.getGadgetContext().getClientObject();
            fullcal.addEvent(result);
        });
    });

    // Disable lazy loading to load all calendar events at once.
    gadgetCalendar.setLazyLoad(false);
    gadgetCalendar.setTitle("FullCalendar-Gadget");

    return gadgetCalendar;
});

context.returnValue = gadgetAPI.transfer();
Download: [GadgetSample_FullCalendar_crmQuote.js](../assets/samples/GadgetSample_FullCalendar_crmQuote.js)


### Das executeScript crmAppointment_newAppointment

Dieses Skript wird serverseitig durch den Aufruf von `documentsContext.executeScript` in zwei unterschiedlichen Szenarien ausgeführt:

- Update (verwendet im eventChange-Event): Voraussetzungen:
actionType hat den Wert "update".
Die Termin-ID (id) sowie die Parameter startDateString und endDateString werden aus den Parametern übernommen.
Funktionsweise:
Das Skript prüft, ob die Termin-ID vorhanden ist und holt die zugehörige Mappe (Termin).
Die Felder crmDate und crmEndDate im File werden aktualisiert und anschließend dei Mappe gespeichert.
Abschließend wird ein JSON-stringifiziertes Objekt mit den aktualisierten Termindaten zurückgegeben.
- Create (verwendet in der setDoubleClickFunction): Voraussetzungen:
actionType hat den Wert "create".
Die Parameter title (Titel des Termins), startDateString und endDateString werden übernommen.
Der ScriptParameter-Dialog ermöglicht die Anpassung und die Eingabe weiterer Werte.
Funktionsweise:
Das Skript überprüft, ob ein Titel vorhanden ist und erstellt eine neue Mappe des Typs crmAppointment.
Es werden die Werte in die Felder crmType, crmDate, crmEndDate, crmSubject, crmDescription und crmContactInfo entsprechend gesetzt.
Nach der Speicherung wird ein JSON-stringifiziertes Objekt zurückgegeben, das die Daten des neu erstellten Termins enthält.


```javascript
/**
 * This script is executed by documentsContext.executeScript
 * within gadgetCalendar.setDoubleClickFunction or eventChange-function
 * in "GadgetSample_FullCalendar_crmQuote"-Scripts in documentsOS demo client "relations".
 *
 * Required parameters:
 * - actionType ("create" | "update")
 * - startDateString (mandatory)
 * - endDateString (mandatory)
 */

// Update - used by eventChange
if (actionType === "update") {
    if (typeof id === 'undefined' || !id) {
        return JSON.stringify({ error: context.getLocaleValue("de:Fehlende Termin-ID für Update.;en:Missing appointment ID for update.") });
    }
    const file = context.getFileById(id);
    if (!file) {
        return JSON.stringify({ error: context.getLocaleValue("de:Der Termin mit der ID existiert nicht oder kein Zugriff erlaubt.;en:The appointment with this ID does not exist or access is denied.") });
    }
    file.crmDate = startDateString;
    file.crmEndDate = endDateString;

    file.sync();

    return JSON.stringify({
        action: "update",
        id: file.getAutoText("id"),
        title: file.crmSubject,
        start: file.crmDate,
        end: file.crmEndDate,
        crmType: file.crmType
    });
}

// Create - used by setDoubleClickFunction
if (actionType === "create") {
    if (typeof title === 'undefined' || !title || title.length === 0) {
        return JSON.stringify({ error: context.getLocaleValue("de:Ein Termin braucht immer einen Titel.;en:An appointment must always have a title.") });
    }

    const newFile = context.createFile("crmAppointment");
    newFile.crmType = appointmentTyp;
    newFile.crmDate = startDateString;
    newFile.crmEndDate = endDateString;
    newFile.crmSubject = title;
    newFile.crmDescription = description;
    newFile.crmContactInfo = location;

    newFile.sync();

    return JSON.stringify({
        action: "create",
        id: newFile.getAutoText("id"),
        title: newFile.crmSubject,
        start: newFile.crmDate,
        end: newFile.crmEndDate,
        crmType: newFile.crmType
    });
}
```

/**
 * This script is executed by documentsContext.executeScript
 * within gadgetCalendar.setDoubleClickFunction or eventChange-function
 * in "GadgetSample_FullCalendar_crmQuote"-Scripts in documentsOS demo client "relations".
 *
 * Required parameters:
 * - actionType ("create" | "update")
 * - startDateString (mandatory)
 * - endDateString (mandatory)
 */

// Update - used by eventChange
if (actionType === "update") {
    if (typeof id === 'undefined' || !id) {
        return JSON.stringify({ error: context.getLocaleValue("de:Fehlende Termin-ID für Update.;en:Missing appointment ID for update.") });
    }
    const file = context.getFileById(id);
    if (!file) {
        return JSON.stringify({ error: context.getLocaleValue("de:Der Termin mit der ID existiert nicht oder kein Zugriff erlaubt.;en:The appointment with this ID does not exist or access is denied.") });
    }
    file.crmDate = startDateString;
    file.crmEndDate = endDateString;

    file.sync();

    return JSON.stringify({
        action: "update",
        id: file.getAutoText("id"),
        title: file.crmSubject,
        start: file.crmDate,
        end: file.crmEndDate,
        crmType: file.crmType
    });
}

// Create - used by setDoubleClickFunction
if (actionType === "create") {
    if (typeof title === 'undefined' || !title || title.length === 0) {
        return JSON.stringify({ error: context.getLocaleValue("de:Ein Termin braucht immer einen Titel.;en:An appointment must always have a title.") });
    }

    const newFile = context.createFile("crmAppointment");
    newFile.crmType = appointmentTyp;
    newFile.crmDate = startDateString;
    newFile.crmEndDate = endDateString;
    newFile.crmSubject = title;
    newFile.crmDescription = description;
    newFile.crmContactInfo = location;

    newFile.sync();

    return JSON.stringify({
        action: "create",
        id: newFile.getAutoText("id"),
        title: newFile.crmSubject,
        start: newFile.crmDate,
        end: newFile.crmEndDate,
        crmType: newFile.crmType
    });
}
Die XML wird dem Mandanten über den XML-Import hinzugefügt.

Download: [crmAppointment_newAppointment.xml](../assets/samples/crmAppointment_newAppointment.xml)


### Alternative Integration in documentsOS: GadgetSample_FullCalendar_crmQuote

Das Gadget kann auch [als öffentlicher Ordner](../integration/integration-public-folder.html#gadget-als-ordner) integriert werden.
Das Gadget wird dann mit dem `gadgetConfig`-Objekt wie folgt konfiguriert:


```json
{"gadgetScript": "GadgetSample_FullCalendar_crmQuote", "gadgetAction": "show" }
```

{"gadgetScript": "GadgetSample_FullCalendar_crmQuote", "gadgetAction": "show" }
## Exklusive FullCalendar-Gadget-Funktionen

- .setConfig(calendarConfig): Konfiguration für den Kalender übergeben.
calendarConfig.initialView: "dayGridMonth" - documentsOS erforderlich
Mögliche initialView-Werte in v6:
"dayGridMonth", "dayGridWeek", "dayGridDay", "timeGridWeek", "timeGridDay", "listYear", "listMonth", "listWeek", "listDay"
➜ in DOCUMENTS 5 stattdessen defaultView
- .addSource(source, eventLoader): Event Source Object
Fügt eine neue Datenquelle für Events hinzu. Optional kann eine eigene eventLoader-Funktion übergeben werden, um Events dynamisch zu laden.
- .setDoubleClickFunction(event, dateString, documentsContext): Gadget API
Setzt eine Funktion für Doppelklicks auf Kalenderelemente.
- .setEventLoader(eventLoaderFunction): Gadget API
Registriert eine globale Event-Loader-Funktion, die aufgerufen wird, wenn keine spezifische Loader-Funktion für eine Quelle definiert ist.
- .setLazyLoad(enable):
Aktiviert oder deaktiviert das Lazy Loading von Events. Wenn aktiviert (true), lädt der Kalender nur Events für den sichtbaren Zeitraum und verbessert die Performance bei großen Datenmengen.
- .setSearchContext(label, filterFunction):
Aktiviert die Suchfunktion für Kalender-Events über das globale Suchfeld.
Wird keine eigene filterFunction übergeben, greift ab documentsOS 6.1.1 (FullCalendar v6) eine Standard-Filterfunktion, die nach .title in den Events filtert. gadgetCalendar.setSearchContext("Gadget_Calendar");
Bei Verwendung einer eigenen Filterfunktion hängt die Signatur von der FullCalendar-Version ab:
FullCalendar v6 (documentsOS):
function filterFunction(events, searchExpression) → Array<PlainEventObject>
FullCalendar v3.10.x (DOCUMENTS 5):
function filterFunction(source, searchExpression) → Array<eventDefs>

**Wichtig:**
Wenn `lazyload: true` aktiviert ist, aber keine `eventLoader`-Funktion definiert wurde, startet der Kalender **ohne Events**.
Damit Events dynamisch nachgeladen werden, muss entweder:

1. eine globale Event-Loader-Funktion mit .setEventLoader(eventLoaderFunction) registriert oder
2. eine spezifische Event-Loader-Funktion für eine Datenquelle mit .addSource(source, eventLoaderFunction) übergeben werden.

Alternativ können statische Events direkt beim Initialisieren über `.addSource(source)` geladen werden.