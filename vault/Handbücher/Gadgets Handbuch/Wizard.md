---
title: "Wizard"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/wizard.html"
---

# Wizard


## Allgemeines

Mit dem Wizard-Gadget können geführte Dialoge bereitgestellt werden. Hierzu wird eine Instanz der Klasse [[Gadget API/otris.gadget.gui.Wizard]] konfiguriert und als Ergebnis des Gadgets zurückgegeben.


## Wesentliche Merkmale

- Die Konfiguration der Dialoge ist über die Definition von einzelnen Schritten möglich.
- Ein Wizard benötigt mindestens einen Schritt, sinnvoll sind aber mindestens zwei Schritte, weil bei einem Schritt auch andere Gadget-Typen wie z.B. ein Form-Gadget verwendet werden können.
- Jeder Schritt ist ein eigenes Gadget.
- In den Gadgets kann auf die Daten der vorherigen Schritte zugegriffen werden.
- Für jeden Wizard muß eine cancelAction und eine finishAction definiert werden, über die angegeben wird, welche Aktion beim Abbrechen bzw. beim Beenden des Wizards ausgeführt wird:
Ein Abbrechen des Wizard per cancelAction führt i.a.R. zum Schließen des Dialogs.
Wenn der Wizard durch den Benutzer komplett durchlaufen wurde, wird die Aktion Fertig angezeigt. Diese Aktion führt als finishAction i.a.R. zur weiteren Verarbeitung der im Wizard erfassten Daten.
- In den Instanzen der Gadget-Typen "Wizard" und "Message" werden die Methoden .addContainerButton() und .setContainerButtons() funktional ignoriert. (Eingebettete Gadget-Typen, wie Form-Gadgets oder HTML-Gadgets, funktionieren unabhängig und sind nicht beschränkt.)


## Allgemeines Beispiel

Der Wizard selbst ist auch ein Gadget und muss als solches bereitgestellt werden (gadgetConfig). Im einfachsten Fall kann ein Wizard mit zwei Schritten (jeweils als Form-Gadget) wie folgt aussehen:


![wizard-1](../assets/img/wizard-1.png)

Abb. 108 - Wizard, Form-Gadget als Schritt 1


![wizard-2](../assets/img/wizard-2.png)

Abb. 109 - Wizard, Form-Gadget als Schritt 2

Das verwendete Beispiel-Skript würde für diesen Fall wie folgt aussehen, wobei die *cancelAction* und die *finishAction* lediglich den Wizard ohne weitere Aktionen schließen:

- gadgetConfig={gadgetScript: 'Gadget_Wizard_Simple', gadgetAction: 'startWizard'}


