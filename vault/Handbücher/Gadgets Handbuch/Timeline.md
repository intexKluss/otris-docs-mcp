---
title: "TimeLine"
source: "https://otris.software/documents/manuals/books/gadget/gadget-types/timeline.html"
---

# TimeLine


## Allgemeines

Mit dem Timeline-Gadget können sogenannte Bubbles auf einer Zeitleiste dargestellt werden. Hierzu wird eine Instanz der Klasse [[Gadget API/otris.gadget.gui.Timeline]] konfiguriert und als Ergebnis des Gadgets zurückgegeben.

Timeline-Gadgets eignen sich insbesondere, um besondere Mappeninformationen auf der Seitenleiste von Mappen anzuzeigen, sie können aber auch an allen anderen Stellen verwendet werden, an denen Gadgets möglich sind.


## Wesentliche Merkmale

- Die anzuzeigenden Daten sollten als Array mit Objekten aufbereitet oder gespeichert werden.
- Textuelle Inhalte von Bubbles können per HTML-Befehlen weiter aufbereitet werden, außerdem kann für jede Bubble ein zusätzlicher Titel angegeben werden.
- Bubbles können besonders hervorgehoben werden (highlight).
- Bei Klick auf eine Bubble können zusätzliche Client-Funktionen ausgeführt werden.


## Allgemeines Beispiel

Soll ein Timeline-Gadget an der Seitenleiste von Mappen dargestellt werden, ist die Mappentyp-Eigenschaft **marginGadgetConfigs** mit einer entsprechenden Gadget-Konfiguration anzugeben. Da auf der Seitenleiste grundsätzlich mehrere Gadgets dargestellt werden können, ist die Gadget-Konfiguration immer in folgender Form anzugeben z.B.: `marginGadgetConfigs=[{gadgetScript: 'Gadget_myTimeline', gadgetAction: 'myAction'}]`. Soll an dieser Stelle nur ein einzelnes Gadget verwendet werden, muss dies also trotzdem in eckige Klammern geschrieben werden.

Die Darstellung einer Timeline auf der Seitenleiste von Mappen wurde dann z.B. wie folgt aussehen:


![timeline-1](../assets/img/timeline-1.png)

Abb. 104 - Timeline auf der Seitenleiste von Mappen

Das verwendete Beispiel-Skript würde für diesen Fall wie folgt aussehen (gadgetAction=show):


```javascript
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
gadgetAPI.registerGadgetAction("show", function() {
    const docFile = context.file;
    const timeLine = gadgetAPI.getTimelineInstance();
    timeLine.addBubble({
        id: "bubble1",
        content: "<b>" + "Bubble 1" + "</b><br/>" + "This is a default bubble without any other settings.",
    });
    timeLine.addBubble({
        id: "bubble2",
        content: "<b>" + "Bubble 2" + "</b><br/>" + "This is a bubble in highlight mode.",
        highlight: true
    });
    timeLine.addBubble({
        id: "bubble3",
        content: "<b>" + "Bubble 3" + "</b><br/>" + "This is a bubble with an additional title.",
        title: "My additional title"
    })
    timeLine.addBubble({
        id: "bubble4",
        content: "<b>" + "Bubble 4" + "</b><br/>" +"This is a bubble with a css-class for setting the height to 150px.",
        cssClass: "myTimelineSetHeight"
    });
    timeLine.addBubble({
        id: "bubble5",
        content: "<b>" + "Bubble 5" + "</b><br/>" +"This is a bubble with a css-class on hover and a click function for opening a simple message dialog.",
        cssClass: "myTimelineSetHover",
        onClick: "myClick"
    });
    timeLine.setHeader("<h1>My Timeline</h1>");
    timeLine.addClientFunction(function myClick(bubble) {
        const title = "Message Dialog";
        const message = "The Bubble '" + "<b>" + bubble + "</b>" + "' has been clicked.";
        documentsContext.openMessageDialog(title, message);
    });
    return timeLine;
});
context.returnValue = gadgetAPI.transfer();
```

