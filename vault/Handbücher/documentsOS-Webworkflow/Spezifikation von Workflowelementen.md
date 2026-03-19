---
title: "Spezifikation von Workflowelementen"
source: "https://otris.software/documents/manuals/books/workflow-tool/model.html"
---

# Spezifikation von Workflowelementen


## Allgemeines

Das Datenmodell kann durch Formulare zu den einzelnen Shapes (außer Annotation-Shape) angepasst werden. Formulare zu den entsprechenden Shapes werden beim Öffnen immer am rechten Rand dargestellt.


## Allgemeine Formularelemente

Für jedes Workflow-Element existieren mindestens die Eingabefelder **Name**, **Bezeichnung** und **Beschreibung**.

- Name: Der Name eines Workflow-Elements stellt eine technische Bezeichnung dar, die innerhalb eines Workflows eindeutig sein muss. Der Name wird beim Aufbringen eines Shapes automatisch erzeugt (z.B. Action_1 bzw. ControlFlow_1). Wird der Name manuell geändert, ist auf die o.a. Eindeutigkeit zu achten. Der Name darf maximal 255 Zeichen lang sein, im Namen dürfen keine Punkte verwendet werden.
- Bezeichnung: Die Bezeichnung eines Workflow-Elements stellt eine ergonomische Bezeichnung dar, die je nach Einstellung im Workflow-Shape im Editor angezeigt wird. Insbesondere für die Shapes ControlFlow und Operation kann diese Bezeichnung auch als Schaltfläche bzw. Klapplisteneintrag im Webclient angezeigt werden, sofern keine weiteren Internationalisierungen eingestellt sind, siehe auch Internationalisierung.
- Beschreibung: Die Beschreibung dient zur Eingabe von Texten, mit denen beliebige Informationen gespeichert werden können, um z.B. bestimmten Workflowschritte zu dokumentieren. Beschreibungen können sprachlich internationalisiert angegeben werden.


## Internationalisierung

Die *Internationalisierung* wird global für den aktuellen Workflow am *Workflow-Shape* eingestellt.


![model-locale-1](assets/model-locale-1.png)

Abb. 28 - Spracheinstellungen am Workflow-Shape

Per Klick auf das **Globus-Icon** wird ein Auswahldialog geöffnet, in dem alle in documentsOS vorhandenen Sprachen gewählt werden können. Für den Fall, dass keine unterschiedlichen Sprachen genutzt werden sollen, können diese abgewählt werden, in diesem Fall bleibt die Auswahl **Default anzeigen** und damit ein nicht internationalisiertes Eingabefeld bestehen.

Diese Einstellungen wirken sich auf alle Shapes und neben den jeweiligen *Bezeichnungsfeldern* dabei auch auf Felder wie *Beschreibung*, *Kommentar* oder *Aufgabe* aus, Beispiele:


![model-locale-2](assets/model-locale-2.png)

Abb. 29 - Bezeichnung und Kommentar für Kontrollfluss / Default, de, en


![model-locale-3](assets/model-locale-3.png)

Abb. 30 - Bezeichnung, Aufgabe, Kommentar und Beschreibung für Aktion / de, en ohne Default


### Workflow-Shape

Dieses Shape wird bei der Workflowerstellung automatisch eingefügt, es ist somit immer vorhanden, es kann nicht entfernt werden. Dieses Shape darf nicht mit eingehenden oder ausgehenden Edges verbunden werden. Über dieses Shape werden globale Einstellungen des Workflows vorgenommen.


![model-workflow-1](assets/model-workflow-1.png)

Abb. 31 - Workflow

- Version: In diesem Feld wird die Version des aktuell geöffneten Workflows angezeigt. Dieses Feld ist nicht bearbeitbar. Um eine neue Version zu erzeugen, ist die Aktion Neue Workflowversion erzeugen auszuführen.
- Mappentyp: Jeder Workflow benötigt einen existierenden und freigegebenen Mappentypen, auf den er sich bezieht und mit dessen Einstellungen (z.B. Felder bzw. Register) er arbeitet. In der Liste werden alle vorhandenen und freigegebenen Mappentypen angezeit, der entsprechende Mappentyp muss ausgewählt werden.
- Shape-Text: Mit dieser Auswahlliste kann gewählt werden, in welcher Form bzw. Sprache die Shapes dargestellt werden:
Bezeichner (Systemsprache): Die Shapes werden mit der Systemsprache dargestellt.
Bezeichner (en): Die Shapes werden mit der englischen Bezeichnung dargestellt. Hat ein Shape keine englische Bezeichnung, wird die allgemeine Bezeichnung dargestellt.
Name: Die Shapes werden mit dem technischen Bezeichner dargestellt.
Name (gefiltert): Wird diese Einstellung gewählt, wird bei Edges (Kontrollflüssen, Operationen und Eskalationen) keine Bezeichnung mehr angezeigt.
- Exklusiver Schreibschutz: Mit dieser Einstellung kann der Exklusive Schreibschutz festgelegt (Standardeinstellung) bzw. aufgehoben werden. Weitere Informationen dazu sind hier zu finden: Exklusiver Schreibschutz.
- Freigegeben: Mit Aktivierung dieser Option wird ein Workflow als freigegeben markiert. Nur freigegebene Workflows können verwendet werden, somit ist es z.B. möglich, einen Workflow zu erstellen, er kann aber im Webclient nicht verwendet werden, solange er nicht als freigegeben markiert ist.
- Neue Workflowversion erzeugen: Mit dieser Aktion wird automatisch eine neue Version erzeugt.
- Visio Metadaten einspielen: Bei Ausführung dieser Aktion wird ein Dialog angezeigt, mit dem ein vorhandenes Visio-Sheet ausgewählt werden kann, um diverse Metadaten daraus zu importieren. Weitere Informationen dazu sind hier zu finden: Migration aus Visio.


### Start-Shape

