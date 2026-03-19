---
title: "Mappentyp Konfiguration"
source: "https://otris.software/documents/manuals/books/app-doc/file_config.html"
---

# Mappentyp Konfiguration

Analog zu den Ordnern lassen sich ebenfalls individuelle Konfigurationen
für Mappentypen definieren.

Im Standardverhalten wird eine Mappe in myFavorites so angezeigt, wie es
auch in der Web-Anwendung der Fall ist.

Soll die Ansicht auf mobilen Endgeräten hiervon abweichen, benötigen Sie
für diesen Mappentypen eine eigene Konfiguration. Eine Zugriffssteuerung
pro Mappentyp-Konfiguration ermöglicht sogar eine zielgruppenoptimierte
Darstellung in myFavorites, indem Sie gleich mehrere Konfigurationen für
einen Mappentypen anbieten und diese jeweils auf bestimmte
Benutzergruppen einschränken.


## Mappentyp-Konfiguration anlegen

Sie erstellen eine neue Mappentyp-Konfiguration über die Aktion „*+
App-Mappentyp*“ innerhalb der derzeit ausgewählten App Konfiguration.


![Neue Mappentyp-Konfiguration per Vorlage erzeugen](media/new-config.png)

Abb. 26 - Neue Mappentyp-Konfiguration per Vorlage erzeugen


## Basiseinstellungen

In der geöffneten Konfiguration wählen Sie als Erstes in dem Feld Mappentyp
den gewünschten *Mappentypen* aus der Liste, für den diese Konfiguration
greifen soll. Haben Sie im vorherigen Dialog eine Vorlage verwendet, so
wird automatisch der Mappentyp vorselektiert, den die Vorlage ebenfalls
nutzt.

Anschließend bestimmen Sie eine *App-Konfiguration*, mit der dieser
Mappentyp in myFavorites integriert wird. Bereits voreingestellt ist
diejenige App-Konfiguration, aus der heraus Sie die Aktion „*+
App-Mappentyp*“ aufgerufen haben. Eine Änderung dieses Bezugs ist
nichtsdestotrotz möglich.

Verpflichtend ist auch für App-Mappentypen die Vergabe eines *Ranges*.
Dieser steuert die Reihenfolge der Anzeige aller für den angemeldeten
Benutzer sichtbaren Mappentypen innerhalb dieser Konfiguration. Der
Mappentyp mit dem niedrigsten Wert im Rang wird an oberster Stelle
dargestellt.

Über die Checkbox „*Aktiv*“ legen Sie fest, ob diese Konfiguration
aktuell in myFavorites verwendet werden soll.

Optional kann ein *alternativer Bezeichner* für den Mappentyp in
myFavorites gewählt werden. Der Bezeichner kann mehrsprachig gesetzt
werden (unter Verwendung der Locales der aktiven Sprachen).

Im Feld *Icon* können Sie den Namen eines „*Ionic/Entypo/Material Design*“-Icons
eintragen oder nach einem passenden Icon suchen. Siehe [Icon HowTo](./../../../howto/design/icons.html).
Das Symbol wird in myFavorites auf der Mappe angezeigt. Bei der Konfiguration des Icons können
Sie entweder, wie im Icons HowTo beschrieben einen Icon-Präfix verwenden oder ein Iconicon der
Version 3 ohne Präfix nutzen. Geben Sie bitte bei Verwendung ohne Präfix nur den Namen des Icons an,
ohne vorangestellte Informationen zum mobilen Betriebssystem. Die App wählt dann automatisch das passende Icon aus.
Bspw. „*alarm*“ oder „*barcode*“ oder „*entypo:mail*“. Eine Vorschau des ausgewählten Icons sehen Sie direkt neben dem Feld.


![Auswahl eines Icons](media/file-config-icon.png)

Abb. 27 - Auswahl eines Icons

Wenn diese Konfiguration auf Basis einer Vorlage erzeugt haben, wird
deren Name im Feld „*Erstellt aus App-Mappentyp*“ hinterlegt. Auf diesem
Weg kann der Mappentyp erneut mit den Informationen aus der Vorlage
überschrieben werden.


