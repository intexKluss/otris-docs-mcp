---
title: "ChartJS 4 Upgrade"
source: "https://otris.software/documents/howto/common/chartjs-upgrade-guide.html"
---

# ChartJS 4 Upgrade

Ab **documentsOS Build #2504** steht ChartJS 4 zur Verfügung, vorher wurde ChartsJS 2 verwendet.

Sowohl in der vorherigen Version *ChartJS 3* als auch in Version *ChartJS 4* gab es diverse *Breaking Changes*, die insbesondere Optionsänderungen bei der Anzeige von Diagrammen enthalten.
Die wichtigsten Änderungen werden nachfolgend zusammengefasst dargestellt.

Ausführliche Upgrade Information gibt es in den Migrationsguides von ChartJS:

- 3.x Migration Guide
- 4.x Migration Guide


## Events


### Click-Event

Der Click-Event wurde vorher im Gadget mit Gadget.setChartOnClickHandler() gesetzt.
Das Hinzufügen des Click-Events geschieht jetzt über die Konfiguration.

**Vorher:**


```javascript
var chart = new otris.gadget.gui.Chart("pie", data, chartOptions);
chart.setChartOnClickHandler(function clickAction(index, dataset) {
    ...
});
```

var chart = new otris.gadget.gui.Chart("pie", data, chartOptions);
chart.setChartOnClickHandler(function clickAction(index, dataset) {
    ...
});**Jetzt:**


```javascript
chartOptions = {
      onClick: (event, activeElements, chart) => {
        // get index & dataset for clicked element
        var elIndex = activeElements[0].index;
        var dataset = chart.config.data.datasets[activeElements[0].datasetIndex];
    }
}
```

chartOptions = {
      onClick: (event, activeElements, chart) => {
        // get index & dataset for clicked element
        var elIndex = activeElements[0].index;
        var dataset = chart.config.data.datasets[activeElements[0].datasetIndex];
    }
}
## Allgemeine Konfiguration


### Achsen

Die Achsen werden jetzt über eine ID zur Anzeige registriert.

**Vorher:**


```javascript
chartOptions = {
    scales: {
        xAxes: [{ ... }], // Array von x-Achsen
        yAxes: [{ ... }]
    }
};
```

chartOptions = {
    scales: {
        xAxes: [{ ... }], // Array von x-Achsen
        yAxes: [{ ... }]
    }
};**Jetzt:**


```javascript
chartOptions = {
    scales: {
        x: { ... }, // Konfiguration für Achse 'x'
        y: { ... }
    }
};
```

chartOptions = {
    scales: {
        x: { ... }, // Konfiguration für Achse 'x'
        y: { ... }
    }
};Wenn eine zusätzliche Achse angezeigt werden soll, muss dieser die Position übergeben werden:


```javascript
scales: {
    ...
    rightY: { position: `right` } // Achse rechts darstellen
}
```

scales: {
    ...
    rightY: { position: `right` } // Achse rechts darstellen
}
#### Min/Max Werte

Die Min/Max Werte bei Zeitachsen wurden in die allgemeine Achsenkonfiguration verschoben.

**Vorher:**


```javascript
xAxes: [{
    time: { // Konfiguration innerhable von Time
        min: ...
        max: ...
    }
}]
```

xAxes: [{
    time: { // Konfiguration innerhable von Time
        min: ...
        max: ...
    }
}]**Jetzt:**


```javascript
x: {
    min: ... // Konfiguration an Achse
    max: ...
}
```

x: {
    min: ... // Konfiguration an Achse
    max: ...
}
### Legende

Die Legenden-Optionen wurden in die Plugins verschoben.

**Vorher:**


```javascript
chartOptions = {
    legend: { } // Konfiguration direkt in chart options
};
```

chartOptions = {
    legend: { } // Konfiguration direkt in chart options
};**Jetzt:**


```javascript
chartOptions = {
    plugins: {
        legend: { } // Konfiguration unter 'plugins'
    }
};
```

chartOptions = {
    plugins: {
        legend: { } // Konfiguration unter 'plugins'
    }
};
### Tooltips

Die Tooltips wurden ebenfalls in die Plugins verschoben und heißen jetzt nur **tooltip**

**Vorher:**


```javascript
chartOptions = {
    tooltips: { ... } // Konfiguration direkt in chart options
};
```

chartOptions = {
    tooltips: { ... } // Konfiguration direkt in chart options
};**Jetzt:**


```javascript
chartOptions = {
    plugins: {
        tooltip: { ... } // Konfiguration unter 'plugins'
    }
};
```

chartOptions = {
    plugins: {
        tooltip: { ... } // Konfiguration unter 'plugins'
    }
};Bei den Callbacks gab es kleine Änderungen bei den Parametern.
Hier werden Daten jetzt direkt als Number übergeben und müssen nicht verarbeitet werden.

**Vorher:**


```javascript
tooltip: {
    callbacks: {
        label: function(tooltipItems, data){
            return new Number(tooltipItems.value); // String value in Number casten
        }
    }
}
```

tooltip: {
    callbacks: {
        label: function(tooltipItems, data){
            return new Number(tooltipItems.value); // String value in Number casten
        }
    }
}**Jetzt:**


```javascript
tooltip: {
    callbacks: {
        label: function(tooltipItems, data){
            return tooltipItems.raw; // direkter Number-Wert
        }
    }
}
```

tooltip: {
    callbacks: {
        label: function(tooltipItems, data){
            return tooltipItems.raw; // direkter Number-Wert
        }
    }
}