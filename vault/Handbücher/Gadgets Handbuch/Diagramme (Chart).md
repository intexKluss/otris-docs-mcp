---
title: "Diagramme"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/diagrams.html"
---

# Diagramme

**Hinweis:**
Die **moderne Diagramm-Erstellung** mit Chart-Gadgets ab **documentsOS Version 6.3.0** ist in
[Charts / Diagramme](../gadget-types/charts.md) dokumentiert.

Die aktuell geöffnete Dokumentation beschreibt die Erstellung von Diagrammen in `DOCUMENTS 5` mit **Chart.js 2.9.4** sowie in `documentsOS` (vor Version 6.3.0) mit **Chart.js 4.x**; ergänzt um **Migrationshinweise** und eine Gegenüberstellung der **Unterschiede** zwischen Chart.js v2.9.4 und v4.x.


---

Diagramme können mit Hilfe des Chart-Objekts [[Gadget API/otris.gadget.gui.Chart]] erstellt werden.


## Wesentliche Merkmale

Ein Chart-Gadget wird durch drei Hauptattribute definiert: **type**, **data** und **config** (options).

- Mit chartGadget.setType(chartType) wird der Typ des Diagramms festgelegt.
Beispiele: bar, bubble, line, radar, etc.
- Mit chartGadget.setData(data) wird dem Chart-Gadget ein Datenobjekt für das Diagramm hinzugefügt.
Das Datenobjekt enthält die Beschriftungen der X-Achse, Datenreihen mit den Werten der Datenreihe und den Farben der Elemente (z.B. Balken, Punkte oder Linien, je nach Diagrammtyp).
- Mit chartGadget.setOptions(options) lassen sich zusätzliche Optionen für die Darstellung des Diagramms konfigurieren.
Beispiele: Chart-Titel, Legenden, Tooltip-Anpassungen, Achsenbeschriftungen, onClick-Option, etc..
- Mit chartGadget.addFullscreenButton(true) kann eine Schaltfläche für hinzugefügt werden, die das Diagramm Vollbildmodus anzeigt.

**WICHTIG:** In documentsOS ist standardmäßig eine aktuellere Version (4.4.x) von Chart.js implementiert als in DOCUMENTS 5 (2.9.4). Diese unterscheidet sich grundlegend in der Struktur des `options`-Attributs, z.B. durch die Einführung des plugins-Objekts.


## Chart.js Dokumentationen

