---
title: "Ordner Konfiguration"
source: "https://otris.software/documents/manuals/books/app-doc/folder_config.html"
---

# Ordner Konfiguration

Nach dem Speichern einer allgemeinen App-Konfiguration können Sie über
die Schaltflächen auf der Konfiguration neue App-Ordner anlegen und
diese ebenfalls konfigurieren.


![Aktionen zur Anlage von App-Mappentypen und App-Ordnern](media/new-config.png)

Abb. 21 - Aktionen zur Anlage von App-Mappentypen und App-Ordnern

myFavorites stellt nur Ordner dar, für die eine Konfiguration als
*App-Ordner* vorhanden ist. Alle anderen Ordner aus der
Documents-Anwendung werden weder angezeigt noch synchronisiert.

Erstellen Sie einen neuen App-Ordner über die Aktion „*+ App-Ordner*“.
Daraufhin wird ein Dialog geöffnet und Sie können wählen, ob Sie mit
einer leeren Vorlage beginnen (keinen Eintrag wählen) oder einen bereits
vorhandenen Ordner als Vorlage für den neuen Ordner verwenden wollen. Vorlagen mit einem vorangestellten Sternsymbol (bspw.
*Eingang) sind **persönliche Ordner** der Benutzer. Diese enthalten
jeweils dynamische Inhalte im Kontext des angemeldeten Benutzers. Ordner
ohne vorangestelltes Stern-Symbol sind **öffentliche Ordner**, deren
Inhalte für alle Benutzer identisch dargestellt werden.

Es wird eine neue Akte erzeugt und Sie können mit der Konfiguration des
Ordners fortfahren.


## Konfigurationsdetails

Nach der Auswahl des Ordners können weitere Anpassungen vorgenommen
werden. Zunächst bestimmen Sie eine *App-Konfiguration*, mit der dieser
Ordner in myFavorites eingebracht wird. Bereits voreingestellt ist
diejenige App-Konfiguration, aus der heraus Sie die Aktion „*+
App-Ordner*“ aufgerufen haben. Eine Änderung dieses Bezugs ist
nichtsdestotrotz möglich.

Verpflichtend ist auch für App-Ordner die Vergabe eines *Ranges*. Dieser
steuert die Reihenfolge der Anzeige aller für den angemeldeten Benutzer
sichtbaren Ordner in myFavorites. Der Ordner mit dem kleinsten Wert im
Rang wird an oberster Stelle dargestellt.

Über die Checkbox „*Aktiv*“ legen Sie fest, ob dieser Ordner aktuell in
myFavorites verwendet werden soll. Nicht aktive Ordner und deren Inhalte
werden in myFavorites nicht berücksichtigt.

Optional kann ein *alternativer Bezeichner* für den Ordner in
myFavorites gewählt werden. Der Bezeichner kann mehrsprachig gesetzt
werden (unter Verwendung der Locales der aktiven Sprachen).

Im Feld *Icon* können Sie den Namen eines „*Ionic/Entypo/Material Design*“-Icons
eintragen. Siehe [Icon HowTo](./../../../howto/design/icons.html).
Das Symbol wird in myFavorites vor dem Ordner angezeigt. Bei der Konfiguration des Icons können
Sie entweder, wie im Icons HowTo beschrieben einen Icon-Präfix verwenden oder ein Iconicon der
Version 3 ohne Präfix nutzen. Geben Sie bitte bei Verwendung ohne Präfix nur den Namen des Icons an,
ohne vorangestellte Informationen zum mobilen Betriebssystem. Die App wählt dann automatisch das passende Icon aus.
Bspw. „*alarm*“ oder „*barcode*“ oder „*entypo:mail*“.


![Entypo Icon für Eingang Ordner](media/folder-config-icon-app.png)

Abb. 22 - Entypo Icon für Eingang Ordner

Im Feld „*Anzahl Mappen pro Ordner*“ bestimmen Sie die Obergrenze der zu
synchronisierenden Mappen für genau diesen Ordner. Dieser Wert
überschreibt die Voreinstellung aus der globalen App-Konfiguration für
diese Limitierung.


![Konfiguration eines App-Ordners](media/folder-config-overview.png)

Abb. 23 - Konfiguration eines App-Ordners

Die Checkbox „*Kachel*“ steuert die Darstellung des Ordners in
myFavorites: Kacheln werden auf der Startseite oberhalb der restlichen
Ordner angezeigt und nehmen damit sowohl optisch als auch in der
Reihenfolge eine Sonderstellung innerhalb der Ordner ein. Mit Hilfe der
Checkbox „*Invertiert*“ kann das Design farblich umgekehrt und somit auf
eine kontrastreichere Darstellung umgestellt werden.

Wenn dieser Ordner aus einer Vorlage heraus generiert wurde, wird deren
Name im Feld „*Erstellt aus App-Ordner*“ hinterlegt. Auf diesem Weg kann
der Ordner erneut mit den Informationen aus der Vorlage überschrieben
werden.

Die Checkbox „*Archiv Mappen Zeigen*“ aktiviert die Darstellung von archivierte
Mappen im Ordner.


## Suche

Die Suchfunktion kann für Ordner einzeln angepasst werden.

- Suchmodus: Aktiviert oder deaktiviert die Suche in dem Ordner, und definiert die Modus. Sie haben die folgende Auswahlmöglichkeiten:
Deaktiviert: Deaktiviert die Suche in dem Ordner
Offline: Aktiviert die Suche in dem Ordner, aber nur die heruntergeladene Mappen werden durchgesucht.
Online: Aktiviert die Online Suche in dem Ordner. In diesem Fall werden keine Mappen standardmässig in den Ordner geladen. Alle Online Mappen werden auf dem DOCUMENTS Server durchsucht dann präsentiert.
Gemischt (Offline Mappen & Online Suche): Diese Modus bietet den Ordner mit standardmässig geladene Mappen. Bei der Suche werden sowohl die auf dem Gerät gespeicherte Mappen, als auch die Online Mappen berücksichtigt.
- Anzahl der Online-Suchtreffer (max): Steuert die Anzahl der Online Suchergebnisse


## HTML

In diesem Bereich kann eine HTML-Karte für den Ordner konfiguriert werden.
Im Feld *"HTML-Karte"* können Sie die beliebige HTML code eingeben.
Die Höhe der HTML-Karte ist auch einstellbar, oder lassen Sie das Feld leer
für eine automatische Anpassung.


![](media/folder-config-html_on_folder.png)

Abb. 24 - HTML an dem Ordner


## Aktivierte Skript-Aktionen

Die Funktionalität der App kann dynamisch über Skriptfunktionen
erweitert werden. Sie können hier aus den vorhandenen Skript-Aktionen
diejenigen auswählen, die für den Ordner genutzt werden sollen.

Die Funktionsweise von Skript-Aktionen wird in dem entsprechenden Kapitel
erläutert


## Zugriff

Im Bereich *Zugriff* können die Benutzergruppen des Systems ausgewählt werden, für die diese Konfiguration bestimmt ist. Legen Sie ggf. mehrere Konfigurationen an, in denen Sie die zu synchronisierenden Dokumente für bestimmte Benutzergruppen optimieren.


![Zugriffsberechtigungen einer Mappentyp-Konfiguration](media/zugriff.png)

Abb. 25 - Zugriffsberechtigungen einer Mappentyp-Konfiguration