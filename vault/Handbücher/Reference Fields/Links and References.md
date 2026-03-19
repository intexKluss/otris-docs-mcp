---
title: "Einleitung"
source: "https://otris.software/documents/manuals/books/reference-fields/index.html"
---

# Einleitung

Referenzfelder und Linkregister bieten eine Möglichkeit, Mappen untereinander zu referenzieren.
Das folgende Beispiel zeigt ein vereinfachtes System in dem Referenzfelder und Linkregister verwendet werden. Dieses Beispiel wird auch in weiteren Kapiteln verwendet.


## Beispiel Firma und Rechnung

In diesem Beispiel gibt es Kunden und Rechnungen. Eine Rechnung kann genau einem Kunden, dem Debitor, ausgestellt werden. Einem Kunden können aber mehrere Rechnungen ausgestellt werden. Es werden die Mappentypen `firma` und `rechnung` verwendet. Zu jedem Kunden gibt es eine Mappe vom Typ `firma`.


### Referenzfelder

Um aus einer Mappe vom Typ `rechnung` die entsprechende Mappe des Debitors (Typ `firma`) zu referenzieren, kann ein Referenzfeld verwendet werden. Das folgende Bild zeigt ein *einfaches* und ein *erweitertes Referenzfeld*. In beiden wird die Mappe des Kunden **Hein & Stein Beratungen** referenziert. Nur der angezeigte Wert ist unterschiedlich.


![reference-field](./img/intro-ref.png)

Abb. 1 - Einfaches und Erweitertes Referenzfeld im Web-Client


### Linkregister

Um an einer Mappe eines Kunden alle zugehörigen Rechnungen aufzulisten, können Linkregister verwendet werden. Im folgenden Bild ist über ein Linkregister zu sehen, dass dem Kunden **Hein & Stein Beratungen** zwei Rechnungen ausgestellt wurden.


![linkregister](./img/intro-link.png)

Abb. 2 - Linkregister mit zwei Einträgen im Web-Client