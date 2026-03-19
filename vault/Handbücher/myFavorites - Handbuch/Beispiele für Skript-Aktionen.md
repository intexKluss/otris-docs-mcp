---
title: "Beispiele für Skript-Aktionen"
source: "https://otris.software/documents/manuals/books/app-doc/script_actions_examples.html"
---

# Beispiele für Skript-Aktionen


## Kommentardialog in der App

Dieses Beispiel zeigt die Nutzung von vorhandenen Skripten als Aktion in
der myFavorites-App. Außerdem werden mehrere Schritte im Ergebnis des
Aktionsskriptes zurückgegeben.


### appActionConfig_appComment


```javascript
module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: false,
        folder: false,
        file: true
    },
    //Technischer Bezeichner
    techName: "appActionCall_appComment",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "Kommentieren (D5 Feature)",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 04, 18, 11, 54),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: {
        title: "Kommentieren",
        icon: "chatbubbles",
        style: "dropdown",
        offline: "on",
        inputs: [{
            type: "text",
            name: "comment",
            placeholder: "Ihre Eingabe ..."
        }],
        buttons: [{
            text: "Abbrechen",
            role: "cancel"
        }, {
            text: "Ok",
            appHandlerScript: "appActionCall_appComment"
        }]
    }
};
```

module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: false,
        folder: false,
        file: true
    },
    //Technischer Bezeichner
    techName: "appActionCall_appComment",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "Kommentieren (D5 Feature)",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 04, 18, 11, 54),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: {
        title: "Kommentieren",
        icon: "chatbubbles",
        style: "dropdown",
        offline: "on",
        inputs: [{
            type: "text",
            name: "comment",
            placeholder: "Ihre Eingabe ..."
        }],
        buttons: [{
            text: "Abbrechen",
            role: "cancel"
        }, {
            text: "Ok",
            appHandlerScript: "appActionCall_appComment"
        }]
    }
};
### appActionCall_appComment


```javascript
//Funktion zum Kapseln eines bereits vorhandenen Skriptes
function addComment(pComment) {
    //#import "addComment";
}

//Verarbeiten der Daten aus dem Aktionsdialog
if (typeof result === "string") {
    actionResult = JSON.parse(result);
}

//Einlesen des Kommentars aus den verarbeiteten Daten
var comment = "kein Kommentar";
if (actionResult && actionResult.data) {
    if (actionResult.data.comment) {
        comment = actionResult.data.comment;
    }
}

//Kommentarfunktion aufrufen
addComment(comment);

//Rückgabeaktionen erzeugen
var returnValue = [{
    //Mappe neu synchronisieren, damit der Kommentar erscheint
    nextStep: "syncFile",
    id: context.file.getid()
    }, {
    //Dann: Erfolgsmeldung anzeigen
    nextStep: "showText",
    text: "Kommentar hinzugefügt"
}];

//Daten zurückgeben
return JSON.stringify(returnValue);
```

//Funktion zum Kapseln eines bereits vorhandenen Skriptes
function addComment(pComment) {
    //#import "addComment";
}

//Verarbeiten der Daten aus dem Aktionsdialog
if (typeof result === "string") {
    actionResult = JSON.parse(result);
}

//Einlesen des Kommentars aus den verarbeiteten Daten
var comment = "kein Kommentar";
if (actionResult && actionResult.data) {
    if (actionResult.data.comment) {
        comment = actionResult.data.comment;
    }
}

//Kommentarfunktion aufrufen
addComment(comment);

//Rückgabeaktionen erzeugen
var returnValue = [{
    //Mappe neu synchronisieren, damit der Kommentar erscheint
    nextStep: "syncFile",
    id: context.file.getid()
    }, {
    //Dann: Erfolgsmeldung anzeigen
    nextStep: "showText",
    text: "Kommentar hinzugefügt"
}];

//Daten zurückgeben
return JSON.stringify(returnValue);

### addComment


```javascript
util.out("Neuer Kommentar: " + pComment);
```

util.out("Neuer Kommentar: " + pComment);

## Statistiken mit showText


### appActionConfig_statsText


```javascript
module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: false,
        folder: true,
        file: false
    },
    //Technischer Bezeichner
    techName: "crmOpportunityStatsText",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "[crmOpportunity] Statistik (Text)",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 04, 18, 11, 01),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: {
        title: "Statistik (Text)",
        icon: "list",
        callScript: "appActionCall_statsText"
    }
};
```

module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: false,
        folder: true,
        file: false
    },
    //Technischer Bezeichner
    techName: "crmOpportunityStatsText",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "[crmOpportunity] Statistik (Text)",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 04, 18, 11, 01),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: {
        title: "Statistik (Text)",
        icon: "list",
        callScript: "appActionCall_statsText"
    }
};
### appActionCall_statsText


