---
title: "Eigene Implementierung"
source: "https://otris.software/documents/manuals/books/documents-drop/custom-drop.html"
---

# Eigene Implementierung

Zu weiteren Anpassung bzw. Erweiterung besteht die Möglichkeit auch eigene
Gadgets in den DOCUMENTS Drop zu integrieren. Um den drei
Standardfunktionalitäten einen weiteren Bereich hinzuzufügen muss die
Eigenschaft `DropConnector` angepasst werden.
Als Wert für die Eigenschaft muss ein Array von Gadget-Konfigurationen in
JSON-Notation angegeben werden. Mit der Zeichenkette `DEFAULT_DROP_GADGETS`
können die drei Standardfunktionalitäten in die Konfiguration übernommen
werden.

Im folgenden Beispiel wird zusätzlich zu den Standard-Gadgets ein weiteres
Gadget hinzugefügt.
`{ gadgetScript: 'Gadget_MyDropGadget', gadgetAction: 'show' }`


```javascript
[{ gadgetScript: 'Gadget_MyDropGadget', gadgetAction: 'show' }, DEFAULT_DROP_GADGETS]
```

[{ gadgetScript: 'Gadget_MyDropGadget', gadgetAction: 'show' }, DEFAULT_DROP_GADGETS]Zusätzlich zu der erforderlichen `execute`-Funktion muss die in der
*GadgetConfig* angegebene **gadgetAction** auch eine `switchEntry`-Funktion
enthalten. Die Funktion muss ein Objekt mit einem `label` und einer `id` zurück
liefern. Aus diesen Informationen wird dann der Eintrag für die Navigation
zwischen den verschiedenen Bereichen erstellt.
Durch die Rückgabe von `false` wird kein Eintrag in der Navigation erzeugt.


### Beispiel-Gadget Code


```javascript
//#import "Gadget_API_Controller"
function show() {
    this.switchEntry = function(options) {
        var nativeType = options.applicationInfo.nativeType,
            entry = { id: "btnMyDropGadget", label: "My drop gadget" };
        // Eintrag in den Web-Add-Ins nicht anzeigen
        return (nativeType.startsWith("webaddin:")) ? false : entry;
    };
    this.execute = function() {
        // Bekannte Verwendung der Gadget API
        var content = '<h1>2020, ready!</h1>',
            htmlGadget = new otris.gadget.gui.HTML(content);
        return htmlGadget.transfer();
    };
}
```

//#import "Gadget_API_Controller"
function show() {
    this.switchEntry = function(options) {
        var nativeType = options.applicationInfo.nativeType,
            entry = { id: "btnMyDropGadget", label: "My drop gadget" };
        // Eintrag in den Web-Add-Ins nicht anzeigen
        return (nativeType.startsWith("webaddin:")) ? false : entry;
    };
    this.execute = function() {
        // Bekannte Verwendung der Gadget API
        var content = '<h1>2020, ready!</h1>',
            htmlGadget = new otris.gadget.gui.HTML(content);
        return htmlGadget.transfer();
    };
}
### Programmierung

Zur Programmierung der Gadgets für den DOCUMENTS Drop stehen die folgenden
**APIs** zur Verfügung.


#### serverseitig

- Gadget API https://otris.software/documents/api/gadgets/
- Portalscript API https://otris.software/documents/api/portalscript/


#### clientseitig

- Documents Client SDK https://otris.software/documents/api/client-sdk/
- Documents Drop SDK https://otris.software/documents/api/documents-native/

**Hinweis:** Es besteht außerdem die Möglichkeit nur eine Gadget-Konfiguration
als Wert der globalen Eigenschaft zu setzen.
`DropConnector = { gadgetScript: 'Gadget_MainDropGadget', gadgetAction: 'show' }`
Die Implementierung der `switchEntry`-Funktion wird dann nicht benötigt und es
kann dann eine eigene Navigation erstellt werden.