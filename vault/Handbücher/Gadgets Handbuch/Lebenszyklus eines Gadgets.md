---
title: "Lebenszyklus eines Gadgets"
source: "https://otris.software/documents/manuals/books/gadget/basic-concepts/lifecycle.html"
---

# Lebenszyklus eines Gadgets


![Übersicht über den Lebenszyklus eines Gadgets.](../assets/img/lebenszyklus.png)

Abb. 4 - Übersicht über den Lebenszyklus eines Gadgets

- Die Ausführung eines Gadgets beginnt immer mit der Festlegung der GadgetKonfiguration.
- Anhand der Gadget-Konfiguration erfolgt dann der eigentliche Aufruf des Gadgets durch das System.
- Während der Ausführung des Gadgets kann auf Informationen und Funktionen des Gadget-Kontexts zugegriffen werden.
- Wurde das Gadget ausgeführt und liefert eine Antwort zurück, wird dieses angezeigt. Während der Anzeige des Gadgets stehen nun die Informationen und Funktionen des Documents-Kontexts zur Verfügung. Der serverseitige Gadget-Kontext ist hier nicht mehr erreichbar.
- Das angezeigte Gadget kann nun z.B. mithilfe von Gadget-Action-Buttons einen erneuten Gadget-Aufruf starten.