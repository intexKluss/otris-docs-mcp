---
title: "Allgemeine Funktionen von Gadgets"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/functions.html"
---

# Allgemeine Funktionen von Gadgets

Hier werden allgemeine Funktionen zu Gadgets aufgeführt, die unabhängig vom Gadget-Typen verwendbar sind.
Diese sind in der [[Gadget API/otris.gadget.gui.Transferable]]-Klasse definiert und werden an die Gadget-Typen vererbt.


## Daten clientseitig verfügbar machen

Um Daten im Documents-Kontext (clientseitig) zur Verfügung zu haben, werden diese mit **.setContextData()** der Gadget-Instanz vor dem Transfer hinzugefügt.


```javascript
// Initialize a form gadget instance
const formGadget = gadgetAPI.getFormInstance();
const myContextData = {
    myObject: {property: "value"},
    myId: 12345,
    myArray: ["A","r","r","a","y"],
    myTitle: "Title"
}
formGadget.setContextData(myContextData);
```

// Initialize a form gadget instance
const formGadget = gadgetAPI.getFormInstance();
const myContextData = {
    myObject: {property: "value"},
    myId: 12345,
    myArray: ["A","r","r","a","y"],
    myTitle: "Title"
}
formGadget.setContextData(myContextData);So werden die Daten gesammelt, um dann zusammen mit der Gadget-Instanz mit JSON.stringify() umgewandelt und schließlich an den Client übermittelt werden zu können.
Auf der Clientseite (im Documents-Kontext) sind die Daten dann mit **.getGadgetContext().getContextData()** abrufbar.


```javascript
const gadgetContext = documentsContext.getGadgetContext();
const contextData = gadgetContext.getContextData();

const myObject = contextData.myObject;
const myId = contextData.myId;
const myArray = contextData.myArray;
const myTitle = contextData.myTitle;
```

const gadgetContext = documentsContext.getGadgetContext();
const contextData = gadgetContext.getContextData();

const myObject = contextData.myObject;
const myId = contextData.myId;
const myArray = contextData.myArray;
const myTitle = contextData.myTitle;Um aus dem Gadget eine im Kontext stehende Mappe zu verändern und Daten zu übertragen, wird clientseitig eine FileContext-Instanz **.getFileContext()** verwendet und z.B. mit .setFileFieldValue() einem Feld ein Wert zugewiesen, siehe auch [[Client SDK/documents.sdk.FileContext|FileContext- Dokumentation]].


```javascript
const fileContext = documentsContext.getFileContext();
fileContext.setFileFieldValue("myFieldName", myValue);
```

const fileContext = documentsContext.getFileContext();
fileContext.setFileFieldValue("myFieldName", myValue);
## Funktionen clientseitig verfügbar machen

Mit **.addClientFunction()** wird einer Gadget-Instanz eine JavaScript-Funktion hinzugefügt. Mit dem Transfer zum Client steht diese dann clientseitig zur Verfügung.

**Syntax-Varianten:**

- Eine bereits existierende Funktion übergeben:


```javascript
myGadget.addClientFunction(myFunction);
```

myGadget.addClientFunction(myFunction);- Eine anonyme innere Funktion definieren und mit dem Namen "myFunction" assoziieren (so nur im Client nicht anonym):


```javascript
myGadget.addClientFunction("myFunction", function() {
  ...
});
```

myGadget.addClientFunction("myFunction", function() {
  ...
});- Eine Funktion anlegen und übergeben (so generell nicht anonym):


```javascript
myGadget.addClientFunction(function myFunction() {
  ...
});
```

myGadget.addClientFunction(function myFunction() {
  ...
});Im Client steht die Funktion dann im Documents-Kontext zur Verfügung.
`documentsContext.getClientFunctions()['myFunction']()`

**Beispiel:**


```javascript
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
gadgetAPI.registerGadgetAction("show", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Define the client-side function call
    const htmlText = ""
        + "<a href=\"#\" style='background-color: #ffffff; color: #333;'"
            + "onClick=\"documentsContext.getClientFunctions()['sampleFunction']()\">"
            + "Click here to execute a client-side example function!"
        + "</a>";
    htmlGadget.appendHtml(htmlText);
    // Make the function available on the client-side
    htmlGadget.addClientFunction(sampleFunction);
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();
// The sample function for the client-side call
function sampleFunction(){
  alert("The example function for a client-side function call has been executed.");
}
```

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
gadgetAPI.registerGadgetAction("show", function () {
    const htmlGadget = gadgetAPI.getHTMLInstance();
    // Define the client-side function call
    const htmlText = ""
        + "<a href=\"#\" style='background-color: #ffffff; color: #333;'"
            + "onClick=\"documentsContext.getClientFunctions()['sampleFunction']()\">"
            + "Click here to execute a client-side example function!"
        + "</a>";
    htmlGadget.appendHtml(htmlText);
    // Make the function available on the client-side
    htmlGadget.addClientFunction(sampleFunction);
    return htmlGadget;
});
context.returnValue = gadgetAPI.transfer();
// The sample function for the client-side call
function sampleFunction(){
  alert("The example function for a client-side function call has been executed.");
}
## Buttons im Gadget

