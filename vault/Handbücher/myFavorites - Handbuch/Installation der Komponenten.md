---
title: "Installation der Komponenten"
source: "https://otris.software/documents/manuals/books/app-doc/installation_os.html"
---

# Installation der Komponenten

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

- otris documentsOS
- Android 13.0
- iOS 13.0


## Einrichtung im Admin Center


### Aktivierung

Die App kann über das AdminCenter unter `Erweiterungen` aktiviert werden.

| Aktivieren | Deaktivieren |
| --- | --- |
| Abb. 1 - Aktivierung im AdminCenter | Abb. 2 - Deaktivierung im AdminCenter |

Danach taucht der Ordner `App-Konfiguration` im AdminCenter auf. Hier kann die App indiviudell konfiguriert werden.


![Aktivierung im AdminCenter](media/adminCenter-App-config.png?class=large)

Abb. 3 - Erweiterungen im AdminCenter


### Einstellungen (optional)

Öffnen Sie aus dem Menü „*Administration*“ den Eintrag „*Einstellungen*“ und wählen sie die „*Globale Eigenschaften*“ aus.

Ergänzen Sie an dieser Stelle folgende Eigenschaften:

- additionalSettingsScript | appAdditionalSettings: Diese Eigenschaft legt im Benutzermenü einen Eintrag für den Dialog an, über den die Benutzer den QR-Code scannen können.
- appGatewayEnabled | 1 : Diese Eigenschaft aktiviert die Verwendung der App. Sie wird automatisch beim (De-)aktivieren der App über das AdminCenter gesetzt und soll unverändert bleiben.


![Documents-Eigenschaften für die App](media/properties.png)

Abb. 4 - Documents-Eigenschaften für die App


## Installation auf dem mobilen Endgerät

Öffnen Sie den Store des eingesetzten mobilen Endgeräts und suchen Sie
nach „*myFavorites*“. Laden Sie die App herunter und
folgen Sie den Anweisungen.
Entsprechende Links zur App im Google Play Store oder im Apple App Store sind auch im "App Login" Dialog aufgeführt, siehe Abbildung unten.


## Verbindung einrichten

Sind sowohl die serverseitige Konfiguration, als auch die App auf dem
mobilen Endgerät eigerichtet, muss lediglich noch eine Verbindung
zwischen beiden Komponenten etabliert werden.

Öffnen Sie hierzu zunächst die Benutzereinstellungen, indem Sie unten
rechts in der Anwendung auf Ihren Namen klicken. Wählen Sie dann im Menü
den Eintrag „*Apps und Dienste*“ aus. Es gibt außerdem eine "*App verbinden*" Kachel, die dem Benutzerdashboard hinzugefügt werden kann.


![Apps und Dienste Verbindung zur App](media/os_user_settings.png?class=small)

Abb. 5 - Apps und Dienste Verbindung zur App

Daraufhin öffnet sich der unten gezeigte Dialog und die App kann verbunden werden. myFavorites-App auf Ihrem mobilen Endgerät und rufen Sie dort im Bereich
„*Quickstart*“ den Eintrag „*App QR-Code scannen*“ auf.


![Apps und Dienste](media/os_apps_und_services.png?class=medium)

Abb. 6 - Apps und Dienste


![Verbindung zur App mit QR-Code](media/os_connect.png)

Abb. 7 - Verbindung zur App mit QR-Code

Nach erfolgreicher Erfassung öffnet sich in der App eine Seite „Konto“.
Hier sind bereits die Adresse zum Server (URL), der Name des Mandanten
sowie Ihr Benutzername (Login) vorausgefüllt. Optional können Sie dies in der myFavorites-App speichern lassen. Speichern Sie abschließend die Eingaben auf Ihrem mobilen Endgerät.

Die Einrichtung ist nun abgeschlossen und das System kann verwendet
werden.


## Wichtige Hinweise

Die App beginnt nach erfolgreicher Anmeldung automatisch mit der
Synchronisation der Inhalte auf das mobile Endgerät.

Beachten Sie bitte, dass **bei Verwendung einer Konfiguration**
insbesondere bei großen Datenmengen die erste Synchronisation längere
Zeit in Anspruch nehmen kann und hierdurch auch der Speicher des mobilen
Endgeräts belastet wird. **Alle Daten und Dokumente** werden, sofern nicht anders konfiguriert, für den
Offline-Zugriff auf dem mobilen Gerät gespeichert.