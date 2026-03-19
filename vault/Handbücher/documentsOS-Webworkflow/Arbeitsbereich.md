---
title: "Arbeitsbereich"
source: "https://otris.software/documents/manuals/books/workflow-tool/workspace.html"
---

# Arbeitsbereich


## Allgemeines

Startet ein berechtigter Benutzer eine Workflowbearbeitung per Klick auf einen Listeneintrag aus der **Übersicht** öffnet sich der Arbeitsbereich automatisch immer maximiert, d.h. alle anderen Bereiche des Webclients werden automatisch minimiert. Der Arbeitsbereich ist wie folgt aufgeteilt:


![workspace-overview-1](assets/workspace-overview-1.png)

Abb. 7 - Übersicht Arbeitsbereich

| Bereich | Beschreibung |
| --- | --- |
| Toolbar (grün) | Über die Toolbar können verschiedene Aktionen ausgeführt werden. |
| Shapemenü (rot) | Das Shapemenü dient dazu, Shapes via Drag & Drop auf dem Editor zu platzieren. |
| Editor (blau) | Mit dem Editor findet die eigentliche Workflowbearbeitung statt. |
| Navigation (gelb) | Über die Navigation kann in einen gewünschten Teil des Workflows gescrollt werden. |


## Toolbar

Die Toolbar dient dazu verschiedene Einstellungen auf dem Workflow-Graphen vorzunehmen (z.B. Zoomen und Autolayout) und verschiedene Aktionen auszuführen (z.B. Öffnen, Speichern und Suchen).


![workspace-toolbar-1](assets/workspace-toolbar-1.png)

Abb. 8 - Toolbar allgemein

Folgende Aktionen stehen zur Verfügung:

| Aktion | Beschreibung |
| --- | --- |
| Datei | Öffnet per Klick ein Menü, siehe Dateimenü |
| Speichern | Speichert den Workflow und überträgt ihn automatisch an den Server |
| Snapshot erstellen | Es wird ein neuer Snapshot erstellt, es erfolgt keine Übertragung an den Server |
| Zoom-In | Vergrößert den Zoomfaktor im Editor um jeweils 20% (andere Einstellungen sind mit dem Schieberegler einstellbar) |
| Zoom-Out | Verkleinert den Zoomfaktor im Editor um jeweils 20% (andere Einstellungen sind mit dem Schieberegler einstellbar) |
| Alles Anzeigen | Stellt den Zoomfaktor so ein, dass der gesamte Workflow im Editor angezeigt wird |
| Automatisches Layout | Strukturiert bestehende Layouts neu, siehe Auto Layout |
| Suche | Ermöglicht Suchen von Shapes, siehe Shape Suche |

**Wichtiger Hinweis:** Wird der Workflow per *Speichern* bzw. *Speichern / Server* gespeichert, wird der Workflow nach der Bestätigung einer Sicherheitsabfrage an den Server übertragen. Vorgenommene Änderungen gelten dann automatisch für vorhandene Mappen in dem Workflow und für neue Mappen, für die der Workflow ausgeführt werden soll. Wurden vor der Speicherung Workflowschritte entfernt, die für vorhandene Mappen galten, befinden sich diese Mappen möglicherweise in einem undefinierten Workflowzustand. Es wird daher bei Änderungen von Workflows immer empfohlen, eine neue Version zu erzeugen und diese am Mappentypen für neue Mappen zu hinterlegen.

**Hinweis:** Snapshots werden unabhängig von der manuellen Erstellung über die entsprechende Aktion bei geöffneten Workflows auch regelmäßig alle 5 Minuten automatisch erstellt und stellen somit eine Zwischenspeicherung von Arbeitsständen dar. Wird eine Speicherung mit Übertragung zum Server ausgeführt (per *Speichern* bzw. *Speichern / Server*), werden vorhandene Snapshots automatisch gelöscht.


### Dateimenü

