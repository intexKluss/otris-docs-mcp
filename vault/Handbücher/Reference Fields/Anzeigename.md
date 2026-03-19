---
title: "Anzeigename"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/display.html"
---

# Anzeigename

Die Angabe eines Anzeigenamens macht ein einfaches Referenzfeld zu einem erweiterten Referenzfeld. Hier wird der Anzeigenamen an dem bereits bekannten Beispiel noch einmal genauer gezeigt.

Im Beispiel zu den [einfachen Referenzfeldern](../referencefields/simple.html) wird im Referenzfeld die ID der Firma eingetragen und angezeigt. Dieser Wert ist auch notwendig für die Referenz. Allerdings kann für die Anzeige auch ein anderes Feld verwendet werden. Zum Beispiel das Feld `name` des Mappentyps `firma`.


## Konfiguration

Im Konfigurationsdialog muss dann zur Referenzregel eine weitere Zeile eingefügt werden, die den anzuzeigenden Text enthält. In diesem Fall ist das der Name des anzuzeigenden Feldes als Auto-Text `%name%`.


```javascript
firma.id
%name%
```

firma.id
%name%

![display-config](../img/display-conf.png)

Abb. 7 - Konfiguration eines Anzeigenamens im DOCUMENTS-Manager


## Darstellung im Web-Client

Wenn das Feld `kunde` wie oben konfiguriert ist, wird im Web-Client in diesem Feld der Name der Firma angezeigt. Der Schlüsselwert ist nicht mehr sichtbar, ist aber trotzdem noch am Feld gespeichert, so dass die Referenz weiterhin funktioniert.


![display-web](../img/display-web.png)

Abb. 8 - Referenzfeld mit Anzeigename


## Anzeigename aktualisieren

Der Anzeigename wird nur in das Referenzfeld kopiert und ist nicht mit dem Originalfeld verlinkt. D.h. wenn dieser Wert in einer referenzierten Mappe verändert wird, wird der angezeigte Wert im Referenzfeld defaultmäßig nicht angepasst. Wie dieser Anzeigewert im Referenzfeld aktualisiert werden kann, wird im Kapitel [Werte aktualisieren](../referencefields/update.html) beschrieben.