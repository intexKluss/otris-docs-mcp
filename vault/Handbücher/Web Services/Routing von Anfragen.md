---
title: "Routing von Anfragen"
source: "https://otris.software/documents/manuals/books/otrwebservices/script-api-routes.html"
---

# Routing von Anfragen

Für jeden API-Endpunkt können statische Routen definiert werden.
Diese Routen bestehen im Kern aus einem **Pfad** und einer oder mehrerer **HTTP-Methoden**.
Die Konfiguration erfolgt im JSON-Format und sieht beispielsweise so aus:


```json
{
  "path": "/example",
  "methods": ["GET", "POST"],
  "script": "exampleHandler"
}
```

{
  "path": "/example",
  "methods": ["GET", "POST"],
  "script": "exampleHandler"
}In dem Beispiel wird eine Route unter dem Pfad `/example` und den HTTP-Methoden `GET` und `POST` angelegt.
Alle anderen Routen (beispielsweise "/example/test") würden zu einem `404 - Not Found` Fehlerstatus führen.
Wird der Pfad allerdings korrekt aufgerufen, so wird das PortalSkript `exampleHandler` ausgeführt. In diesem Skript können dann alle Eingabeparameter der Anfrage verarbeitet und eine Antwort vorbereitet werden (siehe [Skriptgesteuerte Verarbeitung von Anfragen](script-api-script)).


## Parameter

In diesem Abschnitt werden die wichtigsten Parameter für die Konfiguration einer Route erläutert.


### path

Über den Pfad kann definiert werden, auf welche URL-Aufrufe eine Route gematched werden soll.
Im einfachsten Fall ist dies ein statischer Wert, z.B. `/files`. Es sind aber auch kompliziertere Konstrukte möglich:

