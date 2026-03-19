---
title: "MOXIS Anbindung"
source: "https://otris.software/documents/manuals/books/otrsign/moxis.html"
---

# MOXIS Anbindung


## Voraussetzungen

- Mindestens documentsOS 6.1.0 (#2530)
- Eines der folgenden MOXIS Produkte:
MOXIS Now oder BusinessCloud mit API
MOXIS Enterprise Cloud
MOXIS Enterprise on Premise
- Die MOXIS Instanz muss durch den Documents Server erreichbar sein.


## Allgemeines

MOXIS unterstützt auch die fortgeschrittene elektronische Signatur. Diese wird automatisch verwendet, wenn bei einem externen Empfänger eine Telefonnumer angegeben wird.


## Vorbereitung in MOXIS

Für die Kommunikation mit der Schnittstelle, muss in MOXIS ein "Webservice Benutzer" angelegt werden.

Um diesen zu konfigurieren, muss der Administrationsuser verwendet werden. Dieser kann über das Menü unter `Administration` > `MOXIS Einstellungen` den Reiter `Webservice Benutzer` wählen.


![MOXIS-Webuser-Settings](images/moxis-webservice-user-settings.png)

Abb. 15 - MOXIS Webuser Einstellungen

Der Webservice Benutzer kann dann über den Button `Neuen Benutzer anlegen` angelegt werden.

In dem sich öffnenden Dialogfenster muss ein Benutzername und ein Passwort vergeben werden. Diese Anmeldedaten werden für die weitere Konfiguration in Documents benötigt.

Außerdem müssen über die entsprechenden Checkboxen die folgenden Rollen vergeben werden:

- system
- layer2
- userService


![MOXIS-Webuser-Edit](images/moxis-webservice-user-edit.png)

Abb. 16 - MOXIS Webuser anlegen

Optional: In MOXIS kann ein separater Prozess angelegt werden, welcher dann standardmäßig von der Schnittstelle verwendet wird. Hierzu muss bei der Einrichtung in Documents nur die dazugehörige `Process ID` hinterlegt werden.


## Einrichtung in Documents

Für die Anbindung der Schnittstelle muss in Documents eine neue Applikation über den Menüpunkt "Apps und Dienste" (vormals "Externe Anbieter") angelegt werden (siehe [Registrieren von Applikationen](install-configure-d6.html#externe-anbieter)). Dabei müssen zwei Informationen konfiguriert werden:

- Hostname: Der Hostname des Systems, auf dem die MOXIS Instanz verfügbar ist. Es muss dabei kein Protokoll (https) oder Pfad (webservices/rest/api/layer2/v1.0) angegeben werden. Der Eintrag könnte zum Beispiel wie folgt aussehen: rest-test.moxis.cloud
- Process ID: Wenn durch die Schnittstelle ein spezieller Prozess in MOXIS verwendet werden soll, muss dieser hier angegeben werden. Ansonsten kann der Standard-Eintrag moxisDefault belassen werden.

Nach Registrierung der neuen Applikation muss der MOXIS Webservice Benutzer verbunden werden. Alle Signaturadministratoren sehen dazu im Benutzermenü unter "Apps und Dienste" nun die zuvor angelegte MOXIS Applikation.

**Hinweis:** Die Applikation ist mit dem Badge "Global" versehen. Dies bedeutet, dass der hiermit verbundene MOXIS Benutzer durch alle Anwender des Systems zur Anforderung von Signaturen genutzt werden kann, sofern dies nicht anders konfiguriert wurde. Ob ein Documents Anwender bei MOXIS eine Signatur anfordern kann wird anhand der am Benutzer hinterlegten E-Mail-Adresse geprüft. Ist die E-Mail-Adresse auch mit einem Benutzer bei MOXIS assoziiert, darf dieser Benutzer die Signaturschnittstelle verwenden.

Mit einem Klick auf die MOXIS Kachel in "Apps und Dienste" öffnet sich ein Dialogfenster, in welchem die Anmeldedaten des MOXIS Webservice Benutzers einzutragen sind. An dieser Stelle können nicht die Anmeldedaten eines normalen MOXIS Benutzers verwendet werden, es muss ein Webservice Benutzer mit den entsprechenden Rollen (system, layer2, userService) sein.