---
title: "HTML-Elemente"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/html-elements.html"
---

# HTML-Elemente

Mit dem Element [[Gadget API/otris.gadget.gui.HTML]] kann beliebiger HTML-Text formatiert und dargestellt werden.


## Wesentliche Merkmale

- Mit .appendHtml() und .prependHtml() kann der HTML-Gadget-Instanz HTML-Code flexibel als String oder Array hinzugefügt und erweitert werden. Beide Methoden unterstützen das Verkettungsmuster (Method Chaining) für mehrere aufeinanderfolgende Aufrufe.
- Durch .activateDHTProcessing() kann dynamisches HTML-Processing auf der Clientseite aktiviert werden.


## Sicherheitswarnung: Schutz vor Cross-Site Scripting (XSS)

**Achtung:** Ungeprüfte Eingaben können XSS verursachen – **immer absichern!** Cross-Site Scripting (XSS) kann es **Angreifern** ermöglichen, **schädliches JavaScript** einzuschleusen und damit Daten abzugreifen oder Aktionen im Namen des Nutzers auszuführen.

Um XSS-Risiken im HTML-Gadget zu minimieren, sind die folgenden Punkte zu beachten:

- Eingaben bereinigen: Prüfen und Bereinigen der Nutzereingaben (z. B. mithilfe eines div-Elements), um potenzielle Manipulationen abzufangen.
- HTML escapen: Zeichen wie <, >, &, " in HTML-Entities umwandeln, z. B. mittels input.replace(/</g, "&lt;").
- Content Security Policy (CSP): Definieren und verwenden vertrauenswürdiger Inhaltsquellen.
- Kein Inline-JavaScript: Event-Listener statt Inline-Handler wie onclick verwenden.

**Ziel der Bereinigung der Eingaben** ist es, **potenzielle Manipulationen** durch den Client abzufangen, bevor sie zu sicherheitskritischen Aktionen führen.

**Clientseitige Eingaben entschärfen:** Nutzer könnten absichtlich oder unabsichtlich HTML- oder JavaScript-Code in Eingabefelder einfügen. Wenn diese Eingaben ungeprüft an den Server übergeben werden, besteht die Gefahr, dass sie dort als echter Code ausgeführt oder gespeichert werden.

**Serverseitige Aktionen absichern:** Eingaben, die an den Server gehen, sollten auf Zeichen und Muster geprüft werden, die auf Manipulation hinweisen. Serverseitige Bereinigung ist ebenfalls sinnvoll, aber die erste Schutzschicht beginnt schon auf der Clientseite.

**Gefährliche Inhalte neutralisieren:** Durch das Escapen oder Entfernen gefährlicher Zeichen (`<script>`, onload) wird verhindert, dass diese Inhalte später als Code ausgeführt werden – sowohl clientseitig als auch nach serverseitiger Verarbeitung.


## Einfaches Beispiel

In diesem Beispiel wird zwei mehrzeilige HTML-Texte (`htmlText1` und `htmlText2`) konfiguriert und dem HTML-Gadget hinzugefügt. Der Text enthält eine personalisierte Begrüßung und einen Link zu otris.de. Im Skript wird eine Funktion (`sampleFunction`) definiert, die mit dem Klick auf einen Button ausgelöst wird.

Die Funktion `sampleFunction` wird erstellt und dann mit `.addClientFunction(sampleFunction)` dem HTML-Gadget für die clientseitigen Nutzung hinzugefügt. Die `sampleFunction` wird clientseitig mit `documentsContext.getClientFunctions()['sampleFunction']()` übernommen, oder dem ContainerButton als `clickFunction: "sampleFunction"` übergeben.
Damit wird ermöglicht, dass die Funktion clientseitig aufgerufen werden kann.
Abschließend wird das Gadget mit `gadgetAPI.transfer()` dem `context.returnValue` übergeben.

**WICHTIGER HINWEIS:** Funktionen, die auf diese Art und Weise aufgerufen werden, werden clientseitig im **DOCUMENTS**-Kontext im Browser ausgeführt. Das Objekt **gadgetContext** und alle darin enthaltenen Informationen stehen clientseitig unter `documentsContext.getGadgetContext()` zur Verfügung.


![Ergebnis des HTML Gadgets](../assets/img/integration/htmlGadget_hallo_schreiber.png)

Abb. 79 - Ergebnis des HTML Gadgets


### Beispiel-Skript


