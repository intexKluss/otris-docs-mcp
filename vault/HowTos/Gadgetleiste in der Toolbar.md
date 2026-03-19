---
title: "Gadgetleiste unter der Toolbar hinzufügen"
source: "https://otris.software/documents/howto/toolbar-settings/toolbarGadgetRow.html"
---

# Gadgetleiste unter der Toolbar hinzufügen

In Documents ist es möglichen unter der Toolbar eine weitere Zeile mit Gadgetbuttons hinzuzufügen.


### Beispiel mit zusätzlicher Gadgetzeile


Abb. 1 - Toolbar mit Gadgetleiste

Um die Gadgetzeile anzuzeigen, muss die *globale Eigenschaft***menubarGadgetConfigs** definiert sein.

Bsp:


```javascript
menubarGadgetConfigs =
[
	{
		gadgetScript: "GadgetSample_HtmlGadget",
		gadgetAction: "showHtmlText",
		gadgetDialog: false,
		gadgetIcon: "entypo:adjust;left:-3px",
		tooltip: "sun;en:Sun"
	},
	{
		gadgetScript: "GadgetSample_HtmlGadget",
		gadgetAction: "showHtmlText",
		gadgetDialog: true,
		gadgetIcon: "entypo:air;color:red;font-size: 39px;",
		tooltip: "de:Welle;en:Wave"
	},
	{
		gadgetScript: "GadgetSample_HtmlGadget",
		gadgetAction: "showHtmlText",
		gadgetDialog: true,
		gadgetIcon: "entypo:bell;left: 1px;"
	},
	...
]
```

menubarGadgetConfigs =
[
	{
		gadgetScript: "GadgetSample_HtmlGadget",
		gadgetAction: "showHtmlText",
		gadgetDialog: false,
		gadgetIcon: "entypo:adjust;left:-3px",
		tooltip: "sun;en:Sun"
	},
	{
		gadgetScript: "GadgetSample_HtmlGadget",
		gadgetAction: "showHtmlText",
		gadgetDialog: true,
		gadgetIcon: "entypo:air;color:red;font-size: 39px;",
		tooltip: "de:Welle;en:Wave"
	},
	{
		gadgetScript: "GadgetSample_HtmlGadget",
		gadgetAction: "showHtmlText",
		gadgetDialog: true,
		gadgetIcon: "entypo:bell;left: 1px;"
	},
	...
]Mit *gadgetDialog=false* kann man die erzeugten Gadgets beim Öffnen im Ordnerframe anzeigen. Ansonsten werden diese immer im Dialog angezeigt.


Abb. 2 - Toolbargadget im Ordnerframe

Ausführliche Programmierbeispiele und Hilfen zur Implementierung von Gadgets entnehmen Sie bitte der Gadget-Dokumentation.