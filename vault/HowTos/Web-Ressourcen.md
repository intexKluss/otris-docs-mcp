---
title: "Mandantenspezifische Web-Ressourcen"
source: "https://otris.software/documents/howto/files/web-resources.html"
---

# Mandantenspezifische Web-Ressourcen

Ab **documentsOS** Version `6.1.1` ist es möglich, über globale Eigenschaften
vom Typ `custompropertyblob` statische Web-Ressourcen zur Verfügung zu stellen.
Die Dateien stehen dann über die folgende URL zur Verfügung:

**http(s)://[BASIS_URL]/static/[MANDATENNAME]/...**

Die `BASIS_URL` ist in diesem Fall der *Startpunkt* der
documentsOS Webapplikation, z.B.:

- http://localhost:8080/documents/ bei einer lokalen Entwicklungsumgebung und direktem Zugriff auf den documentsOS Webserver (Tomcat) oder
- https://documents.example.com/ bei der Bereitstellung der documentsOS Webapplikation über eine Subdomain (z.B. über einen Reverse Proxy) bzw.
- https://example.com/documents bei Bereitstellung der documentsOS Webapplikation über einen bestimmten Kontext-Pfad /documents.


## Globale Eigenschaften anlegen

Mit globalen Eigenschaften vom Typ `custompropertyblob` kann man Dateien
im Mandanten ablegen, z.B.:

- per Documents Manager: Monitoring / Globale Eigenschaften oder
- per AdminCenter: AdminTools / Entwicklung / Properties bzw.
- per Skript: siehe nachfolgendes Beispiel


```javascript
// Beispiel für die Anlage einer globalen Eigenschaft vom Typ "custompropertyblob"
const propName = "de.otris.documents.web.static.myCustomImages";
const prop = context.setOrAddCustomProperty(propName, "custompropertyblob", "");
prop.uploadBlob("/home/documents/my-path/my-custom-images.zip");
```

// Beispiel für die Anlage einer globalen Eigenschaft vom Typ "custompropertyblob"
const propName = "de.otris.documents.web.static.myCustomImages";
const prop = context.setOrAddCustomProperty(propName, "custompropertyblob", "");
prop.uploadBlob("/home/documents/my-path/my-custom-images.zip");Damit diese, so zum Mandanten hinzugefügten Dateien auch als statische
Web-Ressourcen über den Webserver verfügbar sind, ist folgendes zu beachten:

- Die Dateien müssen im ZIP-Archiv Format vorliegen.
- Der Name der Eigenschaft muss immer mit der Zeichenkette de.otris.documents.web.static. beginnen.


## Web-Zugriff

Die so in den ZIP-Archiven abgelegten Dateien können dann über
die folgende URL referenziert bzw. geladen werden.

**https://[BASIS_URL]/static/[MANDATENNAME]/[PFAD_IN_DER_ZIP_DATEI]/[DATEINAME]**

Beispiel: `https://example.com/documents/static/relations/path/in/zip/my-image.png`

**Wichtiger Hinweis:** Alle Dateien, die so zur Verfügung gestellt werden,
sind über eine URL ohne Anmeldung erreichbar. Laden Sie daher nur
Dateien hoch, die **keine** vertraulichen Informationen enthalten.


## Beispiele


### Beispiel 1, Web-Ressourcen für Login-Maske verwenden

In diesem Beispiel werden Web-Ressourcen verwendet, um projektspezifische
Images (Bilddateien) für die Loginmaske bereitzustellen.

1. Globale Eigenschaft anlegen

- Name: de.otris.documents.web.static.loginImages (de.otris.documents.web.static. = fester Wert, loginImages = frei wählbar)
- Typ: custompropertyblob (fester Wert)
- Wert: ZIP-Datei hochladen, z.B.: loginImages.zip

**Beispiel für die Anlage per AdminCenter**


Abb. 1 - AdminCenter Navigation


Abb. 2 - AdminCenter Eigenschaft

1. Documents-Eigenschaften anlegen

Die Documents-Eigenschaften *loginHeaderImage*, *loginCompanyImage* und
*loginBackgroundImage* können dazu verwendet werden, auf der Login-Maske
projektspezifische Images bereitzustellen. Da diese Dateien nach der Anlage
der globalen Eigenschaft als Web-Ressource bereitstehen,
können als Werte nun angegeben werden:

- loginHeaderImage: /static/header.png
- loginCompanyImage: /static/company.png
- loginBackgroundImage: /static/background.png

