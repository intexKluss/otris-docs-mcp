---
title: "Anwendung für EDA / EAS"
source: "https://otris.software/documents/manuals/books/acl-reference/edaeas.html"
---

# Anwendung für EDA / EAS

Der Mappenklassenschutz kann auch für Mappentypen genutzt werden, die in einem EDA / EAS Archiv archiviert werden sollen. Falls bestehende Stores eingebunden werden sollen oder bei der Migration alter EE.i-Archive für das Schutzfeld ein anderer Analyzer als „linebreak“ spezifiziert wurde, muss die EASAnalyser-Eigenschaft gesetzt werden, damit die bestehenden Mappen korrekt gefunden werden.

Zu den bereits genannten Einstellungen muss man für solche Mappentypen noch die Eigenschaft „EASAnalyzer“ an dem Mappenklassenschutzfeld setzen. Als Wert stehen dafür „standard“ und „keyword“ zur Verfügung.


![Setzen der Eigenschaft „EASAnalyzer“ am Feld](./img/image9.png)

Abb. 8 - Setzen der Eigenschaft „EASAnalyzer“ am Feld

Der *Standardanalyzer* unterscheidet automatisch zwischen Datumsangaben, numerischen Angaben sowie Text. Wird der Mappenklassenschutz wie in den bisherigen Beispielen angelegt, sollte dieser Wert gewählt werden. Es sollte daher bevorzugt der Wert „standard“ verwendet werden, da dieser den Großteil aller Fälle abdeckt.

Der *Keywordanalyzer* indexiert den ganzen Feldwert als ein einziges Wort. Dies ist z.B. bei Aktenplanfeldern und Nummerkreisfeldern sinnvoll, damit das Archivsystem keine führenden Nullen abschneidet. Der Wert „keyword“ sollte dann eingesetzt werden, wenn im Mappenklassenschutzfeld sich nur ein Wert befindet und/oder wenn es auf die genaue Schreibweise des Werts ankommt.