![Basiseinstellungen einer Mappentyp-Konfiguration](media/file-config-base-config.png)

Abb. 28 - Basiseinstellungen einer Mappentyp-Konfiguration


## Listeneintrag und Titelzeile

Die Darstellung für einen einzelnen Listeneintrag kann über die
nachfolgenden Datenfelder optimiert werden. Die hier
getroffenen Einstellungen wirken sich in gleicher Weise auch auf die
Titelzeile der Mappenansicht in myFavorites aus.


![Listeneinträge konfigurieren](media/file-config-list.png)

Abb. 29 - Listeneinträge konfigurieren

Folgende Datenfelder können angepasst werden:

- Mappentitel: Lassen Sie dieses Feld leer, wird der Titel identisch zur Darstellung in der Web-Anwendung angezeigt. Bei einer individuellen Anpassung können Sie statische Texte sowie Autotexte verwenden.
- benutzerdef. Symbol: Tragen Sie hier den Namen eines Feldes ein, in welchem sein Symbol angezeigt wird. Der Feldname muss von %-Zeichen umschlossen sein.
- Untertitel/Text: Verwenden Sie hier statischen Text oder Autotexte, um eine kurze Beschreibung der wichtigsten Eigenschaften der Mappe zu erzeugen.
- Info links / Info rechts: Texte / Autotexte für die Darstellung weiterer Informationen in der untersten Zeile der Listendarstellung und des Titels. Lassen Sie die Felder leer, um die genannten Standardwerte zu verwenden. Soll die Anzeige der Felder unterdrückt werden, tragen Sie bitte ein Minuszeichen ein.

Unten sehen Sie eine Listenansicht in myFavorites, um den direkten
Zusammenhang der Konfiguration zu illustrieren. Jeder Listeneintrag
zeigt analog zur obigen Konfiguration in der ersten Zeile den
(nicht angepassten) *Mappentitel*. Auf ein *Symbol* wurde ebenfalls
verzichtet. Dieses wäre sonst oben rechts im Listeneintrag sichtbar.

In der zweiten Zeile wird der Inhalt des Feldes *Untertitel/Text*
angezeigt. Die unterste Zeile zeigt die Felder *Info links* und *Info
rechts*, wobei auch diese im Beispiel unverändert sind und daher im
Standard den letzten Benutzer sowie das Datum der letzten Änderung an
der Mappe zeigen.


![Listendarstellung in myFavorites](media/file-config-list-app.png)

Abb. 30 - Listendarstellung in myFavorites


## Felder

Im Bereich *Felder* entscheiden Sie, welche Daten und
Informationen einer Mappe in myFavorites angezeigt werden sollen. Links
in der Liste werden alle Felder des selektierten
Mappentypen aufgelistet. Wählen Sie im rechten Bereich diejenigen aus,
die in myFavorites verwendet werden sollen. Die Reihenfolge im
Auswahlfeld steuert gleichzeitig die Reihenfolge der Anzeige in
myFavorites. Werden an dieser Stelle keine Felder ausgewählt, so werden
in der App auch keinerlei Felder angezeigt. Die Mappe wird dann
lediglich mit dem konfigurierten Titel sowie anhängenden Dokumenten
dargestellt.
Mit der Checkbox *Kommentare anzeigen* können Sie steuern ob die
Kommentare der Mappen in der App präsentiert werden sollen.


![Feldauswahl an einer Mappentyp-Konfiguration](media/file-config-fields.png)

Abb. 31 - Feldauswahl an einer Mappentyp-Konfiguration


## Dokumente

Zusätzlich zu den Informationen aus den Feldern können Sie auch die
anhängenden Dokumente und sonstigen Dateien einer Mappe synchronisieren.

Im Feld *Dokumentenregister* bestimmen Sie die „Ablageorte“ innerhalb
einer Mappe, die synchronisiert werden sollen. Insbesondere bei Mappen
mit verschiedenen Registern (bspw. eine Mappe für „Verkaufsprojekte“ mit
Registern für Angebote, Rechnungen, Verträge etc.) können Sie hier eine
schlanke Konfiguration für die mobile Anwendung bereitstellen.

