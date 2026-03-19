---
title: "Linkregister erstellen"
source: "https://otris.software/documents/manuals/books/reference-fields/linkregister/link-create.html"
---

# Linkregister erstellen

Um ein Linkregister zu erstellen müssen mehrere Schritte ausgeführt werden. Diese werden im Folgenden aufgelistet und beschrieben.

1. Register anlegen
2. Mappentyp konfigurieren
3. Feldwerte konfigurieren
4. Erweiterte Filter


## Register anlegen

Um zunächst ein Register zu anzulegen, öffnet man den gewünschten Mappentyp (z.B. `firma`) im DOCUMENTS Manager. Im unteren Bereich des Dialogs befindet sich ein Register mit dem Namen `Register`. Dort gibt es einen Knopf um ein neues Register zu erstellen. Dieser Knopf öffnet den Konfigurationsdialog für Register. Um ein Linkregister zu erstellen, muss im Feld `Registertyp` dieses Dialogs der Eintrag `Verknüpfung` ausgewählt werden. Dann erscheinen fünf weitere Register im Dialog. Unter anderem die Register `Filter (Mappentyp)`, `Filter (Feldwerte)` und `Filter (erweitert)`.


![Konfigurationsdialog für Linkregister](../img/link-config.png)

Abb. 18 - Konfigurationsdialog für Linkregister


## Filter (Mappentyp)

Im Register **Filter (Mappentyp)** gibt es oben rechts ein Listensymbol. Darüber kann ein Fenster geöffnet werden welches alle verfügbaren Mappentypen anzeigt. Hier muss mindestens ein Mappentyp ausgewählt werden um eine gültige Verknüpfung zu erhalten. Falls mehrere Mappentypen ausgewählt werden, muss beachtet werden, dass auch Felder konfiguriert werden müssen. Die angegebenen Mappentypen müssen daher mindestens ein Feld gemeinsam haben. Ohne ein gemeinsames Feld kann keine gültige Verknüpfung angelegt werden.


![Mappentyp konfigurieren](../img/link-filetype.png)

Abb. 19 - Mappentyp konfigurieren


## Filter (Feldwerte)

Hier können bis zu drei Filter für drei Felder angegeben werden. Es muss beachtet werden, dass die Filter mit einer **UND**-Verknüpfung angewendet werden. D.h. wenn in der ersten Zeile Filter A und in der zweiten Filter B angegeben wird, werden nur Mappen ausgewählt, für die A UND B zutreffen.

Der Eintrag in **Feldname** bezieht sich auf alle Mappentypen, welche unter `Filter (Mappentyp)` ausgewählt wurden, deshalb muss sichergestellt sein, dass alle diese Mappentypen das Feld enthalten.

In dem Feld **Wert** kann entweder ein konstanter Wert, ein AutoText oder beides eingetragen werden. In der Regel werden hier die AutoTexte eingetragen, welche den Wert der in `Feldname` eingetragenen Schlüsselfelder zurückgeben. Die Schlüsselfelder müssen in dem Mappentyp, welcher das Linkregister enthält, enthalten sein.


![Filter im Linkregister enthält ein erweitertes Referenzfeld](../img/link-fieldval.png)

Abb. 20 - Filter im Linkregister enthält ein erweitertes Referenzfeld

In diesem Bild ist das Feld `kunde` ein erweitertes Referenzfeld. Daher besteht der Wert dieses Feldes aus zwei Zeilen (siehe Kapitel zu erweiterten Referenzfeldern). Da die zweite Zeile des Referenzfeldes hier nicht berücksichtigt werden soll, wird nur der Wert aus der ersten Zeile angegeben und mit `beginnt mit` verglichen. Bei einem einfachen Referenzfeld oder einem beliebigen anderen Feld kann z.B. als Vergleich auch `gleich` ausgewählt werden. Insgesamt stehen für den Vergleich die folgenden Werte zur Auswahl.

- gleich
- ungleich
- kleiner
- größer
- beinhaltet
- beginnt mit


## Filter (erweitert)

Hier gibt es noch erweiterte Möglichkeiten um Filter anzugeben. Die Filterregeln entsprechen den Filterregeln aus der Dokumentation der Portalscript API.


![link-extfilter](../img/link-extfilter.png)

Abb. 21 - Erweiterter Filter im Linkregister