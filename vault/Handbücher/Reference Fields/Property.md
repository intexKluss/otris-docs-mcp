---
title: "Property AutoUpdateByRefFields"
source: "https://otris.software/documents/manuals/books/reference-fields/referencefields/autoUpdateByRefFields.html"
---

# Property AutoUpdateByRefFields

Dieses Property bewirkt, dass ein geänderter Anzeige- oder Defaultwert automatisch in den referenzierenden Mappen angepasst wird. Es muss an dem Feld gesetzt werden dessen Wert an der referenzierenden Mappe aktualisiert werden soll. Dem Property muss das Schlüsselfeld der referenzierten Mappe zugewiesen werden.

Allgemein kann an einem Feld, das einen Anzeigenamen oder Defaultwert enthält, das folgende Property gesetzt werden:


```javascript
AutoUpdateByRefFields=keyField
```

AutoUpdateByRefFields=keyField
## Beispiel Bankverbindung

Es wird ein anderes Beispiel verwendet. Darin gibt es den Mappentyp `kunde` mit den Feldern `nummer` und `name` und den Mappentyp `bankverbindung` mit dem Referenzfeld `kunde` indem der Mappentyp `kunde` referenziert wird. Das Schlüsselfeld ist das Feld `nummer`. Im Folgenden Bild ist der Konfigurationsdialog des Referenzfelds `kunde` dargestellt.


![autoup-conf](../img/autoup-conf-bank.png)

Abb. 12 - Konfigurationsdialog des Referenzfelds Kunde im DOCUMENTS Manager

Im Web-Client wird nun ein Kunde mit Namen `Schreiber` und der Nummer `123` angelegt.


![autoup-kunde](../img/autoup-web-kunde.png)

Abb. 13 - Kunde Schreiber im Web-Client

Wenn dieser Kunde im Referenzfeld `kunde` einer Mappe vom Typ `bankverbindung` referenziert wird, dann wird im Referenzfeld der Name `Schreiber` angezeigt.


![autoup-bank](../img/autoup-web-bank.png)

Abb. 14 - Bankverbindung mit Referenz auf Kunde Schreiber im Web-Client

Jetzt wird am Feld `name` des Mappentyps `kunde` die Eigenschaft `AutoUpdateByRefFields=nummer` gesetzt


![autoup-prop](../img/autoup-prop.png)

Abb. 15 - Eigenschaft AutoUpdateByRefFields am Feld name im DOCUMENTS Manager

Wenn der Kunde `Schreiber` jetzt seinen Namen z.B. nach `Perona` ändert


![autoup-kunde2](../img/autoup-web-kunde2.png)

Abb. 16 - Kunde mit geändertem Namen Perona im Web-Client

dann ist der geänderte Name auch in der Bankverbindung sichtbar


![autoup-bank2](../img/autoup-web-bank2.png)

Abb. 17 - Bankverbindung mit Referenz auf Kunde mit geändertem Namen Perona im Web-Client


## Auto-Titel

Falls ein Anzeigewert auch in einem Auto-Titel verwendet wird und dieser Anzeigewert durch `AutoUpdateByRefFields` aktualisiert wird, dann wird auch der Titel aktualisiert.


## Bitte Beachten

- Die Änderung des Namens muss im Bearbeitungsmodus vorgenommen werden. D.h. entweder im Web-Client oder im Scripting mit startEdit.
- Die Eigenschaft ist unabhängig von dem Mappentyp der das Referenzfeld enthält. Wenn es also einen weiteren Mappentypen gibt, der auch ein Feld kunde wie oben beschrieben als Referenzfeld verwendet, so wird auch in diesem Referenzfeld der Name aktualisiert. Wenn das vermieden werden soll muss die Option -FileType (s.u.) verwendet werden.
- Ein Feld, an dem AutoUpdateByRefFields gesetzt ist, enthält entweder den Anzeigenamen oder einen Defaultwert eines Referenzfeldes. Anzeigename oder Defaultwert werden automatisch aktualisiert, wenn das Feld geändert wird. Diese Aktualisierung funktioniert allerdings nicht, wenn das Feld selbst ein Referenzfeld ist und durch AutoUpdateByRefFields eines anderen Feldes automatisch aktualisiert wurde.


## Optionen


### -FileType (Mappentypen ignorieren)

Ein Feld kann auch von verschiedenen Mappentypen als Schlüsselfeld von Referenzfeldern verwendet werden. Wenn nach der Änderung eines Feldes mit der Eigenschaft `AutoUpdateByRefFields=keyfield` nicht alle Referenzfelder von allen Mappentypen aktualisiert werden sollen, die das Feld `keyfield` verwenden, dann können mit der Option `-IgnoredFileType.RefField` Referenzfelder ausgenommen werden. Falls in dem Beispiel das Referenzfeld `Kundennumer` aus der Mappe `Bankverbindung` nicht aktualisiert werden soll, könnte die Angabe der Eigenschaft folgendermaßen aussehen.


```javascript
AutoUpdateByRefFields=Nummer,-Bankverbindung.Kundennummer
```

AutoUpdateByRefFields=Nummer,-Bankverbindung.Kundennummer
### idFile

Der Eigenschaft kann auch die idFile zugewiesen werden


```javascript
AutoUpdateByRefFields=idFile
```

AutoUpdateByRefFields=idFile
### WithDefaultValues (Defaultwerte aktualisieren)

Wenn die Option `WithDefaultValues` angegeben ist


```javascript
AutoUpdateByRefFields=keyField,WithDefaultValues
```

AutoUpdateByRefFields=keyField,WithDefaultValuesdann werden auch die Defaultwerte aller Referenzfelder, die `Keyfield` referenzieren, aktualisiert.

Durch die Aktualisierung der Defaultwerte können weitere Aktualisierungen ausgelöst werden.

- ACL-Cachetabelle wird aktualisiert
Wenn eine Doppelauswahlliste durch AutoUpdateByRefFields geändert wird und daran eine Access Control Liste mit Cache definiert ist, dann wird dieser ACL-Cache auch automatisch aktualisiert.
- Volltextindex wird aktualisiert Wenn durch AutoUpdateByRefFields der Wert eines Feldes geändert wird, das Volltextindiziert ist, dann wird auch der Volltextindex aktualisiert.