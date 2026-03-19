---
title: "Arbeiten mit Zeichnungselementen"
source: "https://otris.software/documents/manuals/books/workflow-tool/editor.html"
---

# Arbeiten mit Zeichnungselementen


## Allgemeines

Der **Editor** ermöglicht die eigentliche Erstellung und Bearbeitung eines Workflows, mit ihm wird der sogenannte **Workflow-Graph** erstellt.

Ein **Workflow-Graph** beschreibt die Zusammensetzung der verschiedenen Bausteine den sogenannten **Shapes** zu einem Workflow.

**Shapes** sind die Workflowelemente, die vom Shape-Menü per Drag&Drop auf dem Editor platziert werden können.
Shapes, welche **kein Verbindungselement** darstellen, werden als **Nodes** bezeichnet.
Shapes, die **Nodes miteinander verbinden**, werden als **Edges** bezeichnet.
Außer dem **Annotation-Shape** verfügen alle Shapes über **Formulare**, auf denen die Spezifikationen der jeweiligen Shapes für den Workflow angegeben werden. Informationen zu den Shape-Formularen sind hier zu finden: [Spezifikation von Workflowelementen](model.html).


## Kurzbeschreibung der Workflow-Shapes

Nachfolgend wird eine Kurzbeschreibung der Workflow-Shapes dargestellt. Detailinformationen zu den einzelnen Shapes sind hier zu finden: [Spezifikation von Workflowelementen](model.html).

- Workflow: Dieses Shape wird bei der Workflowerstellung automatisch eingefügt. Es kann nicht bewegt werden und darf nicht mit eingehenden oder ausgehenden Edges verbunden werden. Über dieses Shape werden globale Einstellungen des Workflows vorgenommen.
- Start: Dieses Shape kennzeichnet den eindeutigen Startpunkt des Workflows, es darf pro Workflow genau einmal verwendet werden.
- End: Jeder Workflow muss über mindestens einen Endpunkt verfügen, von einem Endpunkt dürfen keine Verbindungen mehr ausgehen.
- Action: Stellt eine Benutzerinteraktion (Benutzer oder Gruppenmitglieder) dar. Ausgehende Kontrollflüsse kennzeichnen die möglichen Schaltflächen der Aktion.
- Signal Input: Mit einem Signaleingang kann auf das Eintreten einer Bedingung gewartet werden.
- Signal Output: Mit einem Signalausgang kann ein Signal für andere Anwendungen oder den Workflow selbst gesendet werden.
- Subworkflow: Mit einem Subworkflow können andere Workflows aufgerufen werden, das Ende eines Subworkflows führt immer zurück zum aufrufenden Workflow.
- Decision: Mit diesem Shape kann bei Auswertung unterschiedlicher Ausgangsbedingungen der Verlauf eines Workflows automatisch bestimmt werden. Hat dieses Shape mehrere Ausgänge, wird es immer als Entscheidung bezeichnet, hat es mehrere Eingänge und genau einen Ausgang, wird es immer als Zusammenführung bezeichnet.
- Delay: Mit einem Delay können Übergänge zeitgesteuert vorgenommen werden.
- Control Flow: Beschreibt den Übergang von einem Workflow-Element auf ein anderes.
- Operation: Bei einer Operation findet ein Übergang auf dasselbe Element statt.
- Escalation: Beschreibt den Übergang von einem Workflow-Element auf ein anderes (nur Aktion-, Subworkflow-, Signalausgang- oder Signaleingangs-Shape erlaubt), wobei der Übergang zeitgesteuert automatisch erfolgt.
- Fork: Mit einem Fork kann ein Workflow in verschiedene nebenläufige Stränge aufgespalten werden. Ein Fork muss genau eine eingehende und mindestens zwei ausgehende Verbindungen haben. Die Zusammenführung der Stränge muss immer über einen Join erfolgen.
- Join: Mit einem Join werden über einen Fork aufgespaltene Stränge des Workflows wieder zusammengeführt. Ein Join muss mindestens zwei eingehende und genau eine ausgehende Verbindung haben.
- Annotation: Mit diesem Shape können Beschreibungen an beliebigen Stellen angegeben werden. Dieses Shape darf nicht mit eingehenden oder ausgehenden Edges verbunden werden.

Nodes und Edges haben unterschiedliche Klickfunktionen:

- Nodes

