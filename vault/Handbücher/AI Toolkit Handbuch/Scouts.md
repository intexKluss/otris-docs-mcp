---
title: "Scout"
source: "https://otris.software/documents/manuals/books/otr-ai/scout-user.html"
---

# Scout

Der **Scout** ist ein KI-Tool zur **Dokumenten- und Datenanalyse**. Er durchsucht Dokumentenbestände (mehrere Mappen/Ordner) nach relevanten Inhalten und extrahiert daraus **strukturierte Informationen**.

Der Scout kann eingesetzt werden, wenn Informationen benötigt werden, welche nicht bereits in Mappenfeldern erfasst wurden.

Hier drei Anwendungsbeispiele, wie der Scout konkret in z.B. einem Vertragsmanagement eingesetzt werden könnte:

- Anwendungsbeispiel 1 – Mappen finden​: "Finde alle Verträge mit einer Kündigungsfrist von mehr als 3 Monaten"
- Anwendungsbeispiel 2 – Nachträgliche Datenextraktion​: "Finde für alle Verträge den Vertragsgegenstand und beschreibe diesen in 3–5 Worten"
- Anwendungsbeispiel 3 – Reporting​: "Wie viel geben wir im Jahr für Büroimmobilien aus? Berechne hierzu die jährliche Miete pro Immobilie"


## Scout Analyse definieren

