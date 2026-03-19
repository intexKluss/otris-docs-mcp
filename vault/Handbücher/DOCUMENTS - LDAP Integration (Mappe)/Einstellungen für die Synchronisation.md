---
title: "Einstellungen für die Synchronisation"
source: "https://otris.software/documents/manuals/books/ldap-mappe-doc/wizdocmappe/Konfiguration-Mappe-Synchro.html#einstellungen-fuer-die-synchronisation-"
---

# Einstellungen für die Synchronisation

Es können weitere Einschränkungen auf Strukturen hinterlegt werden. Dies ist für zu importierende *Benutzer* und *Gruppen* gleichermaßen möglich.


![](../wizdocmappepics/mappe-2.png)

Abb. 4 - Einstellungen für die Synchronisation


## Gruppe für Benutzerimport (LdapSwitchingGroupDN)

An dieser Stelle können Sie eine Gruppen-DN hinterlegen. Auf diesem Wege erreichen Sie, dass alle Benutzer, die Mitglied in dieser Gruppe sind (und ausschließlich diese Benutzer), importiert werden.

Hinweis:

Der LDAP-Import löscht keine im System bereits vorhandenen Benutzer. Es wird lediglich der Status (freigegeben, gesperrt usw.) und der Zugang zu den Modulen (Documents oder Archiv) angepasst.  Wenn im System Benutzer vorhanden sind, die z.B. Documentsuser sind und auch weiter bleiben sollen, die aber nicht importiert werden würden, so müssen Sie diese Benutzer schützen, indem Sie ihnen das Property „noLdapCheck" mit dem Wert „true" hinzufügen. Diese User werden dann im Import und beim Login von der LDAP-Prüfung ausgenommen und bleiben unverändert bestehen.


## Importierten Benutzern automatisch Documents/ Archiv-Zugang gewähren - 2.3

Sind diese Optionen aktiviert, so wird jedem Benutzer, der importiert wird, automatisch der *Documents*- oder Archivzugang gewährt. Die Angabe einer Gruppe für den Documentszugang bzw. dem Archivzugang kann dann entfallen. Die Eingaben in diesen Feldern werden beim Speichern gelöscht und bei Druchführung des Importes nicht weiter berücksichtigt. Die Felder werden erst ab der LDAP-Version *2.3* angezeigt.

Gruppenmodus

Wird eine Benutzerfilter-Gruppe DN angegeben aber kein Wurzelverzeichnis für Benutzer, werden alle Mitglieder der Gruppe automatisch importiert. Dies geschieht unabhängig davon, in welche OU sie eingeteilt sind.


## Gruppe für Documents-Zugang (LdapDocumentsGroup)

Geben Sie hier den DN der Gruppe an, deren Mitglieder *Documents-Zugang* erhalten sollen. Sollen alle importierten Benutzer *Documents-Zugang* erhalten, kann hier die gleiche Gruppe verwendet werden wie bei *Gruppe für Benutzerimport.*

Benutzer, die den Documentszugang erhalten, müssen importierte und im Durchlauf des Imports freigegebene Benutzer sein. Wenn es also einen bereits bestehenden Benutzer gibt, der Mitglied der Documents-Gruppe ist, der aber nicht mehr importiert werden würde, da sich die Benutzergruppe geändert hat, dann würde diesem Benutzer der Documentszugang entzogen.


## Gruppe für Archiv-Zugang (LdapArchiveGroup)

Geben Sie hier den DN der Gruppe an, deren Mitglieder *Archiv-Zugang* erhalten sollen. Soll dies für alle importierten Benutzer gelten, kann hier die gleiche Gruppe verwendet werden wie bei *Gruppe für Benutzerimport*


## Benutzer aus Untergruppen importieren (LdapRecursiveUserSearch)

Ist diese Option gewählt, werden Benutzer (rekursiv) auch aus Untergruppen importiert, die in der Gruppe für den Benutzerimport Mitglied sind.