| Funktion | Beschreibung |
| --- | --- |
| Links-Klick | Öffnen des Halos |
| Rechts-Klick | Öffnen des Halos und Formulars |
| Doppel-Links-Klick | Öffnen des Halos und Formulars |
| Drag&Drop | Neu Positionieren |

- Edges

| Funktion | Beschreibung |
| --- | --- |
| Links-Klick | Öffnen des Halos |
| Rechts-Klick | Öffnen des Halos und Formulars |
| Doppel-Links-Klick | Öffnen des Halos (nur bei Klick auf Source, Target oder Segment s.u.) |
| Drag&Drop | Neu Positionieren |

**Hinweis:** Für das *Workflow-Shape* und das *Annotation-Shape* gelten dieselben Klickfunktionen wie bei Edges, das *Annotation-Shape* hat aber kein zusätzliches Formular.

Edge-Labels können direkt per Drag&Drop verschoben werden.
Da Edges die Verbindungen zwischen Nodes darstellen, ist darauf zu achten, dass diese Verbindungen auch aktiv sind, inaktive und somit ungültige Verbindungen werden farblich *rot* hervorgehoben:


![editor-edge-inactive-1](assets/editor-edge-inactive-1.png)

Abb. 19 - Inaktive, ungültige Verbindung


![editor-edge-active-1](assets/editor-edge-active-1.png)

Abb. 20 - Aktive, gültige Verbindung


## Halo

Alle platzierten Shapes verfügen über zusätzliche Schaltflächen, die **Halo** genannt werden, sie dienen vor allem der schnellen Bearbeitung von Workflows und werden sichtbar, wenn das entsprechende Shape markiert wird (Links- bzw. Rechts-Klick). Diese Halos können pro Shape unterschiedlich ausgeprägt sein.


### Workflow-Node Halo

**Hinweis:** Das Workflow-Shape ist stets einzigartig und kann daher weder gelöscht, noch selbstständig erstellt werden, es wird automatisch angelegt. Aufgrund dieser Eigenschaften besitzt er ein unterschiedliches Halo.


![editor-halo-workflow-1](assets/editor-halo-workflow-1.png)

Abb. 21 - Halo Workflow-Shape

| Position | Name | Funktion |
| --- | --- | --- |
| unten-rechts | Formular öffnen | Öffnet ein Formular, welches das Datenmodell zu dem Shape enthält. |
| umschließend | Größe ändern | Vornehmen von Größenänderungen des Shapes. |


### Halo Nodes (allgemein)


![editor-halo-node-1](assets/editor-halo-node-1.png)

Abb. 22 - Halo Nodes allgemein

Diese Abbildung zeigt das Halo einer Aktion auf und ist für alle Nodes (außer Join, Fork und Workflow) identisch.

| Position | Name | Funktion |
| --- | --- | --- |
| oben-links | Löschen | Löscht das Shape und dessen Daten im Datenmodell. |
| oben-mitte | Aktion erstellen | Erstellt eine neue Aktion ohne Verbindung (Kontrollfluss). |
| oben-rechts | verbundene Aktion erstellen | Erstellt eine neue Aktion mit direkter Verbindung (Kontrollfluss). |
| mitte-rechts | Kontrollfluss herausziehen | Erstellt einen ausgehenden Kontrollfluss mit Verbindung zum Shape. |
| unten-mitte | Einfärben | Das Shape kann mit einem Color-Picker eingefärbt werden. |
| unten-rechts | Formular öffnen | Öffnet ein Formular, welches das Datenmodell zu dem Shape enthält. |
| umschließend | Größe ändern | Vornehmen von Größenänderungen des Shapes. |

Über den Color-Picker können für *Nodes* und für das *Annotation-Shape* Farbeinstellungen vorgenommen werden:


![editor-halo-node-2](assets/editor-halo-node-2.png)

Abb. 23 - Color-Picker


### Halo Join und Fork


![editor-halo-join-fork-1](assets/editor-halo-join-fork-1.png)

Abb. 24 - Halo Join und Fork

Das Joint und Fork Halo ergänzt das allgemeine Node-Halo um eine zusätzliche Funktion **Rotieren**.

| Position | Name | Funktion |
| --- | --- | --- |
| links (mit mehr Abstand zum Shape) | Rotieren | Dreht das Shape in eine neue Position. |