Dieses Shape kennzeichnet den eindeutigen Startpunkt des Workflows. Jeder Workflow muss über **genau ein** Start-Shape verfügen. Dieses Shape darf **keine** eingehende Verbindung haben. Auf dem Start-Shape ist **genau eine** ausgehende Verbindung (Edge) erlaubt, diese Verbindung **muss ein Kontrollfluss sein** (keine Operation bzw. Eskalation). An diesem Kontrollfluss können folgende Einstellungen **nicht** vorgenommen werden:

- Wächtereinstellungen (Skript, Bedingung, Fehlermeldung)
- In Eingangskorb belassen (Checkbox)
- Den anderen Eingangsboxen entziehen (Checkbox)
- Direkt weiterleiten (Checkbox)


![model-start-1](assets/model-start-1.png)

Abb. 32 - Start

Mit der Checkbox *Mappe archivieren* kann beim Start eines Workflows direkt angegeben werden, ob eine Mappe zu diesem Zeitpunkt bereits archiviert werden soll. Die Auswahl eines Zielarchivs ist hier nicht möglich, es wird immer das Archiv verwendet, das am Mappentypen als *Zielserver* angegeben ist.

Weitere Formulareinstellungen:

- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften


### End-Shape

Jeder Workflow muss über mindestens einen Endpunkt verfügen, von einem Endpunkt dürfen keine Verbindungen mehr ausgehen.


![model-end-1](assets/model-end-1.png)

Abb. 33 - Ende

- Mappe versiegeln: Wenn diese Option aktiviert ist, wird die Mappe mit dem Workflow-Ende versiegelt, d.h. gegen jede weitere Form der Bearbeitung innerhalb und auch außerhalb des Workflows gesperrt. Diese Einstellung wird ignoriert, wenn der Workflow als Subworkflow aufgerufen wurde, da der Endzustand des aufgerufenen Workflows nur als Rücksprungsignal in den aufrufenden Workflow gewertet wird. Das Versiegeln der Mappe muss dann im aufrufenden Workflow aktiviert werden.
- Mappe löschen: Ist diese Option aktiv, so wird die Mappe mit dem Workflow-Ende gelöscht.
- Mappe archivieren: Wenn diese Option aktiv ist, wird die Mappe archiviert. Die Auswahl eines Zielarchivs ist hier nicht möglich, es wird immer das Archiv verwendet, das am Mappentypen als Zielserver angegeben ist.

Weitere Formulareinstellungen:

- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften
- Verbindungen: Siehe Verbindungen


### Action-Shape

Eine **Aktion** stellt eine Benutzerinteraktion (Benutzer oder Gruppenmitglieder) dar. Ausgehende Kontrollflüsse kennzeichnen die möglichen Schaltflächen der Aktion.


![model-action-1](assets/model-action-1.png)

Abb. 34 - Aktion

Eine Aktion kann als *Bearbeitung* oder als *Information* an jeweils verschiedene Empfänger (Alias, Benutzer, Gruppen) konfiguriert werden. Erfolgt die Mappenzuteilung zur Bearbeitung, müssen der / die Empfänger entsprechende Weiterleitungen durchführen, damit der Workflow weiterläuft. Erfolgt die Mappenzuteilung nur zur Information, dann erhalten der / die Empfänger die Mappe nur zur Ansicht, der Workflow läuft nach Bereitstellung der Mappe weiter.

Je nachdem, ob eine statische oder eine dynamische Empfängerermittlung erfolgt, werden in der Klappliste die zur Auswahl stehenden Einträge angezeigt. Bei der dynamischen Ermittlung werden die im Mappentyp enthaltenen Felder aufgelistet, in denen dann ein entsprechender Empfänger als Feldwert erwartet wird.

Erfolgt die Konfiguration als Bearbeitung bzw. Information durch / an ein Gruppenmitglied, so kann die Ausführung wahlweise *asynchron* oder *synchron* durchgeführt werden. Bei einer synchronen Ausführung an eine Gruppe mit einer großen Mitgliederanzahl kann es zu einer spürbaren Verzögerung der vorherigen Aktion (Weiterleitung) kommen, weil die Mappe für jedes Gruppenmitglied im Eingangskorb bereitgestellt werden muss. Bei der asynchronen Ausführung hingegen kann die vorherige Aktion (Weiterleitung) ohne Verzögerung sofort durchgeführt werden.

Mit der Checkbox *Gruppe auflösen* kann im Falle der Zuweisung *Bearbeitung durch ein Gruppenmitglied* bzw. *Bearbeitung durch alle Gruppenmitglieder* festgelegt werden, ob in der Monitordarstellung der Mappe für den Workflowschritt nur der Gruppenname (Ckeckbox nicht gesetzt) oder der Name jedes Gruppenmitglieds (Checkbox gesetzt) aufgeführt werden.

Der im Feld *Aufgabe* eingegebene Text wird je nach Sprache bei der Mappenanzeige in der Monitorliste und in der Aufgabenzeile der Mappe angezeigt.

Der im Feld *Kommentar* eingegebene Text wird je nach Sprache nach dem Weiterleiten der Mappe eingetragen, wenn für den weiterleitenden Kontrollfluss selbst kein Kommentar spezifiziert wurde. Erfolgte die Bereitstellung der Aktion nur *zur Information* und wird somit automatisch durchgeführt, so wird der Kommentar und die Aufgabe nicht angezeigt.

Weitere Einstellungen:

- In Bearbeitungsmodus öffnen: Ist diese Aktion aktiviert, so wird die Mappe direkt in den Bearbeitungsmodus geschaltet, wenn sie geladen wird. Ist die Aktion nicht aktiv, muss ein Empfänger erst die Schaltfläche Bearbeiten betätigen, um Eingaben vornehmen zu können.
- Aktionsliste / Kopierliste anzeigen: Sind diese Optionen aktiviert, werden im Lesemodus der Mappe die Klapplisten für Aktionen bzw. *Kopieren“ angezeigt.
- E-Mail Benachrichtigung unterdrücken: Ist diese Option aktiviert, wird die Zustellung einer E-Mail über den Mappeneingang im Eingangskorb eines Benutzers unterbunden, sofern eine solche für den Benutzer eingerichtet wurde.
- Mappe nicht in Eingangskorb ablegen: Ist diese Option aktiviert, wird die Mappe bei Zustellung nicht im Eingangskorb eines Benutzers zugestellt und kann dann z.B. über entsprechend konfigurierte öffentliche Ordner gefunden werden.
- Aufwand: Im diesem Feld kann die Aktion mit einem Zahlenwert versehen, der die Kosten bzw. den Aufwand der Durchführung widerspiegelt. Das Feld ist mit dem Wert 1 vorbelegt. Es findet jedoch standardmäßig keine weitere Auswertung dieser Einstellung statt.