Über das Dateimenü stehen diverse weitere Aktionen zur Verfügung.


![workspace-file-menu-1](assets/workspace-file-menu-1.png)

Abb. 9 - Datei Menü


#### Neuer Workflow

Mit dieser Aktion wird ein neuer Workflow erstellt und, wenn vorhanden, ein vorher angezeigter Workflow aus der Anzeige entfernt. Wurde vor Betätigung der Aktion ein Workflow bereits bearbeitet und dieser Workflow enthält ungespeicherte Änderungen, wird eine entsprechende Hinweismeldung ausgegeben:


![workspace-message-1](assets/workspace-message-1.png)

Abb. 10 - Hinweismeldung ungespeicherte Änderungen


#### Daten aktualisieren

Diese Aktion lädt Daten aus *documentsOS* wie z.B. Benutzer, Profile, Aliase, Skriptnamen. Allerdings werden diese Daten stets bereits beim Öffnen des Arbeitsbereiches geladen. Die Aktion muss daher nur ausgeführt werden, wenn während der Bearbeitung eines Workflows zwischenzeitlich neue Daten angelegt oder bestehende Daten geändert wurden.


#### Öffnen

Über diese Aktion können Workflows entweder vom *Server* oder aus einer *Lokalen Datei* geöffnet werden.
Beim Öffnen eines Workflows vom Server wird ein Dialog angezeigt, mit dem der gewünschte Workflow ausgewählt werden kann:


![workspace-message-2](assets/workspace-message-2.png)

Abb. 11 - Anzeige verfügbare Workflows

Existieren zu einem zu öffnenden Workflow Snapshots, können diese ausgewählt werden:


![workspace-message-7](assets/workspace-message-7.png)

Abb. 12 - Anzeige verfügbare Workflows mit Snapshots

- Hat ein auswählbarer Workflow vorhandene Snapshots, wird dies über ein entsprechendes Icon dargestellt.
- Hal ein auswählbarer Workflow einen automatisch erstellten Snapshot, wird dies über den zusätzlichen Text (Auto) dargestellt.

**Wichtiger Hinweis:** Sobald ein Workflow vom Server geladen, bearbeitet und gespeichert wird, kann er, falls er mit dem Visio-Plugin erstellt wurde, nicht mehr in dem zugehörigen Visio-Sheet bearbeitet werden. Weitere Informationen sind hier zu finden: [Migration aus Visio](migration.html).

Beim Öffnen eines Workflows aus einer lokalen Datei wird ebenfalls ein Dialog angezeigt, auf dem Dialog kann die Datei per Drag&Drop bereitgestellt werden. Diese Datei muss in dem JSON-Format vorliegen, welches der Webworkflow verwendet.


![workspace-message-3](assets/workspace-message-3.png)

Abb. 13 - Import aus lokaler Datei


#### Speichern

Über diese Aktion kann der aktuelle Workflow entweder im Datenmodell des *Servers* oder in einer *Lokalen Datei* gespeichert werden.

**Hinweis:** Je nach Größe und Komplexität kann das Speichern des Workflows einige Zeit in Anspruch nehmen.

Wurde die Aktion *Speichern* bzw. *Speichern / Server* gewählt und der Workflow existierte bereits, wird eine Sicherheitsabfrage dargestellt, mit der die Speicherung bestätigt oder abgebrochen werden kann:


![workspace-message-4](assets/workspace-message-4.png)

Abb. 14 - Sicherheitsabfrage vor Speicherung

Der Status der Speicherung wird mit einer *Notification* quittiert:


![workspace-message-5](assets/workspace-message-5.png)

Abb. 15 - Speicherung erfolgreich

**Wichtiger Hinweis**: Wird ein zuvor mit Microsoft Visio erstellter Workflow mit dem Webworkflow in derselben Version gespeichert, werden am Workflow ggf. vorhandene Dateien, wie Visio Modell (vsdx-Datei), Visio Image (png-Datei) und Visio HTML (htm-Datei) gelöscht. Es wird daher empfohlen, diese Dateien vorher zu sichern.

