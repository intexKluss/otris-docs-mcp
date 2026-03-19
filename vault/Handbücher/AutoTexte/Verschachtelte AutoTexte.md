---
title: "Verschachtelte AutoTexte"
source: "https://otris.software/documents/manuals/books/autotexte/Nested.html"
---

# Verschachtelte AutoTexte

Viele Informationen können nicht direkt über einen einzigen AutoText
erreicht werden, insbesondere, wenn über verschiedene Mappen verzweigt
werden muss oder wenn der Weg über einen Vorgesetzten erfolgt. In diesen
Fällen müssen AutoTexte zwangsläufig geschachtelt werden. Dieses
Vorgehen wird bis zu einer Verschachtelungstiefe = 10 unterstützt. Ein
solcher zusammengesetzter AutoText kann also insgesamt 10 Punkte
innerhalb der Notation des Terms aufweisen.

**Beispiel**

In einem Aufzählungsfeld soll eine automatisch erzeugte Liste jeweils
alle Benutzer zur Auswahl bereitstellen, die in der gleichen
Organisation gruppiert sind wie der aktuelle Benutzer. Hierbei werden
zwei AutoTexte benötigt, die ineinander geschachtelt werden.
Zunächst liefert `%userPartner.Partner-Name%` eine Aufzählung aller
Benutzer aus der Organisation *Partner-Name*. Die Organisation des
aktuellen Benutzers wird durch den AutoText
`%currentUser.fromPartner%` ermittelt.

Die benötigte Schachtelung erfolgt so, dass die Organisation des
aktuellen Benutzers als Partner-Name in den anderen AutoText
eingesetzt wird. Somit wird ein Filter für die Liste gesetzt und es
werden nur Benutzernamen angezeigt, die sich ebenfalls in der gleichen
Organisation befinden. Der verschachtelte AutoText hat damit
folgende Form:

`%userPartner.currentUser.fromPartner%`