```javascript
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// The wizard
gadgetAPI.registerGadgetAction("startWizard", function() {
    const wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle("myWizard");
    const step1 = gadgetAPI.getWizardStepInstance("step1", "myStep1", {gadgetScript: "Gadget_Wizard_Simple", gadgetAction: "step1"});
    const step2 = gadgetAPI.getWizardStepInstance("step2", "myStep2", {gadgetScript: "Gadget_Wizard_Simple", gadgetAction: "step2"});
    wizard.addStep(step1);
    wizard.addStep(step2);
    wizard.setCancelAction("cancelWizard");
    wizard.setFinishAction("finishWizard");
    return wizard;
});
// The action for step 1
gadgetAPI.registerGadgetAction("step1", function() {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addTextField("field1", "My field1 in step1", "My content of field1 in step1");
    return gadgetForm;
});
// The action for step 2
gadgetAPI.registerGadgetAction("step2", function() {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addTextField("field1", "My field1 in step2", "My content of field1 in step2");
    return gadgetForm;
});
// The cancel action
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});
// The finish action
gadgetAPI.registerGadgetAction("finishWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();
```

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// The wizard
gadgetAPI.registerGadgetAction("startWizard", function() {
    const wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle("myWizard");
    const step1 = gadgetAPI.getWizardStepInstance("step1", "myStep1", {gadgetScript: "Gadget_Wizard_Simple", gadgetAction: "step1"});
    const step2 = gadgetAPI.getWizardStepInstance("step2", "myStep2", {gadgetScript: "Gadget_Wizard_Simple", gadgetAction: "step2"});
    wizard.addStep(step1);
    wizard.addStep(step2);
    wizard.setCancelAction("cancelWizard");
    wizard.setFinishAction("finishWizard");
    return wizard;
});
// The action for step 1
gadgetAPI.registerGadgetAction("step1", function() {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addTextField("field1", "My field1 in step1", "My content of field1 in step1");
    return gadgetForm;
});
// The action for step 2
gadgetAPI.registerGadgetAction("step2", function() {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addTextField("field1", "My field1 in step2", "My content of field1 in step2");
    return gadgetForm;
});
// The cancel action
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});
// The finish action
gadgetAPI.registerGadgetAction("finishWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();
### Zusätzliche Hinweise zum Beispiel


#### Platzierung der Navigation

Ohne Angabe der Platzierung der Navigation für den Wizard wird diese standardmäßig auf der linken Seite dargestellt. Mit der Methode *showNavigation* kann die Platzierung nach oben geändert werden, in diesem Fall wäre auf dem Wizard-Objekt z.B. folgende Zusatzkonfiguration anzugeben:


```javascript
wizard.showNavigation({
    enable: true,
    position: "top"
});
```

wizard.showNavigation({
    enable: true,
    position: "top"
});Das Aussehen wäre dann wie folgt:


![wizard-3](../assets/img/wizard-3.png)

Abb. 110 - Wizard, Navigation oben


#### Anzeige von Zusatzinformationen

Mit der Methode *showInfoContent* kann für den Wizard die Platzierung zusätzlicher Informationen angegeben werden. Zusätzliche Informationen können dann für jeden Schritt über die Methode *addInfo* hinzugefügt werden. Die Konfiguration für den Wizard wäre in diesem Fall z.B.:


```javascript
wizard.showInfoContent({
    enable: true,
    position: "top",
    width: "50%"
});
```

wizard.showInfoContent({
    enable: true,
    position: "top",
    width: "50%"
});Für den jeweiligen Schritt kann dann z.B. angegeben werden:


```javascript
step1.addInfo({
    title: "A title for this info",
    text: "An additional text for this info",
    html: "An additional html content for this info"
});
```

step1.addInfo({
    title: "A title for this info",
    text: "An additional text for this info",
    html: "An additional html content for this info"
});Das Aussehen wäre dann wie folgt:


![wizard-4](../assets/img/wizard-4.png)

Abb. 111 - Wizard, Info Inhalt


#### Definition von Schritten

Für jeden Schritt wird ein Objekt vom Typ *WizardStep* instanziiert. Der WizardStep erwartet für die Konfiguration mindestens drei Parameter:

- Eine eindeutige Kennung
- Einen Bezeichner (dieser wird in der Navigation angezeigt)
- Eine Gadget-Konfiguration (dieses Gadget wird in jedem Schritt gerendert), dabei kann die gadgetAction in demselben Skript registriert werden (wie im obigen Beispiel) oder Schritte können in zusätzliche Skripte ausgelagert werden

Soll in einem Schritt auf die Daten des vorherigen Schrittes zugegriffen werden, kann z.B. wie folgt vorgegangen werden (Schritt 2 des o.a. Beispiels):


```javascript
gadgetAPI.registerGadgetAction("step2", function(gadgetContext) {
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    util.out("wizard data from step 1: " + JSON.stringify(wizardData));
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addTextField("field1", "My field1 in step2", "My content of field1 in step2");
    return gadgetForm;
});
```

gadgetAPI.registerGadgetAction("step2", function(gadgetContext) {
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    util.out("wizard data from step 1: " + JSON.stringify(wizardData));
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addTextField("field1", "My field1 in step2", "My content of field1 in step2");
    return gadgetForm;
});
## Weitere Beispiele


### Beispiel 1: Einfacher Beispiel-Wizard mit mehreren Schritten


#### Allgemeines

Dieser Wizard kann z.B. als beliebige benutzerdefinierte Aktion von Typ *Gadget* verwendet werden:

- gadgetConfig={gadgetScript: 'Gadget_Wizard_Example', gadgetAction: 'startWizard'}


#### Schritte


##### Schritt 1

In diesem Schritt wird ein HTML-Gadget dargestellt, bei dem zusätzliche Informationen angezeigt werden (*addInfo*):


![wizard-5](../assets/img/wizard-5.png)

Abb. 112 - Beispiel-Wizard, Schritt 1


##### Schritt 2

In diesem Schritt wird ein Form-Gadget mit einer einfachen Auswahlliste dargestellt:


![wizard-6](../assets/img/wizard-6.png)

Abb. 113 - Beispiel-Wizard, Schritt 2

Erfolgt in diesem Schritt keine Auswahl, wird eine Fehlermeldung ausgegeben, die Prüfung erfolgt per *FormValidator*:


![wizard-7](../assets/img/wizard-7.png)

Abb. 114 - Beispiel-Wizard, Schritt 2, Fehlermeldung


##### Schritt 3

In diesem Schritt wird ein Form-Gadget dargestellt. Im Gadget erfolgt die Prüfung der zuvor erfassten Daten (aus Schritt 2), in Abhängigkeit der erfassten Daten wird eine weitere einfache Auswahlliste dargestellt:


![wizard-8](../assets/img/wizard-8.png)

Abb. 115 - Beispiel-Wizard, Schritt 3


##### Schritt 4

In diesem Schritt wird ein HTML-Gadget dargestellt, dabei werden die zuvor erfassten Daten (aus Schritt 2 und Schritt 3) zusammengefasst:


![wizard-9](../assets/img/wizard-9.png)

Abb. 116 - Beispiel-Wizard, Schritt 4


##### Fertigstellung

Bei Abschluss des Wizard wird eine Hinweismeldung mit den zuvor erfassten Daten ausgegeben, diese Daten stehen als *contextData* zur Verfügung:


![wizard-10](../assets/img/wizard-10.png)

Abb. 117 - Beispiel-Wizard, Hinweismeldung nach Fertigstellung


#### Wizard-Skript


```javascript
/**
 * Example wizard with four steps
 * Configurable e.g. as a user-defined action of the type Gadget
 * gadgetConfig={gadgetScript: 'Gadget_Wizard_Example', gadgetAction: 'startWizard'}
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register the gadget action for starting the wizard
gadgetAPI.registerGadgetAction("startWizard", function () {
    const wizard = gadgetAPI.getWizardInstance();
    // Set a title for the wizard
    wizard.setTitle("myWizardTitle");
    // Enable the navigation and set it to the left hand side
    wizard.showNavigation({enable: true, position: "left", width: "30%"});
    // Enable the show info content
    wizard.showInfoContent({enable: true, position: "top", width: "35%"});
    // Add the steps to the wizard
    // First step is a simple html gadget
    const step1 = gadgetAPI.getWizardStepInstance(
        "step1",
        "myStep1 (HTML-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep1"
        }
    );
    step1.addInfo({
        title: "<p style='color:red;'>A title for this info (html markup is allowed)</p>",
        text: "<h2>An additional text for this info (html markup is allowed)</h2>",
        html: "An additional html content for this info, e.g. " + "<br/>" + "<li>List entry 1</li><li>List entry 2</li><li>...</li>"
    });
    wizard.addStep(step1);
    // Second step is a simple form gadget
    const step2 = gadgetAPI.getWizardStepInstance(
        "step2",
        "myStep2 (Form-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep2"
        }
    );
    wizard.addStep(step2);
    // Third step is also a form gadget which evaluates the data from the first form gadget (step2)
    const step3 = gadgetAPI.getWizardStepInstance(
        "step3",
        "myStep3 (Form-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep3"
        }
    );
    wizard.addStep(step3);
    // Fourth step is a html gadget that displays the data from the previous steps
    const step4 = gadgetAPI.getWizardStepInstance(
        "step4",
        "myStep4 (HTML-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep4"
        }
    );
    wizard.addStep(step4);
    // Set a cancel action
    wizard.setCancelAction("cancelWizard");
    // Set a finish action
    wizard.setFinishAction("finishWizard");
    // Return the wizard
    return wizard;
});

// The gadget action for the first step (the html gadget)
gadgetAPI.registerGadgetAction("startStep1", function () {
    const gadgetHtml = gadgetAPI.getHTMLInstance();
    const user = context.getAutoText("currentUser.particulars.firstName") + " " + context.getAutoText("currentUser.particulars.lastName") + ",";
    gadgetHtml.appendHtml("<h2>" + "Hello " + user + "</h2>");
    gadgetHtml.appendHtml("This is the first step of the wizard.<br/>");
    gadgetHtml.appendHtml("Only html content is displayed in this step.<br/>");
    gadgetHtml.appendHtml("Click next to second step or cancel to abort.");
    return gadgetHtml;
});

// The gadget action for the second step (the first form gadget)
gadgetAPI.registerGadgetAction("startStep2", function () {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.setAutoOverrideDefaults(true);
    gadgetForm.addHtml("This is the second step of the wizard.<br/>A form gadget is displayed in this step.<br/>Please complete the field.");
    gadgetForm.addHeadLine("Form field", {importance: 2});
    gadgetForm.addSingleSelectList('list1', "Select a country", getCountries(), false, 1).setMandatory(true);
    // Check whether a value has been selected
    gadgetForm.setFormValidator((field, gadgetForm, options) => {
        if (field.list1.value == "no") {
            // Return an error message if no value has been selected
            return gadgetForm.createFormValidatorResult(false, "Please select a country.");
        }
        else {
            // Set validation to true if a value has been selected
            return gadgetForm.createFormValidatorResult(true);
        }
    });
    return gadgetForm;
});

// The gadget action for the third step (the second form gadget)
gadgetAPI.registerGadgetAction("startStep3", function (gadgetContext) {
    // Get the wizard data for further processing
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    // Get the country selected in previous step
    const country = wizardData.step2.list1.toString();
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.setAutoOverrideDefaults(true);
    gadgetForm.addHtml("This is the third step of the wizard.<br/>A form gadget is displayed in this step.<br/>Please complete the field.");
    gadgetForm.addHeadLine("Form field", {importance: 2});
    gadgetForm.addSingleSelectList('list2', "Select a city", getCities(country), false, 1).setMandatory(true);
    return gadgetForm;
});

// The gadget action for the fourth step
gadgetAPI.registerGadgetAction("startStep4", function (gadgetContext) {
    // Get the wizard data for showing previous selections
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    const gadgetHtml = gadgetAPI.getHTMLInstance();
    const user = context.getAutoText("currentUser.particulars.firstName") + " " + context.getAutoText("currentUser.particulars.lastName") + ",";
    gadgetHtml.appendHtml("<h2>" + "Hello " + user + "</h2>");
    gadgetHtml.appendHtml("This is the fourth and last step of the wizard.<br/>");
    gadgetHtml.appendHtml("In the previous steps the following was selected:<br/><br/>");
    gadgetHtml.appendHtml("<li>" + "Selected country in Step 2: <b>" + wizardData.step2.list1.toString() + "</b></li>");
    gadgetHtml.appendHtml("<li>" + "Selected city depending on the selected country in Step 3: <b>" + wizardData.step3.list2.toString() + "</b></li>");
    return gadgetHtml;
});

// The gadget action to cancel the wizard
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});

// The gadget action to finish the wizard
gadgetAPI.registerGadgetAction("finishWizard", function (gadgetContext) {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Get the wizard data
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    // Set the context data
    const contextData = {
        selectedCountry: wizardData.step2.list1.toString(),
        selectedCity: wizardData.step3.list2.toString()
    };
    htmlGadget.setContextData(contextData);
    htmlGadget.onGadgetLoad(function () {
        // Get the context data
        const contextData = documentsContext.getGadgetContext().getContextData();
        // Close the wizard
        documentsContext.closeDialog();
        // Open a new dialog with the wizard step data
        const message = "The values of the wizard can still be made available after completion (as contextData):";
        const values = "<li>Country: <b>" + contextData.selectedCountry + "</b></li>" + "<li>City: <b>" + contextData.selectedCity + "</b></li>";
        documentsContext.openHtmlDialog("Message", message + values);
    });
    return htmlGadget;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();

// Helper functions for getting example data
function getCountries() {
    return [
        ['no', 'Please select...'],
        ['Austria', 'Austria'],
        ['France', 'France'],
        ['Germany', 'Germany'],
        ['Italy', 'Italy'],
        ['Spain', 'Spain'],
        ['Switzerland', 'Switzerland'],
        ['United Kingdom', 'United Kingdom']
    ]
}

function getCities(country) {
    switch(country) {
        case 'Austria':
            return [
                ['Vienna', 'Vienna'],
                ['Graz', 'Graz'],
                ['Linz', 'Linz']
            ];
        case 'France':
            return [
                ['Paris', 'Paris'],
                ['Marseille', 'Marseille'],
                ['Lyon', 'Lyon']
            ];
        case 'Germany':
            return [
                ['Berlin', 'Berlin'],
                ['Munich', 'Munich'],
                ['Hamburg', 'Hamburg']
            ];
        case 'Italy':
            return [
                ['Roma', 'Roma'],
                ['Milan', 'Milan'],
                ['Naples', 'Naples']
            ];
        case 'Spain':
            return [
                ['Madrid', 'Madrid'],
                ['Barcelona', 'Barcelona'],
                ['Valencia', 'Valencia']
            ];
        case 'Switzerland':
            return [
                ['Zurich', 'Zurich'],
                ['Geneva', 'Geneva'],
                ['Basel', 'Basel']
            ];
        case 'United Kingdom':
            return [
                ['London', 'London'],
                ['Birmingham', 'Birmingham'],
                ['Liverpool', 'Liverpool']
            ];
    }
}
```

/**
 * Example wizard with four steps
 * Configurable e.g. as a user-defined action of the type Gadget
 * gadgetConfig={gadgetScript: 'Gadget_Wizard_Example', gadgetAction: 'startWizard'}
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register the gadget action for starting the wizard
gadgetAPI.registerGadgetAction("startWizard", function () {
    const wizard = gadgetAPI.getWizardInstance();
    // Set a title for the wizard
    wizard.setTitle("myWizardTitle");
    // Enable the navigation and set it to the left hand side
    wizard.showNavigation({enable: true, position: "left", width: "30%"});
    // Enable the show info content
    wizard.showInfoContent({enable: true, position: "top", width: "35%"});
    // Add the steps to the wizard
    // First step is a simple html gadget
    const step1 = gadgetAPI.getWizardStepInstance(
        "step1",
        "myStep1 (HTML-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep1"
        }
    );
    step1.addInfo({
        title: "<p style='color:red;'>A title for this info (html markup is allowed)</p>",
        text: "<h2>An additional text for this info (html markup is allowed)</h2>",
        html: "An additional html content for this info, e.g. " + "<br/>" + "<li>List entry 1</li><li>List entry 2</li><li>...</li>"
    });
    wizard.addStep(step1);
    // Second step is a simple form gadget
    const step2 = gadgetAPI.getWizardStepInstance(
        "step2",
        "myStep2 (Form-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep2"
        }
    );
    wizard.addStep(step2);
    // Third step is also a form gadget which evaluates the data from the first form gadget (step2)
    const step3 = gadgetAPI.getWizardStepInstance(
        "step3",
        "myStep3 (Form-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep3"
        }
    );
    wizard.addStep(step3);
    // Fourth step is a html gadget that displays the data from the previous steps
    const step4 = gadgetAPI.getWizardStepInstance(
        "step4",
        "myStep4 (HTML-Gadget)",
        {
            gadgetScript: "Gadget_Wizard_Example",
            gadgetAction: "startStep4"
        }
    );
    wizard.addStep(step4);
    // Set a cancel action
    wizard.setCancelAction("cancelWizard");
    // Set a finish action
    wizard.setFinishAction("finishWizard");
    // Return the wizard
    return wizard;
});

// The gadget action for the first step (the html gadget)
gadgetAPI.registerGadgetAction("startStep1", function () {
    const gadgetHtml = gadgetAPI.getHTMLInstance();
    const user = context.getAutoText("currentUser.particulars.firstName") + " " + context.getAutoText("currentUser.particulars.lastName") + ",";
    gadgetHtml.appendHtml("<h2>" + "Hello " + user + "</h2>");
    gadgetHtml.appendHtml("This is the first step of the wizard.<br/>");
    gadgetHtml.appendHtml("Only html content is displayed in this step.<br/>");
    gadgetHtml.appendHtml("Click next to second step or cancel to abort.");
    return gadgetHtml;
});

// The gadget action for the second step (the first form gadget)
gadgetAPI.registerGadgetAction("startStep2", function () {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.setAutoOverrideDefaults(true);
    gadgetForm.addHtml("This is the second step of the wizard.<br/>A form gadget is displayed in this step.<br/>Please complete the field.");
    gadgetForm.addHeadLine("Form field", {importance: 2});
    gadgetForm.addSingleSelectList('list1', "Select a country", getCountries(), false, 1).setMandatory(true);
    // Check whether a value has been selected
    gadgetForm.setFormValidator((field, gadgetForm, options) => {
        if (field.list1.value == "no") {
            // Return an error message if no value has been selected
            return gadgetForm.createFormValidatorResult(false, "Please select a country.");
        }
        else {
            // Set validation to true if a value has been selected
            return gadgetForm.createFormValidatorResult(true);
        }
    });
    return gadgetForm;
});

// The gadget action for the third step (the second form gadget)
gadgetAPI.registerGadgetAction("startStep3", function (gadgetContext) {
    // Get the wizard data for further processing
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    // Get the country selected in previous step
    const country = wizardData.step2.list1.toString();
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.setAutoOverrideDefaults(true);
    gadgetForm.addHtml("This is the third step of the wizard.<br/>A form gadget is displayed in this step.<br/>Please complete the field.");
    gadgetForm.addHeadLine("Form field", {importance: 2});
    gadgetForm.addSingleSelectList('list2', "Select a city", getCities(country), false, 1).setMandatory(true);
    return gadgetForm;
});

// The gadget action for the fourth step
gadgetAPI.registerGadgetAction("startStep4", function (gadgetContext) {
    // Get the wizard data for showing previous selections
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    const gadgetHtml = gadgetAPI.getHTMLInstance();
    const user = context.getAutoText("currentUser.particulars.firstName") + " " + context.getAutoText("currentUser.particulars.lastName") + ",";
    gadgetHtml.appendHtml("<h2>" + "Hello " + user + "</h2>");
    gadgetHtml.appendHtml("This is the fourth and last step of the wizard.<br/>");
    gadgetHtml.appendHtml("In the previous steps the following was selected:<br/><br/>");
    gadgetHtml.appendHtml("<li>" + "Selected country in Step 2: <b>" + wizardData.step2.list1.toString() + "</b></li>");
    gadgetHtml.appendHtml("<li>" + "Selected city depending on the selected country in Step 3: <b>" + wizardData.step3.list2.toString() + "</b></li>");
    return gadgetHtml;
});

// The gadget action to cancel the wizard
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});

// The gadget action to finish the wizard
gadgetAPI.registerGadgetAction("finishWizard", function (gadgetContext) {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Get the wizard data
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    // Set the context data
    const contextData = {
        selectedCountry: wizardData.step2.list1.toString(),
        selectedCity: wizardData.step3.list2.toString()
    };
    htmlGadget.setContextData(contextData);
    htmlGadget.onGadgetLoad(function () {
        // Get the context data
        const contextData = documentsContext.getGadgetContext().getContextData();
        // Close the wizard
        documentsContext.closeDialog();
        // Open a new dialog with the wizard step data
        const message = "The values of the wizard can still be made available after completion (as contextData):";
        const values = "<li>Country: <b>" + contextData.selectedCountry + "</b></li>" + "<li>City: <b>" + contextData.selectedCity + "</b></li>";
        documentsContext.openHtmlDialog("Message", message + values);
    });
    return htmlGadget;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();

// Helper functions for getting example data
function getCountries() {
    return [
        ['no', 'Please select...'],
        ['Austria', 'Austria'],
        ['France', 'France'],
        ['Germany', 'Germany'],
        ['Italy', 'Italy'],
        ['Spain', 'Spain'],
        ['Switzerland', 'Switzerland'],
        ['United Kingdom', 'United Kingdom']
    ]
}

function getCities(country) {
    switch(country) {
        case 'Austria':
            return [
                ['Vienna', 'Vienna'],
                ['Graz', 'Graz'],
                ['Linz', 'Linz']
            ];
        case 'France':
            return [
                ['Paris', 'Paris'],
                ['Marseille', 'Marseille'],
                ['Lyon', 'Lyon']
            ];
        case 'Germany':
            return [
                ['Berlin', 'Berlin'],
                ['Munich', 'Munich'],
                ['Hamburg', 'Hamburg']
            ];
        case 'Italy':
            return [
                ['Roma', 'Roma'],
                ['Milan', 'Milan'],
                ['Naples', 'Naples']
            ];
        case 'Spain':
            return [
                ['Madrid', 'Madrid'],
                ['Barcelona', 'Barcelona'],
                ['Valencia', 'Valencia']
            ];
        case 'Switzerland':
            return [
                ['Zurich', 'Zurich'],
                ['Geneva', 'Geneva'],
                ['Basel', 'Basel']
            ];
        case 'United Kingdom':
            return [
                ['London', 'London'],
                ['Birmingham', 'Birmingham'],
                ['Liverpool', 'Liverpool']
            ];
    }
}Download: [Gadget_Wizard_Example.js](../assets/samples/Gadget_Wizard_Example.js)


### Beispiel 2: Beispiel-Wizard "Schnellerfassung Firma"


#### Voraussetzungen

- Dieses Beispiel kann nur unter documentsOS und in Verbindung mit dem neuen relations Demo-Mandanten für documentsOS verwendet werden.
- Im Beispiel wird dargestellt, wie eine neue Firma mit Pflichtangaben und optionalen Angaben und zusätzlich optional mit Ansprechpartnern angelegt werden kann, es werden ausschließlich Form-Gadgets verwendet.
- Für das Beispiel sollte am Ordner crmAccount eine benutzerdefinierte Aktion vom Typ Gadget angelegt werden, die zugehörige Gadget-Konfiguration lautet {gadgetScript: 'Gadget_Example_createAccount', gadgetAction: 'startWizard'}
- Im ersten Schritt des Beispiels wird exemplarisch der einzugebende Name geprüft. Dafür wird ein FormValidator mit einem zusätzliche Skript verwendet, dieses Skript ist für das Beispiel mit dem Namen Example_checkCompanyName bereitzustellen, außerdem benötigt das Skript zwei Parameter vom Typ String:
pFileType
pCompanyName

Dieses zusätzliche Beispielskript könnte wie folgt aussehen:


```javascript
/**
 * Example script for checking the given company name
 * This script is called by the script Gadget_Wizard_createAccount
 * The script requires two parameters of type string: "pFileType" and "pCompanyName"
 * The script returns true if the company name does not yet exist, otherwise false
 */

const fileType = pFileType;
const companyName = pCompanyName;
const filter =  "crmCompany=\"" + companyName + "\"";
const frs = new FileResultset(fileType, filter);
if (frs && frs.size() != 0) {
    return false;
}
return true;
```

/**
 * Example script for checking the given company name
 * This script is called by the script Gadget_Wizard_createAccount
 * The script requires two parameters of type string: "pFileType" and "pCompanyName"
 * The script returns true if the company name does not yet exist, otherwise false
 */

const fileType = pFileType;
const companyName = pCompanyName;
const filter =  "crmCompany=\"" + companyName + "\"";
const frs = new FileResultset(fileType, filter);
if (frs && frs.size() != 0) {
    return false;
}
return true;Download: [Example_checkCompanyName.js](../assets/samples/Example_checkCompanyName.js)


#### Schritte


##### Schritt 1

In diesem Schritt sollen (wenige) Pflichtangaben zur Firma erfasst werden:


![wizard-11](../assets/img/wizard-11.png)

Abb. 118 - Schnellerfassung Firma, Schritt 1, Pflichtangaben

Wird ein Name angegeben, der bereits existiert, wird direkt eine Fehlermeldung ausgegeben:


![wizard-12](../assets/img/wizard-12.png)

Abb. 119 - Schnellerfassung Firma, Schritt 1, Fehlermeldung


##### Schritt 2

In diesem Schritt können optional weitere Informationen angegeben werden, wird dieser Schritt gestartet, ändert sich die Größe des Dialogfensters:


![wizard-13](../assets/img/wizard-13.png)

Abb. 120 - Schnellerfassung Firma, Schritt 2, optionale zusätzliche Firmendaten


##### Schritt 3

In diesem Schritt können optional direkt ein oder mehrere Ansprechpartner (mit wenigen Pflichtangaben) erfasst werden, wird dieser Schritt gestartet, ändert sich die Größe des Dialogfensters. Die erfassten Daten werden in einem nicht sichtbaren Feld (*hiddenField*) gespeichert. Über die entsprechenden Schaltflächen (*gadgetActionButton*) können neue Ansprechpartner erfasst bzw. erfasste Ansprechpartner wieder entfernt werden.


![wizard-14](../assets/img/wizard-14.png)

Abb. 121 - Schnellerfassung Firma, Schritt 3, optionale Ansprechpartner zur Firma


##### Fertigstellung

Bei Fertigstellung werden die zuvor eingegebenen Daten ausgewertet, eine neue Firma angelegt und zusätzlich ggf. Ansprechpartner ebenfalls angelegt und mit der neuen Firma verknüpft (Referenzfeld). Treten bei der jeweiligen Mappenanlage Fehler auf, werden diese ausgegeben. Wurde im ersten Schritt angegeben *Mappe nach Fertigstellung öffnen* (Checkbox), wird die Mappe direkt geöffnet.


#### Wizard-Skript


```javascript
/**
 * Example wizard for creating a company with mandatory and optional data
 * Requires the relations demo principal for documentsOS
 * Configurable e.g. as a user-defined action on the folder crmAccount of the type Gadget
 * gadgetConfig={gadgetScript: 'Gadget_Example_createAccount', gadgetAction: 'startWizard'}
 * Also requires the script "Example_checkCompanyName" with the parameters pFileType and pCompanyName
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action for starting the wizard
gadgetAPI.registerGadgetAction("startWizard", function () {
    const wizard = gadgetAPI.getWizardInstance();
    // Set a title for the wizard
    wizard.setTitle(context.getLocaleValue("de:Schnellerfassung Firma;en:Quick entry account"));
    // Enable the navigation and set it to the left hand side
    wizard.showNavigation({enable: true, position: "left", width: "30%"});
    // First step for mandatory data
    const step1 = gadgetAPI.getWizardStepInstance(
        "step1",
        context.getLocaleValue("de:Pflichtangaben;en:Mandatory data"),
        {
            gadgetScript: "Gadget_Wizard_createAccount",
            gadgetAction: "startStep1"
        }
    );
    wizard.addStep(step1);
    // Second step for optional company data
    const step2 = gadgetAPI.getWizardStepInstance(
        "step2",
        context.getLocaleValue("de:Optionale Angaben (Firmendaten);en:Optional data (company data)"),
        {
            gadgetScript: "Gadget_Wizard_createAccount",
            gadgetAction: "startStep2"
        }
    );
    wizard.addStep(step2);
    // Third step for optional contact data
    const step3 = gadgetAPI.getWizardStepInstance(
        "step3",
        context.getLocaleValue("de:Optionale Angaben (Ansprechpartner);en:Optional data (contact data)"),
        {
            gadgetScript: "Gadget_Wizard_createAccount",
            gadgetAction: "startStep3"
        }
    );
    wizard.addStep(step3);
    // Set a cancel action
    wizard.setCancelAction("cancelWizard");
    // Set a finish action
    wizard.setFinishAction("finishWizard");
    // Set navigation settings
    wizard.showNavigation({
        enable: true,
        position: "left",
        width: "25%"
    });
    // Return the wizard
    return wizard;
});

// The gadget action for the first step (mandatory data)
gadgetAPI.registerGadgetAction("startStep1", function () {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addHeadLine(context.getLocaleValue("de:Bitte geben Sie die Pflichtangaben für die neue Firma an:;en:Please enter the mandatory information for the new company:"), {importance: 2});
    gadgetForm.addTextField("crmCompany", context.getLocaleValue("de:Firmenname;en:Company")).setMandatory(true);
    gadgetForm.addSingleSelectList("crmStatus", context.getLocaleValue("de:Status;en:Status"), getEnumList("crmAccount", "crmStatus"), false, 1).setMandatory(true);
    gadgetForm.addSingleSelectList("crmRating", context.getLocaleValue("de:Bewertung;en:Rating"), getEnumList("crmAccount", "crmRating"), false, 1).setMandatory(true).setInLine(true);
    gadgetForm.addHeadLine(context.getLocaleValue("de:Soll die Firma nach Erstellung angezeigt werden?;en:Should the company be displayed after creation?"), {importance: 2});
    gadgetForm.addCheckbox("openFile", context.getLocaleValue("de:Mappe nach Fertigstellung öffnen;en:Open file after completion"));
    // Set a form validator to check if the given company name already exists
	gadgetForm.setFormValidator((field, gadgetForm, options) => {
		const documentsContext = options.documentsContext;
		const validatorResult = documentsContext.executeScript("Example_checkCompanyName", {
            pFileType: "crmAccount",
            pCompanyName: gadgetForm.getFormData().crmCompany[0]
		});
		const retVal = validatorResult;
		if (retVal == "false") {
            var msg = "There is already a company with the name <b>" + gadgetForm.getFormData().crmCompany[0] + "</b>.";
            if (documentsContext.getUserContext().language == "de") {
                msg = "Es gibt bereits eine Firma mit dem Namen <b>" + gadgetForm.getFormData().crmCompany[0] + "</b>.";
            }
            // Return an error message if the company already exists
			return gadgetForm.createFormValidatorResult(false, msg);
		}
		return gadgetForm.createFormValidatorResult(true);

	});
    gadgetForm.setDialogOptions({
        width: 600,
        height: 400
    });
    return gadgetForm;
});

// The gadget action for the second step (optional company data)
gadgetAPI.registerGadgetAction("startStep2", function () {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addHeadLine(context.getLocaleValue("de:Nachfolgend können Sie optionale Daten angeben.;en:You can enter optional data below."), {importance: 2});
    gadgetForm.addHorizontalRuler("hr1", context.getLocaleValue("de:Allgemeines;en:General"));
    gadgetForm.addTextField("crmDivision", context.getLocaleValue("de:Abteilung;en:Division"));
    gadgetForm.addSingleSelectList("crmOwner", context.getLocaleValue("de:Betreuer;en:AccountManager"), getUsers()).setInLine(true).setValue(context.getAutoText("%userLogin%"));
    gadgetForm.addHorizontalRuler("hr2", context.getLocaleValue("de:Kommunikation;en:Communication"));
    gadgetForm.addTextField("crmPhone", context.getLocaleValue("de:Telefon;en:Phone"));
    gadgetForm.addTextField("crmFax", context.getLocaleValue("de:Fax;en:Fax")).setInLine(true);
    gadgetForm.addURLField("crmWebsite", context.getLocaleValue("de:Website;en:Website")).setInLine(true);
    gadgetForm.addHorizontalRuler("hr3", context.getLocaleValue("de:Weitere Firmeninformationen;en:Further information"));
    gadgetForm.addSingleSelectList("crmIndustry", context.getLocaleValue("de:Branche;en:Industry"), getEnumList("crmAccount", "crmIndustry"));
    gadgetForm.addNumberField("crmRevenue", context.getLocaleValue("de:Umsatz;en:Revenue")).setInLine(true);
    gadgetForm.addNumberField("crmEmployees", context.getLocaleValue("de:Mitarbeiter;en:Employees")).setInLine(true);
    gadgetForm.addTextField("crmNumber", context.getLocaleValue("de:Kundennummer;en:Account number")).setInLine(true);
    gadgetForm.addTextArea("crmDescription", context.getLocaleValue("de:Beschreibung;en:Description"));
    gadgetForm.addHorizontalRuler("hr4", context.getLocaleValue("de:Hauptanschrift;en:Address"));
    gadgetForm.addTextField("crmStreet", context.getLocaleValue("de:Straße/Nr.;en:Street"));
    gadgetForm.addTextField("crmCountry", context.getLocaleValue("de:Land;en:Country")).setInLine(true);
    gadgetForm.addTextField("crmAddressAnnex", context.getLocaleValue("de:Adresszusatz;en:Address annex")).setInLine(true);
    gadgetForm.addTextField("crmRegion", context.getLocaleValue("de:Region;en:Region")).setInLine(true);
    gadgetForm.addTextField("crmZip", context.getLocaleValue("de:PLZ;en:Zip/Postal code"));
    gadgetForm.addTextField("crmCity", context.getLocaleValue("de:Ort;en:City")).setInLine(true);
    gadgetForm.addTextField("crmPostboxZip", context.getLocaleValue("de:PLZ Postfach;en:Postbox ZIP")).setInLine(true);
    gadgetForm.addTextField("crmPostbox", context.getLocaleValue("de:Postfach;en:Postbox")).setInLine(true);
    gadgetForm.setDialogOptions({
        width: 1000,
        height: 800
    });
    return gadgetForm;
});

// The gadget action for the third step (optional contact data)
gadgetAPI.registerGadgetAction("startStep3", function (gadgetContext) {
    // Get the form parameters
    const formParams = gadgetContext.formParams;
    // Get the event
    const event = gadgetContext.gadgetEvent;
    // Prepare a field group
    const fieldGroup = formParams && formParams.fieldGroup ? JSON.parse(formParams.fieldGroup[0]) : [];
    const gadgetForm = gadgetAPI.getFormInstance();
    // Set the autoOverrideDefaults flag
    gadgetForm.setAutoOverrideDefaults({active: true, clearUnsubmitted: false});
    gadgetForm.addHeadLine(context.getLocaleValue("de:Nachfolgend können Sie optional Ansprechpartner zur neuen Firma angeben.;en:Below you can optionally specify contact persons for the new Company."), {importance: 2});
    // Add a gadget action button to create a new field group for contact data
    gadgetForm.addGadgetActionButton(
        "addContact",
        context.getLocaleValue("de:Ansprechpartner hinzufügen;en:Add contact person"),
        {
            gadgetEvent: "addContact"
        },
        {
            validateForm: false,
            icon: "mdi:mdi-account-plus;",
            tooltip: context.getLocaleValue("de:Bei Klick kann ein neuer Ansprechpartner angelegt werden;en:Click to create a new contact person.")
        }
    ).setWidth("200");
    // Create an unique id for a new contact
    if(event === "addContact") {
        fieldGroup.push(util.getUniqueId());
    }
    // Remove an existing contact using the separator "___"
    if(event === "removeContact") {
        const idx = fieldGroup.indexOf(gadgetContext.gadgetParams.field.split("___")[0]);
        fieldGroup.splice(idx, 1);
    }
    // Call the addFieldGroup-function to create a new form for the contact data
    fieldGroup.forEach((groupName, idx) => addFieldGroup(gadgetForm, (n) => groupName + "___" + n, idx));
    // Store the data in a new hidden field
    const fieldGroupJSON = JSON.stringify(fieldGroup);
    gadgetForm.addHiddenField("fieldGroup", fieldGroupJSON);
    formParams.fieldGroup = [fieldGroupJSON];
    gadgetForm.setDialogOptions({
        width: 1100,
        height: 500
    });
    return gadgetForm;
});

// The gadget action to cancel the wizard (close the dialog)
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});

// The gadget action to finish the wizard
gadgetAPI.registerGadgetAction("finishWizard", function (gadgetContext) {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Get the wizard data for new company
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    const companyData = Object.assign(wizardData.step1, wizardData.step2);
    // Get the data for contact(s)
    const contactData = getContactData(gadgetContext.formParams);
    // Create the new company using the storeData-function
    const newCompanyId = storeData("crmAccount", companyData, null);
    var contextData = {};
    // Close the dialog and return a message when an error occurred while creating the company
    if (!newCompanyId) {
        contextData.title = context.getLocaleValue("de:Fehler;en:Error");
        contextData.msg = context.getLocaleValue("de:Es ist ein Fehler aufgetreten, bitte wenden Sie sich an den Administrator.;en:An error has occurred, please contact the administrator.") + "<br/>" + context.getLocaleValue("de:Die neue Firma wurde nicht angelegt.;en:The new company was not created.")
        htmlGadget.setContextData(contextData);
        htmlGadget.onGadgetLoad(function () {
            const contextData = documentsContext.getGadgetContext().getContextData();
            documentsContext.closeDialog();
            documentsContext.openHtmlDialog(contextData.title, contextData.msg);
        });
    }
    else {
        // Create the contacts using the storeData-function
        var errors = "";
        contactData.forEach(contact => {
            if (!storeData("crmContact", contact, newCompanyId)) {
                errors += "<li>" + contact.crmFirstName + " " + contact.crmName + " (" + contact.crmEmail + ")" + "</li>";
            }
        });
        // Set context data if errors occured while creating contact(s)
        if (errors.length > 0) {
            contextData.title = context.getLocaleValue("de:Hinweis;en:Note");
            contextData.msg = context.getLocaleValue("de:Die neue Firma wurde angelegt, aber folgende Ansprechpartner konnten nicht angelegt werden:;en:The new company has been created, but the following contact persons could not be created:") + errors;
            htmlGadget.setContextData(contextData);
        }
        // Set context data if the open file checkbox was selected in step 1
        if (wizardData.step1.openFile == "on") {
            contextData.crmAccountId = newCompanyId;
            htmlGadget.setContextData(contextData);
        }
        htmlGadget.onGadgetLoad(function () {
            const contextData = documentsContext.getGadgetContext().getContextData();
            documentsContext.closeDialog();
            // Check if the open file option was selected in step 1 and open the new company file
            if (contextData.crmAccountId) {
                documentsContext.openFileView(contextData.crmAccountId);
                // Open a dialog if errors occured while creating contact(s)
                if (contextData.title) {
                    documentsContext.openHtmlDialog(contextData.title, contextData.msg);
                }
            }
            else if (contextData.title) {
                documentsContext.openMessageDialog(contextData.title, contextData.msg);
            }
            // Close only the dialog if the open file option was not selected in step 1 and no errors occured
            else {
                documentsContext.closeDialog();
            }
        });
    }
    return htmlGadget;
});

// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();

// Helper functions
// Get the technical and ergonimic values of enumeration lists
function getEnumList(fileType, field) {
    const lang = context.getClientLang();
    const data = [];
    const enumKeys = [];
    const enumLocales = [];
    const list = context.getEnumLocaleValues(fileType, field, enumKeys, enumLocales, lang);
    if (list.length == 0) {
        for (var i = 0; i < enumKeys.length; i++)
        data.push([enumKeys[i], enumLocales[i]]);
    }
    return data;
}

// Get an user list
function getUsers() {
    const userList = [];
	const suIt = context.getSystemUsers(false, true);
	for (var su = suIt.first(); su; su = suIt.next()) {
		userList.push([su.login, su.lastName + ", " + su.firstName]);
	}
	return userList;
}

// Create account and contact file(s)
function storeData(fileType, data, companyId) {
    const file = context.createFile(fileType);
    if (!file) {
        return false;
    }
    const keys = Object.keys(data);
    keys.forEach(key => {
        if (file.hasField(key)) {
            file[key] = data[key];
        }
    });
    if (companyId) {
        const companyFile = context.getFileById(companyId);
        file.setReferenceFile("crmCompany", companyFile);
    }
    file.sync();
    return file.getid();
}

// Create a field group (for a new contact row)
function addFieldGroup(gadgetForm, fieldName, idx) {
    gadgetForm.addPlainText((idx + 1) + ". ").setWidth(20);
    gadgetForm.addSingleSelectList(fieldName("crmSalutation"), context.getLocaleValue("de:Anrede;en:Salutation"), getEnumList("crmContact", "crmSalutation")).setInLine(true).setWidth(70);
    gadgetForm.addTextField(fieldName("crmFirstName"), context.getLocaleValue("de:Vorname;en:First name")).setInLine(true).setWidth(140).setMandatory(true);
    gadgetForm.addTextField(fieldName("crmName"), context.getLocaleValue("de:Nachname;en:Last name")).setInLine(true).setWidth(140).setMandatory(true);
    gadgetForm.addEMailField(fieldName("crmEmail"), context.getLocaleValue("de:E-Mail;en:Email")).setInLine(true).setWidth(230).setMandatory(true);
    gadgetForm.addGadgetActionButton(fieldName("remove"), "",
    {
        gadgetEvent: "removeContact",
        field: fieldName("remove")
    },
    {
        validateForm: false,
        icon: "mdi:mdi-trash-can-outline",
        tooltip: context.getLocaleValue("de:Ansprechpartner löschen;en:Delete contact"),
        labelPadding: true
    }).setInLine(true).setWidth(20);
}

// Prepare added contact data for file creation
function getContactData(formParams) {
    var arr, groupId, attr;
    const fieldGroup = formParams && formParams.fieldGroup ? JSON.parse(formParams.fieldGroup[0]) : [];
    const groups = {};
    delete formParams.fieldGroup;
    Object.keys(formParams).forEach(key => {
        arr = key.split("___");
        groupId = arr[0];
        attr = arr[1];
        !groups[groupId] && (groups[groupId] = {});
        groups[groupId][attr] = formParams[key][0];
    });
    return fieldGroup.map(n => groups[n]);
}
```

/**
 * Example wizard for creating a company with mandatory and optional data
 * Requires the relations demo principal for documentsOS
 * Configurable e.g. as a user-defined action on the folder crmAccount of the type Gadget
 * gadgetConfig={gadgetScript: 'Gadget_Example_createAccount', gadgetAction: 'startWizard'}
 * Also requires the script "Example_checkCompanyName" with the parameters pFileType and pCompanyName
**/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action for starting the wizard
gadgetAPI.registerGadgetAction("startWizard", function () {
    const wizard = gadgetAPI.getWizardInstance();
    // Set a title for the wizard
    wizard.setTitle(context.getLocaleValue("de:Schnellerfassung Firma;en:Quick entry account"));
    // Enable the navigation and set it to the left hand side
    wizard.showNavigation({enable: true, position: "left", width: "30%"});
    // First step for mandatory data
    const step1 = gadgetAPI.getWizardStepInstance(
        "step1",
        context.getLocaleValue("de:Pflichtangaben;en:Mandatory data"),
        {
            gadgetScript: "Gadget_Wizard_createAccount",
            gadgetAction: "startStep1"
        }
    );
    wizard.addStep(step1);
    // Second step for optional company data
    const step2 = gadgetAPI.getWizardStepInstance(
        "step2",
        context.getLocaleValue("de:Optionale Angaben (Firmendaten);en:Optional data (company data)"),
        {
            gadgetScript: "Gadget_Wizard_createAccount",
            gadgetAction: "startStep2"
        }
    );
    wizard.addStep(step2);
    // Third step for optional contact data
    const step3 = gadgetAPI.getWizardStepInstance(
        "step3",
        context.getLocaleValue("de:Optionale Angaben (Ansprechpartner);en:Optional data (contact data)"),
        {
            gadgetScript: "Gadget_Wizard_createAccount",
            gadgetAction: "startStep3"
        }
    );
    wizard.addStep(step3);
    // Set a cancel action
    wizard.setCancelAction("cancelWizard");
    // Set a finish action
    wizard.setFinishAction("finishWizard");
    // Set navigation settings
    wizard.showNavigation({
        enable: true,
        position: "left",
        width: "25%"
    });
    // Return the wizard
    return wizard;
});

// The gadget action for the first step (mandatory data)
gadgetAPI.registerGadgetAction("startStep1", function () {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addHeadLine(context.getLocaleValue("de:Bitte geben Sie die Pflichtangaben für die neue Firma an:;en:Please enter the mandatory information for the new company:"), {importance: 2});
    gadgetForm.addTextField("crmCompany", context.getLocaleValue("de:Firmenname;en:Company")).setMandatory(true);
    gadgetForm.addSingleSelectList("crmStatus", context.getLocaleValue("de:Status;en:Status"), getEnumList("crmAccount", "crmStatus"), false, 1).setMandatory(true);
    gadgetForm.addSingleSelectList("crmRating", context.getLocaleValue("de:Bewertung;en:Rating"), getEnumList("crmAccount", "crmRating"), false, 1).setMandatory(true).setInLine(true);
    gadgetForm.addHeadLine(context.getLocaleValue("de:Soll die Firma nach Erstellung angezeigt werden?;en:Should the company be displayed after creation?"), {importance: 2});
    gadgetForm.addCheckbox("openFile", context.getLocaleValue("de:Mappe nach Fertigstellung öffnen;en:Open file after completion"));
    // Set a form validator to check if the given company name already exists
	gadgetForm.setFormValidator((field, gadgetForm, options) => {
		const documentsContext = options.documentsContext;
		const validatorResult = documentsContext.executeScript("Example_checkCompanyName", {
            pFileType: "crmAccount",
            pCompanyName: gadgetForm.getFormData().crmCompany[0]
		});
		const retVal = validatorResult;
		if (retVal == "false") {
            var msg = "There is already a company with the name <b>" + gadgetForm.getFormData().crmCompany[0] + "</b>.";
            if (documentsContext.getUserContext().language == "de") {
                msg = "Es gibt bereits eine Firma mit dem Namen <b>" + gadgetForm.getFormData().crmCompany[0] + "</b>.";
            }
            // Return an error message if the company already exists
			return gadgetForm.createFormValidatorResult(false, msg);
		}
		return gadgetForm.createFormValidatorResult(true);

	});
    gadgetForm.setDialogOptions({
        width: 600,
        height: 400
    });
    return gadgetForm;
});

// The gadget action for the second step (optional company data)
gadgetAPI.registerGadgetAction("startStep2", function () {
    const gadgetForm = gadgetAPI.getFormInstance();
    gadgetForm.addHeadLine(context.getLocaleValue("de:Nachfolgend können Sie optionale Daten angeben.;en:You can enter optional data below."), {importance: 2});
    gadgetForm.addHorizontalRuler("hr1", context.getLocaleValue("de:Allgemeines;en:General"));
    gadgetForm.addTextField("crmDivision", context.getLocaleValue("de:Abteilung;en:Division"));
    gadgetForm.addSingleSelectList("crmOwner", context.getLocaleValue("de:Betreuer;en:AccountManager"), getUsers()).setInLine(true).setValue(context.getAutoText("%userLogin%"));
    gadgetForm.addHorizontalRuler("hr2", context.getLocaleValue("de:Kommunikation;en:Communication"));
    gadgetForm.addTextField("crmPhone", context.getLocaleValue("de:Telefon;en:Phone"));
    gadgetForm.addTextField("crmFax", context.getLocaleValue("de:Fax;en:Fax")).setInLine(true);
    gadgetForm.addURLField("crmWebsite", context.getLocaleValue("de:Website;en:Website")).setInLine(true);
    gadgetForm.addHorizontalRuler("hr3", context.getLocaleValue("de:Weitere Firmeninformationen;en:Further information"));
    gadgetForm.addSingleSelectList("crmIndustry", context.getLocaleValue("de:Branche;en:Industry"), getEnumList("crmAccount", "crmIndustry"));
    gadgetForm.addNumberField("crmRevenue", context.getLocaleValue("de:Umsatz;en:Revenue")).setInLine(true);
    gadgetForm.addNumberField("crmEmployees", context.getLocaleValue("de:Mitarbeiter;en:Employees")).setInLine(true);
    gadgetForm.addTextField("crmNumber", context.getLocaleValue("de:Kundennummer;en:Account number")).setInLine(true);
    gadgetForm.addTextArea("crmDescription", context.getLocaleValue("de:Beschreibung;en:Description"));
    gadgetForm.addHorizontalRuler("hr4", context.getLocaleValue("de:Hauptanschrift;en:Address"));
    gadgetForm.addTextField("crmStreet", context.getLocaleValue("de:Straße/Nr.;en:Street"));
    gadgetForm.addTextField("crmCountry", context.getLocaleValue("de:Land;en:Country")).setInLine(true);
    gadgetForm.addTextField("crmAddressAnnex", context.getLocaleValue("de:Adresszusatz;en:Address annex")).setInLine(true);
    gadgetForm.addTextField("crmRegion", context.getLocaleValue("de:Region;en:Region")).setInLine(true);
    gadgetForm.addTextField("crmZip", context.getLocaleValue("de:PLZ;en:Zip/Postal code"));
    gadgetForm.addTextField("crmCity", context.getLocaleValue("de:Ort;en:City")).setInLine(true);
    gadgetForm.addTextField("crmPostboxZip", context.getLocaleValue("de:PLZ Postfach;en:Postbox ZIP")).setInLine(true);
    gadgetForm.addTextField("crmPostbox", context.getLocaleValue("de:Postfach;en:Postbox")).setInLine(true);
    gadgetForm.setDialogOptions({
        width: 1000,
        height: 800
    });
    return gadgetForm;
});

// The gadget action for the third step (optional contact data)
gadgetAPI.registerGadgetAction("startStep3", function (gadgetContext) {
    // Get the form parameters
    const formParams = gadgetContext.formParams;
    // Get the event
    const event = gadgetContext.gadgetEvent;
    // Prepare a field group
    const fieldGroup = formParams && formParams.fieldGroup ? JSON.parse(formParams.fieldGroup[0]) : [];
    const gadgetForm = gadgetAPI.getFormInstance();
    // Set the autoOverrideDefaults flag
    gadgetForm.setAutoOverrideDefaults({active: true, clearUnsubmitted: false});
    gadgetForm.addHeadLine(context.getLocaleValue("de:Nachfolgend können Sie optional Ansprechpartner zur neuen Firma angeben.;en:Below you can optionally specify contact persons for the new Company."), {importance: 2});
    // Add a gadget action button to create a new field group for contact data
    gadgetForm.addGadgetActionButton(
        "addContact",
        context.getLocaleValue("de:Ansprechpartner hinzufügen;en:Add contact person"),
        {
            gadgetEvent: "addContact"
        },
        {
            validateForm: false,
            icon: "mdi:mdi-account-plus;",
            tooltip: context.getLocaleValue("de:Bei Klick kann ein neuer Ansprechpartner angelegt werden;en:Click to create a new contact person.")
        }
    ).setWidth("200");
    // Create an unique id for a new contact
    if(event === "addContact") {
        fieldGroup.push(util.getUniqueId());
    }
    // Remove an existing contact using the separator "___"
    if(event === "removeContact") {
        const idx = fieldGroup.indexOf(gadgetContext.gadgetParams.field.split("___")[0]);
        fieldGroup.splice(idx, 1);
    }
    // Call the addFieldGroup-function to create a new form for the contact data
    fieldGroup.forEach((groupName, idx) => addFieldGroup(gadgetForm, (n) => groupName + "___" + n, idx));
    // Store the data in a new hidden field
    const fieldGroupJSON = JSON.stringify(fieldGroup);
    gadgetForm.addHiddenField("fieldGroup", fieldGroupJSON);
    formParams.fieldGroup = [fieldGroupJSON];
    gadgetForm.setDialogOptions({
        width: 1100,
        height: 500
    });
    return gadgetForm;
});

// The gadget action to cancel the wizard (close the dialog)
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    htmlGadget.onGadgetLoad(function () {
        documentsContext.closeDialog();
    });
    return htmlGadget;
});

