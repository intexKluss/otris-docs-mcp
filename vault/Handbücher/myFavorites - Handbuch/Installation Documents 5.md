---
title: "Installation der Komponenten"
source: "https://otris.software/documents/manuals/books/app-doc/installation.html"
---

# Installation der Komponenten

**Hinweis:** Diese Anleitung ist für Documents 5 vorgesehen, während alle weiteren Handbücher außerhalb des Kapitels "*Documents 5*" auf DocumentsOS abgestimmt sind. Unterschiede in den Screenshots sind daher möglich.

Für die Verwendung von myFavorites ist die Installation folgender
Komponenten erforderlich:

Die App für **mobile Endgeräte** kann aus den Stores (Apple-Store bzw.
Google Play Store) bezogen werden. Sie finden die App über die Suche
nach „myFavorites“ und installieren diese nach der typischen
Vorgehensweise des Stores.

Eine **serverseitige Erweiterung** wird im bestehenden
Documents-Mandanten über den Documents-Manager eingerichtet. Wird
myFavorites mit der mobile-Lizenz betrieben, sind zusätzliche Schritte
erforderlich.

Sind beide Komponenten bereit, wird auf dem Endgerät nur noch die
Verbindung zum Documents-Server eingerichtet. Dies geschieht einfach
durch Scannen eines QR-Codes in der Documents-Webanwendung.


## Unterstützte Versionen

myFavorites erfordert mindestens den Einsatz folgender Versionen der
genannten Anwendungen:

- otris DOCUMENTS 5.0c
- Android 13.0
- iOS 13.0


## Einrichtung im Documents-Manager

**Hinweis:** Die hier genannten Schritte sind nicht erforderlich, wenn
Sie myFavorites mit der mobile-Lizenz verwenden und eine Konfiguration
einsetzen. In diesem Fall können Sie direkt mit Kapitel Einrichtung der optionalen Konfiguration fortfahren.


### Datensicherung durchführen

**Hinweis:** Führen Sie **in jedem Fall** eine
Datensicherung des Mandanten durch, bevor Sie mit der Einrichtung der
App-Konfiguration beginnen.

Melden Sie sich hierzu **unter Angabe des Mandanten** am DOCUMENTS-Manager
an und rufen Sie den Eintrag „*Datensicherung durchführen…*“ aus dem Menü
„*Administration*“ auf. Folgen Sie den Schritten des Dialogs
und legen Sie nach Abschluss der Datensicherung die Sicherungsdateien an einem
geeigneten Ort ab.


![Datensicherung durchführen](media/d5-datensicherung.png)

Abb. 79 - Datensicherung durchführen


### Einstellungen

Öffnen Sie aus dem Menü „*Documents*“ den Eintrag „*Einstellungen*“.
Wechseln Sie hier bitte auf das Register „*Eigenschaften*“.

Ergänzen Sie an dieser Stelle folgende Eigenschaften:

- appGatewayEnabled | 1 : Diese Eigenschaft aktiviert die Verwendung der App und ist daher zwingend erforderlich
- additionalSettingsScript | appAdditionalSettings: Diese Eigenschaft legt im Benutzermenü einen Eintrag für den Dialog an, über den Benutzer den QR-Code scannen können.


![Documents-Eigenschaften für die App](media/d5-appGatewayEnabled.png)

Abb. 80 - Documents-Eigenschaften für die App


## Einrichtung der optionalen Konfiguration (nur bei mobile-Lizenz)

Wie eingangs dieses Kapitels erwähnt, sind für die Einrichtung der
Konfigurationsmöglichkeit weitere Schritte erforderlich. Hierdurch
erzeugen Sie verschiedene Mappentypen und Ordner, mit denen die
Konfiguration des Mandanten möglich wird. Die eigentliche Konfiguration
ist somit also vorbereitet und kann individuell erfolgen. Wie Sie dies
erledigen, wird in den verschiedenen Kapiteln zur Konfiguration beschrieben.

Für die Einrichtung der Konfigurationsmöglichkeit importieren Sie
zunächst die bereitgestellte XML-Datei.


![XML-Import](media/d5-xml-import.png)

Abb. 81 - XML-Import

