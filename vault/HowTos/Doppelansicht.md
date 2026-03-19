---
title: "Doppelansicht"
source: "https://otris.software/documents/howto/common/double-view.html"
---

# Doppelansicht

Mit der Doppelansicht ist es in Documents möglich alle Dokumente einer Mappe anzuzeigen und zu navigieren, während man gleichzeitig in den Registern arbeitet.
Hierzu muss global oder am Mappentyp die Eigenschaft `addDoubleViewButton=true` gesetzt werden. Neben den Mappenaktionen wird dann ein Button **Doppelansicht öffnen**  zum auf- und einklappen der Doppelansicht angezeigt.


Abb. 1 - Doppelansicht

Die Zustände und Größen des Abeitbereichs, d.h. die Breite des Ordnerbaums, der Listen und des Mappenframes, werden je nach Aufklappzustand abgespeichert. So kann man z.B. bei eingeschalter Doppelansicht mit eingeklappten Baum und kleinerer Liste die Dokumente besser sehen. Umgekehrt kann man bei eingeklappter Doppelansicht, den Ordnerbaum navigieren und die Liste oder den Mappenframe breiter machen um ihn besser zu sehen.


## Doppelansicht konfigurieren


Abb. 2 - Doppelansicht neben Mappe


### Doppelansicht neben Mappe

Standardmäßig wird die Doppelansicht neben dem Inhalt des Registers angezeigt. Sie kann aber auch direkt neben dem Mappenheader angezeigt werden mit der Eigenschaft `doubleViewBesidesHeader=true` am Mappentypen oder global.


### Doppelansicht automatisch anzeigen

Mit der Eigenschaft `autoOpenDoubleView=true` global oder am Mappentypen, wird die Doppelansicht immer beim initialen Anzeigen der Mappe geöffnet, wenn Dokumente vorhanden sind.


### Verhalten von autoOpenDoubleView

Schließt man die Doppelansicht, wird dieser Zustand für diesen Mappentypen gespeichert, d.h. wenn eine Mappe eines anderen Mappentypen geöffnet wird, wird hier die Doppelansicht wieder angezeigt, insofern *autoOpenDoubleView* gesetzt ist.

Dieses Verhalten lässt sich mit der globalen Eigenschaft doubleViewConfig ändern:


```javascript
doubleViewConfig = {
    saveState: "<global>|<fileType>"
}
```

doubleViewConfig = {
    saveState: "<global>|<fileType>"
}Wenn in doubleViewConfig für *saveState* der Wert `"global"` gesetzt ist, wird der Aufklappzustand der Doppelansicht für alle Mappentypen gespeichert. Das heißt dass sobald ein Benutzer die Doppelansicht einklappt, die Doppelansicht bei der nächsten angezeigten Mappe ebenfalls eingeklappt ist.