---
title: "Favicon-Konfiguration"
source: "https://otris.software/documents/howto/design/favicon.html"
---

# Favicon-Konfiguration

Seit der DOCUMENTS Version `5.0i HF3` wird für jeden Mandanten ein
[Favicon](https://de.wikipedia.org/wiki/Favicon) generiert.
Standardmäßig wird hierzu der erste Buchstabe des Mandanten-Namens und
die im Mandanten definierte *Highlight-Farbe* (`skinSignalColor`) verwendet.


Abb. 1 - Beispiel für den Relations-Mandanten


## Anpassung

Über eine *Globalen Eigenschaft* (im Monitoring) kann die Erzeugung
des **Favicons** angepasst werden. Die Eigenschaft muss dazu mit dem Namen
und dem Typ `faviconConfig` angelegt werden.


Abb. 2 - Globale Eigenschaft: faviconConfig


## Konfiguration

Die folgende Konfiguration listet alle verfügbaren Einstellungsoptionen und ihre Standardwerte auf. In Ihrer individuellen Konfiguration müssen nur die Werte gesetzt werden, die Sie anpassen möchten.


```json
{
  // Text
  "text": "<Erster Buchstabe des Mandanten-Namen>",
  // Hintergrundfarbe des Icon
  "backgroundColor": "<skin signal color>",
  // Schrifteinstellungen
  "fontSize": 42,
  "fontFamily": "Roboto, Arial",
  "fontWeight": "bold",
  // Textfarbe
  "textColor": "#ffffff",
  // Textposition (0-100)
  "textPosX": 48,
  "textPosY": 58,
  "textBaseline": "middle",
  "textAnchor": "middle",
  // Größe des Icons
  "size": 256,
  // SVG viewBox attribute
  "viewBox": "0 0 67.733 67.733",
  // Pfadangabe für die "Form" des Icons
  "pathD":  "M....0Z"
}
```

{
  // Text
  "text": "<Erster Buchstabe des Mandanten-Namen>",
  // Hintergrundfarbe des Icon
  "backgroundColor": "<skin signal color>",
  // Schrifteinstellungen
  "fontSize": 42,
  "fontFamily": "Roboto, Arial",
  "fontWeight": "bold",
  // Textfarbe
  "textColor": "#ffffff",
  // Textposition (0-100)
  "textPosX": 48,
  "textPosY": 58,
  "textBaseline": "middle",
  "textAnchor": "middle",
  // Größe des Icons
  "size": 256,
  // SVG viewBox attribute
  "viewBox": "0 0 67.733 67.733",
  // Pfadangabe für die "Form" des Icons
  "pathD":  "M....0Z"
}
## Eigenes SVG

Statt der Konfiguration kann auch eine eigene XML basierte
Vektorgrafik ([SVG](https://de.wikipedia.org/wiki/Scalable_Vector_Graphics))
genutzt werden. Die XML Zeichenkette muss dabei zwingend mit `<svg` beginnen.


```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path fill="gold" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
</svg>
```

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path fill="gold" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
</svg>

Abb. 3 - Beispiel für ein eigenes SVG (Stern)