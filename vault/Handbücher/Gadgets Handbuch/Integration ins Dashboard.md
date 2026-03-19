---
title: "Einbindung von Gadgets in Dashboards"
source: "https://otris.software/documents/manuals/books/gadget/integration/integration-dashboard.html"
---

# Einbindung von Gadgets in Dashboards


## Voraussetzungen

1. Der Benutzer muss die Berechtigung zum Bearbeiten von Dashboards besitzen. (Dashboard Properties).
2. dashboardReportMode = true
3. Das Gadget-Script braucht die Eigenschaft customTileScript = true, damit es als benutzerdefinierte Kachel verwendet werden kann.
4. "doTile" ist der erforderliche Funktionsname für die Integration des Gadgets im Dashboard
.registerGadgetAction("doTile", function () {.


### Lizenz

- otris Dashboards seit DOCUMENTS 5 HF2 verfügbar
- Chart- oder benutzerdefinierte Kacheln erfordern zusätzlich eine Scripting + Lizensierung.


### Dashboard Properties

Voraussetzung zur Integration erweiterter Kacheln ist die Aktivierung der DLC-Eigenschaft **dashboardReportMode = true**. *(DLC-Eigenschaft = globale Eigenschaft am Mandanten)*

Für das **Bearbeiten** oder **Hinzufügen von Dashboards** müssen Properties/Eigenschaften (mindestens Stufe 2) am Benutzer oder global am Mandanten gesetzt werden. Hierfür gibt es:

| Stufe | Eigenschaft | Beschreibung |
| --- | --- | --- |
| 1 | ohne | Es existiert nur die Standardseite. Diese kann nicht verändert werden. Die Bearbeiten-Schaltfläche ist nicht verfügbar. |
| 2 | im Benutzerkonto: overviewDashboard.dashboardAdmin = true | true, Benutzer kann Standardvorlage erstellen, die bei allen unveränderlich angezeigt wird. Nur der Dashboard-Admin erhält die Bearbeiten-Schaltfläche. |
| 3 | global, DLC: overviewDashboard.dashboardMode = extended | extended beinhaltet Stufe 2. Die Standardseite kann jeder Benutzer für sich selbst anpassen (Bearbeiten-Schaltfläche für alle vorhanden, anordnen, entfernen und hinzufügen möglich). |
| 4 | global, DLC: overviewDashboard.dashboardMode = multi | multi beinhaltet Stufe 3. Jeder Benutzer kann für sich weitere Dashboard-Seiten hinzufügen und konfigurieren. |


## Beispiel Hello-Gadget als Kachel

Hier wird kurz beschrieben, wie das Hello-Gadget für die Verwendung als Kachel im Dashboard konfiguriert wird.


### globale Eigenschaften setzen

`Manager -> PullDown-Menu "Documents" -> Einstellungen -> Eigenschaften`

- die globale DLC-Eigenschaft overviewDashboard.dashboardMode = multi
- und die globale DLC-Eigenschaft dashboardReportMode = true


![DLC Dashboard Properties](../assets/img/dOS_dashboard_DLC.png)

Abb. 12 - DLC Dashboard Properties


### Das Gadget-Skript GadgetSample_HelloGadget_Dashboard

Die `registerGadgetAction`-Funktion muss den Namen "doTile" haben.

Die Eigenschaft `customTileScript = true` muss am Script hinzugefügt werden:
`Manager -> Documents -> Scripte -> das Script -> Eigenschaften -> neue Eigenschaft hinzufügen`
Die Eigenschaft `tileHeadline = Hello Dashboard` legt einen alternativen Namen fest, der in der Dashboard-Auswahl angezeigt wird.


![Skript Properties](../assets/img/dOS_dashboard_ScriptProps.png)

Abb. 13 - Skript Properties


```javascript
/**
 * To use this gadget script as a custom tile in the dashboard :
 * DLC Property name: overviewDashboard.dashboardMode
 *  DLC Property value: extended (or multi)
 * DLC Property name: dashboardReportMode
 *  DLC Property value: true
 * Script Property name: customTileScript
 *  Script Property value: true
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS

// Required: Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "doTile"
// and link it to an action function.
// "doTile" is the required function name
// for using this gadget as a custom tile in the dashboard.
gadgetAPI.registerGadgetAction("doTile", function () {

    // Initialize an HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();

    // Implement the Gadget's functionality
    htmlGadget.appendHtml(`
        <div style="color: black; background-color: white;">
            <h1>Hello Gadget!</h1>
        </div>
    `);

    // Return the Gadget instance WITHOUT calling the transfer() method
    return htmlGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * To use this gadget script as a custom tile in the dashboard :
 * DLC Property name: overviewDashboard.dashboardMode
 *  DLC Property value: extended (or multi)
 * DLC Property name: dashboardReportMode
 *  DLC Property value: true
 * Script Property name: customTileScript
 *  Script Property value: true
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS

// Required: Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "doTile"
// and link it to an action function.
// "doTile" is the required function name
// for using this gadget as a custom tile in the dashboard.
gadgetAPI.registerGadgetAction("doTile", function () {

    // Initialize an HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();

    // Implement the Gadget's functionality
    htmlGadget.appendHtml(`
        <div style="color: black; background-color: white;">
            <h1>Hello Gadget!</h1>
        </div>
    `);

    // Return the Gadget instance WITHOUT calling the transfer() method
    return htmlGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();
Download: [GadgetSample_Message_Gadget.js](../assets/samples/GadgetSample_HelloGadget_Dashboard.js)


### Das Gadget als Kachel hinzufügen

Um das Gadget als Kachel zum Dashboard hinzuzufügen, muss es im Bearbeitungsmodus ausgewählt werden.
`Startseite -> Bearbeiten -> Hinzufügen`
*(Fehlt die Bearbeiten-Option, dann fehlt die Berechtigung. s.o.)*


![Dashboard bearbeiten](../assets/img/dOS_dashboard_edit.png)

Abb. 14 - Dashboard bearbeiten

Nach einem Klick auf „Hinzufügen“ werden die verfügbaren Kacheln angezeigt.
Wenn die Bearbeiten-Option fehlt, liegt keine entsprechende Berechtigung vor. Siehe oben.
Fehlt die gewünschte Kachel, könnte die Berechtigung für das Skript fehlen.
Bleibt die Kachel unsichtbar, könnte ein Fehler im Skript vorliegen (siehe Fehlermeldung in der Server-Konsole).


![Kachel Auswahl](../assets/img/dOS_dashboard_selection.png)

Abb. 15 - Kachel Auswahl

Das Gadget wurde dem Dashboard als Kachel hinzugefügt:


![Kachel Hello Gadget](../assets/img/dOS_dashboard_success.png)

Abb. 16 - Kachel Hello Gadget


## Beispiel Sales Pipeline

Im Demo-Mandanten `relations` wurde ein Balkendiagramm als Dashboard-Gadget konfiguriert und als Kachel integriert.


![dOS_relations_salesPipeline.png](../assets/img/dOS_relations_salesPipeline.png)

Abb. 17 - Sales Pipeline Kachel im relations Demo-Mandanten

Dazu wurde das Skript `Gadget_opportunityStatsHTML` entsprechend konfiguriert.
Für die Konfiguration wurden Methoden der [[Gadget API/otris.gadget.gui.Settings]] -Klasse verwendet, die anschließend mit `.addSettings(settings)` in die Gadget-Instanz integriert wurden.

**Das Skript für documentsOS (Chart.js 4.4.x):**


```javascript
/**
 * Sample Dashboard Chart (for documentsOS with Chart.js 4.4.x )
 * This script returns a bar chart gadget for the dashboard.
 * Therefore, "doTile" is the required function name for registerGadgetAction().
 *
 * To use this gadget script as a custom tile in the dashboard,
 * the appropriate DLC and script properties must be set.
 */

const gAPI = require("gadgetAPI.module.gadgetAPI");
const fileType = "crmOpportunity";
const field = "crmStatus";
const fileResultset = context.folderFiles || new FileResultset(fileType);
const states = {};

// Initialize the states object
// crmStatus is an enumField with possible values:
// [Prospect, Presentation, Quote, Negotiation, Won, Lost]
context.getEnumValues(fileType, field).forEach(state => {
	states[context.getEnumErgValue(fileType, field, state)] = 0;
});

// Evaluate files and accumulate the states
let file, state;
for (file = fileResultset.first(); file; file = fileResultset.next()) {
	state = context.getEnumErgValue(fileType, field, file.crmStatus);
	states[state] += file.crmAmount / 1000;
}

// Prepare the values and labels for Chart.js
const labels = [];
const arrData = [];
const scaleLabel = context.getLocaleValue("de:Summe in Tsd. €;en:Total in € thousands;");
const backgroundColor = ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c", "#446073", "#f0906f", "#8ec2e5", "#5a6c8c", "#a6c485"];
Object.keys(states).forEach(state => {
	labels.push(state);
	arrData.push(states[state]);
});

// Chart.js configuration (details: https://chartjs.org)
const chartConfig = {
	title: context.getLocaleValue("de:Sales Pipeline;en:Sales Pipeline;"),
    // Chart.js chart type "bar"
    type: "bar",
	data: {
		labels,
		datasets: [{ data: arrData, backgroundColor }]
	},
	options: {
		metadata: {
			yUnit: context.getLocaleValue("de:Tsd. €;en:€ thousands;")
		},
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				callbacks: {
					label: (context) => `${context.formattedValue} ${context.chart.options.metadata.yUnit}`
				}
			}
		},
		scales: {
			y: {
				title: { text: scaleLabel, display: true }
			}
		}
	}
};