context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
gadgetAPI.registerGadgetAction("show", function() {
    const docFile = context.file;
    const timeLine = gadgetAPI.getTimelineInstance();
    timeLine.addBubble({
        id: "bubble1",
        content: "<b>" + "Bubble 1" + "</b><br/>" + "This is a default bubble without any other settings.",
    });
    timeLine.addBubble({
        id: "bubble2",
        content: "<b>" + "Bubble 2" + "</b><br/>" + "This is a bubble in highlight mode.",
        highlight: true
    });
    timeLine.addBubble({
        id: "bubble3",
        content: "<b>" + "Bubble 3" + "</b><br/>" + "This is a bubble with an additional title.",
        title: "My additional title"
    })
    timeLine.addBubble({
        id: "bubble4",
        content: "<b>" + "Bubble 4" + "</b><br/>" +"This is a bubble with a css-class for setting the height to 150px.",
        cssClass: "myTimelineSetHeight"
    });
    timeLine.addBubble({
        id: "bubble5",
        content: "<b>" + "Bubble 5" + "</b><br/>" +"This is a bubble with a css-class on hover and a click function for opening a simple message dialog.",
        cssClass: "myTimelineSetHover",
        onClick: "myClick"
    });
    timeLine.setHeader("<h1>My Timeline</h1>");
    timeLine.addClientFunction(function myClick(bubble) {
        const title = "Message Dialog";
        const message = "The Bubble '" + "<b>" + bubble + "</b>" + "' has been clicked.";
        documentsContext.openMessageDialog(title, message);
    });
    return timeLine;
});
context.returnValue = gadgetAPI.transfer();
### Zusätzliche Hinweise zum Beispiel

Im Beispiel werden für die Bubbles 4 und 5 jeweils css-Klassen verwendet (myTimelineSetHeight bzw. myTimelineSetHover). Diese css-Klassen könnten z.B. per *clientHeaderCode* angegeben werden. Für die Verwendung von clientHeaderCode gibt es ebenfalls verschiedene Möglichkeiten, eine Möglichkeit wäre:

- zusätzliches Skript anlegen
- Script-Eigenschaft ScriptExtensionsCallbackScript=true setzen

Das Skript könnte für das o.a. Beispiel dann folgenden Inhalt haben:


```javascript
exports.clientHeaderCode = {
    beforeTransferCode: function(clientHeaderCode) {
        clientHeaderCode.addStyle(".myTimelineSetHeight {height:150px}"),
        clientHeaderCode.addStyle(".myTimelineSetHover .bubble_text:hover{filter:brightness(85%)}")
    }
}
```

exports.clientHeaderCode = {
    beforeTransferCode: function(clientHeaderCode) {
        clientHeaderCode.addStyle(".myTimelineSetHeight {height:150px}"),
        clientHeaderCode.addStyle(".myTimelineSetHover .bubble_text:hover{filter:brightness(85%)}")
    }
}
## Weitere Beispiele


### Beispiel einer Timeline auf der Seitenleiste von Mappen aus Statusinformationen

In diesem Beispiel wird der Status der Mappe abgefragt, alle Statusinformationen werden (sortiert nach Datum) als Timeline dargestellt. Hat der angemeldete Benutzer eine Mappenaktion durchgeführt, die als Statuseintrag gespeichert wurde, soll die entsprechende Bubble hervorgehoben werden (highlight). Bei Klick auf eine Bubble soll außerdem ein Dialog mit den Bubble-Informationen dargestellt werden.