```javascript
//FileResultset aus dem context holen
var frs = context.folderFiles;

//Mappen auswerten und Zustände aufsummieren
var states = {};
for (var file = frs.first(); file; file = frs.next()) {
    if (states[file.crmStatus]) {
        states[file.crmStatus]++;
    } else {
        states[file.crmStatus] = 1;
    }
}

//Text zur Auswertung zusammenstellen
var text = "Nach Status:<br>";
for (var state of Object.keys(states)) {
    text += "<b>" + state + ":</b> " + states[state] + "<br>";
}

//AppActionResult erzeugen
var res = {
    //Text als Dialog anzeigen
    nextStep: "showText",
    //Der anzuzeigende Text
    text: text
};

//Das Ergebnis als string zurückgeben
return JSON.stringify(res);
```

//FileResultset aus dem context holen
var frs = context.folderFiles;

//Mappen auswerten und Zustände aufsummieren
var states = {};
for (var file = frs.first(); file; file = frs.next()) {
    if (states[file.crmStatus]) {
        states[file.crmStatus]++;
    } else {
        states[file.crmStatus] = 1;
    }
}

//Text zur Auswertung zusammenstellen
var text = "Nach Status:<br>";
for (var state of Object.keys(states)) {
    text += "<b>" + state + ":</b> " + states[state] + "<br>";
}

//AppActionResult erzeugen
var res = {
    //Text als Dialog anzeigen
    nextStep: "showText",
    //Der anzuzeigende Text
    text: text
};

//Das Ergebnis als string zurückgeben
return JSON.stringify(res);

### In der App


![](media/action-statsText.png?class=large)

Abb. 53 - Aktion zum Anzeigen von Statistiken als Text


## Statistiken mit HTML-Seiten und Chart.js

Dieses Beispiel demonstriert die Verwendung von HTML-Dialogen,
Ordneraktionen und Chart.js in der App.


### appActionConfig_createStats


```javascript
module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: false,
        folder: true,
        file: false
    },
    //Technischer Bezeichner
    techName: "crmOpportunityStats",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "[crmOpportunity] Statistik (Chart)",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 4, 18, 11, 01),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: {
        title: "Statistik (Chart)",
        icon: "pie",
        callScript: "appActionCall_crmOpportunityStats"
    }
};
```

module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: false,
        folder: true,
        file: false
    },
    //Technischer Bezeichner
    techName: "crmOpportunityStats",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "[crmOpportunity] Statistik (Chart)",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 4, 18, 11, 01),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: {
        title: "Statistik (Chart)",
        icon: "pie",
        callScript: "appActionCall_crmOpportunityStats"
    }
};
### appActionCall_createStats


```javascript
//FileResultset aus dem context holen
var frs = context.folderFiles;

//Mappen auswerten und Zustände aufsummieren
var states = {};
for (var file = frs.first(); file; file = frs.next()) {
    if (states[file.crmStatus]) {
        states[file.crmStatus]++;
    } else {
        states[file.crmStatus] = 1;
    }
}

//Werte und Beschriftungen für Chart.js aufbereiten
var labels = [];
var values = [];
for (var state of Object.keys(states)) {
    labels.push(state);
    values.push(states[state]);
}

//Chartjs Datensatz erstellen
var data = {
    labels: labels,
    datasets: [{
        data: values,
        backgroundColor: ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c", "#446073", "#f0906f", "#8ec2e5", "#5a6c8c", "#a6c485"]
    }]
};

//Clientseitige Methode zum Erzeugen des Charts aus dem Datensatz
var generateChart = function generateChart(data) {
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            maintainAspectRatio: false
        }
    });
}

//HTML Erzeugen, welches in der App angezeigt wird
var html = '<html style="margin:0;padding:0;"><head></head><body style="margin:0;padding:0;">';
html += '<script src="./assets/htmllib/chartjs2.min.js"></script>';
html += '<div style="margin: 5vh 5vw;width:90vw;height:90vh;"><canvas style="-webkit-tap-highlight-color: transparent;" id ="myChart"></canvas></div>';
html += '<script>' + generateChart.toString() + '</script>';
html += '<script>generateChart(' + JSON.stringify(data) + ');</script>';
html += "</body>";

//AppActionResult erzeugen
var res = {
    //Text als Dialog anzeigen
    nextStep: "showHTMLPage",
    //Der anzuzeigende Text
    html: html
};

//Das Ergebnis als string zurückgeben
return JSON.stringify(res);
```

//FileResultset aus dem context holen
var frs = context.folderFiles;

//Mappen auswerten und Zustände aufsummieren
var states = {};
for (var file = frs.first(); file; file = frs.next()) {
    if (states[file.crmStatus]) {
        states[file.crmStatus]++;
    } else {
        states[file.crmStatus] = 1;
    }
}

