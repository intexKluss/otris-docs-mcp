---
title: "HTML-Code im Header einbetten"
source: "https://otris.software/documents/howto/common/embed-header-code.html"
---

# HTML-Code im Header einbetten

Seit der Version Documents-Version *5.0e* ist es möglich zusätzlichen *HTML-Code*
im *Header* (`<head>…</head>`) einzubetten. Dazu wird über die globale Eigenschaft
`clientHeaderCode` ein Skript festgelegt. Das Skript wird einmalig direkt nach
dem Login des Benutzers ausgeführt und der Rückgabewert des Skriptes als
*HTML-Code* direkt vor dem schließenden `</head>`-Tag eingefügt.

Mit dieser neuen Funktionalität ist es jetzt zum Beispiel möglich *Exits*
(`documents.sdk.exitRegistry` und `documents.sdk.gentable.gentableRegistry`) in
Portalskripten zu definieren und diese dann im *WebClient* verfügbar zu machen.

**Achtung:** Diese Funktionalität sollte mit besonderer Sorgfalt verwendet
werden, da durch das Einfügen von externen Ressourcen ein potentielles
Sicherheitsrisiko entsteht. Auch Fehler im zurück gelieferten Code können
dazu führen, dass die Applikation im Browser nicht mehr gestartet werden kann.

Zur Erstellung des *HTML-Code* muss die Klasse [[Script Extensions API/otris.tools.ClientHeaderCode]]
im Portalscripting verwendet werden. Nur so kann sichergestellt werden, dass auch
registrierte Callbacks korrekt ausgeführt werden. Details zur Verwendung
befinden sich in der [[Script Extensions API/otris.tools.ClientHeaderCode|Script Extensions API]].


## Beispiel zur Verwendung der ClientHeaderCode Klasse


### Erzeugen einer Instanz der Klasse ClientHeaderCode


```javascript
//#import "ClientHeaderCode"
// Instanz der Klasse ClientHeaderCode erzeugen
var clientHeaderCode = new otris.tools.ClientHeaderCode();
// Hilfsvariablen
var customData, headString, dataURI;
```

//#import "ClientHeaderCode"
// Instanz der Klasse ClientHeaderCode erzeugen
var clientHeaderCode = new otris.tools.ClientHeaderCode();
// Hilfsvariablen
var customData, headString, dataURI;
### Methode: addScriptCodeByScriptName()

Mit der Methode `addScriptCodeByScriptName()` kann man den Code eines
Portalskriptes als Javascript Code an den Client transferieren. **Hinweis:**
Der Code wird im Browser innerhalb einer
[IIFE (immediately-invoked function expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) eingebettet.


```javascript
clientHeaderCode.addScriptCodeByScriptName("crmContact_fileExits");
```

clientHeaderCode.addScriptCodeByScriptName("crmContact_fileExits");
#### Methode: addScriptCodeWithFunction()

Über die Methode `addScriptCodeWithFunction()` wird die angegebene Funktion an den Client transferiert und dort über
eine *IIFE* direkt ausgeführt. Optional ist es möglich ein Objekt als Funktionsparameter zu übergeben.
**Hinweis:** Das übergebene Objekt wird zum Transfer zum Client mittels der Methode `JSON.stringify()` serialisiert.


```javascript
customData = { myKey: "My custom value!" };
function myClientHeaderCodeFunction(data) {
    console.log("This code is executed on the client side.");
    console.log(data.myKey);
};
clientHeaderCode.addScriptCodeWithFunction(myClientHeaderCodeFunction, customData)
```

customData = { myKey: "My custom value!" };
function myClientHeaderCodeFunction(data) {
    console.log("This code is executed on the client side.");
    console.log(data.myKey);
};
clientHeaderCode.addScriptCodeWithFunction(myClientHeaderCodeFunction, customData)
#### Methode: addCode()

Über die Methode `addCode()` kann Javascript-Code als Zeichenkette übergeben werden.
Die übergebene Zeichenkette wird direkt als `Javascript-Code` innerhalb eines
*<script>-Tags* eingefügt.


```javascript
clientHeaderCode.addCode("console.log('Hello World!');")
```

clientHeaderCode.addCode("console.log('Hello World!');")
#### Methode: addHeadString()

Mit der Methode `addHeadString()` lassen sich beliebige Zeichenketten im *Header*
einfügen. In diesem Beispiel wird über ein *<link>-Tag* ein *base64-codiertes Favicon*
im *Header* referenziert.


```javascript
dataURI = "data:image/png;base64,iVBO...II=";
headString = '<link rel="icon" type="image/x-icon" href="' + dataURI + '">';
clientHeaderCode.addHeadString(headString);
```

dataURI = "data:image/png;base64,iVBO...II=";
headString = '<link rel="icon" type="image/x-icon" href="' + dataURI + '">';
clientHeaderCode.addHeadString(headString);Über die Methode `transfer()` wird der zu transferierende `HTML-Code` erzeugt.


```javascript
return clientHeaderCode.transfer();
```

return clientHeaderCode.transfer();Download: [generateClientHeaderCode.js](generateClientHeaderCode.js)