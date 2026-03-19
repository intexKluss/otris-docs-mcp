---
title: "Installation und Konfiguration bei Verwendung von documentsOS"
source: "https://otris.software/documents/manuals/books/otrsign/install-configure-d6.html"
---

# Installation und Konfiguration bei Verwendung von documentsOS

Redakteure mit der Funktion *Documents Administrator* haben nach der Anmeldung am Webclient standardmäßig Zugang zum AdminCenter und können die Erweiterung *Signaturschnittstelle* aktivieren. Wurde die Erweiterung aktiviert, können über die Rollenverwaltung Zugriffsprofile und/oder Benutzer angegeben werden, die *optional* zusätzlich Zugang zu dieser Erweiterung erhalten sollen.

**Hinweis:** Wurde die Signaturschnittstelle in einer *Documents 5 Installation* genutzt, die auf *documentsOS* umgestellt wurde, müssen diverse, bisher im Mandanten installierte Skriptbibliotheken entfernt werden. Dazu wird ein Wartungsskript bereitgestellt, dass ausgeführt werden muss, siehe dazu auch [documentsOS - Migration Guide (de)](../migration-doc6-de/post-processing-windows.html#aenderung-der-signaturschnittstelle).


## Aktivierung/Deaktivierung

Die Aktivierung wird im AdminCenter über den Ordner *Erweiterungen* durchgeführt. Auf der Erweiterung ist die Aktion **Aktivieren** auszuführen.


![admincenter-1](images/admincenter-1.png)

Abb. 17 - Inaktive Erweiterung

Wurde die Erweiterung aktiviert, wird sie im AdminCenter unter *aktivierte Erweiterungen* dargestellt. Außerdem werden im AdminCenter die Konfigurationsordner **Signaturschnittstelle** und **Externe Anbieter** aktiviert.


![admincenter-2](images/admincenter-2.png)

Abb. 18 - Aktive Erweiterung


![admincenter-3](images/admincenter-3.png)

Abb. 19 - Konfigurationsordner im AdminCenter

Nach einer Deaktivierung wird der Konfigurationsordner *Signaturschnittstelle* im AdminCenter entfernt, es können somit keine Einstellungen mehr getroffen werden. Der Konfigurationsordner *Externe Anbieter* wird nicht entfernt, er kann auch für Einstellungen anderer Erweiterungen benutzt werden.


![admincenter-4](images/admincenter-4.png)

Abb. 20 - Deaktivierungsdialog


## Berechtigungen

Der Konfigurationsordner und die damit verbundenen Einstellungen sind auch für Benutzer sichtbar, die über die Rollenverwaltung im AdminCenter für diese Erweiterung *optional* angegeben wurden.


![admincenter-5](images/admincenter-5.png)

Abb. 21 - Rollenverwaltung mit optionalen weiteren Zugriffseinstellungen

Per Klick auf die entsprechende Rolle können im entsprechenden Formular optional vorhandene Zugriffsprofile und/oder Benutzer angegeben werden, die Berechtigungen zur Konfiguration erhalten sollen.

- Hinzufügen: Klick in das entsprechende Feld und Auswahl aus AutoComplete-Liste
- Entfernen: Klick auf das entsprechende Symbol in der jeweiligen Zeile

Standardmäßig steht eine Rolle **admin** mit Vollzugriff auf die Konfiguration der Signaturschnittstelle bereit.


## Konfiguration


### Globale Einstellung / Mappentypkonfiguration

Nach der Aktivierung der Erweiterung steht im Konfigurationsordner *Signaturschnittstelle* immer ein Eintrag *Globale Einstellungen* bereit. Dieser Eintrag kann nicht gelöscht werden.

**Hinweis:** Wurde die Signaturschnittstelle in einer *Documents 5 Installation* genutzt, die auf *documentsOS* umgestellt wurde, stehen die in der vorherigen Installation erstellten Mappentypkonfigurationen ebenfalls bereit, diese wurden bei der Umstellung automatisch übernommen.


![admincenter-6](images/admincenter-6.png)

Abb. 22 - Globale Einstellungen

Globale Einstellungen gelten für alle Mappentypen, d.h. werden diese gespeichert, stehen an allen Mappentypen (je nach Einstellung) die Aktionen zur Signaturanforderung bereit. Ist dies nicht gewünscht und sollen die Aktionen zur Signaturanforderung nur für bestimmte Mappentypen verwendet werden können, sind die globalen Einstellungen per Klick auf den Listeneintrag auszuwählen und im entsprechenden Formular die Aktionen zu deaktivieren.


![admincenter-7](images/admincenter-7.png)

Abb. 23 - Formular Globale Einstellungen, Deaktivierung der Aktionen

Soll nur für bestimmte Mappentypen eine Signaturanforderung möglich sein, ist die Aktion *Neue Konfiguration* auszuführen, im Formular sind dann die jeweiligen Einstellungen vorzunehmen.


![admincenter-8](images/admincenter-8.png)

Abb. 24 - Formularbeispiel Mappentypkonfiguration

**Hinweis:** Wurden bereits Externe Anbieter konfiguriert, so werden ggf. weitere Felder auf dem Formular dargestellt, die abhängig vom jeweiligen Anbieter sind.

**Hinweis:** An allen Formularfeldern stehen Tooltips als Entscheidungshilfe für die Konfiguration bereit.

Einige Anpassungen (z.B. das Hinzufügen/Entfernen des Gadgets zur Überwachung) erfordern Änderungen an bestehenden Mappen. In diesem Fall wird bei der Speicherung einer Mappentypkonfiguration eine Hinweismeldung zur Mappenänderung ausgegeben. Bei Bestätigung mit *OK* werden die Änderung auch auf bereits bestehenden Vorgänge angewendet.


![admincenter-9](images/admincenter-9.png)

Abb. 25 - Hinweismeldung zur Mappenänderung

Nach Abschluss der Änderungen wird standardmäßig eine Bestätigung als *Notification* angezeigt.


![admincenter-10](images/admincenter-10.png)

Abb. 26 - Notification Mappentypkonfiguration

Neu erstellte Mappentypkonfigurationen werden dann in der Liste angezeigt.


![admincenter-11](images/admincenter-11.png)

Abb. 27 - Liste Signaturschnittstelle mit zusätzlicher Mappentypkonfiguration

Über die Aktion *Entfernen* kann eine Mappentypkonfiguration auch wieder gelöscht werden, in diesem Fall werden die Änderungen automatisch auch an bereits bestehende Vorgänge (aktive Mappen) angewendet.


#### Spezielle Einstellungen / Skript-Hooks

Es werden Skript-Hooks benötigt, um zum Beispiel Berechtigungen eines Vorganges an die dazugehörigen Signaturvorgänge zu vererben. **Werden die Folgenden Hooks nicht bedient, kommt es zu Fehlfunktionen und Berechtigungsproblemen!**

Es sind die folgenden Skript-Hooks zu setzen:

- afterSave (Scripting -> Nach dem Speichern)


```javascript
// #import [requireShim]
require("@otrSign/otrSign").onOriginFileUpdate(context.file);
```

// #import [requireShim]
require("@otrSign/otrSign").onOriginFileUpdate(context.file);- allowedActions (Scripting -> Erlaubte Aktionen)


```javascript
// #import [requireShim]
require("@otrSign/otrSign_DecreaseRights").onApproveActions(enumval);
```

// #import [requireShim]
require("@otrSign/otrSign_DecreaseRights").onApproveActions(enumval);- decreaseFieldRightOnFileViewScript (Eigenschaften -> neue Eigenschaft hinzufügen)


```javascript
// #import [requireShim]
require("@otrSign/otrSign_DecreaseRights").onDecreaseFieldRights(enumval);
```

// #import [requireShim]
require("@otrSign/otrSign_DecreaseRights").onDecreaseFieldRights(enumval);Alternativ (wenn die Skript Hooks noch nicht belegt wurden) kann für "allowedActions" und "decreaseFieldRightOnFileViewScript" direkt das Skript "otrSign_DecreaseRights" hinterlegt werden.


### Externe Anbieter


#### Bereitstellung als Administrator der Signaturschnittstelle

Um die installierte und konfigurierte Schnittstelle zu verwenden, müssen die Dienste DocuSign und/oder FP Sign bzw. Adobe Sign mit der Documents-Installation verbunden werden. Hierzu steht der Konfigurationsordner *Externe Anbieter* zur Verfügung. Über die Aktion *Neuer Service* wird ein Wizard zur Bereitstellung eines externen Anbieters gestartet. Im Wizard muss im ersten Schritt der passende Anbieter gewählt werden. Für DocuSign bzw. FP Sign gibt es jeweils zwei Einträge. Dabei wird zwischen Test- und Livesystem unterschieden:

- DocuSign (Livesystem)
- DocuSign-DEV (Testsystem)
- FPSign (Livesystem)
- FPSign-DEV (Testsystem)

Für Adobe Sign wird nicht zwischen Test- und Livesystem unterschieden. Es ist der passende Eintrag zu wählen.
Außerdem kann ein Alias vergeben werden. Dieser ist dann verpflichtend, wenn mehrere Integrationen von einem Anbieter in einer Documents-Installation verwendet werden. Ein solcher Fall tritt ein, wenn ein Unternehmen mehrere Tenants bei einem der Anbieter hat. Der Alias identifiziert in diesem Fall den Tenant. **Achtung:** Der Alias kann nach der Anlage nicht mehr verändert werden.

Mit **Weiter** müssen im nächsten Schritt die Serviceeinstellungen angegeben werden, die abhängig vom vorher gewählten Anbiter sind. Diese Konfigurationen sind daher der spezifischen Anleitung des jeweiligen Anbieters zu entnehmen.

- Anleitung DocuSign
- Anleitung FP Sign
- Anleitung Adobe Sign

Mit **Weiter** können im letzten Schritt optional noch Berechtigungen angegeben werden.
Mit **Fertig** werden die Einstellungen für den Service gespeichert.


![admincenter-12](images/admincenter-12.png)

Abb. 28 - Liste Externe Anbieter ohne externen Anbieter


![admincenter-13](images/admincenter-13.png)

Abb. 29 - Liste Externe Anbieter mit Beispielen

Um zu prüfen, ob die zuvor angegebenen Einstellungen korrekt waren und um eine Verbindung herzustellen, ist im Benutzermenü der Eintrag *Apps und Dienste* zu wählen.


![admincenter-14](images/admincenter-14.png)

Abb. 30 - Benutzermenü Apps und Dienste


![admincenter-15](images/admincenter-15.png)

Abb. 31 - Übersicht Applikationen (Anbieter nicht verbunden)

Per Klick auf die entsprechende Kachel sind weitere Zugangsdaten anzugeben. Es ist zu beachten, dass der Browser unter Umständen Popup-Fenster blockiert. Diese sind dann freizugeben. Nach einer erfolgreichen Authentifizierung wird die Kachel des Anbieters grün gefärbt (Service ist nun aktiv).


![admincenter-16](images/admincenter-16.png)

Abb. 32 - Übersicht Applikationen (Beispiel FP Sign verbunden)

Waren die zuvor eingegebenen Einstellungen nicht korrekt, werden vom Service Fehlermeldungen ausgegeben, es sind dann entsprechende Korrekturen in den Konfigurationen des jeweiligen Anbieters und/oder der Documents-Servicekonfigurationen vorzunehmen.

Über die Aktionsschalter auf der Kachel, können weitere Einstellungen angezeigt oder bearbeitet werden:

- führt eine Abmeldung vom Service durch
- zeigt Informationen zum Service an
- startet den Einstellungswizard
- löscht den Service nach Rückfrage

**Hinweis:** Die Bereitstellung externer Anbieter kann neben der Nutzung des entsprechenden Konfigurationsordners auch über den *Einstellungsdialog der Erweiterung* oder direkt über das Benutzermenü *Apps und Dienste* vorgenommen werden.


#### Verbinden von Benutzerkonten

Nachdem durch einen Administrator der Signaturschnittstelle mindestens eine Applikation angelegt wurde, sehen alle berechtigten Benutzer den Eintrag unter *Apps und Dienste* im Benutzermenü. Benutzer welche die Signaturschnittstelle verwenden wollen, müssen nun ihren Documents-Benutzer mit mindestens einem Account bei einem Signaturanbieter verbinden.

Dazu muss die entsprechende Kachel angeklickt werden. Es öffnet sich ein Dialog in welchem sich der Anwender bei dem Anbieter authentifizieren muss. In einigen Fällen werden bei bestimmten Anbietern noch Zugriffsbestätigungen für eingerichtete Applikationen angefragt, diese sind dann zu bestätigen. War dieser Vorgang erfolgreich, ist die Kachel der Applikation anschließend grün hinterlegt. Der Anwender kann nun Signaturanfragen aus Documents heraus verschicken.