// Register the gadget action named "doTile"
// and link it to an action function.
// "doTile" is the required function name
// for using this gadget as a custom tile in the dashboard.
gAPI.registerGadgetAction("doTile", function doTile(/* gadgetContext */) {

    // Initialize a Chart-Gadget instance
    const gdgt = gAPI.getChartInstance();

	gdgt.setTitle(chartConfig.title);
	gdgt.setType(chartConfig.type);
	gdgt.setData(chartConfig.data);
	gdgt.setOptions(chartConfig.options);

    // Initialize a Settings-for-Gadget instance
	const settings = gAPI.getSettingsInstance();
	settings.setViewable(true);
	settings.setResizable(true);
	settings.setIconPath(gdgt.titleIcon || "");
	settings.setTitle(gdgt.title || "<empty></empty>");

    // add Settings-for-Gadget to Chart-Gadget
	gdgt.addSettings(settings);

	gdgt.setStyle("background", "#fff");
	gdgt.setStyle("box-sizing", "border-box");
	gdgt.setStyle("padding", "10px");

    // Return the Gadget instance WITHOUT calling the transfer() method
	return gdgt;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gAPI.transfer();
```

/**
 * Sample Dashboard Chart (for documentsOS with Chart.js 4.4.x )
 * This script returns a bar chart gadget for the dashboard.
 * Therefore, "doTile" is the required function name for registerGadgetAction().
 *
 * To use this gadget script as a custom tile in the dashboard,
 * the appropriate DLC and script properties must be set.
 */

const gAPI = require("gadgetAPI.module.gadgetAPI");
const fileType = "crmOpportunity";
const field = "crmStatus";
const fileResultset = context.folderFiles || new FileResultset(fileType);
const states = {};

// Initialize the states object
// crmStatus is an enumField with possible values:
// [Prospect, Presentation, Quote, Negotiation, Won, Lost]
context.getEnumValues(fileType, field).forEach(state => {
	states[context.getEnumErgValue(fileType, field, state)] = 0;
});

// Evaluate files and accumulate the states
let file, state;
for (file = fileResultset.first(); file; file = fileResultset.next()) {
	state = context.getEnumErgValue(fileType, field, file.crmStatus);
	states[state] += file.crmAmount / 1000;
}

// Prepare the values and labels for Chart.js
const labels = [];
const arrData = [];
const scaleLabel = context.getLocaleValue("de:Summe in Tsd. €;en:Total in € thousands;");
const backgroundColor = ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c", "#446073", "#f0906f", "#8ec2e5", "#5a6c8c", "#a6c485"];
Object.keys(states).forEach(state => {
	labels.push(state);
	arrData.push(states[state]);
});

// Chart.js configuration (details: https://chartjs.org)
const chartConfig = {
	title: context.getLocaleValue("de:Sales Pipeline;en:Sales Pipeline;"),
    // Chart.js chart type "bar"
    type: "bar",
	data: {
		labels,
		datasets: [{ data: arrData, backgroundColor }]
	},
	options: {
		metadata: {
			yUnit: context.getLocaleValue("de:Tsd. €;en:€ thousands;")
		},
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				callbacks: {
					label: (context) => `${context.formattedValue} ${context.chart.options.metadata.yUnit}`
				}
			}
		},
		scales: {
			y: {
				title: { text: scaleLabel, display: true }
			}
		}
	}
};

// Register the gadget action named "doTile"
// and link it to an action function.
// "doTile" is the required function name
// for using this gadget as a custom tile in the dashboard.
gAPI.registerGadgetAction("doTile", function doTile(/* gadgetContext */) {

    // Initialize a Chart-Gadget instance
    const gdgt = gAPI.getChartInstance();

	gdgt.setTitle(chartConfig.title);
	gdgt.setType(chartConfig.type);
	gdgt.setData(chartConfig.data);
	gdgt.setOptions(chartConfig.options);

    // Initialize a Settings-for-Gadget instance
	const settings = gAPI.getSettingsInstance();
	settings.setViewable(true);
	settings.setResizable(true);
	settings.setIconPath(gdgt.titleIcon || "");
	settings.setTitle(gdgt.title || "<empty></empty>");

    // add Settings-for-Gadget to Chart-Gadget
	gdgt.addSettings(settings);

	gdgt.setStyle("background", "#fff");
	gdgt.setStyle("box-sizing", "border-box");
	gdgt.setStyle("padding", "10px");

    // Return the Gadget instance WITHOUT calling the transfer() method
	return gdgt;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gAPI.transfer();
Download: [Gadget_opportunityStatsHTML.js](../assets/samples/Gadget_opportunityStatsHTML.js)

**Das Skript für DOCUMENTS 5 (Chart.js 2.9.4):**

Download: [Gadget_opportunityStatsHTML_D5.js](../assets/samples/Gadget_opportunityStatsHTML_D5.js)

Die Unterschiede in den Chart.js-Versionen sind in der [Chart-Gadget-Dokumentation](../gadget-types/diagrams.html) beschrieben.


## Links zu Dashboard-Dokumentationen

Die Konfiguration von Dashboards wird ausführlich in der DOPAK 2016 PowerPoint-Präsentation und der DASHBOARD-HOWTO-Dokumentation beschrieben.

[Dashboard & Gadgets (DOPAK 2016)](../../../../manuals/#documents_dopak_2016_dashboard_und_gadgets)
[DASHBOARD HOWTO (PDF)](../../../../manuals/#documents_how_to_dashboard)