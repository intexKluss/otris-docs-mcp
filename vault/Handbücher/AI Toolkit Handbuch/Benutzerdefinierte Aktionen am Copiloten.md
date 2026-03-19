---
title: "Benutzerdefinierte Aktionen"
source: "https://otris.software/documents/manuals/books/otr-ai/user-defined-functions.html"
---

# Benutzerdefinierte Aktionen

Der Copilot kann benutzerdefinierte Aktionen ausführen. Dazu muss die Aktion zuvor dem gewünschten Mappentyp hinzugefügt werden. Es können zwei Arten von Aktionen angelegt werden: **Skriptaktionen** und **Gadgetaktionen**.
Eine Schritt-für-Schritt Anleitung für eine **Skriptaktion** ist unter Getting Started zu finden, siehe [Getting started: Benutzeraktionen im Copilot](getting-started-user-defined-function.html).


## Skriptaktion

**Benötigte Skript-Eigenschaften:**

| Eigenschaft | Beschreibung | Beispiel |
| --- | --- | --- |
| aiRelevant | Markierung, dass die Aktion vom Copiloten aufgerufen werden darf | true |
| aiActionDescription | Beschreibung der Aktion und Prompt für den Copiloten. Auch als Multilang-String möglich | "Formuliert und dokumentieren eine effektive Lösung für den zugewiesenen Ticketfall und füllen das Feld 'Lösung' präzise und klar aus." |

**Beispiel Skript-Parameter**

Das in der Skriptaktion referenzierte Skript kann über Skript-Parameter verfügen. Da sowohl die Skript-Parameter als auch deren Beschreibungen dem Copiloten zur Verfügung gestellt werden, können die generierten Ergebnisse durch eine präzise Beschreibung optimiert werden.


![user-defined-functions-01](./assets/user-defined-functions-09.png?class=large)

Abb. 69 - Copilot, Aufruf von benutzerdefinierten Aktionen


## Gadgetaktion

**Benötigte Skript-Eigenschaften:**

| Eigenschaft | Beschreibung | Beispiel |
| --- | --- | --- |
| aiRelevant | Markierung, dass die Aktion vom Copiloten aufgerufen werden darf | true |
| aiActionDescription | Beschreibung der Aktion und Prompt für den Copiloten. Auch als Multilang-String möglich. | "de: Setze die Zusammenfassung der Mappe, ohne Parameter;en:Set the summmary of the docfile, without Parameter" |
| aiGadgetParamsSchema | Name eines Custom-Properties, das ein Schema der Gadget-Parameter bereitstellt | SetSummarySchema |

Mit `aiGadgetParamsSchema` kann ein individuelles Schema für die benötigten Gadget-Parameter hinterlegt werden, das die Struktur und Eigenschaften der erwarteten Eingabewerte definiert.

**Beispiel: Hinterlegen eines Schemas**


```javascript
context.setOrAddCustomProperty(
  "SetSummarySchema" /* Individueller Bezeichner, der in der Gadgeteigenschaft referenziert wird */,
  "aiGadgetParamsSchema" /* Typ: aiGadgetParamsSchema */,
  JSON.stringify({
    /* Parameter-Schema */
    type: "object",
    properties: {
      pNewSummary: {
        type: "string",
        description: "Neue Zusammenfassung der Mappe setzen",
      },
    },
  })
);
```

context.setOrAddCustomProperty(
  "SetSummarySchema" /* Individueller Bezeichner, der in der Gadgeteigenschaft referenziert wird */,
  "aiGadgetParamsSchema" /* Typ: aiGadgetParamsSchema */,
  JSON.stringify({
    /* Parameter-Schema */
    type: "object",
    properties: {
      pNewSummary: {
        type: "string",
        description: "Neue Zusammenfassung der Mappe setzen",
      },
    },
  })
);
## Gadgetaktionen als Callback

Für Gadgetaktionen können optional auch Callbacks verwendet werden.
Dadurch ist **keine Benutzerdefinierte Aktion erforderlich**
und die Aktion ist nur über den Copiloten verfügbar.
Im folgenden Beispiel wird per Callback eine Aktion zum Erstellen eines Diagramms hinterlegt.
Der Copilot, kann Diagrammtyp, Titel und Daten an ein Gadget übergeben, welches diese Daten verarbeitet.

**Benötigte Skript-Eigenschaften:**

Die Eigenschaften `aiRelevant`, `aiActionDescription` und `aiGadgetParamsSchema` entfallen.
Folgende Informationen werden über das Callback zur Verfügung gestellt:

- gadgetConfig: Gadget, welches die Skriptparameter verarbeitet
- properties: Skriptparameter (type, description und ggf. enum) Bsp. pChartType