### Halo Edges


![editor-halo-edge-1](assets/editor-halo-edge-1.png)

Abb. 25 - Halo Edges

| Position | Name | Funktion |
| --- | --- | --- |
| links | Löschen | Löscht das Shape und dessen Daten im Datenmodell. |
| rechts | Formular öffnen | Öffnet ein Formular, welches das Datenmodell zu dem Shape enthält. |


## Sonstige Baustein-Funktionen

Ein sogenannter **ToolsView** vereinigt die Interaktionselemente **Source**, **Target**, **Vertice** und **Segment**. Ein ToolsView existiert **nur auf Edges** und erscheint mit einem **Hover** auf einer Edge.


![editor-toolsview-1](assets/editor-toolsview-1.png)

Abb. 26 - Edge ToolsView

- Source: Die Source wird durch einen Balken dargestellt und symbolisiert den Ausgangspunkt / Ausgangsnode.
- Target: Ein Target symbolisiert den den Zielpunkt / Zielnode der Edge und wird durch eine ausgefüllte Pfeilspitze dargestellt.
- Vertice: Ein Vertice symbolisiert anhand eines ausgefüllten Kreises einen Abknickpunkt auf einer Verbindung.
- Segment: Das Segment wird auf exakt senkrechten und waagerechten Edges oder Teilabschnitte der Edge dargestellt.

| Funktion | Beschreibung |
| --- | --- |
| hover | Öffnen des ToolsView |
| hover + Drag & Drop (Source) | Neue Ausgangs- / Source-Node bestimmen |
| hover + Drag & Drop (Target) | Neue Ziel- / Target-Node bestimmen |
| hover + Drag & Drop (Vertice) | Vertice verschieben |
| hover + Drag & Drop (Segment) | Linie verschieben, dabei werden möglicherweise neue Vertices angelegt |
| hover + Doppelklick (Source, Target, Segment) | Halo und Formular öffnen |
| hover + Doppelklick (Vertice) | Vertice löschen |
| Links-Klick (Source, Target, Segment) | Öffnen des Halos und Markierung des Labels |
| Rechts-Klick | Öffnen des Halos und Formulars |
| Drag & Drop (Edge) | Bei einem Mousedown auf die Linie der Edge wird ein Vertice angelegt, welches dann beliebig verschoben werden kann und bei einem Mouseup an der Stelle des Mauscursors angelegt wird. |
| Drag & Drop (Label) | Das Label kann in einem vorgegebenen Raum neu platziert werden. |


## Annotation-Shape

Das *Annotation-Shape* kann für zusätzliche Beschreibungen bzw. Hinweise verwendet werden. Neben direkten Texteingaben kann eine farbliche Markierung mit dem Color-Picker vorgenommen werden. Um Beschreibungen anzugeben, muss der Textbereich markiert werden, nicht das Shape selbst.


![editor-annotation-shape-1](assets/editor-annotation-shape-1.png)

Abb. 27 - Annotation-Shape


## Sonstige Hilfsfunktionen


### Kopieren / Einfügen

Bereits platzierte Elemente können kopiert und wieder eingefügt werden. Dabei werden alle Eigenschaften des Elements mit kopiert, beim Einfügen wird der technische Bezeichner (Name) des Elements automatisch umbenannt. Zum Kopieren wird das Element per anklicken markiert und per *Strg + C* in die Zwischenablage kopiert. Zum Einfügen des Elements kann die Tastenkombination *Strg + V* verwendet werden. Es können auch mehrere Elemente markiert werden, indem die Taste *Strg* während der Markierung gehalten wird. Per *Strg + C* und anschließendem *Strg + V* dann alle markierten Elemente kopiert und eingefügt.


### Markierte Bereiche verschieben

Markierte Elemente können gemeinsam verschoben werden. Mehrere Elemente werden markiert, indem die Taske *Strg* gehalten und mit der *gedrückter linker Maustaste* ein gewünschter Bereich gezogen wird. Während des Ziehens mit der Maus wird der markierte Bereich farblich rot markiert. Wird die Maustaste danach losgelassen, wird der markierte Bereich blau markiert und ist zum verschieben vorbereitet. Die Taste *Strg* ist danach loszulassen, per *gedrückter linker Maustaste* auf **Nodes** kann der markierte Bereich nun an die gewünschte Stelle verschoben werden.