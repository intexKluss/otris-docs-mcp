---
title: "Veränderung von Tooltips auf Mappenfeldern"
source: "https://otris.software/documents/howto/files/tooltip.html"
---

# Veränderung von Tooltips auf Mappenfeldern


## Inhalt des Dokumentes

Mit der Version `Documents 5.0h` ist es nun möglich, das Verhalten von Tooltips auf Feldern mit Eigenschaften anzupassen.

Hierzu ist die Eigenschaft `tooltipSettings` vorgesehen, der eine JSON-Konfiguration mitgeben wird, durch die verschiedene Einstellungen getroffen werden kann.

Die Eigenschaft kann auf globaler Ebene, Mappen- und Feldebene gesetzt werden, wobei jedoch Feld-Einstellungen vor Mappen-Einstellungen und Mappen-Einstellungen vor globalen Einstellungen gezogen werden.

Ebenfalls hinzu gekommen ist die Eigenschaft `tooltipAlwaysVisible`. Diese sorgt dafür, dass der Tooltip auch im Lesemodus angezeigt wird und nicht deaktivierbar ist.


## Konfiguration

Die Konfiguration wird als JSON durchgeführt. Der Aufbau sieht wie folgt aus:


```JSON
{
"event":"hover",
"tooltipElement":"label",
"iconActive":false
}
```


### Mögliche Einstellungen

Folgende Einstellungen können hierzu verwendet werden:

| Einstellung | Wert | Auswirkung | Standardwert |
| --- | --- | --- | --- |
| event | hover | Der Tooltip wird angezeigt, sobald über das tooltipElement gehovert wird. | hover |
| event | click | Der Tooltip wird angezeigt, sobald auf das tooltipElement geklickt wird. | hover |
| tooltipElement | label | Der Tooltip wird angezeigt, sofern das event auf dem Label ausgeführt wird. | label |
| tooltipElement | icon | Der Tooltip wird angezeigt, sofern das event auf dem icon neben dem Tooltip ausgeführt wird. | label |
| iconActive | true | Dem Label wird ein zusätzliches Icon hinzugefügt, sofern es einen Tooltip hat. | false |
| icon | eigener Wert | Mit dieser Einstellung kann das Verwendete Icon verändert werden. Der Aufbau des Wertes kann aus dem Icon-HowTo nachgesehen werden. | mdi:md-help-circle-outline |
| iconColor | CSS-Farbwert | Die Farbe des Icons kann verändert werden. | false |
| iconActiveAlwaysEnabled | true | Entspricht iconActive, gilt aber nur für Felder, die die Eigenschaft TooltipAlwaysVisible aktiv haben. | false |
| iconAlwaysEnabled | eigener Wert | Entspricht icon, gilt aber nur für Felder, die die Eigenschaft TooltipAlwaysVisible aktiv haben. | mdi:md-help-circle-outline |
| iconColorAlwaysEnabled | Entspricht iconColor, gilt aber nur für Felder, die die Eigenschaft TooltipAlwaysVisible aktiv haben. | false |  |