---
title: "Checkin/Checkout"
source: "https://otris.software/documents/howto/files/checkin.html"
---

# Checkin/Checkout

Dieses HowTo beschreibt das Feature Checkin/Checkout. Es gibt dabei zwei verschiedene Varianten, entweder mit oder ohne [lokales Bearbeiten](../files/localEdit.html).

In Documents ist es möglich die Bearbeitung von Dokumenten durch andere Nutzer zu sperren. Dies existiert ab 5.0b HF2 und wird über die Property *hasCheckInCheckOut* gesteuert. Die Property kann dabei die Werte **1** (aktiviert) oder **0** (deaktiviert) haben, default ist das Feature deaktiviert.


## Ohne lokales Bearbeiten


### Eine Datei auschecken

Eine Datei kann entweder über die Aktionen *Checkout* oder *Checkout & Download* gesperrt werden. Diese sind entweder über das Kontextmenü oder über die Toolbar erreichbar.
*Checkout* sperrt das Dokument, *Checkout & Download* sperrt das Dokument und lädt es herunter.


Abb. 1 - Checkout im Kontextmenü


Abb. 2 - Checkout als Aktion


### Eine Datei einchecken

Der Checkin-Dialog kann über das Schloss-Icon in der Dokumentenliste geöffnet werden. Zusätzlich befindet sich ab
Documents 6.1.0 sowohl im Kontextmenü als auch in der Aktionen Klappliste der Toolbar der Eintrag `Check-In`.


Abb. 3 - Checkin Dialog


Abb. 4 - Checkin Dialog


Abb. 5 - Checkin Dialog

Die bearbeitete Datei muss anschließend auf die DropZone des Dialogs gezogen werden. Über den OK Button wird die
gewählte Aktion durchgeführt.

- Version freigeben: Veröffentlicht die Datei in der DropZone oder, falls keine Datei hochgeladen wurde, die im Dialog angezeigte Datei. Anschließend ist die Datei nicht mehr gesperrt.
- Dokument sichern: Lädt die Datei in der DropZone hoch, aber gibt sie noch nicht zum bearbeiten frei.
- Dokument herunterladen: Lädt das aktuelle Dokument herunter.
- Checkout abbrechen: Bricht den Checkout ab, die Datei wird auf die Version vor dem Checkout zurückgesetzt


### Liste aller gesperrten Dokumente


Abb. 6 - Dialog mit allen gesperrten Dokumenten

Über den Knoten Checkin/Checkout wird ein Dialog geöffnet, der alle vom aktuellen Benutzer gesperrten Dokumente anzeigt.

- Checkout abbrechen: Bricht die Bearbeitung aller markierten Dateien ab
- Version freigeben: Gibt alle markierten Dateien frei, die letzte hochgeladene Version wird dabei als die neue veröffentlichte Version genommen

Ein Klick auf das Icon öffnet die entsprechende Mappe, ein Klick auf die Zeile öffnet den Checkin-Dialog.


## Mit lokalem Bearbeiten


### Eine Datei auschecken

Eine Datei kann entweder über die Aktionen *Checkout* und *Checkout & Download* gesperrt werden. Diese sind entweder über das Kontextmenü oder über die Toolbar erreichbar.
*Checkout* sperrt das Dokument und legt es in das festgelegte Verzeichnis ab, *Checkout & Download* sperrt das Dokument und öffnet es zum lokalen Bearbeiten.


Abb. 1 - Checkout im Kontextmenü


Abb. 2 - Checkout als Aktion


### Eine Datei bearbeiten

Um eine Datei zu Bearbeiten, muss diese entweder im Verzeichnis für das Lokale Bearbeiten geöffnet werden, oder kann
über den Bleistift in der Dokumentenliste geöffnet werden.


### Eine Datei einchecken

Der Checkin-Dialog kann über das Schloss-Icon in der Dokumentenliste geöffnet werden. Zusätzlich befindet sich ab
Documents 6.1.0 sowohl im Kontextmenü als auch in der Aktionen Klappliste der Toolbar der Eintrag `Check-In`.


Abb. 7 - Checkin Dialog


Abb. 8 - Checkin Dialog


Abb. 9 - Checkin Dialog

- Version freigeben: Veröffentlicht die im Dialog angezeigte Datei. Anschließend ist die Datei nicht mehr gesperrt.
5.0e: Es wird keine neue Datei hochgeladen, der Upload erfolgt über "Dokument sichern".
5.0f: Es wird eine neue Datei hochgeladen, das Verhalten der 5.0e Version kann über die Eigenschaft checkinSaveAndRelease wiederhergestellt werden
- Dokument sichern (5.0f: hochladen): Lädt die lokal bearbeitete Datei hoch, aber gibt sie noch nicht frei.
- Dokument herunterladen: Lädt das aktuelle Dokument herunter. Es wird hierbei die für alle sichtbare Version des Dokuments genommen, keine schon hochgeladene Zwischenversion. Eventuell vorhandene lokale Änderungen werden überschrieben.
- Checkout abbrechen: Bricht den Checkout ab, die Datei wird auf die Version vor dem Checkout zurückgesetzt. Die lokale Version der Datei wird ebenfalls verworfen.


### Liste aller gesperrten Dokumente


Abb. 10 - Dialog mit allen gesperrten Dokumenten

Über den Knoten Checkin/Checkout wird ein Dialog geöffnet, der alle vom aktuellen Benutzer gesperrten Dokumente anzeigt.

- Checkout abbrechen: Bricht die Bearbeitung aller markierten Dateien ab, lokale Dateien werden ebenfalls verworfen.
- Dokument sichern (5.0f: hochladen): Lädt alle markieren lokal bearbeiteten Dateien hoch, aber gibt sie noch nicht frei.
- Dokument bearbeiten: Öffnet die Datei lokal.
- Version freigeben: Gibt alle markierten Dateien frei
5.0e: Es wird keine neue Datei hochgeladen, der Upload erfolgt über Dokument sichern.
5.0f: Es wird eine neue Datei hochgeladen, das Verhalten der 5.0e Version kann über die Eigenschaft checkinSaveAndRelease wiederhergestellt werden

Diverse Aktionen können auch direkt für eine Datei ausgeführt werden:

- Ein Klick auf das Datei-Icon öffnet die entsprechende Mappe.
- Ein Klick auf den Bleistift öffnet die Datei zum bearbeiten.
- Ein Klick auf die Zeile öffnet den Checkin-Dialog.