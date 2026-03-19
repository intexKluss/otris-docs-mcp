---
title: "Gadgets in aufklappbarer Zeile darstellen"
source: "https://otris.software/documents/howto/gadgets/gadgets-in-details-script.html"
---

# Gadgets in aufklappbarer Zeile darstellen

Bei [Aufklappbare Zeilen im Ordner](../list/fileDetails.html) wird erläutert wie man ein fileDetailsScript einbindet, um Zusatzinformationen im Ordner anzuzeigen. Hier ist es auch möglich ein oder mehrere Gadgets einzublenden.
Dazu muss HTML in folgender Form zurückgeben werden:


```html
<div class="gadgetField" id="gadgetView_<gadget-Id>" data-gadget-config="{ gadgetScript: \'<Gadget-Script>\', gadgetAction: \'<Gadget-Action>\', gadgetId:\'<Gadget-Id>\' }"></div>
```

<div class="gadgetField" id="gadgetView_<gadget-Id>" data-gadget-config="{ gadgetScript: \'<Gadget-Script>\', gadgetAction: \'<Gadget-Action>\', gadgetId:\'<Gadget-Id>\' }"></div>Beim Aufklappen der Zeile wird für jedes Element mit Class "gadgetField" die entsprechende Gadget-Konfiguration ausgeführt.
Um mehrere Gadgets in einer Reihe anzuzeigen, kann auf diese z.B. der Style "display: inline-block" angewendet werden.


## Beispiel detailsScript für mehrere Gadgets in aufklappbarer Zeile:


```javascript
var gadget1 = '<div style="display:inline-block;vertical-align:top;height: 80px;" class="gadgetField" id="gadgetView_detailGadget1" data-gadget-config="{ gadgetScript: \'GadgetSample_HtmlGadget\', gadgetAction: \'showHtmlText\', gadgetId:\'detailGadget1\' }"></div>',
	gadget2 = '<div style="display:inline-block;vertical-align:top;;height: 80px;" class="gadgetField" id="gadgetView_detailGadget2" data-gadget-config="{ gadgetScript: \'GadgetSample_HtmlGadget\', gadgetAction: \'showHtmlText2\', gadgetId:\'detailGadget2\' }"></div>',
	html = gadget1 + gadget2;

context.returnType = "html";
return html;
```

var gadget1 = '<div style="display:inline-block;vertical-align:top;height: 80px;" class="gadgetField" id="gadgetView_detailGadget1" data-gadget-config="{ gadgetScript: \'GadgetSample_HtmlGadget\', gadgetAction: \'showHtmlText\', gadgetId:\'detailGadget1\' }"></div>',
	gadget2 = '<div style="display:inline-block;vertical-align:top;;height: 80px;" class="gadgetField" id="gadgetView_detailGadget2" data-gadget-config="{ gadgetScript: \'GadgetSample_HtmlGadget\', gadgetAction: \'showHtmlText2\', gadgetId:\'detailGadget2\' }"></div>',
	html = gadget1 + gadget2;

context.returnType = "html";
return html;Download: [gadget-fields.js](../gadgets/gadget-fields.js)