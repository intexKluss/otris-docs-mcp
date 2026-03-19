---
title: "Konfiguration - Benutzerimports"
source: "https://otris.software/documents/manuals/books/ldap-wizard-doc/wizdoc/Konfiguration-Benutzerimport.html#konfiguration-benutzerimports"
---

# Konfiguration - Benutzerimports

Hinweis:

Wenn Ihre *Documents*-Installation nicht mit einem EASY Archive verbunden ist, muss die Checkbox „Neue Benutzer automatisch mit Archiv-Zugriff" deaktiviert werden. Diese Einstellung erfolgt im
*Documents*-Manager im `Hauptmenüzeile -> Documents -> Einstellungen` auf dem Register Archiv (Basis).


![](../wizdocpics/archiv.png?class=medium)

Abb. 5 - Einstellung für den Betrieb ohne Anbindung an ein EASY-Archiv

Auf dieser Seite des Konfigurationswizards wird fest gelegt welche Benutzer aus dem LDAP importiert werden und mit welcher Lizenz die Neuanlage erfolgt. Weiter wird bestimmt welche Module (Documents- oder Archivzugang) für die Benutzer jeweils freigeschaltet werden.


![](../wizdocpics/usermodule.png?class=medium)

Abb. 6 - User perona mit Documents – und Archivzugang und Concurrent (open) Lizenz


![](../wizdocpics/benutzerimport.png)

Abb. 7 - Erfassung des Benutzerimports


## Gruppe für Benutzerimport

An dieser Stelle können Sie eine Gruppen-DN hinterlegen. Auf diesem Wege erreichen Sie, dass alle Benutzer, die Mitglied in dieser Gruppe sind (und ausschließlich diese Benutzer), importiert werden.


![](../wizdocpics/gruppeA-DN.png)

Abb. 8 - DN der Benutzergruppe für den Import

Mit der DN *CN=GruppeA,OU=Gruppen,OU=Dortmund,DC=peachit,DC=local* werden die Benutzer (Mitglieder) *„klein"* und *„schwer"* importiert und freigegeben.


![](../wizdocpics/documentsUserA.png)

Abb. 9 - Importierte Benutzerkonten

Hinweis:

Der LDAP-Import löscht keine im System bereits vorhandenen Benutzer. Es wird lediglich der Status (freigegeben, gesperrt usw.) und der Zugang zu den Modulen (Documents oder Archiv) angepasst.  Wenn im System Benutzer vorhanden sind, die z.B. Documentsuser sind und auch weiter bleiben sollen, die aber nicht importiert werden würden, so müssen sie diese Benutzer schützen, indem sie ihnen das Property „noLdapCheck" mit dem Wert „true" hinzufügen. Diese User werden dann im Import und beim Login von der LDAP-Prüfung ausgenommen und bleiben unverändert bestehen.


## Importierten Benutzern automatisch Documents/ Archiv-Zugang gewähren

Sind diese Optionen aktiviert, so wird jedem Benutzer, der importiert wird, automatisch der *Documents*- oder Archivzugang gewährt. Die Angabe einer Gruppe für den Documentszugang bzw. dem Archivzugang kann dann entfallen. Eingaben in diesen Feldern werden beim Speichern  gelöscht und bei der Durchführung des Imports nicht weiter berücksichtigt.


## Gruppe für Documents-Zugang

Geben Sie hier den DN der Gruppe an, deren Mitglieder *Documents-Zugang* erhalten sollen. Sollen alle importierten Benutzer Documentszugang erhalten, kann hier die gleiche Gruppe verwendet werden wie bei *Gruppe für Benutzerimport.*

Benutzer, die den Documentszugang erhalten, müssen importierte und im Durchlauf des Imports freigegebene Benutzer sein. Wenn es also einen alten Benutzer gibt, der Mitglied der Documents-Gruppe ist, der aber nicht mehr importiert werden würde, da sich die Benutzergruppe geändert hat, dann würde diesem Benutzer der Documentszugang entzogen.


## Gruppe für Archivzugang

Geben Sie hier den DN der Gruppe an, deren Mitglieder *Archiv-Zugang* erhalten sollen. Soll dies für alle importierten Benutzer gelten, kann hier die gleiche Gruppe verwendet werden wie bei *Gruppe für Benutzerimport*


## Benutzer aus Untergruppen importieren

Ist diese Option gewählt, werden Benutzer (rekursiv) auch aus Untergruppen importiert, die in der Gruppe für den Benutzerimport Mitglied sind.

Es können damit Benutzerketten für den Import gebildet werden. Gruppe C ist Mitglied bei der Gruppe B und diese ist Mitglied der Gruppe A, die als Gruppe für den Benutzerimport festgelegt wurde. Es werden damit alle Mitglieder der Gruppe A, B und C importiert.