Wurde die Aktion *Speichern / lokale Datei* gewählt, wird die Datei in das lokale Download-Verzeichnis heruntergeladen und als Download im Browser angezeigt:


![workspace-message-6](assets/workspace-message-6.png)

Abb. 16 - Speicherung als lokale Datei

**Hinweis:** Ein als lokale Datei gespeicherter Workflow kann z.B. auf einem anderen Zielsystem als neuer Workflow importiert werden.


#### Exportieren

Über diese Aktion kann der aktuelle Workflow in die Bildformate *SVG*, *JPEG* oder *PNG* exportiert werden. Die entsprechende Datei wird ebenfalls in das lokale Download-Verzeichnis heruntergeladen und als Download im Browser angezeigt.

**Hinweis:** Je nach Größe und Komplexität kann das Speichern des Workflows einige Zeit in Anspruch nehmen.


### Speichern (Schaltfläche)

Diese Aktion entspricht der Datei-Menü-Aktion *Speichern / Server*.


### Auto Layout

Über diese Aktion kann ein automatisches Layout für den aktuellen Workflow erstellt werden. Dieses Layout verwendet diverse Voreinstellungen, wie z.B. gleiche Abstände und vertikale Ausrichtung. Dabei kann nicht sichergestellt werden, dass der Workflowgraph optimal neu gezeichnet wird.

**Hinweis:** Die Funktion sollte nur verwendet werden, wenn das bestehende Layout geändert werden soll oder wenn bei einer Migration aus Visio aufgrund fehlender Layoutinformationen der Workflowgraph alle Elemente überlappt darstellt, siehe auch [Migration aus Visio](migration.html). Bevor die Aktion ausgeführt wird, sollte ggf. die Speicherung in eine lokale Datei oder die Erstellung eines Snapshots durchgeführt werden, um ein vorheriges Layout wieder herstellen zu können.


### Shape Suche

Mit der *Shape Suche* kann über Eingabe eines Begriffs im Suchfeld und `Enter` eine Schnellsuche durchgeführt werden. Shapes, die dem Suchbegriff entsprechen werden im Editor zentriert angezeigt und farblich markiert. Werden mehrere Treffer gefunden, wird dies anhand der Trefferanzahl in der Toolbar angezeigt mit den entsprechenden Schaltflächen (nach oben bzw. nach unten) kann durch die Treffermenge navigiert werden. Ist die Trefferanzahl groß, kann über die Listen-Schaltfläche ein zusätzlicher Dialog geöffnet werden, in dem alle Treffer in einer Tabelle dargestellt werden. In dieser Tabelle können die Treffer durch zusätzliche Suchkriterien eingeschränkt werden. Per Klick auf einen Eintrag wird das entsprechende Shape wieder zentriert und farblich markiert dargestellt. Über das Info-Icon kann mit Hover eine vorhandene Beschreibung des Shapes nagezeigt werden.


![workspace-search-1](assets/workspace-search-1.png)

Abb. 17 - Suche und Markierung per Toolbar


![workspace-search-2](assets/workspace-search-2.png)

Abb. 18 - Detailsuche per Listen-Schaltfläche


## Shapemenü

Über das **Shapemenü** werden *Shapes* per Drag&Drop auf dem **Editor** platziert. Ein Shape wird nur platziert, wenn es im Bereich des *Editors* fallengelassen wird.


## Editor

Im *Editor* wird der Workflow dargestellt, außerdem findet hier die eigentliche Workflowbearbeitung statt. Details zu Funktionen im Editor sind hier zu finden: [Arbeiten mit Zeichnungselementen](editor.html).


## Navigation

In der *Navigation* wird eine Miniaturansicht des aktuellen Workflows dargestellt. Der jeweils sichtbare Bereich wird markiert und lässt sich per Maus auch verschieben.