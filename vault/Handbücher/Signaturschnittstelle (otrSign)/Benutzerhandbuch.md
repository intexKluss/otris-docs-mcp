---
title: "Elektronische Signaturen in Documents (Benutzerhandbuch)"
source: "https://otris.software/documents/manuals/books/otrsign/user-guide.html"
---

# Elektronische Signaturen in Documents (Benutzerhandbuch)


## Verbinden eines Signaturdienstes

Die elektronische Signatur in Documents wird über externe Anbieter (DocuSign, FP Sign bzw. Adobe Sign) realisiert. Damit eine Signaturanfrage an diese Anbieter gestellt werden kann, muss jeder Benutzer sein persönliches Konto bei einem oder mehreren Anbietern mit Documents verbinden. Wie dies erfolgt, wird im Folgenden beschrieben.

**Hinweis:** Wird Documents in **Version 5** benutzt, steht im Benutzermenü der Eintrag *Externe Anbieter* zur Konfiguration zur Verfügung. Wird **documentsOS** verwendet, ist der Benutzermenüeintrag *Apps und Dienste* zur Konfiguration zu verwenden, die Vorgehensweise ist aber weitestgehend identisch, nachfolgende Abbildungen beziehen sich auf *Version 5*.

1. Über das Benutzermenü in Documents den Eintrag Externe Anbieter bzw. Apps und Dienste auswählen.


![Menüeintrag - Externe Anbieter](images/external-services-usermenu.png)

Abb. 37 - Menüeintrag - Externe Anbieter

1. Es öffnet sich ein Dialog, in welchem alle Anbieter angezeigt werden, welche verbunden werden können. Dabei können einzelne Anbieter mehrfach angezeigt werden. Dies ist dann der Fall, wenn Ihr Unternehmen mehrere Unternehmenskonten bei einem Anbieter besitzt. Sie müssen das für Ihren Bereich und Ihre Organisation zutreffende Konto auswählen. Ist die Kachelansicht aufgrund der Anzahl an Diensten nicht mehr übersichtlich genug, kann oben links zu einer Listenansicht gewechselt werden. Bereits verknüpfte Anbieter werden grün hervorgehoben.


![Übersicht Anbieter](images/external-services-overview-user.png)

Abb. 38 - Übersicht mit Anbietern (Adobe Sign verbunden, DocuSign nicht verbunden, FP Sign nicht verbunden)

1. Um einen Anbieter zu verbinden, muss die entsprechende Kachel einfach angeklickt werden. Es öffnet sich ein Dialog, in welchem die Anmeldedaten für das Konto bei dem Anbieter abgefragt werden. Beachten Sie, dass Ihr Browser unter Umständen Popup-Fenster blockiert. Diese sind dann freizugeben. Nach einer erfolgreichen Authentifizierung wird die Kachel des Anbieters grün gefärbt.

Über die Aktionsschalter auf der Kachel, können weitere Einstellungen angezeigt oder bearbeitet werden:

- führt eine Abmeldung vom Service durch
- zeigt Informationen zum Service an

**Hinweis:**  Signaturen können nur angefordert werden, wenn der entsprechende Anbieter korrekt verbunden ist.


## Anfordern einer Signatur


### Aktion auslösen

Eine Signatur kann immer von einem Dokument ausgehend angefordert werden. Daher wird eine Mappe mit einem Dokumentenregister benötigt, in welchem mindestens ein PDF-Dokument abgelegt ist. Ist dies der Fall, kann über zwei Wege eine Signaturprozess gestartet werden:

- Direkt an der Mappe über die Aktion "Signatur anfordern". Sind mehrere Dokumente in dem Dokumentenregister abgelegt, muss ausgewählt werden, welche Dokumente in den Signaturprozess gegeben werden. Abb. 39 - Aktion: Signatur anfordern an der Mappe
- In dem Dokumentenregister über die Aktion "Signatur anfordern". Es muss mindestens ein PDF-Dokument ausgewählt werden, welches in den Signaturprozess gegeben wird. Abb. 40 - Aktion: Signatur anfordern am Dokumentenregister

Ist keine Aktion sichtbar, kann in dem aktuellen Kontext keine Signatur angefordert werden.


### Geführter Dialog

Nachdem die Aktion "Signatur anfordern" ausgelöst wurde öffnet sich ein geführter Dialog. In diesem Dialog müssen einige Informationen bereitgestellt werden, welche dann an den Signaturanbieter übermittelt werden. Die einzelnen Schritte werden im Folgenden näher erläutert.


