---
title: "Einstellungen"
source: "https://otris.software/documents/manuals/books/otrwebservices/webhooks-detail.html"
---

# Einstellungen


## Zusätzliche Voraussetzungen

Zusätzlich zu den [Allgemeinen Voraussetzungen](requirements.html) muss für einen Webhook immer ein Skript bereitgestellt werden. Wird der Webhook von einer externen Anwendung aufgerufen, wird dieses Skript in documentsOS ausgeführt. Im Skript kann der Request ausgewertet und eine Nachricht zurückgesendet werden, Beispiel:


```js
module.exports.consume = function (request) {
    const data = request.body;
    return {
        status: 200,
        body: {
            type: "message",
            text: "This is a reply from documentsOS!"
        }
    };
}
```

module.exports.consume = function (request) {
    const data = request.body;
    return {
        status: 200,
        body: {
            type: "message",
            text: "This is a reply from documentsOS!"
        }
    };
}Jedes Skript, dass für einen Webhook verwendet werden soll, benötigt die Eigenschaft **webServicesEnabled** mit dem Wert **true**. Nur Skripte mit dieser Eigenschaft können später als *Verarbeitendes Portalscript* am Webhook ausgewählt werden.


![webhooks-detail-1](./assets/webhooks-detail-1.png)

Abb. 23 - Skripteigenschaft


## Webhook Einstellungen

Über den Konfigurationsordner *Web Services* werden im weiteren Verlauf die Einstellungen für einen oder mehrere Webhooks festgelegt. Per Klick auf den Ordner wird eine gruppierte Liste mit vorhandenen Web Services dargestellt, außerdem stehen in der Liste die notwendigen Aktionen *+ Webhook* und zum *Löschen* (Aktionsklappliste) bereit.


![webhooks-detail-2](./assets/webhooks-detail-2.png)

Abb. 24 - Liste Web Services

Per Klick auf einen Listeneintrag oder beim Erstellen einer neuen Konfiguration (+ Webhook) wird ein entsprechendes Formular dargestellt, in dem alle weiteren Einstellungen angegeben werden können. Werden Einstellungen getroffen oder geändert, erfolgt eine Markierung ( * ), die darauf hinweist, dass ungespeicherte Änderungen vorhanden sind und die Aktionen *Speichern* bzw. *Zurücksetzen* werden aktiviert.

**Hinweis:** Für alle Formularfelder stehen Tooltips als Entscheidungshilfe bereit.


![webhooks-detail-3](./assets/webhooks-detail-3.png)

Abb. 25 - Konfigurationsformular

Das Formularfeld *Webhook URL* wird beim Speichern gefüllt und ist nicht bearbeitbar. Über den Schalter am Feld kann diese URL in die Zwischenablage kopiert und später in der externen Anwendung einfach eingefügt werden.

Die URL wird automatisch nach folgendem Muster generiert:

- https://SSL-Hostname>/documents/api/documentsOS-Mandant/webhook/eindeutige ID
- Beispiel: https://documentsos.dockerhost2.otris.cloud/documents/api/relations/webhook/9ad3c0cd33e24eb7a9cb3396b3fae08d90bff6e7


## Webhook anbinden

Wurde der Webhook in Documents bereitgestellt, so kann dieser nun durch eine externe Anwendung aufgerufen werden. Da Webhooks ein nicht standardisiertes Verfahren sind, kann an dieser Stelle keine konkrete Anleitung für die Konfiguration bei diesen Anwendungen gegeben werden. Vielmehr müssen die Hinweise der entsprechenden Hersteller beachtet werden.

Für die Autorisierung bietet documentsOS grundsätzlich zwei Möglichkeiten:

1. Bei dem externen Anbieter kann ein "Authorization"-Header gesetzt werden. In diesem Fall empfiehlt es sich, diese Möglichkeit auch zu nutzen und hier den API-Schlüssel eines Documents-Benutzers zu hinterlegen. Dadurch wird jeder Aufruf des Webhooks im Kontext des entsprechenden Benutzers durchgeführt. Außerdem wird eine weitere Sicherheitsschicht eingeführt, da nur die entsprechende Anwendung Kenntnis über den API-Schlüssel hat und kein anderer den Webhook aufrufen kann. Der Authorization-Header muss wie folgt mitgegeben werden:
Header-Key: Authorization
Header-Value: App <API-Key eines Documents-Benutzers>
2. Bei dem externen Anbieter kann kein "Authorization"-Header gesetzt werden. In diesem Fall kann keine vorgelagerte Autorisierung einer Anfrage stattfinden. Stattdessen kann der Webhook durch jede andere Anwendung aufgerufen werden und bei jedem Aufruf wird das festgelegte Portalskript aufgerufen. Dennoch sollte eine Prüfung der Autorisierung im Skript implementiert werden. Viele Dienste schicken beispielsweise einen signierten Hash-Wert der Anfragedaten im Header mit. Dieser sollte dann im Skript gegengeprüft werden, bevor weitere Aktionen ausgeführt werden.