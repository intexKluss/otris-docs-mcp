---
title: "Auswahldialog"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/selection-dialog.html"
---

# Auswahldialog

Eine Referenz kann im Web-Client über einen Auswahldialog angelegt werden. In diesem Auswahldialog sind alle Mappen des konfigurierten Mappentyps aufgelistet. Da von einem Mappentyp sehr viele Mappen vorhanden sein können, kann mit Hilfe von **Filterregeln** und **Trefferlisten** der Inhalt und die Anzeige des Auswahldialogs eingeschränkt bzw. optimiert werden.


## Filterregeln und Trefferlisten

Um die Menge der angezeigten Mappen im Auswahldialog einzuschränken, kann in der Referenzregel eine Filterregel angegeben werden. Weiterhin können die Spalten, die im Auswahldialog angezeigt werden, durch Angabe einer Trefferliste eingegrenzt werden.

Allgemein können Filterregeln und Trefferlisten wie folgt in eine Referenzregel eingefügt werden.


```javascript
filetype.keyField|hitlist=HitList|filterField<operator>'filterValue'
```

filetype.keyField|hitlist=HitList|filterField<operator>'filterValue'- filetype.keyField enthält den Mappentyp und das Schlüsselfeld. Dieser Teil der Referenzregel wurde im Kapitel Einfache Referenzfelder schon erklärt. Dahinter wird mit | getrennt die Filterregel angegeben.
- Innerhalb der Filterregel dürfen keine Leerzeichen stehen, ansonsten funktioniert die Regel nicht.
- filterField muss ein Feldname des Mapptentyps filetype sein.
- filterValue kann ein konstanter Wert oder ein AutoText sein.
- <operator> enthält eine Vergleichsoperation. Welche Vergleichsoperationen hier abhängig von den Feldtypen verwendet werden können, zeigt die folgende Tabelle.

| Mögliche Werte für <operator> in Abhängigkeit vom Feld-Typ | = | != | < | <= | > | >= | ~ (enthält) | |~ (beginn mit) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| String | X | X |  |  |  |  | X | X |
| Text | X | X |  |  |  |  | X | X |
| Reference | X | X |  |  |  |  | X | X |
| E-Mail | X | X |  |  |  |  | X | X |
| URL | X | X |  |  |  |  | X | X |
| Enumeration | X | X |  |  |  |  |  |  |
| Numeric | X | X | X | X | X | X |  |  |
| Bool | X | X |  |  |  |  |  |  |
| Date | X | X | X | X | X | X |  |  |