Es können damit Benutzerketten für den Import gebildet werden. Gruppe C ist Mitglied bei der Gruppe B und diese ist Mitglied der Gruppe A, die als Gruppe für den Benutzerimport festgelegt wurde. Es werden damit alle Mitglieder der Gruppe A, B und C importiert.

Wenn die Kette in einem Punkt unterbrochen wird, da die Gruppe nicht Mitglied der übergeordneten Gruppe ist, werden entsprechend weniger Benutzer importiert. Daher kann es bei vielen Gruppen sinnvoll sein administrativ alle Untergruppen direkt als Mitglied der obersten Gruppe hinzuzufügen, damit so ein Bruch und eine dahergehende aufwändige Fehlersuche vermieden werden kann.


## Untergruppen als Zugriffsprofile zuweisen (LdapRecursiveUserSearch)

Ist diese Option gewählt, werden den Benutzern auch dann importierte Zugriffsprofile zugewiesen, wenn sie nicht direkt darin Mitglied sind, sondern nur in einer im LDAP untergeordneten Gruppe. Die Zuweisung der Zugriffsprofile erfolgt rekursiv.

Beispiel:

Benutzer Bernhard Buch ist Mitglied in der LDAP-Gruppe *Vertieb_Team_1*. Diese Gruppe ist wiederum Mitglied in der LDAP-Gruppe *Vertieb_Gesamt.* Beide Gruppen sind Mitglied in der Gruppe *Gruppenimport*, die als *Gruppe für Gruppenimport* verwendet wird. Herr Buch erhält in *Documents* nun *Vertieb_Team_1* und *Vertrieb_Gesamt* als Zugriffsprofile.


## Groß- Kleinschreibung von Benutzernamen ignorieren (LdapIgnoreLoginCase)

Wenn die Option deaktiviert ist, so wird der Username und damit auch das Documents-Login, so wie er im LDAP ausgelesen wird, übernommen. Im anderen Falle wird der Name in Kleinbuchstaben umgewandelt und verwendet.


## Organisationseinheit (OU) für Benutzer (LdapUserDN)

Wenn der Import der Benutzer auf eine OU eingeschränkt werden soll, können Sie hier den DN einer OU angeben, der alle zu importierende Benutzer enthält. Benutzer aus anderen Bereichen werden nicht synchronisiert. Die Angabe der Gruppe für den Benutzerimport kann dann entfallen. Die zu importierenden Benutzer müssen direkt an der OU hängen, dürfen also nicht in einer Gruppe liegen, die sich in der OU befindet. Wird die Option Benutzer aus Untergruppen importieren verwendet so werden auch die Benutzer aus untergeordneten OUs mit importiert, soweit diese direkt an den OUs hängen.

Aus Performance-Gründen ist die Angabe einer Gruppe für den Benutzerimport der Angabe einer OU vorzuziehen und sollte nur verwendet werden, wenn die Anlage und Pflege einer separaten Gruppe im LDAP nicht möglich ist. Werden sowohl die Gruppe als auch die OU angegeben, werden nur Benutzer importiert die in der OU hinterlegt sind UND Mitglied in der Gruppe sind.


## Gruppe für Gruppenimport (LdapGroupFilterGroupDN)

Tragen Sie hier den DN einer Gruppe ein, in der alle (!) Gruppen Mitglied sind, die als Zugriffsprofile in *Documents* übernommen werden sollen. Wenn das Mandantenproperty *LdapProfileSearchScope* mit dem Wert *1* (ab Version *2.3.15*) vorhanden ist, dann werden von der Gruppe ausgehend auch alle Untergruppen rekursive durchlaufen und ebenfalls als Zugriffsprofile akzeptiert. Die Untergruppen müssen dann also nicht unmittelbar in der obersten Gruppe Mitglied sein.


## Organisationseinheit (OU) für Gruppen (LdapGroupDN)

Analog zu den Benutzern wird hier der DN einer OU eingetragen, in der alle Gruppen enthalten sind, die als Zugriffsprofile in *Documents* übernommen werden sollen. Bei Angabe einer OU kann die Angabe  einer Gruppe für den Gruppenimport entfallen.