---
title: "Getting started: Skript-Aktionen"
source: "https://otris.software/documents/manuals/books/app-doc/script_actions_getting_started.html"
---

# Getting started: Skript-Aktionen

Die Funktionalität der App kann dynamisch über Skriptfunktionen
erweitert werden. Eine Skript-Aktion besteht immer aus mindestens zwei
Skripten. Einem *Konfigurationsskript* (appActionConfig_), welches die
Aktion verfügbar macht und einem *Aktionsskript*, welches die
Geschäftslogik enthält und somit die gewünschte Aktion durchführt
(appActionCall_).

Im Folgenden wird die Funktionsweise anhand eines „Hello World“-Beispiels erläutert.
Weitere Konfigurationsmöglichkeiten sind im Kapitel [„Konfiguration von Skript-Aktionen“](./script_actions.html) beschrieben.
Zusätzliche Anwendungsbeispiele sind im Kapitel [„Beispiele für Skript-Aktionen“](./script_actions_examples.html) zu finden.


## Die erste Aktion: Hello World

Der nachfolgende Code-Ausschnitt zeigt ein Beispiel für ein
Konfigurationsskript. Die Kommentare beschreiben die wesentlichen
Einträge. Auf diese wird jedoch später noch einmal genauer eingegangen.

**appActionConfig_test.js**


```javascript
module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: true,
        folder: false,
        file: false
    },
    //Technischer Bezeichner
    techName: "test",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "de:Aufruf der Test Aktion;",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 4, 17, 9, 23),
    //Aktion generieren
    action: {
        title: "Test Aktion", //Titel der Aktion in der App
        callScript: "appActionCall_test" //Skript, welches ausgeführt werden soll
    }
};
```

module.exports = {
    //Bereiche, in welchen diese Action gültig ist
    scopes: {
        global: true,
        folder: false,
        file: false
    },
    //Technischer Bezeichner
    techName: "test",
    //Der ergonomische Name, welcher in der Konfigurationsmappe angezeigt wird
    ergName: "de:Aufruf der Test Aktion;",
    //Datum der letzten Änderung an dieser Konfiguration
    lastChange: new Date(2018, 4, 17, 9, 23),
    //Aktion generieren
    action: {
        title: "Test Aktion", //Titel der Aktion in der App
        callScript: "appActionCall_test" //Skript, welches ausgeführt werden soll
    }
};Legen Sie nun dieses Skript unter dem Namen `appActionConfig_test` im
Documents-Manager an. Der Name eines Konfigurationsskriptes muss immer
mit `appActionConfig_` beginnen, da das Skript ansonsten nicht als
solches vom System erkannt wird.

Nun wird noch ein Aktionsskript benötigt, welches nachfolgend
dargestellt ist und unter dem Namen `appActionCall_test` angelegt werden
muss.

**appActionCall_test.js**


```javascript
var returnValue = {
    //Die nächste Aktion
    nextStep: "showText",
    //Daten für die nächste Aktion
    text: "Hello World " + context.getSystemUser().firstName
}
//Daten zurückgeben
return JSON.stringify(returnValue);
```

var returnValue = {
    //Die nächste Aktion
    nextStep: "showText",
    //Daten für die nächste Aktion
    text: "Hello World " + context.getSystemUser().firstName
}
//Daten zurückgeben
return JSON.stringify(returnValue);
Zuletzt muss die Aktion noch in der App-Konfiguration aktiviert werden.
Hierzu muss die Hauptseite der Konfigurationsmappe geöffnet werden. Hier
sollte nun eine Liste der aktivierten Aktionen in unter „Globales Menü“ erscheinen und .
Klicken Sie auf das Feld um vorhandene Aktionen zu aktivieren. Aktivierte Aktionen werden aufgelistet und können in der gewünschten Reihenfolge sortiert werden. Ordner- bzw. Mappen-Aktionen werden auf der jeweils entsprechenden Konfigurationsseite aktiviert.


![Aktivierung einer App-Aktion](media/script-actions-hello-world.png)

Abb. 45 - Aktivierung einer App-Aktion

Nachdem Sie die Änderungen gespeichert haben, können Sie Ihre App neu
synchronisieren. Auf dem Hauptbildschirm des mobilen Endgeräts sollte
daraufhin die Aktion im Menü verfügbar sein, welche nach Betätigung ein
Dialogfenster öffnet, welches „Hello World“ ausgibt.


![Aktionsmenü in der App](media/script-actions-hello-world-app-01.png)

Abb. 46 - Aktionsmenü in der App


![Dialogfenster in der App](media/script-actions-hello-world-app-02.png)

Abb. 47 - Dialogfenster in der App