---
title: "v3.1.1"
source: "https://otris.software/documents/api/otrAssert/CHANGELOG.html"
---

# v3.1.1

- Typings-Korrektur für assertSetAttribute(). (#70851)


# v3.1.0

- Typings erweitert, so dass bei mehreren Funktionen die Mappentypen, Felder usw. berücksichtigt werden. (#69840)


# v3.0.9

- Typings-Korrektur beim Parameter hitlist der Funktion getHitResultset(). (!309)
- Anpassung von assertCommit() für geändertes Verhalten beim Zugriff auf gelöschte Mappen. (#68696)


# v3.0.8

- Scripte wurden mit use strict; ausgeliefert, was bei Einbindung per #import zu Problemen führen konnte. (#64641)


# v3.0.7

- Default-Wert bei assertDeleteFile() für das Verschieben von Mappen in den Pool korrigiert. Default war bisher true, was nicht dem Verhalten von DocFile.deleteFile() entsprach.
- Typings verbessert. Das Mappentypen-Mapping des PortalScripts wird nun auch bei den Funktionen unterstützt.


# v3.0.6

- Auslieferung in Repository korrigiert.


# v3.0.5

- Veraltete Alias assertHitResultset() für getHitResultse()t war bei der TypeScript-Umstellung verloren gegangen. (#59077)


# v3.0.4

- Korrektur der #import-Einbindung in einem per require() eingebundenem Script. (#59077)


# v3.0.3

- Korrektur der #import-Einbindung. (#59077)


# v3.0.2

- Auslieferung korrigiert. (#59077)


# v3.0.1

- Auslieferung korrigiert. (#59077)


# v3.0.0

- Umstellung auf TypeScript und Bereitstellung von Typings über die Extension. (#58448)


# v2.0.1

- updateScripts-Korrektur zur scriptlib-Umstellung.


# v2.0.0

- Umstellung auf scriptlib-Package und Anpassungen für das Admin-Center.