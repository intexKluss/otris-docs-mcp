---
title: "Skriptgesteuerte Verarbeitung von Anfragen"
source: "https://otris.software/documents/manuals/books/otrwebservices/script-api-script.html"
---

# Skriptgesteuerte Verarbeitung von Anfragen

HTTP-Anfragen, welche über die Skript-API oder Webhooks eingehen, können über ein Portalskript verarbeitet werden. In diesem Kapitel wird erklärt, wie ein solches Portalskript zu implementieren ist.

**Wichtig:** Bei allen Portalskripten, welche HTTP-Anfragen bearbeiten, muss die Eigenschaft `webServicesEnabled` mit dem Wert `true` gesetzt sein.

Grundsätzlich stehen dem Entwickler hierzu zwei Objekte zur Verfügung:

- HttpRequest: Ein Objekt, welches alle Informationen über die empfangene Anfrage enthält.
- HttpResponse: Ein Objekt mit welche die Antwort für den Client vorbereitet werden kann.

Um diese Objekte zu erhalten, muss eine Callback-Funktion registriert werden.
Hierzu wird die Bibliothek `otrHttpService` verwendet:


```javascript
require("otrHttpService").registerEndpointHandler((req, resp) => {
  // Do some request handling
  util.out("Request received: " + req.method + " " + req.url);

  // Prepare a response
  resp.status(200).send("Hello world!");
});
```

require("otrHttpService").registerEndpointHandler((req, resp) => {
  // Do some request handling
  util.out("Request received: " + req.method + " " + req.url);

  // Prepare a response
  resp.status(200).send("Hello world!");
});
## Error Handling

Um eine einheitliche Fehlerbehandlung über die Schnittstelle bereitzustellen, sollte im Fehlerfall immer ein Objekt vom Typ HttpError verwendet werden:


```javascript
const HttpError = require("otrHttpError");

require("otrHttpService").registerEndpointHandler((req, resp) => {
  if (req.url.indexOf("42") < 0) {
    throw new HttpError(400, "Invalid path", "Path must contain '42'");
  }
  resp.status(200);
});
```

const HttpError = require("otrHttpError");

require("otrHttpService").registerEndpointHandler((req, resp) => {
  if (req.url.indexOf("42") < 0) {
    throw new HttpError(400, "Invalid path", "Path must contain '42'");
  }
  resp.status(200);
});In diesem Beispiel wird immer ein Fehler produziert, wenn der Pfad nicht `42` enthält. Der Fehler besteht dabei aus einem HTTP-Statuscode (`400`), einer Fehlermeldung (`Invalid path`) und einer detailierten Meldung (`Path must contain '42'`).
Diese Informationen werden, zusammen mit einem `correlationToken`, an den Client transferiert. Gleichzeitig wird die Fehlermeldung mit dem dazugehörigen, eindeutigen `correlationToken` ins Log geschrieben. Dadurch wird das Debugging erleichtert, da sich der entsprechende Fehler schnell im Log finden lässt.

Sollte es Informationen geben, welche nicht an den Client transferiert werden dürfen, so müssen diese entweder vorher gelogged werden oder dem `HttpError` muss ein `internalDetail` mitgegeben werden:


```javascript
throw new HttpError({
    status: 400,
    message: "Invalid path",
    detail: "Path must contain '42'",
    internalDetail: "Secret information, only visible for administrators");
```

