---
title: "Kacheln im Documents Manager"
source: "https://otris.software/documents/howto/common/manager-card-design.html"
---

# Kacheln im Documents Manager

Um die Arbeit mit dem Documents Manager zu vereinfachen gibt es Kacheln, welche verschiedene Funktionen anbieten. Die Kacheln sind ab der Version 5.0f verfügbar und die meisten sind standardmäßig aktiviert. Lediglich für die UML-Kacheln muss ein Property gesetzt werden (siehe unten). Die verschiedenen Kacheln können jedoch über Properties deaktiviert werden, falls diese nicht erwünscht sind.


## Arten von Kacheln


### Detail-Ansicht

- Verfügbar auf: Mappentyp, Skript, Archivserver, Vorgang
- Property: cmCardDetails = true oder false

Stellt die Attribute einer Mappe übersichtlich dar. Mit Hilfe des Menübuttons kann die Darstellung zwischen allen Attributen oder nur den vom Standardwert abweichenden Attributen umgeschaltet werden.


### Property-Editor

- Verfügbar auf: Startseite, Mappentyp, Skript, Vorgang
- Property: cmCardPropertyEditor = true oder false

Ermöglicht die Darstellung und Bearbeitung der Properties. Die Properties werden tabellarisch dargestellt. Rechts daneben ist die Dokumentation zu dem jeweiligen Property zu finden. Mittels eines Doppelklicks oder durch das Drücken von `Enter` lässt sich eine Zelle bearbeiten. Durch drücken von `Esc` kann die Bearbeitung abgebrochen werden. Sobald die Zelle verlassen wird, wird der Wert gesichert. Durch das Betätigen von `Enter` im Bearbeitungsmodus wird automatisch die nächste Zelle ausgewählt und die Bearbeitung dort fortgesetzt. Der Property-Editor bietet für bestimmte Properties eine Autovervollständigung an. Ein Property kann über das `X` auf der rechten Seite einer Zeile oder durch das Drücken von `Entf` gelöscht werden. Außerdem wird eine Gruppierung von Properties nach Art angeboten, welche über den Menübutton ein- und ausgeschaltet werden kann.

**HINWEIS**: Beim Verlassen einer Zelle wird der neu eingetragene Wert automatisch gespeichert!


### Code-Editor

- Verfügbar auf: Skript
- Property: cmCardCodeEditor = true oder false

Zur leichteren Bearbeitung von Skripten im Documents Manager wird der Code-Editor angeboten. Dieser stellt den Code eines (unverschlüsselten) Skriptes übersichtlich und mit Code-Highlighting dar. Eine Bearbeitung ist, wie aus anderen Editoren gewöhnt, möglich. Mit Hilfe von `Strg+F` kann eine Suche durchgeführt werden und über die Tastenkombination `Strg+H` ist auch eine Ersetzungsfunktion verfügbar. Wie üblich lässt sich der Code mit Hilfe von `Strg+S` oder dem Button am unteren Rand des Editors speichern. Außerdem wird die Möglichkeit angeboten ein Skript über die Tastenkombination `Strg+R` auszuführen. Eine Einfache Code-Vervollständigung auf Basis der schon im Code vorhandenen Schlüsselwörter steht auch zur Verfügung.


### Abhängigkeitsdiagramm

- Verfügbar auf: Skript
- Property: cmCardDependencyUml = true oder false

Das Abhängigkeitsdiagramm stellt viele, jedoch nicht alle, Abhängigkeiten von Skripten dar. So werden Skripte welche in das aktuelle Skript importiert werden mit Hilfe einer Vererbungsbeziehung dargestellt. Außerdem werden verschiedenste Verwendungsorte eines Skriptes grafisch dargestellt (zum Beispiel als onSave-Skript oder in einem Property). Um diese Kachel zu aktivieren muss ein UML-Server gesetzt werden (siehe unten).


### Mappentyp-Diagramm

- Verfügbar auf: Startseite, Mappentyp
- Property: cmCardFileTypeUml = true oder false

Dieses Diagramm stellt Mappentypen, deren Felder und die Beziehungen zwischen diesen Mappentypen grafisch dar. Um diese Kachel zu aktivieren muss ein UML-Server gesetzt werden (siehe unten).


### Vorgangs-Diagramm

- Verfügbar auf: Vorgang
- Property: cmCardFileUml = true oder false

Dieses Diagramm stellt Vorgänge, deren Felder und Werte, sowie die Beziehungen zu anderen Vorgängen grafisch dar. Um diese Kachel zu aktivieren muss ein UML-Server gesetzt werden (siehe unten).


### Archivmanager

- Verfügbar auf: Archivserver
- Property: cmCardEASManager = true oder false

Mit Hilfe dieser Kachel ist ein Zugriff auf dem EAS-Archivmanager direkt aus dem Documents-Manager heraus möglich. Hierzu sind jedoch ggf. einige Einstellungen am EAS-Server vorzunehmen, falls dieser nicht auf der gleichen Maschine ausgeführt wird wie der Documents Manager. Der Zugriff auf den EAS-Server muss hierzu durch die Firewall zugelassen werden und es **muss** ein sicheres Passwort für alle Zugänge zum EAS vergeben werden. Außerdem ist es äußerst ratsam einen Zugriff nur über VPN oder HTTPS durchzuführen!


## Deaktivierung von bestimmten Kacheln

Um bestimmte Kacheln zu deaktivieren muss lediglich in den Documents-Einstellungen das jeweils entsprechende Property (siehe oben) auf `false` gesetzt werden.


## Aktivierung der UML-Kacheln

Um die UML-Kacheln nutzen zu können ist ein PlantUML-Server erforderlich. Dieser kann entweder OnPremise installiert werden oder es kann der von der otris software AG öffentlich zu Verfügung gestellte Server unter [https://uml.otris.de/plantuml](https://uml.otris.de/plantuml) genutzt werden. Um den Server im Documents Manager zu nutzen muss in den Documents-Einstellungen das Property `plantUMLServer` auf die URL zu dem jeweiligen Server gesetzt werden. Also zum Beispiel `plantUMLServer` = `https://uml.otris.de/plantuml`.