- .addContainerButton(buttonConfig)
Diese Methode ist für (fast) alle Gadget-Typen verwendbar.
In den Instanzen der Gadget-Typen "Wizard" und "Message" werden die Methoden .addContainerButton() und .setContainerButtons() funktional ignoriert. (Eingebettete Gadget-Typen, wie Form-Gadgets oder HTML-Gadgets, funktionieren unabhängig und sind nicht beschränkt.)
Die Button-Konfiguration besteht grundsätzlich aus label: und clickFunction:. Eine id: ist ab documentsOS optional, siehe auch ContainerButtonConfig.


```javascript
const myContainerButtonConfig = {
  id: "myId",
  label: "Button-Beschriftung",
  clickFunction: "myFunction", // Function must be available on the client side
}
formGadget.addContainerButton(myContainerButtonConfig);
```

const myContainerButtonConfig = {
  id: "myId",
  label: "Button-Beschriftung",
  clickFunction: "myFunction", // Function must be available on the client side
}
formGadget.addContainerButton(myContainerButtonConfig);- .addPdfButton(config)
Fügt eine Schaltfläche zum Herunterladen des angezeigten Gadgets als PDF hinzu. Die Schaltfläche wird beim Bewegen des Mauszeigers in der linken oberen Ecke des Gadgets angezeigt, siehe auch Dokumentation.

Für **Form-Gadgets** gibt es weitere Button-Varianten:

- .addButton( name, label, onClickHandler , options ) Fügt dem Formular eine Schaltfläche mit einem benutzerdefinierten onClickHandler hinzu.
- .addGadgetActionButton( name, label, gadgetConfig , options ) Fügt dem Formular eine Schaltfläche hinzu, die ein anderes Gadget aufruft.
- .addRadiobuttonList( name, label, selectableValues ) Fügt dem Formular eine radioButtonList (eine Liste von Optionsfeldern, von denen nur eines aktiviert werden kann) hinzu.


## Funktionen (Kurzübersicht)

Die folgende Funktionen stehen allen Gadget-Typen zur Verfügung, siehe auch [[Gadget API/otris.gadget.gui.Transferable]].

- addClientFunction(clientFn, functionName) Fügt der Gadget-Instanz eine Funktion hinzu, die nach der Übertragung auf der Client-Seite verfügbar ist.
- addContainerButton(buttonConfig) Fügt der Gadget-Instanz einen Button hinzu.
- addFullscreenButton(value) Fügt der Gadget-Instanz einen Button hinzu, um den Gadget-Inhalt im Vollbildmodus anzuzeigen.
- addGadgetStyles(lessCode) Fügt erweiterten CSS-Code (LESS) hinzu.
- addOnGadgetLoad(onLoadHandlerFunction) Fügt einen onLoad-Handler hinzu, der beim Anzeigen des Gadgets auf dem Client ausgeführt wird.
- addPdfButton(config) Button, um das angezeigte Gadget als PDF herunterzuladen.
- addSettings(option) Fügt dem Gadget eine Einstellung hinzu (eine vom Benutzer definierbare Option).
- getApplicationInfo() Gibt die ApplicationInfo zurück, wenn das Gadget von einem nativen Add-In aufgerufen wird.
- getClientLibConfiguration() Gibt die Client-Bibliothekskonfiguration zurück.
- getContainerButton(buttonId) Gibt eine buttonConfig anhand der ID zurück.
- getContainerButtons() Gibt ein Array von Container-Button-Definitionen zurück.
- getContextData() Gibt das aktuelle Kontextdaten-Objekt zurück.
- getUserAgentInfo() Gibt User Agent Informationen zurück (Teil des HTTP-Headers).
- onGadgetLoad(onloadHandler) siehe addOnGadgetLoad()
- setContainerButtons(containerButtonConfigs, options) Setzt die Container-Buttons und entfernt dabei die vorhandenen Standard-Buttons.
- setContextData(contextData) Setzt zusätzliche Daten an die Gadget-Instanz, die dann auf der Client-Seite im GadgetContext verfügbar sind.
- setDialogOptions(options) Legt Dialogoptionen für dieses Gadget fest.
- setGadgetStyles(lessCode) Überträgt den LESS-Code an den Client, fügt das resultierende CSS hinzu und umschließt es mit der CSS-ID der Modulinstanz. Die Styles gelten nur während der Lebensdauer des Gadgets.
- setNavibarEntry(gadgetConfig, label) Fügt einen Navibar-Eintrag hinzu, der das Gadget neu lädt. Funktioniert nur in der Hauptlistenansicht.
- setResizeObserver(resizeObserver) Fügt eine Client-Funktion hinzu, die bei Größenänderung des Gadget-Containers ausgeführt wird.
- setStyle(name, value) Setzt ein Style-Attribut des HTML-Containers.
- setTitle(title, titleIcon) Setzt einen Titel (und Icon) an das Gadget.