Die **Limitierungen** von Dokumenten bei *Größe*, *Anzahl* und
*Dateityp* haben Sie in identischer Form bereits in dem Kapitel zur
App-Konfiguration für die gesamte App-Konfiguration festgelegt. Die
speziellen Regelungen am Mappentypen überschreiben abweichende Standardeinstellungen.
Lassen Sie die Felder an der Mappentyp-Konfiguration leer, so werden
in jedem Fall die Regelungen der allg. App-Konfiguration verwendet.


![Einstellungen für Dokumente an einer Mappentyp-Konfiguration](media/file-config-docs.png)

Abb. 32 - Einstellungen für Dokumente an einer Mappentyp-Konfiguration

Beachten Sie bitte, dass bei der Synchronisierung von Dokumenten unter
Umständen große Datenmengen übertragen werden. Dies kann bei der
Verwendung von mobiler Datennutzung (standardmäßig aktiviert) zu
erhöhten Kosten bzw. schnellem Verbrauch eines Datenlimits führen.
Zusätzlich wird der Speicherplatz auf dem Endgerät stark beansprucht. Es
wird daher empfohlen, die Limitierungen nicht allzu offen zu gestalten.

Die Funktion *Online-Nachladen erlauben* bietet die Möglichkeit die
Dokumente, die nicht standarmässig synchronisiert wurden (laut Limitierungen),
später nachzuladen. Hierzu können die nicht heruntergeladenen Dokumente per
Tipp auf "weitere" angezeigt werden. Beim Öffnen eines solchen Dokuments
wird dieses automatisch heruntergeladen, sofern eine Verbindung zum DOCUMENTS-Server
möglich ist.

Einchecken der *Dokumenten aufklappen aktivieren* Checkbox mitbringt
presentierung der ganzen Dokumentenliste, auch die Einträge die nicht
synchrosiert sind. Wenn die Einstellung deaktiviert wird, die Dokumentenliste
wird mit der Hilfe einem Knopf geladen.
Die Dokumente, die nicht synchronisiert sind, werden durch die hellere Farbe
erkennbar in der Liste. Diese Einträge werden nur beim Öffnen heruntergeladen.

Auf dem Register Zugriff (vgl. unten) können Sie eine
Mappentyp-Konfiguration auf bestimmte Benutzergruppen einschränken. Bei
komplexen Mappen mit unterschiedlichen Zielgruppen können Sie auf diesem
Weg unterschiedliche Konfiguration bereitstellen und die benötigten
Dokumente optimal einstellen.

Diese Einstellung *Hochladen aktivieren*erlaubt das Hochladen von Dateien
vom mobilen Endgerät aus über die Funktion in myFavorites. In diesem
Zusammenhang muss vorab ein Dokumentenregister angegeben werden, in
welches die Dateien abgelegt werden.

Ist die Option aktiviert, so steht in der App an Mappen dieses Typs eine
Aktion „Hochladen“ zur Verfügung. Hier legen Sie zunächst die
Datenquelle fest.

In Abhängigkeit der gewählten Quelle stehen in einem weiteren Schritt
verschiedene Werkzeuge bereit: So lassen sich aufgenommene Fotos vor dem
Hochladen in PDF-Dokumente wandeln. Gescannte Dokumente und Medien aus
der Galerie können bspw. bearbeitet und zugeschnitten werden. Weitere Informationen
hierzu finden Sie im Kapitel "Upload".


![Datenquelle beim Hochladen von Medien](media/file-config-upload.png)

Abb. 33 - Datenquelle beim Hochladen von Medien


## Referenzfelder und Verknüpfungsregister

Im Standardverhalten werden Referenzfelder in myFavorites angezeigt,
allerdings ohne dass die Daten „hinter“ der Verknüpfung synchronisiert
werden. Sie können also nicht wie in der Web-Anwendung auf alle
Feldinhalte von referenzierten Mappe zugreifen, während Sie offline mit
myFavorites arbeiten. Ein solches „Auflösen“ von Verbindungen können Sie
in der Konfiguration für jedes Referenzfeld sowie auch für
Verknüpfungsregister über Listen bestimmen. Bei
Verknüpfungsregistern können Sie zusätzlich eine feste Anzahl an
verknüpften Mappen als Limit für die Synchronisierung festlegen.

