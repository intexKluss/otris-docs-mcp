---
title: "Singlegadget im Fenster"
source: "https://otris.software/documents/howto/gadgets/quickviewGadget.html"
---

# Singlegadget im Fenster


Abb. 1 - Singlegadget im Fenster

Es ist möglich Documents direkt in einem Gadget zu starten.
Hierzu muss im Manager links im Baum unter "Documents" -> "Globale Eigenschaften" eine Eigenschaft hinterlegt werden:


```javascript
Name: ChartGadget
Typ:  qvGadget
Wert: { gadgetScript: "GadgetSample_ChartGadget", gadgetAction: "showChart" }
```

Name: ChartGadget
Typ:  qvGadget
Wert: { gadgetScript: "GadgetSample_ChartGadget", gadgetAction: "showChart" }Dieses Gaget kann dann direkt über einen Quickviewlink angezeigt werden:


```javascript
http://localhost:8080/documents/jsp/qv?pri=dopaag&qvg=ChartGadget
```

http://localhost:8080/documents/jsp/qv?pri=dopaag&qvg=ChartGadgetDer Benutzer ist während der Anzeige des Gadgets angemeldet.
Wenn der Benutzer beim schließen des Fensters automatisch abgemeldet werden soll, dann kann man unter Documents -> Einstellungen -> Eigenschaften die Eigenschaft: `qvGadgetAutoLogout: true` hinterlegen.

Wenn der Benutzer nur beim Schließen eines bestimmten Gadgets ausgeloggt werden soll, kann `gadgetConfig` der Parameter `autoLogout: true` übergeben werden.

Beispiel:


```javascript
{ gadgetScript: "GadgetSample_ChartGadget", gadgetAction: "showChart", autoLogout: true }
```

{ gadgetScript: "GadgetSample_ChartGadget", gadgetAction: "showChart", autoLogout: true }