// The gadget action to finish the wizard
gadgetAPI.registerGadgetAction("finishWizard", function (gadgetContext) {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Get the wizard data for new company
    const wizardData = gadgetContext.gadgetWizard.wizardData;
    const companyData = Object.assign(wizardData.step1, wizardData.step2);
    // Get the data for contact(s)
    const contactData = getContactData(gadgetContext.formParams);
    // Create the new company using the storeData-function
    const newCompanyId = storeData("crmAccount", companyData, null);
    var contextData = {};
    // Close the dialog and return a message when an error occurred while creating the company
    if (!newCompanyId) {
        contextData.title = context.getLocaleValue("de:Fehler;en:Error");
        contextData.msg = context.getLocaleValue("de:Es ist ein Fehler aufgetreten, bitte wenden Sie sich an den Administrator.;en:An error has occurred, please contact the administrator.") + "<br/>" + context.getLocaleValue("de:Die neue Firma wurde nicht angelegt.;en:The new company was not created.")
        htmlGadget.setContextData(contextData);
        htmlGadget.onGadgetLoad(function () {
            const contextData = documentsContext.getGadgetContext().getContextData();
            documentsContext.closeDialog();
            documentsContext.openHtmlDialog(contextData.title, contextData.msg);
        });
    }
    else {
        // Create the contacts using the storeData-function
        var errors = "";
        contactData.forEach(contact => {
            if (!storeData("crmContact", contact, newCompanyId)) {
                errors += "<li>" + contact.crmFirstName + " " + contact.crmName + " (" + contact.crmEmail + ")" + "</li>";
            }
        });
        // Set context data if errors occured while creating contact(s)
        if (errors.length > 0) {
            contextData.title = context.getLocaleValue("de:Hinweis;en:Note");
            contextData.msg = context.getLocaleValue("de:Die neue Firma wurde angelegt, aber folgende Ansprechpartner konnten nicht angelegt werden:;en:The new company has been created, but the following contact persons could not be created:") + errors;
            htmlGadget.setContextData(contextData);
        }
        // Set context data if the open file checkbox was selected in step 1
        if (wizardData.step1.openFile == "on") {
            contextData.crmAccountId = newCompanyId;
            htmlGadget.setContextData(contextData);
        }
        htmlGadget.onGadgetLoad(function () {
            const contextData = documentsContext.getGadgetContext().getContextData();
            documentsContext.closeDialog();
            // Check if the open file option was selected in step 1 and open the new company file
            if (contextData.crmAccountId) {
                documentsContext.openFileView(contextData.crmAccountId);
                // Open a dialog if errors occured while creating contact(s)
                if (contextData.title) {
                    documentsContext.openHtmlDialog(contextData.title, contextData.msg);
                }
            }
            else if (contextData.title) {
                documentsContext.openMessageDialog(contextData.title, contextData.msg);
            }
            // Close only the dialog if the open file option was not selected in step 1 and no errors occured
            else {
                documentsContext.closeDialog();
            }
        });
    }
    return htmlGadget;
});

// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();

// Helper functions
// Get the technical and ergonimic values of enumeration lists
function getEnumList(fileType, field) {
    const lang = context.getClientLang();
    const data = [];
    const enumKeys = [];
    const enumLocales = [];
    const list = context.getEnumLocaleValues(fileType, field, enumKeys, enumLocales, lang);
    if (list.length == 0) {
        for (var i = 0; i < enumKeys.length; i++)
        data.push([enumKeys[i], enumLocales[i]]);
    }
    return data;
}

// Get an user list
function getUsers() {
    const userList = [];
	const suIt = context.getSystemUsers(false, true);
	for (var su = suIt.first(); su; su = suIt.next()) {
		userList.push([su.login, su.lastName + ", " + su.firstName]);
	}
	return userList;
}

// Create account and contact file(s)
function storeData(fileType, data, companyId) {
    const file = context.createFile(fileType);
    if (!file) {
        return false;
    }
    const keys = Object.keys(data);
    keys.forEach(key => {
        if (file.hasField(key)) {
            file[key] = data[key];
        }
    });
    if (companyId) {
        const companyFile = context.getFileById(companyId);
        file.setReferenceFile("crmCompany", companyFile);
    }
    file.sync();
    return file.getid();
}

// Create a field group (for a new contact row)
function addFieldGroup(gadgetForm, fieldName, idx) {
    gadgetForm.addPlainText((idx + 1) + ". ").setWidth(20);
    gadgetForm.addSingleSelectList(fieldName("crmSalutation"), context.getLocaleValue("de:Anrede;en:Salutation"), getEnumList("crmContact", "crmSalutation")).setInLine(true).setWidth(70);
    gadgetForm.addTextField(fieldName("crmFirstName"), context.getLocaleValue("de:Vorname;en:First name")).setInLine(true).setWidth(140).setMandatory(true);
    gadgetForm.addTextField(fieldName("crmName"), context.getLocaleValue("de:Nachname;en:Last name")).setInLine(true).setWidth(140).setMandatory(true);
    gadgetForm.addEMailField(fieldName("crmEmail"), context.getLocaleValue("de:E-Mail;en:Email")).setInLine(true).setWidth(230).setMandatory(true);
    gadgetForm.addGadgetActionButton(fieldName("remove"), "",
    {
        gadgetEvent: "removeContact",
        field: fieldName("remove")
    },
    {
        validateForm: false,
        icon: "mdi:mdi-trash-can-outline",
        tooltip: context.getLocaleValue("de:Ansprechpartner löschen;en:Delete contact"),
        labelPadding: true
    }).setInLine(true).setWidth(20);
}

