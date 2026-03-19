---
title: "Formulare und GadgetActionButtons"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/forms.html"
---

# Formulare und GadgetActionButtons

Formulare können mit dem Form-Gadget konfiguiert werden. Hierzu wird die Klasse [[Gadget API/otris.gadget.gui.Form]] konfiguriert und als Ergebnis des Gadgets zurückgegeben.
Daten können mithilfe von [[Gadget API/otris.gadget.gui.Form#addGadgetActionButton|GadgetActionButtons]] an ein anderes Gadget übergeben werden.


## Wesentliche Merkmale

- Für die Konfiguration von Form-Gadgets gibt es eine Vielzahl von Funktionen und erweiternde Klassen, mit denen Formularelemente konfiguriert werden können.
- GadgetActionButtons sind Schaltflächen, die in Formulare eingefügt werden können und beim Betätigen einen Gadget-Aufruf starten. Wird ein GadgetActionButton im Formular betätigt, sind die Inhalte der Formularelemente automatisch als gadgetContext-Objekt verfügbar.


## Allgemeines Beispiel

Im folgenden Beispiel wird ein einfaches Formular verwendet, um eine persönliche Anrede zu generieren. Der erste Aufruf konfiguriert für die Abfrage von Daten eine Form-Gadget-Instance und anschließend, nach dem Betätigen des Absenden-Button, eine Html-Gadget-Instanz für die Anzeige eine Textes.

Das Beispiel wurde als [Benutzerdefinierte Aktion an einem öffentlichen Ordner](../integration/integration-public-folder.html#gadget-als-benutzerdefinierte-aktion-an-einem-ordner) integriert.

Eigenschaft: **gadgetConfig={gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget'}**

| Abb. 77 - Eingabeformular (Form-Gadget) | Abb. 78 - Ergebnis (HTML-Gadget) |
| --- | --- |


```javascript
/**
 * Simple example for a form gadget
 * Configured e.g. as an user defined action at a folder
 * gadgetConfig={gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget'}
*/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register a gadget action named "showFormGadget"
gadgetAPI.registerGadgetAction("showFormGadget", function (gadgetContext) {
    // The gadgetEvent is a standard parameter of gadgetContext,
    // 'send' is the eventName set by .addGadgetActionButton()
    if (gadgetContext.gadgetEvent == "send") {
        // Initialize a html gadget
        const htmlGadget = gadgetAPI.getHTMLInstance();
        // Set a title for the html gadget
        htmlGadget.setTitle(
            context.getLocaleValue("de:Eingegebene Daten;en:Entered data"));
        // The formParams are available due to formGadget.addGadgetActionButton()
        var htmlText = context.getLocaleValue("de:Hallo;en:Hello") + " ";
        if (gadgetContext.formParams.gender == "male") {
            htmlText += "Herr ";
        }
        else if (gadgetContext.formParams.gender == "female") {
            htmlText += "Frau ";
        }
        htmlText = "<h1>" + htmlText
            + gadgetContext.formParams.firstname + " "
            + gadgetContext.formParams.lastname + "</h1>";
        htmlGadget.appendHtml([
            "<div style='display: flex; flex-direction: column; justify-content: center;"
            + " text-align: center; height: 100%; margin: 10px 10px;'>" + htmlText
            + "</div>"
        ]);
        // Return the Gadget instance without calling the transfer() method
        return htmlGadget;
    }
    else {
        // Initialize the form gadget
        const formGadget = gadgetAPI.getFormInstance();
        // Set the title for the form gadget
        formGadget.setTitle(
            context.getLocaleValue("de:Bitte Daten eingeben;en:Please enter data"));
        // The select options for a dropdown list
        const selectOptions = [
            ["male", context.getLocaleValue("de:männlich;en:male")],
            ["female", context.getLocaleValue("de:weiblich;en:female")],
            ["other", context.getLocaleValue("de:divers;en:diverse")]
        ];
        // A form fierld as dropdown list with the select options
        formGadget.addSingleSelectList('gender',
            context.getLocaleValue("de:Geschlecht;en:Gender"), selectOptions);
        // Two text fields in the same line and as mandatory fields
        formGadget.addTextField('firstname',
            context.getLocaleValue("de:Vorname;en:First name"))
            .setInLine(true)
            .setMandatory(true);
        formGadget.addTextField('lastname',
            context.getLocaleValue("de:Nachname;en:Last name"))
            .setInLine(true)
            .setMandatory(true);
        // A gadget action button to submit the input
        formGadget.addGadgetActionButton("send",
            context.getLocaleValue("de:Absenden;en:Send"));
        formGadget.setStyle("height", "100px");
        // Return the Gadget instance withot calling the transfer() method
        formGadget.setStyle("border", "1px solid black");
        return formGadget;
    }
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple example for a form gadget
 * Configured e.g. as an user defined action at a folder
 * gadgetConfig={gadgetScript: 'GadgetSample_FormGadget', gadgetAction: 'showFormGadget'}
*/

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register a gadget action named "showFormGadget"
gadgetAPI.registerGadgetAction("showFormGadget", function (gadgetContext) {
    // The gadgetEvent is a standard parameter of gadgetContext,
    // 'send' is the eventName set by .addGadgetActionButton()
    if (gadgetContext.gadgetEvent == "send") {
        // Initialize a html gadget
        const htmlGadget = gadgetAPI.getHTMLInstance();
        // Set a title for the html gadget
        htmlGadget.setTitle(
            context.getLocaleValue("de:Eingegebene Daten;en:Entered data"));
        // The formParams are available due to formGadget.addGadgetActionButton()
        var htmlText = context.getLocaleValue("de:Hallo;en:Hello") + " ";
        if (gadgetContext.formParams.gender == "male") {
            htmlText += "Herr ";
        }
        else if (gadgetContext.formParams.gender == "female") {
            htmlText += "Frau ";
        }
        htmlText = "<h1>" + htmlText
            + gadgetContext.formParams.firstname + " "
            + gadgetContext.formParams.lastname + "</h1>";
        htmlGadget.appendHtml([
            "<div style='display: flex; flex-direction: column; justify-content: center;"
            + " text-align: center; height: 100%; margin: 10px 10px;'>" + htmlText
            + "</div>"
        ]);
        // Return the Gadget instance without calling the transfer() method
        return htmlGadget;
    }
    else {
        // Initialize the form gadget
        const formGadget = gadgetAPI.getFormInstance();
        // Set the title for the form gadget
        formGadget.setTitle(
            context.getLocaleValue("de:Bitte Daten eingeben;en:Please enter data"));
        // The select options for a dropdown list
        const selectOptions = [
            ["male", context.getLocaleValue("de:männlich;en:male")],
            ["female", context.getLocaleValue("de:weiblich;en:female")],
            ["other", context.getLocaleValue("de:divers;en:diverse")]
        ];
        // A form fierld as dropdown list with the select options
        formGadget.addSingleSelectList('gender',
            context.getLocaleValue("de:Geschlecht;en:Gender"), selectOptions);
        // Two text fields in the same line and as mandatory fields
        formGadget.addTextField('firstname',
            context.getLocaleValue("de:Vorname;en:First name"))
            .setInLine(true)
            .setMandatory(true);
        formGadget.addTextField('lastname',
            context.getLocaleValue("de:Nachname;en:Last name"))
            .setInLine(true)
            .setMandatory(true);
        // A gadget action button to submit the input
        formGadget.addGadgetActionButton("send",
            context.getLocaleValue("de:Absenden;en:Send"));
        formGadget.setStyle("height", "100px");
        // Return the Gadget instance withot calling the transfer() method
        formGadget.setStyle("border", "1px solid black");
        return formGadget;
    }
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();Download: [GadgetSample_FormGadget.js](../assets/samples/GadgetSample_FormGadget.js)


### Zusätzliche Hinweise zum Beispiel

- Wird das Gadget zum ersten Mal ausgeführt, ist der Parameter gadgetContext.gadgetEvent noch nicht gesetzt und es wird im else-Zweig ein Form-Gadget mit einen GadgetActionButton erstellt und angezeigt.
- Wird der GadgetActionButton Absenden betätigt, wird das Gadget erneut aufgerufen, dieses Mal aber mit dem Parameter gadgetContext.gadgetEvent (send), der nun im if-Zweig den Namen zur Begrüßung zusammensetzt und als HTML-Gadget zurückgibt.


## Weitere Beispiele

Ein [Form-Gadget als User-Exit an einem Mappen-Feld](../integration/integration-filetype.html#erkl%C3%A4rung-des-beispiels-gadgetsample_userexit), das im Dialog Werte zur Auswahl und Übernahme anbietet, wird im Beispiel zur Integration von Gadgets beschrieben.

In der Dokumentation von Wizard-Gadgets (z.B. [Schnellerfassung Firma](../gadget-types/wizard.html#beispiel-2-beispiel-wizard-schnellerfassung-firma)) werden in einzelnen der Schritte Form-Gadget-Instanzen verwendet.

Ein [DropForm-Gadget](../additional-examples/dropform-gadgets.md#22-dropform-gadget) wird in der Drop-Gadgets-Dokumentation beschrieben.


---


## Erweiternde Klassen


### Element

[[Gadget API/otris.gadget.gui.Element]] ist die Basisklasse für alle Formularelemente innerhalb eines Gadgets. Sie bietet grundlegende Methoden zur Verwaltung von Attributen, Styles, Events und zur Strukturierung von Formularfeldern.

**Wichtige Methoden:** (Auszug aus der API-Dokumentation)

- .setAttribute(name, value) – Setzt ein Attribut.
- .getAttribute(name) – Gibt den Wert eines Attributs zurück.
- .setStyle(name, value) – Setzt eine CSS-Style-Eigenschaft.
- .setEvent(event, handler) – Fügt einen Event-Handler hinzu.
- .addChild(element) – Fügt ein Kindelement hinzu.
- .remove() – Entfernt das Element aus dem Formular.


---


### SelectableElement

[[Gadget API/otris.gadget.gui.SelectableElement]] ist eine Erweiterung von `Element` für Formularelemente mit auswählbaren Optionen.

**Wichtige Methoden:** (Auszug aus der API-Dokumentation)

- .setSelectableValues(values) – Setzt eine Liste von auswählbaren Werten.
- .addSelectableValue(value, label) – Fügt eine einzelne Auswahlmöglichkeit hinzu.
- .getSelectableValues() – Gibt die möglichen Auswahlwerte zurück.
- .setSelectedValues(values) – Setzt die vorausgewählten Werte.


---


### OptionGroup

[[Gadget API/otris.gadget.gui.OptionGroup]] dient zur Gruppierung von auswählbaren Elementen, z. B. innerhalb von Dropdowns oder Checkbox-Listen.

**Wichtige Methoden:** (Auszug aus der API-Dokumentation)

- .setName(name) – Setzt den Namen der Gruppe.
- .addSelectableValue(value, label) – Fügt eine Option zur Gruppe hinzu.


---


### DropForm

[[Gadget API/otris.gadget.gui.DropForm]] ist eine Erweiterung der `Form`-Klasse mit zusätzlichen Funktionen für Drag-and-Drop-Interaktionen.

[Weitere Informationen in der DropForm-Gadget-Dokumentation](../additional-examples/dropform-gadgets.md#22-dropform-gadget)