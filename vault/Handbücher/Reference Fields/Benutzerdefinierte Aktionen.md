---
title: "Benutzerdefinierte Aktion"
source: "https://otris.software/documents/manuals/books/reference-fields/apis/int-actions.html"
---

# Benutzerdefinierte Aktion

Auch über Benutzerdefinierte Aktionen können Mappen automatisch angelegt werden. Dabei können Referenzfelder automatisch gesetzt werden. Das funktioniert aber nur, wenn in dem Referenenzfeld der angelegten Mappe, der Mappentyp angegeben ist, an dem die Aktion ausgeführt wird.

Angenommen im [Kreditor Beispiel](/referencefields/02-simple.md#beispiel-kreditor) ist am Mappentyp `Firma` eine benutzerdefinerte Aktion definert, über die eine Mappe vom Typ `Rechnung` angelegt wird. Wenn dann an einer Mappe vom Typ `Firma` mit den folgenden Werten


```javascript
Name = otris
FirmenID = 1234
```

Name = otris
FirmenID = 1234die benutzerdefinierte Aktion ausgeführt wird, dann wird beim Anlegen der Mappe vom Typ `Rechnung` automatisch der korrekte Wert in das entsprchende Referenzfeld (`Kreditor`) eingetragen


```javascript
Kreditor = 1234\notris
```

Kreditor = 1234\notris