```javascript
/**
 * Simple example for displaying the file status as a timeline
 * Using the file type property marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Timeline_Status', gadgetAction: 'show'}]
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action
gadgetAPI.registerGadgetAction("show", function () {
    const timeLine = gadgetAPI.getTimelineInstance();
    // Get the file status as history ordered by status time ascending
    const docFile = context.file;
    const lang = context.getClientLang();
    const status = JSON.parse(docFile.getStatusAsJSON(lang));
    status.sort((a, b) => context.convertStringToDate(b.Time, lang) - context.convertStringToDate(a.Time, lang));
    // Get the current user
    var bubbleMap = {};
    const currentUser = context.getSystemUser();
    const userName = currentUser.lastName + ", " + currentUser.firstName;
    // Add the bubbles
    status.forEach(function (item) {
        const bubbleId = util.getUniqueId();
        const bubbleText = item.Action;
        const bubbleTime = item.Time;
        const bubbleUser = item.User;
        var bubbleTitle = item.Comment;
        if (bubbleTitle == "") {
            bubbleTitle = context.getLocaleValue("de:Standard-Mappenaktion;en:Default file action");
        }
        var highlight = false;
        if (bubbleUser == userName) {
            highlight = true;
        }
        timeLine.addBubble({
            id: bubbleId,
            content: "<b>" + bubbleTitle + "</b><br/>" + bubbleText + "<br/>" + bubbleTime + "<br/>" + bubbleUser,
            highlight: highlight
        });
        // Collecting bubble data
        bubbleMap[bubbleId] = {
            bubbleTitle: bubbleTitle,
            bubbleUser: bubbleUser,
            bubbleAction: bubbleText,
            bubbleTime: bubbleTime
        };
    });
    // Set the header
    timeLine.setHeader("<h1>" + context.getLocaleValue("de:Mappenstatus;en:File status") + "</h1>");
    // Make bubble data available client-side
    timeLine.setContextData({ bubbleMap: bubbleMap });
    // Set the handler for all bubble clicks
    timeLine.setBubbleOnClick(function (bubbleId) {
        const gadgetContext = documentsContext.getGadgetContext();
        const contextData = gadgetContext.getContextData();
        const messageTitle = "Bubble Information";
        var messageText = "";
        if (contextData.bubbleMap) {
            const item = contextData.bubbleMap[bubbleId];
            messageText = '<b>' + item.bubbleTitle + '</b>\
                <table>\
                    <tr><td>' + item.bubbleAction + '</td></tr>\
                    <tr><td>' + item.bubbleTime + '</td></tr>\
                    <tr><td>' + item.bubbleUser + '</td></tr>\
                </table>';
        } else {
            messageText = context.getLocaleValue("de:Bubble-Daten nicht gefunden.;en:No bubble data found.");
        }
        documentsContext.openMessageDialog(messageTitle, messageText, documentsContext.closeDialog());
    });
    // Return the time line
    return timeLine;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();
```