throw new HttpError({
    status: 400,
    message: "Invalid path",
    detail: "Path must contain '42'",
    internalDetail: "Secret information, only visible for administrators");
## Routing

Soll nur auf eine spezifische Route reagiert werden, so muss die Funktion `registerRouteHandler()` verwendet werden:


```javascript
require("otrHttpService").registerRouteHandler("getFile", (req, resp) => {
  const fileId = req.params.fileId;
  const file = context.getFileById(fileId);

  if (!file) {
    throw new HttpError(
      404,
      "File not found",
      "No file with id '" + fileId + "' found"
    );
  }

  resp.status(200).json(file.asJSON());
});
```

require("otrHttpService").registerRouteHandler("getFile", (req, resp) => {
  const fileId = req.params.fileId;
  const file = context.getFileById(fileId);

  if (!file) {
    throw new HttpError(
      404,
      "File not found",
      "No file with id '" + fileId + "' found"
    );
  }

  resp.status(200).json(file.asJSON());
});In diesem Beispiel wird nur die Route mit der `id``getFile` bearbeitet.
In einem PortalSkript können beliebig viele Routen-Handler registriert werden.


## Dateien empfangen

**Vorraussetzung**: In der Route muss das Attribut `uploadMethods` definiert sein, damit die Anfrage als Dateiupload identifiziert wird (siehe [Routing von Anfragen](script-api-routes#uploadMethods)).

Dateien, welche durch den Client an den Server gesendet werden, werden immer in eine temporäre Datei geschrieben. Diese kann über das `files` Attribut auf dem `HttpRequest` abgeholt werden. Wird eine `multipart/form-data` Anfrage geschickt, so können in dem `files` Attribut auch mehrere Dateien vorhanden sein. Das `files` Attribut ist daher immer ein Array mit Objekten vom Typ `FileUploadInfo`. Aus diesem Objekt kann der Dateiname (sofern definiert) über `fileName` ausgelesen werden. Die Datei kann über `accessToken` und `getTempPathByToken()` abgerufen werden. Hierzu ein Beispiel:


```javascript
require("otrHttpService").registerRouteHandler("uploadToFile", (req, resp) => {
  const file = context.getFileById(req.params.fileId);

  const otrAssert = require("otrAssert");
  otrAssert.assertStartEdit(file, "uploadExample");
  const uploadRegister = file.getRegisterByName("crmAttachments");
  req.files.forEach((fileUploadInfo) => {
    const uploadFilePath = context.getTempPathByToken(
      fileUploadInfo.accessToken
    );
    const doc = uploadRegister.uploadDocument(
      uploadFilePath,
      fileUploadInfo.fileName || "unknown"
    );
  });
  otrAssert.assertCommit(file, "uploadExample");

  resp.status(201).json(file.asJSON());
});
```

require("otrHttpService").registerRouteHandler("uploadToFile", (req, resp) => {
  const file = context.getFileById(req.params.fileId);

  const otrAssert = require("otrAssert");
  otrAssert.assertStartEdit(file, "uploadExample");
  const uploadRegister = file.getRegisterByName("crmAttachments");
  req.files.forEach((fileUploadInfo) => {
    const uploadFilePath = context.getTempPathByToken(
      fileUploadInfo.accessToken
    );
    const doc = uploadRegister.uploadDocument(
      uploadFilePath,
      fileUploadInfo.fileName || "unknown"
    );
  });
  otrAssert.assertCommit(file, "uploadExample");

  resp.status(201).json(file.asJSON());
});**Hinweis**: Wenn `multipart/form-data` verwendet wird und Formulardaten zusätzlich zu einer Datei gesendet werden, müssen die Parameter, unter denen die Datei(en) erwartet werden, in der Routenkonfiguration definiert werden (siehe [uploadParts](script-api-routes#weitere-parameter)).


## Mehrere Parameter mit gleichen Namen

Werden durch den Client mehrere Parameter mit dem gleichen Namen gesendet, so wird im Standard nur der erste Parameter zur Verfügung gestellt. Es kann aber Anwendungsfälle geben, in denen alle Parameterwerte benötigt werden, beispielsweise wenn GET-Parameter mehrfach definiert werden. Um alle Parameter zu empfangen, muss `registerEndpointHandler()` oder `registerRouteHandler()` mit der Option `multipleParameters` aufgerufen werden:


```javascript
require("otrHttpService").registerRouteHandler(
  "getFile",
  { multipleParameters: true },
  (req, resp) => {
    util.out(req.params.fileId[0]);
    resp.status(200);
  }
```

require("otrHttpService").registerRouteHandler(
  "getFile",
  { multipleParameters: true },
  (req, resp) => {
    util.out(req.params.fileId[0]);
    resp.status(200);
  }In diesem Fall werden alle Parameterwerte in Arrays zur Verfügung gestellt. Wird ein Parameter mehrfach gesendet, hat das Array entsprechend mehrere Einträge.


## Standard Antworten

Wird die Routenkonfiguration sehr offen gestaltet, d.h. es werden mehr Routen ermöglicht, als es verarbeitende Routenhandler gibt, so kann es erforderlich werden Standard- bzw. Fallbackantworten zu definieren. Wird dies nicht gemacht, antwortet die Schnittstelle standardmäßig mit dem Statuscode `200 - OK`.

Um Standardantworten zu verfassen, muss **am Ende (WICHTIG!)** des verarbeitenden Portalskriptes die Funktion `registerDefaultHandler()` aufgerufen werden:


```javascript
require("otrHttpService").registerDefaultHandler((req, resp) => {
  resp.status(404).json({
    status: 404,
    message: "Resource not found.",
  });
});
```

require("otrHttpService").registerDefaultHandler((req, resp) => {
  resp.status(404).json({
    status: 404,
    message: "Resource not found.",
  });
});Soll wie in dem Beispiel eine `404 - Not Found` Antwort erzeugt werden, lässt sich dies auch vereinfacht abbilden:


```javascript
require("otrHttpService").registerDefault404Response();
```

require("otrHttpService").registerDefault404Response();Auch dieser Aufruf muss unbedingt am Ende des verarbeitenden Portalskriptes erfolgen.