Nach dem erfolgreichen Import führen Sie bitte das nun enthaltene Skript
„appCall_UPGRADE“ aus. Anschließend sind Skripte, Mappentypen und ein
Ordner für die App-Konfiguration angelegt. Allen Objekten ist das Präfix
„app“ vorangestellt. Auch die Documents-Eigenschaften werden durch das
Script gesetzt.

Der Ordner (*appMainConfigFolder*) sowie die drei Mappentypen
(*appMainConfig*, *appFileConfig* und *appListConfig*) sind zunächst
ohne Berechtigung angelegt und sollten nachträglich für einen
administrativen Zugang berechtigt werden, um ungeplante Änderungen durch
beliebige Benutzer zu unterbinden. Legen Sie hierzu entweder eine eigene
Gruppe an (bspw. *AppAdmin*) oder verwenden Sie bereits vorhandene
Gruppen. Sollten der Mandant bereits über eine Ordnerstruktur
„Administration“ verfügen, wie es bspw. in otris contract der Fall ist,
so sollten Sie dem Konfigurationsorder der App den Ordner
„Administration“ als Oberordner zuweisen.


![Einordnung der App-Konfiguration in einen vorhandenen Administrationsbereich](media/d5-appconifg-admin.png)

Abb. 82 - Einordnung der App-Konfiguration in einen vorhandenen Administrationsbereich

Überprüfen Sie abschließend, dass der Job-Benutzer in den
„*DOCUMENTS-Einstellungen*“ auf dem Register „*Documents (Basis)*“ auf
einen gültigen Redakteur eingestellt ist.


![Redakteur als Job-Benutzer einrichten](media/d5-job-user.png)

Abb. 83 - Redakteur als Job-Benutzer einrichten


## Installation auf dem Mobilen Endgerät

Öffnen Sie den Store des eingesetzten mobilen Endgeräts und suchen Sie
nach „*myFavorites*“. Laden Sie die App herunter und
folgen Sie den Anweisungen.


## Verbindung einrichten

Sind sowohl die serverseitige Konfiguration als auch die App auf dem
mobilen Endgerät eigerichtet, muss lediglich noch eine Verbindung
zwischen beiden Komponenten etabliert werden.

Öffnen Sie hierzu zunächst die Benutzereinstellungen, indem Sie unten
rechts in der Anwendung auf Ihren Namen klicken. Wählen Sie dann im Menü
den Eintrag „*App QR Login*“ aus.


![Benutzermenü mit Verbindung zur App](media/d5-app-connection.png)

Abb. 84 - Benutzermenü mit Verbindung zur App

Daraufhin öffnet sich der unten gezeigte Dialog. Starten Sie nun die
myFavorites-App auf Ihrem mobilen Endgerät und rufen Sie dort im Bereich
„*Quickstart*“ den Eintrag „*App QR-Code scannen*“ auf.


![Verbindung zur App mit QR-Code](media/d5-app-connection-qr.png)

Abb. 85 - Verbindung zur App mit QR-Code

Nach erfolgreicher Erfassung öffnet sich in der App eine Seite „Konto“.
Hier sind bereits die Adresse zum Server (URL), der Name des Mandanten
sowie Ihr Benutzername (Login) vorausgefüllt. Ergänzen Sie diese Angaben
nur noch um Ihr Passwort, das Sie auch für den üblichen Zugang zur
Web-Anwendung verwenden. Optional können Sie dies in der myFavorites-App
speichern lassen. Speichern Sie abschließend die Eingaben auf Ihrem
mobilen Endgerät.

Die Einrichtung ist nun abgeschlossen und das System kann verwendet
werden.


## Wichtige Hinweise

Die App beginnt nach erfolgreicher Anmeldung automatisch mit der
Synchronisation der Inhalte auf das mobile Endgerät.

Beachten Sie bitte, dass **bei Verwendung einer Konfiguration**
insbesondere bei großen Datenmengen die erste Synchronisation längere
Zeit in Anspruch nehmen kann und hierdurch auch der Speicher des mobilen
Endgeräts belastet wird. **Alle Daten und Dokumente** werden für den
Offline-Zugriff auf dem mobilen Gerät gespeichert.