/**
 * Simple example for displaying the file status as a timeline
 * Using the file type property marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Timeline_Status', gadgetAction: 'show'}]
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action
gadgetAPI.registerGadgetAction("show", function () {
    const timeLine = gadgetAPI.getTimelineInstance();
    // Get the file status as history ordered by status time ascending
    const docFile = context.file;
    const lang = context.getClientLang();
    const status = JSON.parse(docFile.getStatusAsJSON(lang));
    status.sort((a, b) => context.convertStringToDate(b.Time, lang) - context.convertStringToDate(a.Time, lang));
    // Get the current user
    var bubbleMap = {};
    const currentUser = context.getSystemUser();
    const userName = currentUser.lastName + ", " + currentUser.firstName;
    // Add the bubbles
    status.forEach(function (item) {
        const bubbleId = util.getUniqueId();
        const bubbleText = item.Action;
        const bubbleTime = item.Time;
        const bubbleUser = item.User;
        var bubbleTitle = item.Comment;
        if (bubbleTitle == "") {
            bubbleTitle = context.getLocaleValue("de:Standard-Mappenaktion;en:Default file action");
        }
        var highlight = false;
        if (bubbleUser == userName) {
            highlight = true;
        }
        timeLine.addBubble({
            id: bubbleId,
            content: "<b>" + bubbleTitle + "</b><br/>" + bubbleText + "<br/>" + bubbleTime + "<br/>" + bubbleUser,
            highlight: highlight
        });
        // Collecting bubble data
        bubbleMap[bubbleId] = {
            bubbleTitle: bubbleTitle,
            bubbleUser: bubbleUser,
            bubbleAction: bubbleText,
            bubbleTime: bubbleTime
        };
    });
    // Set the header
    timeLine.setHeader("<h1>" + context.getLocaleValue("de:Mappenstatus;en:File status") + "</h1>");
    // Make bubble data available client-side
    timeLine.setContextData({ bubbleMap: bubbleMap });
    // Set the handler for all bubble clicks
    timeLine.setBubbleOnClick(function (bubbleId) {
        const gadgetContext = documentsContext.getGadgetContext();
        const contextData = gadgetContext.getContextData();
        const messageTitle = "Bubble Information";
        var messageText = "";
        if (contextData.bubbleMap) {
            const item = contextData.bubbleMap[bubbleId];
            messageText = '<b>' + item.bubbleTitle + '</b>\
                <table>\
                    <tr><td>' + item.bubbleAction + '</td></tr>\
                    <tr><td>' + item.bubbleTime + '</td></tr>\
                    <tr><td>' + item.bubbleUser + '</td></tr>\
                </table>';
        } else {
            messageText = context.getLocaleValue("de:Bubble-Daten nicht gefunden.;en:No bubble data found.");
        }
        documentsContext.openMessageDialog(messageTitle, messageText, documentsContext.closeDialog());
    });
    // Return the time line
    return timeLine;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();Download: [GadgetSample_Timeline_Status.js](../assets/samples/GadgetSample_Timeline_Status.js)

Die Darstellung bei Verwendung der Mappentypeigenschaft `marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Timeline_Status', gadgetAction: 'show'}]` am Mappentyp *crmAccount* im **neuen relations Demo-Mandanten für documentsOS**  wäre dann wie folgt:


![timeline-2](../assets/img/timeline-2.png)

Abb. 105 - Timeline am Mappentyp mit Darstellung des Mappenstatus, Hervorhebung des aktuellen Benutzers


![timeline-3](../assets/img/timeline-3.png)

Abb. 106 - Dialogfenster nach Klick auf eine Bubble


### Beispiel einer Timeline auf der Seitenleiste von Mappen mit Beispielinformationen

In diesem Beispiel werden die Bubble-Informationen mit Beispieldaten gefüllt. Daten könnten z.B. auch aus einem Mappenfeld (Textfeld) kommen, dass nicht angezeigt wird und in dem Informationen als JSON-String immer dann gespiechert werden, wenn dies für den Anwendungsfall notwendig ist. Dabei können Standard-Skript-Exits verwendet werden, die bei verschiedenen Aktionen möglich sind, z.B. *onSaveScript*, *afterUploadDocument*, *onForwardFileScript* (Workflow) oder auch eigene Workflow-Skripte nach Bedarf.


```javascript
/**
 * Simple example for displaying the timeline with example history data
 * Using the file type property marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Timeline_ExampleHistory', gadgetAction: 'show'}]
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action
gadgetAPI.registerGadgetAction("show", function() {
    const timeLine = gadgetAPI.getTimelineInstance();
    // Get an example file history
    const bubbles = getExampleFileHistory();
    const lang = context.getClientLang();
    // Add the bubbles
    bubbles.forEach(function(item) {
        timeLine.addBubble({
            id: item.id,
            title: "<b>" + item.title + "</b>",
            content: "<b>" + item.text + "</b><br/>" + context.convertDateToString(item.date, lang) + "</b><br/>" + item.user,
            highlight: item.highlight
        })
    });
    // Set the header
    timeLine.setHeader("<h1>" + context.getLocaleValue("de:Mappenhistorie;en:File history") + "</h1>");
    // Return the time line
    return timeLine;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();

// Function for getting an example file history ordered by a date proprety ascending
function getExampleFileHistory() {
    const history = [];
    const dateTime = new Date();
    const fileAction1 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Mappenaktion;en:File action"),
        date: context.addTimeInterval(dateTime, -29, "hours", false),
        text: context.getLocaleValue("de:Mappe angelegt;en:File created"),
        user: "Import",
        highlight: false
    };
    history.push(fileAction1);

    const fileAction2 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Dokumentenaktion;en:Document action"),
        date: context.addTimeInterval(dateTime, -27, "hours", false),
        text: context.getLocaleValue("de:abc.pdf hochgeladen;en:abc.pdf uploaded"),
        user: "Frisch, Eva",
        highlight: false
    };
    history.push(fileAction2);

    const fileAction3 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Workflowaktion;en:Workflow action"),
        date: context.addTimeInterval(dateTime, -13, "hours", false),
        text: context.getLocaleValue("de:Freigabeworkflow abc gestartet;en:Approval workflow abc started"),
        user: "Oppen, Bernhard",
        highlight: false
    };
    history.push(fileAction3);

    const fileAction4 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Workflowaktion;en:Workflow action"),
        date: context.addTimeInterval(dateTime, -7, "hours", false),
        text: context.getLocaleValue("de:Freigabe 1 durchgeführt;en:Approval 1 completed"),
        user: "Schmidt, Miriam",
        highlight: true
    };
    history.push(fileAction4);

    const fileAction5 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Workflowaktion;en:Workflow action"),
        date: context.addTimeInterval(dateTime, -2, "hours", false),
        text: context.getLocaleValue("de:Freigabe 2 durchgeführt;en:Approval 2 completed"),
        user: "Schreiber, Willi",
        highlight: true
    };
    history.push(fileAction5);

    const fileAction6 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Mappenaktion;en:File action"),
        date: context.addTimeInterval(dateTime, -1, "hours", false),
        text: context.getLocaleValue("de:Mappe archiviert;en:File archived"),
        user: "Job",
        highlight: false
    };
    history.push(fileAction6);

    history.sort((a, b) => b.date - a.date);
    return history;
}
```

/**
 * Simple example for displaying the timeline with example history data
 * Using the file type property marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Timeline_ExampleHistory', gadgetAction: 'show'}]
 */

