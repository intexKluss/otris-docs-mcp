---
title: "Checkbox-Group"
source: "https://otris.software/documents/manuals/books/alternative-rendering/checkboxGroup.html"
---

# Checkbox-Group

Die Checkbox-Group ermöglicht es eine angepasste Version von Checkbox-Elementen zu erzeugen.

| Name der Felddarstellung | Documents-Version | Feldtypen |
| --- | --- | --- |
| checkbox_group | ab 5.0h-hf2 | Doppelauswahlliste |


![Checkbox-Group](assets/Checkbox_group_horizontal.png)

Abb. 13 - Checkbox-Group

Im Standard werden die Checkbox Einträge nebeneinander dargestellt. Sollen diese untereinander dargestellt werden, muss das Attribut `allignVertical` gesetzt werden.


```JSON
{name: "checkbox_group", params: {allignVertical: true}}
```


![Checkbox-Group vertikal](assets/Checkbox_group_vertical.png)

Abb. 14 - Checkbox-Group vertikal

Es ist ebenfalls möglich die Einträge in Spalten darzustellen. Hierzu muss das Attribut `columns` gesetzt werden. Diesem kann eine Zahl von 1 bis 10 übergeben werden.


```JSON
{name: "checkbox_group", params: {columns: 3}}
```