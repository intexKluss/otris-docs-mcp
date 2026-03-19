---
title: "Autovervollständigung mit Aufzählungswerten"
source: "https://otris.software/documents/manuals/books/alternative-rendering/autocompleteEnum.html"
---

# Autovervollständigung mit Aufzählungswerten

Die Autovervollständigung an einem Enum-Feld (Aufzählungsfeld) ermöglicht eine einfache Konfiguration einer Autovervollständigung, die ihre Werte aus dem Aufzählungswerten des Feldes bezieht. Diese können auch aus einem runscript am Feld kommen.

| Name der Felddarstellung | Documents-Version | Feldtypen |
| --- | --- | --- |
| autocompleteEnum | ab 5.0i hf5 | ENUM |


![Vorschlagswerte](assets/Autocomplete_enum_rendered.png)

Abb. 15 - Vorschlagswerte

Um die Anzahl der dargestellten Autovervollständigungswerte zu begrenzen, kann der Parameter `maxResults` übergeben werden werden.


```JSON
{name: "autocompleteEnum", params: {maxResults: 15}}
```