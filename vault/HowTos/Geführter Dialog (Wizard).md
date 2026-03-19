---
title: "Einen Wizard erstellen"
source: "https://otris.software/documents/howto/gadgets/wizard.html"
---

# Einen Wizard erstellen

Ein Wizard ist ein geführter Dialog, welcher sich über die Definition von einzelnen Schritten konfigurieren lässt.
Jeder Schritt ist dabei ein eigenes Gadget. In den Gadgets kann auf die Daten der vorherigen Schritte zugegriffen werden.

Im Folgenden wird anhand eines Beipiels erläutert, wie ein Wizard erstellt werden kann.


## Wizard definieren

Der Wizard selbst ist auch ein Gadget und muss entsprechend als ein solches implementiert werden.
Dazu wird eine Gadget-Action definiert, welche beispielsweise *showWizard* genannt wird. Diese Action muss am Ende ein Objekt vom Typ [Wizard](https://doku.otris.de/api/gadgets/otris.gadget.gui.Wizard.html) zurückgeben. Dies kann im einfachsten Fall wie folgt aussehen:


```javascript
context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showWizard", function (gadgetContext) {
    var wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle("Beispiel Wizard");

    // Hier erfolgt noch die weitere Implementierung des Wizards

    return wizard;
});

context.returnValue = gadgetAPI.transfer();
```

context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showWizard", function (gadgetContext) {
    var wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle("Beispiel Wizard");

    // Hier erfolgt noch die weitere Implementierung des Wizards

    return wizard;
});

context.returnValue = gadgetAPI.transfer();**Der Wizard wird dann wie ein ganz normales Gadget aufgerufen.**

Weiterführend kann konfiguriert werden, wo und ob die Navigation des Wizards platziert wird.
Diese kann entweder an der linken Seite


Abb. 1 - Wizard Navigation Links

... oder oben platziert werden.
Abb. 2 - Wizard Navigation Oben

