---
title: "Mappenklassenschutz erstellen"
source: "https://otris.software/documents/manuals/books/acl-reference/class-create.html"
---

# Mappenklassenschutz erstellen


### Mappenklassenschutz anlegen

Im Manager gibt es im Mappentypen-Dialog ein Feld mit dem Namen **Mappenklassenschutz**. Hier kann ein beliebiges Feld ausgewählt werden. Sobald hier ein Feld eingetragen ist, erhält man im unteren Bereich des Dialogs das zusätzliche Register **Mappenklassenschutz**. Hier können eine oder mehrere Schutzklassen angelegt und konfiguriert werden.


### Schutzklassen konfigurieren

Der Mappenklassenschutz wurde angelegt, indem ein Feld ausgewählt wurde. Für dieses Feld können bestimmte Werte festgelegt werden.
Im Konfigurationsdialog für den Mappenklassenschutz kann oben ein Feldwert und unten über die entsprechenden Register Benutzer oder Zugriffsprofile engetragen werden.


### Beispiel Einfacher Mappenklassenschutz

Angenommen an dem Mappentypen `Test` wird als Mappenklassenschutz-Feld ein numerisches Feld mit Namen `Nummer` ausgewählt.

![Mappenklassenschutz am Mappentypen](./img/fileclassprotection.png)


Im Mappenklassenschutz-Dialog wird dann der Wert `42` und der Benutzer `Willi Schreiber` eingetragen.

![Mappenklassenschutz konfigurieren](./img/config-class.png)


Dann können alle Mappen des Mappentyps `Test` die im Feld `Nummer` den Wert `42` enthalten, nur noch von `Willi Schreiber` gesehen werden. Alle anderen Benutzer können Mappen mit dem Wert `Test.Nummer = 42` nicht sehen.

Weiterhin kann jede Mappe, die im Feld `Nummer` nicht den Wert `42` enthält, von allen Benutzern gesehen werden. Diese Eigenschaft kann aber durch Einfügen einer `DEFAULT-Klasse` geändert werden.


### DEFAULT-Klasse

Die `DEFAULT-Klasse` ist ein Mappenklassenschutz mit dem Klassennamen `DEFAULT`. Das Einfügen dieser Schutzklasse wirkt sich auf alle Werte aus, die nicht durch eine andere Schutzklasse abgedeckt sind. In dieser Klasse muss daher auch kein Feldwert eingefügt werden.


### Beispiel DEFAULT-Klasse

In [Beispiel Einfacher Mappenklassenschutz](./class-create.html#beispiel-einfacher-mappenklassenschutz) können alle Benutzer alle Mappen sehen, deren Wert im Feld `Nummer` nicht die `42` ist. Wenn in diesem Beispiel eine Schutzklasse mit Klassennamen `DEFAULT` eingefügt wird, dann können alle Mappen, mit `Test.Nummer != 42` nur von den Benutzern gesehen werden, die in der `DEFAULT-Klasse` eingetragen sind.