---
title: "DocuSign Anbindung"
source: "https://otris.software/documents/manuals/books/otrsign/docusign.html"
---

# DocuSign Anbindung


## Konfiguration einer Applikation

Eine DocuSign Applikation kann selbst auf der Seite von DocuSign registriert und eingerichtet werden. Hierbei unterscheidet DocuSign zwischen einer Test- und einer Liveumgebung. Diese können an der URL unterschieden werden:

- Testumgebung: appdemo.docusign.com
- Liveumgebung: app.docusign.com

Jede Applikation muss zuerst auf der Testumgebung eingerichtet werden und kann erst dann Live geschaltet werden. Die Anlage einer Testumgebung kann selbst vorgenommen werden. Die Liveumgebung muss durch DocuSign bereitgestellt werden. In diesem Abschnitt wird beschrieben wie die Testumgebung erstellt und eingerichtet wird.


### Anlage einer DocuSign Testumgebung (Sandbox)

**Hinweis:** Bei einer standardmäßig angelegten Sandbox können keine Signaturzertifikate verwendet werden (fortgeschrittene Signatur, qualifizierte Signatur). Sollte dies auch in der Testumgebung erforderlich sein, muss DocuSign kontaktiert werden.

Es muss ein Developer-Konto angelegt werden über [go.docusign.com/sandbox/productshot](https://go.docusign.com/sandbox/productshot/).

Durch die Registrierung als Developer wird standardmäßig ein eigener Tenant angelegt. Ein Benutzer kann sich in mehreren Tenants befinden und zwischen diesen wechseln. Sollen weitere Benutzer in dem gleichen Tenant arbeiten, so muss kein neues Developer-Konto angelegt werden. Vielmehr können dem Tenant über die Administration weitere Benutzer hinzugefügt werden.

Nach der Registrierung kann der Tenant verwaltet bzw. administriert werden. Hierzu über [appdemo.docusign.com](https://account-d.docusign.com/) anmelden und den Menüpunkt "Einstellungen" wählen.


![DocuSign eSignature Einstellungen](images/docusign-goto-settings.png)

Abb. 7 - DocuSign eSignature Menüpunkt Einstellungen

Es öffnet sich die Administration. In dieser unbedingt sicherstellen, dass der korrekte Tenant selektiert ist. Der aktuell gewählte Tenant ist oben links zu sehen.


![DocuSign Tenant Anzeige](images/docusign-tentant-view.png)

Abb. 8 - DocuSign Tenant Anzeige

Über den Button "Wechseln zu" kann zu einem anderen Tenant gewechselt werden.

Zur Autorisierung von externen Anwendungen verwendet DocuSign das Standardverfahren [OAuth2](https://oauth.net/2/). Damit Documents die Schnittstelle von DocuSign verwenden kann, muss diese bekannt gemacht werden. Hierzu sind einige Konfigurationen - sowohl in DocuSign als auch in Documents - zu treffen. Diese werden in den Folgenden Schritten detailiert erklärt.

1. In der DocuSign Administration unter der Kategorie "Integrationen" den Menüeintrag "Apps und Schlüssel" auswählen.
2. Unter dem Punkt "Meine Kontoinformationen" ist ein Wert für "API-Konto-ID" zu sehen. Diesen Wert notieren, da dieser für die Konfiguration in Documents benötigt wird.
Abb. 9 - API-Konto-ID
3. Über die Schaltfläche "App und Integrationsschlüssel hinzufügen" eine neue Applikation anlegen. Es muss ein Name für die Applikation festgelegt werden. Hier empfiehlt es sich den Mandantennamen aus Documents zu wählen. Applikationen sind auch Tenant übergreifend verfügbar. Ein eindeutiger Name hilft bei der späteren Identifizierung. [❶]
4. Den Integrationsschlüssel notieren. Dieser wird später benötigt. [❷]
5. Die Authentifizierung muss auf "Autorisierungscode zulassen" eingestellt sein (Standardeinstellung). [❸]
6. Über die Schaltfläche "Geheimen Schlüssel hinzufügen" einen neuen "Secret Key" anlegen und notieren. Der Geheime Schlüssel ist nach dem Speichern nicht mehr komplett sichtbar. [❹]
7. Unter dem Abschnitt "Zusätzliche Einstellungen" über die Schaltfläche "URI hinzufügen" eine neue Umleitungs-URI hinzufügen. Die URI muss das Folgende Format aufweisen:
https://<Serveradresse>/documents/srv/GenericRedirectReceiver/service/DocuSign-DEV
Hierbei ist zu beachten, dass die Serveradresse der Adresse entspricht, über welche die Clients den Server erreichen (die Adresse „localhost“ würde zwar lokal auf dem Server funktionieren, nicht aber bei den Clients). Bei Linux-Installationen für Version Documents 5 muss im Pfad "documents5" angegeben werden, bei Windows-Installationen (Documents 5) und Installationen mit Version documentsOS (Windows und Linux) muss im Pfad "documents" angegeben werden. [❺]
8. Über die Schaltfläche "Speichern" die Applikation anlegen. [❻]

**Hinweis:** Werden auf der Seite Änderungen gespeichert, kann es unter Umständen einen Moment (ca. 2 Minuten) dauern, bis Änderungen wie Umleitungs URI oder Secret Key bei der Konfiguration der Documents-Anbindung verwendet werden können.


![Applikation erstellen](images/docusign-app-create.png)

Abb. 10 - DocuSign Applikation erstellen (einige Informationen wurde zur Übersichtlichkeit entfernt)


### Verknüpfen einer DocuSign Applikation mit Documents

Zuerst muss über den Menüpunkt "Apps und Dienste" (vormals "Externe Anbieter") eine neue Applikation angelegt werden (siehe [Registrieren von Applikationen](install-configure-d6.html#externe-anbieter)). Dabei sind mehrere Optionen zu konfigurieren. Teilweise müssen die aus dem vorherigen Schritt (Anlage einer DocuSign Testumgebung) notierten Informationen verwendet werden.

- Client ID: Entspricht dem notierten "Integrationsschlüssel".
- Client Secret: Entspricht dem notierten "Geheimen Schlüssel".
- Application ID: Entspricht der notierten "API-Konto-ID".
- Technical User: Der Loginname des Documents-Benutzers, welcher später mit dem technischen Benutzer auf Seiten von DocuSign verbunden wird. Dies sollte in Documents am Besten auch ein technischer Benutzer sein (z.B. der Redakteur, mit welchem die Applikation gerade angelegt wird).
- Verification method: Diese Einstellung wird relevant, sobald die Signaturart "Fortgeschritten" verwendet wird. Hier kann eingestellt werden, welchen zweiten Faktor ein Unterzeichner verwenden muss. Es können drei Optionen gewählt werden:
none: Nur wenn keine Fortgeschrittene Signatur verwendet wird.
one-time password: Documents generiert beim Versenden eines Dokumentes an DocuSign ein Einmal-Passwort. Der Unterzeichner muss dieses Passwort vor dem Unterzeichnen eingeben. Dazu muss der Signaturanfragende über einen sicheren Kanal das Passwort an den Unterzeichner weiterleiten.
SMS: Bei Definition der Unterzeichner muss zusätzlich eine Telefonnummer angegeben werden. Möchte der Unterzeichner das Dokument bei DocuSign signieren, wird ein SMS Tan an diese Telefonnummer verschickt.
- Font: Die Schriftart, mit welcher Felder (z.B. Ort oder Datum) bei DocuSign befüllt werden.
- Font Size: Die Schriftgröße, mit welcher Felder (z.B. Ort oder Datum) bei DocuSign befüllt werden.
- Electronic signatures: DocuSign bietet bei der einfachen Signatur mehrere Zertifikate an, welche verwendet werden können. In der Live-Umgebung kann dies direkt mit DocuSign abgestimmt werden. In der Testumgebung sind Standardmäßig keine Zertifikate aktiviert. Hier sollte der Eintrag "none" gewählt werden.
- AES digital signatures: Zertifikate für die Signaturart "Fortgeschritten". In der Testumgebung ist die Fortgeschrittene Signatur nicht aktiviert, daher "deactivate" wählen.
- QES digital signatures: Zertifikate für die Signaturart "Qualifiziert". In der Testumgebung ist die Qualifizierte Signatur nicht aktiviert, daher "deactivate" wählen.


### Verknüpfen von DocuSign Benutzern mit Documents

Alle Benutzer, welche aus Documents heraus Signaturanforderungen über DocuSign verschicken möchten, müssen über den Menüpunkt "Apps und Dienste" (vormals "Externe Anbieter") ihr DocuSign-Konto verbinden (siehe [Verbinden von Benutzerkonten](install-configure-d6.html#verbinden-von-benutzerkonten)).

Neben den normalen Benutzern muss auch ein technisches Benutzerkonto verbunden werden. Da über dieses Konto alle Statusänderungen abgefragt und das final signierte Dokument heruntergeladen wird, muss das Konto bei DocuSign Zugriff auf alle Gruppen erhalten (also Zugang zu allen Signaturanfragen/Umschlägen haben). Anschließend ist dieses Konto mit dem Documents-Benutzer zu verbinden, welcher in den Applikations-Einstellungen als "Technical User" eingetragen wurde.


### Live-Schaltung einer DocuSign Applikation

Um eine DocuSign Test Applikation Live zu schalten, muss der DocuSign Benutzer-Account sowohl auf der Testumgebung als auch auf der Liveumgebung als Administrator hinterlegt sein. Erst dann kann durch diesen Benutzer die Applikation von der Testumgebung in die Liveumgebung gehoben werden. Da die Einstellungen ähnlich der Erstellung einer Testumgebung (Sandbox) sind, werden sie nachfolgend nur kurz beschrieben:

1. In der DocuSign Testumgebung anmelden (appdemo.docusign.com).
2. Über den Menüpunkt "Einstellungen" in den Administrationsbereich wechseln.
3. Sicherstellen, dass der korrekte Tenant ausgewählt ist
4. Unter der Kategorie "Integrationen" den Menüpunkt "Apps und Schlüssel" auswählen.
5. Bei der entsprechenden Applikation in dem Dropdown-Menü „Aktionen“ den Eintrag "Go-Live-Prüfung starten" wählen.
6. Es muss ausgewählt werden, welchem neuen live Tenant die Applikation zugeordnet werden soll. Anschließend wird eine automatische Prüfung der letzten API-Aufrufe gestartet. Nach einigen Minuten sollte die Prüfung abgeschlossen sein und die Applikation sich im Status "Live" befinden.
7. In der DocuSign Liveumgebung anmelden (app.docusign.com).
8. In der Administration zu der Applikation navigieren (äquivalent zu der Testumgebung). Auch hier sicherstellen, dass sich der Benutzer in dem korrekten Tenant befindet.
9. Die "API-Konto-ID" zwischenspeichern (wird später als Application ID benötigt).
10. Die Applikation bearbeiten.
11. Einen neuen Geheimen Schlüssel (Secret Key) hinzufügen und zwischenspeichern (wird später als Client Secret benötigt).
12. Eine weitere Umleitungs URI hinzufügen, diese muss das folgende Format aufweisen:
https://<Serveradresse>/documents/srv/GenericRedirectReceiver/service/DocuSign
Beachten: Im Gegensatz zu der Testumgebung endet der Pfad auf "DocuSign" und nicht "DocuSign-DEV".
13. Speichern.
14. Wechseln in den Documents-Webclient und anmelden als Redakteur.
15. Ähnlich vorgehen, wie bei Anbindung einer DocuSign Testumgebung, d.h.:
Eine neue Applikation anlegen, bei der Service-Auswahl den Anbieter "DocuSign" wählen.
Außerdem müssen alle neuen Parameter ähnlich der Testumgebung eingetragen werden.