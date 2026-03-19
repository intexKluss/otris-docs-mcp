---
title: "Aktualisierung"
source: "https://otris.software/documents/manuals/books/app-doc/update.html"
---

# Aktualisierung

**Hinweis:** Die folgende Anleitung beschreibt die Aktualisierung der App für Documents 5. Die Aktualisierung der App von Documents 5 auf Documents OS ist [hier](update_os.html) beschrieben.

Das Fachkonzepts der App-Komponenten wird auf einen neuen Stand
gebracht, indem Sie die Mappentypen und Skripte der App aktualisieren.
Hierzu sind folgende drei Schritte erforderlich.


## Datensicherung durchführen

Führen Sie **in jedem Fall** eine
Datensicherung des Mandanten durch, bevor Sie mit der Aktualisierung der
App-Konfiguration beginnen.

Melden Sie sich hierzu **unter Angabe des
Mandanten** am DOCUMENTS-Manager an und rufen Sie den Eintrag
„*Datensicherung durchführen…*“ aus dem Menü „*Administration*“ auf
(Abbildung 8). Folgen Sie den Schritten des Dialogs und legen Sie nach
Abschluss der Datensicherung die Sicherungsdateien an einem geeigneten
Ort ab.


![Datensicherung durchführen](media/d5-datensicherung.png)

Abb. 86 - Datensicherung durchführen


## Aktuelle Komponenten der XML-Importieren

Als nächstes müssen die Komponenten aktualisiert werden. Diese werden
vollständig in der Datei `appConfig_Install.xml` bereitgestellt. Die
Datei liegt in dem Serververzeichnis unter
`"addon/mobileapp/appConfig_Install.xml"`

Zum Import der Datei rufen Sie den Eintrag *XML-Import* im Menü
*Servereinstellungen* auf (Abbildung 9). Im nachfolgenden Dialog wählen
Sie die Datei aus und starten den Import.


![XML-Import](media/d5-xml-import.png)

Abb. 87 - XML-Import


## Update starten

Zuletzt muss das Update-Skript ausgeführt werden. Öffnen Sie hierzu im
Documents-Manager die Skriptliste (Abbildung 10) und suchen Sie nach
folgenden Skript:

`appCall_UPGRADE`

Öffnen Sie mit einem Doppelklick den Skriptdialog und klicken Sie auf
`"Skript ausführen..."`.

Nach einiger Zeit sollte sich nun ein weiteres Fenster öffnen. Ein
Erfolgsfall bzw. mögliche Fehler sind unter *Script-Error* bzw.
*Return-Value* vermerkt.


![Aufruf des Skripts zur Aktualisierung](media/d5-app-call-upgrade.png)

Abb. 88 - Aufruf des Skripts zur Aktualisierung