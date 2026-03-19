---
title: "Paketverwaltung"
source: "https://otris.software/documents/manuals/books/admin-center/package.html"
---

# Paketverwaltung

Über die Paketverwaltung können sowohl neue Pakete bzw. neue Versionen
in den Mandanten installiert werden, als auch eingesehen werden, welche Pakete
installiert sind, und wann diese installiert wurden.


![package-overview](assets/package-first.png)

Abb. 23 - AdminCenter Paketverwaltung


## Installation von Paketen

Die Installation erfolgt über die Aktion "Installation starten" in drei
Schritten:

1. Auswählen und hochladen der zu installierenden Paketdatei (ADP-Paket)
Abb. 24 - Hochladen eines Lösungs-Pakets
2. Konfigurationseinstellen vornehmen (optional, nur wenn in Paket definiert)
Abb. 25 - Installation konfigurieren
3. Übersicht über die zu installierenden Module
Abb. 26 - Übersicht über zu installierende Module
4. Starten des Installationsprozesses

Nach dem Start der Installation öffnet sich eine Fortschrittsanzeige, die den Verlauf
der Installation anzeigt. Diese Anzeige kann auch geschlossen werden.

Ob eine Installation aktuell läuft, zeigt die Aktion "Aktuelle Installation"
an. Diese öffnet die Fortschrittsanzeige. Ist die Installation abgeschlossen
heißt diese Aktion wieder "Installation starten."


![package-running-install](assets/package-running-install.png)

Abb. 27 - Laufende Installation


## Installationsberichte

Bereits installierte Pakete werden in der Paketliste der Paketverwaltung
angezeigt.


![package-start-install](assets/package-list.png)

Abb. 28 - Starten der Installation

Das Anklicken eines Eintrags öffnet den Bericht zur jeweiligen Installation und
zeigt die installierten Module und ausgeführten Schritte im Detail an.


![package-report](assets/package-report.png)

Abb. 29 - Laufende Installation

Zusätzliche Angaben, z.B. wann Pakete bzw. Module installiert wurden, finden
sich in der Versionshistorie:


![package-version-history](assets/package-version-history.png)

Abb. 30 - Versionhistorie


## Fehlerbehandlung bei der Installation

Tritt während der Installation ein Fehler auf, wird dies im Installationsbericht
angezeigt.


![package-error](assets/package-error.png)

Abb. 31 - Fehler bei Installation

- Installation fortsetzen: Setzt die Installation bei dem Paket fort, bei dem der Fehler aufgetreten ist, nachdem z.B. korrigierte Scripte eingespielt oder Korrekturen im Mandanten vorgenommen wurden.
- Installation abbrechen: Setzt den Status der Paketverwaltung zurück, so dass z.B. eine neue Installation gestartet werden kann. Hinweis: Bereits installierte Teil-Pakete und die bereits ausgeführten Installationsschritte des aktuellen Pakets werden nicht zurückgesetzt.

Eine nicht abgeschlossene und fehlerhafte Installation wird zudem in der
Paketverwaltung bei der Installationsaktion kenntlich gemacht. Das Öffnen
des Dialogs stellt dann den zuvor erläuterten Installationsbericht mit der
Fehlermeldung dar.


![package-running-error](assets/package-running-error.png)

Abb. 32 - Laufende Installation mit Fehlern