Die vollständige Chart.js-Dokumentation steht versionsspezifisch online zur Verfügung: [chartjs.org](https://www.chartjs.org/).

- Chart.js 2.9.4 für DOCUMENTS 5 = chartjs.org/docs/2.9.4
- Chart.js 4.4.6 für documentsOS = chartjs.org/docs/4.4.6 (latest)


## Beispiel Balkendiagramm (minimal)

In diesem Beispiel wird eine minimale Konfiguration für **documentsOS** erläutert.
Es zeigt ein Balkendiagramm, das in der Abbildung über eine `Benutzerdefinierte Aktion` an einem Mappentyp aufgerufen wird. (siehe: [Als benutzerdefinierte Aktion](../integration/integration-filetype.html#als-benutzerdefinierte-aktion-an-einer-mappe))


![Balkendiagramm mit minimaler Beispielkonfiguration](../assets/img/integration/relations_chart_simple.png)

Abb. 124 - Balkendiagramm mit minimaler Beispielkonfiguration

Das Balkendiagramm wird mit einem Chart-Gadget vom Typ `bar` konfiguriert.
Das `data`-Objekt enthält:

- Eine Datenreihe (data.datasets[0].data) mit drei Werten.
- Individuelle Farben für die Balken (data.datasets[0].backgroundColor).
- Beschriftungen der X-Achse (data.labels).

Optional (`options`):

- Automatische Anpassung der Diagrammabmessungen an den verfügbaren Platz (options.responsive).
- Hinzufügen eines Diagrammtitels (options.plugins.title).
- Beschriftung der Y-Achse (options.scales.y.title).

Die Konfiguration wird der Gadget-Instanz mithilfe der Settermethoden (`setType`, `setData`, `setOptions`) hinzugefügt.

**Das Skript für documentsOS (Chart.js 4.4.x):**


```javascript
/**
 * Minimal Bar-Chart Gadget for documentsOS using Chart.js 4.4.x
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { "gadgetScript": "GadgetSample_ChartGadget_simple", "gadgetAction": "showChart" }
 */

// Enable the required modules
context.enableModules();

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action
gadgetAPI.registerGadgetAction("showChart", function () {

    // Initialize the Chart Gadget
    const chartGadget = gadgetAPI.getChartInstance();

    // Minimal Chart Configuration
    const chartConfig = {
        type: "bar", // Chart type
        data: {
            labels: ["Label A", "Label B", "Label C"], // X-Axis Labels
            datasets: [{
                data: [10, 20, 30], // Example data
                backgroundColor: ["red", "green", "blue"] // Data color
            }]
        },
        options: {
            responsive: true, // Enables dynamic resizing of the chart
            plugins: {
                title: { display: true, text: "Chart title" },
                legend: { display: false } // true allows further customization
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Y-Axis Label"
                    }
                }
            }
        }
    };

    // Apply Configuration to the Chart
    chartGadget.setType(chartConfig.type);
    chartGadget.setData(chartConfig.data);
    chartGadget.setOptions(chartConfig.options);

    // Return the configured Gadget
    return chartGadget;
});

// The .transfer() method serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Minimal Bar-Chart Gadget for documentsOS using Chart.js 4.4.x
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { "gadgetScript": "GadgetSample_ChartGadget_simple", "gadgetAction": "showChart" }
 */

// Enable the required modules
context.enableModules();

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action
gadgetAPI.registerGadgetAction("showChart", function () {

    // Initialize the Chart Gadget
    const chartGadget = gadgetAPI.getChartInstance();

    // Minimal Chart Configuration
    const chartConfig = {
        type: "bar", // Chart type
        data: {
            labels: ["Label A", "Label B", "Label C"], // X-Axis Labels
            datasets: [{
                data: [10, 20, 30], // Example data
                backgroundColor: ["red", "green", "blue"] // Data color
            }]
        },
        options: {
            responsive: true, // Enables dynamic resizing of the chart
            plugins: {
                title: { display: true, text: "Chart title" },
                legend: { display: false } // true allows further customization
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Y-Axis Label"
                    }
                }
            }
        }
    };

    // Apply Configuration to the Chart
    chartGadget.setType(chartConfig.type);
    chartGadget.setData(chartConfig.data);
    chartGadget.setOptions(chartConfig.options);

    // Return the configured Gadget
    return chartGadget;
});

// The .transfer() method serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();
Download: [GadgetSample_ChartGadget_simple.js](../assets/samples/GadgetSample_ChartGadget_simple.js)

**Das Skript für DOCUMENTS 5 (Chart.js 2.9.4):**

Download: [GadgetSample_ChartGadget_simple_D5.js](../assets/samples/GadgetSample_ChartGadget_simple_D5.js)


## Beispiel Kreisdiagramm

Das folgende Beispiel zeigt, wie ein einfaches Kreisdiagramm mit einem Chart-Gadget erstellt werden kann.


![Kreisdiagramm-Beispiel](../assets/img/integration/relation_chart_example.png)

Abb. 125 - Kreisdiagramm-Beispiel

Das Gadget wurde in der Abbildung in einem öffentlichen Ordner konfiguriert. (siehe: [An öffentlichen Ordnern](../integration/integration-public-folder.html#gadget-als-ordner))
Die Beschriftungen der X-Achse und die Daten werden dynamisch über Getter bereitgestellt. Titel und Beschriftungen sind i18n-lokalisiert. `hoverBackgroundColor` definiert eine spezifische Farbänderung beim Mouseover. (In Chart.js 4.4.x sind Farbänderungen und die Werteanzeige beim Mouseover standardmäßig integriert.)

Zusätzlich ist das Gadget mithilfe von `.setStyle()` um HTML-Attribute erweitert. Mit `.setTitle()` wird dem Dialogfenster des Gadgets ein Titel hinzugefügt.

**Das Skript für documentsOS (Chart.js 4.4.x):**


```javascript
/**
 * Sample Gadget (documentsOS with Chart.js 4.4.6)
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript: 'GadgetSample_Chart_Gadget', gadgetAction: 'showChart' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS

// Required: Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "showChart"
gadgetAPI.registerGadgetAction("showChart", function () {

  // Initialize a Chart-Gadget instance
  const chartGadget = gadgetAPI.getChartInstance();

  // Set the chart type (e.g., pie chart)
  const chartType = "pie";
  chartGadget.setType(chartType);

  // Fetch dynamic labels and data
  const data = {
    labels: getLabels(),
    datasets: [{
      data: getData(),
      backgroundColor: ["#2ecc71", "#3498db", "#e74c3c"],
      hoverBackgroundColor: ["#27ae60", "#2980b9", "#c0392b"]
    }]
  };
  chartGadget.setData(data);

  // Define chart options
  const options = {
    plugins: {
      title: { // Chart title
        display: true,
        text: context.getLocaleValue("de:Kategorien;en:Categories")
      }
    }
  };
  chartGadget.setOptions(options);

  // Set the gadget title (used as the title in the dialog window)
  chartGadget.setTitle(context.getLocaleValue("de:Beispiel-Diagramm;en:Sample Chart"));

  // .setStyle(name, value) -> Set attributes in the HTML container
  chartGadget.setStyle("padding", "10px 10px 20px 10px");
  chartGadget.setStyle("box-sizing", "border-box");
  chartGadget.setStyle("background-color", "skyblue");
  chartGadget.addFullscreenButton(true);

  // Return the Gadget instance WITHOUT calling the transfer() method
  return chartGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

/**
 * Fetch dynamic labels for the chart
 * Example: Localized category names
 * @returns {string[]} Array of labels
 */
function getLabels() {
  return [
      context.getLocaleValue("de:Kategorie A;en:Category A"),
      context.getLocaleValue("de:Kategorie B;en:Category B"),
      context.getLocaleValue("de:Kategorie C;en:Category C")
  ];
}

/**
* Fetch dynamic data for the chart
* Example: Data from a backend or calculation
* @returns {number[]} Array of data values
*/
function getData() {
  // Example: Mock data
  return [45, 25, 30];
}
```

/**
 * Sample Gadget (documentsOS with Chart.js 4.4.6)
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript: 'GadgetSample_Chart_Gadget', gadgetAction: 'showChart' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS

// Required: Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "showChart"
gadgetAPI.registerGadgetAction("showChart", function () {

  // Initialize a Chart-Gadget instance
  const chartGadget = gadgetAPI.getChartInstance();

  // Set the chart type (e.g., pie chart)
  const chartType = "pie";
  chartGadget.setType(chartType);

  // Fetch dynamic labels and data
  const data = {
    labels: getLabels(),
    datasets: [{
      data: getData(),
      backgroundColor: ["#2ecc71", "#3498db", "#e74c3c"],
      hoverBackgroundColor: ["#27ae60", "#2980b9", "#c0392b"]
    }]
  };
  chartGadget.setData(data);

  // Define chart options
  const options = {
    plugins: {
      title: { // Chart title
        display: true,
        text: context.getLocaleValue("de:Kategorien;en:Categories")
      }
    }
  };
  chartGadget.setOptions(options);

  // Set the gadget title (used as the title in the dialog window)
  chartGadget.setTitle(context.getLocaleValue("de:Beispiel-Diagramm;en:Sample Chart"));

  // .setStyle(name, value) -> Set attributes in the HTML container
  chartGadget.setStyle("padding", "10px 10px 20px 10px");
  chartGadget.setStyle("box-sizing", "border-box");
  chartGadget.setStyle("background-color", "skyblue");
  chartGadget.addFullscreenButton(true);

  // Return the Gadget instance WITHOUT calling the transfer() method
  return chartGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

/**
 * Fetch dynamic labels for the chart
 * Example: Localized category names
 * @returns {string[]} Array of labels
 */
function getLabels() {
  return [
      context.getLocaleValue("de:Kategorie A;en:Category A"),
      context.getLocaleValue("de:Kategorie B;en:Category B"),
      context.getLocaleValue("de:Kategorie C;en:Category C")
  ];
}

/**
* Fetch dynamic data for the chart
* Example: Data from a backend or calculation
* @returns {number[]} Array of data values
*/
function getData() {
  // Example: Mock data
  return [45, 25, 30];
}
Download: [GadgetSample_Chart_Gadget.js](../assets/samples/GadgetSample_Chart_Gadget.js)

**Das Skript für DOCUMENTS 5 (Chart.js 2.9.4):**

Download: [GadgetSample_Chart_Gadget_D5.js](../assets/samples/GadgetSample_Chart_Gadget_D5.js)


## Beispiel: Anzahl Projekte als Pie-Chart

Dieses Gadget-Beispiel wurde für den **relations Demo-Mandanten** entworfen. Es wird in der Outbar **Sales** dem Ordner **Verkaufsprojekte** hinzugefügt und als **Action** der anzuzeigenden HitresultList registriert. Das Gadget kann dann über den entsprechenden Eintrag in der Dropdown-Liste `Aktionen` ausgeführt werden.

Das Beispiel zeigt ein Kreisdiagramm, das die Anzahl der Projekte nach Verkaufsphasen aggregiert und darstellt. Die einzelnen Phasen können über die Legende aus- und eingeblendet werden.


### Eigenschaften des Pie-Beispiels

- Getter für Daten und Labels:
Die X-Achsenbeschriftung wird über getLabels() lokalisiert und basiert auf den ENUM-Values der Verkaufsphasen in einer definierten Reihenfolge.
Die Anzahl der Projekte wird mit getData() aus einem FileResultset aggregiert.
- Konfiguration der Legende:
options.plugins.legend.display: true macht die Legende sichtbar, die im Kreisdiagramm interaktiv ist.
- Styling und Titel:
Das Gadget wird zusätzlich mit .setTitle() und .setStyle() konfiguriert.


![Anzahl nach Projektphase als Pie-Chart](../assets/img/integration/relations_sales_piechart.png)

Abb. 126 - Anzahl nach Projektphase als Pie-Chart


### Einbindung als hitresultList.addAction() (getPieChart)

Mit der Eigenschaft `runscript` am Ordner `crmOpportunities` (Verkaufsprojekte) wird die Anzeige der Mappen mit dem Skript `crmOpportunity_hitresultList` konfiguriert.
Hierfür wird mit `addAction()` eine Funktion als `clientscript` definiert, die mit `documentsContext.callGadget` die Gadget-Konfiguration aufruft.

**Beispiel:**


```javascript
hitresultList.addAction({
    name: "getPieChart",
    label: context.getLocaleValue("de:Auswertung (Pie-Chart);en:Report (Pie-Chart)"),
    imageFile: "mdi:mdi-chart-pie;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Pie-Chart mit Darstellung Anzahl je Vertriebsphase;en:Opens a pie chart with representation number per sales phase"),
    clientScript: function () {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getPieChart_dOS",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    }
});
```

hitresultList.addAction({
    name: "getPieChart",
    label: context.getLocaleValue("de:Auswertung (Pie-Chart);en:Report (Pie-Chart)"),
    imageFile: "mdi:mdi-chart-pie;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Pie-Chart mit Darstellung Anzahl je Vertriebsphase;en:Opens a pie chart with representation number per sales phase"),
    clientScript: function () {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getPieChart_dOS",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    }
});
### Das Pie-Gadget-Skript

Das folgende Skript konfiguriert ein Pie-Chart-Gadget, das die Anzahl der Projekte nach Vertriebsphasen darstellt. Die Beschriftungen und die Daten werden über separate Getter (getLabels und getData) bereitgestellt.

**Das Skript für documentsOS (Chart.js 4.4.x):**


```javascript
/**
 * Sample Pie-Chart Gadget for documentsOS using Chart.js 4.4.x
 * Configured for the "crmOpportunity" folder in the relations demo principal.
 * Registered as a list action in the runscript "crmOpportunity_hitresultList".
 * Displays Number of projects per sales stage in a pie chart.
 */

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Define the order of sales stages (ENUM keys from the "crmStatus" field)
const orderedStates = ["Prospect", "Presentation", "Quote", "Negotiation", "Won", "Lost"];

// Register the gadget action
gadgetAPI.registerGadgetAction("showChart", function () {
    // Initialize the chart gadget
    const chartGadget = gadgetAPI.getChartInstance();

    // Define the chart configuration
    const chartConfig = {
        type: "pie",
        data: {
            labels: getLabels(),
            datasets: [{
                data: getData(),
                // fallback if backgroundColor < data, color values will repeat
                backgroundColor: ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c"]
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: context.getLocaleValue("de:Anzahl Projekte je Vertriebsphase;en:Number of projects per sales stage")
                },
                legend: {
                    display: true
                }
            }
        }
    };

    // Configure the chart
    chartGadget.setType(chartConfig.type);
    chartGadget.setData(chartConfig.data);
    chartGadget.setOptions(chartConfig.options);

    // Configure the Gadget
    chartGadget.setTitle(context.getLocaleValue("de:Verkaufsprojekte;en:Opportunities"));
    chartGadget.setStyle("padding", "10px 10px 20px 10px");
    chartGadget.setStyle("box-sizing", "border-box");
    chartGadget.addFullscreenButton(true);

    // Return the configured gadget instance
    return chartGadget;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();

/**
 * Retrieves localized labels for the chart
 * @returns {string[]} Array of localized labels
 */
function getLabels() {
    const fileType = "crmOpportunity";
    const field = "crmStatus";

    // Map the technical keys to localized labels
    return orderedStates.map((techEnumValue) =>
        context.getEnumErgValue(fileType, field, techEnumValue)
    );
}

/**
 * Retrieves sales data aggregated by sales stage
 * @returns {number[]} Array of data values
 */
function getData() {
    const states = {};

    const frs = new FileResultset("crmOpportunity");
    for (let file = frs.first(); file; file = frs.next()) {
        const status = file.crmStatus;

        // Aggregate sales amounts by status
        states[status] = (states[status] || 0) + 1; // Increment the count for each status
    }

    // Return values matching the order of `orderedStates`
    return orderedStates.map(state => states[state] || 0);
}
```

/**
 * Sample Pie-Chart Gadget for documentsOS using Chart.js 4.4.x
 * Configured for the "crmOpportunity" folder in the relations demo principal.
 * Registered as a list action in the runscript "crmOpportunity_hitresultList".
 * Displays Number of projects per sales stage in a pie chart.
 */

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Define the order of sales stages (ENUM keys from the "crmStatus" field)
const orderedStates = ["Prospect", "Presentation", "Quote", "Negotiation", "Won", "Lost"];

// Register the gadget action
gadgetAPI.registerGadgetAction("showChart", function () {
    // Initialize the chart gadget
    const chartGadget = gadgetAPI.getChartInstance();

    // Define the chart configuration
    const chartConfig = {
        type: "pie",
        data: {
            labels: getLabels(),
            datasets: [{
                data: getData(),
                // fallback if backgroundColor < data, color values will repeat
                backgroundColor: ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c"]
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: context.getLocaleValue("de:Anzahl Projekte je Vertriebsphase;en:Number of projects per sales stage")
                },
                legend: {
                    display: true
                }
            }
        }
    };

    // Configure the chart
    chartGadget.setType(chartConfig.type);
    chartGadget.setData(chartConfig.data);
    chartGadget.setOptions(chartConfig.options);

    // Configure the Gadget
    chartGadget.setTitle(context.getLocaleValue("de:Verkaufsprojekte;en:Opportunities"));
    chartGadget.setStyle("padding", "10px 10px 20px 10px");
    chartGadget.setStyle("box-sizing", "border-box");
    chartGadget.addFullscreenButton(true);

    // Return the configured gadget instance
    return chartGadget;
});

// Serialize and return the gadget instance
context.returnValue = gadgetAPI.transfer();

/**
 * Retrieves localized labels for the chart
 * @returns {string[]} Array of localized labels
 */
function getLabels() {
    const fileType = "crmOpportunity";
    const field = "crmStatus";

    // Map the technical keys to localized labels
    return orderedStates.map((techEnumValue) =>
        context.getEnumErgValue(fileType, field, techEnumValue)
    );
}

/**
 * Retrieves sales data aggregated by sales stage
 * @returns {number[]} Array of data values
 */
function getData() {
    const states = {};

    const frs = new FileResultset("crmOpportunity");
    for (let file = frs.first(); file; file = frs.next()) {
        const status = file.crmStatus;

        // Aggregate sales amounts by status
        states[status] = (states[status] || 0) + 1; // Increment the count for each status
    }

    // Return values matching the order of `orderedStates`
    return orderedStates.map(state => states[state] || 0);
}
Download: [Gadget_crmOpportunity_getPieChart_dOS.js](../assets/samples/Gadget_crmOpportunity_getPieChart_dOS.js)

**Das Skript für DOCUMENTS 5 (Chart.js 2.9.4):**

Download: [Gadget_crmOpportunity_getPieChart_D5.js](../assets/samples/Gadget_crmOpportunity_getPieChart_D5.js)


## Beispiel: Summen nach Projektphase als Bar-Chart

Dieses Gadget-Beispiel wurde für den **relations Demo-Mandanten** entworfen. Es wird in der Outbar **Sales** dem Ordner **Verkaufsprojekte** hinzugefügt und als **Action** der anzuzeigenden HitresultList registriert. Das Gadget kann dann über den entsprechenden Eintrag in der Dropdown-Liste `Aktionen` ausgeführt werden.

Das Beispiel zeigt ein Balkendiagramm, das die Summen der Projekte nach Verkaufsphasen aggregiert und darstellt.


### Eigenschaften des Bar-Beispiels

- Getter für Daten und Labels: Die X-Achsenbeschriftung wird über getLabels() lokalisiert und basiert auf den ENUM-Values der Verkaufsphasen in einer definierten Reihenfolge.
Die Summen werden mit getData() aus einem FileResultset aggregiert.
- Konfiguration des Tooltips: Kontextdaten wie Einheit und Sprache werden in options.metadata gespeichert.
Die Werte im Tooltip werden lokalisiert und mit einer Nachkommastelle formatiert.
- Styling und Titel: Das Gadget wird zusätzlich mit .setTitle() und .setStyle() konfiguriert.


![Summen nach Projektphase als Bar-Chart](../assets/img/integration/relations_sales_barchart.png)

Abb. 127 - Summen nach Projektphase als Bar-Chart


### Einbindung als hitresultList.addAction() (getBarChart)

Mit der Eigenschaft `runscript` am Ordner `crmOpportunities` (Verkaufsprojekte) wird die Anzeige der Mappen mit dem Skript `crmOpportunity_hitresultList` konfiguriert.
Hierfür wird mit `addAction()` eine Funktion als `clientscript` definiert, die mit `documentsContext.callGadget` die Gadget-Konfiguration aufruft.

**Beispiel**:


```javascript
hitresultList.addAction({
    name: "getBarChart",
    label: context.getLocaleValue("de:Auswertung (Bar-Chart);en:Report (Bar-Chart)"),
    imageFile: "mdi:mdi-chart-bar;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Bar-Chart mit Darstellung Betrag je Vertriebsphase;en:Opens a bar chart with representation amount per sales phase"),
    clientScript: function () {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getBarChart_dOS",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    }
});
```

hitresultList.addAction({
    name: "getBarChart",
    label: context.getLocaleValue("de:Auswertung (Bar-Chart);en:Report (Bar-Chart)"),
    imageFile: "mdi:mdi-chart-bar;color:white;background-color:#ea6a21",
    alwaysShowLabel: true,
    type: "list",
    tooltip: context.getLocaleValue("de:Öffnet ein Bar-Chart mit Darstellung Betrag je Vertriebsphase;en:Opens a bar chart with representation amount per sales phase"),
    clientScript: function () {
        documentsContext.callGadget({
            gadgetScript: "Gadget_crmOpportunity_getBarChart_dOS",
            gadgetAction: "showChart",
            gadgetWidth: 500,
            gadgetHeight: 600,
        });
    }
});
### Das Bar-Gadget-Skript

Das folgende Skript konfiguriert ein Bar-Chart-Gadget, das die Summen der Projektbeträge nach Vertriebsphasen darstellt. Die Beschriftungen und die Daten werden über separate Getter (`getLabels` und `getData`) bereitgestellt.

**Das Skript für documentsOS (Chart.js 4.4.x):**


```javascript
/**
 * Bar-Chart Gadget for documentsOS using Chart.js 4.4.x
 * Displays sales stage values as a bar chart.
 * Configured for the "crmOpportunity" folder in the relations demo principal.
 * Registered as a list action in the runscript "crmOpportunity_hitresultList".
 */

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Define the order of sales stages (ENUM keys from the "crmStatus" field)
const orderedStates = ["Prospect", "Presentation", "Quote", "Negotiation", "Won", "Lost"];

// Register a gadget action named "showChart"
gadgetAPI.registerGadgetAction("showChart", function () {

    // Initialize a Chart-Gadget instance
    const chartGadget = gadgetAPI.getChartInstance();

    // Define the chart configuration
    const chartConfig = {
        type: "bar",
        data: {
            labels: getLabels(),
            datasets: [{
                data: getData(),
                // fallback if backgroundColor[] < data[], color values will repeat
                backgroundColor: ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c"]
            }]
        },
        options: {
            metadata: {
                yUnit: context.getLocaleValue("de:Tsd. €;en:€ thousands;"),
                lang: context.getClientLang()
            },
            maintainAspectRatio: false, // Disable aspect ratio preservation
            plugins: {
                title: {
                    display: true,
                    text: context.getLocaleValue("de:Sales Pipeline;en:Sales Pipeline")
                },
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const value = Number(context.raw) || 0; // Ensure value is a number or default to 0

                            // Format numbers with locale-specific thousands and
                            // decimal separators based on client language
                            const clientLang = context.chart.options.metadata?.lang || 'en';
                            const formattedValue = new Intl.NumberFormat(clientLang, {
                                minimumFractionDigits: 1,
                                maximumFractionDigits: 1
                            }).format(value);
                            return `${formattedValue} ${context.chart.options.metadata.yUnit}`;
                        }
                    }
                }
            },
            scales: {
                y: { // Label for the Y-axis
                    title: {
                        text: context.getLocaleValue("de:Summe in Tsd. €;en:Total in € thousands;"),
                        display: true
                    }
                }
            }
        }
    };

    // Configure the Chart
    chartGadget.setType(chartConfig.type);
    chartGadget.setData(chartConfig.data);
    chartGadget.setOptions(chartConfig.options);

    // Configure the Gadget
    chartGadget.setTitle(context.getLocaleValue("de:Verkaufsprojekte;en:Opportunities"));
    chartGadget.setStyle("padding", "10px 10px 20px 10px");
    chartGadget.setStyle("box-sizing", "border-box");
    chartGadget.addFullscreenButton(true);

    // Return the configured Gadget instance
    return chartGadget;
});

// The .transfer() method serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

/**
 * Retrieves localized labels for the chart
 * @returns {string[]} Array of localized labels
 */
function getLabels() {
    const fileType = "crmOpportunity";
    const field = "crmStatus";

    // Map the technical keys to localized labels
    return orderedStates.map((techEnumValue) =>
        context.getEnumErgValue(fileType, field, techEnumValue)
    );
}

/**
 * Retrieves sales data aggregated by sales stage
 * @returns {number[]} Array of aggregated values
 */
function getData() {
    const states = {};

    const frs = new FileResultset("crmOpportunity");
    for (let file = frs.first(); file; file = frs.next()) {
        const status = file.crmStatus;

        // Aggregate sales amounts by status
        states[status] = (states[status] || 0) + file.crmAmount / 1000;
    }

    // Return values matching the order of states, defaulting to 0 for missing stages
    return orderedStates.map(state => states[state] || 0);
}
```

/**
 * Bar-Chart Gadget for documentsOS using Chart.js 4.4.x
 * Displays sales stage values as a bar chart.
 * Configured for the "crmOpportunity" folder in the relations demo principal.
 * Registered as a list action in the runscript "crmOpportunity_hitresultList".
 */

// Import the gadgetAPI module
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Define the order of sales stages (ENUM keys from the "crmStatus" field)
const orderedStates = ["Prospect", "Presentation", "Quote", "Negotiation", "Won", "Lost"];

// Register a gadget action named "showChart"
gadgetAPI.registerGadgetAction("showChart", function () {

    // Initialize a Chart-Gadget instance
    const chartGadget = gadgetAPI.getChartInstance();

    // Define the chart configuration
    const chartConfig = {
        type: "bar",
        data: {
            labels: getLabels(),
            datasets: [{
                data: getData(),
                // fallback if backgroundColor[] < data[], color values will repeat
                backgroundColor: ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c"]
            }]
        },
        options: {
            metadata: {
                yUnit: context.getLocaleValue("de:Tsd. €;en:€ thousands;"),
                lang: context.getClientLang()
            },
            maintainAspectRatio: false, // Disable aspect ratio preservation
            plugins: {
                title: {
                    display: true,
                    text: context.getLocaleValue("de:Sales Pipeline;en:Sales Pipeline")
                },
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const value = Number(context.raw) || 0; // Ensure value is a number or default to 0

                            // Format numbers with locale-specific thousands and
                            // decimal separators based on client language
                            const clientLang = context.chart.options.metadata?.lang || 'en';
                            const formattedValue = new Intl.NumberFormat(clientLang, {
                                minimumFractionDigits: 1,
                                maximumFractionDigits: 1
                            }).format(value);
                            return `${formattedValue} ${context.chart.options.metadata.yUnit}`;
                        }
                    }
                }
            },
            scales: {
                y: { // Label for the Y-axis
                    title: {
                        text: context.getLocaleValue("de:Summe in Tsd. €;en:Total in € thousands;"),
                        display: true
                    }
                }
            }
        }
    };

    // Configure the Chart
    chartGadget.setType(chartConfig.type);
    chartGadget.setData(chartConfig.data);
    chartGadget.setOptions(chartConfig.options);

    // Configure the Gadget
    chartGadget.setTitle(context.getLocaleValue("de:Verkaufsprojekte;en:Opportunities"));
    chartGadget.setStyle("padding", "10px 10px 20px 10px");
    chartGadget.setStyle("box-sizing", "border-box");
    chartGadget.addFullscreenButton(true);

    // Return the configured Gadget instance
    return chartGadget;
});

// The .transfer() method serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

/**
 * Retrieves localized labels for the chart
 * @returns {string[]} Array of localized labels
 */
function getLabels() {
    const fileType = "crmOpportunity";
    const field = "crmStatus";

    // Map the technical keys to localized labels
    return orderedStates.map((techEnumValue) =>
        context.getEnumErgValue(fileType, field, techEnumValue)
    );
}

/**
 * Retrieves sales data aggregated by sales stage
 * @returns {number[]} Array of aggregated values
 */
function getData() {
    const states = {};

    const frs = new FileResultset("crmOpportunity");
    for (let file = frs.first(); file; file = frs.next()) {
        const status = file.crmStatus;

        // Aggregate sales amounts by status
        states[status] = (states[status] || 0) + file.crmAmount / 1000;
    }

    // Return values matching the order of states, defaulting to 0 for missing stages
    return orderedStates.map(state => states[state] || 0);
}
Download: [Gadget_crmOpportunity_getBarChart_dOS.js](../assets/samples/Gadget_crmOpportunity_getBarChart_dOS.js)

**Das Skript für DOCUMENTS 5 (Chart.js 2.9.4):**

Download: [Gadget_crmOpportunity_getBarChart_D5.js](../assets/samples/Gadget_crmOpportunity_getBarChart_D5.js)


## Weitere Beispiele

Weitere Beispiele zur Verwendung von Chart-Gadgets finden sich in der Dokumentation:

- Einbindung von Gadgets in Dashboards - Beispiel Sales Pipeline
- Layout-Gadget - Weiteres Beispiel: relations Mitarbeiter


## Unterschiede Chart.js Versionen

Ein Migration-HowTo mit grundlegenden Informationen befindet sich im [ChartJS 4 Upgrade Guide](../../../../howto/common/chartjs-upgrade-guide.html)

- WICHTIG - Unterschied zwischen DOCUMENTS 5 und documentsOS: Ab Chart.js Version 3.x wurden einige Optionen in ein plugins-Objekt verschachtelt, um eine modularere Struktur zu schaffen.
In documentsOS werden Einstellungen wie title, legend und tooltip jetzt unter options.plugins definiert, z. B. options.plugins.title.
In DOCUMENTS 5 werden diese Optionen direkt in options platziert, ohne das plugins-Objekt.


### Kurzübersicht wichtigste Unterschiede

| Funktion | Chart.js 2.9.4 (DOCUMENTS 5) | Chart.js 4.4.1 (documentsOS) |
| --- | --- | --- |
| Interaktionen (Hover) | options.hover.mode = 'point' | options.interaction.mode = 'point' |
| Plugins | Direkt unter options | Unter options.plugins |
| - Tooltips | options.tooltips.enabled = true | options.plugins.tooltip.enabled = true |
| - Legende | options.legend.display = true | options.plugins.legend.display = true |
| - Titel | options.title.display = true | options.plugins.title.display = true |
| Skalen (Axes) | options.scales.xAxes, options.scales.yAxes | options.scales.x, options.scales.y |
| Logarithmische Achse | Unterstützt, aber mit anderen Einstellungen | Verbesserte Unterstützung für logarithmic-Achsen |
| onClick-Handler | onClick: (event, activeElements) => {} | onClick: (e) => {} |
| Animationen | options.animation | options.animation bleibt, aber mehr Kontrolle durch Plugins und Events |
| Datenreihen (Datasets) | Stile wie backgroundColor, borderColor direkt in datasets | Zusätzliche Optionen wie animations und stacked verfügbar |
| Padding (Abstände) | options.layout.padding für einfache Abstände | Mehr Kontrolle durch Plugins und zusätzliche Layout-Optionen |
| Standardwerte (Defaults) | Globale Einstellungen unter Chart.defaults | Modularisierte Defaults für Diagrammtypen (Chart.defaults.bar) |
| Responsivität | options.responsive = true | Zusätzliche Kontrolle durch maintainAspectRatio und Layout-Optionen |
| Tooltip-Anpassungen | options.tooltips.callbacks für benutzerdefinierte Inhalte | options.plugins.tooltip.callbacks mit erweiterten Optionen (Inhalte, Styling) |


### Anpassungen für die Migration von Chart.js 2.9.4 auf 4.4.1

| Feature | Chart.js 2.9.4 | Chart.js 4.4.1 | Änderung |
| --- | --- | --- | --- |
| Achsen (scales) | xAxes, yAxes | scales.x, scales.y | xAxes → x, yAxes → y; Arrays werden zu Objekten |
| Gitternetzlinien | gridLines | grid | gridLines → grid |
| Versetzte Linien | offsetGridLines: true | offset: true | offsetGridLines → offset |
| Titel | title | plugins.title | Verschoben nach plugins: title → plugins.title |
| Tooltips | tooltips | plugins.tooltip | tooltips → plugins.tooltip |
| Legende | legend | plugins.legend | legend → plugins.legend |
| Legend-Handler | legend.onClick(event, legendItem) | plugins.legend.onClick(event, legendItem, legend) | Verschoben nach plugins: Zusätzlicher Parameter legend |
| Hover-Interaktionen | hover.mode | interaction.mode | hover → interaction |
| Intersektion | hover.intersect | interaction.intersect | hover.intersect → interaction.intersect |
| onClick für Diagramm | Direkt unter options.onClick | Direkt unter options.onClick | Syntaxänderung: activeElements → chart.getElementsAtEventForMode oder manuelle Berechnung der Koordinaten |
| Berechnung von Daten | activeElements[0]._index | activeElements[0].index | ._index → .index; Struktur von activeElements bleibt, aber Zugriffsmethode leicht geändert |


### Code-Unterschiede (Linien-Diagramm): Chart.js in DOCUMENTS 5 und documentsOS

Die Attribute **type** und **data** bleiben in ihrer Syntax **versionsunabhängig**.
Das Attribut **options** ist **versionsspezifisch** und unterscheidet sich zwischen Chart.js 2.9.4 (DOCUMENTS 5) und Chart.js 4.4.x (documentsOS).


```javascript
/**
 * @fileoverview
 * This file documents the similarities and differences between
 * Chart.js 2.9.4 (used in DOCUMENTS 5) and Chart.js 4.4.x (used in documentsOS)
 * using the example of a line chart.
 *
 * - commonChartConfig: Defines a base configuration that is consistent across both versions.
 * - chart_config_D5: Highlights Chart.js 2.9.4-specific settings and syntax.
 * - chart_config_dOS: Highlights Chart.js 4.4.x-specific settings and syntax.
 */

// Common chart configuration (unchanged between versions)
const commonChartConfig = {
    type: 'line', // Line chart type
    data: {
        labels: ['January', 'February', 'March', 'April'], // X-axis labels
        datasets: [{
            label: 'Sample Dataset', // Dataset label displayed in the legend
            data: [10, 20, 30, 40], // Data points
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Data point color
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color below the line (if fill: true)
            fill: false // Disable fill by default (line-only visualization)
        }]
    }
};

// Chart.js 2.9.4-specific configuration
const chart_config_D5 = {
    ...commonChartConfig,
    options: {
        title: {
            display: true,
            text: 'Sample Chart'
        },
        legend: {
            display: true,
            position: 'top',
            onClick: (event, legendItem) => {
                documentsContext.openMessageDialog('Legend Click', 'You clicked on: ' + legendItem.text);
            }
        },
        tooltips: {
            enabled: true
        },
        hover: { // Attribute name in 2.9.4
            mode: 'nearest', // Highlight nearest data point
            intersect: false // Allow hover without intersecting a point
        },
        onClick: (event, activeElements) => {
            // Handle chart clicks using activeElements array
            if (activeElements.length > 0) {
                const clickedIndex = activeElements[0]._index;
                documentsContext.openMessageDialog('Chart Click', 'You clicked on index: ' + clickedIndex);
            } else {
                documentsContext.openMessageDialog('Chart Click', 'No element was clicked.');
            }
        },
        scales: { // Axes defined as arrays in 2.9.4
            xAxes: [{
                gridLines: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `X: ${value}`
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `Y: ${value}`
                }
            }]
        }
    }
};

// Chart.js 4.4.x-specific configuration
const chart_config_dOS = {
    ...commonChartConfig,
    options: {
        plugins: { // Moved into plugins in 4.x
            title: { // Now under plugins
                display: true,
                text: 'Sample Chart'
            },
            legend: { // Now under plugins
                display: true,
                position: 'top',
                onClick: (event, legendItem, legend) => { // Additional legend parameter in 4.x
                    documentsContext.openMessageDialog('Legend Click', 'You clicked on: ' + legendItem.text);
                }
            },
            tooltip: { // Now under plugins
                enabled: true
            }
        },
        interaction: { // Replaces hover, manages all interactions
            mode: 'nearest',
            intersect: false
        },
        onClick: (event, activeElements, chart) => {
            const clickedElement = activeElements[0]; // Access the first clicked element
            if (clickedElement) {
                const elIndex = clickedElement.index; // Index of the clicked element
                const dataset = chart.config.data.datasets[clickedElement.datasetIndex]; // Corresponding dataset

                documentsContext.openMessageDialog(
                    'Chart Click',
                    'You clicked on index: ' + elIndex + '\nValue: ' + dataset.data[elIndex]
                );
            } else {
                documentsContext.openMessageDialog('Chart Click', 'No element was clicked.');
            }
        },
        scales: { // Direct x and y objects, no arrays
            x: { // x replaces xAxes[]
                grid: { // grid replaces gridLines
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `X: ${value}`
                }
            },
            y: { // y replaces yAxes[]
                grid: { // grid replaces gridLines
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `Y: ${value}`
                }
            }
        }
    }
};
```

/**
 * @fileoverview
 * This file documents the similarities and differences between
 * Chart.js 2.9.4 (used in DOCUMENTS 5) and Chart.js 4.4.x (used in documentsOS)
 * using the example of a line chart.
 *
 * - commonChartConfig: Defines a base configuration that is consistent across both versions.
 * - chart_config_D5: Highlights Chart.js 2.9.4-specific settings and syntax.
 * - chart_config_dOS: Highlights Chart.js 4.4.x-specific settings and syntax.
 */

// Common chart configuration (unchanged between versions)
const commonChartConfig = {
    type: 'line', // Line chart type
    data: {
        labels: ['January', 'February', 'March', 'April'], // X-axis labels
        datasets: [{
            label: 'Sample Dataset', // Dataset label displayed in the legend
            data: [10, 20, 30, 40], // Data points
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Data point color
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color below the line (if fill: true)
            fill: false // Disable fill by default (line-only visualization)
        }]
    }
};

// Chart.js 2.9.4-specific configuration
const chart_config_D5 = {
    ...commonChartConfig,
    options: {
        title: {
            display: true,
            text: 'Sample Chart'
        },
        legend: {
            display: true,
            position: 'top',
            onClick: (event, legendItem) => {
                documentsContext.openMessageDialog('Legend Click', 'You clicked on: ' + legendItem.text);
            }
        },
        tooltips: {
            enabled: true
        },
        hover: { // Attribute name in 2.9.4
            mode: 'nearest', // Highlight nearest data point
            intersect: false // Allow hover without intersecting a point
        },
        onClick: (event, activeElements) => {
            // Handle chart clicks using activeElements array
            if (activeElements.length > 0) {
                const clickedIndex = activeElements[0]._index;
                documentsContext.openMessageDialog('Chart Click', 'You clicked on index: ' + clickedIndex);
            } else {
                documentsContext.openMessageDialog('Chart Click', 'No element was clicked.');
            }
        },
        scales: { // Axes defined as arrays in 2.9.4
            xAxes: [{
                gridLines: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `X: ${value}`
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `Y: ${value}`
                }
            }]
        }
    }
};

// Chart.js 4.4.x-specific configuration
const chart_config_dOS = {
    ...commonChartConfig,
    options: {
        plugins: { // Moved into plugins in 4.x
            title: { // Now under plugins
                display: true,
                text: 'Sample Chart'
            },
            legend: { // Now under plugins
                display: true,
                position: 'top',
                onClick: (event, legendItem, legend) => { // Additional legend parameter in 4.x
                    documentsContext.openMessageDialog('Legend Click', 'You clicked on: ' + legendItem.text);
                }
            },
            tooltip: { // Now under plugins
                enabled: true
            }
        },
        interaction: { // Replaces hover, manages all interactions
            mode: 'nearest',
            intersect: false
        },
        onClick: (event, activeElements, chart) => {
            const clickedElement = activeElements[0]; // Access the first clicked element
            if (clickedElement) {
                const elIndex = clickedElement.index; // Index of the clicked element
                const dataset = chart.config.data.datasets[clickedElement.datasetIndex]; // Corresponding dataset

                documentsContext.openMessageDialog(
                    'Chart Click',
                    'You clicked on index: ' + elIndex + '\nValue: ' + dataset.data[elIndex]
                );
            } else {
                documentsContext.openMessageDialog('Chart Click', 'No element was clicked.');
            }
        },
        scales: { // Direct x and y objects, no arrays
            x: { // x replaces xAxes[]
                grid: { // grid replaces gridLines
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `X: ${value}`
                }
            },
            y: { // y replaces yAxes[]
                grid: { // grid replaces gridLines
                    display: true,
                    color: 'rgba(200, 200, 200, 0.8)'
                },
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `Y: ${value}`
                }
            }
        }
    }
};
Download: [chart_gadget_comparison_D5_dOS.js](../assets/samples/chart_gadget_comparison_D5_dOS.js)