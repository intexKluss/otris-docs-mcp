---
title: "Browserextension zum lokalen Bearbeiten"
source: "https://otris.software/documents/howto/files/localEdit.html"
---

# Browserextension zum lokalen Bearbeiten

Ab Documents 5.0d ist es möglich, Dateien zusätzlich zu der ActiveX-Komponente oder dem Java-Plugin für den Internet
Explorer auch mit dem Chrome, Edge (ab 5.0f) und Firefox Browser lokal zu bearbeiten.


## Installation und Updates

Um das lokale Bearbeiten nutzen zu können, muss ein zusätzliches Setup ausgeführt werden. Dieses liegt ab Documents
5.0d im Installationsverzeichnis unter `addon/localediting`. Alternativ kann ab 5.0g über die globale Eigenschaft
`addonDownloadSettings` in der Weboberfläche ein Dialog im persönlichen Menü freigeschaltet werden, über den der
Benutzer sich das passende Add-on selbst herunterladen kann.

Die Browsererweiterung wird mit der Installation des Setups automatisch für alle verfügbaren Browser mit installiert.
In allen Browsern ist dabei eine einmalige aktive Internetverbindung beim Browserstart zwingend erforderlich.
Nach dem ersten Browserneustart muss die Erweiterung unter Umständen noch aktiviert werden. Dies ist eine
Sicherheitsmaßname der Browserhersteller und kann normalerweise über ein Popup erledigt werden. Sollte sich kein Popup
öffnen kann die Erweiterung wie folgt aktiviert werden:

- Chrome: Aufruf von chrome://extensions/
- Edge: Aufruf von edge://extensions/
- Firefox: Aufruf von about:addons

Es kann sein, dass bei bestimmten Sicherheitseinstellungen die Browsererweiterung nicht automatisch installiert wird.
In diesen Fällen kann die Browsererweiterung über die Links in der README Datei nachträglich installiert werden.

**ACHTUNG:** Es müssen zwingend sowohl der lokale Teil als auch die Browsererweiterung installiert werden. Ohne den
jeweils anderen Teil kann das Lokale Bearbeiten nicht genutzt werden.

Updates für die auf dem PC installierte Komponente werden über ein erneutes Ausführen des Setups eingespielt. Die
Browsererweiterungen aktualisieren sich bei einer aktiven Internetverbindung automatisch.


### Versionen

Die Tabelle zeigt die jeweils letzte veröffentliche Version des Hosts. Sofern nicht anders angegeben wird mit allen
nachfolgenden Documents Versionen die identische Version des Hosts ausgeliefert.

| Documents Version | Host | API | Features | Chrome | Edge | Firefox |
| --- | --- | --- | --- | --- | --- | --- |
| 5.0d | 1.0.0 | 1 | Lokales bearbeiten von Dokumenten | 29+ | -- | 50-61 |
| 5.0e | 1.2.0 | 3 | Checkin & Checkout | 29+ | -- | 60-99 |
| 5.0f | 1.2.5 | 4 | Edge Support | 29+ | 80+ | 60-99 |
| 5.0g | 1.2.7 | 5 | Dateivergleich | 29+ | 80+ | 60-99 |
| 5.0g | 1.2.7 | 5 | Bugfix | 29+ | 80+ | 60-99 |
| 5.0h | 1.2.8 | 5 | Bugfix | 29+ | 80+ | 60-99 |
| 5.0h HF1 | 1.2.9 | 5 | Bugfix | 29+ | 80+ | 60-99 |
| 5.0h HF2 | 1.2.9 | 5 | Bugfix (Firefox > 99) | 29+ | 80+ | 60+ |
| 5.0i | 1.3.0 | 6 | Unterstützung von Cookies | 29+ | 80+ | 60+ |

Stand 30.07.2025 ist im jeweiligen Store für die Browser die folgende Version der Erweiterung veröffentlicht:

| Browser | Version |
| --- | --- |
| Chrome | 1.4.1 |
| Edge | 1.4.1 |
| Firefox | 1.4.1 |


## Hinweise

Das Tool kann nur mit einem laufenden Browser genutzt werden. Eine gleichzeitige Nutzung von z.B. Firefox und Chrome
ist nicht möglich. In diesem Fall funktioniert das Tool nur in dem Browser, in dem der Documents Login zuerst
durchgeführt wurde.


## Einstellungen


Abb. 1 - Einstellungen

Die Einstellungen befinden sich im Chrome und Edge als Icon neben der URL-Zeile, im Firefox in der URL-Zeile.

| Einstellung | Funktion |
| --- | --- |
| Lokaler Speicherort | Der Ordner, in dem die Dateien lokal abgelegt werden sollen. Wenn der Ordner schon vorhanden ist, muss dieser leer sein, ansonsten wird der Pfad nicht geändert. |
| Pfad automatisch erstellen | Wenn ein neuer Speicherort angegeben wird, welcher noch nicht vorhanden ist, wird dieser automatisch angelegt. |
| Logging | Aktiviert das Logging in der Browserkonsole. |
| Erlaubte Seiten | Eine Whitelist für alle URLs, auf denen die Browsererweiterung ausgeführt werden soll. Wenn nichts angegeben wird überprüft die Erweiterung auf jeder besuchten Webseite, ob es sich um eine Documents Oberfläche handelt. |
| Aktuelle URL hinzufügen | Fügt die URL der aktuellen Seite zur Whitelist hinzu. |
| Löschen | Löscht die komplette Whitelist. |
| Versionsinformationen | Informationen über die Installierte Browsererweiterung und die lokale Komponente. |


## Bearbeiten

Das lokale Bearbeiten von Dokumenten kann in der Dokumentenleiste auf zwei Wegen gestartet werden:

- Für einzelne Dokumente kann ein Rechtsklick auf das Dokument und anschließend die Auswahl Bearbeiten genutzt werden.
- Mehrere Dokumente können über die Selektion und den Button Bearbeiten in der Toolbar gleichzeitig bearbeitet werden.

Wenn das Dokument geöffnet ist, befindet sich unter den Registern ein `Bearbeiten`-Button.

Die Dokumente werden nach dem Klick heruntergeladen und direkt mit der Standardanwendung geöffnet.

Das Hochladen der bearbeiteten Dokumente wird mit dem Speichern der Mappe ausgeführt. Ein Abbruch der Mappenbearbeitung
führt dazu, dass die lokalen Dateien verworfen werden.


## Checkin/Checkout

Für den Checkin/Checkout mit lokalem Bearbeiten siehe HowTo [Checkin/Checkout](../files/checkin.html).