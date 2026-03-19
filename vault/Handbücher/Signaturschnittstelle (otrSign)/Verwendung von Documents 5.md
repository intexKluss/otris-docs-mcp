---
title: "Installation und Konfiguration bei Verwendung von Documents 5"
source: "https://otris.software/documents/manuals/books/otrsign/install-configure-d5.html"
---

# Installation und Konfiguration bei Verwendung von Documents 5


## Installation

Ab Documents Version 5.0g HF2 (Build #2303) steht das Signaturmodul als installierbares Addon im Verzeichnis <Installpath>\addon\sign zur Verfügung. Zur Installation muss die Datei "otrSign_Install.xml" per Documents-Manager importiert werden. **Nach der Konfiguration** (nächster Abschnitt) muss das Portalskript "otrSign_INIT" ausgeführt werden.

**Wichtiger Hinweis für Lösungen:** Die Signaturschnittstelle könnte bei einigen Lösungen bereits als Erweiterung vorliegen. Aktuell ist dies bei otris contract (ab Version 4.4.0) der Fall. Eine manuelle Installation ist dann nicht mehr erforderlich. Es sind die Hinweise der jeweiligen Lösung zu beachten.


## Konfiguration

Es können Mappentypen konfiguriert werden, von denen ein Signaturvorgang ausgelöst werden kann.
Wenn ein Mappentyp für die Signaturschnittstelle konfiguriert wird, werden mehrere Einstellungen an dem Mappentypen ergänzt:

- Ein Aktionsbutton "Signatur anfordern" auf dem Mappentypen und dem Dokumentenregister.
- Ein Gadget-Feld, welches ein Gentable zum Überwachen von bereits ausgelösten Signaturvorgängen ermöglicht.
Abb. 33 - Gentable Gadget zum Überwachen von Signaturvorgängen

Jeder Mappentyp hat individuelle Konfigurationsmöglichkeiten diese werden im JSON-Format in einer globalen Eigenschaft hinterlegt. Die Eigenschaft hat den Namen "otrSign_<Mappentyp-Name>_CONFIG". Es kann folgendes konfiguriert werden:

| Eigenschaft | Beschreibung | Zusatzhinweis |
| --- | --- | --- |
| filetypeName | Technischer Bezeichner des Mappentypen der verwendet werden soll |  |
| documentRegister | Technische Bezeichner der Dokumentenregister |  |
| attachTracker | Aktivieren des Trackers (Gentable-Gadget zum Überwachen verbundener Signaturvorgänge), Standardwert ist "true" |  |
| trackerPosition | Informationen über die relative Positionierung des Trackers | fieldName: wird der Standardwert "crmLineItemsJson" so belassen, wird der Tracker unter dem letzten sichtbaren Feld platziert, wird ein Feldname des entsprechenden Mappentypen angegeben, wird der Tracker so viele Felder unterhalb dieses Feldes platziert, wie als "relPos" angegeben |
| attachSigningACT | Fügt eine Aktion "Signatur anfordern" auf dem Mappentypen hinzu, mögliche Einstellungen sind: attachToRegister: true/false attachToFiletype: true/false icon: "mdi:mdi-signature-freehand" asListAction: true/false | attachToRegister definiert die Aktion am Dokumentenregister, attachToFiletype definiert die Aktion am Mappentypen, icon definiert das Icon für Buttons am Dokumentenregister, asListAction definiert, ob die Aktion am Mappentypen in der Klappliste dargestellt wird oder als Button |
| doFiletypeChange | Der Standardwert ist "true", damit wird bei Ausführung des Initialisierungsscriptes (otrSign_INIT) für alle vorhandenen Vorgänge des angegebenen Mappentypen (filetypeName) die Aktion "Mappen ändern" automatisch ausgeführt |  |
| versionSignedDocument | Wenn auf "true" gesetzt, wird das Originaldokument versioniert und durch das unterschriebene Dokument ersetzt" |  |
| prefixSignedDocument | Wenn diese Eigenschaft gesetzt wird, wird neben das Originaldokument das unterschriebene Dokument mit entsprechendem Prefix gelegt |  |
| suffixSignedDocument | Ähnlich wie "prefixSignedDocument", beide Eigenschaften können in Kombination verwendet werden" |  |
| signedDocumentCombinedPdf | Wenn auf "true" gesetzt, wird das fertig unterschriebene Dokument mit allen Anlagen und dem Zertifikat in einem PDF kombiniert. | Nur für DocuSign verfügbar |
| notifyRequester | Dem Anfragenden eine Nachricht schicken, wenn das Dokument vollständig unterschrieben wurde |  |
| signedDocumentToRequesterInbox | Dem Anfragenden den Signaturvorgang in den Eingangskorb legen, wenn dieser abgeschlossen wurde |  |
| activeOtrDocumentTree | Aktion "Signatur anfordern" für den Dokumentenbaum aktivieren |  |

Um die Konfiguration nicht manuell in der globalen Eigenschaft zu treffen, kann vor der Installation ein Konfigurationsskript "otrSign_INIT_Conf" angelegt werden (dieses wird bei der Installation gelesen). Mit der Installation wird ein Skript "otrSign_INIT_Conf_Sample" ausgeliefert. Dieses kann entsprechend angepasst werden. Anschließend muss dieses umbenannt werden in "otrSign_INIT_Conf". Beim Ausführen des Skriptes "otrSign_INIT" wird diese Konfiguration verwendet. Anpassungen an dieser Konfiguration werden nur bei der Installation des Modules beachtet.


### Globale Eigenschaft

Für jeden konfigurierten Mappentypen wird eine Eigenschaft nach dem Muster "otrSign_<Mappentyp>_CONFIG" angelegt. In dieser Eigenschaft werden die oben aufgelisteten Eigenschaften in einem JSON-Format persistiert. Ein manuelles Anpassen der globalen Eigenschaft ist jederzeit möglich.


## Anpassungen am Mappentypen

Neben den automatischen Änderungen an dem Mappentypen (Aktion "Signatur anfordern" und Gadget zur Überwachung) müssen auch manuelle Anpassungen vorgenommen werden.


### Skript-Hooks

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


## Registrieren von Applikationen

Um die installierte und konfigurierte Schnittstelle zu verwenden, müssen die Dienste DocuSign und/oder FP Sign bzw. Adobe Sign mit der Documents-Installation verbunden werden. Hierzu sieht ein Redakteur in dem Benutzermenü den Eintrag "Externe Anbieter".


![Menüeintrag - Externe Anbieter](images/external-services-usermenu.png)

Abb. 34 - Menüeintrag - Externe Anbieter

Wird dieser Eintrag ausgewählt, öffnet sich ein Dialogfenster. In diesem Fenster können bestehende Applikation verwaltet und Neue hinzugefügt werden. Zur Einrichtung der Signaturschnittstelle muss eine Applikation von FP Sign, DocuSign oder Adobe Sign hinzugefügt werden (Aktion **+ Neuer Service** als Redakteur).


![Externe Anbieter hinzufügen](images/external-services-overview-add.png)

Abb. 35 - Einen externen Anbieter hinzufügen

Es öffnet sich ein Wizard, in dem weiteres Einstellungen festgelegt werden müssen. In diesem Fenster muss im ersten Schritt der passende Anbieter gewählt werden. Für DocuSign bzw. FP Sign gibt es jeweils zwei Einträge. Dabei wird zwischen Test- und Livesystem unterschieden:

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

Um zu prüfen, ob die zuvor angegebenen Einstellungen korrekt waren, wird per Klick auf die Kachel eine Verbindung aufgerufen, bei der je nach Anbieter über eine Loginseite Anmeldedaten eingegeben oder ausgewählt werden müssen. Es ist zu beachten, dass der Browser unter Umständen Popup-Fenster blockiert. Diese sind dann freizugeben. Nach einer erfolgreichen Authentifizierung wird die Kachel des Anbieters grün gefärbt (Service ist nun aktiv).

Waren die zuvor eingegebenen Einstellungen nicht korrekt, werden vom Service Fehlermeldungen ausgegeben, es sind dann entsprechende Korrekturen in den Konfigurationen des jeweiligen Anbieters und/oder der Documents-Servicekonfigurationen vorzunehmen.

Über die Aktionsschalter auf der Kachel, können weitere Einstellungen angezeigt oder bearbeitet werden:

- führt eine Abmeldung vom Service durch
- zeigt Informationen zum Service an
- startet den Einstellungswizard
- löscht den Service nach Rückfrage


## Verbinden von Benutzerkonten

Nachdem durch den Redakteur mindestens eine Applikation angelegt wurde, sehen alle berechtigten Benutzer den Eintrag "Externe Anbieter" im Benutzermenü. Benutzer welche die Signaturschnittstelle verwenden wollen, müssen nun ihren Documents-Benutzer mit mindestens einem Account bei einem Signaturanbieter verbinden.

Dazu muss die entsprechende Kachel in Dialogfenster "Externe Anbieter" angeklickt werden. Es öffnet sich ein Dialog in welchem sich der Anwender bei dem Anbieter authentifizieren muss. In einigen Fällen werden bei bestimmten Anbietern noch Zugriffsbestätigungen für eingerichtete Applikationen angefragt, diese sind dann zu bestätigen. War dieser Vorgang erfolgreich, ist die Kachel der Applikation anschließend grün hinterlegt. Der Anwender kann nun Signaturanfragen aus Documents heraus verschicken.


![Übersicht Applikationen](images/external-services-overview.png)

Abb. 36 - Übersicht mit Applikationen (Adobe Sign verbunden, DocuSign nicht verbunden, FP Sign nicht verbunden)