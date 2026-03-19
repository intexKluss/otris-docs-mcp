---
title: "Konfiguration - Gruppenimport (Zugriffsprofile)"
source: "https://otris.software/documents/manuals/books/ldap-wizard-doc/wizdoc/Konfiguration-Gruppenimport.html#konfiguration-gruppenimport-zugriffsprofile-"
---

# Konfiguration - Gruppenimport (Zugriffsprofile)


![](../wizdocpics/gruppenimport.png)

Abb. 14 - Import von Zugriffsprofilen


## Gruppenimport

Wenn die Option aktiviert ist, dann werden die Zugriffsprofile, entweder aus der Gruppe für Gruppenimport oder aus der Organisationseinheit (OU) für Gruppe importiert und dem Benutzer zugewiesen. Sollte keine Gruppe und keine OU festgelegt sein, dann werden den Benutzern ggfs. die Profile zugewiesen, die bereits im Documents vorhanden sind, da sie z.B. manuell angelegt wurden.

Allgemein gilt: Einmal importierte Zugriffsprofile werden nicht gelöscht.

Wenn ein Benutzer nicht mehr Mitglied einer Gruppe (Zugriffsprofil) ist, weil er z.B. aus der Gruppe „Geschäftsführung" entfernt wurde, so bleibt Zugriffsprofil als solches weiter bestehen. Es wird in diesem Fall lediglich die Zuordnung des Benutzers zu diesem Profil entfernt. Soll die Zuordnung auch in diesem Fall erhalten bleiben, so kann die Zuordnung dadurch geschützt werden, dass man dem Profil die Eigenschaft „noLdapCheck" mit dem Wert „true" hinzufügt. In diesem Fall wird kein Abgleich mehr mit LDAP-Server vorgenommen. Dieses gilt dann aber für das gesamte Profil. Werden dem Profil Geschäftsführung also andere Benutzer hinzugefügt oder aus dieser entfernt, so werden im Documents diesen Benutzern das Profil weder zugewiesen noch entzogen.

Ist die Option Gruppenimport aktiviert und wurden auf der Seite Konfiguration des Benutzerimportes keine Benutzergruppen festgelegt, so werden nur die Zugriffsprofile importiert. Eine Zuweisung an eventuell im System bereits schon vorhandene Benutzer erfolgt nicht.


## Gruppe für Gruppenimport

Tragen Sie hier den DN einer Gruppe ein, in der alle (!) Gruppen Mitglied sind, die als Zugriffsprofile übernommen werden sollen. Wenn das Mandantenproperty *LdapProfileSearchScope* mit dem Wert *1* (ab Version *2.3.15*) vorhanden ist, dann werden von der Gruppe ausgehend auch alle Untergruppen rekursive durchlaufen und ebenfalls als Zugriffsprofile akzeptiert. Die Untergruppen müssen dann also nicht unmittelbar in der obersten Gruppe Mitglied sein.


## Organisationseinheit (OU) für Gruppen

Analog zu den Benutzern wird hier der DN einer OU eingetragen, in der alle Gruppen enthalten sind, die als Zugriffsprofile übernommen werden sollen. Bei Angabe einer OU kann die Angabe einer Gruppe für den Gruppenimport entfallen. Es darf entweder eine Gruppe oder eine OU festgelegt werden.


## LDAP-Suche für Gruppe ausführen

In dem Textfeld können Sie einen LDAP-Suchausdruck absetzen, um zu überprüfen, ob z.B. die Gruppe für den Gruppenimport vorhanden ist. Sie müssen mit der Bildung von LDAP-Suchausdrücken vertraut sein, damit Sie die Funktionalität sinnvoll benutzen können! Die Summe der gefundenen Einträge sowie die ersten 10 Treffer werden dann in einer Kurzform angezeigt.