---
title: "Globales Skript mit einem clientScript"
source: "https://otris.software/documents/howto/toolbar-settings/globalScriptClientScript.html"
---

# Globales Skript mit einem clientScript


## Globale Eigenschaften

Über die  *globale Eigenschaft*`globalScript` kann in der Toolbar ein Icon angelegt werden,
dass auf einen Klick das hinterlegte Skript ausführt.


```javascript
globalScript = myScriptName
```

globalScript = myScriptNameStatt dem Standard-Icon kann ein beliebiges Icon definiert werden. Dazu muss
zusätzlich die Eigenschaft `globalScriptIcon` gesetzt werden. Als Wert muss die Eigenschaft
einen JSON-String enthalten. Der Aufbau des JSON-String kann an dem nachfolgendem Beispiel
abgelesen werden.
Eine Liste der verfügbaren Icons findet sich in der Datei `..\Programme\Documents5\doc\entypo.zip`.


```javascript
globalScriptIcon = {icon: 'entypo:help;color:red;', tooltip: 'Hilfe anzeigen!'}
```

globalScriptIcon = {icon: 'entypo:help;color:red;', tooltip: 'Hilfe anzeigen!'}

Abb. 1 - Toolbar mit globalScript-Icon


## Portal-Skript

Im Portal-Skript ist es mit dem **returnType**`clientScript` möglich clientseitig JavaScript-Code auszuführen.


```javascript
context.returnType = 'clientScript';

var url = 'https://www.otris.de/';
var options = 'width=640,height=480,menubar=no,toolbar=no,status=no,scrollbars=yes';
var returnValue = 'window.open("' + url + '", "externalWindow", "' + options + '");';

return returnValue;
```

context.returnType = 'clientScript';

var url = 'https://www.otris.de/';
var options = 'width=640,height=480,menubar=no,toolbar=no,status=no,scrollbars=yes';
var returnValue = 'window.open("' + url + '", "externalWindow", "' + options + '");';

return returnValue;In diesem Beispiel wird so, über einen Klick auf das Icon in der Toolbar,
die Seite [otris.de](https://otris.de) in einem neuen Browser-Fenster geöffnet.