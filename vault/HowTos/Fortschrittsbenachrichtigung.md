---
title: "Benachrichtigungen mit Fortschrittsanzeige"
source: "https://otris.software/documents/howto/common/progress-notification.html"
---

# Benachrichtigungen mit Fortschrittsanzeige

Seit der Version DOCUMENTS `5.0e` steht ein neuer Benachrichtigungstyp
zur Verfügung. Mit dem Typ `progress` ist es möglich den Benutzer über den
Verlauf einer Aufgabe zu informieren.
Die Funktionalität wird über die [[Script Extensions API/otris.notifications.Notification|Notification API]]
die Bestandteil der *ScriptExtensions* ist bereit gestellt.


Abb. 1 - Screenshoot einer Fortschrittsbenachrichtigung


## Beispiel

Erstellen einer Benachrichtigung mit Titel und Text.
Den Typ der erstellten Benachrichtigung auf `progress` setzen.


#### Start


```javascript
// #import "Notification_API"
var title = "Titel der Aufgabe";
var text = "Beschreibung des aktuellen Status der Aufgabe";
var notification = new otris.notifications.Notification(text, title);
notification.setType("progress");
```

// #import "Notification_API"
var title = "Titel der Aufgabe";
var text = "Beschreibung des aktuellen Status der Aufgabe";
var notification = new otris.notifications.Notification(text, title);
notification.setType("progress");Den Fortschritt mit einem Wert zwischen `0` und `100` festlegen.
Ein *negativer Wert* kann verwendet werden um anzuzeigen, dass die Aufgabe
fehlgeschlagen ist. Der Wert `100` definiert den erfolgreichen
Abschluss der Aufgabe.


```javascript
notification.setProgressValue(10);
```

notification.setProgressValue(10);Festlegen einer **Referenz-ID**. Mit dieser Referenz-ID wird die
Fortschrittsbenachrichtigung einer Aufgabe zugeordnet.
Fortschrittsbenachrichtigungen die sich auf dieselbe Aufgabe beziehen müssen
auch dieselbe Referenz-ID haben.


```javascript
notification.setReferenceId("task-001");
```

notification.setReferenceId("task-001");Die Aufgaben starten und die Benachrichtigung verschicken.


```javascript
// Starten der langlaufenden Aufgabe
// Zum Beispiel durch einen SkriptCall

var loginName = context.getSystemUser().login;
notification.publish(loginName);
return 0;
```

// Starten der langlaufenden Aufgabe
// Zum Beispiel durch einen SkriptCall

var loginName = context.getSystemUser().login;
notification.publish(loginName);
return 0;Seit der Version DOCUMENTS `5.0h` ist es außerdem möglich eine erstellte
Benachrichtigung direkt als Skriptrückgabewert an den Client zu schicken.


```javascript
context.returnType = "notification";
return notification.transfer();
```

context.returnType = "notification";
return notification.transfer();
#### Fortschritt

In einem Skript, dass eine längere Laufzeit hat und asynchron auf dem Server
läuft besteht so die Möglichkeit an verschiedenen Stellen dem Benutzer eine
Rückmeldung über den Fortschritt der Aufgabe zu geben.


```javascript
var title = "Titel der Aufgabe";
var text = "Die Aufgabe ist zu 50% abgeschlossen";
var loginName = context.getSystemUser().login;
var notification = new otris.notifications.Notification(text, title);
notification.setReferenceId("task-001"); // Hier muss dieselbe ID verwendet werden
notification.setType("progress");
notification.setProgressValue(50);
notification.publish(loginName);
```

var title = "Titel der Aufgabe";
var text = "Die Aufgabe ist zu 50% abgeschlossen";
var loginName = context.getSystemUser().login;
var notification = new otris.notifications.Notification(text, title);
notification.setReferenceId("task-001"); // Hier muss dieselbe ID verwendet werden
notification.setType("progress");
notification.setProgressValue(50);
notification.publish(loginName);
#### Abschluss

Zum Abschluss der Aufgabe ist es zum Beispiel möglich eine Aktion an
die Benachrichtigung zu *hängen* um dem Benutzer das Ergebnis zu präsentieren.


```javascript
var title = "Titel der Aufgabe";
var text = [
    "Die Aufgabe ist abgeschloseen.",
    "Klicken Sie auf die Nachricht um die erstellte Mappe anzuzeigen."
].join(" ");
var loginName = context.getSystemUser().login;
var notification = new otris.notifications.Notification(text, title);
notification.setReferenceId("task-001");
notification.setType("progress");
notification.setProgressValue(100);
// Der Benachrichtigung eine Aktion hinzufügen
var fileId = "relations_000000112";
var scriptReturn = new otris.notifications.ScriptReturn("showFile", fileId);
notification.setAction(scriptReturn);

notification.publish(loginName);
```

var title = "Titel der Aufgabe";
var text = [
    "Die Aufgabe ist abgeschloseen.",
    "Klicken Sie auf die Nachricht um die erstellte Mappe anzuzeigen."
].join(" ");
var loginName = context.getSystemUser().login;
var notification = new otris.notifications.Notification(text, title);
notification.setReferenceId("task-001");
notification.setType("progress");
notification.setProgressValue(100);
// Der Benachrichtigung eine Aktion hinzufügen
var fileId = "relations_000000112";
var scriptReturn = new otris.notifications.ScriptReturn("showFile", fileId);
notification.setAction(scriptReturn);

notification.publish(loginName);