- Wildcards: Über das Anhängen von ** an den Pfad, kann dieser beliebig erweitert werden. Beispiel: /files/** würde sowohl auf /files/test, als auch auf files/action/review matchen.
- Pfad-Parameter: Über den Ausdruck {param} können beliebige Pfad-Parameter definiert werden. Beispiel: /files/{fileId} würde auf /files/relations_fi20200000001337 reagieren und dem verarbeitenden PortalSkript den Wert relations_fi20200000001337 als Parameter unter dem Namen fileId mitgeben.
- Reguläre Ausdrücke: Pfad-Parameter können auch auf reguläre Ausdrücke matchen. Hierzu kann ein regulärer Ausdruck nach einem : hinter dem Namen des Pfad-Parameter angegeben werden. Beispiel: /files/{fileId:relations_fi[0-9]{14}} würde nur auf Mappen-Ids matchen. Alle anderen Anfragen würden bereits vor Ausführung des PortalSkripts einen 404 - Not Found produzieren.


### methods

Über diesen Parameter können alle Methoden angegeben werden, welche für diesen Pfad erlaubt sein sollen. Es gibt die folgenden Möglichkeiten:

- GET
- PUT
- POST
- PATCH
- DELETE
- HEAD
- OPTIONS

Soll nur eine Methode erlaubt werden, kann diese auch als String angegeben werden. Mehrere Methoden werden als Strings in einem Array angegeben.
Sollen alle Methoden erlaubt sein, so kann dieser Parameter auch weggelassen werden.


### uploadMethods

Soll über eine Route der Upload von Dokumenten erlaubt werden, so muss dies speziell konfiguriert werden. Hierzu werden die entsprechenden HTTP-Methoden äquivalent zu `methods` in den Parameter `uploadMethods` geschrieben. So kann auch innerhalb eines Pfades differenziert werden, unter welchen Methoden ein Upload möglich ist und unter welchen nicht.


### script

Über den Parameter `script` kann das PortalSkript angegeben werden, welches ausgeführt wird, wenn die Route aufgerufen wurde. Wie dieses spezielle PortalSkript zu implementieren ist, kann in dem Abschnitt [Skriptgesteuerte Verarbeitung von Anfragen](script-api-script) nachgelesen werden.


### id

Eine eindeutige Kennung für diese Route. Werden mehrere Routen definiert, kann über diese Eigenschaft differenziert werden, welche konkrete Route aufgerufen wurde. Dies ist relevant, wenn ein PortalSkript mehrere Routen bearbeitet, so muss die Route (Pfad und Methode) nicht manuell durch den Entwickler ermittelt werden. Beispiel: Für die Route `POST``/files` kann die id `createFile` oder für die Route `GET``/files` die id `listFile` vergeben werden.


## Weitere Parameter

| Parameter | Datentyp | Beschreibung |
| --- | --- | --- |
| active | boolean | Aktiviert / Deaktiviert eine Route |
| uploadParts | string[] | Bei multipart/form-data Requests können hier alle Parameter angegeben werden, die als Datei zu behandeln sind. Alle anderen Parameter werden als normale Formular-Felder interpretiert. |
| staticParams | any | Individuelle Benutzer-Parameter, die an das verarbeitenden PortalSkript weitergereicht werden. Diese wirken sich nicht auf die Bearbeitung der Anfrage aus. |
| allowAnonymousRequest | boolean | Erlaubt Anfragen ohne Authentifizierung. Es muss also kein Authorization-Header angegeben werden. Anfragen werden mit dem global konfigurierten Standard-Benutzer ausgeführt, wenn sich der Benutzer nicht authentifiziert. |
| forceAnonymouseRequest | boolean | Führt Anfragen immer ohne Authentifizierung aus, auch wenn ein Authorization-Header durch den Benutzer angegeben wurde. |
| authorizedUsers | string[] | Nur die angegebenen Benutzer dürfen die entsprechende Route aufrufen. |
| authorizedAccessProfiles | string[] | Nur Benutzer in den angegebenen Zugriffsprofilen dürfen die entsprechende Route aufrufen. |
| includeRawRequestBody | boolean | Übermittelt den unbearbeiteten Body der Anfrage an das PortalSkript. Mögliche Parsing/Encoding Probleme können hiermit behoben werden. |
| corsAllowAny | boolean | Deaktiviert alle Cross-Origin Resource Sharing (CORS) Richtlinien. |
| accessControlAllowOrigin | string[] | Liste der Quellen, die für den Zugriff auf die Route zugelassen sind (Teil der CORS-Einstellungen). |
| accessControlAllowHeaders | string[] | Liste der HTTP-Header, die für die Route zugelassen sind (Teil der CORS-Einstellungen). |
| accessControlAllowMethods | string[] | Liste der HTTP-Methoden, die für die Route zugelassen sind (Teil der CORS-Einstellungen). |
| accessControlAllowCredentials | boolean | Flag, welches kennzeichnet, ob der Browser Anmeldeinformationen in die Anfragen aufnehmen soll (Teil der CORS-Einstellungen). |
| accessControlMaxAge | number | Maximale Zeit in Sekunden, welche die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden sollen. |


## Verschachtelte Routen

Routenkonfigurationen können beliebig tief verschachtelt werden. Hierzu wird der Parameter `routes` verwendet, um eine oder mehrere untergeordnete Routen zu definieren.
Beispiel:


```json
{
  "path": "/files",
  "script": "routingHttpService",
  "routes": [
    {
      "id": "createFile",
      "method": "POST"
    },
    {
      "path": "/{fileId}",
      "routes": [
        {
          "id": "getFile",
          "method": "GET"
        },
        {
          "id": "updateFile",
          "method": ["PUT", "PATCH"]
        }
      ]
    }
  ]
}
```

{
  "path": "/files",
  "script": "routingHttpService",
  "routes": [
    {
      "id": "createFile",
      "method": "POST"
    },
    {
      "path": "/{fileId}",
      "routes": [
        {
          "id": "getFile",
          "method": "GET"
        },
        {
          "id": "updateFile",
          "method": ["PUT", "PATCH"]
        }
      ]
    }
  ]
}
### Vererbung

Bei der Definition von untergeordeten Routen werden immer alle Parameter vererbt, es sei denn diese werden in der Route neu gesetzt und damit überschrieben. In dem Beispiel wird dadurch der Parameter `script` an alle untergeordnete Routen vererbt. Alle anderen oben genannten Parameter (z.B. `methods` oder `corsAllowAny`) würden sich ähnlich verhalten.
Bei der Vererbung gibt es allerdings eine Ausnahme: Der `path` wird nicht überschrieben, sondern als Prefix an den neuen Pfad gehangen. Dadurch ergibt sich in diesem Beispiel der Pfad `/files/{fileId}`.


### Routing Mechanismus

Alle Routen, welche im Scripting verarbeitet werden sollen, sollten eine eindeutige Kennung über den Parameter `id` erhalten. So ist ersichtlich, welche konkrete Route aufgerufen wurde.
Gibt es mehrere mögliche Routen, welche auf einen Aufruf matchen, so gewinnt zunächst die "tiefere" (in der Vererbung) und schließlich die "erste" (im Array auf einer Ebene).