//Werte und Beschriftungen für Chart.js aufbereiten
var labels = [];
var values = [];
for (var state of Object.keys(states)) {
    labels.push(state);
    values.push(states[state]);
}

//Chartjs Datensatz erstellen
var data = {
    labels: labels,
    datasets: [{
        data: values,
        backgroundColor: ["#78AB54", "#099bd5", "#EA6043", "#ff861c", "#013057", "#a5a08c", "#446073", "#f0906f", "#8ec2e5", "#5a6c8c", "#a6c485"]
    }]
};

//Clientseitige Methode zum Erzeugen des Charts aus dem Datensatz
var generateChart = function generateChart(data) {
    var canvas = document.getElementById("myChart");
    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            maintainAspectRatio: false
        }
    });
}

//HTML Erzeugen, welches in der App angezeigt wird
var html = '<html style="margin:0;padding:0;"><head></head><body style="margin:0;padding:0;">';
html += '<script src="./assets/htmllib/chartjs2.min.js"></script>';
html += '<div style="margin: 5vh 5vw;width:90vw;height:90vh;"><canvas style="-webkit-tap-highlight-color: transparent;" id ="myChart"></canvas></div>';
html += '<script>' + generateChart.toString() + '</script>';
html += '<script>generateChart(' + JSON.stringify(data) + ');</script>';
html += "
		<script>window.OTRIS_PATH_PREFIX = "../../../";</script>
		<script src="../../../assets/scripts/headroom.min.js?h=20260213-112036"></script>
		<script src="../../../assets/scripts/autocomplete.min.js?h=20260213-112036"></script>
		<script src="../../../assets/scripts/clipboard.min.js?h=20260213-112036"></script>
		<script src="../../../assets/scripts/notyf.min.js?h=20260213-112036"></script>
		<script src="../../../assets/scripts/global-script.js?h=20260213-112036"></script>
	</body>";

//AppActionResult erzeugen
var res = {
    //Text als Dialog anzeigen
    nextStep: "showHTMLPage",
    //Der anzuzeigende Text
    html: html
};

//Das Ergebnis als string zurückgeben
return JSON.stringify(res);

## Barcode Scan

Dieses Beispiel demonstriert die Verwendung des Barcode-Scanners als
Eingabeparameter für eine Skript-Aktion


### appActionConfig_appScanBarcode


```javascript
module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: true,
        folder: true,
        file: true
    },
    //Technischer Bezeichner
    techName: "appScanBarcode",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "Scan Barcode",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2019, 05 - 06, 11, 10, 20),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: function (lang, file) {
        return {
            title: "Scan Barcode",
            icon: "person",
            offline: "on",
            style: "button",
            inputSource: {
                 source: "scan",
                 appHandlerScript: "appActionCall_appScanBarcode",
                 barcodeFormats: ["EAN_13", "EAN_8", "UPC_A", "CODE_39", "CODE_93", "ITF"],
                 sound: true
            }
        }
    }
};
```

module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: true,
        folder: true,
        file: true
    },
    //Technischer Bezeichner
    techName: "appScanBarcode",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "Scan Barcode",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2019, 05 - 06, 11, 10, 20),
    //Aktion generieren. Hier kann auch eine Funktion mit den Parametern (lang, file) verwendet werden.
    action: function (lang, file) {
        return {
            title: "Scan Barcode",
            icon: "person",
            offline: "on",
            style: "button",
            inputSource: {
                 source: "scan",
                 appHandlerScript: "appActionCall_appScanBarcode",
                 barcodeFormats: ["EAN_13", "EAN_8", "UPC_A", "CODE_39", "CODE_93", "ITF"],
                 sound: true
            }
        }
    }
};
### appActionCall_appScanBarcode


```javascript
var actionResult = null;
if(typeof result === "string") {
    actionResult = JSON.parse(result);
}
var text = null;
if(actionResult && actionResult.text) {
    text = actionResult.text;
}

var successReturnValue = {
    //Die nächste Aktion
    nextStep: "showText",
    //Daten für die nächste Aktion
    text: "Barcode scanned: " + text
}
return JSON.stringify(successReturnValue);
```

var actionResult = null;
if(typeof result === "string") {
    actionResult = JSON.parse(result);
}
var text = null;
if(actionResult && actionResult.text) {
    text = actionResult.text;
}

var successReturnValue = {
    //Die nächste Aktion
    nextStep: "showText",
    //Daten für die nächste Aktion
    text: "Barcode scanned: " + text
}
return JSON.stringify(successReturnValue);
## QuickViewGadget

Siehe [[Handbücher/myFavorites - Handbuch/Gadgets in der App|Gadgets in der App]].