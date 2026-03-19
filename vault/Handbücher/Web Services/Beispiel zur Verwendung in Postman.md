---
title: "Beispiel zur Verwendung in Postman"
source: "https://otris.software/documents/manuals/books/otrwebservices/documents-api-example-postman.html"
---

# Beispiel zur Verwendung in Postman


## Allgemeines

Postman ist eine API-Plattform, auf der Entwickler ihre APIs entwerfen, erstellen, testen und weiterentwickeln können, siehe auch [Wikipedia](https://de.wikipedia.org/wiki/Postman_(Software)).

**Hinweis:** Das nachfolgende Beispiel beschreibt lediglich mögliche Einstellungen in Postman. Kenntnisse in der Software werden vorausgesetzt.

Um einen Web Service vom Typ *Documents-API* per Postman zu testen kann folgendermaßen vorgegangen werden, es wird davon ausgegangen, dass folgende Schritte vorher durchgeführt wurden:

- Allgemeine Voraussetzungen wurden beachtet
- Erweiterung Web Services wurde aktiviert
- API-Key wurde für einen entsprechenden Benutzer erstellt
- Ein Web Service vom Typ Documents-API wurde mit erlaubten Endpunkten angelegt


## Import OpenAPI 3.0 mit Postman Collection

Zur Nutzung von Postman wird eine Postman Collection laut OpenAPI 3.0 Spezifikation bereitgestellt, diese kann hier heruntergeladen werden:

Download: [DOCUMENTS REST API](openapi-documents.yml)

Nach der Installation von Postman, siehe auch [Installation Postman](https://www.postman.com/downloads/) kann in Postman über den Menüpunkt *File / Import* die Datei zum Import ausgewählt werden.


![documents-api-example-postman-1](./assets/documents-api-example-postman-1.png)

Abb. 10 - Postman, Importdialog (1)


![documents-api-example-postman-2](./assets/documents-api-example-postman-2.png)

Abb. 11 - Postman, Importdialog (2)

Nach erfolgreichem Import wird die API in Postman dargestellt.


![documents-api-example-postman-3](./assets/documents-api-example-postman-3.png)

Abb. 12 - Postman, Importierte API


## Einstellungen

Auf dem Knoten *DOCUMENTS REST API* können Einstellungen für *globale Variablen* vorgenommen werden.


![documents-api-example-postman-4](./assets/documents-api-example-postman-4.png)

Abb. 13 - Postman, Variablen angeben

Die Einstellungen für **server**, **principal** und **baseUrl** können passend zur jeweiligen Umgebung eingestellt werden.

Auf dem Register *Autorisierung* kann der API-Key als Bearer-Token angegeben werden.


![documents-api-example-postman-5](./assets/documents-api-example-postman-5.png)

Abb. 14 - Postman, Autorisierung angeben

Danach können die *Erlaubten Endpunkte* mit den jeweiligen Requests getestet werden.


## Beispiele


### Mappeninformationen holen

Auf den jeweiligen Endpunkten können Parameter angegeben werden (hier `GET /files/{fileId}`).


![documents-api-example-postman-6](./assets/documents-api-example-postman-6.png)

Abb. 15 - Postman, Mappeninformationen, Parameter

Wird die Mappen-Id der abzufragenden Mappe angegeben werden die entsprechenden Daten beim Ausführen der Anfrage ausgegeben.


![documents-api-example-postman-7](./assets/documents-api-example-postman-7.png)

Abb. 16 - Postman, Mappeninformationen


### Mappe ändern

Auf dem Endpunkt wird die Mappen-Id als Parameter angegeben (hier `PATCH /files/{fileId}`).


![documents-api-example-postman-8](./assets/documents-api-example-postman-8.png)

Abb. 17 - Postman, Mappe ändern, Parameter File-Id

Zusätzlich können per Body-Parameter die zu änderenden Informationen mitgegeben werden.


![documents-api-example-postman-9](./assets/documents-api-example-postman-9.png)

Abb. 18 - Postman, Mappe ändern, Body-Parameter und Ausgabe


### Mappen suchen

Auf dem Endpunkt können Body-Parameter angegeben werden um die Suche zu spezifizieren (hier `POST /files/query`).


![documents-api-example-postman-10](./assets/documents-api-example-postman-10.png)

Abb. 19 - Postman, Mappe suchen, Body-Parameter und Ausgabe


### Skript ausführen

Folgendes PortalSkript mit dem Namen *MyWebserviceScript* soll ausgeführt werden:


```javascript
return "Hello Postman! This is documentsOS with version: #" + util.buildNo + ".";
```

return "Hello Postman! This is documentsOS with version: #" + util.buildNo + ".";

![documents-api-example-postman-11](./assets/documents-api-example-postman-11.png)

Abb. 20 - Postman, Mappe suchen, Body-Parameter und Ausgabe