Um eine Analyse zu starten, kann der **Scout im gewünschten Ordner** geöffnet und gestartet werden. Der Scout verwendet diesen Ordner dann als **Analyse-Scope** – also als Datenbasis für die Suche und Extraktion.
Scouts sind standardmäßig nicht auf allen Ordnern verfügbar und müssen erst [durch einen Administrator aktiviert](admincenter.html#scouts) werden.


![scout-folder](./assets/scout-user-folder.png?class=small)

Abb. 26 - Scout auf Ordner starten


### Konfiguration (einfach)

Die Anfrage an den Scout kann über einen geführten Dialog definiert werden.
Im einfachsten Fall muss in diesem Dialog dazu nur eine Suchanfrage definiert werden, welche beschreibt,

- Was gesucht werden soll (z. B. Mietverträge für Gebäude)
- Welche Daten extrahiert werden sollen (Miete, Kaution, Adresse, Kurztitel)
- Wie Daten extrahiert werden sollen (z.B. für die Miete muss Kalt- und Warmmiete addiert werden)

In dem oben genannten Beispiel könnte dazu die Suchanfrage *„Finde alle Mietverträge für Gebäude und liste monatliche Miete, Kaution (falls vorhanden), Adresse und Kurztitel.“* definiert werden.

Es gilt: Je genauer und detailierter die Anfrage formuliert wird, desto besser sind die zu erwartenden Ergebnisse.


![scout-wizard-config](./assets/scout-user-wizard-1.png)

Abb. 27 - Scout Konfiguration

Über die Checkbox **Expertenmodus** kann die Anfrage in den nächsten Schritten des geführten Dialoges noch weiter spezifiziert werden. Diese Option ist aber nicht verpflichtend und kann auch übersprungen werden.

Nach der Definition der Anfrage leitet Scout automatisch die **Analyseparameter** mittels KI ab. Da dieser Schritt einige Zeit beansprucht, kann es einen kurzen Moment dauern, bis der nächste Schritt in dem geführten Dialog geöffnet wird.


### Quellen (Expertenmodus)

Über den Reiter **Quellen** des geführten Dialoges kann definiert werden, welche Informationen und Dokumente die KI zur weiteren Analyse erhält. Dieser Schritt wird nur angezeigt, wenn zuvor der Expertenmodus aktiviert wurde.

Es stehen folgende Einstellungen zur Verfügung:

- Feldwerte analysieren: Festlegen, ob vorhandene Metadaten/Felder einer Mappe bei der Bewertung genutzt werden sollen.
- Dokumentenauswahl mit vier Optionen:
Dokumente durch KI auswählen
Nur das erste Dokument auswählen
Alle Dokumente auswählen
Kein Dokument auswählen
- Auswahlkriterium für die Dokumente: Diese Option wird angezeigt, wenn die Dokumente durch die KI ausgewählt werden. Hierbei kann ein Filter formuliert werden, welcher auf Basis der Dateinamen entscheidet, ob ein Dokument für die Analyse relevant ist.


![scout-wizard-sources](./assets/scout-user-wizard-2.png)

Abb. 28 - Scout Quellen


### Filterkriterien (Expertenmodus)

Über den Reiter **Filterkriterien** des geführten Dialoges kann definiert werden, welche Mappen für die weitere Verarbeitung im Scout relevant sind bzw. welche Mappen ausgeschlossen werden können. Dieser Schritt wird nur angezeigt, wenn zuvor der Expertenmodus aktiviert wurde.

In Bezug auf die Beispielanfrage würde dies bedeuten, dass alle Verträge, welche keine Mietverträge für Gebäude/Immobilien sind (z.B. Leasingverträge oder Service-/Wartungsverträge ohne Mietobjekt) von der **weiteren Verarbeitung ausgeschlossen** werden.


![scout-wizard-filter](./assets/scout-user-wizard-3.png)

Abb. 29 - Scout Filter


### Datenauswahl (Expertenmodus)

Über den Reiter **Datenauswahl** des geführten Dialoges kann definiert werden, welche **Felder/Spalten** in die Auswertung des Scout-Ergebnisses aufgenommen werden sollen. Dieser Schritt wird nur angezeigt, wenn zuvor der Expertenmodus aktiviert wurde.

Über das Eingabefeld **Felder** können weitere Felder und Spalten hinzugefügt werden. Über das Eingabefeld können zwei Arten von Spalten hinzugefügt werden:

- Bestehende Mappenfelder: Das Eingabefeld schlägt per Autocomplete Felder von Mappen vor, welche sich im Kontext des Scouts befinden. Diese können einfach ausgewählt werden und erhalten automatisch den zum Feld passenden Datentyp. Felder, welche auf diese Art und Weise hinzugefügt wurden können später als Vorschlag auf der Mappe gesetzt werden.
- Eigene Spalten: Es können auch beliebige, eigene Spaltennamen definiert werden. Hierzu kann einfach in das Autocomplete-Feld ein frei wählbarer Feldname eingegeben werden und dann kann einer von vier Datentypen aus dem Autocomplete ausgewählt werden. Hierbei ist der Wert mit dem passenden Datentyp auszuwählen. Hierfür stehen folgende Datentypen zur Auswahl:
Text
Zahl
Ja/Nein
Datum

Die KI kann bereits aus dem Namen der Felder/Spalten die korrekte Suchanfrage ableiten. Allerdings gibt es auch Informationen, welche einer genaueren Definition und Erklärung bedürfen. Diese können über das Feld **Anfrage** spezifiziert werden. Hier können zum Beispiel auch Berechnungsformeln für zusammengesetzte Spalten definiert werden. Allgemein gilt, je besser die Datenauswahl beschrieben wird, desto besser ist das zu erwartende Ergebnis. Idealerweise werden alle Spalten noch einmal in der Anfrage beschrieben und in einen Kontext gesetzt.


![scout-wizard-data](./assets/scout-user-wizard-4.png)

Abb. 30 - Scout Datenauswahl


### Abschluss

Im letzten Schritt kann die Scout Analyse gestartet werden.

Hierbei ist zu beachten, dass die Ausführung je nach Anzahl der Mappen und Dokumenten im Kontext und der eingestellten Filterkriterien einiges an **Zeit und Ressourcen zur Analyse** benötigt. Bei der ersten Ausführung wird daher empfohlen, zunächst über die Checkbox **Test-Modus** einen Testlauf durchzuführen und die Ergebnisse zu kontrollieren.


![scout-wizard-finish](./assets/scout-user-wizard-5.png)

Abb. 31 - Scout Abschluss


## Verarbeitung der Anfrage

Der Scout wird nach der Definition der Anfrage mit der Verarbeitung beginnen. Diese erfolgt in mehreren Schritten:

1. Sichtung & Klassifikation: Dokumente werden bewertet, ob diese für die Verarbeitung erforderlich sind.
2. Extraktion: Aus den relevanten Dokumenten werden die definierten Felder und Spalten extrahiert.
3. Ergebnisliste: Der Scout erstellt eine Tabelle mit den Ergebnissen.

Die Verarbeitung erfolgt im Hintergrund, d.h. während der Scout die Analyse durchführt, kann der Benutzer **ganz normal weiterarbeiten**.

Der Fortschritt des Analyseprozesses wird über eine **Benachrichtigung (Notification)** angezeigt.


![scout-notification](./assets/scout-user-notification.png)

Abb. 32 - Scout Benachrichtigungen

- Die Notification informiert über den aktuellen Status (z. B. läuft, abgeschlossen, fehlgeschlagen).
- Mit einem Klick auf die Notification kann der Benutzer zur Scout-Liste zurückkehren und dort die laufende bzw. fertige Analyse einsehen.


## Auswertung

Das Ergebnis des Scouts wird in Form einer Tabelle ausgegeben. Dabei ist jede Mappe eine Zeile und jedes zuvor definierte Feld eine Spalte. Außerdem werden die Ergebnisse in drei Kategorien gefasst:

- Erfolgreich: Alle Mappen, welche zu der Anfrage passen und verarbeitet wurden. Zu diesen Mappen liegt ein Scout-Ergebnis vor.
- Fehlerhaft: Alle Mappen in dieser Kategorie konnten nicht verarbeitet werden.
- Nicht relevant: Mappen, die sich zwar im Kontext/Ordner des Scouts befanden, aber aufgrund der Filterkriterien aussortiert wurden.


![scout-results](./assets/scout-user-result.png)

Abb. 33 - Scout Ergebnisse


### Anfrage bearbeiten

Nachdem die Analyse abgeschlossen ist, kann die **Anfrage bearbeitet** und die Analyse mit **neuen Parametern** wieder gestartet werden.

Typische Anpassungen sind zum Beispiel:

- andere/zusätzliche Felder für den Report (weitere Spalten)
- angepasste Quellen- oder Dokumentenauswahl
- neue Auswahlkriterien für relevante Mappen/Dokumente

Nach dem Aktualisieren der Anfrage bzw. Parameter kann der Scout die Analyse **erneut ausführen**, um eine aktualisierte Treffermenge und einen neuen Report zu erzeugen.


### Ergebnisse exportieren (Excel-Download)

Der Scout bietet die Möglichkeit, die Ergebnisse der Analyse als **Excel-Datei** herunterzuladen.
Der Export enthält die im Report definierten **Spalten/Felder** (z. B. Kurztitel, Adresse, monatliche Miete, Kaution).
Um den Export zu erstellen, muss die Aktion **Download als Excel** an der Ergebnisliste ausgeführt werden.


### Vorschläge setzen

Sofern das Ergebnis der Anfrage auch Mappenfelder enthält, können diese direkt als Vorschlag auf den entsprechenden Mappen gesetzt werden.
Hierzu kann die Aktion **Vorschläge setzen** an der Ergebnisliste ausgeführt werden. Anschließend können die Mappen einzeln kontrolliert und die Vorschläge entsprechend gesetzt oder korrigiert werden.