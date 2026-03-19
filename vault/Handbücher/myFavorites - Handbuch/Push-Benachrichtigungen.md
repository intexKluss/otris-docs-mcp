---
title: "Push-Benachrichtigungen"
source: "https://otris.software/documents/manuals/books/app-doc/push_notifications.html"
---

# Push-Benachrichtigungen


## Funktionsweise

Um Push-Benachrichtigungen zuzustellen, müssen diese aus technischen
Gründen an Google bzw. Apple übergeben werden. Google stellt hierfür das
sogenannte Firebase Cloud Messaging zur Verfügung (kurz FCM). Die
Push-Nachricht wird an FCM übermittelt, welches daraufhin bei Android
die Nachricht direkt zustellt oder bei Apple-Geräten den Apple Push
Notification Service (kurz APNS) nutzt.


![Übertragungsweg einer Push-Benachrichtigung](./media/push-overview.png)

Abb. 61 - Übertragungsweg einer Push-Benachrichtigung

| Push-Nachricht | Nachrichten auf dem Sperrbildschirm |
| --- | --- |
| Abb. 62 - Eintreffende Push-Benachrichtigungen | Abb. 63 - Push-Benachrichtigungen auf dem Speerbildschirm |


## Wichtige Hinweise zur Verwendung

Jegliche Daten, welche über otris push übertragen werden, müssen aus
technischen Gründen (siehe 7.1) an Google und im Falle der iOS App auch
an Apple weitergegeben werden. Sowohl Google als auch Apple verarbeiten
diese Daten im Klartext. Achten Sie bei der Verwendung von otris push
immer darauf, dass Sie keine schützenswerten oder personenbezogenen
Informationen über otris push versenden. Die Datensynchronisation der
App bleibt hiervon jedoch unberührt und geschieht immer über eine
direkte Verbindung zum DOCUMENTS-Server, lediglich die Inhalte der
Push-Benachrichtigungen sind von dieser Einschränkung betroffen und
müssen dementsprechend behandelt werden!


## Einrichtung der Push-Benachrichtigungen


### Push freischalten

Zuerst müssen Push-Benachrichtigungen freigeschaltet werden.
Hierzu muss die Globale Einstellung „enablePush“ aktiviert werden.
Vergleichen Sie hierzu auch den Abschnitt zu Push-Benachrichtigungen.


![Globale Einstellung enablePush](media/push-enable.png)

Abb. 64 - Globale Einstellung enablePush


### Push konfigurieren

Zur Verwendung des Benachrichtigungsdienstes benötigen Sie zuerst einmal
einen Zugangsschlüssel (das otris push Token). Wenn Sie den Zugangsschlüssel erhalten haben,
kann dieser innerhalb des AdminCenters in der App-Konfiguration über die Aktion **Push konfigurieren** hinzugefügt werden.
Diese Aktion legt eine globale Eigenschaft an.


![Aktion „Push konfigurieren“](media/push-token.png)

Abb. 65 - Aktion „Push konfigurieren“

Diese globale Eigenschaft kann ebenso manuell erstellt werden. Folgende
Werte sind sind im AdminCenter unter dem Entwicklung Reiter bei Properties einzutragen:


![Manuelles konfigurieren des Properties](media/push-config.png)

Abb. 66 - Manuelles konfigurieren des Properties

- Name: appOtrisPushConfig
- Typ: appOtrisPushConfig
- Wert:


```json
{
  "appOtrisPushAccessToken": {
    "accessToken": "[otrisPushToken]"
  },
  "url": "https://push.otris.de/push"
}
```

{
  "appOtrisPushAccessToken": {
    "accessToken": "[otrisPushToken]"
  },
  "url": "https://push.otris.de/push"
}Ab jetzt werden sich alle Geräte bei der nächsten Synchronisation für
den Benachrichtigungsdienst von Apple bzw. Google registrieren.


## Testen der Push-Benachrichtigungen

Nachdem die Push-Benachrichtigungen aktiviert wurden und Sie die App neu
synchronisiert haben können Sie den Benachrichtigungsdienst testen.
Hierzu finden Sie in dem Ordner „App-Konfiguration“ nach Aktivierung der
Push-Benachrichtigungen und ggf. einem erneuten Login im Web-Client die
Aktion „Benachrichtigung senden“.