Wenn die Kette in einem Punkt unterbrochen wird, da die Gruppe nicht Mitglied der übergeordneten Gruppe ist, werden entsprechend weniger Benutzer importiert. Daher kann es bei vielen Gruppen sinnvoll sein administrativ alle Untergruppen direkt als Mitglied der obersten Gruppe hinzuzufügen, damit so ein Bruch und eine entsprechend Fehlersuche vermieden werden kann.


![](../wizdocpics/gruppeA.png)

Abb. 10 - Mitglieder der Gruppe A

Gruppe A enthält die User *klein* und *schwer* sowie die *Gruppe B*


![](../wizdocpics/gruppeBC.png)

Abb. 11 - Mitglieder der Gruppen B und C

Gruppe B enthält die User *perona* und *lanz* sowie die *Gruppe C*. Die Gruppe C enthält die User *oppen* und *local*.
Importiert werden alle 6 User aus den Gruppen A, B und C.


![](../wizdocpics/documentsUserABC.png)

Abb. 12 - Importierte Benutzer

Importierte Benutzer Gruppe A >Gruppe B > Gruppe C


## Documents/Archiv-Zugang auch für Untergruppen -Untergruppen als Zugriffsprofile zuweisen

Ist diese Option gewählt, so wird den Benutzern der Documents- oder Archivzugang gewährt, sofern sie zu einer Untergruppe der Documents/Archivgruppe gehören und aus diesen importiert wurden. Damit sich die Option auswirkt muss auch die Option Benutzer aus Untergruppen importieren aktiviert werden.

Ist diese Option gewählt, dann werden den Benutzern auch dann importierte Zugriffsprofile zugewiesen, wenn sie nicht direkt darin Mitglied sind sondern nur in einer im LDAP untergeordneten Gruppe. Die Zuweisung der Zugriffsprofile erfolgt rekursiv.

|  | Gruppe A | Gruppe B | Gruppe C |
| --- | --- | --- | --- |
| Mitglied von |  | Gruppe A | Gruppe A Gruppe B |
| Mitglieder | Gruppe B Gruppe C klein schwer | perona lanz | oppen local |

| klein schwer | lanz perona | local oppen |
| --- | --- | --- |
|  | Gruppe B | Gruppe B |
|  |  | Gruppe C |

Zugriffsprofile User der Gruppe A, User der Gruppe B und User der Gruppe c

Beispiel:
Sei Benutzer oppen Mitglied in der LDAP-Gruppe C (Vertrieb_Team_1). Diese Gruppe ist wiederum Mitglied in der LDAP-Gruppe B (Vertrieb_Gesamt). Beide Gruppen sind jeweils Mitglied in der Gruppe A, die als Gruppe für Gruppenimport verwendet wird. Dann erhält Benutzer oppen in Documents die Zugriffsprofile C (Vertrieb_Team_1) und B (Vertrieb_Gesamt).


## Groß- Kleinschreibung von Benutzernamen ignorieren

Wenn die Option deaktiviert ist, so wird der Username und damit auch das Documents-Login, so wie er im LDAP ausgelesen wird, übernommen. Im anderen Falle wird der Name in Kleinbuchstaben umgewandelt und verwendet.


## Organisationseinheit (OU) für Benutzer

Wenn der Import der Benutzer auf eine OU eingeschränkt werden soll, können Sie hier den DN einer OU angeben, der alle zu importierende Benutzer enthält. Benutzer aus anderen Bereichen werden nicht synchronisiert. Die Angabe der Gruppe für den Benutzerimport kann dann entfallen. Die zu importierenden Benutzer müssen direkt an der OU hängen, dürfen also nicht in einer Gruppe liegen, die sich in der OU befindet. Wird die Option Benutzer aus Untergruppen importieren verwendet so werden auch die Benutzer aus untergeordneten OUs mit importiert, soweit diese direkt an den OUs hängen.

Aus Performance-Gründen ist die Angabe einer Gruppe für den Benutzerimport der Angabe einer OU vorzuziehen und sollte nur verwendet werden, wenn die Anlage und Pflege einer separaten Gruppe im LDAP nicht möglich ist. Werden sowohl die Gruppe als auch die OU angegeben, werden nur Benutzer importiert die in der OU hinterlegt sind UND Mitglied in der Gruppe sind.


## LDAP-Suche ausführen


![](../wizdocpics/ldapsearch_1.png)

Abb. 13 - LDAP Suche testen

In dem Textfeld können Sie einen LDAP-Suchausdruck absetzen, um z.B. zu überprüfen, ob eine Gruppe gefunden werden müsste oder nicht. Sie müssen mit der Bildung von LDAP-Suchausdrücken vertraut sein, damit Sie die Funktionalität sinnvoll benutzen können! Die Summe der gefundenen Einträge sowie die ersten 10 Treffer werden dann in einer Kurzform angezeigt.