**Hinweis:** Wenn Documents-Eigenschaften geändert bzw. neue Web-Ressourcen
als globale Eigenschaft angelegt werden, muss der Webserver neu gestartet
oder ein `...&cacheEvent=clearAll` durchgeführt werden. Alternativ dazu kann
auch die entsprechende Funktionalität des AdminCenters verwendet werden.


## Beispiel 2, Einbettung von HTML-Code

In diesem Beispiel werden Web-Ressourcen verwendet, um in den ZIP-Archiven
zusätzlichen **HTML-Code** zu hinterlegen, der dann automatisch in die
Webapplikation eingebunden wird.


### Vorbemerkungen

Dabei kann HTML-Code für die Loginseite als auch für die
Webapplikation (nach dem Login) hinzugefügt werden. Der HTML-Code wird
im *Head-Bereich* (`<head>`) der Seite eingefügt.

Um diese Funktionalität zu nutzen, muss innerhalb eines ZIP-Archives eine
Datei mit dem folgenden Namen angelegt werden:

- client-header-code-main-[ID].html: HTML-Code für die Webapplikation (nach dem Login)
- client-header-code-login-[ID].html: HTML-Code für die Login-Seite der Webapplikation

Der Dateiname muss dabei mit der Zeichenkette `client-header-code-main-`
bzw. `client-header-code-login-` beginnen. Für die nachfolgende `ID` sollte ein
möglichst eindeutiger technischer Bezeichner (ohne Leerzeichen und Umlaute)
gewählt werden.

Um diese ZIP-Archive ohne Anpassung in verschiedenen Mandanten verwenden zu
können, werden die folgenden Ersetzungen innerhalb des HTML-Codes unterstützt:

1. Die Ersetzungsmarke /CONTEXT_PATH/ wird durch den Kontext-Pfad (s.o.) der Webapplikation ersetzt.
2. Die Ersetzungsmarke /static/... wird durch den Pfad zu den statischen Web-Ressourcen des aktuellen Mandanten ersetzt.

**Hinweis:** Die beiden Ersetzungsmarken müssen immer der Beginn
der Links bzw. URLs sein.

**Beispiel:**

- Mandantenname: relations
- URL der Webapplikation: https://example.com/documents/


```html
<!-- Code in der Datei -->
<link rel="stylesheet" type="text/css" href="/static/my-css.css" />
```

<!-- Code in der Datei -->
<link rel="stylesheet" type="text/css" href="/static/my-css.css" />
```html
<!-- Eingebetteter Code -->
<link rel="stylesheet" type="text/css" href="/documents/static/relations/my-css.css" />
```

<!-- Eingebetteter Code -->
<link rel="stylesheet" type="text/css" href="/documents/static/relations/my-css.css" />
### Beispielhafte Einbindung der Bibliothek MapLibre GL JS

[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/) ist eine
JavaScript-Bibliothek, die interaktive Karten im Webbrowser rendert.
Sie basiert auf WebGL und verwendet Vektorkacheln für eine schnelle und
flexible Darstellung. Ursprünglich war sie Teil von Mapbox GL JS,
wurde aber als Open-Source-Projekt weitergeführt.

In diesem Beispiel wird diese Bibliothek in der documentsOS Webapplikation über
den oben beschriebenen Mechanismus verfügbar gemacht. Dazu wird ein ZIP-Archiv
mit dem folgenden Aufbau benötigt.


#### Inhalt und Struktur des ZIP-Archivs


Abb. 3 - ZIP-Archiv: de.otris.documents.web.static.maplibre.zip

Die Dateien im Verzeichnis **maplibre-gl** können direkt von der Seite des
Projektes [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/)
heruntergeladen werden.

Download: [de.otris.documents.web.static.maplibre.zip](../assets/web-resources/de.otris.documents.web.static.maplibre.zip)


#### client-header-code-main-maplibre.html

Die Datei `client-header-code-main-maplibre.html` enthält folgenden Inhalt.


```html
<script src="/static/maplibre-gl/maplibre-gl.js"></script>
<link href="/static/maplibre-gl/maplibre-gl.css" rel="stylesheet" />
```

<script src="/static/maplibre-gl/maplibre-gl.js"></script>
<link href="/static/maplibre-gl/maplibre-gl.css" rel="stylesheet" />
#### Eigenschaft de.otris.documents.web.static.maplibre

