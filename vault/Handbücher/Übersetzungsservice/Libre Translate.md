---
title: "Libre Translate"
source: "https://otris.software/documents/manuals/books/otrtranslate/service-overview-libreTranslate.html"
---

# Libre Translate


## API

| Dokumentation | https://libretranslate.com/docs/ |
| --- | --- |
| Endpoint | https://libretranslate.com/ |
| Version | 1 |


### API-Key

Für die Nutzung von Libre Translate wird kein API-Key benötigt, es kann eine beliebige Zeichenkette kann als Platzhalter für den API-Key genutzt werden.


## Textübersetzung (aktuell nur via Skripting)

LibreTranslate unterstützt das Übersetzen von Texten in die vorhandenen Zielsprachen (siehe Auflistung der API).
Außerdem kann bei fehlenden Informationen zur Ausgangssprache die Spracherkennung von LibreTranslate genutzt werden.

Die genauen Informationen zur Textübersetzung sind der [LibreTranslate API zu entnehmen](https://libretranslate.com/docs/#/translate/get_languages)


## Dokumentenübersetzung

Die Dokumentenübersetzung wird von LibreTranslate unterstützt.
Eine automatische Erkennung der Ursprungssprache ist **nicht** möglich.

Folgende Dateiformate können übersetzt werden [Stand 23.02.2024]:

- txt - Plain Text Document
- odt - OpenDocument Text Document
- odp - OpenDocument Presentation Document
- docx - Microsoft Word Document _ pptx - Microsoft PowerPoint Document
- epub - eBooks
- html - HTML Document

Weitere Informationen zur Dokumentenübersetzung sind der [Libre Translate API zu entnehmen](https://libretranslate.com/docs/#/translate/post_translate_file).