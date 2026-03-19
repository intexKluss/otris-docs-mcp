---
title: "ACL / GACL Mischbetrieb"
source: "https://otris.software/documents/manuals/books/acl-reference/aclgacl.html"
---

# ACL / GACL Mischbetrieb

Ab der **Portalversion 6.0e** ist es möglich, die ACL mit GACL zu kombinieren, um somit einen flexibleren Einsatz des Mappenklassenschutzes zu ermöglichen. Benutzer, die nicht Mitglieder in bestimmten Zugriffsprofilen sind, können so Zugriff auf bestimmte Mappen erhalten ohne dafür ein neues Zugriffsprofil zu erstellen.

Um ein solchen Mischbetrieb einzurichten, können Sie sich an folgendes Beispiel halten.

1. Erstellen Sie im Mappentyp ein Feld vom Typ Doppelauswahlliste. Als Aufzählungswerte verwenden Sie die Autotexte %accessProfile% und %login%. Hierbei muss darauf geachtet werden, dass die Werte untereinander stehen.


![Doppelauswahlliste „Berechtigt“ mit Vorgabewert](./img/image5.png)

Abb. 4 - Doppelauswahlliste „Berechtigt“ mit Vorgabewert

1. Anschließend geben Sie als Wert / Voreinstellung entweder %accessProfilesGACLList% oder %userLogin% ein, damit der Benutzer nach Erstellen der Mappe weiterhin Zugriff auf diese hat. An dieser Stelle kann man ebenfalls mehrere Autotexte verwenden, es sollte jedoch auch hier darauf geachtet werden, dass die Werte untereinander stehen.
2. Legen Sie nun das neu erstellte Feld als Mappenklassenschutz fest und übernehmen diese Änderung.
3. Erstellen Sie nun in dem neuen Reiter Mappenklassenschutz einen neuen Datensatz. Geben Sie als Klassennamen GACL an. Diese Beschreibung wird für den Mischbetrieb benötigt und kann daher nicht variiert werden. Als Feldwert geben Sie dann den Wert: %accessProfilesGACLFilter%|%CRLF%%userLogin%%CRLF% ein.


![GACL für Mischbetrieb](./img/image6.png)

Abb. 5 - GACL für Mischbetrieb

1. Speichern Sie Ihre Änderungen am Mappentyp.

Neu erstellte Mappen des Mappentyps können nun nur noch von Benutzer bzw. Mitglieder von Zugriffsprofilen aufgerufen werden, die der Eigentümer der Mappe festgelegt hat. Für alle anderen Nutzer scheint es, als würden diese Mappen nicht existieren.