Im Mandanten legt man eine globale Eigenschaft mit dem
Namen `de.otris.documents.web.static.maplibre` und dem Typ `custompropertyblob`
an und lädt die hier verfügbare ZIP-Datei an dieser Eigenschaft hoch:

Download: [de.otris.documents.web.static.maplibre.zip](../assets/web-resources/de.otris.documents.web.static.maplibre.zip)

Die JavaScript-Bibliothek wird nun automatisch in die documentsOS
Webapplikation eingebunden und kann zum Beispiel in einem eigenen
Gadget verwendet werden.


#### Gadget MapLibre


Abb. 4 - Gadget MapLibre

Download: [Gadget_MapLibreExample.js](../assets/web-resources/Gadget_MapLibreExample.js)


```javascript
const gAPI = require("gadgetAPI.module.gadgetAPI");

/**
 * {
 *   gadgetScript: "Gadget_MapLibreExample",
 *   gadgetAction: "showMap",
 *   gadgetWidth: 1000,
 *   gadgetHeight: 800
 * }
 */
gAPI.registerGadgetAction("showMap", function () {
    const contextData =  { id: "id" + util.getUniqueId() };
    const gadget = gAPI.getHTMLInstance();
    gadget.setTitle("otris software AG | Königswall 21 | 44137 Dortmund")
    gadget.setContextData(contextData);
    gadget.appendHtml(`<div id="${contextData.id}"
        style="width:100%;height:100%;"></div>`
    );

    gadget.onGadgetLoad(function showForm() {
        const cData = documentsContext.getGadgetContext().getContextData();
        // Verwendung der Javascript-Bibliothek MapLibre GL JS
        const map = new maplibregl.Map({
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [7.455700, 51.516500],
            zoom: 16,
            pitch: 60,
            bearing: -17,
            container: cData.id
        });
        new maplibregl.Marker({ color: "#ea6a21" })
            .setLngLat([7.455700, 51.516500])
            .addTo(map);
    });
    return gadget;
});

context.returnValue = gAPI.transfer();
```

const gAPI = require("gadgetAPI.module.gadgetAPI");

/**
 * {
 *   gadgetScript: "Gadget_MapLibreExample",
 *   gadgetAction: "showMap",
 *   gadgetWidth: 1000,
 *   gadgetHeight: 800
 * }
 */
gAPI.registerGadgetAction("showMap", function () {
    const contextData =  { id: "id" + util.getUniqueId() };
    const gadget = gAPI.getHTMLInstance();
    gadget.setTitle("otris software AG | Königswall 21 | 44137 Dortmund")
    gadget.setContextData(contextData);
    gadget.appendHtml(`<div id="${contextData.id}"
        style="width:100%;height:100%;"></div>`
    );

    gadget.onGadgetLoad(function showForm() {
        const cData = documentsContext.getGadgetContext().getContextData();
        // Verwendung der Javascript-Bibliothek MapLibre GL JS
        const map = new maplibregl.Map({
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [7.455700, 51.516500],
            zoom: 16,
            pitch: 60,
            bearing: -17,
            container: cData.id
        });
        new maplibregl.Marker({ color: "#ea6a21" })
            .setLngLat([7.455700, 51.516500])
            .addTo(map);
    });
    return gadget;
});

context.returnValue = gAPI.transfer();

## Hinweise zur CSP-Konfiguration

Innerhalb der documentsOS Webapplikation muss das Laden von externen Ressourcen
aus Sicherheitsaspekten grundsätzlich explizit freigegeben werden. Für das
o.a. Beispiel **Gadget MapLibre** müssen die *Kartenkacheln* von einem externen
Host geladen werden. Dieser Host muss über die **csp-config** freigegeben werden.
Dazu muss eine globale Eigenschaft mit dem Namen `csp-config` und
dem Typ `csp-config` angelegt werden und der folgende Wert gesetzt werden.
Eine eventuell vorhandene CSP-Konfiguration muss dann ggf. angepasst werden,
damit auch der hier erforderliche Host freigegeben wird.


```json
{
  "routes": {
    "documents": {
      "source-hosts": ["https://tiles.openfreemap.org"]
    }
  }
}
```

{
  "routes": {
    "documents": {
      "source-hosts": ["https://tiles.openfreemap.org"]
    }
  }
}**Hinweis:** Falls die CSP-Konfiguration verändert wurde, muss der Webserver
neu gestartet oder ein `...&cacheEvent=clearAll` durchgeführt werden.
Alternativ dazu kann auch die entsprechende Funktionalität des AdminCenters
verwendet werden.