// Prepare added contact data for file creation
function getContactData(formParams) {
    var arr, groupId, attr;
    const fieldGroup = formParams && formParams.fieldGroup ? JSON.parse(formParams.fieldGroup[0]) : [];
    const groups = {};
    delete formParams.fieldGroup;
    Object.keys(formParams).forEach(key => {
        arr = key.split("___");
        groupId = arr[0];
        attr = arr[1];
        !groups[groupId] && (groups[groupId] = {});
        groups[groupId][attr] = formParams[key][0];
    });
    return fieldGroup.map(n => groups[n]);
}Download: [Gadget_Wizard_createAccount.js](../assets/samples/Gadget_Wizard_createAccount.js)


### Beispiel 3: Beispiel-Wizard "Neue Korrespondenz"

Dieses Beispiel ist Bestandteil des *neuen relations Demo-Mandanten für documentsOS*. Dazu wird am Mappentyp *crmAccount* die benutzerdefinierte Aktion *newCorrespondece* vom Typ Gadget mit der Gadget-Konfiguration {gadgetScript: 'Gadget_Wizard_crmAccountCorrespondence', gadgetAction: 'startWizard', gadgetWidth: 1000, gadgetHeight: 600} verwendet. Das entsprechende Skript ist in der Demoumgebung vorhanden. Die Aktion *Neue Korrespondenz* (Aktionsklappliste an einer Firmen-Mappe) ermöglicht dabei in verschiedenen Schritte das Schreiben einer Korrespondenz mit Anzeige einer Vorschau und anschließender Erzeugung eines PDF-Dokumentes.


