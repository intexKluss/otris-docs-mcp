---
title: "Beispiele Push-Benachrichtigungen"
source: "https://otris.software/documents/manuals/books/app-doc/push_examples.html"
---

# Beispiele Push-Benachrichtigungen

Die folgende Dokumentation zeigt exemplarisch das Versenden von Push-Benachrichtigungen auf. Die Konfiguration ist im Kapitel [Push-Benachrichtigungen](./push_notifications.html#testen-der-push-benachrichtigungen) beschrieben.


## Verlinken von Mappen, Ordnern und Dokumenten


![Push Nachricht mit verlinkter Mappe](media/push-notification.png)

Abb. 69 - Push Nachricht mit verlinkter Mappe


### Versenden eines Mappen-Links

Das folgende Beispiel zeigt, wie ein Mappen-Link in eine Push-Benachrichtigung integriert werden kann, sodass die jeweilige Mappe direkt geöffnet wird.


```javascript
const appNotificationLibrary = require("appNotificationLibrary");

var product = new FileResultset("crmProduct", "crmId=pc011ac").first();
var id = product.getid();

var notificationData = {
    title: "Mappe öffnen",
    message: "Diese Nachricht öffnet eine Mappe",
    fileId: id,
    fileType: "file"
};

appNotificationLibrary.sendNotificationWithOtrisPush("oppen", notificationData);
```

const appNotificationLibrary = require("appNotificationLibrary");

var product = new FileResultset("crmProduct", "crmId=pc011ac").first();
var id = product.getid();

var notificationData = {
    title: "Mappe öffnen",
    message: "Diese Nachricht öffnet eine Mappe",
    fileId: id,
    fileType: "file"
};

appNotificationLibrary.sendNotificationWithOtrisPush("oppen", notificationData);

![](media/push-file.png?class=small)

Abb. 70 - Geöffnete Mappe


### Versenden eines Dokumenten Links

In diesem Beispiel wird veranschaulicht, wie ein Dokumenten-Link in einer Push-Benachrichtigung eingebunden wird, um das entsprechende Dokument direkt aufzurufen.
Hierfür wird sowohl die `fileId` als auch die `docId` benötigt.


```javascript
const appNotificationLibrary = require("appNotificationLibrary");

var product = new FileResultset("crmProduct", "crmId=pc011ac").first();
var docs = product.getRegisterByName("crmAttachments").getDocuments();

for (var doc = docs.first(); doc; doc = docs.next()) {
    if (doc.extension === "pdf") {
        util.out("Versende Push-Nachricht mit Link auf: " + doc.fullname);

        var notificationData = {
            title: "PDF einer Mappe öffnen",
            message: "Diese Nachricht öffnet eine PDF",
            fileId: product.getid(),
            fileType: "doc",
            docId: doc.id
        };
        appNotificationLibrary.sendNotificationWithOtrisPush("oppen", notificationData);
        break;
    }
}
```

const appNotificationLibrary = require("appNotificationLibrary");

var product = new FileResultset("crmProduct", "crmId=pc011ac").first();
var docs = product.getRegisterByName("crmAttachments").getDocuments();

for (var doc = docs.first(); doc; doc = docs.next()) {
    if (doc.extension === "pdf") {
        util.out("Versende Push-Nachricht mit Link auf: " + doc.fullname);

        var notificationData = {
            title: "PDF einer Mappe öffnen",
            message: "Diese Nachricht öffnet eine PDF",
            fileId: product.getid(),
            fileType: "doc",
            docId: doc.id
        };
        appNotificationLibrary.sendNotificationWithOtrisPush("oppen", notificationData);
        break;
    }
}

![](media/push-doc.png?class=small)

Abb. 71 - Geöffnetes Dokument


### Versenden eines Ordner Links

Das letzte Beispiel demonstriert, wie ein Ordner-Link z.B. zur Inbox eines Nutzers in eine Push-Benachrichtigung eingefügt werden kann, sodass der zugehörige Ordner unmittelbar geöffnet wird.


```javascript
const appNotificationLibrary = require("appNotificationLibrary");

const userName = "oppen"
const user = context.findSystemUser(userName);
const inbox = user.getPrivateFolder("inbox");

var notificationData = {
    title: "Ordner öffnen",
    message: "Diese Nachricht öffnet die Inbox des Nutzers",
    fileId: inbox.id,
    fileType: "folder"
};

appNotificationLibrary.sendNotificationWithOtrisPush(userName, notificationData);
```

const appNotificationLibrary = require("appNotificationLibrary");

const userName = "oppen"
const user = context.findSystemUser(userName);
const inbox = user.getPrivateFolder("inbox");

var notificationData = {
    title: "Ordner öffnen",
    message: "Diese Nachricht öffnet die Inbox des Nutzers",
    fileId: inbox.id,
    fileType: "folder"
};

appNotificationLibrary.sendNotificationWithOtrisPush(userName, notificationData);

![](media/push-folder.png?class=small)

Abb. 72 - Geöffnete Inbox


## Aktionen versenden über den Parameter "addData"

Der Parameter **addData** ermöglicht das Senden einer Aktion an den Nutzer.
Das folgende Beispiel zeigt, wie eine Push-Nachricht versendet werden kann, die z.B. direkt die Hello World-Aktion für den Nutzer öffnet.


```javascript
const appNotificationLibrary = require("appNotificationLibrary");

const userName = "oppen"
const user = context.findSystemUser(userName);

var data = {
    title: "Hallo " + user.firstName + " " + user.lastName,
    icon: "globe",
    inputs: [{
        type: "text",
        name: "name",
        placeholder: "Ihr Name hier"
    }],
    buttons: [{
        text: "Abbrechen",
        role: "cancel"
    }, {
        text: "Ok",
        appHandlerScript: "appActionCall_appHelloWorld"
    }]
};

var notificationData = {
    title: "Hello Word Beispiel",
    message: "Diese Nachricht öffnet eine Aktion",
    addData: JSON.stringify(data)
};

appNotificationLibrary.sendNotificationWithOtrisPush(userName, notificationData);
```

const appNotificationLibrary = require("appNotificationLibrary");

const userName = "oppen"
const user = context.findSystemUser(userName);

var data = {
    title: "Hallo " + user.firstName + " " + user.lastName,
    icon: "globe",
    inputs: [{
        type: "text",
        name: "name",
        placeholder: "Ihr Name hier"
    }],
    buttons: [{
        text: "Abbrechen",
        role: "cancel"
    }, {
        text: "Ok",
        appHandlerScript: "appActionCall_appHelloWorld"
    }]
};

var notificationData = {
    title: "Hello Word Beispiel",
    message: "Diese Nachricht öffnet eine Aktion",
    addData: JSON.stringify(data)
};

appNotificationLibrary.sendNotificationWithOtrisPush(userName, notificationData);

![](media/push-addData.png?class=small)

Abb. 73 - Per Push versendete Aktion