Weitere Formulareinstellungen:

- Exklusiver Schreibschutz: Siehe Exklusiver Schreibschutz
- Eskalation: Siehe Eskalation
- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften
- Verbindungen: Siehe Verbindungen
- Felder: Siehe Felder
- Register: Siehe Register


### Signal Input-Shape

Mit einem **Signaleingang** kann auf das Eintreten einer Bedingung gewartet werden. Die Bearbeitung der Mappe bleibt bis zur Erfüllung der Bedingung für alle gesperrt, der Workflow verharrt also an diesem Punkt. Verwendet wird ein Signaleingang z.B. wenn der Wert eines Mappenfeldes durch eine externe Anwendung geändert wird.


![model-signalinput-1](assets/model-signalinput-1.png)

Abb. 35 - Signaleingang

Um Bedingungen zu erfassen, können folgende Informationen verwendet werden: [Bedingungen, Wächter, Guards](../../../howto/common/guards.html).
Das Eintreten einer Bedingung kann auch durch ein Skript geprüft werden, dazu ist die Option „Script“ zu aktivieren und das entsprechende Skript aus der Liste auszuwählen. Eine Bedingung im Falle einer Prüfung per Skript gilt als erfüllt, wenn das Skript einen Rückgabewert von 1 (context.returnValue = 1;) besitzt.

Signaleingänge werden vom Server regelmäßig als *Signaljobs* laut Einstellungen in der Datei documents.ini (`$NumberSignalJobsPerHour`) geprüft, es kann je nach Einstellung auch zu Zeitverzögerungen kommen. Per Skripting kann mit der Methode `docFile.checkWorkflowReceiveSignal()` eine sofortige Prüfung zum Zeitpunkt der Skriptausführung initiiert werden.

Weitere Formulareinstellungen:

- Exklusiver Schreibschutz: Siehe Exklusiver Schreibschutz
- Eskalation: Siehe Eskalation
- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften
- Verbindungen: Siehe Verbindungen
- Kommentar: Siehe Kommentar


### Signal Output-Shape

Mit einem **Signalausgang** kann ein Signal für andere Anwendungen oder den Workflow selbst gesendet werden.


![model-signaloutput-1](assets/model-signaloutput-1.png)

Abb. 36 - Signalausgang

Je nach gewähltem **Typ** werden weitere Einstellungen getroffen:

- Archivierung: Ist die statische Zuweisung aktiviert, muss aus der Liste der vorhandenen und freigegebenen Archive ein Archivname gewählt werden, die Mappe wird in diesem Archiv archiviert. Ist die Option Dokumente nicht in das Archive übertragen aktiviert, werden Mappendokumente nicht mit in das Archiv übertragen. Weitere Archivierungseinstellungen werden am Mappentypen konfiguriert.
- XML Export: Wird dieser Typ gewählt, muss bei Ausgangskorb ein auf dem Server existierendes Verzeichnis angegeben werden, in das der XML-Export, also die Erstellung einer XML-Datei durchgeführt werden soll. Der Dateiname wird automatisch aus der eindeutigen Mappen-Id gebildet, die Datei enthält alle Feldnamen und Feldwerte der Mappe. Der Mappe zugeordnete Dokumente werden in Unterverzeichnissen mit gespeichert, sofern die Option Export ohne Dokumente nicht gewählt wurde. In der XML-Datei werden dann Referenzen zum Unterverzeichnis zusätzlich gespeichert. Zusätzlich können auch Status- und Monitorinformationen mit exportiert werden, dabei wird je eine HTML-Datei erzeugt, die diese Informationen enthält. In der XML-Datei werden dann ebenfalls entsprechende Referenzen auf diese HTML-Dateien gespeichert. Soll der XML-Export ohne Dokumente erfolgen, werden diese Information nicht erzeugt. Im Feld Job kann der Name einer Batch-Datei angeben werden, die nach dem Export vom Server aufgerufen wird. Als Parameter wird dieser Datei der Pfad zur erzeugten XML-Datei übergeben, somit kann z.B. eine Weiterverarbeitung der Daten durch eine externe Anwendung durchgeführt werden.
- EMail: Wird dieser Typ gewählt, wird die Versendung einer E-Mail veranlasst. In diesem Fall muss mindestens ein Empfänger spezifiziert werden, dies kann statisch durch Auswahl einer festen E-Mail-Adresse erfolgen oder dynamisch, in diesem Fall muss ein Feldname gewählt werden, in dem eine E-Mail-Adresse erwartet wird. Dieselben Einstellungen (statisch, dynamisch) gelten auch für Absender, CC bzw. BCC, wobei bei nicht angegebenen Absender der EMail Standardabsender aus den Systemeinstellungen verwendet wird. In den Feldern Betreff und Inhalt können neben festen Werten auch Autotexte verwendet werden.
- Einordnen: Wird dieser Typ gewählt, muss ein Ordner aus der Liste gewählt werden, in dem die Mappe bereitgestellt werden soll. Zusätzlich muss eine Ordneroption Kopieren bzw. Verschieben angegeben werden.
- Mappentypwechsel: Wird dieser Typ gewählt, muss ein Mappentyp aus der Liste ausgewählt werden, auf den der Wechsel erfolgen soll. Ein Wechsel wirkt sich auf die gesamte Mappe aus, die Struktur wird dabei auf den neuen Mappentypen angepasst. Der Workflow ist dann in der Lage auf Felder zu reagieren, die im bisherigen Mappentyp nicht vorhanden waren. Felder aus dem ursprünglichen Mappentyp, die in dem neuen Mappentyp nicht vorhanden sind, gehen mitsamt ihrer Feldwerte im weiteren Bearbeitungsgang der Mappe verloren. Es sollte also bei einem Mappentypwechsel eine Schnittmenge von gemeinsam benutzten Feldern geben und ferner der abgelöste Mappentyp zur Ermittlung von Grunddaten verwendet werden. Ein Mappentypwechsel z.B. auch ist notwendig, wenn Subworkflows aufgerufen werden sollen, die auf einem anderen Mappentyp eingestellt sind und Feldwerte durch das System oder durch Benutzereingaben in diesem Subworkflow geändert werden sollen. Ein Wechsel ist aber nicht erforderlich, wenn ein aufgerufener Subworkflow weitere demselben Mappentyp verwendet.
- Javascript: Wird dieser Typ verwendet, muss aus der Liste das Skript ausgewählt werden, das für dieses Signalausgang verwendet werden soll.