## Dynamisches Hinzufügen und Entfernen von Wizard‑Schritten

**Seit Documents 6.2.0** können [[Gadget API/otris.gadget.gui.WizardStep|WizardStep]](s) zur Laufzeit aus dem aktuellen Step-Gadget heraus verändert werden (hinzufügen, entfernen, neu anordnen).
Das ist z. B. nützlich für einen *Expertenmodus*, der bei Aktivierung zusätzliche Steps einblendet.


### Überblick

- gadgetAPI.getWizardContext(): Das aktuelle Wizard-Setup wird über den WizardContext verwaltet.
- .updateSteps(steps, removeData): Die Methode aktualisiert die komplette Step-Liste des Wizard-Gadgets.
steps: Die neue Liste von Wizard-Steps (als Array von WizardStep-Instanzen).
removeData: Optional (default true), steuert, ob Daten von entfernten Steps gelöscht werden.

**API‑Hinweis:**`WizardContext` ersetzt otris.gadget.WizardData um Namens-Verwirrung zu vermeiden. **WizardData** (decrapted) ist weiterhin vorhanden, wird jedoch in Zukunft durch **WizardContext** abgelöst  .


### Funktionsweise .updateSteps()

- Manipulation erfolgt auf der aktiven Wizard‑Instanz. Die Methoden arbeiten auf der aktuellen gadgetAPI.getWizardContext()-Instanz und sind damit direkt in jedem WizardStep-Gadget des Wizard‑Gadgets nutzbar.
- removeData steuert Datenbereinigung. Wird ein Step entfernt, werden dessen gespeicherte Formdaten standardmäßig mit gelöscht. Mit removeData: false werden die Daten erhalten (z.B. bei temporärem Ausblenden).
- .updateSteps() ist die „All‑in‑one“ Variante. Es wird die gesamte Zielmenge an Steps (als WizardStep‑Instanzen) übergeben. Steps, die gegenüber der aktuell genutzen Menge entfernt werden, werden optional bereinigt; aktuell angezeigte Steps bleiben unverändert erhalten.


