---
title: "Alternative Darstellung von Feldern"
source: "https://otris.software/documents/manuals/books/alternative-rendering/alternativeRendering.html"
---

# Alternative Darstellung von Feldern

**Since**: `5.0h`


## Inhalt des Dokumentes

In Documents werden viele verschiedene Feldtypen angeboten. Diese sind in ihrer Funktionsweise und Bedienung darauf angepasst möglichst viele Anwendungsfälle abzudecken.

In manchen Fällen ist es jedoch erwünscht, nicht die Standard-Felder von Documents zu verwenden, zum Beispiel um bestimmte Informationen besser herauszustellen, oder um eine spezielle Funktion des Feldes zu realisieren.

Aus diesem Grund wurde mit der Version `Documents 5.0h` eine Möglichkeit geschaffen, die Standard-Felder mit einer anderen Lösung auszutauschen. Hierzu liefert Documents eine auswahl bereits realisierter Lösungen aus und bietet eine Schnittstelle um eigene Feld-Lösungen zu implementieren.

In diesem HowTo wird Ihnen gezeigt, wie sich diese Änderung beispielhaft auswirkt, wie Felder entsprechend konfiguriert werden, welche Felder bereits ausgeliefert werden und wie Sie eigene Feld-Lösungen implementieren können.


## Beispiel einer Mappe mit Standard-Feldern und ersetzen Feldern

In diesem Beispiel wird zuerst ein Feld mit klassischer Feld-Darstellung gezeigt.


![Standard-Felddarstellung](assets/NormalRendering.png)

Abb. 1 - Standard-Felddarstellung

Anschließend sind die gleichen Felder mit einer Alternativer Darstellung zu sehen.


![Alternative-Felddarstellung](assets/AlternativesRendering.png)

Abb. 2 - Alternative-Felddarstellung


## Konfiguration

Damit ein Feld eine alternative Darstellung bekommen kann, muss die Eigenschaft `alternativeRendering` gesetzt werden. Hierzu gibt es zwei verschiedene Möglichkeiten ein Feld mit dieser Eigenschaft zu konfigurieren.


### Einfache Konfiguration

Im einfachsten Fall wird als Wert der Eigenschaft `alternativeRendering` der Name der erwünschten alternativen Darstellung verwendet. Dies sollte für die Meisten Anwendungsfälle ausreichend sein.


### Erweiterte Konfiguration

Die erweiterte Konfiguration ist sinnvoll, wenn einem Feld weitere Parameter übergeben werden sollen. Dies kann zum Beispiel ein Farbwert sein, um ein Element des Feldes andersfarbig darzusellen oder auch ein Flag um ein bestimmtes Verhalten zu konfigurieren.

Für die erweiterte Konfiguration wird anstelle des einfachen Namens ein JSON übergeben. Das JSON besteht aus dem Schlüssel `"name"`, welcher als Wert den Namen der gewünschten alternativen Darstellung enthält und dem Schlüssel `"params"`, welcher ein Object enhält durch welches eingene Imformationen übergeben werden können.


```js
{
    "name" : "myAlternativeRenderingField",
    "params" : {
        "color" : "green",
        "specialMode" : true
    }
}
```

{
    "name" : "myAlternativeRenderingField",
    "params" : {
        "color" : "green",
        "specialMode" : true
    }
}
## Bestehende Lösungen

Einige alternative Feld-Darstellungen sind bereits in Documents umgestzt. Von einfachen Darstellungsänderungen wie in der Checkbox-Lösung bishin zu Feldern mit komplett eigener Funktionalität, die nur auf die zugrundeliegende Datenstruktur basieren wie die Referenzfeldliste gibt es in den entsprechenden Unterkapiteln zu finden.