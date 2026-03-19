---
title: "GACLs mit expliziten Verbotseinträgen"
source: "https://otris.software/documents/manuals/books/acl-reference/banentries.html"
---

# GACLs mit expliziten Verbotseinträgen

Ab der DOCUMENTS Version 5.0a können GACL um Verbotseinträge für einzelne User oder Profile erweitert werden. Dies ist sowohl im GACL-Modus als auch im Mischbetrieb möglich. Voraussetzung ist, dass der Klassenname des Mappenklassenschutzes *GACL* lautet. Verbotseinträge haben den Zweck:

- Einzelnen Mitgliedern einer positiv verrechteten Gruppe das Recht an einer Mappe zu entziehen
- Benutzern, die sich sowohl in einer positiv verrechteten als auch in einer negativ verrechteten Gruppe befinden, das Recht an einer Mappe zu entziehen

Verbotseinträge haben in jedem Fall Vorrang vor Positiveinträgen. Befindet sich in der Auswahlliste sowohl ein Positiveintrag für eine Person/Gruppe als auch ein Negativeintrag für selbige Person/Gruppe, erhält der Verbotseintrag Vorrang.

Zur Veranschaulichung finden Sie in folgender Tabelle drei Beispielszenarien. Alle anderen Szenarien und Kombinationen funktionieren nicht!

| GACL - Modus | Einsatzszenario | Wirkung |
| --- | --- | --- |
| Mischbetrieb | Eva Frisch hat das Zugriffsprofil “Service”. Dieses berechtigt den Zugriff auf eine Mappe. Man richtet jetzt für Eva Frisch einen expliziten Verbotseintrag für diese Mappe ein. | Eva Frisch kann diese Mappe nicht mehr sehen, obwohl sie das Zugriffsprofil “Service” hat. Der Verbotseintrag setzt sich gegenüber dem Positivrecht durch. So können einzelne Personen im Nachhinein aus einer Berechtigungsmenge entfernt werden. |
| Mischbetrieb | Eva Frisch hat gleichzeitig das persönliche Recht an einer Mappe und es besteht ein Verbotseintrag in Bezug auf ihre Person. | Der negative Verbotseintrag setzt sich gegenüber dem Positivrecht durch und Eva Frisch kann die Mappe nicht sehen. Dies ist zwar möglich, aber nicht sinnvoll. – Einfacher ist es, ihr das Positivrecht zu entziehen. Dies entspricht dem Prinzip der Positivverrechtung. |
| GACL / Mischbetrieb | Eva Frisch hat über das Zugriffsprofil “Administration” ein Recht an einer Mappe. Über das Zugriffsprofil Service, zu dem sie ebenfalls gehört, besteht ein Verbotseintrag. | Eva Frisch kann die Mappe nicht sehen, da der negative Verbotseintrag sich gegenüber dem Positivrecht durchsetzt. |

Um Verbotseinträge anzulegen, sind folgende Einstellungen notwendig:

1. Fügen Sie am Mappentypen unter Eigenschaften die neue Eigenschaft „ACLWithDenial“ hinzu; Mögliche Werte: 1 oder true zur Aktivierung, false zur Deaktivierung. Standardwert ist 0 (vgl. Abb. 4).


![Hinzufügen der neuen Eigenschaft ACLWithDenial am Mappentypen](./img/image7.png)

Abb. 6 - Hinzufügen der neuen Eigenschaft ACLWithDenial am Mappentypen

1. Ergänzen Sie die Aufzählungswerte um Autotext mit der Endung .deny (Beispiel in Abb. 6 - Hinzufügen der neuen Eigenschaft ACLWithDenial am Mappentypen). Nach Speicherung der Änderungen am Mappentypen werden die durch den Autotext definierten Werte in der Doppelauswahlliste des Web-Clients mit dem voranstehenden Symbol [-] gekennzeichnet.


![Hinzufügen eines Autotexts mit der Endung „.deny“ als Verbotseintrag im Mischbetrieb](./img/image8.png)

Abb. 7 - Hinzufügen eines Autotexts mit der Endung „.deny“ als Verbotseintrag im Mischbetrieb

Mit unterschiedlichen Autotexten lässt sich die Doppelauswahlliste im Webclient abhängig vom Anwendungsfall konfigurieren. Beispiele:

Autotext %loginFullname.deny%: Sämtliche Benutzer werden mit Vor- und Zunamen als Verbotseintrag in der Doppelauswahlliste angezeigt. Einzelne Benutzer können ausgewählt werden, um für sie den Zugriff auf die jeweilige Mappe zu unterbinden.

Autotext %accessProfileNL.deny%: Sämtliche Profile werden als Verbotseintrag in der Doppelauswahlliste angezeigt. Einzelne Profile können ausgewählt werden, um den Zugriff für die Benutzer zu unterbinden, denen das jeweilige Profil zugeordnet wurde.

Autotext %loginFullname.AccessProfile.BEISPIELPROFIL.deny%*:* Die Benutzer, die dem BEISPIELPROFIL zugeordnet sind, werden mit Vor- und Zunamen als Verbotseinträge angezeigt. Diese Namen können ausgewählt werden, um für die jeweiligen Benutzer den Zugriff auf die Mappe zu unterbinden.

Die Funktionalität wird für aktive Mappen und EAS/EDA unterstützt. Mit dem EBIS-Store funktioniert sie nicht.