// Import the gadgetAPI
context.enableModules(); // no longer needed since documentsOS
const gadgetAPI = require("gadgetAPI.module.gadgetAPI");
// Register the gadget action
gadgetAPI.registerGadgetAction("show", function() {
    const timeLine = gadgetAPI.getTimelineInstance();
    // Get an example file history
    const bubbles = getExampleFileHistory();
    const lang = context.getClientLang();
    // Add the bubbles
    bubbles.forEach(function(item) {
        timeLine.addBubble({
            id: item.id,
            title: "<b>" + item.title + "</b>",
            content: "<b>" + item.text + "</b><br/>" + context.convertDateToString(item.date, lang) + "</b><br/>" + item.user,
            highlight: item.highlight
        })
    });
    // Set the header
    timeLine.setHeader("<h1>" + context.getLocaleValue("de:Mappenhistorie;en:File history") + "</h1>");
    // Return the time line
    return timeLine;
});
// Return the gadgetAPI instance
context.returnValue = gadgetAPI.transfer();

// Function for getting an example file history ordered by a date proprety ascending
function getExampleFileHistory() {
    const history = [];
    const dateTime = new Date();
    const fileAction1 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Mappenaktion;en:File action"),
        date: context.addTimeInterval(dateTime, -29, "hours", false),
        text: context.getLocaleValue("de:Mappe angelegt;en:File created"),
        user: "Import",
        highlight: false
    };
    history.push(fileAction1);

    const fileAction2 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Dokumentenaktion;en:Document action"),
        date: context.addTimeInterval(dateTime, -27, "hours", false),
        text: context.getLocaleValue("de:abc.pdf hochgeladen;en:abc.pdf uploaded"),
        user: "Frisch, Eva",
        highlight: false
    };
    history.push(fileAction2);

    const fileAction3 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Workflowaktion;en:Workflow action"),
        date: context.addTimeInterval(dateTime, -13, "hours", false),
        text: context.getLocaleValue("de:Freigabeworkflow abc gestartet;en:Approval workflow abc started"),
        user: "Oppen, Bernhard",
        highlight: false
    };
    history.push(fileAction3);

    const fileAction4 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Workflowaktion;en:Workflow action"),
        date: context.addTimeInterval(dateTime, -7, "hours", false),
        text: context.getLocaleValue("de:Freigabe 1 durchgeführt;en:Approval 1 completed"),
        user: "Schmidt, Miriam",
        highlight: true
    };
    history.push(fileAction4);

    const fileAction5 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Workflowaktion;en:Workflow action"),
        date: context.addTimeInterval(dateTime, -2, "hours", false),
        text: context.getLocaleValue("de:Freigabe 2 durchgeführt;en:Approval 2 completed"),
        user: "Schreiber, Willi",
        highlight: true
    };
    history.push(fileAction5);

    const fileAction6 = {
        id: util.getUniqueId(),
        title: context.getLocaleValue("de:Mappenaktion;en:File action"),
        date: context.addTimeInterval(dateTime, -1, "hours", false),
        text: context.getLocaleValue("de:Mappe archiviert;en:File archived"),
        user: "Job",
        highlight: false
    };
    history.push(fileAction6);

    history.sort((a, b) => b.date - a.date);
    return history;
}Download: [GadgetSample_Timeline_ExampleHistory.js](../assets/samples/GadgetSample_Timeline_ExampleHistory.js)

Die Darstellung bei Verwendung der Mappentypeigenschaft `marginGadgetConfigs=[{gadgetScript: 'GadgetSample_Timeline_ExampleHistory', gadgetAction: 'show'}]` an einem beliebigen Mappentyp wäre dann wie folgt:


![timeline-4](../assets/img/timeline-4.png)

Abb. 107 - Timeline am Mappentyp mit Darstellung von Beispieldaten