Die Funktion *Online-Nachladen erlauben* bietet die Möglichkeit die
Verknüpfungsmappen, die nicht standarmässig synchronisiert wurden
(laut Limitierungen), nachher geladen.

Beachten Sie bei der Verwendung dieser Funktion bitte, dass sich dadurch
das verbrauchte Datenvolumen erheblich steigern kann!

Jede verbundene Mappe kann ihrerseits eigene Dokumente oder weitere
aufgelöste Verknüpfungen nach sich ziehen, wenn es für diese Vorgänge
ebenfalls Mappentyp-Definitionen gibt. Im ungünstigsten Fall kann eine
Sammlung von Konfigurationen am Ende dazu führen, dass quasi der
vollständige Datenbestand der Web-Anwendung synchronisiert wird. Dies
hat nicht nur erhebliche Konsequenzen auf das Datenvolumen, sondern auch
auf den Speicherbedarf der lokalen Endgeräte.


![Referenzfelder und Verknüpfungen](media/file-config-ref.png)

Abb. 34 - Referenzfelder und Verknüpfungen

Beachten Sie bitte, dass die Listen zur Auswahl von *Referenzfeldern*
und von *Verknüpfungen* erst nach dem ersten Speichern der
Konfigurationsmappe zur Verfügung stehen.


## Aktionen

Die Aktionen, die in der myFavorites-App auf Mappen dieses Typs möglich
sein sollen, lassen sich ebenfalls festlegen.


![Aktionen am Mappentyp](media/file-config-actions.png)

Abb. 35 - Aktionen am Mappentyp


### Kommentare aktivieren

Wird diese Option aktiviert, werden die Kommentare an den Mappen dieses
Typs auch in der myFavorites-App angezeigt. In der App können keine
Kommentare angelegt werden. Dies ist ausschließlich über die
Web-Anwendung möglich. Die Verwendung der Option setzt voraus, dass
bereits in der Documents-Anwendung auf diesem Mappentyp die Eigenschaft
„otrCommentField“ ordnungsgemäß verwendet wird.


### Workflow aktivieren

Schaltet die mobile Workflow-Funktionalität für alle Mappen dieses Typs
ein. Diese beinhaltet die Reaktion auf Ad-Hoc-Versendungen und
Workflows. Eine Ausnahme stellen lediglich Aktionen mit Passwortabfrage
dar. Auf diese kann aktuell über ein mobiles Endgerät nicht reagiert
werden. Deaktivieren Sie die mobile Workflow-Funktionalität, so sind
keine Aufgabe an Mappen ersichtlich und es können auch keine
Funktionsknöpfe genutzt werden. Beachten Sie bitte, dass von einem
mobilen Endgerät aus keine Versendung gestartet werden kann. Zudem ist
bei Ad-Hoc-Versendungen nur das geplante Weiterleiten an den nächsten
vordefinierten Empfänger möglich. Aktivieren heißt nicht, dass man eine
Versendung starten kann.


### Gelesen aktivieren

Die Aktion wird erreichbar an der Mappe, wenn diese Option aktiviert.


### Offline verfügbar

Für jede Aktion kann die offline Verfügbarkeit konfiguriert werden.
Wenn diese Option für eine Aktion aktiviert ist, die kann auch ohne
Internetverbindung ausgeführt werden. Um diese Functionalität zu
nutzen, ist das Einschalten der Option *Offline Aktionen erlauben* im
Bereich App-Konfiguration auch erforderlich.


### Aktivierte Script-Aktionen

Individuelle Script-Aktionen erlauben Aktionen, die auf das Fachkonzept
des jeweiligen Mandanten abgestimmt sind und sind somit immer
App-spezifisch. Die Einbindung erfolgt über einen Callback im
DOCUMENTS-Manager. Details zu Skript-Aktionen finden Sie in dem entsprechenden
Kapitel.