```javascript
/**
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript:'GadgetSample_HTML_Gadget',gadgetAction: 'showHTML' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "showHTML"
// and link it to an action function.
gadgetAPI.registerGadgetAction("showHTML", function () {

    // Initialize an HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();

    const headerBackgroundColor = '#87CEEB';
    const bodyBackgroundColor = '#ADD8E6';
    const textColor = '#000000';
    const linkUrl = 'https://www.otris.de';
    const currentUserFullName = context.getAutoText("userFullname");

    // Add styled text and link (header section)
    var htmlText1 = ""
        + "<div style='background-color: " + headerBackgroundColor
        + "; color: " + textColor + "; padding: 20px;'>"
        + "<h1>Hallo " + currentUserFullName + ",</h1>"
        + "</div>";

    // Add styled text and link (body section)
    var htmlText2 = ""
        + "<div style='background-color: " + bodyBackgroundColor
        + "; color: " + textColor + "; padding: 20px;'>"
        + "<p>Sie verwenden gerade das HTML Gadget.</p><br>"
        + "<p>Und hier noch ein zweiter Absatz.</p><br>"
        + "<a href='" + linkUrl + "' target='_blank'>Besuchen Sie otris.de</a>"
        + "</div>";

    // Adds HTML content to the instance, appending it if HTML content already exists
    htmlGadget.appendHtml(htmlText2);

    // Adds HTML content to the instance, prepending it if HTML content already exists
    htmlGadget.prependHtml(htmlText1);

    // Add a secure custom ContainerButton at the top to trigger sampleFunction
    htmlGadget.addContainerButton({
        id: "myExampleButton",
        label: "Beispielmeldung",
        clickFunction: "sampleFunction",
        position: "top"
    });
    // Make the function available on the client-side
    htmlGadget.addClientFunction(sampleFunction);

    // Return the Gadget instance WITHOUT calling the transfer() method
    return htmlGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

// A function called by the gadget
function sampleFunction() {
    const messageTitle = "Message Fenstertitel";
    var messageText = '<b>Beispielmeldung</b>'
        + '<div>Die Beispielfunktion wurde ausgeführt.</div>';
    documentsContext.openMessageDialog(messageTitle, messageText,
        documentsContext.closeDialog);
}
```

/**
 * To use the Gadget:
 * Property name: gadgetConfig
 * Property value: { gadgetScript:'GadgetSample_HTML_Gadget',gadgetAction: 'showHTML' }
*/

// Enable the required modules and import the gadgetAPI module
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");

// Register a gadget action named "showHTML"
// and link it to an action function.
gadgetAPI.registerGadgetAction("showHTML", function () {

    // Initialize an HTML-Gadget instance
    const htmlGadget = gadgetAPI.getHTMLInstance();

    const headerBackgroundColor = '#87CEEB';
    const bodyBackgroundColor = '#ADD8E6';
    const textColor = '#000000';
    const linkUrl = 'https://www.otris.de';
    const currentUserFullName = context.getAutoText("userFullname");

    // Add styled text and link (header section)
    var htmlText1 = ""
        + "<div style='background-color: " + headerBackgroundColor
        + "; color: " + textColor + "; padding: 20px;'>"
        + "<h1>Hallo " + currentUserFullName + ",</h1>"
        + "</div>";

    // Add styled text and link (body section)
    var htmlText2 = ""
        + "<div style='background-color: " + bodyBackgroundColor
        + "; color: " + textColor + "; padding: 20px;'>"
        + "<p>Sie verwenden gerade das HTML Gadget.</p><br>"
        + "<p>Und hier noch ein zweiter Absatz.</p><br>"
        + "<a href='" + linkUrl + "' target='_blank'>Besuchen Sie otris.de</a>"
        + "</div>";

    // Adds HTML content to the instance, appending it if HTML content already exists
    htmlGadget.appendHtml(htmlText2);

    // Adds HTML content to the instance, prepending it if HTML content already exists
    htmlGadget.prependHtml(htmlText1);

    // Add a secure custom ContainerButton at the top to trigger sampleFunction
    htmlGadget.addContainerButton({
        id: "myExampleButton",
        label: "Beispielmeldung",
        clickFunction: "sampleFunction",
        position: "top"
    });
    // Make the function available on the client-side
    htmlGadget.addClientFunction(sampleFunction);

    // Return the Gadget instance WITHOUT calling the transfer() method
    return htmlGadget;
});

// The .transfer() method of the gadgetAPI module
// -> Serializes and returns the Gadget instance
context.returnValue = gadgetAPI.transfer();

// A function called by the gadget
function sampleFunction() {
    const messageTitle = "Message Fenstertitel";
    var messageText = '<b>Beispielmeldung</b>'
        + '<div>Die Beispielfunktion wurde ausgeführt.</div>';
    documentsContext.openMessageDialog(messageTitle, messageText,
        documentsContext.closeDialog);
}
Download: [GadgetSample_HTML_Gadget.js](../assets/samples/GadgetSample_HTML_Gadget.js)


### Beispiel-Integration

Das Beispiel-Gadget wurde [in einem öffentlichen Ordner](../integration/integration-public-folder.html#gadget-als-ordner) integriert.

Eigenschaft: **{ gadgetScript: 'GadgetSample_HTML_Gadget' , gadgetAction: 'showHtml' }**


## Weitere Beispiele

In folgenden Beispielen wurde eine HTML-Instanz eingesetzt:

- Hello Gadget
- Formulare "Allgemeines Beispiel"
- Layout-Gadget als action im allgemeinen Beispiel
- Layout-Gadget - relations Mitarbeiter
- Wizard - allgemeines Beispiel als cancelWizard und finishWizard
- Wizard - Einfacher Beispiel-Wizard als startStep1 und startStep4