Signaleingänge werden vom Server regelmäßig als *Signaljobs* laut Einstellungen in der Datei documents.ini (`$NumberSignalJobsPerHour`) geprüft, es kann je nach Einstellung auch zu Zeitverzögerungen kommen.

Weitere Formulareinstellungen:

- Exklusiver Schreibschutz: Siehe Exklusiver Schreibschutz
- Eskalation: Siehe Eskalation
- Feldbelegung: Siehe Feldbelegung
- Felder: Siehe Felder
- Register: Siehe Register
- Eigenschaften: Siehe Eigenschaften
- Verbindungen: Siehe Verbindungen
- Kommentar: Siehe Kommentar


### Subworkflow-Shape

Mit einem Subworkflow können andere Workflows aufgerufen werden, damit kann z.B. bei komplexen Prozessen die Übersichtlichkeit erhöht werden, da Teilprozesse in Subworkflows ausgelagert werden können.


![model-subworkflow-1](assets/model-subworkflow-1.png)

Abb. 37 - Subworkflow

Von einem Subworkflow-Shapes darf nur genau ein Kontrollfluss ausgehen. Das Ende eines Subworkflows führt immer zurück zum aufrufenden Workflow.
In einem Subworkflow ist außerdem zu beachten, dass die Optionen *Mappe versiegeln* und *Mappe löschen* in den Endzuständen der aufgerufenen Workflows nicht ausgewertet werden, da dies die Benutzbarkeit von erstellten Workflow-Bausteinen beeinträchtigen und unter Umständen zu einer Blockierung des aufrufenden Workflows führen könnte.
Erfolgt die Zuweisung *statisch*, muss aus der Klappliste der entsprechende Subworkflow ausgewählt werden. Bei einer *dynamischen* Zuweisung ist aus der Klappliste das entsprechende Feld auszuwählen, in dem der Workflowname des Subworkflows erwartet wird. Der Workflowname ergibt sich aus der Workflow-Bezeichnung, einem Bindestrich und der Versionsnummer.
Bei Verwendung von Subworkflows sollte sichergestellt werden, dass diese sich nicht selbst aufrufen.

Subworkflows haben keine weiteren Formulareinstellungen.


### Decision-Shape / Merge-Shape

Mit diesem Shape kann bei Auswertung unterschiedlicher Ausgangsbedingungen der Verlauf eines Workflows automatisch bestimmt werden. Die Bedingungen werden in den angrenzenden Kontrollflüssen des Shapes spezifiziert. Dabei können in den Bedingungen auch Autotexte verwendet werden.
Hat dieses Shape mehrere Ausgänge, wird es immer als Entscheidung (Decision) bezeichnet, hat es mehrere Eingänge und genau einen Ausgang, wird es immer als Zusammenführung (Merge) bezeichnet.


![model-decision-merge-1](assets/model-decision-merge-1.png)

Abb. 38 - Workflow mit Entscheidung / Zusammenführung

Entscheidungen und Zusammenführungen werden standardmäßig (ohne manuelle Änderung der Shape-Farbe) farblich unterschiedlich dargestellt:

- Entscheidungen: weißer Hintergrund
- Zusammenführungen: grauer Hintergrund

Der jeweilige Zustand lässt sich auch aus der Überschrift des Detaildialoges entnehmen.


![model-decision-merge-2](assets/model-decision-merge-2.png)

Abb. 39 - Entscheidung


![model-decision-merge-3](assets/model-decision-merge-3.png)

Abb. 40 - Zusammenführung

Bedingungen, die von einem Aktions-Shape ausgehen und sich mit einem Entscheidungs-Shape verbinden, werden dabei immer als eine Bedingung für das
Aktion-Shape und nicht als Bedingung für das Entscheidungs-Shape interpretiert.

Bei der Verwendung von Entscheidungs-Shapes ist darauf zu achten, dass eine Bedingung immer zutreffen muss. Ein ausgehender Kontrollfluss sollte als Bedingungsausdruck immer einen *else-Zweig* enthalten, damit sichergestellt ist, dass ein Entscheidungszweig immer durchlaufen werden kann. Kann keine Entscheidung gefällt werden, so kann der Workflow am Entscheidungspunkt stillstehen.

Operationen bzw. Kontrollflüsse, die von diesem Shape ausgehen und am gleichen Shape enden, sind **nicht erlaubt**.

Weitere Formulareinstellungen:

- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften
- Verbindungen: Siehe Verbindungen


### Delay-Shape

Mit einem Delay können Übergänge zeitgesteuert vorgenommen werden. Eingesetzt in Parallelen-Oder Workflow-Prozessen kann es auch als ein Timeout-Signal für einen Prozessstrang fungieren.

Für das Delay-Shape gelten folgende Restriktionen:

- Von einem Delay-Shape darf mehrere eingehende Kontrollflüsse besitzen, aber nur genau einen ausgehenden Kontrollfluss.
- Das Anhängen einer Eskalation ist nicht erlaubt.


