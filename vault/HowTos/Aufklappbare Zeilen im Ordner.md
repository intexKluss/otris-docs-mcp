---
title: "Anzeigen aufklappbarer Zeilen im Ordner"
source: "https://otris.software/documents/howto/list/fileDetails.html"
---

# Anzeigen aufklappbarer Zeilen im Ordner

In Ordnern kann für Mappen jeweils eine ausklappbare Detailzeile eingeblendet werden.
Diese eignet sich für eine kleine Vorschau der Mappe oder aber auch um Beziehungen dieser Mappe zu anderen anzuzeigen.


## Beispiel für einen Ordner mit Detailzeile


Abb. 1 - Aufgeklappte Zeile mit Scriptlist

Um für die Mappe in der Zeile Details anzeigen zu können, muss für den Mappentyp die Eigenschaft *fileDetailsScript* gesetzt sein.


Abb. 2 - Setzen der Eigenschaft am Mappentyp

Dieses Script bestimmt, welcher Inhalt für diese Mappe in der Detailzeile angezeigt werden soll.
Hier können einfaches HTML und Skriptlisten zurückgegeben werden.

Für den Ordner muss die Eigenschaft *fileDetailsShowColumn* gesetzt sein, damit die ausklappbaren Zeilen angezeigt werden.


Abb. 3 - Setzen der Eigenschaft am Ordner


## Beispiel fileDetailsScript für den Mappentyp Mitarbeiter im Dopaag Mandanten

Download: [employeeDetails.js](employeeDetails.js)