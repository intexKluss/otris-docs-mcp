---
title: "Eigenschaften und Felder einer Mappe"
source: "https://otris.software/documents/manuals/books/autotexte/DocFile.html"
---

# Eigenschaften und Felder einer Mappe

| AutoText-Ausdruck | Übermittelte Information |
| --- | --- |
| %fileOwner% | Name des Eigentümers der Mappe im Format Nachname, Vorname |
| %fileOwner.SystemUser-Attribut% | Über diese Notation können eine ganze Reihe verschiedener AutoTexte aufgerufen werden. Eine Liste aller vorhandenen SystemUser-Attribute wird in Kapitel 1.4 aufgeführt. Fügen Sie das gewünschte SystemUser-Attribut anstelle des Platzhalters in der nebenstehenden Formel ein. |
| %createdAt% | Zeitstempel für den Erstellungszeitpunkt der Mappe. |
| %createdAt+x% | Erstellungs-Zeitstempel der Mappe plus x Tage |
| %createdAt-x% | Erstellungs-Zeitstempel der Mappe minus x Tage |
| %createdAt.fix% | Entspricht %createdAt% im ISO-Format |
| %createdAt.fix+x% | Entspricht %createdAt+x% im ISO-Format |
| %createdAt.fix-x% | Entspricht %createdAt-x% im ISO-Format |
| %lastEditor% | Name des letzten Bearbeiters |
| %lastEditor.SystemUser-Attribut% | Analog zu den oben beschriebenen SystemUser-Attributen kann die Liste aus Kapitel 1.4 auch verwendet werden, um bestimmte Informationen über den letzten Bearbeiter der Mappe herzuleiten. |
| %lastModifiedAt% | Zeitstempel der letzten Bearbeitung einer Mappe |
| %lastModifiedAt+x% | Zeitstempel der letzten Bearbeitung plus x Tage |
| %lastModifiedAt-x% | Zeitstempel der letzten Bearbeitung minus x Tage |
| %lastModifiedAt.fix% | Entspricht %lastModifiedAt% im ISO-Format |
| %lastModifiedAt.fix+x% | Entspricht %lastModifiedAt+x% im ISO-Format |
| %lastModifiedAt.fix-x% | Entspricht %lastModifiedAt-x% im ISO-Format |
| %title% | Auslesen des Mappentitels in der angemeldeten Locale |
| %title.raw% | Der Mappentitel in allen Locales |
| %fileType% | Name des Mappentyps |
| %fileTypeTitle[.locale]% | Gibt das Label des Mappentyps in der optional anzugebenen Sprache (locale) zurück. |
| %id% | File-ID der Mappe |
| %fileLink% | URL der Mappe. Es wird ein direkter Link auf die Mappe zurückgegeben. Dieser kann zum Beispiel in einer E-Mail-Vorlage verwendet werden, die einen Benutzer über eine neue Mappe im Eingangskorb informiert. |
| %actionLink->workflow.ControlFlowName% | Erzeugt einen Filelink zum Weiterleiten einer Mappe ohne Authentifizierung. Der ControlFlowName ist der Name des Workflowübergangs, welcher bei Verwendung des Links gegangen werden soll. Dieser AutoText ist nur im Rahmen einer Mail-Vorlage als InboxMailTemplate im Workflow anwendbar |
| %FeldName% | Der Wert eines Mappenfeldes wird zurückgegeben, wenn der Bezeichner des Feldes in der bekannten Notation (Notation von AutoTexten) aufgerufen wird. Diese Notation beschränkt sich auf Felder des aktuellen Mappentyps. Die Ausgabe erfolgt in der locale und dem Format des angemeldeten Benutzers. Falls FeldName ein erweitertes Referenzfeld ist, wird der Anzeigewert zurückgegeben. |
| %FeldName.raw% | Wenn FeldName ein erweitertes Referenzfeld ist, wird der gesamte Wert zurückgegeben. Dieser enthält den Schlüsselwert und den Anzeigenamen getrennt durch einen Zeilenumbruch. |
| %FeldName.label[.locale]% | Gibt das Label des Feldes in der optional anzugebenen Sprache (locale) zurück. |
| %FeldName.locale% | Dieser AutoText liefert bei mehrsprachigen Aufzählungen den aktuellen Eintrag in der Sprache zurück, die im AutoText als locale (Kürzel) eingegeben wurde. |
| %FeldName.key% | Technischer Bezeichner bei Aufzählungswerten bzw. der Key der referenzierten Mappe bei Referenzfeldern |
| %FeldName.pos% | Position als 0-basierter Integer innerhalb der Aufzählungsliste |
| %ref.ReferenzfeldName.AutoText% | Eine Besonderheit ergibt sich, wenn Informationen über einen anderen Mappentyp des Systems referenziert werden müssen. In diesem Fall muss die aktuelle Mappe ein Referenzfeld beinhalten, welches ein Feld des anderen Mappentyps referenziert. Dieser Bezug zur anderen Mappe muss auch bei der Verwendung mit AutoTexten hergeleitet werden. Siehe dazu auch das Beispiel unten oder Referenzierte Mappen. |
| %resubmission% | Wiedervorlage-Zeitpunkt der Mappe für den angemeldeten Benutzer |
| %resubmission.fix% | Entspricht %resubmission% im ISO-Format |
| %resubmissionComment% | Grund der Wiedervorlage |
| %currentFile.Mappenattribut% | Vergleichbar zu den SystemUser-Attributen existiert ferner eine Liste mit verschiedenen Mappenattributen. Diese wird in Kapitel Mappenattribute beschrieben. Setzen Sie hierbei einfach das gewünschte Mappenattribut an die Stelle des Platzhalters Mappenattribut in den AutoText-Ausdruck ein. |
| %lastFile.AutoText% | AutoTexte beziehen sich immer auf die aktuell verwendete Mappe des Benutzers. Über diesen AutoText kann auf Eigenschaften der letzten durch den Benutzer verwendeten Mappe zugegriffen werden. |
| %fromJSON.JSON-Key.FeldName% | Mit dieser Notation kann aus einem einfachen JSON-String Objekt ein Element ausgelesen werden, z.B.: FeldName = Feld1, JSON-Wert = {"ElemA":"ValA", "ElemB":"ValB"}, der AutoText %fromJSON.ElemB.Feld1% liefert dann den ValB |
| Datumsfelder und Zeitstempel |  |
| %Feld-Name.key% | Entspricht der Definition des Datumsformates in den DOCUMENTS-Einstellungen |
| %Feld-Name.fix% | Im Format yyyymmdd bzw. yyyymmddHHMMSS |


