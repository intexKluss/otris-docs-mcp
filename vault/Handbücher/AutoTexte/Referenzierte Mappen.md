---
title: "Referenzierte Mappen"
source: "https://otris.software/documents/manuals/books/autotexte/FieldReferences.html"
---

# Referenzierte Mappen

Der Wert eines anderen Mappenfeldes innerhalb derselben Mappe wird referenziert, indem der Bezeichner des Feldes in der bekannten Notation aufgerufen wird, wie in den Beispielen oben (`%plz%, %ort%`) bereits demonstriert wurde. Diese Notation beschränkt sich jedoch auf Felder des aktuellen Mappentyps. Werden hingegen Werte benötigt, die in Feldern anderer Mappen gehalten werden, muss zunächst einmal eine Verknüpfung zwischen diesen beiden Mappen hergestellt werden. Diese Verknüpfung wird über ein Referenzfeld erreicht, wie in der unten stehenden Abbildung gezeigt wird. Hier sind zwei Mappen abgebildet, die durch ein Referenzfeld miteinander verknüpft sind. Die obere Mappe ist vom Typ `mitarbeiter` und besitzt ein Referenzfeld `Vertreter`, das eine eindeutige Verbindung mit der zugehörigen Mappe herstellt. Einige Informationen zum Vertreter, zum Beispiel die E-Mail-Adresse, sind nur auf der referenzierten Mappe vorhanden. Um diese Information auch auf der ersten Mappe verfügbar zu machen, wird ein `reference`-AutoText benötigt.

Die E-Mail-Adresse des Vertreters wird somit folgendermaßen über einen AutoText erreicht:


```javascript
%ref.Vertreter.EMail%
```

%ref.Vertreter.EMail%Dieser AutoText weist drei Bestandteile auf:

- Mit dem Begriff ref wird ein Signal gesendet, welches das System anweist, die folgenden Bestandteile als reference-AutoText zu interpretieren.
- Das Referenzfeld Vertreter weist das System an, den Wert auf der Mappe zu suchen, die durch den Wert des Referenzfeldes identifiziert werden kann.
- Abschließend wird der Wert des Feldes EMail auf der referenzierten Mappe ausgelesen und zurückgegeben.


![Referenzbeispiel](assets/reference.jpg)

Abb. 1 - Referenzbeispiel