#### 1. Allgemeines

Ist das aktuelle Benutzerkonto mit mehreren Signaturanbietern verbunden, muss in diesem Schritt ausgewählt werden, über welchen Anbieter eine Signaturanfrage gestartet werden soll. Ist in dem Konto nur ein Anbieter verknüpft, entfällt diese Auswahl.

Wurden bei der vorherigen Auswahl der Dokumente mehrere ausgewählt, so muss an dieser Stelle festgelegt werden, welches Dokument unterschrieben werden soll. Alle anderen Dokumente werden als Anhang an den Anbieter übermittelt.

**Hinweise für FP Sign:** Wurde als Anbieter FP Sign gewählt können noch zwei weitere Einstellungen getroffen werden:

- Delegation erlauben: Unterzeichner dürfen Ihre Signatur an eine andere Person delegieren.
- Workflowdokumente über E-Mail senden: (Signierte) Dokumente werden automatisch als E-Mail-Anhang mitgeschickt.


![Geführter Dialog Allgemeines](images/request-signature-wizard-general.png)

Abb. 41 - Signatur anfordern: Allgemeine Informationen


#### 2. Unterzeichner

In diesem Schritt wird festgelegt, welche Personen das Dokument unterzeichnen sollen.

Für jeden Unterzeichner müssen mindestens Folgende Informationen bereitgestellt werden:

- Name: Vor- und Nachname der Person.
- E-Mail: E-Mail-Adresse der Person. An diese Adresse wird die Aufforderung zur Signatur zugestellt.
- E-Signatur-Art: Hier kann festgelegt werden, mit welchem Zertifikat die Signatur versehen werden soll. Weitere Informationen: Arten der elektronischen Signatur

Je nach gewähltem Signaturanbieter und Signaturart müssen noch weitere Informationen bereitgestellt werden:

- Telefonnummer: Wird die Signaturart "Fortgeschritten" ausgewählt, muss zusätzlich eine Telefonnummer angegebene werden. An diese Nummer wird als zweiter Faktor eine SMS verschickt.

Über den Button "Unterzeichner hinzufügen" können weitere Unterzeichner definiert werden. Wurde mindestens ein Unterzeichner hinzugefügt, können diese über den Button "Entfernen" wieder gelöscht werden.
**Hinweis für FP Sign:** Der aktuelle Benutzer muss immer Teil des Signaturprozesses sein und wird daher standardmäßig hinzugefügt. Dieser kann auch nicht mehr entfernt werden.

Oben rechts kann zudem die Signierreihenfolge festgelegt werden. Hier gibt es zwei Optionen:

- Gleichzeitig anfordern: Alle Unterzeichner werden gleichzeitig aufgefordert das Dokument zu signieren. Diese Option ist für den Anbieter FP Sign nicht verfügbar.
- Nacheinander anfordern: Die Unterzeichner werden nacheinander zur Signatur aufgefordert (erst wenn Unterzeichner A das Dokument signiert hat, erhält Unterzeichner B eine Aufforderung). Die Reihenfolge der Unterzeichner kann per Drag-and-Drop an dem "⋮"-Symbol verändert werden.

**Hinweise für FP Sign:**

- Ein Unterzeichner wird zuerst an der E-Mail-Adresse identifiziert. Ist unter der genannten E-Mail-Adresse bereits ein FP Sign Konto registriert, werden alle definierten Informationen (Name, Telefonnummer) von FP Sign ignoriert.
- Die Qualifizierte Signatur kann nur für Personen ausgewählt werden, welche bereits ein Konto bei FP Sign besitzen und dieses mit einem sign-me-Konto der Bundesdruckerei verknüpft haben (hierüber wird die Qualifizierte Signatur realisiert). Ist dies nicht der Fall kommt es zu einer Fehlermeldung.


![Geführter Dialog Allgemeines](images/request-signature-wizard-signers.png)

Abb. 42 - Signatur anfordern: Allgemeine Informationen


#### 3. Nachricht

In einem weiteren Schritt lässt sich ein Betreff und eine Nachricht festlegen, welche an alle Unterzeichner verschickt wird.


![Geführter Dialog Nachricht](images/request-signature-wizard-message.png)

Abb. 43 - Signatur anfordern: Nachricht