## Beispiel %ref.ReferenzfeldName.AutoText%

Eine Mappe `Ansprechpartner` enthält ein Referenzfeld `Mitarbeiter`, welches die zugehörige Mappe vom Typ `Firma` referenziert. Der Firmensitz ist nicht auf der Mappe `Ansprechpartner`, sondern auf der Mappe `Firma`
als Feld vorhanden. Der Inhalt dieses Feldes soll auch auf der Mappe Ansprechpartner angezeigt werden. Folgender AutoText wird hier benötigt:


```javascript
%ref.Mitarbeiter.Firmensitz%
```

%ref.Mitarbeiter.Firmensitz%Im Einzelnen leitet `ref` (auch möglich: `reference`) den AutoText ein, so dass das System die folgenden Notationselemente als Referenz interpretiert. Anschließend folgt das Referenzfeld  `Mitarbeiter`, welches die eindeutige Verbindung zur referenzierten Mappe herstellt. Letztlich folgt das Feld auf der referenzierten Mappe (hier: `Firmensitz`), so dass dessen Wert an die aktuell geöffnete Mappe übertragen werden kann.


## Beispiel zu Mehrsprachigkeit

In einem Aufzählungsfeld `Anrede` werden mögliche Anreden einer Person in Deutsch und Englisch aufgezählt. Ein Aufzählungswert lautet:


```javascript
male: de:Herr; en:Mr.;
```

male: de:Herr; en:Mr.;Der AutoText `%Anrede.de%` liefert *Herr* zurück, während `%Anrede.en%` den Wert *Mr.* zurückgibt.