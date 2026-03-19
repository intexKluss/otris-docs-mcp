---
title: "DeepL"
source: "https://otris.software/documents/manuals/books/otrtranslate/service-overview-deepL.html"
---

# DeepL


## API

| Dokumentation | https://www.deepl.com/docs-api |
| --- | --- |
| Endpoint | https://api.deepl.com/v2/ |
| Version | 2 |


### API-Key

Für die Nutzung des DeepL Übersetzungsservice wird ein API-Key benötigt.
DeepL bietet [hier](https://www.deepl.com/de/pro?cta=header-pro-button) die Möglichkeit den Übersetzer im Voraus zu testen.

Ein API Key kann [hier](https://www.deepl.com/de/pro-api?cta=header-pro-api) über die DeepL Website auf Basis der jeweiligen Anforderungen erworben werden. Der API Key kann über die [Account Einstellungen](https://www.deepl.com/account/) eingesehen und kopiert werden, um diesen in der DOCUMENTS Anwendung zu hinterlegen.

Der Api-Key kann dann für den jeweiligen Service hinterlegt werden, wie im Kapitel "[Einrichtung im Admin Center](admin-center.html)" beschrieben.


## Textübersetzung (aktuell nur via Skripting)

DeepL unterstützt das Übersetzen von Texten in die vorhandenen Zielsprachen (siehe Auflistung der API).
Bei fehlenden Informationen zur Ausgangssprache kann wird das DeepL Feature der Automatischen Spracherkennung genutzt, um die Ausgangssprache zu ermitteln.
DeepL bietet die Möglichkeit die Übersetzung über verschiedene Parameter zu steuern, z.B. kann optional die Formalität einer Übersetzung über den Parameter formality angepasst werden.

Die genauen Informationen zur Textübersetzung sind der [DeepL API zu entnehmen](https://www.deepl.com/docs-api/translate-text/).


## Dokumentenübersetzung

Die Dokumentenübersetzung wird von DeepL unterstützt.
Wie auch bei der Textübersetzung kann DeepL auch bei Dokumenten die Ausgangssprache automatisch erkennen.

Folgende Dateiformate können übersetzt werden [Stand 23.02.2024]:

- docx - Microsoft Word Document
- pptx - Microsoft PowerPoint Document
- xlsx - Microsoft Excel Document
- pdf - Portable Document Format
- htm / html - HTML Document
- txt - Plain Text Document
- xlf / xliff - XLIFF Document, version 2.1

Weitere Informationen zur Dokumentenübersetzung sind der [DeepL API zu entnehmen](https://www.deepl.com/de/docs-api/documents).