---
title: "App-Konfiguration"
source: "https://otris.software/documents/manuals/books/app-doc/app_config.html"
---

# App-Konfiguration

Starten Sie, indem Sie den Ordner „App-Konfiguration“ öffnen und dort
den Befehl „+Neu“ aufrufen.


![Neuanlage einer App-Konfiguration](media/app-config-create.png)

Abb. 13 - Neuanlage einer App-Konfiguration

Die erzeugte Konfigurations-Akte öffnet sich unmittelbar im rechten
Bereich der Anwendung.


![Akte einer App-Konfiguration](media/app-config.png)

Abb. 14 - Akte einer App-Konfiguration

Folgende Bereiche und Felder können auf der App-Konfiguration definiert
werden:

- Titel: Eingängige Kurzbeschreibung der Konfiguration. In Listenansichten werden Konfigurationen über diesen Titel identifiziert.
- Synchronisierung: Auswahl der Synchronisierungsmethode. Diese wird unten genauer erläutert.
- Rang: Der Rang bestimmt die Priorität einer Konfiguration. Sind zeitgleich mehrere aktive Konfigurationen vorhanden, sortiert myFavorites diese nach ihrer Rangnummer. Auf dem Register „Zugriff“ können Sie für jede Konfiguration bestimmen, von welchen Benutzergruppen diese verwendet werden kann. Der Benutzer kann in der App zwischen allen für ihn freigegebenen Konfiguration entscheiden, welche er verwendet. Zudem kann er aus seiner Sicht unnötige Konfigurationen in der App deaktivieren.
- Aktiv: Die Checkbox aktiv steuert, ob eine Konfiguration verwendet werden darf. Nicht aktive Konfigurationen werden von myFavorites nicht berücksichtigt.
- Design: Folgende Auswahlmöglichkeiten sind aktuell verfügbar:
contract - contract (Hellblau)
corporate - corporate (Grün)
compliance - compliance (Gold)
privacy - privacy (Rot)
documents - DOCUMENTS (Orange)
workforce - workforce (Magenta)
easyblue - EASY-blau (Hellblau)
default - myFavorites (Dunkelblau)
beliebige Hexfarbe
- Icon: Im Feld Icon können Sie den Namen eines „Ionic/Entypo/Material Design“-Icons eintragen, welches für diese Konfiguration verwendet werden soll. Siehe Icon HowTo.
- Invertiert: Kehrt die Farbgebung des Designs um.
- Globales Menü
Aktivierte Aktionen: Die Funktionalität der App kann dynamisch über Skriptfunktionen erweitert werden. Sie können hier aus vorhandenen Skript-Aktionen diejenigen auswählen, die für diese Konfiguration genutzt werden sollen. Die Funktionsweise von Skript-Aktionen wird weiter unten detailliert erläutert.
Schnellupload: Steuert die Darstellung des Schnelluploads - Menü Darstellung im Aktionsmenü oben rechts - Kachel Zusätliche Darstellung als Kachel auf dem Startbildschrim


### Design