![model-delay-1](assets/model-delay-1.png)

Abb. 41 - Delay

- Arbeitskalender: Wird diese Einstellung nicht gewählt, beziehen sich Zeit und Einheit auf den Jahreskalender. Wird die Einstellung gewählt, muss in den globalen Einstellungen ein Arbeitskalender aktiviert sein und gepflegt werden. Ist dies der Fall, werden Verzögerungen nur in den angegebenen Arbeitszeiten und nicht an ggf. hinterlegten Feiertagen durchgeführt.
- Zeit / Einheit: Es wird die Zeit (numerischer Wert oder absolute Zeitangabe) und die Zeiteinheit (Minuten, Stunden, Tage, Wochen, Absolut) festgelegt, bis zu der die Verzögerung aktiv sein soll. Der Server führt Eskalationsjobs regelmäßig automatisch laut Einstellungen in der Datei documents.ini ($NumberEscalationJobsPerHour) aus, es kann je nach Einstellung auch zu Zeitverzögerungen kommen. Wird die Zeiteinheit Absolut gewählt, muss die Zeit als ein Datumsformat angegeben werden, welches laut Format-Einstellungen (siehe globale Einstellungen) festgelegt ist, z.B. TT.MM.JJJJ, bei Angabe von Uhrzeiten z.B.: 31.10.2023 10:30 (Leerzeichen zwischen Datum und Uhrzeit).

Weitere Formulareinstellungen:

- Exklusiver Schreibschutz: Siehe Exklusiver Schreibschutz
- Kommentar: Siehe Kommentar
- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften
- Verbindungen: Siehe Verbindungen


### Control Flow-Shape

Dieses Shape beschreibt den Übergang von einem Workflow-Element auf ein anderes.


![model-controlflow-1](assets/model-controlflow-1.png)

Abb. 42 - Kontrollfluss / Register Allgemein

Der Übergang von einem Element auf das andere (*Weiterleitung*) kann dabei *überwacht* werden, d.h. der Übergang wird nur dann vorgenommen, wenn eine bestimmte Bedingung erfüllt wird. Als *Wächter* kann entweder ein *Skript* oder eine *Bedingung* angegeben werden.

- Skript: Erfolgt die Bedingungsprüfung per Skript, muss die entsprechende Checkbox markiert und ein Skript aus der Liste ausgewählt werden. Eine Bedingung gilt in diesem Fall als erfüllt, wenn das Skript einen Rückgabewert von 1 (context.returnValue = 1;) besitzt. Bei einem Rückgabewert von 0 wird, soweit vorhanden, die angegebene Fehlermeldung ausgegeben.
- Bedingung: Um Bedingungen zu erfassen, können folgende Informationen verwendet werden: Bedingungen, Wächter, Guards. Wird die Bedingung nicht erfüllt, kann eine Fehlermeldung angegeben werden, die angezeigt werden soll. Eine Fehlermeldung kann nur bei Kontrollflüssen verwendet werden, die an einer Aktion ausgehen.

Unter *Anzeige* können folgende Einstellungen festgelegt werden:

- Interaktionselement: Es kann angegeben werden, ob bei Kontrollflüssen, die von Aktions-Shapes ausgehen eine Schaltfläche (Funktionsknopf / Button) angezeigt werden soll oder ob der Kontrollfluss als Aktion in der Aktionsklappliste dargestellt wird.
- Navigation: Es kann angegeben werden, welche Ansicht nach der Weiterleitung verwendet werden soll, mögliche Navigationen können aus der entsprechenden Liste ausgewählt werden
- Mappe Ok / Kommentar: Mit den Feldern Mappe Ok und Kommentar kann eine Zustandsbeschreibung der Mappe angegeben werden, die im Monitor der Mappe dargestellt wird. Während bei Mappe Ok lediglich der Zustand auf Ok bzw. Nicht Ok festgelegt wird, können im Kommentar auch Autotexte verwendet werden.
- In Eingangskorb belassen: Es kann angegeben werden, ob die Mappe nach der Weiterleitung im Eingangskorb des jeweiligen Bearbeiters bestehen bleibt.
- Den anderen Eingangsboxen entziehen: Ist diese Option aktiviert, wird die Mappe nach der Weiterleitung aus den Eingangskörben anderer Bearbeiter entfernt. Dies ist z.B. sinnvoll, wenn es ausreicht, dass eine Mappe nur durch ein Gruppenmitglied bearbeitet werden soll.
- Kopie in den Gesendetordner ablegen: Es kann angegeben werden, ob die Mappe nach der Weiterleitung als Mappenkopie im Gesendet-Ordner des jeweiligen Bearbeiters abgelegt werden soll.
- Direkt weiterleiten: Ist diese Option aktiviert, erfolgt die Weiterleitung direkt und ohne Anzeige einer Weiterleitungsseite. Dabei werden die Werte für Mappe Ok und Kommentar so verwendet, wie am Shape festgelegt. Ist die Option nicht aktiv, wird beim Weiterleiten eine zusätzliche Weiterleitungsseite angezeigt, auf der, wenn für Mappe Ok der Wert Nein verwendet wird, die Möglichkeit zu einer Rückfrage, einer Weiterleitung bzw. zur Weiterleitung an den voreingestellten Empfänger laut Workflow besteht. Die deaktivierte Option wird nur nach Aktionen ausgewertet, bei denen eine tatsächliche Bearbeitung der Mappe durch eine Gruppe, Alias oder Benutzer erfolgt. Erfolgt die Bearbeitung des vorangehenden Workflow-Elementes durch das System (z.B. Signal oder Entscheidung) wird immer automatisch und direkt weitergeleitet.

Auf dem Register *Zugriff* können weitere Einstellungen für einen Kontrollfluss angegeben werden.


![model-controlflow-2](assets/model-controlflow-2.png)

Abb. 43 - Kontrollfluss / Register Zugriff

