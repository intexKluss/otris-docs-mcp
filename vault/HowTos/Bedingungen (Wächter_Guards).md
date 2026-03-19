---
title: "Bedingungen (Wächter/Guards)"
source: "https://otris.software/documents/howto/common/guards.html"
---

# Bedingungen (Wächter/Guards)

Ein Modellierungselement für die Realisierung von Workflows ist die Entscheidung (Decision). Das Element der Entscheidung erlaubt den weiteren Ablauf des Workflows von Bedingungen abhängig zu machen. Die Bedingungen sind ihrerseits in der Regel abhängig von Feldwerten der Mappe.


Abb. 1 - Decision

Die Bedingung wird als Wächter/Guard am Kontrollfluss spezifiziert. Eine Bedingung kann aus mehreren Einzelbedingungen bestehen, die entweder verODERt (OR) oder verUNDet (AND) werden können.

Hinweis: Eine Kombination von AND und OR ist nicht erlaubt!

Aufbau einer Einzelbedingung:

Der Ausdruck einer Einzelbedingung besteht immer aus drei Teilen:

**Wert A Vergleichsoperator Wert B**

Wert A und Wert B können Feldnamen (Feldwerte der Mappe) oder konstante Ausdrücke sein. Konstante Ausdrücke sollten in Hochkommata eingeschlossen werden. Hierbei sind sowohl einzelne als auch doppelte Hochkommata erlaubt:

Beispiele

Guard: Freigegeben="Ja">

Freigegeben ist hierbei ein Mappenfeld. Die Bedingung ist erfüllt, wenn das Feld `Freigegeben` >den Wert `Ja` aufweist.

Guard: `Erledigt="0"`

Erledigt ist hier ein boolsches Feld. Die Bedingung ist erfüllt, wenn der Wert des Feldes negativ ist (false).

Guard: `Bestelldatum < "%currentDate-3%" AND Versendet="Nein"`

Bestelldatum und Versendet sind Mappenfelder. Die Bedingung ist erfüllt, wenn das Bestelldatum länger als 3 Tage zurückliegt und noch keine Versendung stattgefunden hat.

Guard: `Feldname != ""` (doppeltes Hochkomma ohne Leerzeichen)

Feldname steht für ein Mappenfeld. Die Bedingung ist erfüllt, wenn dieses Feld einen beliebigen Inhalt hat, also nicht leer ist (`!=` bedeutet ungleich).

Ein besonderes Schlüsselwort ist die Bedingung `ELSE`. Wenn keine Bedingung eines von der Entscheidung weggehenden Kontrollflusses erfüllt ist, wird der ELSE-Schritt ausgeführt. Entscheidungen müssen so spezifiziert sein, dass immer eine von den Bedingungen erfüllt sein muss, denn anderenfalls bleibt der Workflow an dieser Stelle stehen. Aus diesem Grunde ist grundsätzlich zu empfehlen, einen ELSE-Schritt einzufügen, da dieser auf jeden Fall angesteuert wird, wenn von den definierten Bedingungen sonst keine erfüllt ist.

Werden Feldwerte in der Bedingung referenziert, sind die folgenden Vergleichsoperatoren in Abhängigkeit des Datentypen des Feldes zulässig:

| Datentyp | = | != | < | <= | > | >= | ~ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| String | x | x |  |  |  |  | x |
| Text | x | x |  |  |  |  | x |
| Aufzählung | x | x |  |  |  |  |  |
| Numerisch | x | x | x | x | x | x |  |
| Bool/Checkbox | x | x |  |  |  |  |  |
| Datum/Zeitstempel | x | x | x | x | x | x |  |

Der Vergleichsoperator `~` hat die Bedeutung *„enthält“*.

Damit ein Vergleich entsprechend dem Datentyp eines in der Teilbedingung verwendeten Feldes erfolgen kann, muss der Vergleichswert ebenfalls in diesen Datentyp konvertiert werden. Ist dies nicht möglich, wenn ein *„String“*-Vergleich stattfindet.