---
title: "Google Translate"
source: "https://otris.software/documents/manuals/books/otrtranslate/service-overview-googleTranslate.html"
---

# Google Translate


## API

| Dokumentation | https://cloud.google.com/translate/docs/basic/translate-text-basic?hl=de |
| --- | --- |
| Endpoint | https://translation.googleapis.com/language/translate/v2/ |
| Version | 2 |


### API-Key

Bei dem angebundenen Google Übersetzungsservice handelt es sich um die von Google angebotene Basis Edition (v2). Für die Nutzung wird ein API-Key benötigt.
Google bietet ebenso die Möglichkeit den Übersetzer im Voraus zu testen.

Ein API Key kann über Google erworben werden. Es handelt sich dabei um die Basis Edition (v2) mit den [hier](https://cloud.google.com/translate/pricing?hl=de#basic-pricing) beschriebenen Konditionen.
Um den API-Key zu erwerben und nutzen, muss das [hier](https://cloud.google.com/translate/docs/setup?hl=de) beschriebene Setup durchlaufen werden.

Nachdem die Authentifizierung im Setup erfolgreich einrichtet wurde, kann der Api-Key für den jeweiligen Google Service hinterlegt werden, wie im Kapitel "[Einrichtung im Admin Center](admin-center.html)" beschrieben.


## Textübersetzung (aktuell nur via Skripting)

Google unterstützt das Übersetzen von Texten in die vorhandenen Zielsprachen ([siehe Auflistung der API](https://cloud.google.com/translate/docs/languages?hl=de)).
Außerdem kann bei fehlenden Informationen zur Ausgangssprache die automatische Spracherkennung von Google genutzt werden.

Die genauen Informationen zur Textübersetzung sind der [Google API zu entnehmen](https://cloud.google.com/translate/docs/languages?hl=de).


## Dokumentenübersetzung

Die Dokumentenübersetzung wird von Google in der Basis Edition (v2) nicht unterstützt.