Über **Sichtbarkeit** kann per *Skript* oder *Bedingung* festgelegt werden, ob der Kontrollfluss als Schaltfläche oder als Eintrag in der Klappliste (s.o. *Interaktionselement*) angezeigt werden soll oder nicht. Damit können z.B. zusätzliche Berechtigungsprüfungen abgebildet werden.

Über **Bestätigung** kann bei zutreffender Berechtigung (Bedingung für Sichtbarkeit ist erfüllt), optional eine *Meldung* angezeigt werden, die zusätzlich bestätigt werden muss. In diesem Fall kann bei aktivierter Option *Kennwort prüfen* die zusätzliche Eingabe des Kennworts des entsprechenden Bearbeiters angefordert werden, um eine Weiterleitung durchzuführen.

Über **Aufgabe** kann eine *abweichende Aufgabe* angegeben werden. In diesem Fall wird beim Weiterleiten ein zusätzlicher Dialog angezeigt. Im Dialog werden die angegebene *Aufgabe* bzw. die *Beschreibung* dargestellt. Ist zusätzlich die Option *überschreibbar durch Benutzer* gewählt, kann der Aufgabentext manuell angepasst werden.

Weitere Formulareinstellungen:

- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften
- Verbundene Knoten: Siehe Verbindungen


### Operation-Shape

Während bei einem *Kontrollfluss-Shape* immer ein Übergang auf ein anderes Workflow-Element stattfindet, kann eine *Operation* dazu genutzt werden, einen Übergang auf dasselbe Element durchzuführen. Es wird dabei allerdings kein neuer Mappeneingang ausgelöst. Die Operation wird daher verwendet, um Feldern über die Feldbelegung neue Werte zuzuweisen.


![model-operation-1](assets/model-operation-1.png)

Abb. 44 - Operation

Die weiteren Einstellungen für *Interaktionselement* und *Zugriff* entsprechenden denen eines Kontrollflusses, es können jedoch keine *abweichenden Aufgaben* spezifiziert werden.

Weitere Formulareinstellungen:

- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften


### Escalation-Shape

Mit diesem Shape kann ein automatischer zeitgesteuerter Übergang von einem Workflow-Element auf ein anderes durchgeführt werden.

Für das Eskaltion-Shape gelten folgende Restriktionen:

- an ein Shape darf maximal ein Eskalation-Shape angehangen werden
- ein Eskalation-Shape darf nur von einem Aktion-Shape, einem Subworkflow-Shape, einem Signaleingang-Shape oder einem Signalausgang-Shape ausgehen
- ein Eskalation-Shape muss immer mit einem anderen Workflow-Element verbunden werden und darf nicht einen Übergang auf dasselbe Workflow-Element durchführen
- bei einem Eskalationsübergang erfolgt der Übergang immer als direkte Weiterleitung


![model-escalation-2](assets/model-escalation-2.png)

Abb. 45 - Eskalation

- Eskalationszeit / Zeit / Einheit: Es wird die Zeit (numerischer Wert oder absolute Zeitangabe) und die Zeiteinheit (Minuten, Stunden, Tage, Wochen, Absolut) festgelegt, ab der die Eskalation ausgeführt werden soll. Der Server führt Eskalationsjobs regelmäßig automatisch laut Einstellungen in der Datei documents.ini ($NumberEscalationJobsPerHour) aus, es kann je nach Einstellung auch zu Zeitverzögerungen kommen. Wird die Zeiteinheit Absolut gewählt, muss die Zeit als ein Datumsformat angegeben werden, welches laut Format-Einstellungen (siehe globale Einstellungen) festgelegt ist, z.B. TT.MM.JJJJ, bei Angabe von Uhrzeiten z.B.: 31.10.2023 10:30 (Leerzeichen zwischen Datum und Uhrzeit).
- Eskalationszeit / Arbeitskalender: Wird diese Einstellung nicht gewählt, beziehen sich Zeit und Einheit auf den Jahreskalender. Wird die Einstellung gewählt, muss in den globalen Einstellungen ein Arbeitskalender aktiviert sein und gepflegt werden. Ist dies der Fall, werden Eskalationen nur in den angegebenen Arbeitszeiten und nicht an ggf. hinterlegten Feiertagen durchgeführt.
- Anzeige / Den anderen Eingangsboxen entziehen: Ist diese Option aktiviert, wird die Mappe nach der Weiterleitung aus den Eingangskörben anderer Bearbeiter entfernt. Diese Option sollte gewählt werden, damit eine direkte Bearbeitung nach erfolgter Eskalation nicht mehr möglich ist.

Weitere Formulareinstellungen:

- Verbundene Knoten: Siehe Verbindungen
- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften


### Fork-Shape und Join-Shape

Mit einem *Fork-Shape* kann ein Workflow in verschiedene nebenläufige Stränge aufgespalten werden (Parallelverzweigung). Ein Fork muss genau eine eingehende und mindestens zwei ausgehende Verbindungen haben. Die Zusammenführung der Stränge **muss immer** über einen *Join-Shape* erfolgen. Ein Join muss mindestens zwei eingehende und genau eine ausgehende Verbindung haben.

Für die Workflowmodellierung mit Fork und Join sind folgende Regeln zu beachten:

- Für jeden Fork muss es genau einen zugehörigen Join geben.
- Verarbeitungsstränge müssen vom Verzweigungs- bis zum Synchronisationspunkt durchlaufen.
- Verbindungen zwischen verschiedenen Verarbeitungssträngen sind nicht erlaubt.
- Ein Parallel- und Synchronisationsbereich darf nicht verlassen werden.
- Ein Verarbeitungsstrang besitzt mitsamt seinen Abzweigungen genau einen Start und einen Endpunkt.
- Feldwertänderungen gelten immer für die gesamte Mappe. Sie sind nicht auf Teilstränge begrenzt.
- Besteht, die Möglichkeit, dass der Bearbeiter einer Mappe in verschiedenen Strängen tätig werden kann, z.B. weil er Mitglied in verschiedenen Gruppen ist, sollte im Kontrollfluss der zur Parallelverzweigung führt, die Navigation auf Übersicht geschaltet werden. Über die Aufgabe der jeweiligen Aktion kann der Bearbeiter dann erkennen, in welchem Strang und in welchem Workflow-Schritt Bearbeitungsaufgaben anfallen.