Sie haben die Möglichkeit der App ein beliebiges Design zu geben, indem Sie in der App Konfiguration
einen Hexwert als Design angeben (z.B. #880000). Ist die gegebene Hexfarbe
nicht korrekt, wird das default Design der App angewendet (z.B. Hellblau - contract,
Dunkelblau - myFavorites).

| Standarddesign | Angepasstes Design |
| --- | --- |
| Abb. 15 - App Konfig Design #880000 | Abb. 16 - App Konfig Design #880000 |


## Synchronisierung

Es gibt drei verschiedene Synchronisierungsmethoden zwischen den
Inhalten auf dem Server und den Inhalten auf den mobilen Endgeräten:

- Keine Erkennung: Die Synchronisierung erfolgt stets identisch zur initialen Synchronisierung. Hierbei werden sämtliche Daten gemäß der Konfiguration vom Server zum mobilen Endgerät gesendet und die dort vorhandenen Daten überschrieben. Diese Methode verbraucht viel Datenvolumen.
- Hashbasiert: Auf dem Endgerät werden Hashwerte der vorhandenen Daten gebildet und zum Server gesendet. Beim Synchronisieren sendet der Server nur noch die Daten, deren Stand auf dem Endgerät nicht mehr aktuell ist.
- Datumsbasiert: Die Daten werden auf ihr Änderungsdatum hin untersucht und es werden nur die Daten erneut synchronisiert, deren Stand auf dem mobilen Endgerät nicht mit dem Bearbeitungsstand auf dem Server übereinstimmt.


## Voreinstellungen der Limits für die Synchronisation

Die zu synchronisierenden Daten können nach verschiedenen Kriterien
limitiert werden. Auf diesem Weg lässt sich der Datenbestand auf den
mobilen Endgeräten sinnvoll skalieren, so dass einerseits Dauer und
Datenvolumen der Synchronisation reduziert werden, während andererseits
die Speicher der Endgeräte nicht mit einer Vielzahl unnötiger Daten
belastet werden, welche für die Benutzer in myFavorites auch keinen
Mehrwert darstellen. Sinnvolle Limitierungen tragen also am Ende dazu
bei, die Inhalte der App zu optimieren.

Folgende Limitierungen sind konfigurierbar:

- Anzahl Mappen pro Ordner: Limitiert die Anzahl der synchronisierten Mappen eines Ordners auf einen festen Wert. Die Mappen werden gemäß der Standard-Sortierung des ausgewählten Ordners bis zum Erreichen des Limits bestimmt.
- Anzahl Mappen pro Verknüpfung: Limitiert die Anzahl der synchronisierten Mappen eines Verknüpfungsregisters auf einen festen Wert. Die Mappen werden gemäß der Standard-Sortierung des Registers bis zum Erreichen des Limits bestimmt.
- Anzahl Dokumente pro Mappe: Limitiert die Anzahl der synchronisierten Dateien eines Dokumentenregisters. Die Dateien werden gemäß der Standard-Sortierung des Registers bis zum Erreichen des Limits bestimmt.
- maximale Downloadgröße: Es werden nur Dateien synchronisiert, deren Dateigröße das angegebene Limit nicht übersteigen. Ist ein Dokument zu groß und es befinden sich weitere Dateien auf dem Dokumentenregister, so wird mit dem Ermitteln der zu synchronisierenden Dokumente bis zum Erreichen des Limits „Anzahl Dokumente pro Mappe“ fortgefahren.
- Erlaubte Dateitypen: Benennen Sie Dateitypen für die Synchronisation, indem Sie die erlaubten Dateiendungen auflisten - jeweils durch Leerzeichen voneinander getrennt. Die Benennung der Extensions erfolgt ohne Punkt, also bspw. „pdf docx txt“. Dateien mit anderen Endungen werden von der Synchronisation ausgeschlossen. Lassen Sie dieses Feld leer, um alle Dateitypen zu synchronisieren.
- Archiv Mappen Zeigen: Aktiviert die Darstellung von archivierte Mappen.


## Globale-Suche

Die App bietet die Möglichkeit auch die online Daten zu durchsuchen.
In diesem Bereich können Sie die globale Suche konfigurieren.

- Online Suche: Aktiviert oder deaktiviert die globale online Suche, es bestimmt außerdem wie diese erreichbar ist. Es gibt die folgende Auswahlmöglichkeiten:
Deaktiviert: Deaktiviert die globale Suche.
Kachel: Globale Suche wird als Kachel auf der Startseite erreichbar.
Suchleiste: Globale Suche wird mit Hilfe einer Suchleiste auf der Startseite benutzbar.
- Anzahl der Online-Suchtreffer: Steuert die maximale Anzahl der Treffer, die in einer globale Suche angezeigt werden.


## Aktionen

Hier haben Sie die Möglichkeit das Verhalten der Aktionen zu anpassen,
wenn Ihr mobiles Gerät kein Internetverbindung hat.

- Offline Aktionen erlauben: Aktiviert oder deaktiviert die Ausführung der Aktionen ohne Internetvebindung.
- Bestätigung durch Benutzer erforderlich: Steuert ob die Ausführung der Offline Aktion durch einer dialog in der App bestätigt werden soll (das Dialog wird vor dem Ausführung presentiert).


## Mehrere Konfigurationen

Es gibt die Möglichkeit mehrere Konfigurationen anzulegen. Alle für den
Nutzer sichtbaren Konfigurationen sind dann in der App verfügbar.
Hierbei fungiert jede Konfiguration als ein eigener, vollständig
getrennter, Bereich. Das heißt: Die Mappentyp- und Ordner-Konfiurationen
aus anderen App-Konfigurationen wirken sich nicht auf die Darstellung der
aktuellen Konfiguration aus.


![Mehrere Konfigurationen in der App](media/app-config-multiple-configs.png)

Abb. 17 - Mehrere Konfigurationen in der App

Um die sichtbaren Konfigurationen einzuschränken,
können diese mit Rechten versehen werden. Vgl. hierzu auch das Kapitel
"Zugriff".

Diese Funktion kann zum Beispiel dazu genutzt werden, verschiedene Sichten/Profile
für verschiedene Mitarbeitergruppen zu bieten.

Darüber hinaus hat jeder Anwender die Möglichkeit bestimmte Konfigurationen
in seiner App zu deaktivieren und somit Speicherplatz und, Daten und Zeit bei
der Synchronisierung zu sparen. Einstellbar ist dies über die Konto-Einstellungen
innerhalb der App.


![Deaktivierbare Konfigurationen in der App](media/app-config-deactivate.png)

Abb. 18 - Deaktivierbare Konfigurationen in der App


## Erweiterte Einstellungen

In diesem Bereich können Sie das Verhalten der Anwendung
genauer steuern, indem Sie Funktionen hinzufügen. Die tabellarische Form
erlaubt herstellerseitig eine flexible Bereitstellung neuer Funktionen
und projektspezifischer Lösungen, ohne hierbei die Oberfläche der
Anwendung anpassen zu müssen oder das Warten auf eine neue Version in
Kauf nehmen zu müssen.

Die hier definierten Funktionen wirken sich auf die aktuelle
App-Konfiguration aus. Es besteht also die Möglichkeit,


![Erweiterte Eigenschaften](media/app-config-erweiterbare-eigenschaften.png)

Abb. 19 - Erweiterte Eigenschaften

Aktuell sind folgende Funktionen einsetzbar:

- uploadColorEnhanced (Filter - Verbesserte Farben): Aktiviert oder deaktiviert den Filter für verbesserte Farben
- uploadGrayscale (Filter - Graustufen): Aktiviert oder deaktiviert den Graustufen-Filter
- uploadMagicColor (Filter - Magic Color): Aktiviert oder deaktiviert den Filter "Magic Color"
- uploadBinarized (Filter – Schwarzweiß): Aktiviert oder deaktiviert den Schwarzweiß-Filter
- uploadStandardFilter (Standardfilter): Legt den Standardfilter fest. Folgende Auswahlmöglichkeiten sind aktuell verfügbar:
colorEnhanced - Verbesserte Farben
grayscale - Graustufen
magicColor - Magic Color
binarized - Schwarzweiß
- uploadFiletype (Upload Dateityp überschreiben): Überschreibt den Dateityp für Uploads. Folgende Auswahlmöglichkeiten sind aktuell verfügbar:
pdf - PDF-Datei
jpg - JPG/JPEG-Datei
- autoInitialSync (Automatischer Sync beim Hinzufügen): Aktiviert die automatische Synchronisierung beim neuen Hinzufügen dieser Konfiguration. Diese Einstellung ist standardmäßig aktiviert.
- disableDataEncryption (Objektdatenverschlüsselung deaktivieren): Deaktiviert die Verschlüsselung von Mappen und Ordnern, beeinflusst jedoch nicht die Verschlüsselung von Dokumenten. Um sicherzustellen, dass die Einstellung tatsächlich wirksam ist müssen nach Ändern der Einstellung auf jedem Gerät die Daten gelöscht und neu synchronisiert werden. Dies geschieht nicht automatisch!
- oldDocumentLifetime (Online Dokumenten Lebensdauer): Steuert wie lange die nicht standardmäßig heruntergeladenen Dokumente auf dem Gerät verbleiben sollen. Mögliche Werte:
-1 – Dokumenten werden nicht entfernt.
0 oder nicht eingestellt – Bei der nächsten Synchronisierung werden die Dokumenten entfernt
> 0 – Anzahl der Tagen, nachdem bei einer Synchronisierung die Dokumenten entfernt werden
- oldSubfileLifetime (Online Verknüpfungsmappen Lebensdauer): Steuert wie lange die nicht standardmäßig heruntergeladenen Untermappen auf dem Gerät verbleiben sollen. Mögliche Werte sind die gleichen wie beim oldDocumentLifetime.
- inFileUploadMethod (Methode für den Upload in der Mappen): Steuert ob das Drop Gadget oder der normale Upload für den Upload in der Mappen genutzt wird. Folgende Auswahlmöglichkeiten sind verfügbar:
Normal
Gadget
- quickUploadMethod (Methode für den Upload in der Mappen): Steuert ob das Drop Gadget oder der normale Upload für den Schnellupload genutzt wird. Folgende Auswahlmöglichkeiten sind verfügbar:
Normal
Gadget
- quickUploadFiletype (Schnellupload Mappentyp): Definiert den Mappentyp der Mappe, zu welcher das hochgeladene Dokument gehört. (Schnellupload)
- quickUploadInverted (Schnellupload Kachel inverted): Steuert ob der "Schnellupload" - Kachel Stil invertiert sein soll.
- uploadTitle(Upload Titel): Definiert den Upload-Kachel und Menüintrag Titel.
- uploadIcon(Upload Icon): Definiert den Upload-Kachel und Menüintrag Icon.
- onlineSearchInverted (Online Suche Kachel inverted): Steuert ob der "Online Suche" - Kachel Stil invertiert sein soll.
- uploadCameraEnabled (Upload - Kamera aktivieren): Aktiviert oder deaktiviert die Kamera als Fotoquelle.
- uploadGalleryEnabled (Upload - Galerie aktivieren): Aktiviert oder deaktiviert die Galerie als Fotoquelle.
- uploadScanEnabled (Upload - Scan aktivieren): Aktiviert oder deaktiviert den Scan als Fotoquelle.
- uploadImportEnabled (Upload - Dokumentenimport aktivieren): Aktiviert Dokument importieren als Fotoquelle.
- showAllDocsEnabled (Dokumenten aufklappen aktivieren): Aktiviert die Anzeige aller Dokumente in einer Datei, ohne die Taste "Weitere" zu verwenden.
- timeoutLogin (Login timeout): Steuert timeout für Login Anfrage in ms.
- timeoutDocUpload (Timeout Hochladen): Steuert timeout für das Hochladen von Dokumenten in ms.
- timeoutDocDownload (Timeout Herunterladen): Steuert timeout für das Herunterladen von Dokumenten in ms.
- timeoutFilerequest (Timeout Mappen): Steuert timeout für das Herunterladen von Mappen (pro Mappe) in ms.
- timeoutFolderrequest (Timeout Ordner): Steuert timeout für das Herunterladen von Ordnern (pro Ordner) in ms.
- filesPerRequest (Mappen pro Anfrage): Steuert die Maximale Anzahl von Mappen in einer Anfrage.
- noDataVisible (Keine Daten vorhanden aktiviert): Steuert ob der Text "Keine Daten vorhanden" auf der Home Seite aktiviert ist.


## Zugriff

Im Bereich *Zugriff* können die Benutzergruppen des Systems ausgewählt werden, für die diese Konfiguration bestimmt ist. Legen Sie ggf. mehrere Konfigurationen an, in denen Sie die zu synchronisierenden Dokumente für bestimmte Benutzergruppen optimieren.


![Zugriffsberechtigungen einer Mappentyp-Konfiguration](media/zugriff.png)

Abb. 20 - Zugriffsberechtigungen einer Mappentyp-Konfiguration