```javascript
module.exports.version = 2;
module.exports.moduleName = "customGadgetChartAction";
module.exports.otrAI = {
    addCopilotGadgets: function (options) {
        options.gadgets.push({
            /* gadgetConfig ist z.B. ein Form-Gadget,
               dass einen Konfigurationsdialog abbildet zum Erstellen eines Diagramms */
            gadgetConfig: JSON.stringify({ gadgetScript: "Gadget_scReportChart", gadgetAction: "showChartSettings" }),
            parameters: {
                type: "object",
                // Eigenschaften die der Copilot setzen kann
                properties: {
                    pChartType: {
                        type: "string",
                        description: "de:Ein für das zu erstellende Chart sinnvoller Chart-Typ oder der vom Benutzer angegebene Typ;en:A chart type that makes sense for the chart to be created or the type specified by the user",
                        enum: [
                            "bar",
                            "pie",
                            "line",
                            "doughnut"
                        ]
                    },
                    pTitle: {
                        type: "string",
                        description: "de:Eine kurze Überschrift für das Chart;en:A short heading for the chart"
                    },
                    pChartData: {
                        type: "string",
                        description: "de:ChartJS Daten-Block als JSON-String (data mit labels, dataset, data, backgroundColor, borderColor und borderWidth);en:ChartJS data block as JSON string (data with labels, dataset, data, backgroundColor, borderColor and borderWidth)"
                    }
                }
            },
            description: "de:Daten für ChartJS erzeugen. Dabei geeignete und unterschiedliche Farben (backgroundColor) verwenden.;en:Create data for ChartJS, Use suitable and different colors (backgroundColor)."
        });
    }
};
```

module.exports.version = 2;
module.exports.moduleName = "customGadgetChartAction";
module.exports.otrAI = {
    addCopilotGadgets: function (options) {
        options.gadgets.push({
            /* gadgetConfig ist z.B. ein Form-Gadget,
               dass einen Konfigurationsdialog abbildet zum Erstellen eines Diagramms */
            gadgetConfig: JSON.stringify({ gadgetScript: "Gadget_scReportChart", gadgetAction: "showChartSettings" }),
            parameters: {
                type: "object",
                // Eigenschaften die der Copilot setzen kann
                properties: {
                    pChartType: {
                        type: "string",
                        description: "de:Ein für das zu erstellende Chart sinnvoller Chart-Typ oder der vom Benutzer angegebene Typ;en:A chart type that makes sense for the chart to be created or the type specified by the user",
                        enum: [
                            "bar",
                            "pie",
                            "line",
                            "doughnut"
                        ]
                    },
                    pTitle: {
                        type: "string",
                        description: "de:Eine kurze Überschrift für das Chart;en:A short heading for the chart"
                    },
                    pChartData: {
                        type: "string",
                        description: "de:ChartJS Daten-Block als JSON-String (data mit labels, dataset, data, backgroundColor, borderColor und borderWidth);en:ChartJS data block as JSON string (data with labels, dataset, data, backgroundColor, borderColor and borderWidth)"
                    }
                }
            },
            description: "de:Daten für ChartJS erzeugen. Dabei geeignete und unterschiedliche Farben (backgroundColor) verwenden.;en:Create data for ChartJS, Use suitable and different colors (backgroundColor)."
        });
    }
};
Parameter, die nicht durch den Nutzer konfiguriert werden sollen,
können durch den Copiloten im Gadget in ein verstecktes Feld eingetragen werden.


```javascript
// Daten des Diagramms nur durch Copiloten wählbar
gadgetForm.addHiddenField("pChartData");
```

// Daten des Diagramms nur durch Copiloten wählbar
gadgetForm.addHiddenField("pChartData");
## Aktionen im Admin Center aktivieren

Im Admin Center können benutzerdefinierte Aktionen im AI Toolkit aktiviert oder deaktiviert werden. Dazu wählt man den gewünschten Copiloten aus und öffnet den Reiter für zusätzliche Einstellungen.

Unter Funktionen sind alle für Nutzer und Sprachmodell verfügbaren Aktionen aufgeführt. Die benutzerdefinierten Aktionen der ausgewählten Mappentypen erscheinen unter Mappenaktionen.


![user-defined-functions-01](./assets/user-defined-functions-03.png?class=large)

Abb. 70 - Admin Center, Benutzerdefinierten Aktionen aktivieren

Die Option "Durch den Copiloten ausführbar" legt fest, ob der Copilot die Aktion kennt und deren Ausführung anfragen kann.

Die Option "Durch den Benutzer ausführbar" bestimmt, ob ein Funktionsknopf in der Mappe hinzugefügt wird, über den der Nutzer die Aktion ausführen kann.


## Aufruf der Aktion durch den Copiloten

Sobald die Aktion für den Copiloten freigeschaltet wurde, kann die Aktion durch den Copiloten aufgerufen werden.
Die Aktion wird im Chatfenster aufgelistet.


![user-defined-functions-01](./assets/user-defined-functions-02.png?class=large)

Abb. 71 - Copilot, Aufruf von benutzerdefinierten Aktionen

Vor dem Ausführen der Aktion wird der Zugriff auf die Aktion angefordert und muss durch den Nutzer bestätigt werden. Diese Bestätigung wird jedoch nur bei Aktionen ohne Parameter ausgelöst.


![user-defined-functions-01](./assets/user-defined-functions-01.png?class=medium)

Abb. 72 - Copilot, Zugriff anfordern von benutzerdefinierten Aktionen

Bei Gadgets oder Skriptaktionen, die Parameter enthalten, muss die Aktion mit den vorgeschlagenen Parametern bestätigt werden. Hier kann der Nutzer mögliche Änderungswünsche manuell eintragen.


![user-defined-functions-01](./assets/user-defined-functions-08.png?class=large)

Abb. 73 - Copilot, Zugriff anfordern von benutzerdefinierten Aktionen