![model-fork-join-1](assets/model-fork-join-1.png)

Abb. 46 - Wichtige Modellierungsrichtlinien für Fork / Join


![model-fork-join-2](assets/model-fork-join-2.png)

Abb. 47 - Fork


![model-fork-join-3](assets/model-fork-join-3.png)

Abb. 48 - Join

Sowohl für das Fork-Shape als auch für das Join-Shape kann der Typ festgelegt werden mit **Und** bzw. **Oder**, diese Typen haben folgende Regeln und Bedeutungen:

- Und Fork / Join: Ein Prozess, der mit einem Und-Fork eingeleitet wurde, muss auch mit einem Und-Join abgeschlossen werden. Bei einer derartigen Modellierung muss jeder Strang für sich vollständig durchlaufen sein, damit der Workflow nicht am Synchronisationspunkt verharrt.
- Oder Fork / Join: Ein Prozess, der mit einem Oder-Fork eingeleitet wurde, muss auch mit einem Oder-Join abgeschlossen werden. Bei einer derartigen Modellierung genügt es, wenn ein Teilstrang für sich vollständig abgearbeitet wurde und am Oder-Synchronisationspunkt ankommt.

Weitere Formulareinstellungen:

- Feldbelegung: Siehe Feldbelegung
- Eigenschaften: Siehe Eigenschaften
- Verbindungen: Siehe Verbindungen


### Annotation-Shape

Mit diesem Shape können Beschreibungen an beliebigen Stellen angegeben werden. Dieses Shape darf nicht mit eingehenden oder ausgehenden Edges verbunden werden, es hat keine weiteren Formulareinstellungen.


### Sonstige Formularelemente


#### Exklusiver Schreibschutz

Auf einigen Workflow-Elementen wird ein Feld *Exklusiver Schreibschutz* dargestellt.

Sperrt ein Benutzer eine Mappe, weil er der Verantwortliche für den aktuellen Workflowschritt ist, so hat er ein exklusives Schreibrecht auf dieser Mappe. Dieses Standardverhalten des Workflows kann auf dem Workflow-Shape durch Aktivieren der Option „Exklusiven Schreibschutz aufheben“ für den gesamten Workflow geändert werden. Die Mappe kann dann auch durch einen anderen Benutzer bearbeitet werden, sofern dieser über die notwendigen Rechte verfügt.

Die Änderung des Schreibschutzes im Workflow-Shape wirkt sich im gesamten Workflow für alle Workflow-Elemente aus, die zu den Typen *Delay*, *Action*, *Signal Input* oder *Signal Output* gehören. Dabei kann für jedes dieser Elemente ein vom Gesamtworkflow abweichendes Verhalten im zugehörigen Formular festgelegt werden.

Der Schreibschutz des betreffenden Elementes kann der Einstellung des Workflows folgen *wie Workflow* oder er kann expliziert für dieses Element *aufgehoben* bzw. *nicht aufgehoben* werden, unabhängig davon, welche Einstellung für den Workflow an sich vorgenommen wurde.


#### Eskalation Einstellungen

Auf einigen Workflow-Elementen wird ein Register *Eskalation* dargestellt.

Sollte die Bearbeitung nicht binnen einer gewissen Zeitspanne erfolgen, kann der Workflow darauf mit einer stufenweisen *Eskalation* reagieren. So wird vermieden, dass Mappen während des Bearbeitungsprozesses unbearbeitet bleiben oder der Workflow an dieser Stelle verharrt. Es konnen zwei Eskalationsstufen festgelegt werden.


![model-escalation-1](assets/model-escalation-1.png)

Abb. 49 - Eskalation

- Aktiv: Die Eskalationsstufe wird aktiviert, es können weitere Einstellungen festgelegt werden.
- Zeit / Einheit: Es wird die Zeit (numerischer Wert oder absolute Zeitangabe) und die Zeiteinheit (Minuten, Stunden, Tage, Wochen, Absolut) festgelegt, ab der die Eskalation ausgeführt werden soll. Der Server führt Eskalationsjobs regelmäßig automatisch laut Einstellungen in der Datei documents.ini ($NumberEscalationJobsPerHour) aus, es kann je nach Einstellung auch zu Zeitverzögerungen kommen. Wird die Zeiteinheit Absolut gewählt, muss die Zeit als ein Datumsformat angegeben werden, welches laut Format-Einstellungen (siehe globale Einstellungen) festgelegt ist, z.B. TT.MM.JJJJ, bei Angabe von Uhrzeiten z.B.: 31.10.2023 10:30 (Leerzeichen zwischen Datum und Uhrzeit).
- Arbeitskalender: Wird diese Einstellung nicht gewählt, beziehen sich Zeit und Einheit auf den Jahreskalender. Wird die Einstellung gewählt, muss in den globalen Einstellungen ein Arbeitskalender aktiviert sein und gepflegt werden. Ist dies der Fall, werden Eskalationen nur in den angegebenen Arbeitszeiten und nicht an ggf. hinterlegten Feiertagen durchgeführt.
- Art: Es können die Arten E-Mail Benachrichtigung, Delegieren an Benutzer, Delegieren an Alias, Delegieren an Gruppe und Zurück zum Initiator gewählt werden.
E-Mail Benachrichtigung: Je nachdem, ob eine statische oder eine dynamische Empfängerermittlung bzw. Absenderermittlung erfolgt, werden in der Klappliste die zur Auswahl stehenden Einträge angezeigt. Bei der dynamischen Ermittlung werden die im Mappentyp enthaltenen Felder aufgelistet, in denen dann ein entsprechender Empfänger bzw. Absender als Feldwert erwartet wird. Zusätzlich können Mail Betreff und Mail Text angegeben werden, hier können auch Autotexte verwendet werden.
Delegation (Benutzer, Alias, Gruppe): Erfolgt eine Delegation, so wird die Bearbeitung dem ursprünglich zugeteilten Bearbeiter entzogen und die Bearbeitung einem anderen Benutzer, einem Alias oder einer Gruppe übertragen. Je nachdem, ob eine statische oder eine dynamische Empfängerermittlung erfolgt, werden in der Klappliste die zur Auswahl stehenden Einträge angezeigt. Bei der dynamischen Ermittlung werden die im Mappentyp enthaltenen Felder aufgelistet, in denen dann ein entsprechender Empfänger als Feldwert erwartet wird.
Zurück zum Initiator: Bei dieser Auswahl wird die Mappe an den ursprünglichen Mappenersteller zur weiteren Bearbeitung delegiert und dem aktuellen Benutzer entzogen.