### Best Practices

1. Nicht am aktuellen Index einfügen. Nicht .addStep(newStep, <index>) auf dem aktuellen (angezeigten) Step-Index einfügen. Hierfür .updateSteps() nutzen.
2. Step‑IDs stabil halten. Feste IDs (z. B. "basic", "expertDetails", "summary") nutzen, damit .removeStep() und .updateSteps() eindeutig arbeiten können.
3. Form‑Reload korrekt nutzen. .setReloadOnChange() am Feld nutzen, damit das Wizard bei Werteänderungen die Steps neu aufgebaut und aktualisiert.
4. Datenlebenszyklus planen. Entscheiden je nach Use‑Case, ob entfernte Steps ihre Daten behalten dürfen (.removeStep(<stepId>, false)).


### Beispiel: GadgetSample_WizardUpdateSteps

Das Beispiel-Gadget **GadgetSample_WizardUpdateSteps** zeigt, wie ein Wizard seine eigene Step-Struktur während der Laufzeit verändert:

- Der Wizard startet mit zwei Steps – Hauptschritt und Ende.
- Im Hauptschritt kann ein zusätzlicher Step Zusatzschritt per Button hinzugefügt oder entfernt werden.
- Der zusätzliche Step enthält eine Checkbox Expertenmodus aktivieren.
Bei Aktivierung fügt das Gadget automatisch den Step Experteneinstellungen ein.
Bei Deaktivierung wird dieser Step wieder entfernt.
- Nacht Abschluss zeigt der Wizard alle durchlaufenen Steps als Zusammenfassung an.


![Wizard-Sample - Dynamische Steps - Start](../assets/img/gadget-types/wizardupdatestep_main.png?class=medium)

Abb. 122 - Wizard-Sample - Dynamische Steps - Start


![Wizard-Sample - Dynamische Steps - Mit Zusatzschritt und aktivierter Checkbox](../assets/img/gadget-types/wizardupdatestep_expert.png?class=medium)

Abb. 123 - Wizard-Sample - Dynamische Steps - Mit Zusatzschritt und aktivierter Checkbox


#### Verwendete API-Funktionen

| Methode | Beschreibung |
| --- | --- |
| gadgetAPI.getWizardContext() | Liefert den aktuellen WizardContext, der Zugriff auf die Step-Methoden bietet. |
| updateSteps(steps, removeData) | Aktualisiert die komplette Step-Liste des Wizards. |
| getSteps() | Gibt die aktuell aktiven Steps in der richtigen Reihenfolge als Array zurück. |
| getWizardStepInstance(id, label, gadgetConfig, [clientFunction]) | Erzeugt eine Wizard-Step-Instanz mit ID, Titel und Gadget-Action. |
| setReloadOnChange() | Löst bei Feldänderung (z. B. Checkbox) einen Reload aus, damit z.B. das Wizard-Gadget aktualisiert wird. |


#### Ablauf im Beispiel

- startWizard: Erstellt den Grundaufbau mit zwei Steps.
- firstStep: Enthält zwei Buttons, die per updateSteps() den Zusatzschritt ein- oder ausblenden.
- extraStep: Enthält die Checkbox Expertenmodus – bei Aktivierung fügt der Wizard den Step Experteneinstellungen ein.
- expertSettings: HTML-Step mit statischem Informationstext.
- finishWizard: Zeigt eine Zusammenfassung der tatsächlich durchlaufenen Steps an.


#### Script GadgetSample_WizardUpdateSteps

**gadgetConfig:**`{ gadgetScript: "GadgetSample_WizardUpdateSteps", gadgetAction: "startWizard" }`

**Hinweise zur Kompatibilität:**

- WizardContext statt WizardData. Der frühere Name WizardData ist als Alias vorhanden. Für neue Implementierungen wird WizardContext empfohlen.
- Schritt‑IDs vergleichen. wizardStep.getId() nutzen, um die mit getSteps() zurückgelieferte Instanzen auszuwerten.


```javascript
/**
 * To use the Gadget:
 * Property name e.g.: gadgetConfig
 * Property value: { gadgetScript: "GadgetSample_WizardUpdateSteps", gadgetAction: "startWizard" }
*/

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

const gadgetScriptName = "GadgetSample_WizardUpdateSteps";

const stepLabels = {
    main: context.getLocaleValue("de:Hauptschritt;en:Main Step"),
    extra: context.getLocaleValue("de:Zusatzschritt;en:Additional Step"),
    expertSettings: context.getLocaleValue("de:Experteneinstellungen;en:Expert Settings"),
    end: context.getLocaleValue("de:Ende;en:End")
}

// Step-Factories
function stepMain() {
    return gadgetAPI.getWizardStepInstance("main", stepLabels.main,
        { gadgetScript: gadgetScriptName, gadgetAction: "firstStep" }
    );
}
function stepExtra() {
    return gadgetAPI.getWizardStepInstance("extra", stepLabels.extra,
        { gadgetScript: gadgetScriptName, gadgetAction: "extraStep" }
    );
}
function stepExpert() {
    return gadgetAPI.getWizardStepInstance("expertSettings", stepLabels.expertSettings,
        { gadgetScript: gadgetScriptName, gadgetAction: "expertSettings" }
    );
}
function stepEnd() {
    return gadgetAPI.getWizardStepInstance("end", stepLabels.end,
        { gadgetScript: gadgetScriptName, gadgetAction: "lastStep" }
    );
}

/* ---------- Wizard-Gadget ---------- */
gadgetAPI.registerGadgetAction("startWizard", function () {
    const wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle(context.getLocaleValue(
        "de:Wizard Sample – Dynamische Steps;en:Wizard Sample – Dynamic Steps"));

    wizard.showNavigation({ enable: true, position: "left", width: "30%" });
    wizard.showInfoContent({ enable: true, position: "top", width: "35%" });

    wizard.addStep(stepMain());
    wizard.addStep(stepEnd());

    wizard.setCancelAction("cancelWizard");
    wizard.setFinishAction("finishWizard");
    return wizard;
});

/* ---------- STEP 1 – Main Step (Buttons control updateSteps) ---------- */
gadgetAPI.registerGadgetAction("firstStep", function (gadgetContext) {
    const form = gadgetAPI.getFormInstance();
    form.setAutoOverrideDefaults(true);

    const op = gadgetContext?.gadgetParams?.op; // "add" | "remove"
    const wz = gadgetAPI.getWizardContext();

    if (op === "add") { wz.updateSteps([stepMain(), stepExtra(), stepEnd()], true); }
    if (op === "remove") { wz.updateSteps([stepMain(), stepEnd()], true); }

    form.addHeadLine(context.getLocaleValue("de:Dynamische Steps Demo;en:Dynamic Steps Demo"),
        { importance: 2 });

    form.addPlainText(context.getLocaleValue("de: Die Buttons rufen dieselbe Gadget-Action auf.\n"
        + "Sie manipulieren einen gemeinsamen Parameter, der mit dem Selbstaufruf am Button ausgewertet wird.;"
        + "en: The buttons call the same gadget action.\n"
        + "They manipulate a common parameter that is evaluated with the self-call on the button."));

    form.addGadgetActionButton("btnAdd",
        context.getLocaleValue("de:Zusatzschritt hinzufügen;en:Additional Step Add"),
        { gadgetScript: gadgetScriptName, gadgetAction: "firstStep", op: "add" },
        {
            icon: "entypo:plus",
            tooltip: context.getLocaleValue(
                "de:Fügt dem Wizard einen Schritt hinzu.;en:Adds a step to the wizard."),
        }
    );
    form.addGadgetActionButton("btnRemove",
        context.getLocaleValue("de:Zusatzschritt entfernen;en:Remove Additional Step"),
        { gadgetScript: gadgetScriptName, gadgetAction: "firstStep", op: "remove" },
        {
            icon: "entypo:minus",
            tooltip: context.getLocaleValue(
                "de:Entfernt einen Schritt aus dem Wizard.;en:Removes a step from the wizard."),
        });

    return form;
});

/* ---------- STEP 2 – Additional Step (with Expert Mode Checkbox) ---------- */
gadgetAPI.registerGadgetAction("extraStep", function (gadgetContext) {
    const form = gadgetAPI.getFormInstance();
    form.setAutoOverrideDefaults(true);

    const fp = gadgetContext?.formParams || {};
    const expertMode = fp?.expertMode?.[0] === "on";

    form.addCheckbox("expertMode",
        context.getLocaleValue("de:Expertenmodus aktivieren;en:Enable Expert Mode"), expertMode)
        .setReloadOnChange(true);

    form.addPlainText(
        context.getLocaleValue("de:Wenn aktiv, wird der Schritt 'Experteneinstellungen' eingefügt.;"
            + "en:If active, the 'Expert Settings' step will be inserted."),
        { labelPadding: false });

    const wz = gadgetAPI.getWizardContext();
    const hasExtra = wz.getSteps().some(s => s.getId && s.getId() === "extra");

    const target = [stepMain()];
    if (hasExtra) target.push(stepExtra());
    if (expertMode) target.push(stepExpert());
    target.push(stepEnd());

    wz.updateSteps(target, true);
    return form;
});

/* ---------- STEP 3 – Expert Settings (HTML gadget with info) ---------- */
gadgetAPI.registerGadgetAction("expertSettings", function () {
    const html = gadgetAPI.getHTMLInstance();
    html.appendHtml("<h2>"
        + context.getLocaleValue("de:Experteneinstellungen;en:Expert Settings") + "</h2>");
    html.appendHtml("</br><p>"
        + context.getLocaleValue("de:Hier könnten Ihre Experten-Einstellungen stehen.;"
            + "en:Here could be your expert settings.")
        + "</p>");
    return html;
});

/* ---------- STEP 4 – End Step ---------- */
gadgetAPI.registerGadgetAction("lastStep", function () {
    const form = gadgetAPI.getFormInstance();
    form.setAutoOverrideDefaults(true);
    form.addPlainText(context.getLocaleValue("de:Ende des Wizards.;en:End of the Wizard."));
    return form;
});

/* ---------- Cancel ---------- */
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const html = gadgetAPI.getHTMLInstance();
    html.onGadgetLoad(() => {
        documentsContext.closeDialog();
        documentsContext.closeGadget();
    });
    return html;
});

/* ---------- Finish (Summary of completed steps) ---------- */
gadgetAPI.registerGadgetAction("finishWizard", function () {
    const html = gadgetAPI.getHTMLInstance();
    const wz = gadgetAPI.getWizardContext();

    html.appendHtml("<h2 style='margin-bottom: 1em;'>" +
        context.getLocaleValue("de:Wizard beendet;en:Wizard finished") + "</h2>");
    html.appendHtml("<p style='margin-bottom: 0.5em;'>" +
        context.getLocaleValue("de:Sie haben folgende Schritte durchlaufen:;en:You have completed the following steps:") +
        "</p>");
    html.appendHtml("<ul style='margin-left: 1.5em; list-style-type: disc;'>");

    wz.getSteps().forEach(step => {
        html.appendHtml("<li style='margin-bottom: 0.3em; font-weight: bold;'>" +
            (stepLabels[step.getId()] || step.getId()) + "</li>");
    });

    html.appendHtml("</ul>");

    return html;
});

context.returnValue = gadgetAPI.transfer();
```