Die Konfiguration erfolgt über den Aufruf der Methode [showNavigation](https://doku.otris.de/api/gadgets/otris.gadget.gui.Wizard.html#showNavigation) auf dem Wizard-Objekt:


```javascript
wizard.showNavigation({
    enable: true,
    position: "left",   // Alternativ: "top"
    width: "25%"        // Breite der Navigation (wird bei "top" ignoriert)
});
```

wizard.showNavigation({
    enable: true,
    position: "left",   // Alternativ: "top"
    width: "25%"        // Breite der Navigation (wird bei "top" ignoriert)
});
## Wizard Schritte definieren

Nun müssen dem Wizard Schritte hinzugefügt werden. Hierzu wird für jeden Schritt ein Objekt vom Typ [WizardStep](https://doku.otris.de/api/gadgets/otris.gadget.gui.WizardStep.html) instanziiert. Der WizardStep erwartet für die Konfiguration mindestens drei Parameter:

- Eine eindeutige Kennung
- Einen Bezeichner (dieser wird in der Navigation angezeigt)
- Eine Gadget-Definition (dieses Gadget wird in den Schritt gerendert)

Wird als Gadget kein Form-Gadget verwendet, so muss zusätzlich der Name eine Client-Funktion angegeben werden, welche die Daten zurückgibt, die sich aus dem Schritt ergeben. Die Funktion muss dann entsprechend durch das Gadget implementiert werden.

Die Instanziierung des WizardSteps kann dann beispielsweise so aussehen:


```javascript
var firstWizardStep = gadgetAPI.getWizardStepInstance(
    "exampleWizard_firstStep",  // Kennung
    "Erster Schritt",           // Bezeichner
    {                           // Gadget-Konfiguration
        gadgetScript: "Gadget_Beispiel_FirstStep",
        gadgetAction: "showFirstStep"
    },
    "getStepData"               // Optionale Client-Funktion
);
```

var firstWizardStep = gadgetAPI.getWizardStepInstance(
    "exampleWizard_firstStep",  // Kennung
    "Erster Schritt",           // Bezeichner
    {                           // Gadget-Konfiguration
        gadgetScript: "Gadget_Beispiel_FirstStep",
        gadgetAction: "showFirstStep"
    },
    "getStepData"               // Optionale Client-Funktion
);Anschließend muss der WizardStep dem Wizard bekannt gemacht werden. Dies erfolgt über folgenden Aufruf:


```javascript
wizard.addStep(firstWizardStep);
```

wizard.addStep(firstWizardStep);
## Gadgets für eine Wizard Schritt implementieren

Bei der Implementierung von Gadgets für einen Wizard Schritt wird wie bei normalen Gadgets vorgegangen.

Zusätzlich kann aber auch die Daten des Wizards (also Daten aus vorherigen Wizard Schritten) zugegriffen werden. Dieser Zugriff ist zum Beispiel wie folgt möglich:


```javascript
gadgetContext.gadgetWizard.wizardData
```

gadgetContext.gadgetWizard.wizardDataAußerdem muss für den Fall, dass kein Form-Gadget verwendet wird, eine Client-Funktion definiert werden, welche die Daten die sich aus dem Schritt ergeben zurückgibt.
Dies kann beispielsweise wie folgt aussehen:


```javascript
htmlGadget.addClientFunction(function getStepData () {
    return {
        exampleResult: "Hello world",
        exampleRating: $("#exampleRating").val()
    };
});
```

htmlGadget.addClientFunction(function getStepData () {
    return {
        exampleResult: "Hello world",
        exampleRating: $("#exampleRating").val()
    };
});
## Aktion am Ende des Wizards

Wenn der Wizard durch den Benutzer durchlaufen wurde, wird am Ende die Aktion "Fertig" angezeigt. Die hier hinterlegte Funktion muss implementiert werden. Dies erfolgt durch den Aufruf der Funktion [setFinishAction](https://doku.otris.de/api/gadgets/otris.gadget.gui.Wizard.html#setFinishAction) auf dem Wizard-Objekt:


```javascript
wizard.setFinishAction("finishAction");
```

wizard.setFinishAction("finishAction");Hierbei wird als Parameter der Name einer Gadget-Action übergeben. Diese Gadget Action muss ebenfalls implementiert werden. Dies kann beispielsweise wie folgt aussehen:


```javascript
gadgetAPI.registerGadgetAction("finishAction", function (gadgetContext) {
    // Daten abrufen und verarbeiten
    var wizardData = gadgetContext.gadgetWizard.wizardData;
    util.out(JSON.stringify(wizardData));

    var htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});
```

gadgetAPI.registerGadgetAction("finishAction", function (gadgetContext) {
    // Daten abrufen und verarbeiten
    var wizardData = gadgetContext.gadgetWizard.wizardData;
    util.out(JSON.stringify(wizardData));

    var htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});In dieser Aktion können dann die Daten verarbeitet werden, welche durch den Benutzer im Wizard festgelegt wurden. Im einfachsten Fall (wie im Beispiel gezeigt) wird der Wizard anschließend einfach geschlossen. Es kann aber auch ein weiteres Gadget gerendert werden. Dieses wird dann ebenfalls im Wizard angezeigt, der Benutzer kann aber nicht mehr zu den Schritten zurückkehren.


## Beispiel


```javascript
context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showWizard", function (gadgetContext) {
    // 1. Wizard erstellen
    var wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle("Beispiel Wizard");
    wizard.showNavigation({
        enable: true,
        width: "25%",
        position: "left"    // Alternativ: "top"
    });

    // 2. Wizard-Schritt hinzufügen
    var firstWizardStep = gadgetAPI.getWizardStepInstance(
        "exampleWizard_firstStep",  // ID
        "Erster Schritt",           // Bezeichner
        {                           // Gadget-Konfiguration
            gadgetScript: "Gadget_Wizard_FirstStep",
            gadgetAction: "showFirstStep"
        }
    );
    wizard.addStep(firstWizardStep);

    // 3. Wizard-Schritt hinzufügen
    var secondWizardStep = gadgetAPI.getWizardStepInstance(
        "exampleWizard_secondStep", // ID
        "Zweiter Schritt",          // Bezeichner
        {                           // Gadget-Konfiguration
            gadgetScript: "Gadget_Wizard_SecondStep",
            gadgetAction: "showSecondStep"
        },
        "getStepData"               // Client Funktion, welche Wizard-Schritt-Daten bereitstellt
    );
    wizard.addStep(secondWizardStep);

    // Aktion am Ende (siehe folgende GadgetAction)
    wizard.setFinishAction("finishAction");

    return wizard;
});

// 4. Aktion am Ende setzen
gadgetAPI.registerGadgetAction("finishAction", function (gadgetContext) {
    // Daten abrufen und verarbeiten
    var wizardData = gadgetContext.gadgetWizard.wizardData;
    util.out(JSON.stringify(wizardData));

    var htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});

context.returnValue = gadgetAPI.transfer();
```

context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showWizard", function (gadgetContext) {
    // 1. Wizard erstellen
    var wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle("Beispiel Wizard");
    wizard.showNavigation({
        enable: true,
        width: "25%",
        position: "left"    // Alternativ: "top"
    });

    // 2. Wizard-Schritt hinzufügen
    var firstWizardStep = gadgetAPI.getWizardStepInstance(
        "exampleWizard_firstStep",  // ID
        "Erster Schritt",           // Bezeichner
        {                           // Gadget-Konfiguration
            gadgetScript: "Gadget_Wizard_FirstStep",
            gadgetAction: "showFirstStep"
        }
    );
    wizard.addStep(firstWizardStep);

    // 3. Wizard-Schritt hinzufügen
    var secondWizardStep = gadgetAPI.getWizardStepInstance(
        "exampleWizard_secondStep", // ID
        "Zweiter Schritt",          // Bezeichner
        {                           // Gadget-Konfiguration
            gadgetScript: "Gadget_Wizard_SecondStep",
            gadgetAction: "showSecondStep"
        },
        "getStepData"               // Client Funktion, welche Wizard-Schritt-Daten bereitstellt
    );
    wizard.addStep(secondWizardStep);

    // Aktion am Ende (siehe folgende GadgetAction)
    wizard.setFinishAction("finishAction");

    return wizard;
});

// 4. Aktion am Ende setzen
gadgetAPI.registerGadgetAction("finishAction", function (gadgetContext) {
    // Daten abrufen und verarbeiten
    var wizardData = gadgetContext.gadgetWizard.wizardData;
    util.out(JSON.stringify(wizardData));

    var htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});

context.returnValue = gadgetAPI.transfer();
Download: [Gadget_Wizard.js](../gadgets/Gadget_Wizard.js)


```javascript
context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showFirstStep", function (gadgetContext) {
    var formGadget = gadgetAPI.getFormInstance();
    formGadget.addTextField("exampleInput", "Eingabe", "Hallo Welt!");
    return formGadget;
});
context.returnValue = gadgetAPI.transfer();
```

context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showFirstStep", function (gadgetContext) {
    var formGadget = gadgetAPI.getFormInstance();
    formGadget.addTextField("exampleInput", "Eingabe", "Hallo Welt!");
    return formGadget;
});
context.returnValue = gadgetAPI.transfer();
Download: [Gadget_Wizard_FirstStep.js](../gadgets/Gadget_Wizard_FirstStep.js)