#### Feldbelegung

Auf einigen Workflow-Elementen wird ein Register *Feldbelegung* dargestellt.

Vor Beginn bzw. nach Beendigung des jeweiligen Workflowschrittes können automatisch Feldwerte gesetzt werden.


![model-fieldvalue-1](assets/model-fieldvalue-1.png)

Abb. 50 - Feldbelegung

Für Feldbelegungen gibt es diverse Möglichkeiten:

- Leereintrag für ein Feld setzen: Wert leer lassen
- Autotexte als Feldwerte setzen: Als Feldwerte können auch Autotexte verwendet werden, z.B.: Wert = %currentDate% trägt das aktuelle Datum ein.
- Feldverweise als Feldwerte setzen: Bei der Wertevergabe kann sich auf andere Felder bezogen werden, z.B.: %Feldname%`.
- Skript als Feldwert setzen: Wenn als Feldname "runscript" eingetragen wird, kann als Wert der Name des Skriptes angegeben werden. Es wird dann zum jeweiligen Zeitpunkt das Skript ausgeführt.


#### Felder

Auf einigen Workflow-Elementen wird ein Register *Felder* dargestellt.


![model-fields-1](assets/model-fields-1.png)

Abb. 51 - Feldeinstellungen

Auf dem Register werden alle vorhandenen Felder des Mappentypen dargestellt, pro Feld kann eingestellt werden, ob und mit welcher Einstellung es dargestellt werden soll:

- Lesen/Schreiben: Das Feld wird dargestellt und ist bearbeitbar.
- Lesen/Schreiben & Mussfeld: Das Feld wird dargestellt, ist bearbeitbar und darf keinen leeren wert enthalten.
- Nur Lesen: Das Feld wird dargestellt, ist aber nicht bearbeitbar.
- Nicht ausgewählt: Das Feld wird nicht dargestellt.

Über die Schaltfläche *Alle Zugriffsrechte setzen* wird für alle Felder der Wert *RW* (Lesen/Schreiben) gesetzt.
Über die Schaltfläche *Alle Zugriffsrechte zurücksetzen* werden getroffene Einstellung entfernt.

Es ist zu beachten, dass ggf. andere Einstellungen, z.B. Skripte, die Sichtbarkeiten und Bearbeitungsmöglichkeiten von Feldern zusätzlich einschränken.


#### Register

Auf einigen Workflow-Elementen wird ein Register *Register* dargestellt.


![model-register-1](assets/model-register-1.png)

Abb. 52 - Registereinstellungen

Auf dem Register werden alle vorhandenen Register des Mappentypen dargestellt, pro Register kann eingestellt werden, ob und mit welcher Einstellung es dargestellt werden soll:

- Lesen/Schreiben: Das Register wird dargestellt und ist bearbeitbar, z.B. Dokumentenregister mit Uploadmöglichkeit.
- Nur Lesen: Das Register wird dargestellt, ist aber nicht bearbeitbar.
- Nicht ausgewählt: Das Register wird nicht dargestellt.

Über die Schaltfläche *Alle Zugriffsrechte setzen* wird für alle Regsiter der Wert *RW* (Lesen/Schreiben) gesetzt.
Über die Schaltfläche *Alle Zugriffsrechte zurücksetzen* werden getroffene Einstellung entfernt.

Es ist zu beachten, dass ggf. andere Einstellungen, z.B. Skripte, die Sichtbarkeiten und Bearbeitungsmöglichkeiten von Registern zusätzlich einschränken.


#### Eigenschaften

In den Eigenschaften können Name-Wert-Paare von unterstützten Workflow-Eigenschaften angegeben werden. Mögliche Eigenschaften für Workflow-Knoten und Workflow-Kontrollflüsse sind hier zu finden: [Eigenschaften](../../../api/properties/)


#### Verbindungen

Auf einigen Workflow-Elementen wird ein Register *Verbindungen* für eingehende und ausgehende Verbindungen für den jeweiligen Workflowschritt angezeigt. Änderungen der Verbindungseinstellungen können an dieser Stelle nicht vorgenommen werden, für *ausgehende Verbindungen* besteht jedoch die Möglichkeit, die Reihenfolgen per Drag&Drop zu verändern. Diese Reihenfolge bestimmt z.B. bei Aktionen mit ausgehenden Kontrollflüssen die Reihenfolge der möglichen Aktionen, die für Schaltflächen oder in der Aktionsklappliste dargestellt werden. Durch diese Übersicht kann auch geprüft werden, ob alle vorgesehenen Verbindungen zum jeweiligen Workflowschritt auch aktiv und damit gültig sind.


![model-connection-1](assets/model-connection-1.png)

Abb. 53 - Ausgehende Verbindungen per Drag&Drop verschieben

Bei den Shapes *Control Flow* und *Escalation* werden auf dem Register *Verbundene Knoten* jeweils die ein- und ausgehenden Verbindungen angezeigt.


#### Kommentar

Auf einigen Workflow-Elementen wird ein Feld *Kommentar* dargestellt. Kommentare können sprachlich internationalisiert angegeben werden. Kommentare werden im Monitor der Mappe mit gespeichert, sie können auch Autotexte enthalten und z.B. zur genaueren Dokumentation des Workflowverlaufs verwendet werden.