/**
 * To use the Gadget:
 * Property name e.g.: gadgetConfig
 * Property value: { gadgetScript: "GadgetSample_WizardUpdateSteps", gadgetAction: "startWizard" }
*/

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

const gadgetScriptName = "GadgetSample_WizardUpdateSteps";

const stepLabels = {
    main: context.getLocaleValue("de:Hauptschritt;en:Main Step"),
    extra: context.getLocaleValue("de:Zusatzschritt;en:Additional Step"),
    expertSettings: context.getLocaleValue("de:Experteneinstellungen;en:Expert Settings"),
    end: context.getLocaleValue("de:Ende;en:End")
}

// Step-Factories
function stepMain() {
    return gadgetAPI.getWizardStepInstance("main", stepLabels.main,
        { gadgetScript: gadgetScriptName, gadgetAction: "firstStep" }
    );
}
function stepExtra() {
    return gadgetAPI.getWizardStepInstance("extra", stepLabels.extra,
        { gadgetScript: gadgetScriptName, gadgetAction: "extraStep" }
    );
}
function stepExpert() {
    return gadgetAPI.getWizardStepInstance("expertSettings", stepLabels.expertSettings,
        { gadgetScript: gadgetScriptName, gadgetAction: "expertSettings" }
    );
}
function stepEnd() {
    return gadgetAPI.getWizardStepInstance("end", stepLabels.end,
        { gadgetScript: gadgetScriptName, gadgetAction: "lastStep" }
    );
}

/* ---------- Wizard-Gadget ---------- */
gadgetAPI.registerGadgetAction("startWizard", function () {
    const wizard = gadgetAPI.getWizardInstance();
    wizard.setTitle(context.getLocaleValue(
        "de:Wizard Sample – Dynamische Steps;en:Wizard Sample – Dynamic Steps"));

    wizard.showNavigation({ enable: true, position: "left", width: "30%" });
    wizard.showInfoContent({ enable: true, position: "top", width: "35%" });

    wizard.addStep(stepMain());
    wizard.addStep(stepEnd());

    wizard.setCancelAction("cancelWizard");
    wizard.setFinishAction("finishWizard");
    return wizard;
});

/* ---------- STEP 1 – Main Step (Buttons control updateSteps) ---------- */
gadgetAPI.registerGadgetAction("firstStep", function (gadgetContext) {
    const form = gadgetAPI.getFormInstance();
    form.setAutoOverrideDefaults(true);

    const op = gadgetContext?.gadgetParams?.op; // "add" | "remove"
    const wz = gadgetAPI.getWizardContext();

    if (op === "add") { wz.updateSteps([stepMain(), stepExtra(), stepEnd()], true); }
    if (op === "remove") { wz.updateSteps([stepMain(), stepEnd()], true); }

    form.addHeadLine(context.getLocaleValue("de:Dynamische Steps Demo;en:Dynamic Steps Demo"),
        { importance: 2 });

    form.addPlainText(context.getLocaleValue("de: Die Buttons rufen dieselbe Gadget-Action auf.\n"
        + "Sie manipulieren einen gemeinsamen Parameter, der mit dem Selbstaufruf am Button ausgewertet wird.;"
        + "en: The buttons call the same gadget action.\n"
        + "They manipulate a common parameter that is evaluated with the self-call on the button."));

    form.addGadgetActionButton("btnAdd",
        context.getLocaleValue("de:Zusatzschritt hinzufügen;en:Additional Step Add"),
        { gadgetScript: gadgetScriptName, gadgetAction: "firstStep", op: "add" },
        {
            icon: "entypo:plus",
            tooltip: context.getLocaleValue(
                "de:Fügt dem Wizard einen Schritt hinzu.;en:Adds a step to the wizard."),
        }
    );
    form.addGadgetActionButton("btnRemove",
        context.getLocaleValue("de:Zusatzschritt entfernen;en:Remove Additional Step"),
        { gadgetScript: gadgetScriptName, gadgetAction: "firstStep", op: "remove" },
        {
            icon: "entypo:minus",
            tooltip: context.getLocaleValue(
                "de:Entfernt einen Schritt aus dem Wizard.;en:Removes a step from the wizard."),
        });

    return form;
});

/* ---------- STEP 2 – Additional Step (with Expert Mode Checkbox) ---------- */
gadgetAPI.registerGadgetAction("extraStep", function (gadgetContext) {
    const form = gadgetAPI.getFormInstance();
    form.setAutoOverrideDefaults(true);

    const fp = gadgetContext?.formParams || {};
    const expertMode = fp?.expertMode?.[0] === "on";

    form.addCheckbox("expertMode",
        context.getLocaleValue("de:Expertenmodus aktivieren;en:Enable Expert Mode"), expertMode)
        .setReloadOnChange(true);

    form.addPlainText(
        context.getLocaleValue("de:Wenn aktiv, wird der Schritt 'Experteneinstellungen' eingefügt.;"
            + "en:If active, the 'Expert Settings' step will be inserted."),
        { labelPadding: false });

    const wz = gadgetAPI.getWizardContext();
    const hasExtra = wz.getSteps().some(s => s.getId && s.getId() === "extra");

    const target = [stepMain()];
    if (hasExtra) target.push(stepExtra());
    if (expertMode) target.push(stepExpert());
    target.push(stepEnd());

    wz.updateSteps(target, true);
    return form;
});

/* ---------- STEP 3 – Expert Settings (HTML gadget with info) ---------- */
gadgetAPI.registerGadgetAction("expertSettings", function () {
    const html = gadgetAPI.getHTMLInstance();
    html.appendHtml("<h2>"
        + context.getLocaleValue("de:Experteneinstellungen;en:Expert Settings") + "</h2>");
    html.appendHtml("</br><p>"
        + context.getLocaleValue("de:Hier könnten Ihre Experten-Einstellungen stehen.;"
            + "en:Here could be your expert settings.")
        + "</p>");
    return html;
});

/* ---------- STEP 4 – End Step ---------- */
gadgetAPI.registerGadgetAction("lastStep", function () {
    const form = gadgetAPI.getFormInstance();
    form.setAutoOverrideDefaults(true);
    form.addPlainText(context.getLocaleValue("de:Ende des Wizards.;en:End of the Wizard."));
    return form;
});

/* ---------- Cancel ---------- */
gadgetAPI.registerGadgetAction("cancelWizard", function () {
    const html = gadgetAPI.getHTMLInstance();
    html.onGadgetLoad(() => {
        documentsContext.closeDialog();
        documentsContext.closeGadget();
    });
    return html;
});

/* ---------- Finish (Summary of completed steps) ---------- */
gadgetAPI.registerGadgetAction("finishWizard", function () {
    const html = gadgetAPI.getHTMLInstance();
    const wz = gadgetAPI.getWizardContext();

    html.appendHtml("<h2 style='margin-bottom: 1em;'>" +
        context.getLocaleValue("de:Wizard beendet;en:Wizard finished") + "</h2>");
    html.appendHtml("<p style='margin-bottom: 0.5em;'>" +
        context.getLocaleValue("de:Sie haben folgende Schritte durchlaufen:;en:You have completed the following steps:") +
        "</p>");
    html.appendHtml("<ul style='margin-left: 1.5em; list-style-type: disc;'>");

    wz.getSteps().forEach(step => {
        html.appendHtml("<li style='margin-bottom: 0.3em; font-weight: bold;'>" +
            (stepLabels[step.getId()] || step.getId()) + "</li>");
    });

    html.appendHtml("</ul>");

    return html;
});

context.returnValue = gadgetAPI.transfer();
Download: [GadgetSample_WizardUpdateSteps.js](../assets/samples/GadgetSample_WizardUpdateSteps.js)