#### 4. Unterschriftsbereich

Im letzten Schritt muss festgelegt werden, welche Elemente auf dem PDF-Dokument aufgebracht werden sollen. Bei DocuSign besteht hier die Auswahl aus Folgenden Elementen:

- Unterschrift: Ein Unterschriftsbereich.
- Name: Der vollständige Name des Unterzeichners. Dieser wird automatisch von DocuSign aufgebracht.
- Initialen: Ein Bereich für Initialen.
- Datum: Hier wird automatisch das Datum der Signatur eingefügt.
- Ort: Ein Freitextfeld, in welches der Unterzeichner den Ort der Unterschrift eintragen kann.

**Hinweise für FP Sign:** Bei FP Sign kann nur die Unterschrift aufgebracht werden.

Die Elemente können per Drag-and-Drop auf das PDF Dokument gezogen und so platziert werden. Um ein Element wieder zu entfernen, dieses einfach außerhalb des PDF-Bereiches ziehen. Es können mehrere Elemente eines Types platziert werden.

Für jeden Unterzeichner gibt es derartige Elemente. Über die Auswahlliste kann zwischen den Elementen der Unterzeichner gewechselt werden. Jedem Unterzeichner wird eine eigene Farbe zugeordnet. Es werden nur Unterzeichner aufgelistet, welche auch tatsächlich signieren müssen. Unterzeichner mit der Signaturart "Kopie (CC)" oder "Information" werden an dieser Stelle nicht angezeigt.


![Geführter Dialog Unterschriftsbereich](images/request-signature-wizard-signarea.png)

Abb. 44 - Signatur anfordern: Unterschriftsbereich


#### 5. Übermittlung

Mit Bestätigung des letzten Schrittes, wird das Dokument direkt an den Signaturanbieter übermittelt. Nach Abschluss dieser Übermittlung sollte eine Erfolgsmeldung angezeigt werden. Unter Umständen wird an dieser Stelle auch ein Einmal-Passwort angezeigt, welches an die Unterzeichner zu übermitteln ist.


![Geführter Dialog Übermittlung](images/request-signature-wizard-finish.png)

Abb. 45 - Signatur anfordern: Übermittlung


## Überwachen einer Signatur


### Navigation

Nachdem eine Signatur angefordert wurde, kann diese direkt in Documents überwacht werden. Dabei wird erfasst, welche Unterzeichner das Dokument bereits signiert haben und welche Signaturen noch ausstehen. Hierzu wird für jeden Signaturvorgang eine Mappe angelegt. Die Mappen können in dem Ordner "Dokumentensignierung" gefunden werden.


![Ordner](images/sign-folders.png)

Abb. 46 - Ordner für Signaturvorgänge

Alternativ kann auf der auslösenden Mappe eine Tabelle zu sehen sein. In dieser Tabelle werden alle Signaturvorgänge aufgelistet, welche von der aktuell geöffneten Mappe ausgelöst wurden. Über den "Pfeil"-Button in der Spalte "Vorgang" kann zu der Mappe mit dem Signaturvorgang gewechselt werden.


![Tabelle mit Signaturvorgängen](images/tracker-gadget.png)

Abb. 47 - Tabelle mit Signaturvorgängen an der auslösenden Mappe


### Signaturvorgang

In dem Signaturvorgang wird der aktuelle Status des Prozesses im Detail dargestellt.

Der Status wird alle 15 Minuten gegen den Signaturanbieter aktualisiert. Soll der Vorgang direkt aktualisiert werden, kann dies über den Button "Aktualisieren" manuell angestoßen werden.

Der Status der einzelnen Unterzeichner kann in der Tabelle "Unterzeichner" überwacht werden. Der Status wird dabei über ein Ampelsystem angezeigt:

- grün: Dokument signiert.
- gelb: Signatur ausstehend.
- rot: Abgelehnt oder Systemfehler.

Soll der aktuell Unterzeichner an seine Signatur erinnert werden, kann dies über den Button "Erinnerung senden" angestoßen werden.

Haben alle Unterzeichner das Dokument signiert, wird das finale Dokument in das Dokumentenregister hochgeladen. Neben dem Originaldokument wird an dieser Stelle auch ein Bericht abgelegt. Dieser Bericht zeigt technische Informationen über die elektronische Signatur.


![Signaturvorgang](images/signature-file.png)

Abb. 48 - Signaturvorgang