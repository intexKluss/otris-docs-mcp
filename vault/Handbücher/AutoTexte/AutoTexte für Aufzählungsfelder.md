---
title: "AutoTexte für Aufzählungsfelder"
source: "https://otris.software/documents/manuals/books/autotexte/Enum.html"
---

# AutoTexte für Aufzählungsfelder

Aufzählungsfelder müssen nicht zwingend per Tastatur vorab mit festen
Wertelisten gefüllt werden. Die folgenden AutoTexte bieten die
Möglichkeit, die Liste eines Aufzählungsfeldes durch AutoTexte
füllen zu lassen. Dies erspart nicht nur Schreibarbeit, sondern bietet
zudem auch die Vorteile, dass die Liste automatisch aktualisiert wird
und zudem die korrekte Schreibweise der Einträge sichergestellt ist.

Die Länge der Klapplisten ist auf 2.000 Einträge beschränkt!


## Auswahllisten mit Benutzern (Nachname, Vorname)

Die folgenden AutoTexte liefern stets eine Liste von Benutzern
zurück, die den Kriterien des AutoTextes entsprechen.

*Es werden nur Benutzer berücksichtigt, bei denen im Benutzermanagement
die Option „Benutzer in Documents-Listen anzeigen“ aktiviert ist und das
Benutzerkonto freigegeben ist.*

Die Rückgabewerte dieser AutoTexte haben das Format Nachname, Vorname.

| AutoText | Information |
| --- | --- |
| %fullname% | Liste aller DOCUMENTS-Benutzer |
| %fullname.AccessProfile.Name% | Liste aller Benutzer, die Mitglied des Zugriffsprofils sind |
| %fullname.Partner.%Name | Liste aller Benutzer, die der Organisation Name zugeordnet sind. Name ist ein Platzhalter für eine Organisation und muss zwingend durch eine bestehende Organisation ersetzt werden. |
| %superiorFor.%Login-Name | Liste aller Benutzer, die den Benutzer Login-Name zum Vorgesetzten haben. Login-Name ist wiederum ein Platzhalter. |

**Beispiel**

Es existiert ein Zugriffsprofil namens Vorstand. Der AutoText

`%fullname.AccessProfile.Vorstand%`

listet alle Mitglieder dieses Profils auf.


## Auswahllisten mit Benutzern (Login)

Diese Liste ist der Übersicht aus Kapitel 3.1 sehr ähnlich, allerdings
ist das Format der Rückgabewerte für diese **AutoTexte** nicht Nachname,
Vorname, sondern Login.

| AutoText | Information |
| --- | --- |
| %login% | Liste aller DOCUMENTS-Benutzer |
| %login.AccessProfile.Name% | Liste der Logins aller Benutzer, die Mitglied dieses Zugriffsprofils sind |
| %login.Partner.%Name | Liste aller Benutzer, die der Organisation Name zugeordnet sind. Name ist ein Platzhalter für eine Organisation und muss zwingend durch eine bestehende Organisation ersetzt werden. |

**Beispiel**

Es existiert ein Zugriffsprofil namens Vorstand. Der AutoText

`%login.AccessProfile.Vorstand%`

listet die Login-Namen aller Mitglieder dieses Profils auf.


## Auswahllisten mit Benutzern (Login + Fullname)

Wenn bei Auswahllisten das Login als Feldwert gespeichert werden soll,
aber der Fullname (Nachname, Vorname) angezeigt werden soll, dann können
die folgenden AutoTexte verwendet werden. Die Einträge in den
Auswahllisten haben das Format:

`Login; Nachname, Vorname`

| AutoText | Information |
| --- | --- |
| %loginFullname% | Liste aller DOCUMENTS-Benutzer |
| %loginFullname.AccessProfile.Name% | Liste der Logins aller Benutzer, die Mitglied dieses Zugriffsprofils sind |
| %loginFullname.Partner.%Name | Liste aller Benutzer, die der Organisation Name zugeordnet sind. Name ist ein Platzhalter für eine Organisation und muss zwingend durch eine bestehende Organisation ersetzt werden. |

**Beispiel**

Es existiert ein Zugriffsprofil namens Vorstand. Der AutoText

`%loginFullname.AccessProfile.Vorstand%`

listet die Mitglieder dieses Profils auf.


## Sonstige AutoTexte für Aufzählungsfelder

Die folgende Tabelle enthält eine Liste aller sonstigen AutoTexte,
die in Aufzählungsfeldern Verwendung finden können.

| AutoText | Information |
| --- | --- |
| %aliasN% | Liste aller definierten Aliase (Name) |
| %aliasNL% | Liste der Namen und der sprachabhängigen Bezeichner (Label) der Aliase |
| %accessProfileN% | Liste der Profilnamen (Name) aller definierten Zugriffsprofile (Gruppen) |
| %accessProfileNL% | Liste der Profilnamen (Name) und der sprachabhängigen Bezeichner (Label) aller definierten Zugriffsprofile (Gruppen); Format: Name;de:LabelDE;en:LabelEN… |
| %archiveN% | Liste der Keys (Name) der Archive des Hauptarchivservers (nur EE.i, EE.x) |
| %archiveNL% | Liste der Keys (Name) und der sprachabhängigen Bezeichner der Archive (Label) des Hauptarchivservers (nur EE.i, EE.x); Format: Name;de:LabelDE;en:LabelEN… |
| %archiveN.serverName% | Liste der Keys (Name) der Archive des angegebenen Archivservers (nur EE.i, EE.x) |
| %archiveNL.serverName% | Liste der Keys und der sprachabhängigen Bezeichner der Archive des angegeben Archivservers (nur EE.i, EE.x); Format: Name;de:LabelDE;en:LabelEN… |
| %archiveViewN% | Liste der Keys (Name) der Views des EE.x Archivservers |
| %archiveViewNL% | Liste der Keys (Name) und der sprachabhängigen Bezeichner der Views (Label) des EE.x Archivservers; Format: Name;de:LabelDE;en:LabelEN… |
| %archiveSchemeN% | Liste der Keys der Schemata des EE.x Archivservers |
| %archiveSchemeNL% | Liste der Keys und der sprachabhängigen Bezeichner der Schemata des EE.x Archivservers |
| %archiveServerN% | Liste der Keys der freigegebenen Archivserver |
| %archiveServerNL% | Liste der Keys und der sprachabhängigen Bezeichner der freigegebenen Archivserver |
| %filetypeN% | Liste der Namen aller vorhandenen Mappentypen |
| %filetypeML% | Liste der Namen und der sprachabhängigen Bezeichner aller vorhandenen Mappentypen |
| %workflowN% | Liste der Keys der freigegebenen Workflows inklusive Versionsnummer |
| %workflowNL% | Liste der Keys und der sprachabhängigen Bezeichner der freigegebenen Workflows |
| %runscript:Script-Name% | Ein Portal-Script Script-Name gibt die Aufzählungswerte zurück. Weitere Informationen zu diesem Thema entnehmen Sie bitte der Dokumentation PortalScripting! |