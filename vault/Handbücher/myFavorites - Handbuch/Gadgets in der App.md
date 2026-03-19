---
title: "Gadgets in der App"
source: "https://otris.software/documents/manuals/books/app-doc/gadget.html"
---

# Gadgets in der App

**Hinweis:** Die Nutzung von Gadgets setzt eine bestehende Internetverbindung voraus. Eine Nutzung ist nicht möglich, wenn eine [Proxy-Konfiguration](./reverse_proxy.html) gemäß dem entsprechenden Kapitel verwendet wird.

Im Folgenden wird erläutert, wie bestehende Gadgets in die App eingebunden werden können. Dafür wird in diesem Beispiel das Sample Chart Gadget aus der Gadget-Dokumentation verwendet.

Gadgets können über [Skript Aktionen](./script_actions_getting_started.html) in der App verfügbar gemacht werden, indem auf ein QuickViewGadget verwiesen wird. Diese Methode eignet sich insbesondere, wenn ein Gadget bereits vorhanden ist und ohne zusätzlichen Entwicklungsaufwand in die App integriert werden soll.


### Gadget im Webclient

**Gadget in der Webanwendung**
Mit der folgenden Gadget Config: '{ gadgetScript: 'GadgetSample_Chart', gadgetAction: 'showChart' }'


![](./media/gadget-chart-sample.png?class=medium)

Abb. 76 - Beispiel Gadget Chart Gadget

Hier wird das folgende Skript verwendet:

**Gadget Script**


```javascript
//#import "Gadget_API_Controller"

function showChart() {

    this.execute = function () {
        var chart, data, config;

        // chart.js data (details: https://chartjs.org)
        data = {
            labels: ["Kategorie A", "Kategorie B", "Kategorie C"],
            datasets: [{
                data: [32, 15, 23],
                backgroundColor: ["#2ecc71", "#3498db", "#e74c3c"],
                hoverBackgroundColor: ["#27ae60", "#2980b9", "#c0392b"]
            }]
        };

        // chart.js configuration (details: https://chartjs.org)
        config = {
            title: { text: 'Kategorien', display: true }
        };

        // gadget instance with chart.js charttype, data and config
        chart = new otris.gadget.gui.Chart("pie", data, config);
        // dialog title
        chart.setTitle("Sample chart");
        // add some padding
        chart.setStyle("padding", "10px 10px 20px 10px");
        // prevents scrollbars (https://developer.mozilla.org/de/docs/Web/CSS/box-sizing)
        chart.setStyle("box-sizing", "border-box");
        return chart.transfer();
    };
}
```

//#import "Gadget_API_Controller"

function showChart() {

    this.execute = function () {
        var chart, data, config;

        // chart.js data (details: https://chartjs.org)
        data = {
            labels: ["Kategorie A", "Kategorie B", "Kategorie C"],
            datasets: [{
                data: [32, 15, 23],
                backgroundColor: ["#2ecc71", "#3498db", "#e74c3c"],
                hoverBackgroundColor: ["#27ae60", "#2980b9", "#c0392b"]
            }]
        };

        // chart.js configuration (details: https://chartjs.org)
        config = {
            title: { text: 'Kategorien', display: true }
        };

        // gadget instance with chart.js charttype, data and config
        chart = new otris.gadget.gui.Chart("pie", data, config);
        // dialog title
        chart.setTitle("Sample chart");
        // add some padding
        chart.setStyle("padding", "10px 10px 20px 10px");
        // prevents scrollbars (https://developer.mozilla.org/de/docs/Web/CSS/box-sizing)
        chart.setStyle("box-sizing", "border-box");
        return chart.transfer();
    };
}
### QuickViewGadget anlegen

Für dieses Gadget kann nun ein QuickViewGadget angelegt werden.
In diesem Beispiel wird der Name `SampleChart` vergeben.


![](./media/gadget-chart-sample-quick-view.png?class=medium)

Abb. 77 - Beispiel Gadget Chart Gadget

In der appActionConfig kann dieses QuickViewGadget nun direkt referenziert werden. Ein appActionCall Skript wird nicht benötigt.

**appActionConfig_SampleChart.js:**


```javascript
module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: true,
        folder: false,
        file: false
    },
    //Technischer Bezeichner
    techName: "sampleChart",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "de:Sample Chart;",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 4, 17, 9, 23),
    //Aktion generieren
    action: {
        title: "Sample Chart",
        showQuickViewGadget: "SampleChart",
        style: "tile_inverted"
    }
};
```

module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: true,
        folder: false,
        file: false
    },
    //Technischer Bezeichner
    techName: "sampleChart",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "de:Sample Chart;",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 4, 17, 9, 23),
    //Aktion generieren
    action: {
        title: "Sample Chart",
        showQuickViewGadget: "SampleChart",
        style: "tile_inverted"
    }
};
### Quick View Gadget in der App


![](./media/gadget-chart-sample-app.png?class=medium)

Abb. 78 - Gadget in der App