```javascript
context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showSecondStep", function (gadgetContext) {
    // Daten aus dem vorherigen Schritt abrufen
    var wizardData = gadgetContext.gadgetWizard.wizardData;

    var htmlGadget = gadgetAPI.getHTMLInstance();
    var html = '<h3>Eingabe aus dem vorherigen Schritt: </h3>\
        <div>' + wizardData.exampleWizard_firstStep.exampleInput[0] + '</div>\
        <h3>Wie zufrieden sind Sie mit diesem Beispiel?</h3>\
        <input type="range" min="1" max="100" value="50" id="exampleRating">';
    htmlGadget.appendHtml(html);
    htmlGadget.addClientFunction(function getStepData () {
        return {
            exampleRating: $("#exampleRating").val()
        }
    });
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();
```

context.enableModules(undefined, 3);
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

gadgetAPI.registerGadgetAction("showSecondStep", function (gadgetContext) {
    // Daten aus dem vorherigen Schritt abrufen
    var wizardData = gadgetContext.gadgetWizard.wizardData;

    var htmlGadget = gadgetAPI.getHTMLInstance();
    var html = '<h3>Eingabe aus dem vorherigen Schritt: </h3>\
        <div>' + wizardData.exampleWizard_firstStep.exampleInput[0] + '</div>\
        <h3>Wie zufrieden sind Sie mit diesem Beispiel?</h3>\
        <input type="range" min="1" max="100" value="50" id="exampleRating">';
    htmlGadget.appendHtml(html);
    htmlGadget.addClientFunction(function getStepData () {
        return {
            exampleRating: $("#exampleRating").val()
        }
    });
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();Download: [Gadget_Wizard_SecondStep.js](../gadgets/Gadget_Wizard_SecondStep.js)