![Aktion „Benachrichtigung senden“](media/push-test.png)

Abb. 67 - Aktion „Benachrichtigung senden

Nach Klick auf die Aktion öffnet sich folgender Dialog.
In diesem Dialog sollte ihr Benutzer, nach erfolgreicher Registrierung
der App bei dem Benachrichtigungsdienst, als Empfänger zur Auswahl
stehen. Außerdem haben Sie folgende weitere Einstellungsmöglichkeiten:

- Im Feld Empfänger kann eine Person ausgewählt werden, an die die Benachrichtigung gesendet wird.
- Über das Feld Zugriffsprofil lässt sich ein Zugriffsprofil festlegen, wodurch die Benachrichtigung an alle Benutzer mit diesem Profil gesendet wird.
- Im Feld Titel kann der Titel der Benachrichtigung eingegeben werden.
- Das Feld Nachricht können Sie für den Text der Benachrichtigung nutzen.
- Im Feld Link Id können Sie eine Mappe oder einen Ordner bestimmen, indem Sie die entsprechende ID angeben. Bei dem Öffnen der Benachrichtigung in der App, wird das hier definierte Objekt gezeigt.
- Bei Link Typ muss der Typ von dem Link eingestellt werden. Folgende Werte sind möglich: file = Mappe öffnen (benötigt Link ID)
folder = Ordner öffnen (benötigt Link ID)
doc = Mappe und Dokument öffnen (benötigt Link ID und Dokument ID s.u.)
- Mit Hilfe der ausklappbaren Liste Ton können Sie den Ton für die Benachrichtigung auswählen.
- Im Feld Kennzeichen kann eine Zahl konfiguriert werden, welche neben dem Icon der App in einem roten Punkt dargestellt wird.
- Das Feld Zusätzliche Angaben ist für eine spätere Verwendung reserviert. Siehe Beispiel.
- In dem Feld Dokument Id können Sie die ID eines Dokuments definieren, das beim Öffnen der Benachrichtigung in der App angezeigt wird.


![Dialog „Benachrichtigung senden“](media/push-send-msg.png)

Abb. 68 - Dialog „Benachrichtigung senden“


## Push-Benachrichtigung aus einem Skript versenden

Um eine Benachrichtigung aus einem Skript zu senden, ist die Bibliothek
*appNotificationLibrary* erforderlich.

`const appNotificationLibrary = require("appNotificationLibrary");`

Mit der Funktion `sendNotificationWithOtrisPush(login, notificationData)`
kann daraufhin die Benachrichtigung über otris push versendet werden.

Als Parameter *login* muss der Benutzername des Empfängers übergeben
werden.

Der Parameter *notificationData* ist ein JSON Objekt, das die folgende
Eigenschaften enthalten kann. Die Eigenschaften sind analog zu den oben genannten
Einstellungsmöglichkeiten:

- title – Titel der Benachrichtigung
- message – Text der Benachrichtigung
- fileId – Mappe oder Ordner id. Beim Öffnen der Benachrichtigung in der App, wird das hier definierte Objekt gezeigt
- fileType – Typ des von der fileId definierten Objekts: file/folder/doc
- sound – Ton für die Benachrichtigung als Auswahlmöglichkeit
- badge – Nummer, die als App Icon Kennzeichen (Badge) verwendet wird
- addData – Zusätzliche Daten. Siehe Beispiel.
- docId – Dokument Id. Beim Öffnen der Benachrichtigung in der App, wird das hier definierte Dokument gezeigt.

Beispiel:


```javascript
const appNotificationLibrary = require("appNotificationLibrary");

var notificationData = {
    title: "Hello Benachrichtigung",
    message: "Dies ist die erste Benachrichtigung"
};

appNotificationLibrary.sendNotificationWithOtrisPush("schreiber", notificationData);
```

const appNotificationLibrary = require("appNotificationLibrary");

var notificationData = {
    title: "Hello Benachrichtigung",
    message: "Dies ist die erste Benachrichtigung"
};

appNotificationLibrary.sendNotificationWithOtrisPush("schreiber", notificationData);