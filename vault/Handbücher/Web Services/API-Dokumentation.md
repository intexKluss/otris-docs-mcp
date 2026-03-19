---
title: "otrHttp"
source: "https://otris.software/documents/manuals/books/otrwebservices/otrhttp-api/index.html"
---

## otrHttp


# HTTP Client

Eine Funktionsbibliothek die es erleichtert mit dem XMLHttpRequest Dateiup- und Downloads durchzuführen und multipart/form-data und application/x-www-form-urlencoded u.Ä. zu senden.


## Funktionen


### Proxy Einstellungen

Über Documents Eigenschaften kann ein global gültiger Proxy-Server festgelegt werden.
Folgende Eigenschaften werden hierzu verwendet:

- otrHttpProxy: String mit dem Hostname des Proxy-Servers.
- otrHttpProxyPort (optional): Number mit dem Port, über welchen der Proxy Anfragen akzeptiert (default=3128).
- otrHttpProxyUser (optional): String mit dem Loginnamen für den Proxy.
- otrHttpProxyPasswd (optional): String mit dem Passwort für den Proxy.


## Beispiele


### POST-Request (per Konfiguration)


```javascript
const otrHttp = require("otrHttp");
const req = new otrHttp({
    method: "POST",
    url: "http://test.otris.de/test",
    headers: {
        Authorization: "App pK4srukK4eFhDCY32RRDYj"
    },
    contentType: "application/json",
    params: {
       beispiel: "Hallo Welt!"
    }
});
const response = req.send();
return response.myResponseParameter;
```


### Einfacher GET-Request


```javascript
const otrHttp = require("otrHttp");
const req = new otrHttp("GET", "http://test.otris.de/test", false);
req.addParameter("auth_key", "test123");
var response = req.send();
return response.myResponseParameter;
```


### Einfacher POST-Request (application/x-www-form-urlencoded)


```javascript
const otrHttp = require("otrHttp");
const req = new otrHttp("POST", "http://test.otris.de/test", false);
req.addParameter("auth_key", "test123");
var response = req.send();
return response.myResponseParameter;
```


### Dateiupload mit multipart/form-data


```javascript
const otrHttp = require("otrHttp");
const req = new otrHttp("POST", "http://test.otris.de/test", false);
req.setContentType("multipart/form-data");
req.addParameter("auth_key", "test123");
req.addParameter("my_file", "/tmp/aH7Hsdb7sd.txt", "myTempFile.txt");
var response = req.send();
return response.myResponseParameter;
```


### Dateidownload


```javascript
const otrHttp = require("otrHttp");
const req = new otrHttp("GET", "http://test.otris.de/test", false);
var tmpFile = context.getTmpFilePath();
req.responseFile = tmpFile;
var response = req.send();
return tmpFile;
```