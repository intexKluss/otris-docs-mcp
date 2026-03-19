---
title: "Copilot: Chatfenster im Detail"
source: "https://otris.software/documents/manuals/books/otr-ai/detailed-chat-overview.html"
---

# Copilot: Chatfenster im Detail


## Übersicht des Chatfensters

Das Copilot bietet eine Reihe von Funktionen aus dem Chatfenster heraus, die im Folgenden erläutert werden.


![detailed-chat-overview-2](./assets/detailed-chat-overview-2.png?class=large)

Abb. 41 - Aktionen am Chatfenster


### Aktionen am Chat:

| Aktion | Beschreibung |
| --- | --- |
| Versteckte Nachrichten anzeigen | Anzeigen oder Ausblenden versteckter Nachrichten (z. B. Systemwissen) |
| Chat herunterladen | Herunterladen des Chatverlaufs als Datei in einem vordefinierten Format |
| Chat umbenennen | Ändern des automatisch generierten Chattitels |
| Chat löschen | Löschen und Schließen des Chats. |
| Chat schließen | Speichern und Schließen des Chats. |


### Aktionen an Nachrichten:

| Aktion | Beschreibung |
| --- | --- |
| Antwort neu generieren | Neugenerieren der Antwort und Aktionen ab dem letzten Prompt |
| Text kopieren | Kopieren der ausgewählten Nachricht in die Zwischenablage |
| Prompt speichern | Copilot- und benutzerweites Speichern des Prompts |


## Aktionen im Chatfenster


### Versteckte Nachrichten

Versteckte Nachrichten können über das *Auge*-Icon angezeigt und ausgeblendet werden. Bei diesen Nachrichten handelt es sich um jegliche Nachrichten, die ebenfalls an das KI-Model im Hintergrund übermittelt werden, um die Generierung des Prompts zu beeinflussen. Dies kann zB. eingebundenes [Systemwissen](prompts-knowledge#wissen) sein.


![detailed-chat-overview-5](./assets/detailed-chat-overview-5.png?class=medium)

Abb. 42 - Ansicht der versteckten Nachrichten


### Dateifreigaben entfernen

Wenn Ressourcen wie Dokumente, Bilder oder Audiodateien an die KI weitergeleitet wurden, können sie nachträglich über das "X" im Chatverlauf entfernt werden. Der Dateiinhalt wird dabei auch **aus dem Chatkontext gelöscht**, sodass die KI nicht mehr darauf zugreifen kann. Entfernte Dateien können bei Bedarf erneut freigegeben werden.


![detailed-chat-overview-3b](./assets/detailed-chat-overview-3b.png?class=medium)

Abb. 43 - Freigegebene Dateien entfernen


### Chat herunterladen

Über das *Download*-Icon kann der geöffnete Chat automatisch heruntergeladen werden.
Folgende Dateiformate können für den Download voreigestellt werden:

- Markdwon
- HTML
- PDF (default)


#### Chattitel wählen

Über das *Stift*-Icon lässt sich der automatisch erstellte Titel des Chats individuell bearbeiten.
Dieser Titel wird sowohl beim Exportieren als auch in der Übersicht der gespeicherten Chats angezeigt.


### Gespeicherte Chats laden

Sofern das automatische oder manuelle Speichern der Chats eingestellt ist, können gespeicherte Chats jederzeit wieder geöffnet werden. Die Speicherung ist spezifisch für die aktuell verwendete Mappe und den jeweiligen Copiloten. Gespeicherte Chats bleiben erhalten, bis sie manuell gelöscht werden.
Beim Öffnen des Copiloten werden alle gespeicherten Chats in einer Übersicht angezeigt, sodass mit einem Klick auf den Chattitel der entsprechenden Chat geöffnet und fortgesetzt werden kann. Der jeweils neuste Chat wird an erster Stelle angezeigt.


![detailed-chat-overview-1](./assets/detailed-chat-overview-1.png?class=medium)

Abb. 44 - Vergangene Chats erneut öffnen


#### Chat löschen oder schließen

Sofern der Speichermodus des automatischen Speicherns über das [AdminCenter](admincenter.html#speichermodus) eingestellt wurde wird sowohl ein Löschen- als auch ein Schließen-Button angezeigt.
Ist das manuelle Speichern oder keine Speichermöglichkeit ausgewählt,
dann wird der Chat beim Klick auf den Schließen-Button gelöscht.


## Prompts speichern

Prompts können aus dem Chat heraus über das *Stern*-Icon gespeichert werden. Jeder Benutzer kann dann Copilotenweit die eigens gespeicherten Prompt wiederverwenden.
Es gibt zwei Arten von gespeicherten Prompts:

- copilotweite Prompts (Siehe AI Toolkit konfigurieren )
- benutzereigene Prompts


![detailed-chat-overview-3](./assets/detailed-chat-overview-3.png?class=medium)

Abb. 45 - Prompt Copilotenweit speichern

Alle vordefinierten Prompts werden oberhalb des Chatfensters aufgelistet und sind dort editierbar. Benutzerspezifische Prompts sind ausschließlich für den jeweiligen Nutzer sichtbar und jederzeit von ihm bearbeitbar. Copilot-weite Prompts können nur von Nutzern geändert werden, die über Zugriff auf das AI-Toolkit und dessen Konfiguration verfügen.

Die Einstellungsmöglichkeiten sind ebenfalls im [AI Toolkit](admincenter.html#prompts) beschrieben.


![detailed-chat-overview-4](./assets/detailed-chat-overview-4.png?class=large)

Abb. 46 - Prompt bearbeiten