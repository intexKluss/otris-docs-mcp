---
title: "Documents-Factory mit Microsoft 365 (Office365) und OAUTH-Proxy"
source: "https://otris.software/documents/howto/email/docfactory-o365-oauth-proxy.html"
---

# Documents-Factory mit Microsoft 365 (Office365) und OAUTH-Proxy

Microsoft stellt seit dem 01.10.2022 nach und nach die Standardauthentifizierung für Microsoft 365 (M365) Mandanten ab und lässt nur noch eine Multifaktorauthentifizierung (MFA) zu.
Die Mail-Jobs der DocumentsFactory (DocFactory) greifen per IMAP auf die M365 E-Mailfächer zu. Mit dem Umstellung auf von M365 auf MFA muss jetzt die Anmeldung per OAuth2 erfolgen.

Derzeit unterstützt die DocFactory OAuth2 leider nicht. Die in der DocFactory verwendete E-Mail Library ist ein zugekauftes Produkt und wird leider nicht mehr weiter entwickelt. Daher muss die DocFactory auf eine neue E-Mail Library umgestellt werden, was noch einige Zeit in Anspruch nimmt.

Als Workaround für die Zwischenzeit empfehlen wir einen OAuth-Proxy dazwischen zu schalten. Im folgenden wird dies am Bespiel von davmail ([https://davmail.sourceforge.net](https://davmail.sourceforge.net)) dargestellt.


## Voaussetzungen (WICHTIG)

- die aktuelleste DocFactory-Version (>= 3.1.6.0 dort sind Anpassungen für davmail gemacht worden)
- eine modifizierte davmail Version von otris (diese enthält Anpassungen für die DocFactory)


## Installation der DocFactory

- DocFactory wie gewohnt installieren


## Funtionsweise von davmail

- davmail ist ein Proxy zwischen DocFactory und M365
- davmail läuft lokal auf dem Rechner, auf dem auch die DocFactory läuft
- die DocFactory meldet sich lokal (localhost:143) mit Standardauthentifizierung bei davmail an und davmail meldet sich per OAuth2 bei M365 an. Alle Anfragen werden dann über davmail an M365 weitergeleitet


## Installation und Konfiguration von davmail

Die Installation bitte exakt wie in der folgenden Schritt für Schritt Anleitung beschrieben durchführen.

- davmail-6.0.1-3390-windows-standalone_mod_otris.zip nach c:\davmail entpacken
- Alle weiteren Schritte müssen von der Kommandozeile geschehen, da dem Prgramm davmail64.exe immer die Konfigurationsdatei als Parameter übergeben werden muss

In einem ersten Schritt muss davmail konfiguriert werden und der/die OAuth-Refresh-Token abgerufen werden. Dafür wird davmail als Konsolenprogramm gestartet:


Abb. 1 - davmail64.exe als Konsole

Wichtig ist die Angabe der lokalem Konfigurationsdatei `davmail.properties`, da dort automatisch die Konfiguration gespeichert wird und später auch der davmail-Service (`davmailservice64.exe`) seine Konfiguration liest.

Über das Tray-Icon


Abb. 2 - davmail64.exe Tray

kann dann der Konfiguration-Dialog gestartet werden:


Abb. 3 - davmail64.exe Tray

Das Exchange Protocol auf `O365Interactive` stellen. Das Abrufen eines OAuth-Aktualisierungstoken geschieht am einfachsten über einen Browser. In der Konfiguration ist der Caldav-Port 1080 aktiviert.

Melden Sie sich mit der URL `http://localhost:1080` im Browser an und geben das Benutzerkonto an, welches später die DocFactory abrufen soll:


Abb. 4 - davmail_login_browser

daraufhin öffnet davmail ein separates Fenster zur Anmeldung an M365


Abb. 5 - davmail_login_m365

Nach erfolgreicher Anmeldung stellen Sie bitte im Konfigurations-Daialog von davmal die Option Exchange Protocol auf `O365Modern` um,


Abb. 6 - davmail64.exe Tray

 speichern den Dialog und beenden die Konsolenanwendung  `davmail64.exe`.

Öffnen Sie nun die Datei  `c:\davmail\davmail.properties` und prüfen Sie ob der Refreshtoken eingetragen wurde.


Abb. 7 - davmail_refreshtoken

Die Konfiguration von davmail ist damit abgeschlossen. Nun kann der davmail-Service registriert werden. Dafür öffnen Sie eine neue Konsole mit ADMINISTRATOR-Rechten und regstrieren der Service:


Abb. 8 - davmail_register_service

Danach finden Sie den Service in den Diensten unter dem Namen `DavMail Gateway`


## Konfiguration der DocFactory

In der DocFactory wird nun als Mailserver `localhost` und Port `143` angegben, wo davmail nun die Anfragen entgegen nimmt.


Abb. 9 - davmail_docfactory_config

Nun sollte alles funktionieren.