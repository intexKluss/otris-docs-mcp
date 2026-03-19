---
title: "Einrichtung im Admin Center"
source: "https://otris.software/documents/manuals/books/otrtranslate/admin-center.html"
---

# Einrichtung im Admin Center


## Schritt 1: Erweiterung im Admin Center aktivieren

Der Übersetzungsservice otrTranslate muss im AdminCenter aktiviert werden.


![admincenter-1](./assets/admincenter-1.png)

Abb. 1 - Inaktive Erweiterung


![admincenter-2](./assets/admincenter-2.png)

Abb. 2 - Aktivierte Erweiterung


## Übersetzungsservices bereitstellen

Nach der Aktivierung der Erweiterung können die unterstützten Dienste über die Einstellung **Apps und Dienste** im Benutzermenü hinzugefügt werden.


![admincenter-3](./assets/admincenter-3.png)

Abb. 3 - Benutzermenü Apps und Dienste

Mit einem Klick auf "**+ Neuer Service**" kann ein unterstützter Dienst  (**DeepL**, **Google Translate** und / oder **Libre Translate**) hinzugefügt werden.


![admincenter-4](./assets/admincenter-4.png)

Abb. 4 - Dienst hinzufügen, z.B. DeepL

Es können mehrere gleiche Services hinzugefügt werden, jeweils mit einem unterschiedlichen Alias. Es muss jedoch kein Alias vergeben werden, falls nur eine Instanz des Dienstes hinzugefügt werden soll.

Innerhalb der folgenden Autorisierungseinstellungen kann die Auswahl getroffen werden, ob der API-Schlüssel des Services **Global** für den gesamten Mandanten oder **Individuell** pro Nutzer eingestellt werden soll. Erfolgt die Einstellung *Global*, gibt der Administrator den API-Schlüssel an. Erfolgt die Einstellung *Individuell*, muss jeder Benutzer, der Übersetzungsservices benutzen soll, später über sein Benutzermenü einen eigenen API-Schlüssel angeben.


### Schritt 3: Dokumentenübersetzung aktivieren und konfigurieren (optional)

Die Übersetzung von Dokumenten kann im Admin Center über den Button **Einstellungen** der Erweiterung aktiviert und konfiguriert werden. Alle Einstellungen wirken mandantenweit.


![admincenter-5](./assets/admincenter-5.png)

Abb. 5 - Einstellungen der Erweiterung

Über die Checkbox **Dokumentenübersetzung aktivieren** kann die Übersetzungsoption aktiviert werden. Nach dem Aktivieren befindet sich ein Button zum Übersetzen an **jedem** Dokumentenregister.


#### Auswahl Übersetzungsservice

Über die Auswahl **Übersetzungsservice für Dokumente** kann der Übersetzungsservice ausgewählt werden, mit dem Dokumente übersetzt werden sollen. Weitere ggf. zuvor hinzugefügte Services können aktuell nur über das Skripting verwendet werden.


#### Auswahl Speichermethoden

Es gibt zwei verschiedene **Speichermethoden**, welche ausgewählt werden können. Der Standardwert ist das Ersetzen des bereits vorhandenen Dokuments mit einer neuen Dokumentenversion (die alte Version geht nicht verloren, ist jedoch nur über das Versionen Register am Dokument wiederherstellbar). Alternativ kann die Übersetzung auch als ein weiteres, neues Dokument angelegt werden.


#### Template

Bei Auswahl der Speichermethode **Neues Dokument anlegen** wird auf wird auf das Namensschema zurückgegriffen, welches ebenfalls über die Einstellungen konfiguriert werden kann. Der Standardwert lautet: "%originalName%_%targetLang%". Für das individuelle Template stehen folgende Platzhalter zur Auswahl.

- %originalName%: Originaler Dateiname ohne Dateiendung
- %targetLang%: Kürzel der Zielsprache z.B. "de"
- %sourceLang%: Kürzel der Ausgangssprache z.B. "en"

**Beispiel:**

Mit der Template Einstellung **%originalName%_%sourceLang%_%targetLang%** wird das Dokument **meinDokument.txt** mit englischem Text ins Deutsche übersetzt und ein neues Dokument mit dem Namen **meinDokument_en_de.txt** wird angelegt.