## Erweiterte Einstellungen

Die Darstellung einer Mappe in myFavorites kann mit Hilfe erweiterter
Einstellungen noch einmal umfassend verändert werden.

Der *Modus der Änderungserkennung* beinhaltet die bereits in dem Kapitel der
App-Konfiguration beschriebenen Methoden zur Auswahl.


### Benutzerdefinierte Felder

Zunächst können Sie auf inhaltlicher Ebene bis zu fünf
benutzerdefinierte Felder ergänzen, die exklusiv in der App angezeigt
werden. Diese können bspw. über verkettete Autotexte die
Feldinhalte einer Mappe kombinieren und zusammenfassen.


![Erweiterte Konfiguration eines App-Mappentypen](media/file-config-erweitert.png)

Abb. 36 - Erweiterte Konfiguration eines App-Mappentypen

Gehen Sie hierzu in zwei Schritten vor: Zunächst definieren Sie für ein
*benutzerdefiniertes Feld*, welche Inhalte und Autotexte dieses anzeigen
soll. Danach wechseln Sie in der Mappentyp-Konfiguration zurück auf das
Register „*App-Mappentyp*“ und bestimmen die Position für die
benutzerdefinierten *Felder* im entsprechenden Bereich.


![Benutzerdefiniertes Feld zur Anzeige auswählen](media/file-config-fields.png)

Abb. 31 - Feldauswahl an einer Mappentyp-Konfiguration


### Benutzerdefinierter HTML-Code

Neben eigenen Felder können Sie auch eigenen *HTML-Code* verwenden, um
Inhalte einer Mappe in myFavorites anzuzeigen.
Eingriffsmöglichkeiten bestehen hierbei für den Mappendeckel als auch
für Listeneinträge.

Setzen Sie eigenen Code für *Listeneinträge* ein, so wird hierdurch der
Code anstelle der standardmäßigen Liste angezeigt. Bei der Verwendung
von HTML-Code im Bereich *Mappendeckel* wird die ursprüngliche Anzeige
hingegen nicht verworfen, sondern der individuelle HTML-Bereich wird
oberhalb der Felder als Ergänzung aufgenommen.

Im Falle des Mappendeckels läst sich über eine Checkbox festlegen, ob
ein vollständiger HTML-Funktionsumfang aktiviert werden soll. Ist die
Checkbox nicht aktiviert, so werden alle gängigen Auszeichnungen aus
HTML unterstützt. Aktivieren Sie die Checkbox, erweitert sich der
Funktionumfang und Sie können Skripte, externe Inhalte bis hin
zu kompletten HMTL-Anwendungen auf dem Mappendeckel ausführen. Die Höhe
des HTML-Mappendeckels wird in einem weiteren Feld in der Einheit
„Pixel“ festgelegt.

Auf der Mappe lässt sich zudem eine HTML-Karte erzeugen. Diese wird
oberhalb des Mappendeckels und der Felder angezeigt und kann bspw.
wichtige Daten im oberen Bereich zusammenfassen oder ein Diagramm
anzeigen.

In diesem Zusammenhang zeigen die unten stehenden Abbildungen ein
einfaches Beispiel für benutzerdefinierten HTML-Code.


![Benutzerdefinierter HTML-Code an einer Mappentypconfiguration](media/file-config-html.png)

Abb. 37 - Benutzerdefinierter HTML-Code an einer Mappentypconfiguration


![HTML-Code in der App](media/file-config-html-app.png)

Abb. 38 - HTML-Code in der App


## Zugriff

Im Bereich *Zugriff* können die Benutzergruppen des Systems ausgewählt werden, für die diese Konfiguration bestimmt ist.

Legen Sie ggf. mehrere Konfigurationen an, in denen Sie die zu
synchronisierenden Dokumente für bestimmte Benutzergruppen optimieren.


![Zugriffsberechtigungen einer Mappentyp-Konfiguration](media/file-config-zugriff.png)

Abb. 39 - Zugriffsberechtigungen einer Mappentyp-Konfiguration